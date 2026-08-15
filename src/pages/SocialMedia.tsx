import { useEffect, useRef, useState } from "react";
import ContactSection from "../components/ContactSection";
import Navigation from "../components/HeroV2/Navbar";

import {
  Instagram,
  Video,
  MessageSquare,
  TrendingUp,
  Calendar,
  Layers3,
  Facebook,
  Camera,
  Bot,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type Package = {
  title: string;
  badge: string;
  included: string[];
};

/* =========================================================
   SOCIAL MEDIA SERVICES
========================================================= */

const services: Service[] = [
  {
    icon: Instagram,
    title: "Content Creation",
    description:
      "High-quality visual content designed to capture attention and build brand identity.",
  },
  {
    icon: Video,
    title: "Reels & Short-Form Videos",
    description:
      "Engaging video content optimized for maximum reach and engagement.",
  },
  {
    icon: MessageSquare,
    title: "Captions & Storytelling",
    description:
      "Compelling narratives that connect with your audience and drive action.",
  },
  {
    icon: TrendingUp,
    title: "Community Management",
    description:
      "Active engagement strategies to build loyal, responsive communities.",
  },
  {
    icon: Calendar,
    title: "Growth Strategy & Planning",
    description:
      "Data-driven planning to ensure consistent growth and brand visibility.",
  },
  {
    icon: Layers3,
    title: "Complete Social System",
    description:
      "Strategy, content, publishing and growth combined into one structured system.",
  },
];

/* =========================================================
   PACKAGES
========================================================= */

const packages: Package[] = [
  {
    title: "Foundation",
    badge: "For individuals & early-stage brands",
    included: [
      "Strategy & Setup",
      "Platform setup & optimisation (2 platforms)",
      "Profile bio optimisation",
      "Brand tone & voice guideline",
      "Content direction & posting framework",
      "Competitor benchmark snapshot",
      "Content & Publishing",
      "8–10 posts per month",
      "Caption & hashtag system",
      "Posting & scheduling",
      "Ads & Insights",
      "Basic ads setup",
      "Monthly performance summary",
    ],
  },

  {
    title: "Growth",
    badge: "Creators, coaches & service brands",
    included: [
      "Platform optimisation (3 platforms)",
      "Growth content calendar",
      "14–16 posts per month",
      "Reels & short-form strategy",
      "Audience interaction guidance",
      "Performance tracking & optimisation",
      "Monthly report with insights",
    ],
  },

  {
    title: "Authority",
    badge: "Scaling brands & businesses",
    included: [
      "Platform optimisation (3–4 platforms)",
      "Brand storytelling & content pillars",
      "20–24 posts per month",
      "Short-form video focus strategy",
      "Community management system",
      "Scalable content workflow",
      "Monthly report with insights",
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function SocialMedia() {
  /*
   * The page deliberately DOES NOT define a font-family.
   *
   * That means it inherits the exact same global font stack
   * already being used by the Home page.
   *
   * IMPORTANT:
   * No font-serif
   * No font-sans override
   * No custom Google font here
   */

  /* =======================================================
     WHAT WE DO CAROUSEL STATE
  ======================================================= */

  const [activeService, setActiveService] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =======================================================
     NEXT SERVICE
  ======================================================= */

  const nextService = () => {
    setActiveService((current) => (current + 1) % services.length);
  };

  /* =======================================================
     PREVIOUS SERVICE
  ======================================================= */

  const previousService = () => {
    setActiveService(
      (current) => (current - 1 + services.length) % services.length
    );
  };

  /* =======================================================
     AUTO SCROLL

     01 → 02 → 03 → 04 → 05 → 06 → 01...
  ======================================================= */

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveService((current) => (current + 1) % services.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  /* =======================================================
     TOUCH / SWIPE
  ======================================================= */

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null
    ) {
      const distance =
        touchStartX.current - touchEndX.current;

      if (Math.abs(distance) > 45) {
        if (distance > 0) {
          nextService();
        } else {
          previousService();
        }
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;

    window.setTimeout(() => {
      setIsPaused(false);
    }, 600);
  };

  /* =======================================================
     GET SERVICE INDEX

     Keeps the carousel infinite:
     ...05 → 06 → 01 → 02...
  ======================================================= */

  const getServiceIndex = (offset: number) => {
    return (
      activeService +
      offset +
      services.length
    ) % services.length;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">
      <Navigation />

      {/* =====================================================
    HERO
===================================================== */}

<section
  className="
    relative
    flex
    min-h-[700px]
    items-center
    overflow-hidden
    bg-white
    px-5
    pb-12
    pt-[110px]
    sm:px-6
    lg:min-h-[760px]
    lg:px-10
  "
>
  {/* =====================================================
      BACKGROUND GRID
  ===================================================== */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.026]
      [background-image:linear-gradient(rgba(0,0,0,.38)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.38)_1px,transparent_1px)]
      [background-size:55px_55px]
      md:[background-size:72px_72px]
    "
  />

  {/* =====================================================
      LARGE DECORATIVE CIRCLES
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      -left-[280px]
      top-[16%]
      hidden
      h-[500px]
      w-[500px]
      rounded-full
      border
      border-[#8b3dff]/20
      xl:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-[285px]
      bottom-[1%]
      hidden
      h-[520px]
      w-[520px]
      rounded-full
      border
      border-[#8b3dff]/20
      xl:block
    "
  />

  {/* =====================================================
      SOCIAL MEDIA FLOATING ELEMENTS
  ===================================================== */}

  {/* INSTAGRAM */}
  <div
    className="
      pointer-events-none
      absolute
      left-[7%]
      top-[27%]
      hidden
      h-[62px]
      w-[62px]
      rotate-[-7deg]
      items-center
      justify-center
      rounded-2xl
      border
      border-black/[0.08]
      bg-white
      shadow-[0_14px_40px_rgba(0,0,0,0.055)]
      xl:flex
    "
  >
    <Instagram
      size={27}
      strokeWidth={1.55}
      className="text-black/55"
    />
  </div>

  {/* CAMERA */}
  <div
    className="
      pointer-events-none
      absolute
      bottom-[21%]
      left-[11%]
      hidden
      h-[56px]
      w-[56px]
      rotate-[6deg]
      items-center
      justify-center
      rounded-full
      border
      border-black/[0.08]
      bg-white
      shadow-[0_12px_35px_rgba(0,0,0,0.045)]
      xl:flex
    "
  >
    <Camera
      size={24}
      strokeWidth={1.5}
      className="text-black/45"
    />
  </div>

  {/* FACEBOOK */}
  <div
    className="
      pointer-events-none
      absolute
      bottom-[8%]
      left-[5%]
      hidden
      h-[48px]
      w-[48px]
      rotate-[-6deg]
      items-center
      justify-center
      rounded-xl
      border
      border-black/[0.07]
      bg-white
      xl:flex
    "
  >
    <Facebook
      size={21}
      strokeWidth={1.55}
      className="text-black/40"
    />
  </div>

  {/* AI AUTOMATION */}
  <div
    className="
      pointer-events-none
      absolute
      right-[7%]
      top-[27%]
      hidden
      rotate-[3deg]
      items-center
      gap-3
      rounded-full
      border
      border-black/[0.08]
      bg-white
      px-5
      py-3
      shadow-[0_14px_40px_rgba(0,0,0,0.05)]
      xl:flex
    "
  >
    <Bot
      size={20}
      strokeWidth={1.5}
      className="text-black/50"
    />

    <span
      className="
        text-[8px]
        font-bold
        uppercase
        tracking-[0.28em]
        text-black/45
      "
    >
      AI Automation
    </span>
  </div>

  {/* SHORT VIDEO / TIKTOK STYLE */}
  <div
    className="
      pointer-events-none
      absolute
      right-[11%]
      top-[52%]
      hidden
      h-[62px]
      w-[62px]
      rotate-[-6deg]
      items-center
      justify-center
      rounded-2xl
      border
      border-black/[0.08]
      bg-white
      shadow-[0_14px_40px_rgba(0,0,0,0.05)]
      xl:flex
    "
  >
    <Video
      size={26}
      strokeWidth={1.45}
      className="text-black/45"
    />
  </div>

  {/* CREATIVE / CONTENT */}
  <div
    className="
      pointer-events-none
      absolute
      bottom-[15%]
      right-[7%]
      hidden
      h-[50px]
      w-[50px]
      rotate-[8deg]
      items-center
      justify-center
      rounded-full
      border
      border-black/[0.07]
      bg-white
      xl:flex
    "
  >
    <Sparkles
      size={20}
      strokeWidth={1.45}
      className="text-black/40"
    />
  </div>

  {/* =====================================================
      SMALL TECH DETAILS
  ===================================================== */}

  <span
    className="
      pointer-events-none
      absolute
      left-[15%]
      top-[18%]
      hidden
      text-[27px]
      font-light
      text-[#7c3aed]/75
      xl:block
    "
  >
    +
  </span>

  <span
    className="
      pointer-events-none
      absolute
      bottom-[9%]
      right-[16%]
      hidden
      text-[27px]
      font-light
      text-[#7c3aed]/75
      xl:block
    "
  >
    +
  </span>

  {/* LEFT DOT MATRIX */}
  <div
    className="
      pointer-events-none
      absolute
      bottom-[9%]
      left-[2.5%]
      hidden
      grid-cols-5
      gap-[6px]
      xl:grid
    "
  >
    {[...Array(25)].map((_, index) => (
      <span
        key={index}
        className="
          h-[3px]
          w-[3px]
          rounded-full
          bg-[#8b3dff]/35
        "
      />
    ))}
  </div>

  {/* RIGHT DOT MATRIX */}
  <div
    className="
      pointer-events-none
      absolute
      right-[3%]
      top-[18%]
      hidden
      grid-cols-5
      gap-[6px]
      xl:grid
    "
  >
    {[...Array(25)].map((_, index) => (
      <span
        key={index}
        className="
          h-[3px]
          w-[3px]
          rounded-full
          bg-[#8b3dff]/35
        "
      />
    ))}
  </div>

  {/* =====================================================
      COMPLETE HERO CONTENT
  ===================================================== */}

  <div
    className="
      relative
      z-10
      mx-auto
      flex
      w-full
      max-w-[1400px]
      flex-col
      items-center
      text-center
    "
  >
    {/* BADGE */}
    <div
      className="
        mb-7
        inline-flex
        items-center
        gap-4
        rounded-full
        border
        border-[#8b3dff]/30
        bg-white/95
        px-7
        py-3
        shadow-[0_8px_30px_rgba(124,58,237,0.045)]
      "
    >
      <span className="h-[6px] w-[6px] rounded-full bg-[#7c3aed]" />

      <span
        className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.42em]
          text-black/60
        "
      >
        Social Media Systems
      </span>

      <span className="h-[6px] w-[6px] rounded-full bg-[#7c3aed]" />
    </div>

    {/* =====================================================
        HEADLINE
    ===================================================== */}

    <div className="mx-auto w-full max-w-[1250px]">

      {/* SOCIAL MEDIA */}
      <h1
        className="
          text-[58px]
          font-black
          leading-[0.88]
          tracking-[-0.065em]
          text-black
          sm:text-[76px]
          md:text-[94px]
          lg:text-[112px]
          xl:text-[126px]
        "
      >
        Social Media,
      </h1>

      {/* BUILT AS A SYSTEM */}
      <div
        className="
          mt-2
          flex
          flex-wrap
          items-baseline
          justify-center
          gap-x-[0.13em]
          text-[48px]
          font-black
          leading-[0.92]
          tracking-[-0.055em]
          sm:text-[63px]
          md:text-[78px]
          lg:text-[92px]
          xl:text-[104px]
        "
      >
        <span
          className="
            text-transparent
            [-webkit-text-stroke:1.35px_#111111]
          "
        >
          Built as a
        </span>

        <span
          className="
            inline-block
            bg-gradient-to-r
            from-[#6d28d9]
            via-[#7c3aed]
            to-[#9333ea]
            bg-clip-text
            text-transparent
          "
          style={{
            fontFamily:
              '"Arial Black", "Helvetica Neue", Arial, sans-serif',
            fontWeight: 900,
            letterSpacing: "-0.075em",
          }}
        >
          System.
        </span>
      </div>
    </div>

    {/* DESCRIPTION */}
    <p
      className="
        mt-8
        max-w-2xl
        text-[15px]
        font-medium
        leading-7
        tracking-[-0.015em]
        text-black/45
        sm:text-[16px]
        md:text-[18px]
      "
    >
      Consistent content. Clear strategy. Measurable growth.
    </p>

    {/* DIVIDER */}
    <div
      className="
        mt-7
        flex
        items-center
        justify-center
        gap-5
      "
    >
      <span
        className="
          h-px
          w-20
          bg-gradient-to-r
          from-transparent
          to-[#8b3dff]/45
        "
      />

      <span
        className="
          h-[10px]
          w-[10px]
          rotate-45
          border-2
          border-[#8b3dff]
          bg-white
        "
      />

      <span
        className="
          h-px
          w-20
          bg-gradient-to-l
          from-transparent
          to-[#8b3dff]/45
        "
      />
    </div>

    {/* =====================================================
        BUTTONS — NOW INSIDE HERO CONTENT
    ===================================================== */}

    <div
      className="
        mt-8
        flex
        flex-col
        items-center
        justify-center
        gap-3
        sm:flex-row
        sm:gap-4
      "
    >
      {/* EXPLORE SYSTEMS */}
      <button
        onClick={() => scrollToId("what-we-do")}
        className="
          group
          flex
          min-w-[215px]
          items-center
          justify-between
          rounded-full
          bg-black
          px-7
          py-[16px]
          text-[14px]
          font-bold
          text-white
          transition-all
          duration-300
          hover:-translate-y-[3px]
          hover:shadow-[0_15px_35px_rgba(0,0,0,0.16)]
        "
      >
        <span>Explore Systems</span>

        <ArrowRight
          size={17}
          strokeWidth={2}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>

      {/* START PROJECT */}
      <button
        onClick={() => scrollToId("contact")}
        className="
          group
          flex
          min-w-[215px]
          items-center
          justify-between
          rounded-full
          border
          border-black/20
          bg-white
          px-7
          py-[16px]
          text-[14px]
          font-bold
          text-black
          transition-all
          duration-300
          hover:-translate-y-[3px]
          hover:border-black
          hover:bg-black
          hover:text-white
          hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
        "
      >
        <span>Start a Project</span>

        <ArrowUpRight
          size={17}
          strokeWidth={2}
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-[2px]
            group-hover:translate-x-[2px]
          "
        />
      </button>
    </div>
  </div>
</section>

      {/* =====================================================
    WHAT WE DO
===================================================== */}

<section
  id="what-we-do"
  className="
    relative
    overflow-hidden
    border-t
    border-black/[0.07]
    bg-[#fafafa]
    px-5
    py-16
    sm:px-6
    sm:py-20
    lg:px-10
    lg:py-24
  "
>
  {/* =====================================================
      BACKGROUND GRID
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.018]
      [background-image:linear-gradient(rgba(0,0,0,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.35)_1px,transparent_1px)]
      [background-size:55px_55px]
      md:[background-size:75px_75px]
    "
  />

  {/* SUBTLE PURPLE GLOW */}

  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[48%]
      h-[500px]
      w-[700px]
      -translate-x-1/2
      rounded-full
      bg-[#8b3dff]/[0.025]
      blur-[120px]
    "
  />

  {/* =====================================================
      MAIN WRAPPER
  ===================================================== */}

  <div
    className="
      relative
      z-10
      mx-auto
      max-w-[1450px]
    "
  >
    {/* =====================================================
        SECTION HEADER
    ===================================================== */}

    <div
      className="
        grid
        gap-10
        border-b
        border-black/[0.09]
        pb-12
        md:grid-cols-[1fr_420px]
        md:items-end
        lg:pb-12
      "
    >
      {/* LEFT */}

      <div>
        {/* LABEL */}

        <div
          className="
            mb-5
            flex
            items-center
            gap-3
            text-[9px]
            font-bold
            uppercase
            tracking-[0.4em]
            text-black/40
          "
        >
          <span
            className="
              h-[6px]
              w-[6px]
              rounded-full
              bg-[#7c3aed]
            "
          />

          Our Capabilities
        </div>

        {/* =================================================
            HEADING — MATCHING YOUR ORIGINAL OD SOCIALS STYLE
        ================================================= */}

        <div>
          {/* SOLID LINE */}

          <h2
            className="
              text-[54px]
              font-black
              uppercase
              leading-[0.84]
              tracking-[-0.065em]
              text-black
              sm:text-[68px]
              md:text-[80px]
              lg:text-[92px]
              xl:text-[102px]
            "
          >
            WHAT WE
          </h2>

          {/* OUTLINE LINE */}

          <div
            className="
              mt-2
              text-[54px]
              font-black
              uppercase
              leading-[0.84]
              tracking-[-0.065em]
              text-transparent
              [-webkit-text-stroke:1.4px_#171717]
              sm:text-[68px]
              md:text-[80px]
              lg:text-[92px]
              xl:text-[102px]
            "
          >
            DO
          </div>
        </div>
      </div>

      {/* RIGHT DESCRIPTION */}

      <div
        className="
          md:justify-self-end
          md:pb-2
        "
      >
        <span
          className="
            mb-4
            block
            h-[2px]
            w-10
            bg-[#7c3aed]
          "
        />

        <p
          className="
            max-w-[410px]
            text-[15px]
            font-medium
            leading-[1.75]
            tracking-[-0.015em]
            text-black/50
            md:text-[16px]
          "
        >
          Strategic social media systems designed to make your
          brand consistent, recognisable, and built for sustainable
          growth.
        </p>
      </div>
    </div>

    {/* =====================================================
        CAROUSEL CONTROLS
    ===================================================== */}

    <div
      className="
        mt-9
        flex
        items-center
        justify-between
        md:mt-11
      "
    >
      {/* COUNTER */}

      <div
        className="
          flex
          items-center
          text-[10px]
          font-bold
          uppercase
          tracking-[0.3em]
        "
      >
        <span className="text-[#7c3aed]">
          {String(activeService + 1).padStart(2, "0")}
        </span>

        <span className="mx-3 text-black/15">
          /
        </span>

        <span className="text-black/35">
          {String(services.length).padStart(2, "0")}
        </span>
      </div>

      {/* MANUAL ARROWS */}

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => {
            previousService();
            setIsPaused(true);

            window.setTimeout(
              () => setIsPaused(false),
              1200
            );
          }}
          aria-label="Previous service"
          className="
            group
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-white
            text-black
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-black
            hover:bg-black
            hover:text-white
          "
        >
          <ArrowLeft
            size={18}
            strokeWidth={1.6}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-0.5
            "
          />
        </button>

        <button
          type="button"
          onClick={() => {
            nextService();
            setIsPaused(true);

            window.setTimeout(
              () => setIsPaused(false),
              1200
            );
          }}
          aria-label="Next service"
          className="
            group
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-white
            text-black
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-black
            hover:bg-black
            hover:text-white
          "
        >
          <ArrowRight
            size={18}
            strokeWidth={1.6}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
            "
          />
        </button>
      </div>
    </div>

    {/* =====================================================
        DESKTOP CAROUSEL

        PREVIOUS | ACTIVE | NEXT

        06 → 01 → 02
        01 → 02 → 03
        02 → 03 → 04
        ...
        05 → 06 → 01
    ===================================================== */}

    <div
      className="
        relative
        mt-7
        hidden
        overflow-hidden
        px-1
        pb-8
        pt-3
        md:block
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="
          grid
          grid-cols-3
          items-stretch
          gap-4
          lg:gap-5
        "
      >
        {[-1, 0, 1].map((offset) => {
          const serviceIndex =
            getServiceIndex(offset);

          const service =
            services[serviceIndex];

          const ServiceIcon =
            service.icon;

          const isCenter =
            offset === 0;

          return (
            <article
              key={`${serviceIndex}-${activeService}-${offset}`}
              onClick={() => {
                if (offset === -1) {
                  previousService();
                }

                if (offset === 1) {
                  nextService();
                }
              }}
              className={`
                group
                relative
                flex
                min-h-[455px]
                flex-col
                overflow-hidden
                rounded-[30px]
                border
                p-8
                transition-all
                duration-700
                ease-[cubic-bezier(.22,1,.36,1)]
                lg:min-h-[510px]
                lg:p-10

                ${
                  isCenter
                    ? `
                        -translate-y-3
                        scale-[1.015]
                        border-black
                        bg-[#050505]
                        text-white
                        shadow-[0_30px_80px_rgba(0,0,0,0.18)]
                      `
                    : `
                        cursor-pointer
                        border-black/[0.09]
                        bg-white
                        text-black
                        shadow-[0_8px_35px_rgba(0,0,0,0.025)]
                        hover:-translate-y-1
                        hover:border-black/20
                        hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)]
                      `
                }
              `}
            >
              {/* ===========================================
                  LARGE NUMBER
              =========================================== */}

              <span
                className={`
                  pointer-events-none
                  absolute
                  right-6
                  top-3
                  select-none
                  text-[100px]
                  font-black
                  leading-none
                  tracking-[-0.085em]
                  lg:text-[126px]

                  ${
                    isCenter
                      ? "text-white/[0.055]"
                      : "text-black/[0.035]"
                  }
                `}
              >
                {String(serviceIndex + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              {/* ===========================================
                  ICON
              =========================================== */}

              <div
                className={`
                  relative
                  z-10
                  flex
                  h-[58px]
                  w-[58px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-500

                  ${
                    isCenter
                      ? `
                          border-[#8b3dff]/70
                          bg-white/[0.035]
                          shadow-[0_0_30px_rgba(124,58,237,0.08)]
                        `
                      : `
                          border-black/10
                          bg-white
                        `
                  }
                `}
              >
                <ServiceIcon
                  size={21}
                  strokeWidth={1.45}
                  className={
                    isCenter
                      ? "text-white"
                      : "text-black/75"
                  }
                />
              </div>

              {/* ===========================================
                  CARD CONTENT
              =========================================== */}

              <div
                className="
                  relative
                  z-10
                  mt-auto
                  pt-20
                "
              >
                {/* SYSTEM LABEL */}

                <div
                  className={`
                    mb-5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.34em]

                    ${
                      isCenter
                        ? "text-[#a970ff]"
                        : "text-[#7c3aed]"
                    }
                  `}
                >
                  System{" "}
                  {String(
                    serviceIndex + 1
                  ).padStart(2, "0")}
                </div>

                {/* TITLE */}

                <h3
                  className="
                    max-w-[360px]
                    text-[29px]
                    font-black
                    leading-[0.98]
                    tracking-[-0.045em]
                    lg:text-[35px]
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className={`
                    mt-5
                    max-w-[350px]
                    text-[14px]
                    font-medium
                    leading-[1.85]
                    tracking-[-0.01em]

                    ${
                      isCenter
                        ? "text-white/55"
                        : "text-black/48"
                    }
                  `}
                >
                  {service.description}
                </p>

                {/* ===========================================
                    EXPLORE
                =========================================== */}

                <div
                  className={`
                    mt-8
                    flex
                    items-center
                    justify-between
                    border-t
                    pt-6

                    ${
                      isCenter
                        ? "border-white/15"
                        : "border-black/[0.09]"
                    }
                  `}
                >
                  <span
                    className={`
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.34em]

                      ${
                        isCenter
                          ? "text-[#a970ff]"
                          : "text-[#7c3aed]"
                      }
                    `}
                  >
                    Explore
                  </span>

                  <div
                    className={`
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300

                      ${
                        isCenter
                          ? `
                              border-white/15
                              text-white
                              group-hover:border-white
                              group-hover:bg-white
                              group-hover:text-black
                            `
                          : `
                              border-black/10
                              text-black
                              group-hover:border-black
                              group-hover:bg-black
                              group-hover:text-white
                            `
                      }
                    `}
                  >
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-[2px]
                        group-hover:translate-x-[2px]
                      "
                    />
                  </div>
                </div>
              </div>

              {/* CENTER PURPLE DETAIL */}

              {isCenter && (
                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-[35%]
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-[#8b3dff]
                    to-transparent
                    opacity-70
                  "
                />
              )}
            </article>
          );
        })}
      </div>
    </div>

    {/* =====================================================
        MOBILE CAROUSEL
    ===================================================== */}

    <div
      className="
        relative
        mt-7
        md:hidden
      "
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {(() => {
        const service =
          services[activeService];

        const ServiceIcon =
          service.icon;

        return (
          <article
            className="
              relative
              flex
              min-h-[430px]
              flex-col
              overflow-hidden
              rounded-[28px]
              border
              border-black
              bg-[#050505]
              p-7
              text-white
              shadow-[0_22px_60px_rgba(0,0,0,0.16)]
            "
          >
            {/* NUMBER */}

            <span
              className="
                pointer-events-none
                absolute
                right-4
                top-3
                text-[92px]
                font-black
                leading-none
                tracking-[-0.08em]
                text-white/[0.055]
              "
            >
              {String(
                activeService + 1
              ).padStart(2, "0")}
            </span>

            {/* ICON */}

            <div
              className="
                relative
                z-10
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#8b3dff]/70
                bg-white/[0.04]
              "
            >
              <ServiceIcon
                size={21}
                strokeWidth={1.45}
              />
            </div>

            {/* CONTENT */}

            <div className="mt-auto pt-20">
              <div
                className="
                  mb-4
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#a970ff]
                "
              >
                System{" "}
                {String(
                  activeService + 1
                ).padStart(2, "0")}
              </div>

              <h3
                className="
                  max-w-[320px]
                  text-[31px]
                  font-black
                  leading-[0.98]
                  tracking-[-0.045em]
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-5
                  max-w-sm
                  text-[14px]
                  font-medium
                  leading-7
                  text-white/55
                "
              >
                {service.description}
              </p>

              {/* MOBILE BOTTOM */}

              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/15
                  pt-6
                "
              >
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.32em]
                    text-[#a970ff]
                  "
                >
                  Swipe to explore
                </span>

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                  "
                >
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            {/* PURPLE BOTTOM LINE */}

            <span
              className="
                pointer-events-none
                absolute
                bottom-0
                left-1/2
                h-[2px]
                w-[40%]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#8b3dff]
                to-transparent
              "
            />
          </article>
        );
      })()}
    </div>

    {/* =====================================================
        01 — 06 CAROUSEL INDICATORS
    ===================================================== */}

    <div
      className="
        mt-7
        flex
        items-center
        justify-center
        gap-[9px]
      "
    >
      {services.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to service ${index + 1}`}
          onClick={() => {
            setActiveService(index);

            setIsPaused(true);

            window.setTimeout(
              () => setIsPaused(false),
              1200
            );
          }}
          className={`
            rounded-full
            transition-all
            duration-500

            ${
              index === activeService
                ? `
                    h-[6px]
                    w-10
                    bg-[#7c3aed]
                  `
                : `
                    h-[6px]
                    w-[6px]
                    bg-black/15
                    hover:bg-black/40
                  `
            }
          `}
        />
      ))}
    </div>
  </div>
</section>
{/* =====================================================
          PART 2 CONTINUES FROM HERE:
          SOCIAL MEDIA SYSTEMS / PACKAGE CARDS
      ===================================================== */}
            {/* =====================================================
    SOCIAL MEDIA SYSTEMS
===================================================== */}

<section
  id="systems"
  className="
    relative
    overflow-hidden
    border-t
    border-black/[0.07]
    bg-white
    px-5
    py-16
    sm:px-6
    sm:py-20
    lg:px-10
    lg:py-24
  "
>
  {/* =====================================================
      BACKGROUND GRID
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.022]
      [background-image:linear-gradient(rgba(0,0,0,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.35)_1px,transparent_1px)]
      [background-size:55px_55px]
      md:[background-size:75px_75px]
    "
  />

  {/* =====================================================
      SUBTLE DECORATIVE ELEMENTS
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      -left-[240px]
      top-[16%]
      hidden
      h-[450px]
      w-[450px]
      rounded-full
      border
      border-[#8b3dff]/10
      lg:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-[250px]
      bottom-[6%]
      hidden
      h-[480px]
      w-[480px]
      rounded-full
      border
      border-[#8b3dff]/10
      lg:block
    "
  />

  <span
    className="
      pointer-events-none
      absolute
      right-[8%]
      top-[14%]
      hidden
      text-[24px]
      font-light
      text-[#7c3aed]/60
      lg:block
    "
  >
    +
  </span>

  {/* =====================================================
      MAIN WRAPPER
  ===================================================== */}

  <div
    className="
      relative
      z-10
      mx-auto
      max-w-[1450px]
    "
  >
    {/* =====================================================
        SECTION HEADER
    ===================================================== */}

    <div
      className="
        grid
        gap-10
        border-b
        border-black/[0.09]
        pb-12
        md:grid-cols-[1fr_430px]
        md:items-end
        lg:pb-12
      "
    >
      {/* LEFT SIDE */}

      <div>
        {/* EYEBROW */}

        <div
          className="
            mb-6
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              h-[6px]
              w-[6px]
              rounded-full
              bg-[#7c3aed]
            "
          />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.42em]
              text-black/45
            "
          >
            Structured for Growth
          </span>
        </div>

        {/* =================================================
            OD SOCIALS TYPOGRAPHY
        ================================================= */}

        <div className="max-w-[850px]">
          {/* SOLID TEXT */}

          <h2
            className="
              whitespace-nowrap
              text-[48px]
              font-black
              uppercase
              leading-[0.86]
              tracking-[-0.06em]
              text-black
              sm:text-[64px]
              md:text-[76px]
              lg:text-[90px]
              xl:text-[102px]
            "
          >
            SOCIAL MEDIA
          </h2>

          {/* OUTLINE TEXT */}

          <div
            className="
              mt-2
              text-[52px]
              font-black
              uppercase
              leading-[0.86]
              tracking-[-0.055em]
              text-transparent
              [-webkit-text-stroke:1.35px_#171717]
              sm:text-[68px]
              md:text-[82px]
              lg:text-[98px]
              xl:text-[110px]
            "
          >
            SYSTEMS
          </div>
        </div>
      </div>

      {/* RIGHT DESCRIPTION */}

      <div
        className="
          md:justify-self-end
          md:pb-2
        "
      >
        {/* SMALL PURPLE LINE */}

        <span
          className="
            mb-5
            block
            h-[2px]
            w-11
            bg-[#7c3aed]
          "
        />

        <p
          className="
            max-w-[410px]
            text-[15px]
            font-medium
            leading-[1.75]
            tracking-[-0.015em]
            text-black/50
            md:text-[16px]
          "
        >
          Structured content systems built for consistency and
          growth. Choose the level that fits where your brand is
          today.
        </p>
      </div>
    </div>

    {/* =====================================================
        PACKAGE CARDS
    ===================================================== */}

    <div
      className="
        mt-10
        grid
        items-stretch
        gap-4
        lg:mt-10
        lg:grid-cols-3
        lg:gap-0
      "
    >
      {packages.map((pkg, index) => {
        const systemNumber = String(index + 1).padStart(2, "0");

        return (
          <article
            key={pkg.title}
            className={`
              group
              relative
              flex
              min-h-[650px]
              flex-col
              overflow-hidden
              border
              border-black/[0.09]
              bg-white
              text-black
              transition-all
              duration-500
              ease-[cubic-bezier(.22,1,.36,1)]

              hover:z-20
              hover:-translate-y-[8px]
              hover:border-black
              hover:bg-[#050505]
              hover:text-white
              hover:shadow-[0_28px_70px_rgba(0,0,0,0.15)]

              ${
                index === 0
                  ? "rounded-[28px] lg:rounded-r-none"
                  : ""
              }

              ${
                index === 1
                  ? "rounded-[28px] lg:rounded-none lg:border-l-0"
                  : ""
              }

              ${
                index === 2
                  ? "rounded-[28px] lg:rounded-l-none lg:border-l-0"
                  : ""
              }
            `}
          >
            {/* =================================================
                DECORATIVE CIRCLES
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[75px]
                -top-[75px]
                h-[190px]
                w-[190px]
                rounded-full
                border
                border-black/[0.045]
                transition-all
                duration-500
                group-hover:border-white/[0.08]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-[38px]
                -top-[38px]
                h-[115px]
                w-[115px]
                rounded-full
                border
                border-black/[0.04]
                transition-all
                duration-500
                group-hover:border-white/[0.07]
              "
            />

            {/* SUBTLE PURPLE HOVER GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-[250px]
                w-[250px]
                rounded-full
                bg-[#7c3aed]/0
                blur-[90px]
                transition-all
                duration-700
                group-hover:bg-[#7c3aed]/[0.08]
              "
            />

            {/* =================================================
                CARD CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-1
                flex-col
                p-7
                sm:p-8
                lg:p-9
              "
            >
              {/* =================================================
                  TOP ROW
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.36em]
                    text-black/35
                    transition-colors
                    duration-500
                    group-hover:text-white/40
                  "
                >
                  System {systemNumber}
                </span>

                {/* ARROW CIRCLE */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/[0.09]
                    text-black/60
                    transition-all
                    duration-500

                    group-hover:border-white/15
                    group-hover:bg-white/[0.04]
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.45}
                    className="
                      transition-transform
                      duration-500
                      group-hover:-translate-y-[2px]
                      group-hover:translate-x-[2px]
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  TITLE
              ================================================= */}

              <h3
                className="
                  mt-11
                  text-[37px]
                  font-black
                  leading-[0.94]
                  tracking-[-0.055em]
                  sm:text-[41px]
                  lg:text-[44px]
                  xl:text-[47px]
                "
              >
                {pkg.title}
              </h3>

              {/* =================================================
                  BADGE
              ================================================= */}

              <div
                className="
                  mt-5
                  inline-flex
                  w-fit
                  items-center
                  rounded-full
                  border
                  border-black/10
                  bg-white
                  px-4
                  py-[8px]
                  text-[10px]
                  font-medium
                  leading-none
                  text-black/50
                  transition-all
                  duration-500

                  group-hover:border-white/20
                  group-hover:bg-white/[0.04]
                  group-hover:text-white/60
                "
              >
                {pkg.badge}
              </div>

              {/* =================================================
                  DIVIDER
              ================================================= */}

              <div
                className="
                  my-7
                  h-px
                  w-full
                  bg-black/[0.09]
                  transition-colors
                  duration-500
                  group-hover:bg-white/15
                "
              />

              {/* =================================================
                  INCLUDED LABEL
              ================================================= */}

              <div
                className="
                  mb-5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.38em]
                  text-black/35
                  transition-colors
                  duration-500
                  group-hover:text-white/40
                "
              >
                What's Included
              </div>

              {/* =================================================
                  PACKAGE ITEMS
              ================================================= */}

              <ul
                className="
                  flex-1
                  space-y-[13px]
                "
              >
                {pkg.included.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="
                      flex
                      items-start
                      gap-4
                      text-[13px]
                      font-medium
                      leading-[1.65]
                      tracking-[-0.01em]
                      text-black/58
                      transition-colors
                      duration-500
                      group-hover:text-white/65
                      sm:text-[13.5px]
                    "
                  >
                    {/* BULLET */}

                    <span
                      className="
                        mt-[8px]
                        h-[4px]
                        w-[4px]
                        shrink-0
                        rounded-full
                        bg-[#7c3aed]
                        transition-all
                        duration-500
                        group-hover:bg-white
                      "
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* =================================================
                  CTA
              ================================================= */}

              <a
                href="#contact"
                className="
                  mt-9
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-full
                  bg-black
                  px-6
                  py-[15px]
                  text-[11px]
                  font-bold
                  text-white
                  transition-all
                  duration-500

                  group-hover:bg-white
                  group-hover:text-black
                  group-hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]
                "
              >
                <span>Start with {pkg.title}</span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-[2px]
                    group-hover:translate-x-[2px]
                  "
                />
              </a>
            </div>

            {/* =================================================
                PURPLE HOVER BOTTOM LINE
            ================================================= */}

            <span
              className="
                pointer-events-none
                absolute
                bottom-0
                left-1/2
                h-[2px]
                w-0
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#8b3dff]
                to-transparent
                transition-all
                duration-700
                group-hover:w-[65%]
              "
            />
          </article>
        );
      })}
    </div>

    {/* =====================================================
        BOTTOM NOTE
    ===================================================== */}

    <div
      className="
        mt-8
        flex
        items-center
        justify-center
        gap-3
      "
    >
      {/* SMALL DIAMOND */}

      <span
        className="
          h-[7px]
          w-[7px]
          rotate-45
          border
          border-[#7c3aed]/60
        "
      />

      <p
        className="
          text-center
          text-[11px]
          font-medium
          tracking-[-0.01em]
          text-black/35
          sm:text-[12px]
        "
      >
        All systems are customised to your brand goals and audience.
      </p>

      <span
        className="
          h-[7px]
          w-[7px]
          rotate-45
          border
          border-[#7c3aed]/60
        "
      />
    </div>
  </div>


          {/* =================================================
              BOTTOM MESSAGE
          ================================================= */}

          <div
            className="
              mt-10
              grid
              gap-8
              border-t
              border-black/10
              pt-10
              md:grid-cols-2
              md:items-center
            "
          >
            {/* LEFT */}

            <div>
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-black/35
                "
              >
                Not sure where to start?
              </span>

              <h3
                className="
                  mt-4
                  max-w-xl
                  text-[30px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-black
                  sm:text-[36px]
                "
              >
                We’ll help you choose the right system.
              </h3>
            </div>

            {/* RIGHT */}

            <div
              className="
                md:flex
                md:justify-end
              "
            >
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-between
                  gap-10
                  rounded-full
                  border
                  border-black
                  bg-white
                  px-7
                  py-4
                  text-[11px]
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                "
              >
                Discuss Your Brand

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>
      </section>
      {/* =====================================================
          PART 3 CONTINUES FROM HERE:
          FINAL CTA + CONTACT SECTION + COMPONENT CLOSING
      ===================================================== */}
            {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-black/[0.08]
          bg-white
          px-5
          py-24
          sm:px-6
          sm:py-28
          lg:px-10
          lg:py-36
        "
      >
        {/* BACKGROUND GRID */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.022]
            [background-image:linear-gradient(rgba(0,0,0,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.35)_1px,transparent_1px)]
            [background-size:55px_55px]
            md:[background-size:75px_75px]
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* =================================================
              MAIN BLACK CTA PANEL
          ================================================= */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              bg-black
              px-7
              py-14
              text-white
              sm:px-10
              sm:py-16
              md:px-14
              md:py-16
              lg:px-20
              lg:py-24
            "
          >
            {/* LARGE DECORATIVE CIRCLES */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[130px]
                -top-[130px]
                h-[340px]
                w-[340px]
                rounded-full
                border
                border-white/[0.10]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -right-[75px]
                -top-[75px]
                h-[230px]
                w-[230px]
                rounded-full
                border
                border-white/[0.08]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[170px]
                -left-[170px]
                h-[360px]
                w-[360px]
                rounded-full
                border
                border-white/[0.07]
              "
            />

            {/* SMALL GRID DECORATION */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-12
                right-12
                hidden
                grid-cols-5
                gap-[7px]
                opacity-20
                md:grid
              "
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <span
                  key={i}
                  className="
                    h-[3px]
                    w-[3px]
                    rounded-full
                    bg-white
                  "
                />
              ))}
            </div>

            {/* CONTENT */}

            <div
              className="
                relative
                z-10
                grid
                gap-12
                lg:grid-cols-[1fr_350px]
                lg:items-end
              "
            >
              {/* LEFT */}

              <div>
                <div
                  className="
                    mb-7
                    flex
                    items-center
                    gap-3
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.38em]
                    text-white/45
                  "
                >
                  <span
                    className="
                      h-[5px]
                      w-[5px]
                      rounded-full
                      bg-white
                    "
                  />

                  Ready When You Are
                </div>

                <h2
                  className="
                    max-w-[850px]
                    text-[48px]
                    font-black
                    leading-[0.92]
                    tracking-[-0.055em]
                    text-white
                    sm:text-6xl
                    md:text-7xl
                    lg:text-[88px]
                  "
                >
                  Your brand deserves
                  <br className="hidden sm:block" />
                  {" "}a better system.
                </h2>

                <p
                  className="
                    mt-7
                    max-w-2xl
                    text-[15px]
                    leading-7
                    text-white/50
                    sm:text-base
                  "
                >
                  Strategy, content, consistency and growth — built into
                  one structured social media system designed around your
                  brand.
                </p>
              </div>

              {/* RIGHT CTA */}

              <div className="lg:flex lg:justify-end">
                <a
                  href="#contact"
                  className="
                    group/button
                    inline-flex
                    w-full
                    items-center
                    justify-between
                    gap-10
                    rounded-full
                    bg-white
                    px-7
                    py-5
                    text-[12px]
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    sm:w-auto
                    sm:min-w-[270px]
                  "
                >
                  Start a Project

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.6}
                    className="
                      transition-transform
                      duration-300
                      group-hover/button:-translate-y-1
                      group-hover/button:translate-x-1
                    "
                  />
                </a>
              </div>
            </div>

            {/* BOTTOM LINE */}

            <div
              className="
                relative
                z-10
                mt-14
                flex
                flex-col
                gap-5
                border-t
                border-white/10
                pt-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-white/35
                "
              >
                Content · Strategy · Growth
              </span>

              <span
                className="
                  text-[11px]
                  text-white/40
                "
              >
                Built around your business.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <div id="contact">
        <ContactSection />
      </div>

      {/* =====================================================
          SIMPLE PAGE FOOTER
      ===================================================== */}

      <footer
        className="
          border-t
          border-black/10
          bg-white
          px-5
          py-8
          sm:px-6
          lg:px-10
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              text-[15px]
              font-black
              tracking-[-0.03em]
              text-black
            "
          >
            OD SOCIALS
          </div>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-7
              gap-y-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-black/40
            "
          >
            <a
              href="/"
              className="
                transition-colors
                duration-300
                hover:text-black
              "
            >
              Home
            </a>

            <a
              href="#systems"
              className="
                transition-colors
                duration-300
                hover:text-black
              "
            >
              Systems
            </a>

            <a
              href="#contact"
              className="
                transition-colors
                duration-300
                hover:text-black
              "
            >
              Contact
            </a>
          </div>

          <div
            className="
              text-[10px]
              text-black/35
            "
          >
            © {new Date().getFullYear()} OD Socials
          </div>
        </div>
      </footer>
    </div>
  );
}