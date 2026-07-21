import { useEffect, useRef } from "react";

type TrailPoint = { x: number; y: number; timestamp: number };

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>();
  const isFormAreaRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  // Track last movement + idle flag
  const lastMoveTimeRef = useRef<number>(Date.now());
  const isIdleRef = useRef<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const setCanvasSize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // mark active on movement
      lastMoveTimeRef.current = Date.now();

      // if coming back from idle, re-enable immediately
      if (isIdleRef.current) {
        isIdleRef.current = false;
        trailRef.current = [];
        lastPointRef.current = null;
        targetRef.current = { x: e.clientX, y: e.clientY };
      }

      const target = e.target as HTMLElement | null;
      const isForm = !!target?.closest("form");
      isFormAreaRef.current = isForm;

      // If we enter form area, reset trail so it doesn't "dump" later
      if (isForm) {
        trailRef.current = [];
        lastPointRef.current = null;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // ====== TUNING ======
    const RADIUS = 50; // 15% smaller (88 -> 75)
    const MAX_AGE_MS = 1000; // 2–3 sec visibility (keep)
    const FOLLOW_EASE = 0.14; // smooth follow
    const STEP_PX = 10; // interpolation step to avoid "dot-dot" gaps
    const MAX_POINTS = 100; // cap for perf

    // ✅ Idle fade behavior:
    // After mouse stops, start fading out smoothly.
    // Fully invisible by ~3.5s total.
    const IDLE_TOTAL_MS = 3000; // fully gone by this time
    const FADE_OUT_MS = 900; // last 0.9s is smooth fade (adjust if you want)
    // ====================

    const addInterpolatedPoints = (x: number, y: number, now: number) => {
      const last = lastPointRef.current;

      if (!last) {
        trailRef.current.push({ x, y, timestamp: now });
        lastPointRef.current = { x, y };
        return;
      }

      const dx = x - last.x;
      const dy = y - last.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Add multiple points along the movement line so it stays continuous
      const steps = Math.max(1, Math.floor(dist / STEP_PX));

      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        trailRef.current.push({
          x: last.x + dx * t,
          y: last.y + dy * t,
          timestamp: now,
        });
      }

      lastPointRef.current = { x, y };

      // Hard cap to avoid too many points
      if (trailRef.current.length > MAX_POINTS) {
        trailRef.current.splice(0, trailRef.current.length - MAX_POINTS);
      }
    };

    const render = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const now = Date.now();

      // Hide glow on form area (your requirement)
      if (isFormAreaRef.current) {
        animationRef.current = requestAnimationFrame(render);
        return;
      }

      // If idle, we still animate fade-out smoothly (not hard cut)
      const idleFor = now - lastMoveTimeRef.current;

      // fadeMultiplier: 1 (fully visible) -> 0 (fully invisible)
      let fadeMultiplier = 1;

      if (idleFor >= IDLE_TOTAL_MS) {
        // fully invisible
        fadeMultiplier = 0;
        isIdleRef.current = true;
        trailRef.current = [];
        lastPointRef.current = null;

        // keep looping but draw nothing
        animationRef.current = requestAnimationFrame(render);
        return;
      } else if (idleFor > IDLE_TOTAL_MS - FADE_OUT_MS) {
        // start smooth fade near the end
        const t = (idleFor - (IDLE_TOTAL_MS - FADE_OUT_MS)) / FADE_OUT_MS; // 0 -> 1
        fadeMultiplier = 1 - t;
      } else {
        // before fade window, normal visibility
        fadeMultiplier = 1;
      }

      // Smooth follow only when we are not marked idle
      if (!isIdleRef.current) {
        targetRef.current.x += (mouseRef.current.x - targetRef.current.x) * FOLLOW_EASE;
        targetRef.current.y += (mouseRef.current.y - targetRef.current.y) * FOLLOW_EASE;

        // Add continuous points while active
        addInterpolatedPoints(targetRef.current.x, targetRef.current.y, now);
      }

      // Remove old points (2–3 sec)
      trailRef.current = trailRef.current.filter((p) => now - p.timestamp < MAX_AGE_MS);

      // Draw: older points weaker, newer stronger (multiplied by fadeMultiplier)
      const len = trailRef.current.length;
      for (let i = 0; i < len; i++) {
        const p = trailRef.current[i];
        const age = now - p.timestamp;
        const ageFactor = 1 - age / MAX_AGE_MS; // 1 -> 0
        const tailFactor = i / len; // 0 -> 1 (newer points toward end)
        const opacity = ageFactor * tailFactor * 0.42 * fadeMultiplier;

        if (opacity <= 0.001) continue;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, RADIUS);
        g.addColorStop(0.05, `rgba(168, 85, 247, ${opacity * 0.25})`); // purple
        g.addColorStop(0.47, `rgba(59, 115, 225, ${opacity * 0.10})`); // blue
        g.addColorStop(1, `rgba(98, 55, 107, 0)`);


        ctx.fillStyle = g;
        ctx.fillRect(p.x - RADIUS, p.y - RADIUS, RADIUS * 2, RADIUS * 2);
      }

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCanvasSize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}