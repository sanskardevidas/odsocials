import { type RefObject, useEffect, useRef } from "react";

type DroneProps = {
  targetRef: RefObject<HTMLHeadingElement | null>;
};

export default function Drone({ targetRef }: DroneProps) {
  const droneRef = useRef<HTMLDivElement>(null);
  const rotateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!droneRef.current || !rotateRef.current || !targetRef.current) return;

    let progress = 0;
    let animationId = 0;

    const animate = () => {
      progress += 0.003;

      if (progress > 1) progress = 1;

      // ----------------------------
      // Flight Path (UNCHANGED)
      // ----------------------------
      const startX = -400;
      const endX = window.innerWidth - 250;

      const x = startX + (endX - startX) * progress;
      const y = 220 - Math.sin(progress * Math.PI) * 180;

      droneRef.current!.style.left = `${x}px`;
      droneRef.current!.style.top = `${y}px`;

      // ----------------------------
      // Heading Position
      // ----------------------------
      const headingRect = targetRef.current!.getBoundingClientRect();

      const headingX = headingRect.right - 60;
      const headingY = headingRect.top + headingRect.height / 2;

      // ----------------------------
      // Drone Position
      // ----------------------------
      const droneRect = droneRef.current!.getBoundingClientRect();

      const droneX = droneRect.left;
      const droneY = droneRect.top;

      const dx = headingX - droneX;
      const dy = headingY - droneY;
      
      const prevProgress = Math.max(progress - 0.003, 0);
      const prevX = startX + (endX - startX) * prevProgress;
      const prevY = 220 - Math.sin(prevProgress * Math.PI) * 180;
      const flightAngle = Math.atan2(y - prevY, x - prevX) * (180 / Math.PI);
      const headingAngle = Math.atan2(dy, dx) * (180 / Math.PI);
      
      let diff = headingAngle - flightAngle;
      while (diff > 180) diff -= 360;
      while (diff < -180) diff += 360;
      let finalAngle = flightAngle + diff * 0.25;
      
      if (progress > 0.9) {
        const t = (progress - 0.9) / 0.1;
        finalAngle = finalAngle * (1 - t) + 0 * t;
      }
      rotateRef.current!.style.transform = `translate(-50%, -50%) rotate(${finalAngle + 45}deg)`;
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [targetRef]);

  return (
    <div
      ref={droneRef}
      className="absolute"
      style={{
        left: 0,
        top: 0,
      }}
    >
      <div
        ref={rotateRef}
        style={{
          transform: "translate(-50%, -50%)",
          transformOrigin: "50% 50%",
        }}
      >
        <img
          src="/drone.png"
          alt=""
          draggable={false}
          className="block select-none"
          style={{
            width: "260px",
            height: "auto",
            minWidth: "260px",
            maxWidth: "260px",
          }}
        />
      </div>
    </div>
  );
}