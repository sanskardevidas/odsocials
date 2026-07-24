import { AnimatePresence, motion } from "motion/react";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export type InstagramRevealHandle = {
  open: () => void;
  close: () => void;
};

type InstagramRevealProps = {
  videoSrc?: string;
  mobileDelay?: number;
  mobilePlayDuration?: number;
  className?: string;
};

const InstagramReveal = forwardRef<InstagramRevealHandle, InstagramRevealProps>(
  function InstagramReveal(
    {
      videoSrc = "/reels/instagram-reel.mp4",
      mobileDelay = 2000,
      mobilePlayDuration = 6000,
      className = "",
    },
    forwardedRef,
  ) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const openTimeoutRef = useRef<number | null>(null);
    const closeTimeoutRef = useRef<number | null>(null);
    const videoPlayTimeoutRef = useRef<number | null>(null);
    const hasPlayedOnMobileRef = useRef(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [heroVisible, setHeroVisible] = useState(false);

    const clearTimers = useCallback(() => {
      if (openTimeoutRef.current !== null) {
        window.clearTimeout(openTimeoutRef.current);
        openTimeoutRef.current = null;
      }

      if (closeTimeoutRef.current !== null) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }

      if (videoPlayTimeoutRef.current !== null) {
        window.clearTimeout(videoPlayTimeoutRef.current);
        videoPlayTimeoutRef.current = null;
      }
    }, []);

    const playVideo = useCallback(async () => {
      const video = videoRef.current;

      if (!video) return;

      try {
        video.currentTime = 0;
        await video.play();
      } catch {
        // Autoplay can still be blocked by some browsers.
      }
    }, []);

    const pauseVideo = useCallback(() => {
      const video = videoRef.current;

      if (!video) return;

      video.pause();
      video.currentTime = 0;
    }, []);

    const openReveal = useCallback(() => {
      clearTimers();
      setIsOpen(true);

      videoPlayTimeoutRef.current = window.setTimeout(() => {
        void playVideo();
        videoPlayTimeoutRef.current = null;
      }, 200);
    }, [clearTimers, playVideo]);

    const closeReveal = useCallback(() => {
      clearTimers();
      pauseVideo();
      setIsOpen(false);
    }, [clearTimers, pauseVideo]);

    useImperativeHandle(
      forwardedRef,
      () => ({
        open: openReveal,
        close: closeReveal,
      }),
      [openReveal, closeReveal],
    );

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 767px)");

      const updateDevice = () => {
        setIsMobile(mediaQuery.matches);
      };

      updateDevice();
      mediaQuery.addEventListener("change", updateDevice);

      return () => {
        mediaQuery.removeEventListener("change", updateDevice);
      };
    }, []);

    useEffect(() => {
      const container = containerRef.current;

      if (!container) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setHeroVisible(entry.isIntersecting);
        },
        {
          threshold: 0.6,
        },
      );

      observer.observe(container);

      return () => {
        observer.disconnect();
      };
    }, []);

    useEffect(() => {
      if (!isMobile) return;
      if (!heroVisible) return;
      if (hasPlayedOnMobileRef.current) return;

      hasPlayedOnMobileRef.current = true;

      openTimeoutRef.current = window.setTimeout(() => {
        openReveal();
        openTimeoutRef.current = null;

        closeTimeoutRef.current = window.setTimeout(() => {
          closeReveal();
          closeTimeoutRef.current = null;
        }, mobilePlayDuration);
      }, mobileDelay);

      return clearTimers;
    }, [
      clearTimers,
      closeReveal,
      heroVisible,
      isMobile,
      mobileDelay,
      mobilePlayDuration,
      openReveal,
    ]);

    useEffect(() => {
      return () => {
        clearTimers();
        pauseVideo();
      };
    }, [clearTimers, pauseVideo]);

    return (
      <div
        ref={containerRef}
        className={`
          pointer-events-none
          absolute
          left-[-160px]
          top-[300%]
          ml-6
          -translate-y-1/2z-[8]
          z-[8]
          overflow-visible
          
          max-md:hidden

          ${className}
        `}
        aria-hidden={!isOpen}
      >
        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
          }}
          transition={{
            duration: 0.35,
          }}
          className={`
    relative
    overflow-visible
    h-[520px]
    w-[292px]
    max-xl:h-[470px]
    max-xl:w-[264px]

    max-lg:h-[420px]
    max-lg:w-[236px]

    max-md:h-[430px]
    max-md:w-[242px]
  `}
        >
          <div
            className="
      relative
      overflow-hidden
      rounded-[28px]
      bg-black
      shadow-[0_30px_80px_rgba(0,0,0,0.35)]
      h-full
      w-full
      z-10
    "
          >
            
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />

            <div
              className="
        absolute
        inset-x-0
        bottom-0
        h-1/3
        bg-gradient-to-t
        from-black/70
        to-transparent
      "
            />

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/65">
                Featured Reel
              </p>

              <p className="mt-1 text-lg font-semibold">OD Socials</p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  },
);

InstagramReveal.displayName = "InstagramReveal";

export default InstagramReveal;
