import {
  Instagram,
  Facebook,
  Camera,
  Monitor,
  Cpu,
  BarChart3,
} from "lucide-react";

const commonClass =
  "absolute text-black pointer-events-none select-none";

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden">

      {/* Instagram — top left */}
      <div className={`${commonClass} left-[8%] top-[18%]`}>
        <Instagram strokeWidth={1.7} size={70} />
      </div>

      {/* Camera — middle left */}
      <div className={`${commonClass} left-[5%] top-[46%]`}>
        <Camera strokeWidth={1.6} size={92} />
      </div>

      {/* Website — bottom left */}
      <div className={`${commonClass} bottom-[10%] left-[10%]`}>
        <Monitor strokeWidth={1.6} size={100} />
      </div>

      {/* Facebook — middle right */}
      <div className={`${commonClass} right-[7%] top-[43%]`}>
        <Facebook strokeWidth={1.7} size={76} />
      </div>

      {/* AI chip — lower right */}
      <div className={`${commonClass} bottom-[25%] right-[9%]`}>
        <Cpu strokeWidth={1.6} size={86} />
      </div>

      {/* Analytics — bottom right */}
      <div className={`${commonClass} bottom-[8%] right-[18%]`}>
        <BarChart3 strokeWidth={1.6} size={75} />
      </div>

      {/* Small black dots */}
      <span className="absolute left-[17%] top-[15%] h-2 w-2 rounded-full bg-black" />
      <span className="absolute left-[13%] top-[38%] h-1.5 w-1.5 rounded-full bg-black" />
      <span className="absolute bottom-[17%] left-[28%] h-2 w-2 rounded-full bg-black" />
      <span className="absolute right-[15%] top-[22%] h-2 w-2 rounded-full bg-black" />
      <span className="absolute bottom-[16%] right-[28%] h-1.5 w-1.5 rounded-full bg-black" />

    </div>
  );
}