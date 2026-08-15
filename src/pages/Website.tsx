import { useEffect, useState } from "react";

import ContactSection from "../components/ContactSection";
import Navigation from "../components/HeroV2/Navbar";

import {
  Layout,
  Zap,
  Search,
  Users,
  TrendingUp,
  Check,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Camera,
  Code2,
  BarChart3,
  Monitor,
  Sparkles,
} from "lucide-react";

export default function Website() {
  const packages = [
    {
      title: "Essential Website",
      badge: "Credibility & presence",
      popular: false,
      included: [
        "Premium custom website (5–6 sections)",
        "High-end UI/UX (desktop + mobile perfected)",
        "Brand-consistent colors & typography",
        "Contact / inquiry form",
        "Basic SEO + fast loading",
        "Secure deployment",
      ],
    },
    {
      title: "Growth Website",
      badge: "Lead generation & conversions",
      popular: true,
      included: [
        "Everything in Essential Website",
        "Conversion-focused layout & section flow",
        "Lead capture forms (inquiry / quote / booking)",
        "WhatsApp / Email integration",
        "Automated inquiry flow (auto-reply + follow-up ready)",
        "Analytics & tracking setup",
        "CTA-driven sections for higher conversions",
      ],
    },
    {
      title: "Smart Website (AI-Powered)",
      badge: "Automation & scale",
      popular: false,
      included: [
        "Everything in Growth Website",
        "AI chat assistant for visitor support",
        "Smart lead qualification (hot / warm / cold)",
        "Automated follow-ups (WhatsApp / Email)",
        "CRM-ready integration (Sheets / Notion / DB)",
        "Advanced form → workflow logic",
        "Scalable backend-ready setup",
      ],
    },
  ];

  const services = [
    {
      icon: Layout,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that guide users toward action",
    },
    {
      icon: Zap,
      title: "Website Development",
      description:
        "Fast, responsive websites built with modern technologies",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimisation",
      description:
        "Speed and efficiency that improves user experience and SEO",
    },
    {
      icon: Search,
      title: "SEO-Ready Structure",
      description:
        "Technical foundations that help your site rank and get discovered",
    },
    {
      icon: Users,
      title: "Lead Capture Systems",
      description:
        "Strategic conversion points that turn visitors into customers",
    },
  ];

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative overflow-hidden bg-white text-[#07183D]">
      <Navigation />

      {/* =====================================================
    HERO
===================================================== */}

<section
  className="
    relative
    flex
    min-h-screen
    items-center
    justify-center
    overflow-hidden
    bg-white
    px-5
    pb-16
    pt-28
    sm:px-6
    lg:px-10
    lg:pt-32
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
      [background-image:linear-gradient(rgba(0,0,0,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.45)_1px,transparent_1px)]
      [background-size:55px_55px]
      md:[background-size:75px_75px]
    "
  />

  {/* =====================================================
      DECORATIVE CIRCLES — LEFT
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      -bottom-[210px]
      -left-[210px]
      hidden
      h-[500px]
      w-[500px]
      rounded-full
      border
      border-black/[0.045]
      lg:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -bottom-[165px]
      -left-[165px]
      hidden
      h-[410px]
      w-[410px]
      rounded-full
      border
      border-black/[0.035]
      lg:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -bottom-[120px]
      -left-[120px]
      hidden
      h-[320px]
      w-[320px]
      rounded-full
      border
      border-black/[0.03]
      lg:block
    "
  />

  {/* =====================================================
      DECORATIVE CIRCLES — RIGHT
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      -right-[180px]
      top-[8%]
      hidden
      h-[430px]
      w-[430px]
      rounded-full
      border
      border-black/[0.045]
      lg:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-[135px]
      top-[12%]
      hidden
      h-[340px]
      w-[340px]
      rounded-full
      border
      border-black/[0.035]
      lg:block
    "
  />

  {/* =====================================================
      FLOATING ELEMENTS
  ===================================================== */}

  {/* INSTAGRAM */}

  <div
    className="
      pointer-events-none
      absolute
      left-[4%]
      top-[27%]
      hidden
      h-[72px]
      w-[72px]
      items-center
      justify-center
      rounded-[22px]
      border
      border-black/[0.09]
      bg-white
      text-black
      shadow-[0_18px_50px_rgba(0,0,0,0.055)]
      lg:flex
    "
  >
    <Instagram size={27} strokeWidth={1.65} />
  </div>

  {/* CAMERA */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-[25%]
      left-[7%]
      hidden
      h-[62px]
      w-[62px]
      items-center
      justify-center
      rounded-full
      border
      border-black/[0.09]
      bg-white
      text-black
      shadow-[0_15px_45px_rgba(0,0,0,0.045)]
      lg:flex
    "
  >
    <Camera size={24} strokeWidth={1.65} />
  </div>

  {/* MONITOR */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-[7%]
      left-[11%]
      hidden
      h-[72px]
      w-[72px]
      items-center
      justify-center
      rounded-[22px]
      border
      border-black/[0.09]
      bg-white
      text-black
      shadow-[0_18px_50px_rgba(0,0,0,0.05)]
      lg:flex
    "
  >
    <Monitor size={28} strokeWidth={1.65} />
  </div>

  {/* LAYOUT */}

  <div
    className="
      pointer-events-none
      absolute
      right-[7%]
      top-[20%]
      hidden
      h-[72px]
      w-[72px]
      items-center
      justify-center
      rounded-[22px]
      border
      border-black/[0.09]
      bg-white
      text-black
      shadow-[0_18px_50px_rgba(0,0,0,0.05)]
      lg:flex
    "
  >
    <Layout size={28} strokeWidth={1.65} />
  </div>

  {/* CODE */}

  <div
    className="
      pointer-events-none
      absolute
      right-[7%]
      top-[57%]
      hidden
      h-[72px]
      w-[72px]
      items-center
      justify-center
      rounded-[22px]
      border
      border-black/[0.09]
      bg-white
      text-black
      shadow-[0_18px_50px_rgba(0,0,0,0.05)]
      lg:flex
    "
  >
    <Code2 size={29} strokeWidth={1.65} />
  </div>

  {/* ANALYTICS */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-[8%]
      right-[12%]
      hidden
      h-[68px]
      w-[68px]
      items-center
      justify-center
      rounded-[20px]
      border
      border-black/[0.09]
      bg-white
      text-black
      shadow-[0_18px_50px_rgba(0,0,0,0.05)]
      lg:flex
    "
  >
    <BarChart3 size={27} strokeWidth={1.65} />
  </div>

  {/* SMALL DECORATIONS */}

  <Sparkles
    size={24}
    strokeWidth={1.5}
    className="
      pointer-events-none
      absolute
      left-[15%]
      top-[18%]
      hidden
      text-black
      lg:block
    "
  />

  <span
    className="
      pointer-events-none
      absolute
      right-[8%]
      top-[43%]
      hidden
      text-[30px]
      font-light
      text-black/35
      lg:block
    "
  >
    +
  </span>

  <span
    className="
      pointer-events-none
      absolute
      left-[20%]
      top-[17%]
      hidden
      h-[6px]
      w-[6px]
      rounded-full
      bg-black
      lg:block
    "
  />

  <span
    className="
      pointer-events-none
      absolute
      bottom-[11%]
      right-[25%]
      hidden
      h-[5px]
      w-[5px]
      rounded-full
      bg-black/60
      lg:block
    "
  />

  <span
    className="
      pointer-events-none
      absolute
      bottom-[13%]
      left-[25%]
      hidden
      h-[5px]
      w-[5px]
      rounded-full
      bg-black/60
      lg:block
    "
  />

  {/* =====================================================
      HERO CONTENT
  ===================================================== */}

  <div
    className="
      relative
      z-10
      mx-auto
      w-full
      max-w-[1450px]
      text-center
    "
  >
    {/* =====================================================
        SMALL LABEL
    ===================================================== */}

    <div
      className="
        mx-auto
        mb-9
        inline-flex
        items-center
        gap-4
        rounded-full
        border
        border-black/15
        bg-white
        px-6
        py-3
      "
    >
      <span className="h-[5px] w-[5px] rounded-full bg-black" />

      <span
        className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.42em]
          text-black/55
        "
      >
        Digital Experiences
      </span>

      <span className="h-[5px] w-[5px] rounded-full bg-black" />
    </div>

    {/* =====================================================
        MAIN HEADING
    ===================================================== */}

    <div className="mx-auto max-w-[1250px]">

      {/* WEBSITES THAT */}

      <h1
        className="
          text-[52px]
          font-black
          uppercase
          leading-[0.82]
          tracking-[-0.07em]
          text-black
          sm:text-[72px]
          md:text-[94px]
          lg:text-[112px]
          xl:text-[128px]
        "
      >
        Websites That
      </h1>

      {/* WORK BEYOND */}

      <div
        className="
          mt-2
          text-[47px]
          font-black
          uppercase
          leading-[0.82]
          tracking-[-0.065em]
          sm:text-[66px]
          md:text-[85px]
          lg:text-[101px]
          xl:text-[116px]
        "
      >
        <span
          className="
            text-transparent
            [-webkit-text-stroke:1.5px_#000]
          "
        >
          Work Beyond
        </span>
      </div>

      {/* LAUNCH */}

      <div
        className="
          mt-3
          text-[54px]
          font-black
          uppercase
          leading-[0.82]
          tracking-[-0.07em]
          text-black
          sm:text-[76px]
          md:text-[98px]
          lg:text-[116px]
          xl:text-[132px]
        "
      >
        Launch
      </div>
    </div>

    {/* =====================================================
        DESCRIPTION
    ===================================================== */}

    <p
      className="
        mx-auto
        mt-9
        max-w-2xl
        text-[15px]
        font-medium
        tracking-[-0.02em]
        text-black/50
        sm:text-[17px]
        md:text-[19px]
      "
    >
      Designed for performance, clarity, and scale.
    </p>

    {/* =====================================================
        SMALL DIVIDER
    ===================================================== */}

    <div
      className="
        mx-auto
        mt-8
        flex
        items-center
        justify-center
        gap-5
      "
    >
      <span className="h-px w-20 bg-gradient-to-r from-transparent to-black/30" />

      <Sparkles
        size={15}
        strokeWidth={1.6}
        className="text-black"
      />

      <span className="h-px w-20 bg-gradient-to-l from-transparent to-black/30" />
    </div>

    {/* =====================================================
        ACTIONS
    ===================================================== */}

    <div
      className="
        mt-9
        flex
        flex-wrap
        items-center
        justify-center
        gap-4
      "
    >
      {/* EXPLORE SYSTEMS */}

      <button
        onClick={() => scrollToId("what-we-build")}
        className="
          group
          flex
          min-w-[250px]
          items-center
          justify-between
          rounded-full
          border
          border-black
          bg-black
          px-7
          py-[18px]
          text-[14px]
          font-bold
          text-white
          transition-all
          duration-300

          hover:-translate-y-1
          hover:bg-white
          hover:text-black
          hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        "
      >
        <span>Explore Systems</span>

        <ArrowRight
          size={17}
          strokeWidth={1.7}
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
          min-w-[250px]
          items-center
          justify-between
          rounded-full
          border
          border-black/20
          bg-white
          px-7
          py-[18px]
          text-[14px]
          font-bold
          text-black
          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-black
          hover:bg-black
          hover:text-white
          hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        "
      >
        <span>Start a Project</span>

        <ArrowUpRight
          size={17}
          strokeWidth={1.7}
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
        />
      </button>
    </div>

    {/* =====================================================
        SCROLL
    ===================================================== */}

    <button
      onClick={() => scrollToId("what-we-build")}
      className="
        group
        mx-auto
        mt-10
        flex
        flex-col
        items-center
        gap-2
        text-black/35
        transition-colors
        duration-300
        hover:text-black
      "
    >
      <span
        className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.42em]
        "
      >
        Scroll to discover
      </span>

      <span
        className="
          text-[24px]
          font-light
          transition-transform
          duration-300
          group-hover:translate-y-1
        "
      >
        ↓
      </span>
    </button>
  </div>
</section>
      {/* =====================================================
    WHAT WE BUILD
===================================================== */}

{(() => {
  const WhatWeBuildCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [direction, setDirection] = useState<"next" | "prev">("next");
    const [isAnimating, setIsAnimating] = useState(false);

    const nextService = () => {
      if (isAnimating) return;

      setDirection("next");
      setIsAnimating(true);

      setActiveIndex((prev) => (prev + 1) % services.length);

      window.setTimeout(() => {
        setIsAnimating(false);
      }, 650);
    };

    const prevService = () => {
      if (isAnimating) return;

      setDirection("prev");
      setIsAnimating(true);

      setActiveIndex(
        (prev) => (prev - 1 + services.length) % services.length
      );

      window.setTimeout(() => {
        setIsAnimating(false);
      }, 650);
    };

    const goToService = (index: number) => {
      if (index === activeIndex || isAnimating) return;

      setDirection(index > activeIndex ? "next" : "prev");
      setIsAnimating(true);
      setActiveIndex(index);

      window.setTimeout(() => {
        setIsAnimating(false);
      }, 650);
    };

    useEffect(() => {
      const interval = window.setInterval(() => {
        setDirection("next");
        setActiveIndex((prev) => (prev + 1) % services.length);
      }, 4000);

      return () => window.clearInterval(interval);
    }, []);

    const visibleServices = [-1, 0, 1].map((offset) => {
      const serviceIndex =
        (activeIndex + offset + services.length) % services.length;

      return {
        service: services[serviceIndex],
        serviceIndex,
        offset,
      };
    });

    return (
      <section
        id="what-we-build"
        className="
          relative
          overflow-hidden
          border-t
          border-black/[0.07]
          bg-white
          px-5
          py-24
          sm:px-6
          md:py-28
          lg:px-10
        "
      >
        {/* BACKGROUND GRID */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(rgba(0,0,0,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.45)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1450px]">

          {/* =====================================================
              HEADER
          ===================================================== */}

          <div
            className="
              grid
              gap-12
              border-b
              border-black/[0.10]
              pb-12
              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-end
              lg:gap-20
              lg:pb-14
            "
          >
            {/* LEFT */}

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[6px] w-[6px] rounded-full bg-black" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.4em]
                    text-black/45
                  "
                >
                  Our Capabilities
                </span>
              </div>

              <h2
                className="
                  text-[58px]
                  font-black
                  uppercase
                  leading-[0.82]
                  tracking-[-0.065em]
                  text-black
                  sm:text-[72px]
                  md:text-[88px]
                  lg:text-[96px]
                "
              >
                What We

                <span
                  className="
                    mt-2
                    block
                    text-transparent
                    [-webkit-text-stroke:1.5px_#000]
                  "
                >
                  Build
                </span>
              </h2>
            </div>

            {/* RIGHT */}

            <div className="pb-1 lg:pb-4">
              <span className="mb-6 block h-[2px] w-10 bg-black" />

              <p
                className="
                  max-w-[470px]
                  text-[16px]
                  font-medium
                  leading-[1.8]
                  tracking-[-0.025em]
                  text-black/50
                  md:text-[17px]
                "
              >
                Fast, responsive websites built with modern technologies and
                strategic systems designed for performance, visibility, and
                sustainable growth.
              </p>
            </div>
          </div>

          {/* =====================================================
              COUNTER + CONTROLS
          ===================================================== */}

          <div
            className="
              flex
              items-center
              justify-between
              py-8
              md:py-10
            "
          >
            {/* COUNTER */}

            <div className="flex items-center gap-3">
              <span
                className="
                  text-[11px]
                  font-black
                  tracking-[0.24em]
                  text-black
                "
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="text-[11px] font-bold text-black/20">
                /
              </span>

              <span
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.24em]
                  text-black/35
                "
              >
                {String(services.length).padStart(2, "0")}
              </span>
            </div>

            {/* ARROWS */}

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevService}
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
                onClick={nextService}
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
              CAROUSEL
          ===================================================== */}

          <div className="overflow-hidden">
            <div
              className={`
                grid
                gap-5
                lg:grid-cols-3
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]

                ${
                  isAnimating
                    ? direction === "next"
                      ? "lg:-translate-x-[8px]"
                      : "lg:translate-x-[8px]"
                    : "translate-x-0"
                }
              `}
            >
              {visibleServices.map(
                ({ service, serviceIndex, offset }) => {
                  const Icon = service.icon;

                  // IMPORTANT:
                  // THE MIDDLE POSITION IS ALWAYS BLACK.
                  const isCenter = offset === 0;

                  return (
                    <article
                      key={`${serviceIndex}-${activeIndex}-${offset}`}
                      className={`
                        relative
                        min-h-[470px]
                        overflow-hidden
                        rounded-[30px]
                        border
                        p-8
                        transition-all
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        md:p-9

                        ${
                          isCenter
                            ? `
                              border-black
                              bg-black
                              text-white
                              shadow-[0_30px_80px_rgba(0,0,0,0.16)]
                              lg:-translate-y-2
                            `
                            : `
                              border-black/[0.10]
                              bg-white
                              text-black
                              shadow-[0_10px_40px_rgba(0,0,0,0.025)]
                            `
                        }
                      `}
                    >
                      {/* LARGE NUMBER */}

                      <span
                        className={`
                          pointer-events-none
                          absolute
                          right-7
                          top-4
                          text-[108px]
                          font-black
                          leading-none
                          tracking-[-0.085em]

                          ${
                            isCenter
                              ? "text-white/[0.065]"
                              : "text-black/[0.045]"
                          }
                        `}
                      >
                        {String(serviceIndex + 1).padStart(2, "0")}
                      </span>

                      <div className="relative z-10 flex min-h-[398px] flex-col">

                        {/* ICON */}

                        <div
                          className={`
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-full
                            border
                            transition-all
                            duration-500

                            ${
                              isCenter
                                ? `
                                  border-white/20
                                  bg-black
                                  text-white
                                `
                                : `
                                  border-black/10
                                  bg-white
                                  text-black
                                `
                            }
                          `}
                        >
                          <Icon size={22} strokeWidth={1.6} />
                        </div>

                        {/* CONTENT */}

                        <div className="mt-auto">

                          {/* SYSTEM */}

                          <span
                            className={`
                              mb-5
                              block
                              text-[9px]
                              font-black
                              uppercase
                              tracking-[0.35em]

                              ${
                                isCenter
                                  ? "text-white/45"
                                  : "text-black/40"
                              }
                            `}
                          >
                            System{" "}
                            {String(serviceIndex + 1).padStart(2, "0")}
                          </span>

                          {/* TITLE */}

                          <h3
                            className={`
                              mb-5
                              max-w-[340px]
                              text-[30px]
                              font-black
                              leading-[0.98]
                              tracking-[-0.055em]
                              md:text-[32px]

                              ${
                                isCenter
                                  ? "text-white"
                                  : "text-black"
                              }
                            `}
                          >
                            {service.title}
                          </h3>

                          {/* DESCRIPTION */}

                          <p
                            className={`
                              max-w-[340px]
                              text-[14px]
                              font-medium
                              leading-6
                              tracking-[-0.015em]

                              ${
                                isCenter
                                  ? "text-white/50"
                                  : "text-black/50"
                              }
                            `}
                          >
                            {service.description}
                          </p>

                          {/* FOOTER */}

                          <div
                            className={`
                              mt-9
                              flex
                              items-center
                              justify-between
                              border-t
                              pt-6

                              ${
                                isCenter
                                  ? "border-white/15"
                                  : "border-black/10"
                              }
                            `}
                          >
                            <span
                              className={`
                                text-[9px]
                                font-black
                                uppercase
                                tracking-[0.35em]

                                ${
                                  isCenter
                                    ? "text-white"
                                    : "text-black"
                                }
                              `}
                            >
                              Explore
                            </span>

                            <div
                              className={`
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                border
                                transition-all
                                duration-300

                                ${
                                  isCenter
                                    ? `
                                      border-white/20
                                      text-white
                                    `
                                    : `
                                      border-black/10
                                      text-black
                                    `
                                }
                              `}
                            >
                              <ArrowUpRight
                                size={16}
                                strokeWidth={1.6}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                }
              )}
            </div>
          </div>

          {/* =====================================================
              PAGINATION
          ===================================================== */}

          <div
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-3
            "
          >
            {services.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToService(index)}
                aria-label={`Go to service ${index + 1}`}
                className={`
                  h-[4px]
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    index === activeIndex
                      ? "w-10 bg-black"
                      : "w-7 bg-black/15 hover:bg-black/30"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

  return <WhatWeBuildCarousel />;
})()}
      {/* =====================================================
    WEBSITE SYSTEM
===================================================== */}

<section
  className="
    relative
    overflow-hidden
    border-t
    border-black/[0.07]
    bg-white
    px-6
    py-24
    md:py-28
    lg:px-10
  "
>
  {/* SUBTLE BACKGROUND GRID */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.018]
      [background-image:linear-gradient(rgba(0,0,0,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.45)_1px,transparent_1px)]
      [background-size:72px_72px]
    "
  />

  {/* DECORATIVE CIRCLES */}
  <div
    className="
      pointer-events-none
      absolute
      -left-[180px]
      top-[170px]
      h-[430px]
      w-[430px]
      rounded-full
      border
      border-black/[0.035]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -right-[220px]
      bottom-[40px]
      h-[500px]
      w-[500px]
      rounded-full
      border
      border-black/[0.035]
    "
  />

  <div className="relative z-10 mx-auto max-w-[1450px]">

    {/* =====================================================
        HEADER
    ===================================================== */}

    <div
      className="
        grid
        gap-12
        border-b
        border-black/[0.10]
        pb-12
        lg:grid-cols-[1.2fr_0.8fr]
        lg:items-end
        lg:gap-20
        lg:pb-14
      "
    >
      {/* LEFT */}

      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="h-[6px] w-[6px] rounded-full bg-black" />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.4em]
              text-black/45
            "
          >
            Choose Your System
          </span>
        </div>

        <h2
          className="
            text-[58px]
            font-black
            uppercase
            leading-[0.82]
            tracking-[-0.065em]
            text-black
            sm:text-[72px]
            md:text-[88px]
            lg:text-[96px]
          "
        >
          Website

          <span
            className="
              mt-2
              block
              text-transparent
              [-webkit-text-stroke:1.5px_#000]
            "
          >
            System
          </span>
        </h2>
      </div>

      {/* RIGHT */}

      <div className="relative pb-1 lg:pb-4">
        <span className="mb-6 block h-[2px] w-10 bg-black" />

        <p
          className="
            max-w-[470px]
            text-[16px]
            font-medium
            leading-[1.8]
            tracking-[-0.025em]
            text-black/50
            md:text-[17px]
          "
        >
          Choose the level of system you want to build
        </p>

        <span
          className="
            absolute
            right-3
            top-0
            text-[22px]
            font-light
            text-black/20
          "
        >
          +
        </span>
      </div>
    </div>

    {/* =====================================================
        PACKAGE CARDS
    ===================================================== */}

    <div
      className="
        mt-8
        grid
        items-stretch
        gap-0
        lg:grid-cols-3
      "
    >
      {packages.map((pkg, idx) => (
        <div
          key={idx}
          className={`
            group
            relative
            min-h-[700px]
            overflow-hidden
            border
            border-black/[0.10]
            bg-white
            p-8
            text-black
            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            hover:z-20
            hover:-translate-y-2
            hover:border-black
            hover:bg-black
            hover:text-white
            hover:shadow-[0_30px_80px_rgba(0,0,0,0.16)]

            ${
              idx === 0
                ? "rounded-t-[28px] lg:rounded-l-[28px] lg:rounded-tr-none"
                : ""
            }

            ${
              idx === packages.length - 1
                ? "rounded-b-[28px] lg:rounded-r-[28px] lg:rounded-bl-none"
                : ""
            }

            ${
              idx !== 0
                ? "border-t-0 lg:-ml-px lg:border-t lg:border-l-0"
                : ""
            }
          `}
        >
          {/* =====================================================
              DECORATIVE TOP-RIGHT RINGS
          ===================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[48px]
              -top-[48px]
              h-[150px]
              w-[150px]
              rounded-full
              border
              border-black/[0.045]
              transition-colors
              duration-500
              group-hover:border-white/[0.07]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-[20px]
              -top-[20px]
              h-[95px]
              w-[95px]
              rounded-full
              border
              border-black/[0.04]
              transition-colors
              duration-500
              group-hover:border-white/[0.06]
            "
          />

          <div className="relative z-10 flex h-full flex-col">

            {/* =====================================================
                TOP ROW
            ===================================================== */}

            <div className="flex min-h-[46px] items-start justify-between gap-4">
              {/* SYSTEM NUMBER */}

              <span
                className="
                  pt-1
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-black/40
                  transition-colors
                  duration-500
                  group-hover:text-white/40
                "
              >
                System 0{idx + 1}
              </span>

              {/* MOST POPULAR */}

              {pkg.popular && (
                <div
                  className="
                    relative
                    z-20
                    rounded-full
                    border
                    border-black/15
                    bg-white
                    px-4
                    py-2
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-black
                    transition-all
                    duration-500

                    group-hover:border-white/25
                    group-hover:bg-transparent
                    group-hover:text-white
                  "
                >
                  Most Popular
                </div>
              )}

              {/* ARROW FOR NON-POPULAR CARDS */}

              {!pkg.popular && (
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/[0.08]
                    text-black/70
                    transition-all
                    duration-500

                    group-hover:border-white/15
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </div>
              )}
            </div>

            {/* =====================================================
                TITLE
            ===================================================== */}

            <h3
              className="
                mt-12
                max-w-[330px]
                text-[36px]
                font-black
                leading-[0.95]
                tracking-[-0.055em]
                text-black
                transition-colors
                duration-500
                group-hover:text-white
                md:text-[38px]
              "
            >
              {pkg.title}
            </h3>

            {/* =====================================================
                BADGE
            ===================================================== */}

            <div
              className="
                mt-6
                inline-flex
                w-fit
                items-center
                rounded-full
                border
                border-black/10
                px-4
                py-2
                text-[10px]
                font-medium
                tracking-[-0.01em]
                text-black/55
                transition-all
                duration-500

                group-hover:border-white/20
                group-hover:bg-white/[0.03]
                group-hover:text-white/60
              "
            >
              {pkg.badge}
            </div>

            {/* =====================================================
                DIVIDER
            ===================================================== */}

            <div
              className="
                my-8
                h-px
                w-full
                bg-black/10
                transition-colors
                duration-500
                group-hover:bg-white/15
              "
            />

            {/* =====================================================
                WHAT'S INCLUDED
            ===================================================== */}

            <span
              className="
                mb-6
                text-[9px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-black/35
                transition-colors
                duration-500
                group-hover:text-white/40
              "
            >
              What's Included
            </span>

            {/* =====================================================
                FEATURES
            ===================================================== */}

            <ul className="mb-10 space-y-[18px]">
              {pkg.included.map((item, i) => (
                <li
                  key={i}
                  className="
                    flex
                    items-start
                    gap-4
                    text-[13px]
                    font-medium
                    leading-5
                  "
                >
                  {/* SMALL DOT */}

                  <span
                    className="
                      mt-[8px]
                      h-[4px]
                      w-[4px]
                      shrink-0
                      rounded-full
                      bg-black
                      transition-colors
                      duration-500
                      group-hover:bg-white
                    "
                  />

                  <span
                    className="
                      text-black/70
                      transition-colors
                      duration-500
                      group-hover:text-white/65
                    "
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* =====================================================
                CTA
            ===================================================== */}

            <button
              onClick={() => scrollToId("contact")}
              className="
                group/button
                mt-auto
                flex
                w-full
                items-center
                justify-between
                rounded-full
                bg-black
                px-6
                py-[17px]
                text-[11px]
                font-bold
                tracking-[-0.01em]
                text-white
                transition-all
                duration-500

                group-hover:bg-white
                group-hover:text-black

                hover:scale-[1.015]
              "
            >
              <span>Start with {pkg.title}</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:-translate-y-0.5
                  group-hover/button:translate-x-0.5
                "
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}