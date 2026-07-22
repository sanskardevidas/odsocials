import { ArrowRight } from "lucide-react";

export default function Buttons() {
  return (
    <div className="mt-14 flex items-center justify-center gap-8">

      {/* Primary */}
      <button
        className="
          group
          flex
          h-[68px]
          items-center
          gap-4
          rounded-full
          bg-black
          px-10
          text-[20px]
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-[1.03]
          active:scale-95
        "
      >
        Explore Systems

        <ArrowRight
          size={22}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>

      {/* Secondary */}
      <button
        className="
          group
          flex
          h-[68px]
          items-center
          gap-4
          rounded-full
          border-2
          border-black
          bg-white
          px-10
          text-[20px]
          font-semibold
          text-black
          transition-all
          duration-300
          hover:bg-black
          hover:text-white
          active:scale-95
        "
      >
        Start a Project

        <ArrowRight
          size={22}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>
    </div>
  );
}