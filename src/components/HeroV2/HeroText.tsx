import {
  forwardRef,
  useEffect,
  useState,
} from "react";
import { getShadow } from "./MouseShadow";
console.log("THIS IS HEROTEXT");
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

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const target = getShadow(e.clientX, e.clientY);

      setShadow((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.15,
        y: prev.y + (target.y - prev.y) * 0.15,
      }));
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="text-center select-none">
      <h1
        ref={ref}
        className="
          leading-[0.82]
          font-black
          uppercase
          tracking-[-0.05em]
        "
      >
        <span
          className="
            block
            text-[110px]
            xl:text-[150px]
            2xl:text-[190px]
            text-white
          "
          style={{
            WebkitTextStroke: "4px #000",
            textShadow: buildShadow(shadow.x, shadow.y),
          }}
        >
          YOUR BRAND.
        </span>

        <span
          className="
            block
            text-[110px]
            xl:text-[150px]
            2xl:text-[190px]
            text-white
          "
          style={{
            WebkitTextStroke: "4px #000",
            textShadow: buildShadow(shadow.x, shadow.y),
          }}
        >
          OUR CREATIVITY
        </span>
      </h1>

      <p
        className="
          mt-8
          text-[52px]
          font-bold
          uppercase
          tracking-[-0.03em]
          text-white
        "
        style={{
          WebkitTextStroke: "2px #000",
        }}
      >
        OPTIMISED BY DESIGN
      </p>
    </div>
  );
});

HeroText.displayName = "HeroText";

export default HeroText;