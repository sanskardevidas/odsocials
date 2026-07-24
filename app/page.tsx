// app/page.tsx
import React from "react";

const services = [
  {
    title: "Social Media Management",
    description:
      "Full content planning, posting, and engagement for Instagram & Facebook.",
    tag: "Strategy + Execution",
  },
  {
    title: "Branding & Logo Design",
    description:
      "Clean, modern brand identities that look professional everywhere.",
    tag: "Visual Identity",
  },
  {
    title: "Website Design & Development",
    description:
      "Conversion-focused business, portfolio, and e-commerce websites.",
    tag: "Web Experience",
  },
  {
    title: "Meta & Google Ads",
    description:
      "Campaign setup, creatives, and optimization for better ROI.",
    tag: "Performance",
  },
  {
    title: "Content Calendars",
    description:
      "30-day social media content plans customized for your niche.",
    tag: "Systems",
  },
  {
    title: "Reels & Shorts Editing",
    description:
      "Short-form video edits tailored for reach & retention.",
    tag: "Video",
  },
];

const portfolio = [
  {
    title: "Real Estate Socials",
    subtitle: "Lead-focused Instagram grid",
  },
  {
    title: "Coach Personal Brand",
    subtitle: "Minimal landing + content kit",
  },
  {
    title: "E-commerce Launch",
    subtitle: "Product posts + ad creatives",
  },
  {
    title: "Local Salon Rebrand",
    subtitle: "Logo, colors, highlight covers",
  },
  {
    title: "Restaurant Launch Kit",
    subtitle: "Menu posts + reels + promo",
  },
  {
    title: "Creator Growth Pack",
    subtitle: "Templates + hooks + scripts",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    text: "We understand your brand, audience, and goals in a simple call.",
  },
  {
    step: "02",
    title: "Strategy & Direction",
    text: "We create a clear content + design direction that fits your niche.",
  },
  {
    step: "03",
    title: "Design & Build",
    text: "We design posts, websites, and campaigns that look premium.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    text: "We iterate with data and scale what actually works.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-20 pt-10 space-y-20">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="border-b border-white/5 bg-[#050505]/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#00C16A] to-emerald-400 flex items-center justify-center text-sm font-bold">
            OD
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm sm:text-base">
              OD Socials
            </span>
            <span className="text-[11px] text-white/50">
              We build brands that grow.
            </span>
          </div>
        </div>

        {/* Nav + Button */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="text-white/70 hover:text-white">
            Services
          </a>
          <a href="#portfolio" className="text-white/70 hover:text-white">
            Work
          </a>
          <a href="#process" className="text-white/70 hover:text-white">
            Process
          </a>
          <a href="#contact" className="text-white/70 hover:text-white">
            Contact
          </a>
          <button className="bg-[#00C16A] hover:bg-[#00a659] text-black text-sm font-medium px-4 py-2 rounded-full transition">
            Let&apos;s Talk
          </button>
        </div>

        {/* Mobile dot menu */}
        <div className="md:hidden flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-white/70" />
          <span className="h-1 w-1 rounded-full bg-white/70" />
          <span className="h-1 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-6">
      <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 items-center">
        {/* Text side (clean Instapage-style hero) */}
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00C16A]">
            Digital Creative Studio
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Social media & websites
            <br />
            that make your brand
            <span className="text-[#00C16A]"> look premium.</span>
          </h1>

          <p className="text-sm sm:text-base text-white/60 max-w-xl">
            OD Socials handles your design, content, and strategy so you can
            stop guessing what to post and start looking like a serious brand
            online.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#00C16A] hover:bg-[#00a659] text-black text-sm font-medium px-6 py-3 rounded-full transition">
              Book a free strategy call
            </button>
            <button className="border border-white/15 text-sm font-medium px-6 py-3 rounded-full text-white/80 hover:bg-white/5 transition">
              View recent projects
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-white/50 pt-2">
            <span>⚡ For startups, creators & local businesses</span>
            <span className="h-4 w-px bg-white/15" />
            <span>📈 Done-for-you content, design & websites</span>
          </div>
        </div>

        {/* Right side – “card-based” hero like landing page UI */}
        <div className="relative">
          {/* Main mockup card */}
          <div className="rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-5 sm:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-white/50">Featured client</p>
                <p className="text-sm font-semibold">Creator Launch Kit</p>
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] bg-[#00C16A]/10 text-[#00C16A] border border-[#00C16A]/30">
                +128% engagement
              </span>
            </div>

            {/* Fake “UI cards” like Pinterest/Instapage */}
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((col) => (
                <div
                  key={col}
                  className="space-y-3 rounded-2xl bg-white/5 p-2 border border-white/5"
                >
                  <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-[#00C16A]/50 via-emerald-500/40 to-black/80" />
                  <div className="h-2 w-5/6 rounded-full bg-white/20" />
                  <div className="h-2 w-3/5 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </div>

          {/* Floating stat card */}
          <div className="hidden sm:flex flex-col gap-2 absolute -bottom-6 -left-6 bg-[#0B0B0B] border border-white/10 rounded-2xl px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.7)]">
            <p className="text-[11px] text-white/50">Last 90 days</p>
            <div className="flex items-end gap-3">
              <div>
                <p className="text-lg font-semibold">+47</p>
                <p className="text-[11px] text-white/50">Brand assets</p>
              </div>
              <div>
                <p className="text-lg font-semibold">+19</p>
                <p className="text-[11px] text-white/50">Web projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: string;
  description: string;
  id?: string;
}) {
  return (
    <div id={id} className="space-y-2">
      <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#00C16A]">
        {eyebrow}
      </p>
      <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
      <p className="text-sm text-white/60 max-w-xl">{description}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="space-y-8">
      <SectionHeader
        eyebrow="Services"
        title="What OD Socials can handle for you"
        description="From strategy to design to execution, we become your quiet creative team behind the scenes."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#00C16A]/40 transition shadow-[0_18px_60px_rgba(0,0,0,0.7)]"
          >
            <div className="p-4 sm:p-5 space-y-3">
              <span className="inline-flex text-[11px] px-2 py-1 rounded-full bg-[#00C16A]/10 text-[#00C16A] border border-[#00C16A]/30">
                {service.tag}
              </span>
              <h3 className="text-sm sm:text-base font-semibold">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/60">
                {service.description}
              </p>
              <button className="text-[11px] sm:text-xs text-white/60 group-hover:text-[#00C16A] inline-flex items-center gap-1 pt-1">
                Know more
                <span className="text-[14px]">↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="space-y-8">
      <SectionHeader
        eyebrow="Work"
        title="Projects we’d love to show off"
        description="A mix of social feeds, websites, and visual identities crafted for growth-focused brands."
      />

      {/* Pinterest-ish grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolio.map((item, i) => (
          <article
            key={item.title}
            className={`rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_20px_70px_rgba(0,0,0,0.75)] flex flex-col ${
              i % 3 === 1 ? "sm:translate-y-4 lg:translate-y-8" : ""
            }`}
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-[#00C16A]/40 via-emerald-500/30 to-black/90" />
            <div className="p-4 sm:p-5 space-y-1">
              <h3 className="text-sm sm:text-base font-semibold">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/60">
                {item.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="space-y-8">
      <SectionHeader
        eyebrow="Process"
        title="Simple, calm and structured"
        description="No chaos, no random posting. Just a clear workflow that respects your time and energy."
      />

      <div className="grid md:grid-cols-4 gap-5">
        {processSteps.map((step) => (
          <div
            key={step.step}
            className="rounded-2xl border border-white/10 bg:white/[0.02] p-4 sm:p-5 flex flex-col gap-3"
          >
            <span className="text-xs font-mono text-white/40">
              Step {step.step}
            </span>
            <h3 className="text-sm sm:text-base font-semibold">{step.title}</h3>
            <p className="text-xs sm:text-sm text-white/60">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="mt-4 rounded-3xl border border-[#00C16A]/40 bg-gradient-to-br from-[#00C16A]/10 via-[#00C16A]/5 to-transparent p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:items-center"
    >
      <div className="flex-1 space-y-3">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#00C16A]">
          Let&apos;s work together
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold">
          Ready to make your brand look and feel like it belongs on explore?
        </h2>
        <p className="text-sm text-white/70 max-w-xl">
          Share a bit about your brand and we&apos;ll come back with ideas,
          structure, and a simple plan to make your online presence look and
          perform better.
        </p>
      </div>

      <div className="w-full max-w-md space-y-3">
        <input
          placeholder="Your name"
          className="w-full text-sm bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 outline-none focus:border-[#00C16A]"
        />
        <input
          placeholder="Brand / business name"
          className="w-full text-sm bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 outline-none focus:border-[#00C16A]"
        />
        <input
          placeholder="Email or WhatsApp number"
          className="w-full text-sm bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 outline-none focus:border-[#00C16A]"
        />
        <textarea
          rows={3}
          placeholder="What do you need help with? (socials, website, branding...)"
          className="w-full text-sm bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 outline-none focus:border-[#00C16A] resize-none"
        />
        <button className="w-full bg-[#00C16A] hover:bg-[#00a659] text-black text-sm font-medium px-4 py-2.5 rounded-full transition">
          Send enquiry
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} OD Socials. We build brands that grow.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-[#00C16A]">
            Instagram
          </a>
          <a href="#" className="hover:text-[#00C16A]">
            WhatsApp
          </a>
          <a href="#" className="hover:text-[#00C16A]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
