import "@fontsource/instrument-serif";
import ContactSection from "../components/ContactSection";
import { Camera, Layout, Zap } from "lucide-react";
import React from "react";
import Hero from "../components/HeroV2/Hero";

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
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const isDown = React.useRef(false);
  const startX = React.useRef(0);
  const startScrollLeft = React.useRef(0);

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

  return (
  <div className="relative">
    {/* HERO */}
    <Hero />
    
      {/* SECTION 2 */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            We Don't Guess.
            <br />
            We Build Systems.
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Growth doesn't come from random actions.
            <br />
            It comes from structure, clarity, and repeatable systems.
          </p>
        </div>
      </section>

      {/* SERVICES (What We Build) — same “What We Do” UI, but cleaner + better */}
<section id="services" className="py-32 px-6 relative">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-serif mb-6">What We Build</h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: Camera,
          title: 'Social Media Growth',
          description:
            'We design content and engagement systems that help brands stay consistent, visible, and trusted — without guesswork.',
          href: '/social-media',
        },
        {
          icon: Layout,
          title: 'Website Building',
          description:
            'High-performance websites built to convert attention into action and support long-term business growth.',
          href: '/website',
        },
        {
          icon: Zap,
          title: 'AI Automation',
          description:
            'Smart automation systems that save time, capture leads, and keep operations running smoothly.',
          href: '/ai-automation',
        },
      ].map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-500 hover:bg-white/[0.07] hover:-translate-y-2"
        >
          {/* subtle glow (same vibe as packages) */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-6">
              <item.icon size={24} className="text-purple-400" />
            </div>

            <h3 className="text-2xl font-serif mb-3">{item.title}</h3>

            <p className="text-gray-400 leading-relaxed">{item.description}</p>

            {/* CTA row (clean, premium) */}
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
              Explore
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>


      {/* ABOUT */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-serif mb-12">About OD Socials</h2>
          <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
            <p>OD Socials is a system-driven digital growth agency helping brands scale through content, websites, and AI automation.</p>
            <p>
              We focus on building structured digital systems. 
              From high-conversion websites to content ecosystems and AI-powered automation, 
              everything we deliver is designed to reduce manual effort and create measurable business outcomes.
            </p>
            <p>
              OD Socials collaborates with specialists across strategy, design, and automation to deliver scalable, long-term digital growth for modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-6">Built for Brands That Think Long-Term</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We work with ambitious businesses that value structure, clarity, and sustainable growth over quick wins.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 backdrop-blur-xl py-10">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

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
                  <div key={i} className="brand-card">
                    <div className="logo-halo" />
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
              .brand-scroll{
                position: relative;
                z-index: 20;
                overflow-x: auto;
                overflow-y: hidden;
                padding: 0 18px;
                cursor: grab;
                scrollbar-width: none;
                -ms-overflow-style: none;
                scroll-behavior: smooth;
                touch-action: pan-x;
              }
              .brand-scroll::-webkit-scrollbar{ display:none; }
              .brand-scroll.dragging{ cursor: grabbing; }

              .brand-track{
                display:flex;
                align-items:center;
                gap:18px;
                width: max-content;
                animation: brandMarquee 8s linear infinite;
                will-change: transform;
              }

              .brand-scroll:hover .brand-track,
              .brand-scroll.dragging .brand-track{
                animation-play-state: paused;
              }

              @keyframes brandMarquee{
                0%{ transform: translateX(0); }
                100%{ transform: translateX(-50%); }
              }

              .brand-card{
                position: relative;
                height: 100px;
                width: 145px;
                border-radius: 20px;
                background: rgba(255,255,255,0.06);
                border: 1px solid rgba(255,255,255,0.10);
                display:flex;
                align-items:center;
                justify-content:center;
                overflow: hidden;
              }

              .logo-halo{
                position:absolute;
                width: 400px;
                height: 350px;
                border-radius: 999px;
                background: radial-gradient(circle at center,
                  rgba(255,255,255,0.16),
                  rgba(255,255,255,0.05),
                  transparent 50%
                );
                filter: blur(2px);
              }

              .brand-img{
                position: absolute;
                z-index: 2;
                height: 140px;
                max-width: 300px;
                object-fit: contain;
                opacity: 1;
                filter: brightness(1.2) contrast(1) saturate(1)
                        drop-shadow(0 14px 26px rgba(0,0,0,0.75));
              }

              @media (max-width: 640px){
                .brand-card{ width: 160px; height: 115px; }
                .brand-img{ height: 95px; max-width: 220px; }
                .logo-halo{ width: 150px; height: 70px; }
              }
            `}</style>
          </div>
        </div>
      </section>

{/* WORKFLOW (MOBILE FIXED + SPACING TIGHT + NO STEP FOOTER) */}
<section className="py-32 px-6 relative overflow-hidden">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-serif mb-3">How It Works</h2>
      <p className="text-xl text-gray-400">
        A simple, transparent process from start to finish
      </p>
    </div>

    <div className="relative max-w-5xl mx-auto">
      {/* ✅ Desktop center line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent pointer-events-none" />

      {/* ✅ Mobile left line */}
      <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent pointer-events-none" />

      {[
        {
          side: 'left',
          number: '01',
          title: 'You submit the form',
          desc: 'Fill out the contact form with your requirements and project details',
        },
        {
          side: 'right',
          number: '02',
          title: 'We respond within 12–24 hours',
          desc: 'Quick acknowledgment via WhatsApp or Email with initial thoughts',
        },
        {
          side: 'left',
          number: '03',
          title: 'Scope & timeline confirmed',
          desc: 'Clear agreement on deliverables, timeline, and investment',
        },
        {
          side: 'right',
          number: '04',
          title: 'Delivery with revisions',
          desc: 'Receive your project and request adjustments as needed',
        },
        {
          side: 'left',
          number: '05',
          title: 'Final handover',
          desc: 'Complete files, access, and documentation delivered to you',
        },
      ].map((step, index) => {
        const isLeft = step.side === 'left';

        return (
          <div key={index} className="relative py-5 md:py-6">
            {/* ✅ Desktop layout (same as before, alternating) */}
            <div className="hidden md:grid grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div className={isLeft ? 'md:pr-16' : 'md:pr-16 opacity-0 pointer-events-none'}>
                {isLeft && (
                  <div className="relative rounded-3xl border backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/[0.07] transition-all duration-500">
                    <div className="absolute inset-0 rounded-3xl pointer-events-none">
                      <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-600/10 blur-3xl rounded-full" />
                      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-600/10 blur-3xl rounded-full" />
                    </div>

                    <div className="relative z-10 p-7">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                          <span className="text-sm font-semibold text-white/90">
                            {step.number}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right */}
              <div className={!isLeft ? 'md:pl-16' : 'md:pl-16 opacity-0 pointer-events-none'}>
                {!isLeft && (
                  <div className="relative rounded-3xl border backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/[0.07] transition-all duration-500">
                    <div className="absolute inset-0 rounded-3xl pointer-events-none">
                      <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-600/10 blur-3xl rounded-full" />
                      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-600/10 blur-3xl rounded-full" />
                    </div>

                    <div className="relative z-10 p-7">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                          <span className="text-sm font-semibold text-white/90">
                            {step.number}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ✅ Desktop center node */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.45)]">
                <span className="text-white font-semibold">{step.number}</span>
              </div>
            </div>

            {/* ✅ Mobile layout (single column, no overlap) */}
            <div className="md:hidden relative pl-16">
              {/* mobile node */}
              <div className="absolute left-0 top-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.45)]">
                  <span className="text-white font-semibold">{step.number}</span>
                </div>
              </div>

              {/* mobile card */}
              <div className="relative rounded-3xl border backdrop-blur-xl bg-white/5 border-white/10">
                <div className="absolute inset-0 rounded-3xl pointer-events-none">
                  <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-600/10 blur-3xl rounded-full" />
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-600/10 blur-3xl rounded-full" />
                </div>

                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
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
