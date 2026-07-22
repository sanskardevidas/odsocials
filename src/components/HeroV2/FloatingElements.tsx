import {
  Instagram,
  Facebook,
  Camera,
  Monitor,
  Cpu,
  BarChart3,
} from "lucide-react";

const common =
  "absolute pointer-events-none select-none text-black/70 transition-all duration-500";

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden">

      {/* Instagram */}

      <div
        className={`${common}

          left-[8%] top-[12%]

          sm:left-[10%] sm:top-[14%]

          md:left-[7%] md:top-[16%]

          lg:left-[8%] lg:top-[17%]
        `}
      >
        <Instagram
          strokeWidth={1.6}
          className="
            w-9 h-9
            sm:w-11 sm:h-11
            md:w-14 md:h-14
            lg:w-[70px] lg:h-[70px]
          "
        />
      </div>

      {/* Camera */}

      <div
        className={`${common}

          left-[6%] top-[68%]

          sm:left-[7%] sm:top-[65%]

          md:left-[5%] md:top-[54%]

          lg:left-[5%] lg:top-[45%]
        `}
      >
        <Camera
          strokeWidth={1.6}
          className="
            w-12 h-12
            sm:w-14 sm:h-14
            md:w-[72px] md:h-[72px]
            lg:w-[92px] lg:h-[92px]
          "
        />
      </div>

      {/* Monitor */}

      <div
        className={`${common}

          left-[8%] bottom-[8%]

          sm:left-[9%] sm:bottom-[8%]

          md:left-[10%] md:bottom-[8%]

          lg:left-[10%] lg:bottom-[8%]
        `}
      >
        <Monitor
          strokeWidth={1.6}
          className="
            w-12 h-12
            sm:w-14 sm:h-14
            md:w-[72px] md:h-[72px]
            lg:w-[100px] lg:h-[100px]
          "
        />
      </div>

      {/* Facebook */}

      <div
        className={`${common}

          right-[8%] top-[66%]

          sm:right-[8%] sm:top-[60%]

          md:right-[5%] md:top-[50%]

          lg:right-[7%] lg:top-[42%]
        `}
      >
        <Facebook
          strokeWidth={1.6}
          className="
            w-9 h-9
            sm:w-11 sm:h-11
            md:w-[52px] md:h-[52px]
            lg:w-[76px] lg:h-[76px]
          "
        />
      </div>

      {/* CPU */}

      <div
        className={`${common}

          right-[8%] bottom-[24%]

          sm:right-[9%] sm:bottom-[23%]

          md:right-[8%] md:bottom-[22%]

          lg:right-[9%] lg:bottom-[24%]
        `}
      >
        <Cpu
          strokeWidth={1.6}
          className="
            w-11 h-11
            sm:w-13 sm:h-13
            md:w-[64px] md:h-[64px]
            lg:w-[86px] lg:h-[86px]
          "
        />
      </div>

      {/* Analytics */}

      <div
        className={`${common}

          right-[16%] bottom-[8%]

          sm:right-[16%] sm:bottom-[8%]

          md:right-[15%] md:bottom-[8%]

          lg:right-[18%] lg:bottom-[8%]
        `}
      >
        <BarChart3
          strokeWidth={1.6}
          className="
            w-9 h-9
            sm:w-10 sm:h-10
            md:w-[54px] md:h-[54px]
            lg:w-[75px] lg:h-[75px]
          "
        />
      </div>

      {/* Decorative Dots */}

      <span className="hidden sm:block absolute left-[18%] top-[15%] h-2 w-2 rounded-full bg-black/40" />

      <span className="hidden lg:block absolute left-[10%] top-[42%] h-1.5 w-1.5 rounded-full bg-black/40" />

      <span className="absolute bottom-[14%] left-[28%] h-1.5 w-1.5 rounded-full bg-black/40" />

      <span className="hidden sm:block absolute right-[15%] top-[24%] h-2 w-2 rounded-full bg-black/40" />

      <span className="absolute bottom-[14%] right-[28%] h-1.5 w-1.5 rounded-full bg-black/40" />

    </div>
  );
}