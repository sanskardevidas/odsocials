import {
  Facebook,
  Camera,
  Monitor,
  Cpu,
  BarChart3,
} from "lucide-react";
import MotionButton from "./Instagram/MotionButton";

type FloatingElementsProps = {
  onInstagramEnter?: () => void;
  onInstagramLeave?: () => void;
};
const common =
  "absolute select-none text-black/70 transition-all duration-500";

export default function FloatingElements({
  onInstagramEnter,
  onInstagramLeave,
}: FloatingElementsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden z-10">

      {/* Instagram */}
      <div
        className={`${common}
          pointer-events-auto
          left-[8%] top-[12%]
          sm:left-[9%] sm:top-[13%]
          md:left-[7%] md:top-[15%]
          lg:left-[8%] lg:top-[18%]
        `}
      >
        <MotionButton />
      </div>

      {/* Camera */}

      <div
        className={`${common}
          left-[6%] top-[33%]

          sm:left-[7%] sm:top-[38%]

          md:left-[5%] md:top-[48%]

          lg:left-[5%] lg:top-[46%]
        `}
      >
        <Camera
          strokeWidth={1.6}
          className="
            w-12 h-12
            sm:w-14 sm:h-14
            md:w-[70px] md:h-[70px]
            lg:w-[92px] lg:h-[92px]
          "
        />
      </div>

      {/* Monitor */}

      <div
        className={`${common}
          left-[8%] bottom-[9%]

          sm:left-[9%] sm:bottom-[10%]

          md:left-[9%] md:bottom-[15%]

          lg:left-[10%] lg:bottom-[18%]
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
          right-[8%] top-[24%]

          sm:right-[9%] sm:top-[26%]

          md:right-[6%] md:top-[42%]

          lg:right-[7%] lg:top-[44%]
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
          right-[8%] bottom-[21%]

          sm:right-[8%] sm:bottom-[22%]

          md:right-[7%] md:bottom-[23%]

          lg:right-[9%] lg:bottom-[28%]
        `}
      >
        <Cpu
          strokeWidth={1.6}
          className="
            w-11 h-11
            sm:w-14 sm:h-14
            md:w-[64px] md:h-[64px]
            lg:w-[86px] lg:h-[86px]
          "
        />
      </div>

      {/* Analytics */}

      <div
        className={`${common}
          right-[16%] bottom-[9%]

          sm:right-[17%] sm:bottom-[10%]

          md:right-[16%] md:bottom-[15%]

          lg:right-[18%] lg:bottom-[18%]
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

      <span className="absolute bottom-[18%] left-[28%] h-1.5 w-1.5 rounded-full bg-black/40" />

      <span className="hidden sm:block absolute right-[15%] top-[24%] h-2 w-2 rounded-full bg-black/40" />

      <span className="absolute bottom-[18%] right-[28%] h-1.5 w-1.5 rounded-full bg-black/40" />
    </div>
  );
}