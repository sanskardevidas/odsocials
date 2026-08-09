import { type RefObject, useEffect, useRef } from "react";

type DroneProps = {
  targetRef: RefObject<HTMLHeadingElement | null>;
};

export default function Drone({ targetRef }: DroneProps) {
  const droneRef = useRef<HTMLDivElement>(null);
  const rotateRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (
      !droneRef.current ||
      !rotateRef.current ||
      !imgRef.current ||
      !targetRef.current
    ) {
      return;
    }

    let animationId = 0;
    let progress = 0;

    const width = window.innerWidth;

    const config =
      width < 640
        ? {
            size: 130,
            startX: -90,
            endOffset: 180,
            startY: 210,
            arc: 100,
            speed: 0.008,
            maxTilt: 22,
          }
        : width < 1024
          ? {
              size: 180,
              startX: -170,
              endOffset: 180,
              startY: 240,
              arc: 95,
              speed: 0.01,
              maxTilt: 28,
            }
          : {
              size: 260,
              startX: -220,
              endOffset: 260,
              startY: 280,
              arc: 150,
              speed: 0.008,
              maxTilt: 35,
            };

    imgRef.current.style.width = `${config.size}px`;

    const endX =
      width < 640
        ? window.innerWidth * 0.72
        : window.innerWidth - config.endOffset;

    const animate = () => {
      progress += config.speed;

      // Stop exactly at the end
      if (progress > 1) progress = 1;

      // Smooth easing
      const eased = 0.5 - Math.cos(progress * Math.PI) / 2;

      const x = config.startX + (endX - config.startX) * eased;

      const endDrop = width < 640 ? 140 : width < 1024 ? 90 : 60;
      const y =
        config.startY -
        Math.sin(eased * Math.PI) * config.arc +
        eased * endDrop;

      droneRef.current!.style.left = `${x}px`;
      droneRef.current!.style.top = `${y}px`;

      // Heading target

      const headingRect = targetRef.current!.getBoundingClientRect();

      const targetX = headingRect.left + headingRect.width * 0.82;

      const targetY = headingRect.top + headingRect.height * 0.48;

      // Drone position

      const droneRect = rotateRef.current!.getBoundingClientRect();

      const droneX = droneRect.left + droneRect.width / 2;

      const droneY = droneRect.top + droneRect.height / 2;

      const dx = targetX - droneX;
      const dy = targetY - droneY;

      // Previous position

      const prevProgress = Math.max(progress - config.speed, 0);

      const prevEase = 0.5 - Math.cos(prevProgress * Math.PI) / 2;

      const prevX = config.startX + (endX - config.startX) * prevEase;

      const prevY = config.startY - Math.sin(prevEase * Math.PI) * config.arc;

      const flightAngle = Math.atan2(y - prevY, x - prevX) * (180 / Math.PI);

      const headingAngle = Math.atan2(dy, dx) * (180 / Math.PI);

      let diff = headingAngle - flightAngle;

      while (diff > 180) diff -= 360;
      while (diff < -180) diff += 360;

      let finalAngle = flightAngle + diff * 0.45;

      finalAngle = Math.max(
        -config.maxTilt,
        Math.min(config.maxTilt, finalAngle),
      );

      rotateRef.current!.style.transform = `
        translate(-50%, -50%)
        rotate(${finalAngle + 45}deg)
      `;

      // Continue only until finished
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [targetRef]);

  return (
    <div
      ref={droneRef}
      className="absolute z-20 pointer-events-none"
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
          ref={imgRef}
          src="/drone.png"
          alt=""
          draggable={false}
          className="block select-none"
          style={{
            width: "260px",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
