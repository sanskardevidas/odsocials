import Hero from "../components/HeroV2/Hero";
import SwipeInSection from "../components/SwipeInSection";
import "@fontsource/instrument-serif";
import ContactSection from "../components/ContactSection";
import { Camera, Layout, Zap } from "lucide-react";
import React from "react";


const brandLogos = [
  { src: '/brands/adnovalogo.png', alt: 'Adnova' },
  { src: '/brands/hokkaidologo.png', alt: 'Hokkaido' },
  { src: '/brands/tihbiggslogo.png', alt: 'TIH Biggs' },
  { src: '/brands/southamptonlogo.png', alt: 'Southampton' },
  { src: '/brands/cozysevenlogo.png', alt: 'Cozy Seven' },
  { src: '/brands/artistogramlogo.png', alt: 'Artistogram' },
  { src: '/brands/sakshamsmartladylogo.png', alt: 'Saksham Smart Lady' },
  { src: '/brands/sakshamnationlogo.png', alt: 'Saksham Nation' },
  { src: '/brands/therafyxlogo.png', alt: 'Therafyx' },
  { src: '/brands/Hekatedigitallogo.png', alt: 'Hekate Digital' },
  { src: '/brands/UOSlogo.png', alt: 'UOS' },
  { src: '/brands/digiworkclublogo.png', alt: 'Digiwork Club' },
];

export default function Home() {
  // =========================================
  // BRAND SCROLLER
  // =========================================

  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const isDown = React.useRef(false);
  const startX = React.useRef(0);
  const startScrollLeft = React.useRef(0);

  // =========================================
  // WORKFLOW ANIMATION
  // =========================================

  const workflowRef = React.useRef<HTMLElement | null>(null);

  const [activeWorkflowStep, setActiveWorkflowStep] =
    React.useState(0);

  const [workflowStarted, setWorkflowStarted] =
    React.useState(false);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;

    isDown.current = true;
    startX.current = e.clientX;
    startScrollLeft.current = el.scrollLeft;

    el.classList.add('dragging');
    try {
      el.setPointerCapture(e.pointerId);
    } catch {}
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el || !isDown.current) return;

    const dx = e.clientX - startX.current;
    el.scrollLeft = startScrollLeft.current - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;

    isDown.current = false;
    el.classList.remove('dragging');
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {}
  };
  // =========================================
  //  WORKFLOW — START WHEN SECTION IS VISIBLE
  // =========================================
  React.useEffect(() => {
    const section = workflowRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !workflowStarted) {
        setWorkflowStarted(true);
        setActiveWorkflowStep(1);
        }
      },
      {
        threshold: 0.25,
      }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, [workflowStarted]);
  // ========================================
  // WORKFLOW — SHOW STEPS ONE BY ONE
  // ========================================
  React.useEffect(() => {
    if (!workflowStarted) return;
    const timers = [
      window.setTimeout(() => {
        setActiveWorkflowStep(2);
      }, 700),
      window.setTimeout(() => {
        setActiveWorkflowStep(3);
      }, 1400),
      window.setTimeout(() => {
        setActiveWorkflowStep(4);
      }, 2100),
      window.setTimeout(() => {

        setActiveWorkflowStep(5);
      }, 2800),
    ];
    return () => {
      timers.forEach((timer) => {
        window.clearTimeout(timer);
      });
    };
  }, [workflowStarted]);

  return (
  <div className="relative">
    {/* HERO */}
    <Hero />
    
      <SwipeInSection>
        <div className="mx-auto max-w-6xl text-center">
          {/* Top Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-2 text-xs uppercase tracking-[0.35em] text-white/60 backdrop-blur">
            <span className="h-1 w-1 rounded-full bg-white/60" />
              OUR APPROACH
            <span className="h-1 w-1 rounded-full bg-white/60" />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="
                absolute
                left-1/2
                top-40
                h-[700px]
                w-[700px]
                -translate-x-1/2
                rounded-full
                bg-white/[0.03]
                blur-[180px]
              "
            />
          </div>
          {/* Heading */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
              [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
              [background-size:70px_70px]
            "
          />
          <div className="absolute left-24 top-32 space-y-2 opacity-20">
            <div className="h-12 w-12 border border-white/20"/>
            <div className="ml-12 h-12 w-12 border border-white/20"/>
          </div>
          <div className="absolute right-28 bottom-24 space-y-2 opacity-20">
            <div className="ml-12 h-12 w-12 border border-white/20"/>
            <div className="h-12 w-12 border border-white/20"/>
          </div>
          <h2 className="leading-none">
            <span
              className="
                block
                font-black
                uppercase
                tracking-tight
                text-5xl
                sm:text-7xl
                lg:text-[7rem]
                text-white
                "
              >
                WE DON'T GUESS.
            </span>
            <div className="absolute top-36 left-40 grid grid-cols-5 gap-2 opacity-20">
              {[...Array(25)].map((_, i) => (
                <span
                  key={i}
                  className="h-1 w-1 rounded-full bg-white"
                />
              ))}
            </div>
            <span
              className="
                block
                font-black
                uppercase
                tracking-tight
                text-5xl
                sm:text-7xl
                lg:text-[7rem]
                text-transparent
                [-webkit-text-stroke:1.5px_rgba(255,255,255,.7)]
                "
            >
              WE BUILD SYSTEMS.
            </span>
          </h2>
          <div className="absolute left-0 top-1/2 h-px w-40 bg-white/10"/>
          <div className="absolute right-0 top-1/3 h-px w-52 bg-white/10"/>
          {/* Paragraph */}
          <p
          className="
            mx-auto
            mt-10
            max-w-2xl
            text-lg
            leading-8
            text-white/65
            "
          >
            Growth doesn&apos;t come from random actions.
            <br />
            It comes from structure, clarity,
            and repeatable systems.
          </p>
          {/* Divider */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-28 bg-white/15" />
            <div className="h-2 w-2 rotate-45 border border-white/30" />
            <div className="h-px w-28 bg-white/15" />
          </div>
          {/* Bottom */}
        </div>
      </SwipeInSection>

      {/* ==============================
    SERVICES — WHAT WE BUILD
================================ */}

<section
  id="services"
  className="
    relative
    overflow-hidden
    bg-white
    px-6
    py-28
    sm:py-32
    lg:py-40
  "
>
  {/* =====================================
      BACKGROUND ELEMENTS
  ====================================== */}

  <div className="pointer-events-none absolute inset-0">

    {/* Main very subtle grid */}

    <div
      className="
        absolute
        inset-0
        opacity-[0.55]
        [background-image:linear-gradient(rgba(15,15,15,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,15,0.035)_1px,transparent_1px)]
        [background-size:72px_72px]
      "
    />

    {/* Center soft purple wash */}

    <div
      className="
        absolute
        left-1/2
        top-[22%]
        h-[580px]
        w-[580px]
        -translate-x-1/2
        rounded-full
        bg-purple-300/20
        blur-[150px]
      "
    />

    {/* Left purple wash */}

    <div
      className="
        absolute
        -left-40
        top-[48%]
        h-[420px]
        w-[420px]
        rounded-full
        bg-violet-200/25
        blur-[130px]
      "
    />

    {/* Right blue wash */}

    <div
      className="
        absolute
        -right-40
        bottom-[5%]
        h-[430px]
        w-[430px]
        rounded-full
        bg-blue-200/20
        blur-[140px]
      "
    />

    {/* Top-left dot matrix */}

    <div
      className="
        absolute
        left-6
        top-20
        hidden
        grid-cols-6
        gap-[7px]
        opacity-35
        sm:grid
        lg:left-20
        lg:top-28
      "
    >
      {[...Array(36)].map((_, i) => (
        <span
          key={i}
          className="h-[3px] w-[3px] rounded-full bg-neutral-500"
        />
      ))}
    </div>

    {/* Right decorative squares */}

    <div
      className="
        absolute
        right-8
        top-24
        hidden
        opacity-40
        sm:block
        lg:right-24
      "
    >
      <div
        className="
          h-11
          w-11
          border
          border-neutral-300
        "
      />

      <div
        className="
          ml-10
          mt-2
          h-11
          w-11
          border
          border-purple-300
        "
      />

      <div
        className="
          -ml-4
          mt-2
          h-7
          w-7
          border
          border-neutral-200
        "
      />
    </div>

    {/* Tiny plus — left */}

    <div
      className="
        absolute
        left-[8%]
        top-[41%]
        hidden
        text-2xl
        font-light
        text-neutral-300
        lg:block
      "
    >
      +
    </div>

    {/* Tiny plus — right */}

    <div
      className="
        absolute
        right-[9%]
        bottom-[26%]
        hidden
        text-3xl
        font-light
        text-purple-300
        lg:block
      "
    >
      +
    </div>

    {/* Left horizontal detail */}

    <div
      className="
        absolute
        left-0
        top-[34%]
        hidden
        items-center
        lg:flex
      "
    >
      <div className="h-px w-28 bg-neutral-200" />

      <div
        className="
          h-2
          w-2
          rotate-45
          border
          border-neutral-300
        "
      />
    </div>

    {/* Right horizontal detail */}

    <div
      className="
        absolute
        right-0
        top-[52%]
        hidden
        items-center
        lg:flex
      "
    >
      <div
        className="
          h-2
          w-2
          rotate-45
          border
          border-purple-300
        "
      />

      <div className="h-px w-36 bg-neutral-200" />
    </div>

    {/* Large outline circle */}

    <div
      className="
        absolute
        -right-20
        top-[33%]
        hidden
        h-64
        w-64
        rounded-full
        border
        border-neutral-100
        xl:block
      "
    />

    {/* Small accent circle */}

    <div
      className="
        absolute
        right-[18%]
        top-[15%]
        h-2
        w-2
        rounded-full
        bg-purple-500/70
      "
    />

    {/* Bottom dotted pattern */}

    <div
      className="
        absolute
        bottom-16
        right-[10%]
        hidden
        grid-cols-5
        gap-2
        opacity-20
        lg:grid
      "
    >
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="h-[3px] w-[3px] rounded-full bg-neutral-500"
        />
      ))}
    </div>

  </div>

  {/* =====================================
      MAIN CONTENT
  ====================================== */}

  <div
    className="
      relative
      z-10
      mx-auto
      max-w-7xl
    "
  >

    {/* =====================================
        BADGE
    ====================================== */}

    <div className="flex justify-center">

      <div
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-neutral-200
          bg-white/80
          px-5
          py-2.5
          shadow-[0_8px_30px_rgba(0,0,0,0.04)]
          backdrop-blur-md
          sm:px-6
        "
      >

        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-purple-500
          "
        />

        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.30em]
            text-neutral-700
            sm:text-[11px]
            sm:tracking-[0.35em]
          "
        >
          WHAT WE BUILD
        </span>

        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-purple-500
          "
        />

      </div>

    </div>

    {/* =====================================
        HEADING
    ====================================== */}

    <div
      className="
        mx-auto
        mt-10
        max-w-5xl
        text-center
        sm:mt-12
      "
    >

      <h2
        className="
          leading-[0.86]
          tracking-[-0.055em]
        "
      >

        {/* Solid heading */}

        <span
          className="
            block
            text-[3.2rem]
            font-black
            uppercase
            text-neutral-950
            sm:text-7xl
            md:text-8xl
            lg:text-[7rem]
          "
        >
          BUILDING
        </span>

        {/* Outline heading */}

        <span
          className="
            mt-2
            block
            text-[3.2rem]
            font-black
            uppercase
            text-transparent
            sm:text-7xl
            md:text-8xl
            lg:text-[7rem]
            [-webkit-text-stroke:1.3px_rgba(10,10,10,0.30)]
            sm:[-webkit-text-stroke:1.5px_rgba(10,10,10,0.30)]
          "
        >
          DIGITAL SYSTEMS
        </span>

      </h2>

      {/* Purple visual accent */}

      <div
        className="
          mx-auto
          mt-8
          h-[3px]
          w-16
          rounded-full
          bg-gradient-to-r
          from-purple-500
          via-violet-500
          to-purple-300
          sm:mt-10
          sm:w-20
        "
      />

      {/* Description */}

      <p
        className="
          mx-auto
          mt-7
          max-w-2xl
          text-base
          font-medium
          leading-7
          text-neutral-600
          sm:text-lg
          sm:leading-8
        "
      >
        Every service is designed to work together—
        generating attention, capturing leads,
        and creating repeatable growth.
      </p>

    </div>

    {/* =====================================
        DIVIDER
    ====================================== */}

    <div
      className="
        mb-16
        mt-12
        flex
        items-center
        justify-center
        gap-4
        sm:mb-20
        sm:mt-14
      "
    >

      <div
        className="
          h-px
          w-16
          bg-gradient-to-r
          from-transparent
          to-neutral-300
          sm:w-28
        "
      />

      <div
        className="
          flex
          h-8
          w-8
          rotate-45
          items-center
          justify-center
          border
          border-neutral-200
          bg-white
          shadow-sm
        "
      >
        <div
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-purple-500
          "
        />
      </div>

      <div
        className="
          h-px
          w-16
          bg-gradient-to-l
          from-transparent
          to-neutral-300
          sm:w-28
        "
      />

    </div>

    {/* =====================================
        SERVICES GRID
    ====================================== */}

    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
        lg:gap-7
      "
    >

      {[
        {
          icon: Camera,
          title: "Social Media Growth",
          number: "01",
          description:
            "We design content and engagement systems that help brands stay consistent, visible and trusted without guesswork.",
          href: "/social-media",
        },
        {
          icon: Layout,
          title: "Website Building",
          number: "02",
          description:
            "High-performance websites engineered to convert visitors into customers and support long-term growth.",
          href: "/website",
        },
        {
          icon: Zap,
          title: "AI Automation",
          number: "03",
          description:
            "Automation systems that reduce manual work, qualify leads and streamline everyday operations.",
          href: "/ai-automation",
        },
      ].map((item) => (

        <a
          key={item.title}
          href={item.href}
          className="
            group
            relative
            min-h-[420px]
            overflow-hidden
            rounded-[28px]
            border
            border-neutral-200
            bg-white/90
            p-7
            shadow-[0_20px_70px_rgba(15,23,42,0.06)]
            backdrop-blur-md
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-purple-200
            hover:shadow-[0_28px_90px_rgba(109,40,217,0.12)]
            sm:p-8
            lg:min-h-[460px]
          "
        >

          {/* CARD BACKGROUND DECORATION */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              overflow-hidden
              rounded-[28px]
            "
          >

            {/* Purple hover glow */}

            <div
              className="
                absolute
                -left-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-purple-200/50
                blur-[90px]
                opacity-40
                transition-all
                duration-700
                group-hover:scale-125
                group-hover:opacity-70
              "
            />

            {/* Blue hover glow */}

            <div
              className="
                absolute
                -bottom-28
                -right-28
                h-72
                w-72
                rounded-full
                bg-blue-100/60
                blur-[100px]
                opacity-30
                transition-all
                duration-700
                group-hover:scale-125
                group-hover:opacity-60
              "
            />

            {/* Card subtle grid */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.28]
                [background-image:linear-gradient(rgba(15,15,15,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,15,0.025)_1px,transparent_1px)]
                [background-size:36px_36px]
              "
            />

            {/* Decorative corner circle */}

            <div
              className="
                absolute
                -right-14
                -top-14
                h-36
                w-36
                rounded-full
                border
                border-neutral-100
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

          </div>

          {/* CARD CONTENT */}

          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
            "
          >

            {/* Number row */}

            <div
              className="
                flex
                items-center
                justify-between
              "
            >

              <span
                className="
                  text-xs
                  font-bold
                  tracking-[0.4em]
                  text-neutral-400
                "
              >
                {item.number}
              </span>

              <span
                className="
                  h-[6px]
                  w-[6px]
                  rounded-full
                  bg-purple-400
                  transition-all
                  duration-500
                  group-hover:scale-150
                  group-hover:bg-purple-600
                "
              />

            </div>
                        {/* Icon */}

            <div
              className="
                mt-8
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-purple-100
                bg-gradient-to-br
                from-purple-50
                to-violet-100
                shadow-[0_10px_30px_rgba(124,58,237,0.10)]
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
              "
            >

              <item.icon
                size={28}
                className="
                  text-purple-600
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

            </div>

            {/* Title */}

            <h3
              className="
                mt-8
                text-[2rem]
                font-black
                leading-[1]
                tracking-[-0.04em]
                text-neutral-950
              "
            >
              {item.title}
            </h3>

            {/* Accent Line */}

            <div
              className="
                mt-7
                h-[3px]
                w-16
                rounded-full
                bg-gradient-to-r
                from-purple-600
                via-violet-500
                to-transparent
                transition-all
                duration-500
                group-hover:w-28
              "
            />

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[95%]
                text-[15px]
                leading-8
                text-neutral-600
              "
            >
              {item.description}
            </p>

            {/* Decorative large number */}

            <span
              className="
                absolute
                right-8
                top-20
                -z-10
                select-none
                text-[6rem]

                font-black
                leading-none
                text-neutral-100
                transition-all
                duration-50
                group-hover:text-purple-50
              "
              >
                {item.number}
            </span>

            {/* Spacer */}

            <div className="flex-1" />

            {/* Bottom divider */}

            <div
              className="
                mt-10
                mb-7
                h-px
                w-full
                bg-gradient-to-r
                from-neutral-200
                via-neutral-100
                to-transparent
              "
            />

            {/* CTA */}

            <div
              className="
                flex
                items-center
                justify-between
              "
            >

              <div>

                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-neutral-500
                  "
                >
                  Explore
                </span>

              </div>

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-200
                  bg-white
                  transition-all
                  duration-500
                  group-hover:border-purple-300
                  group-hover:bg-purple-50
                  group-hover:translate-x-1
                "
              >

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="
                    text-neutral-900
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                >

                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M9 7H17V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                </svg>

              </div>

            </div>

            {/* Floating accent */}

            <div
              className="
                absolute
                bottom-20
                right-12
                h-2
                w-2
                rounded-full
                bg-purple-400/60
                transition-all
                duration-700
                group-hover:scale-[3]
                group-hover:bg-purple-500/20
              "
            />
                        {/* Bottom animated line */}

            <span
              className="
                absolute
                bottom-0
                left-0
                h-[3px]
                w-0
                bg-gradient-to-r
                from-purple-600
                via-violet-500
                to-blue-400
                transition-all
                duration-700
                group-hover:w-full
              "
            />

            {/* Soft hover border */}

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[28px]
                border
                border-transparent
                transition-all
                duration-500
                group-hover:border-purple-200/70
              "
            />

          </div>

        </a>

      ))}

    </div>

    {/* Bottom Decoration */}

    <div
      className="
        mt-24
        flex
        items-center
        justify-center
        gap-4
      "
    >

      <div
        className="
          h-px
          w-24
          bg-gradient-to-r
          from-transparent
          to-neutral-300
        "
      />

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-neutral-200
          bg-white
          shadow-[0_10px_25px_rgba(0,0,0,0.05)]
        "
      >

        <div
          className="
            h-2
            w-2
            rounded-full
            bg-purple-500
          "
        />

      </div>

      <div
        className="
          h-px
          w-24
          bg-gradient-to-l
          from-transparent
          to-neutral-300
        "
      />

    </div>

  </div>

</section>
      {/* =========================================
            ABOUT
========================================== */}

<section className="relative overflow-hidden bg-white py-36 px-6">

  {/* Background */}

  <div className="absolute inset-0 pointer-events-none">

    {/* Grid */}

    <div
      className="
        absolute
        inset-0
        opacity-[0.04]
        [background-image:linear-gradient(rgba(0,0,0,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.10)_1px,transparent_1px)]
        [background-size:72px_72px]
      "
    />

    {/* Huge ABOUT */}

    <div
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        select-none
        text-[18rem]
        font-black
        tracking-tight
        text-neutral-100
        hidden
        xl:block
      "
    >
      ABOUT
    </div>

    {/* Quote */}

    <div
      className="
        absolute
        left-[10%]
        bottom-[22%]
        text-[18rem]
        leading-none
        text-neutral-100
        hidden
        xl:block
      "
    >
      "
    </div>

    {/* Left Dots */}

    <div
      className="
        absolute
        left-16
        top-24
        hidden
        grid-cols-4
        gap-3
        lg:grid
      "
    >
      {[...Array(16)].map((_, i) => (
        <span
          key={i}
          className="w-[4px] h-[4px] rounded-full bg-neutral-400"
        />
      ))}
    </div>

    {/* Right Squares */}

    <div
      className="
        absolute
        right-20
        top-40
        hidden
        lg:block
      "
    >

      <div className="w-14 h-14 border border-neutral-300" />

      <div className="w-14 h-14 border border-neutral-300 ml-12 mt-4" />

      <div className="w-10 h-10 border border-neutral-300 ml-24 mt-4" />

    </div>

    {/* Circle */}

    <div
      className="
        absolute
        -right-32
        -top-32
        w-96
        h-96
        rounded-full
        border
        border-neutral-200
      "
    />

    <div
      className="
        absolute
        -left-40
        bottom-[-120px]
        w-[450px]
        h-[450px]
        rounded-full
        border
        border-neutral-100
      "
    />

  </div>

  {/* Content */}

  <div className="relative z-10 max-w-6xl mx-auto">

    {/* Left Number */}

    <div
      className="
        hidden
        xl:flex
        absolute
        left-0
        top-0
        flex-col
        items-center
      "
    >

      <span
        className="
          text-5xl
          font-black
          tracking-[0.35em]
        "
      >
        02
      </span>

      <div className="w-px h-52 bg-neutral-300 my-8" />

      <span
        className="
          [writing-mode:vertical-rl]
          rotate-180
          uppercase
          tracking-[0.5em]
          text-sm
          text-neutral-600
        "
      >
        About OD Socials
      </span>

    </div>

    {/* Heading */}

    <div className="text-center">

      <h2 className="leading-none">

        <span
          className="
            block
            text-6xl
            md:text-8xl
            font-black
            tracking-tight
            text-black
          "
        >
          ABOUT
        </span>

        <span
          className="
            block
            text-6xl
            md:text-8xl
            font-black
            tracking-tight
            text-transparent
            [-webkit-text-stroke:1.5px_rgba(0,0,0,.25)]
          "
        >
          OD SOCIALS
        </span>

      </h2>
    </div>

      {/* Divider */}
      <div className="flex items-center justify-center gap-5 mt-10 mb-20">

  <div className="h-px w-28 bg-neutral-300" />

  <div className="w-3 h-3 rotate-45 border border-neutral-400" />

  <div className="h-px w-28 bg-neutral-300" />

</div>

{/* Content */}

<div className="max-w-4xl mx-auto space-y-16">

  {/* Block 1 */}

  <div className="relative pl-10">

    {/* Left Accent */}

    <div className="absolute left-0 top-2 h-20 w-[5px] bg-black rounded-full" />

    <h3
      className="
        text-3xl
        md:text-4xl
        font-black
        tracking-tight
        text-black
        mb-6
      "
    >
      Building Digital Systems,
      <span className="text-neutral-400"> Not Random Marketing.</span>
    </h3>

    <p
      className="
        text-xl
        leading-10
        text-neutral-600
      "
    >
      <span className="font-semibold text-black">
        OD Socials
      </span>{" "}
      is a system-driven digital growth agency helping brands scale through
      content, websites and AI automation.
      Instead of isolated services, we build complete digital ecosystems that
      continuously generate leads, improve operations and accelerate business
      growth.
    </p>

  </div>

  {/* Divider */}

  <div className="flex items-center gap-5">

    <div className="flex-1 h-px bg-neutral-200" />

    <div className="w-3 h-3 rotate-45 border border-neutral-300" />

    <div className="flex-1 h-px bg-neutral-200" />

  </div>

  {/* Block 2 */}

  <div className="relative pl-10">

    <div className="absolute left-0 top-2 h-24 w-[5px] bg-black rounded-full" />

    <h3
      className="
        text-3xl
        md:text-4xl
        font-black
        tracking-tight
        text-black
        mb-6
      "
    >
      Designed Around
      <span className="text-neutral-400"> Structure.</span>
    </h3>

    <p
      className="
        text-xl
        leading-10
        text-neutral-600
      "
    >
      From high-conversion websites to content ecosystems and AI-powered
      automation, every solution is carefully planned to reduce manual effort,
      simplify workflows and create measurable business outcomes that continue
      long after launch.
    </p>

  </div>

  {/* Divider */}

  <div className="flex items-center gap-5">

    <div className="flex-1 h-px bg-neutral-200" />

    <div className="w-3 h-3 rotate-45 border border-neutral-300" />

    <div className="flex-1 h-px bg-neutral-200" />

  </div>

  {/* Continue in Part 3 */}
    {/* Block 3 */}

  <div className="relative pl-10">

    {/* Left Accent */}

    <div className="absolute left-0 top-2 h-24 w-[5px] rounded-full bg-black" />

    <h3
      className="
        mb-6
        text-3xl
        md:text-4xl
        font-black
        tracking-tight
        text-black
      "
    >
      Built To
      <span className="text-neutral-400"> Scale.</span>
    </h3>

    <p
      className="
        text-xl
        leading-10
        text-neutral-600
      "
    >
      OD Socials collaborates with specialists across strategy,
      branding, design, development and automation to create
      scalable digital systems that help modern businesses
      grow consistently with clarity, efficiency and measurable
      long-term results.
    </p>

  </div>

</div>

{/* Bottom Divider */}

<div className="flex items-center justify-center gap-5 mt-24">

  <div className="h-px w-32 bg-neutral-300" />

  <div
    className="
      flex
      items-center
      justify-center
      w-10
      h-10
      rounded-full
      border
      border-neutral-300
    "
  >

    <div className="w-2 h-2 rounded-full bg-black" />

  </div>

  <div className="h-px w-32 bg-neutral-300" />

</div>

{/* Bottom Statement */}

<div className="mt-14 text-center">

  <p
    className="
      uppercase
      tracking-[0.55em]
      text-sm
      text-neutral-500
    "
  >
    SYSTEMS

    <span className="mx-4 text-black font-semibold">
      OVER
    </span>

    GUESSWORK
  </p>

</div>

{/* Bottom Dots */}

<div
  className="
    hidden
    lg:grid
    absolute
    right-20
    bottom-16
    grid-cols-5
    gap-3
    opacity-40
  "
>
  {[...Array(25)].map((_, i) => (
    <span
      key={i}
      className="w-[4px] h-[4px] rounded-full bg-neutral-400"
    />
  ))}
</div>

{/* Floating Circle */}

<div
  className="
    hidden
    xl:block
    absolute
    left-20
    bottom-24
    w-3
    h-3
    rounded-full
    bg-neutral-300
  "
/>

{/* Floating Outline Circle */}

<div
  className="
    hidden
    xl:block
    absolute
    right-32
    top-28
    w-3
    h-3
    rounded-full
    border
    border-black
  "
/>

</div>

</section>

      {/* ==============================
    BRANDS
================================ */}

<section className="relative overflow-hidden bg-white px-6 py-28 sm:py-32 lg:py-40">

  {/* Subtle Background Grid */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.035]
      [background-image:linear-gradient(rgba(0,0,0,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.12)_1px,transparent_1px)]
      [background-size:72px_72px]
    "
  />

  {/* Decorative section number */}
  <div className="pointer-events-none absolute left-8 top-20 hidden lg:block xl:left-16">

    <span className="text-sm font-bold tracking-[0.45em] text-neutral-900">
      03
    </span>

    <div className="mt-5 h-px w-10 bg-black" />

    <div className="mt-7 h-40 w-px bg-neutral-300" />

    <span
      className="
        mt-6
        block
        [writing-mode:vertical-rl]
        rotate-180
        text-[10px]
        font-bold
        uppercase
        tracking-[0.5em]
        text-neutral-500
      "
    >
      Our Partners
    </span>

  </div>

  {/* Top-left dots */}
  <div
    className="
      pointer-events-none
      absolute
      left-40
      top-20
      hidden
      grid-cols-4
      gap-2
      opacity-40
      xl:grid
    "
  >
    {[...Array(16)].map((_, i) => (
      <span
        key={i}
        className="h-[3px] w-[3px] rounded-full bg-neutral-500"
      />
    ))}
  </div>

  {/* Top-right circle */}
  <div
    className="
      pointer-events-none
      absolute
      -right-28
      -top-32
      hidden
      h-80
      w-80
      rounded-full
      border
      border-neutral-300
      lg:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      right-[8%]
      top-[14%]
      hidden
      h-3
      w-3
      rounded-full
      bg-black
      lg:block
    "
  />

  {/* Decorative Squares */}
  <div
    className="
      pointer-events-none
      absolute
      right-[7%]
      top-[29%]
      hidden
      opacity-50
      lg:block
    "
  >
    <div className="h-9 w-9 border border-neutral-500" />
    <div className="ml-10 mt-2 h-9 w-9 border border-neutral-400" />
    <div className="ml-20 mt-2 h-9 w-9 border border-neutral-300" />
  </div>

  {/* Main Content */}
  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mx-auto max-w-6xl text-center">

      <h2 className="leading-[0.9] tracking-[-0.055em]">

        <span
          className="
            block
            text-[3rem]
            font-black
            uppercase
            text-neutral-950
            sm:text-6xl
            md:text-7xl
            lg:text-[5.7rem]
          "
        >
          Built for Brands
        </span>

        <span
          className="
            mt-2
            block
            text-[3rem]
            font-black
            uppercase
            text-transparent
            sm:text-6xl
            md:text-7xl
            lg:text-[5.7rem]
            [-webkit-text-stroke:1.4px_rgba(0,0,0,.35)]
          "
        >
          That Think Long-Term
        </span>

      </h2>

      {/* Divider */}
      <div className="mt-10 flex items-center justify-center gap-5">

        <div className="h-px w-20 bg-neutral-300 sm:w-28" />

        <div className="h-2.5 w-2.5 rotate-45 bg-black" />

        <div className="h-px w-20 bg-neutral-300 sm:w-28" />

      </div>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-base
          font-medium
          leading-8
          text-neutral-600
          sm:text-lg
        "
      >
        We work with ambitious businesses that value structure, clarity,
        and sustainable growth over quick wins.
      </p>

    </div>

    {/* =====================================
        BRAND MARQUEE
    ====================================== */}

    <div
      className="
        relative
        mt-20
        overflow-hidden
        rounded-[28px]
        border
        border-neutral-200
        bg-white
        py-8
        shadow-[0_20px_70px_rgba(0,0,0,0.05)]
        sm:py-10
      "
    >

      {/* Black corner details */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-30
          h-10
          w-10
          rounded-br-[32px]
          bg-black
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          z-30
          h-10
          w-10
          rounded-tl-[32px]
          bg-black
        "
      />

      {/* Left fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          top-0
          z-20
          w-12
          bg-gradient-to-r
          from-white
          via-white/80
          to-transparent
          sm:w-20
        "
      />

      {/* Right fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          top-0
          z-20
          w-12
          bg-gradient-to-l
          from-white
          via-white/80
          to-transparent
          sm:w-20
        "
      />

      <div
        ref={scrollerRef}
        className="brand-scroll select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >

        <div className="brand-track">

          {[...brandLogos, ...brandLogos].map((logo, i) => (

            <div
              key={`${logo.alt}-${i}`}
              className="brand-card"
            >

              <img
                src={logo.src}
                alt={logo.alt}
                className="brand-img"
                loading="lazy"
                draggable={false}
              />

            </div>

          ))}

        </div>

      </div>

      <style>{`

        /* ==================================
           SCROLLER
        ================================== */

        .brand-scroll {
          position: relative;
          z-index: 10;

          overflow-x: hidden;
          overflow-y: hidden;

          width: 100%;

          cursor: grab;

          scrollbar-width: none;
          -ms-overflow-style: none;

          touch-action: pan-x;
        }

        .brand-scroll::-webkit-scrollbar {
          display: none;
        }

        .brand-scroll.dragging {
          cursor: grabbing;
        }


        /* ==================================
           TRACK
        ================================== */

        .brand-track {
          display: flex;
          align-items: center;

          width: max-content;

          animation: brandMarquee 22s linear infinite;

          will-change: transform;
        }


        /* IMPORTANT:
           Do NOT pause when hovering.
           Individual logos can now be hovered
           while marquee continues moving.
        */


        /* ==================================
           INFINITE RIGHT → LEFT MOVEMENT
        ================================== */

        @keyframes brandMarquee {

          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }

        }


        /* ==================================
           BRAND ITEM
        ================================== */

        .brand-card {
          position: relative;

          flex: 0 0 auto;

          width: 220px;
          height: 120px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 26px 30px;

          border-right: 1px solid rgba(0, 0, 0, 0.12);

          background: #ffffff;

          overflow: hidden;

          transition:
            background-color 300ms ease,
            transform 300ms ease;
        }


        /* ==================================
           LOGO — DEFAULT BLACK & WHITE
        ================================== */

        .brand-img {
        position: relative;
        z-index: 2;

        display: block;
        width: 100%;
        height: 350px;
        max-width: 290px;

        object-fit: contain;
        filter:

        grayscale(100%)
        saturate(0%)
        contrast(1.05);
        opacity: 0.72;
        transition:
        filter 350ms ease,

        opacity 350ms ease,
        transform 350ms ease;

        user-select: none;
        -webkit-user-drag: none;
        }


        /* ==================================
           HOVER — ORIGINAL BRAND COLOR
        ================================== */

        .brand-card:hover .brand-img {

          /*
            Remove grayscale completely.
            Original PNG/SVG colors return.
          */

          filter:
            grayscale(0%)
            saturate(100%)
            contrast(1);

          opacity: 1;

          transform: scale(1.07);
        }


        /* Very subtle hover background */

        .brand-card:hover {
          background: #fafafa;
        }


        /* ==================================
           MOBILE
        ================================== */

        @media (max-width: 768px) {

          .brand-track {
            animation-duration: 18s;
          }

          .brand-card {
            width: 180px;
            height: 105px;

            padding: 22px 24px;
          }

          .brand-img {
            height: 62px;
          }

        }


        @media (max-width: 480px) {

          .brand-track {
            animation-duration: 16s;
          }

          .brand-card {
            width: 155px;
            height: 95px;

            padding: 18px 20px;
          }

          .brand-img {
            height: 54px;
          }

        }


        /* Accessibility */

        @media (prefers-reduced-motion: reduce) {

          .brand-track {
            animation-play-state: paused;
          }

        }

      `}</style>

    </div>

  </div>

</section>

{/* =========================================
    HOW IT WORKS / WORKFLOW
========================================= */}

<section
  ref={workflowRef}
  className="relative overflow-hidden bg-white px-6 py-28 md:py-36"
>
  {/* =========================================
      BACKGROUND DECORATIONS
  ========================================= */}

  {/* Subtle Grid */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.035]
      [background-image:linear-gradient(rgba(0,0,0,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.12)_1px,transparent_1px)]
      [background-size:72px_72px]
    "
  />

  {/* Top Right Circle */}
  <div
    className="
      pointer-events-none
      absolute
      -right-36
      -top-36
      hidden
      h-[380px]
      w-[380px]
      rounded-full
      border
      border-neutral-300
      lg:block
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      right-[8%]
      top-[7%]
      hidden
      h-3
      w-3
      rounded-full
      bg-black
      lg:block
    "
  />

  {/* Bottom Left Circle */}
  <div
    className="
      pointer-events-none
      absolute
      -bottom-40
      -left-40
      hidden
      h-[420px]
      w-[420px]
      rounded-full
      border
      border-neutral-300
      lg:block
    "
  />

  {/* Decorative Dots */}
  <div
    className="
      pointer-events-none
      absolute
      left-[8%]
      top-[8%]
      hidden
      grid-cols-5
      gap-2
      opacity-40
      xl:grid
    "
  >
    {[...Array(25)].map((_, i) => (
      <span
        key={i}
        className="h-[3px] w-[3px] rounded-full bg-neutral-500"
      />
    ))}
  </div>

  {/* Decorative Squares */}
  <div
    className="
      pointer-events-none
      absolute
      right-[8%]
      top-[22%]
      hidden
      opacity-50
      xl:block
    "
  >
    <div className="h-9 w-9 border border-neutral-500" />

    <div className="ml-10 mt-2 h-9 w-9 border border-neutral-400" />

    <div className="ml-20 mt-2 h-9 w-9 border border-neutral-300" />
  </div>

  {/* =========================================
      LEFT SECTION NUMBER
  ========================================= */}

  <div
    className="
      pointer-events-none
      absolute
      left-8
      top-28
      hidden
      xl:flex
      flex-col
      items-center
    "
  >
    <span className="text-sm font-black tracking-[0.4em] text-black">
      04
    </span>

    <div className="mt-5 h-px w-10 bg-black" />

    <div className="my-7 h-36 w-px bg-neutral-300" />

    <span
      className="
        [writing-mode:vertical-rl]
        rotate-180
        text-[10px]
        font-bold
        uppercase
        tracking-[0.55em]
        text-neutral-600
      "
    >
      Our Process
    </span>
  </div>

  {/* =========================================
      MAIN CONTENT
  ========================================= */}

  <div className="relative z-10 mx-auto max-w-6xl">

    {/* Badge */}

    <div className="flex justify-center">
      <div
        className="
          inline-flex
          items-center
          gap-4
          rounded-full
          border
          border-neutral-300
          bg-white
          px-6
          py-2.5
          text-[10px]
          font-bold
          uppercase
          tracking-[0.4em]
          text-neutral-700
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-black" />

        OUR PROCESS

        <span className="h-1.5 w-1.5 rounded-full bg-black" />
      </div>
    </div>

    {/* Heading */}

    <div className="mt-9 text-center">

      <h2 className="leading-[0.88] tracking-[-0.055em]">

        <span
          className="
            block
            text-5xl
            font-black
            uppercase
            text-black
            sm:text-6xl
            md:text-7xl
            lg:text-[6rem]
          "
        >
          HOW IT
        </span>

        <span
          className="
            block
            text-5xl
            font-black
            uppercase
            text-transparent
            sm:text-6xl
            md:text-7xl
            lg:text-[6rem]
            [-webkit-text-stroke:1.4px_rgba(0,0,0,.45)]
          "
        >
          WORKS
        </span>

      </h2>

      {/* Divider */}

      <div className="mt-10 flex items-center justify-center gap-5">

        <div className="h-px w-20 bg-neutral-300 sm:w-28" />

        <div className="h-2.5 w-2.5 rotate-45 bg-black" />

        <div className="h-px w-20 bg-neutral-300 sm:w-28" />

      </div>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-7
          max-w-xl
          text-base
          font-medium
          leading-8
          text-neutral-600
          sm:text-lg
        "
      >
        A simple, transparent process from start to finish designed to keep
        you informed at every step.
      </p>

    </div>

    {/* =========================================
        WORKFLOW
    ========================================= */}

    <div className="relative mx-auto mt-24 max-w-5xl md:mt-28">

      {/* =====================================
          DESKTOP CENTER TIMELINE
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          top-0
          hidden
          w-px
          -translate-x-1/2
          overflow-hidden
          bg-neutral-200
          md:block
        "
      >
        {/* Animated black progress line */}

        <div
          className="
            absolute
            left-0
            top-0
            w-full
            bg-black
            transition-[height]
            duration-700
            ease-out
          "
          style={{
            height:
              activeWorkflowStep === 0
                ? '0%'
                : `${((activeWorkflowStep - 1) / 4) * 100}%`,
          }}
        />

      </div>

      {/* =====================================
          MOBILE TIMELINE
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[23px]
          top-0
          w-px
          overflow-hidden
          bg-neutral-200
          md:hidden
        "
      >
        <div
          className="
            absolute
            left-0
            top-0
            w-full
            bg-black
            transition-[height]
            duration-700
            ease-out
          "
          style={{
            height:
              activeWorkflowStep === 0
                ? '0%'
                : `${((activeWorkflowStep - 1) / 4) * 100}%`,
          }}
        />

      </div>

      {/* =====================================
          STEPS
      ====================================== */}

      {[
        {
          side: 'left',
          number: '01',
          title: 'You submit the form',
          desc: 'Fill out the contact form with your requirements and project details.',
        },

        {
          side: 'right',
          number: '02',
          title: 'We respond within 12–24 hours',
          desc: 'Quick acknowledgment via WhatsApp or Email with initial thoughts.',
        },

        {
          side: 'left',
          number: '03',
          title: 'Scope & timeline confirmed',
          desc: 'Clear agreement on deliverables, timeline, and investment.',
        },

        {
          side: 'right',
          number: '04',
          title: 'Delivery with revisions',
          desc: 'Receive your project and request adjustments as needed.',
        },

        {
          side: 'left',
          number: '05',
          title: 'Final handover',
          desc: 'Complete files, access, and documentation delivered to you.',
        },
      ].map((step, index) => {

        const isLeft = step.side === 'left';

        const isVisible = activeWorkflowStep >= index + 1;

        return (

          <div
            key={step.number}
            className="
              relative
              min-h-[230px]
              py-7
              md:min-h-[260px]
              md:py-8
            "
          >

            {/* =================================
                DESKTOP
            ================================== */}

            <div
              className="
                hidden
                grid-cols-2
                items-center
                gap-20
                md:grid
              "
            >

              {/* LEFT SIDE */}

              <div className="pr-12">

                {isLeft && (

                  <div
                    className={`
                      relative
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-neutral-200
                      bg-white
                      transition-all
                      duration-700
                      ease-out

                      ${
                        isVisible
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-8 opacity-0'
                      }
                    `}
                  >

                    {/* Black side accent */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-[7px]
                        bg-black
                      "
                    />

                    <div className="p-8 pl-10">

                      <div className="flex items-start gap-5">

                        {/* Small Icon Circle */}

                        <div
                          className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-neutral-100
                          "
                        >

                          <span
                            className="
                              text-xs
                              font-black
                              tracking-[0.15em]
                              text-black
                            "
                          >
                            {step.number}
                          </span>

                        </div>

                        <div>

                          <h3
                            className="
                              text-2xl
                              font-black
                              tracking-[-0.03em]
                              text-black
                            "
                          >
                            {step.title}
                          </h3>

                          <p
                            className="
                              mt-3
                              max-w-sm
                              text-base
                              leading-7
                              text-neutral-600
                            "
                          >
                            {step.desc}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                )}

              </div>

              {/* RIGHT SIDE */}

              <div className="pl-12">

                {!isLeft && (

                  <div
                    className={`
                      relative
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-neutral-200
                      bg-white
                      transition-all
                      duration-700
                      ease-out

                      ${
                        isVisible
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-8 opacity-0'
                      }
                    `}
                  >

                    {/* Black side accent */}

                    <div
                      className="
                        absolute
                        bottom-0
                        right-0
                        top-0
                        w-[7px]
                        bg-black
                      "
                    />

                    <div className="p-8 pr-10">

                      <div className="flex items-start gap-5">

                        <div
                          className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-neutral-100
                          "
                        >
                          <span
                            className="
                              text-xs
                              font-black
                              tracking-[0.15em]
                              text-black
                            "
                          >
                            {step.number}
                          </span>

                        </div>

                        <div>

                          <h3
                            className="
                              text-2xl
                              font-black
                              tracking-[-0.03em]
                              text-black
                            "
                          >
                            {step.title}
                          </h3>

                          <p
                            className="
                              mt-3
                              max-w-sm
                              text-base
                              leading-7
                              text-neutral-600
                            "
                          >
                            {step.desc}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                )}

              </div>

            </div>

            {/* =================================
                DESKTOP CENTER NODE
            ================================== */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                hidden
                -translate-x-1/2
                -translate-y-1/2
                md:block
              "
            >

              {/* Outer ring */}

              <div
                className={`
                  flex
                  h-[70px]
                  w-[70px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-500

                  ${
                    isVisible
                      ? 'scale-100 border-neutral-300 bg-white opacity-100'
                      : 'scale-75 border-neutral-200 bg-white opacity-0'
                  }
                `}
              >

                {/* Active black node */}

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-500

                    ${
                      isVisible
                        ? 'scale-100 bg-black text-white'
                        : 'scale-75 bg-neutral-100 text-neutral-400'
                    }
                  `}
                >

                  <span className="text-sm font-black">
                    {step.number}
                  </span>

                </div>

              </div>

            </div>

            {/* =================================
                MOBILE
            ================================== */}

            <div className="relative pl-16 md:hidden">

              {/* Mobile Node */}

              <div
                className={`
                  absolute
                  left-0
                  top-7
                  z-20
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-500

                  ${
                    isVisible
                      ? 'scale-100 border-black bg-black text-white opacity-100'
                      : 'scale-75 border-neutral-200 bg-white text-neutral-400 opacity-0'
                  }
                `}
              >

                <span className="text-xs font-black">
                  {step.number}
                </span>

              </div>

              {/* Mobile Card */}

              <div
                className={`
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-neutral-200
                  bg-white
                  transition-all
                  duration-700
                  ease-out

                  ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-7 opacity-0'
                  }
                `}
              >

                {/* Black accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    top-0
                    w-[6px]
                    bg-black
                  "
                />

                <div className="p-6 pl-8">

                  <span
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.3em]
                      text-neutral-400
                    "
                  >
                    Phase {step.number}
                  </span>

                  <h3
                    className="
                      mt-3
                      text-xl
                      font-black
                      tracking-[-0.03em]
                      text-black
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-neutral-600
                    "
                  >
                    {step.desc}
                  </p>

                </div>

              </div>

            </div>

          </div>

        );

      })}

    </div>

  </div>

</section>




      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
