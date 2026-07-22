import { useRef } from "react";

import Background from "./Background";
import Navbar from "./Navbar";
import HeroText from "./HeroText";
import Buttons from "./Buttons";
import FloatingElements from "./FloatingElements";
import HeroDrone from "./Drone";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  console.log("Hero headingRef:", headingRef);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <Background />

      <Navbar />

      <FloatingElements />

      <HeroDrone targetRef={headingRef} />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <HeroText ref={headingRef} />

        <Buttons />
      </div>
    </section>
  );
}