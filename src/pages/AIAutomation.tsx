import { useEffect, useRef, useState } from "react";
import ContactSection from "../components/ContactSection";
import Navigation from "../components/HeroV2/Navbar";
import {
  Zap,
  Database,
  MessageCircle,
  BarChart3,
  Share2,
  Check,
} from "lucide-react";

export default function AIAutomation() {
  const automationServices = [
  {
    icon: Zap,
    title: "Lead Capture Automation",
    description:
      "Automatic lead collection and qualification systems that never miss an opportunity",
  },
  {
    icon: Database,
    title: "CRM Workflows",
    description:
      "Streamlined customer relationship management that keeps your pipeline organized",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Email Automation",
    description:
      "Intelligent messaging systems that respond and engage automatically",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Reporting",
    description:
      "Real-time insights and analytics that inform better business decisions",
  },
  {
    icon: Share2,
    title: "Tool Integrations",
    description:
      "Seamless connections between your favorite tools and platforms",
  },
];

const [automationIndex, setAutomationIndex] = useState(0);
const [automationPaused, setAutomationPaused] = useState(false);

const touchStartX = useRef<number | null>(null);
const touchEndX = useRef<number | null>(null);

const previousAutomation = () => {
  setAutomationIndex((prev) =>
    prev === 0 ? automationServices.length - 1 : prev - 1
  );
};

const nextAutomation = () => {
  setAutomationIndex((prev) =>
    prev === automationServices.length - 1 ? 0 : prev + 1
  );
};

useEffect(() => {
  if (automationPaused) return;

  const timer = window.setInterval(() => {
    setAutomationIndex((prev) =>
      prev === automationServices.length - 1 ? 0 : prev + 1
    );
  }, 3500);

  return () => window.clearInterval(timer);
}, [automationPaused]);

const getAutomationIndex = (offset: number) => {
  return (
    (automationIndex + offset + automationServices.length) %
    automationServices.length
  );
};

const handleAutomationTouchStart = (
  event: React.TouchEvent<HTMLDivElement>
) => {
  touchStartX.current = event.touches[0].clientX;
  touchEndX.current = null;
};

const handleAutomationTouchMove = (
  event: React.TouchEvent<HTMLDivElement>
) => {
  touchEndX.current = event.touches[0].clientX;
};

const handleAutomationTouchEnd = () => {
  if (touchStartX.current === null || touchEndX.current === null) return;

  const distance = touchStartX.current - touchEndX.current;

  if (distance > 50) {
    nextAutomation();
  }

  if (distance < -50) {
    previousAutomation();
  }

  touchStartX.current = null;
  touchEndX.current = null;
};
  const packages = [
    {
      title: "AI Assist System",
      badge: "Support & responsiveness",
      popular: false,

      included: [
        "AI chat assistant embedded on your website",
        "Trained on company services, pages & FAQs",
        "Real-time visitor conversations (24/7)",
        "Structured enquiry capture (name, need, contact)",
        "WhatsApp / Email escalation & handoff",
        "Basic intent detection (support vs enquiry)",
      ],
    },
    {
      title: "AI Lead Automation System",
      badge: "Sales & lead handling",
      popular: true,
      included: [
        "Everything in AI Assist System",
        "AI lead qualification (hot / warm / cold)",
        "Smart forms with logic (quote / booking / enquiry)",
        "Automated follow-ups (WhatsApp / Email)",
        "Lead routing to sales/admin",
        "CRM integration (Sheets / Notion / DB)",
        "Pipeline status tracking (new, contacted, booked)",
      ],
    },
    {
      title: "AI Business Automation System",
      badge: "Scale & operations",
      popular: false,
      included: [
        "Everything in AI Lead Automation System",
        "Multi-agent setup (Sales, Support, Internal Ops)",
        "Workflow automation (n8n-based)",
        "Appointment booking + reminders",
        "Tool + API integrations (CRM / Sheets / internal tools)",
        "Dashboards / reporting-ready data flow",
        "Scalable automation architecture",
      ],
    },
  ];

  return (
    <div className="relative">
      <Navigation />
      {/* =====================================================
    HERO — AI AUTOMATION
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
      SUBTLE BACKGROUND GRID
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
      LEFT DECORATIVE CIRCLES
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      -bottom-[220px]
      -left-[220px]
      hidden
      h-[520px]
      w-[520px]
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
      -bottom-[170px]
      -left-[170px]
      hidden
      h-[420px]
      w-[420px]
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
      RIGHT DECORATIVE CIRCLES
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      -right-[200px]
      top-[4%]
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
      -right-[150px]
      top-[8%]
      hidden
      h-[400px]
      w-[400px]
      rounded-full
      border
      border-black/[0.035]
      lg:block
    "
  />

  {/* =====================================================
      FLOATING AUTOMATION ICONS
  ===================================================== */}

  {/* TOP LEFT SPARK */}

  <div
    className="
      pointer-events-none
      absolute
      left-[13%]
      top-[16%]
      hidden
      lg:block
    "
  >
    <Zap
      size={28}
      strokeWidth={1.5}
      className="text-black"
    />
  </div>

  {/* TOP LEFT DOT */}

  <span
    className="
      pointer-events-none
      absolute
      left-[20%]
      top-[14%]
      hidden
      h-[6px]
      w-[6px]
      rounded-full
      bg-black
      lg:block
    "
  />

  {/* TOP RIGHT — LIGHTNING CARD */}

  <div
    className="
      pointer-events-none
      absolute
      right-[7%]
      top-[18%]
      hidden
      h-[76px]
      w-[76px]
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
    <Zap size={29} strokeWidth={1.65} />
  </div>

  {/* LEFT — DATABASE */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-[30%]
      left-[7%]
      hidden
      h-[70px]
      w-[70px]
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
    <Database size={27} strokeWidth={1.65} />
  </div>

  {/* BOTTOM LEFT — WORKFLOW / MESSAGE */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-[8%]
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
    <MessageCircle size={27} strokeWidth={1.65} />
  </div>

  {/* RIGHT — INTEGRATIONS */}

  <div
    className="
      pointer-events-none
      absolute
      right-[8%]
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
    <Share2 size={27} strokeWidth={1.65} />
  </div>

  {/* BOTTOM RIGHT — ANALYTICS */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-[8%]
      right-[12%]
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
    <BarChart3 size={27} strokeWidth={1.65} />
  </div>

  {/* SMALL DECORATIVE PLUS */}

  <span
    className="
      pointer-events-none
      absolute
      right-[9%]
      top-[44%]
      hidden
      text-[30px]
      font-light
      text-black/30
      lg:block
    "
  >
    +
  </span>

  {/* SMALL DOTS */}

  <span
    className="
      pointer-events-none
      absolute
      bottom-[12%]
      left-[25%]
      hidden
      h-[5px]
      w-[5px]
      rounded-full
      bg-black/65
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
      bg-black/65
      lg:block
    "
  />

  {/* =====================================================
      MAIN CONTENT
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
        TOP PILL
    ===================================================== */}

    <div
      className="
        mx-auto
        mb-10
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
        AI Automation Systems
      </span>

      <span className="h-[5px] w-[5px] rounded-full bg-black" />
    </div>

    {/* =====================================================
        HEADING
    ===================================================== */}

    <div className="mx-auto max-w-[1320px]">

      {/* AUTOMATION THAT */}

      <h1
        className="
          whitespace-nowrap
          text-[43px]
          font-black
          uppercase
          leading-[0.82]
          tracking-[-0.07em]
          text-black
          sm:text-[60px]
          md:text-[80px]
          lg:text-[101px]
          xl:text-[116px]
        "
      >
        Automation That
      </h1>

      {/* RUNS THE BUSINESS */}

      <div
        className="
          mt-3
          whitespace-nowrap
          text-[39px]
          font-black
          uppercase
          leading-[0.84]
          tracking-[-0.065em]
          sm:text-[55px]
          md:text-[73px]
          lg:text-[92px]
          xl:text-[105px]
        "
      >
        <span
          className="
            text-transparent
            [-webkit-text-stroke:1.5px_#000]
          "
        >
          Runs the Business
        </span>
      </div>
    </div>

    {/* =====================================================
        DESCRIPTION
    ===================================================== */}

    <p
      className="
        mx-auto
        mt-10
        max-w-2xl
        text-[15px]
        font-medium
        tracking-[-0.02em]
        text-black/50
        sm:text-[17px]
        md:text-[19px]
      "
    >
      Smarter workflows. Less manual work.
    </p>

    {/* =====================================================
        SMALL CENTER DIVIDER
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

      <Zap
        size={15}
        strokeWidth={1.6}
        className="text-black"
      />

      <span className="h-px w-20 bg-gradient-to-l from-transparent to-black/30" />
    </div>
  </div>
</section>

      {/* WHAT WE AUTOMATE — MATCHES PACKAGES UI/THEME */}
      {/* =====================================================
    WHAT WE AUTOMATE
===================================================== */}

<section
  className="
    relative
    overflow-hidden
    border-t
    border-black/[0.06]
    bg-white
    px-6
    py-24
    text-black
    md:py-28
  "
>
  {/* GRID BACKGROUND */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.018]
      [background-image:linear-gradient(rgba(0,0,0,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.5)_1px,transparent_1px)]
      [background-size:72px_72px]
    "
  />

  <div className="relative z-10 mx-auto max-w-[1400px]">

    {/* ================= HEADER ================= */}

    <div
      className="
        grid
        gap-12
        border-b
        border-black/10
        pb-16
        md:grid-cols-[1.25fr_.75fr]
        md:pb-20
      "
    >
      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="h-[6px] w-[6px] rounded-full bg-black" />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.42em]
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
            sm:text-[70px]
            md:text-[82px]
            lg:text-[96px]
          "
        >
          What We
        </h2>

        <div
          className="
            mt-2
            text-[55px]
            font-black
            uppercase
            leading-[0.84]
            tracking-[-0.065em]
            text-transparent
            [-webkit-text-stroke:1.5px_#000]
            sm:text-[66px]
            md:text-[78px]
            lg:text-[91px]
          "
        >
          Automate
        </div>
      </div>

      <div className="md:ml-auto md:max-w-[430px] md:pt-16">
        <div className="mb-7 h-[2px] w-12 bg-black" />

        <p
          className="
            text-[17px]
            font-medium
            leading-[1.8]
            tracking-[-0.025em]
            text-black/50
            md:text-[18px]
          "
        >
          Intelligent automation systems that handle the repetitive,
          time-consuming tasks so you can focus on growing your business.
        </p>
      </div>
    </div>

    {/* ================= CONTROLS ================= */}

    <div className="mb-10 mt-10 flex items-center justify-between">

      <div className="flex items-center gap-4">
        <span
          className="
            text-[12px]
            font-black
            tracking-[0.22em]
          "
        >
          {String(automationIndex + 1).padStart(2, "0")}
        </span>

        <span className="text-black/20">/</span>

        <span
          className="
            text-[12px]
            font-bold
            tracking-[0.22em]
            text-black/30
          "
        >
          05
        </span>
      </div>

      <div className="flex gap-3">

        <button
          type="button"
          onClick={previousAutomation}
          aria-label="Previous automation"
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-white
            text-[25px]
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
          "
        >
          ←
        </button>

        <button
          type="button"
          onClick={nextAutomation}
          aria-label="Next automation"
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-white
            text-[25px]
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
          "
        >
          →
        </button>

      </div>
    </div>

    {/* ================= CAROUSEL ================= */}

    <div
      className="
        relative
        overflow-hidden
        py-2
      "
      onMouseEnter={() => setAutomationPaused(true)}
      onMouseLeave={() => setAutomationPaused(false)}
      onTouchStart={handleAutomationTouchStart}
      onTouchMove={handleAutomationTouchMove}
      onTouchEnd={handleAutomationTouchEnd}
    >

      <div
        className="
          grid
          grid-cols-1
          gap-5
          md:grid-cols-3
        "
      >

        {[-1, 0, 1].map((offset) => {
          const realIndex = getAutomationIndex(offset);
          const service = automationServices[realIndex];
          const Icon = service.icon;

          const active = offset === 0;

          return (
            <article
              key={`${automationIndex}-${offset}`}
              className={`
                relative
                min-h-[500px]
                overflow-hidden
                rounded-[30px]
                border
                px-8
                py-9
                transition-all
                duration-700
                ease-[cubic-bezier(.22,1,.36,1)]
                lg:px-10
                lg:py-10

                ${
                  active
                    ? `
                      border-black
                      bg-black
                      text-white
                      shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                    `
                    : `
                      border-black/10
                      bg-white
                      text-black
                    `
                }
              `}
            >

              {/* NUMBER */}

              <span
                className={`
                  absolute
                  right-7
                  top-3
                  text-[100px]
                  font-black
                  leading-none
                  tracking-[-0.08em]

                  ${
                    active
                      ? "text-white/[0.06]"
                      : "text-black/[0.035]"
                  }
                `}
              >
                {String(realIndex + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex h-full flex-col">

                {/* ICON */}

                <div
                  className={`
                    flex
                    h-[62px]
                    w-[62px]
                    items-center
                    justify-center
                    rounded-full
                    border

                    ${
                      active
                        ? "border-white/20"
                        : "border-black/10"
                    }
                  `}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                  />
                </div>

                {/* SYSTEM NUMBER */}

                <span
                  className={`
                    mt-24
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.4em]

                    ${
                      active
                        ? "text-white/45"
                        : "text-black/40"
                    }
                  `}
                >
                  System {String(realIndex + 1).padStart(2, "0")}
                </span>

                {/* TITLE */}

                <h3
                  className="
                    mt-5
                    max-w-[330px]
                    text-[32px]
                    font-black
                    leading-[0.96]
                    tracking-[-0.055em]
                    md:text-[35px]
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className={`
                    mt-7
                    max-w-[340px]
                    text-[15px]
                    font-medium
                    leading-7
                    tracking-[-0.02em]

                    ${
                      active
                        ? "text-white/50"
                        : "text-black/50"
                    }
                  `}
                >
                  {service.description}
                </p>

                {/* BOTTOM */}

                <div
                  className={`
                    mt-auto
                    flex
                    items-center
                    justify-between
                    border-t
                    pt-6

                    ${
                      active
                        ? "border-white/15"
                        : "border-black/10"
                    }
                  `}
                >

                  <span
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.35em]
                    "
                  >
                    Explore
                  </span>

                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-lg

                      ${
                        active
                          ? "border-white/20"
                          : "border-black/10"
                      }
                    `}
                  >
                    ↗
                  </div>

                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>

    {/* ================= PROGRESS ================= */}

    <div
      className="
        mt-10
        flex
        items-center
        justify-center
        gap-3
      "
    >
      {automationServices.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setAutomationIndex(index)}
          aria-label={`Go to automation ${index + 1}`}
          className={`
            h-[4px]
            rounded-full
            transition-all
            duration-500

            ${
              automationIndex === index
                ? "w-12 bg-black"
                : "w-8 bg-black/15 hover:bg-black/30"
            }
          `}
        />
      ))}
    </div>
  </div>
</section>
{/* =====================================================
    AI AUTOMATION SYSTEM
===================================================== */}

<section className="relative overflow-hidden bg-white px-6 py-28 md:py-32">
  {/* subtle background grid */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.025]
      [background-image:linear-gradient(rgba(0,0,0,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.35)_1px,transparent_1px)]
      [background-size:72px_72px]
    "
  />

  {/* subtle decorative circles */}
  <div
    className="
      pointer-events-none
      absolute
      -left-28
      top-20
      h-[360px]
      w-[360px]
      rounded-full
      border
      border-black/[0.025]
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      -left-16
      top-32
      h-[250px]
      w-[250px]
      rounded-full
      border
      border-black/[0.025]
    "
  />

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* =====================================================
        HEADER
    ===================================================== */}

    <div
      className="
        grid
        gap-12
        border-b
        border-black/10
        pb-16
        md:grid-cols-[1.25fr_0.75fr]
        md:items-end
        md:pb-20
      "
    >
      {/* LEFT */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[6px] w-[6px] rounded-full bg-black" />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.42em]
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
            md:text-[92px]
            lg:text-[108px]
          "
        >
          AI Automation
        </h2>

        <div
          className="
            mt-1
            text-[58px]
            font-black
            uppercase
            leading-[0.82]
            tracking-[-0.065em]
            text-transparent
            [-webkit-text-stroke:1.5px_#000]
            sm:text-[72px]
            md:text-[92px]
            lg:text-[108px]
          "
        >
          System
        </div>
      </div>

      {/* RIGHT */}
      <div className="pb-2 md:pb-5">
        <div className="mb-7 h-[2px] w-11 bg-black" />

        <p
          className="
            max-w-[440px]
            text-[17px]
            font-medium
            leading-[1.75]
            tracking-[-0.025em]
            text-black/50
            md:text-[19px]
          "
        >
          Choose the level of AI system you want to deploy
        </p>
      </div>
    </div>

    {/* =====================================================
        PACKAGE CARDS
    ===================================================== */}

    <div
      className="
        mt-8
        grid
        overflow-hidden
        rounded-[28px]
        border
        border-black/10
        bg-white
        lg:grid-cols-3
      "
    >
      {packages.map((pkg, idx) => (
        <div
          key={idx}
          className="
            group
            relative
            flex
            min-h-[720px]
            flex-col
            overflow-hidden
            bg-white
            px-7
            py-9
            text-black
            transition-all
            duration-500
            ease-out

            hover:bg-black
            hover:text-white

            lg:min-h-[760px]
            lg:px-8
            lg:py-10

            [&:not(:last-child)]:border-b
            [&:not(:last-child)]:border-black/10

            lg:[&:not(:last-child)]:border-b-0
            lg:[&:not(:last-child)]:border-r
            lg:[&:not(:last-child)]:border-black/10
          "
        >

          {/* decorative circles */}
          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-32
              w-32
              rounded-full
              border
              border-black/[0.035]
              transition-colors
              duration-500
              group-hover:border-white/[0.08]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-3
              -top-3
              h-20
              w-20
              rounded-full
              border
              border-black/[0.035]
              transition-colors
              duration-500
              group-hover:border-white/[0.08]
            "
          />

          {/* =====================================================
              TOP META
          ===================================================== */}

          <div className="relative z-10 flex items-start justify-between gap-4">
            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.4em]
                text-black/40
                transition-colors
                duration-500
                group-hover:text-white/45
              "
            >
              System {String(idx + 1).padStart(2, "0")}
            </span>

            {pkg.popular ? (
              <span
                className="
                  rounded-full
                  border
                  border-black/15
                  px-4
                  py-2
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-black
                  transition-all
                  duration-500

                  group-hover:border-white/20
                  group-hover:text-white
                "
              >
                Most Popular
              </span>
            ) : (
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  text-black
                  transition-all
                  duration-500

                  group-hover:border-white/20
                  group-hover:text-white
                "
              >
                ↗
              </div>
            )}
          </div>

          {/* =====================================================
              TITLE
          ===================================================== */}

          <div className="relative z-10 mt-20">
            <h3
              className="
                max-w-[330px]
                text-[34px]
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

            {/* badge */}
            <div
              className="
                mt-6
                inline-flex
                rounded-full
                border
                border-black/10
                px-4
                py-2
                text-[11px]
                font-medium
                text-black/55
                transition-all
                duration-500

                group-hover:border-white/20
                group-hover:text-white/55
              "
            >
              {pkg.badge}
            </div>
          </div>

          {/* divider */}
          <div
            className="
              relative
              z-10
              my-9
              h-px
              w-full
              bg-black/10
              transition-colors
              duration-500
              group-hover:bg-white/15
            "
          />

          {/* =====================================================
              INCLUDED
          ===================================================== */}

          <div className="relative z-10">
            <p
              className="
                mb-7
                text-[9px]
                font-bold
                uppercase
                tracking-[0.4em]
                text-black/35
                transition-colors
                duration-500
                group-hover:text-white/40
              "
            >
              What's Included
            </p>

            <ul className="space-y-5">
              {pkg.included.map((item, i) => (
                <li
                  key={i}
                  className="
                    flex
                    items-start
                    gap-4
                    text-[14px]
                    font-medium
                    leading-[1.55]
                    tracking-[-0.015em]
                    text-black/70
                    transition-colors
                    duration-500

                    group-hover:text-white/70
                  "
                >
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

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              CTA
          ===================================================== */}

          <div className="relative z-10 mt-auto pt-12">
            <button
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-full
                bg-black
                px-6
                py-[18px]
                text-left
                text-[12px]
                font-bold
                tracking-[-0.01em]
                text-white
                transition-all
                duration-500

                group-hover:bg-white
                group-hover:text-black
              "
            >
              <span>
                Start with {pkg.title}
              </span>

              <span
                className="
                  ml-4
                  text-[18px]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-[2px]
                  group-hover:translate-x-[2px]
                "
              >
                ↗
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      
      <ContactSection />
    </div>
  );
}
