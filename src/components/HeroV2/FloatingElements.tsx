import {
  Facebook,
  Camera,
  Monitor,
  Cpu,
  BarChart3,
  Instagram,
} from "lucide-react";

type FloatingElementsProps = {
  onInstagramEnter?: () => void;
  onInstagramLeave?: () => void;
};

const common = "absolute select-none text-black/70 transition-all duration-500";

export default function FloatingElements({
  onInstagramEnter,
  onInstagramLeave,
}: FloatingElementsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* Instagram */}
      <div
        className={`${common}
          pointer-events-auto

          left-6
          top-28

          md:left-[6%]
          md:top-[14%]

          lg:left-[8%]
          lg:top-[18%]
        `}
      >
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-black/10
            bg-white/80
            shadow-[0_12px_35px_rgba(0,0,0,0.12)]
            backdrop-blur-md
          "
        >
          <Instagram className="h-6 w-6 text-black" />
        </div>
      </div>

      {/* Camera */}
      <div
        className={`${common}

          left-4
          top-[46%]

          sm:left-5
          sm:top-[43%]

          md:left-[4%]
          md:top-[48%]

          lg:left-[5%]
          lg:top-[46%]
        `}
      >
        <Camera
          strokeWidth={1.6}
          className="
            w-10 h-10
            sm:w-12 sm:h-12
            md:w-[68px] md:h-[68px]
            lg:w-[92px] lg:h-[92px]
          "
        />
      </div>

      {/* Monitor */}
      <div
        className={`${common}

          left-5
          bottom-16

          md:left-[8%]
          md:bottom-[15%]

          lg:left-[10%]
          lg:bottom-[18%]
        `}
      >
        <Monitor
          strokeWidth={1.6}
          className="
            w-12 h-12
            md:w-[72px] md:h-[72px]
            lg:w-[96px] lg:h-[96px]
          "
        />
      </div>

      {/* Facebook */}
      <div
        className={`${common}

          right-4
          top-[22%]

          sm:right-5
          sm:top-[20%]

          md:right-[6%]
          md:top-[42%]

          lg:right-[7%]
          lg:top-[44%]
        `}
      >
        <Facebook
          strokeWidth={1.6}
          className="
            w-9 h-9
            sm:w-10 sm:h-10
            md:w-[52px] md:h-[52px]
            lg:w-[74px] lg:h-[74px]
          "
        />
      </div>

      {/* CPU */}
      <div
        className={`${common}

          right-5
          bottom-12

          md:right-[7%]
          md:bottom-[23%]

          lg:right-[9%]
          lg:bottom-[28%]
        `}
      >
        <Cpu
          strokeWidth={1.6}
          className="
            w-11 h-11
            md:w-[62px] md:h-[62px]
            lg:w-[86px] lg:h-[86px]
          "
        />
      </div>

      {/* Analytics */}
      <div
        className={`${common}
          hidden md:block

          md:right-[16%]
          md:bottom-[15%]

          lg:right-[18%]
          lg:bottom-[18%]
        `}
      >
        <BarChart3
          strokeWidth={1.6}
          className="
            md:w-[54px] md:h-[54px]
            lg:w-[74px] lg:h-[74px]
          "
        />
      </div>

      {/* Decorative Dots */}
      <span className="hidden md:block absolute left-[18%] top-[15%] h-2 w-2 rounded-full bg-black/40" />
      <span className="hidden lg:block absolute left-[10%] top-[42%] h-1.5 w-1.5 rounded-full bg-black/40" />
      <span className="hidden md:block absolute bottom-[18%] left-[28%] h-1.5 w-1.5 rounded-full bg-black/40" />
      <span className="hidden md:block absolute right-[15%] top-[24%] h-2 w-2 rounded-full bg-black/40" />
      <span className="hidden md:block absolute bottom-[18%] right-[28%] h-1.5 w-1.5 rounded-full bg-black/40" />
    </div>
  );
}
