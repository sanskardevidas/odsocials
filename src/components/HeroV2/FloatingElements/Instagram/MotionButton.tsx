import { forwardRef, useRef } from "react";
import { motion } from "motion/react";
import { Instagram } from "lucide-react";

import InstagramReveal, {
  type InstagramRevealHandle,
} from "./InstagramReveal";

const MotionButton = forwardRef<InstagramRevealHandle>(
  function MotionButton(_, forwardedRef) {
    const revealRef = useRef<InstagramRevealHandle>(null);

    return (
      <div className="relative inline-flex items-center">
        <motion.button
          type="button"
          onMouseEnter={() => {
            if (window.matchMedia("(hover: hover)").matches) {
              revealRef.current?.open();
            }
          }}
          onMouseLeave={() => {
            if (window.matchMedia("(hover: hover)").matches) {
              revealRef.current?.close();
            }
          }}
          onFocus={() => revealRef.current?.open()}
          onBlur={() => revealRef.current?.close()}
          whileHover={{
            scale: 1.12,
            rotate: -7,
          }}
          whileTap={{
            scale: 0.94,
          }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 18,
          }}
          className="
            relative
            z-20
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
          aria-label="Reveal Instagram reel"
        >
          <Instagram className="h-6 w-6 text-black" />
        </motion.button>

        <InstagramReveal
          ref={revealRef}
          videoSrc="/reels/instagram-reel.mp4"
          className="
            absolute
            left-full
            top-1/2
            ml-6
            -translate-y-1/2
            z-10
          "
        />
      </div>
    );
  }
);

MotionButton.displayName = "MotionButton";

export default MotionButton;