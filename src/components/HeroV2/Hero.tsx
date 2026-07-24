import { useRef } from "react";
import Background from "./Background";
import Navbar from "./Navbar";
import HeroText from "./HeroText";
import Buttons from "./Buttons";
import FloatingElements from "./FloatingElements/FloatingElements";
import HeroDrone from "./Drone";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white

        min-h-screen

        pt-24
        sm:pt-28
        md:pt-32
        lg:pt-36

        pb-12
        sm:pb-16
        lg:pb-20
      "
    >
      {/* Background */}
      <Background />

      {/* Navigation */}
      <Navbar />

      {/* Decorative Icons */}
      <FloatingElements />

      {/* Drone */}
      <HeroDrone targetRef={headingRef} />

      {/* Hero Content */}
      <div
        className="
          relative
          z-20

          mx-auto

          flex
          min-h-[calc(100vh-96px)]
          w-full
          max-w-[1700px]

          flex-col
          items-center
          justify-center

          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            flex
            flex-col
            items-center

            gap-8
            sm:gap-10
            lg:gap-12
          "
        >
          <HeroText ref={headingRef} />

          <Buttons />
        </div>
      </div>
    </section>
  );
}