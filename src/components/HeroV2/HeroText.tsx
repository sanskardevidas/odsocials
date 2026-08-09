import { forwardRef, useEffect, useState } from "react";
import { getShadow } from "./MouseShadow";

function buildShadow(x: number, y: number) {
  const shadows = [];

  for (let i = 1; i <= 30; i++) {
    shadows.push(`${(x / 30) * i}px ${(y / 30) * i}px 0 #000`);
  }

  return shadows.join(",");
}

const HeroText = forwardRef<HTMLHeadingElement, Record<string, never>>(
  (_, ref) => {
    const [shadow, setShadow] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkScreen = () => {
        setIsMobile(window.innerWidth < 640);
      };

      checkScreen();

      window.addEventListener("resize", checkScreen);

      return () => window.removeEventListener("resize", checkScreen);
    }, []);

    useEffect(() => {
      let animationFrame = 0;

      const handleMove = (e: MouseEvent) => {
        const target = getShadow(e.clientX, e.clientY);

        cancelAnimationFrame(animationFrame);

        animationFrame = requestAnimationFrame(() => {
          setShadow((prev) => ({
            x: prev.x + (target.x - prev.x) * 0.18,
            y: prev.y + (target.y - prev.y) * 0.18,
          }));
        });
      };

      window.addEventListener("mousemove", handleMove);

      return () => {
        cancelAnimationFrame(animationFrame);
        window.removeEventListener("mousemove", handleMove);
      };
    }, []);

    return (
      <div
        className="
          mx-auto

          flex
          flex-col
          items-center

          w-full
          max-w-[1700px]

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-14

          text-center
          select-none
        "
      >
        <h1
          ref={ref}
          className="
            font-black
            uppercase

            leading-[0.92]
            sm:leading-[0.88]
            md:leading-[0.84]
            lg:leading-[0.82]

            tracking-[-0.04em]
            lg:tracking-[-0.05em]
          "
        >
          <span
            className="
              block
              whitespace-nowrap

              text-[48px]
              xs:text-[56px]
              sm:text-[78px]
              md:text-[92px]
              lg:text-[118px]
              xl:text-[150px]
              2xl:text-[185px]

              text-white
            "
            style={{
              WebkitTextStroke: isMobile ? "2.5px #000" : "4px #000",
              textShadow: buildShadow(shadow.x, shadow.y),
            }}
          >
            YOUR BRAND
          </span>

          <span
            className="
              block
              whitespace-nowrap

              text-[48px]
              xs:text-[56px]
              sm:text-[78px]
              md:text-[92px]
              lg:text-[118px]
              xl:text-[150px]
              2xl:text-[185px]

              text-white
            "
            style={{
              WebkitTextStroke: isMobile ? "2.5px #000" : "4px #000",
              textShadow: buildShadow(shadow.x, shadow.y),
            }}
          >
            OUR CREATIVITY
          </span>
        </h1>

        <p
          className="
            mt-6
            sm:mt-8
            lg:mt-10

            whitespace-nowrap

            text-[18px]
            sm:text-[24px]
            md:text-[30px]
            lg:text-[38px]
            xl:text-[46px]
            2xl:text-[52px]

            font-extrabold
            uppercase

            tracking-[-0.02em]

            text-white
          "
          style={{
            WebkitTextStroke: isMobile ? "1px #000" : "2px #000",
          }}
        >
          OPTIMISED BY DESIGN
        </p>
      </div>
    );
  },
);

HeroText.displayName = "HeroText";

export default HeroText;
