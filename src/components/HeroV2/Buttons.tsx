import { ArrowRight } from "lucide-react";

export default function Buttons() {
  return (
    <div
      className="
        mt-6
        sm:mt-8
        md:mt-10
        lg:mt-12

        flex
        w-full
        flex-col
        items-center
        justify-center

        gap-4
        sm:gap-5
        md:flex-row
        md:gap-6
        lg:gap-8
      "
    >
      {/* Primary */}

      <button
        className="
          group

          flex
          w-[88%]
          max-w-[320px]

          items-center
          justify-center

          gap-3

          rounded-full
          bg-black

          py-4
          px-8

          text-[16px]
          font-semibold
          text-white

          shadow-lg

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-xl
          active:scale-95

          sm:w-[280px]
          sm:text-[17px]

          md:w-[260px]
          md:text-[18px]

          lg:w-[290px]
          lg:py-5
          lg:px-10
          lg:text-[20px]
        "
      >
        Explore Systems

        <ArrowRight
          className="
            h-5
            w-5

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
          w-[88%]
          max-w-[320px]

          items-center
          justify-center

          gap-3

          rounded-full
          border-2
          border-black
          bg-white

          py-4
          px-8

          text-[16px]
          font-semibold
          text-black

          transition-all
          duration-300

          hover:-translate-y-1
          hover:bg-black
          hover:text-white
          hover:shadow-xl

          active:scale-95

          sm:w-[280px]
          sm:text-[17px]

          md:w-[260px]
          md:text-[18px]

          lg:w-[290px]
          lg:py-5
          lg:px-10
          lg:text-[20px]
        "
      >
        Start a Project

        <ArrowRight
          className="
            h-5
            w-5

            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        />
      </button>
    </div>
  );
}