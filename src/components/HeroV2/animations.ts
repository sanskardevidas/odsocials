import gsap from "gsap";

export function animateDrone(drone: HTMLDivElement) {
  gsap.set(drone, {
    x: -2000,
    y: -240,
    rotation: -20,
    scale: 0.75,
    opacity: 0,
  });

  const tl = gsap.timeline();

  tl.to(drone, {
    duration: 4.2,
    x: 0,
    y: 0,
    rotation: 8,
    scale: 1,
    opacity: 1,
    ease: "power3.out",
  });

  tl.to(
    drone,
    {
      y: "-=12",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    },
    "-=0.2"
  );
}