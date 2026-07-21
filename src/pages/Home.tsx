import { motion } from "framer-motion";
import "@fontsource/instrument-serif";
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import ContactSection from '../components/ContactSection';
import { Camera, Layout, Zap, Target } from 'lucide-react';
import React from "react";
import { useState } from "react";

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
  const [activeButton, setActiveButton] = useState<"primary" | "secondary">("primary");
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050509] px-4 pb-12 pt-14 sm:px-6 sm:pb-16 lg:pt-32">
      {/* ================================================= */}
      {/* BASE BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[#050509]" />

      {/* Animated background colour layer */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(126,34,206,0.14), transparent 42%), radial-gradient(circle at 75% 65%, rgba(37,99,235,0.10), transparent 40%)',
            'radial-gradient(circle at 65% 25%, rgba(126,34,206,0.16), transparent 44%), radial-gradient(circle at 30% 70%, rgba(37,99,235,0.12), transparent 42%)',
            'radial-gradient(circle at 30% 30%, rgba(126,34,206,0.14), transparent 42%), radial-gradient(circle at 75% 65%, rgba(37,99,235,0.10), transparent 40%)',
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Left background glow */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-[280px] bottom-[-180px] h-[650px] w-[650px] rounded-full bg-violet-700/10 blur-[150px]"
        animate={{
          x: [0, 70, 0],
          y: [0, -45, 0],
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Right background glow */}
      <motion.div
        aria-hidden="true"
        className="absolute -right-[250px] top-[15%] h-[650px] w-[650px] rounded-full bg-blue-700/10 blur-[160px]"
        animate={{
          x: [0, -60, 0],
          y: [0, 55, 0],
          scale: [1.05, 0.95, 1.05],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* ================================================= */}
      {/* GRID BACKGROUND */}
      {/* ================================================= */}

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '90px 90px',
          maskImage:
            'radial-gradient(circle at center, black 10%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, black 10%, transparent 78%)',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '90px 90px'],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* ================================================= */}
      {/* HOLOGRAPHIC ORB */}
      {/* ================================================= */}

      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[45%] h-[1050px] w-[1050px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.22),rgba(79,70,229,0.07)_38%,transparent_68%)] blur-[115px]"
        animate={{
          scale: [0.96, 1.04, 0.96],
          opacity: [0.65, 0.95, 0.65],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Central orb fill */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[45%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(168,85,247,0.13),rgba(99,102,241,0.06)_38%,transparent_72%)]"
        animate={{
          scale: [1, 1.025, 1],
          opacity: [0.75, 1, 0.75],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Outer orbit */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[45%] h-[980px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Middle orbit */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[45%] h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.08]"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.015, 1],
        }}
        transition={{
          rotate: {
            duration: 70,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />

      {/* Inner orbit */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[45%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/[0.06]"
        animate={{
          rotate: [0, -360],
          scale: [0.985, 1.02, 0.985],
        }}
        transition={{
          rotate: {
            duration: 55,
            repeat: Infinity,
            ease: 'linear',
          },
          scale: {
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />

      {/* Orb highlight */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-[27%] h-[180px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[70px]"
        animate={{
          x: [-40, 40, -40],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* ================================================= */}
      {/* FLOATING ICONS */}
      {/* ================================================= */}

      <motion.div
        aria-hidden="true"
        className="absolute left-[7%] top-[16%] hidden rounded-full border border-purple-400/10 bg-white/[0.015] p-4 text-purple-400/20 backdrop-blur-md md:block"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: [0, 12, -5, 0],
          y: [0, -14, 7, 0],
          rotate: [0, 4, -3, 0],
        }}
        transition={{
          opacity: { duration: 1.2, delay: 1.1 },
          scale: { duration: 1.2, delay: 1.1 },
          x: {
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          y: {
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <Camera size={29} />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-[12%] left-[11%] hidden rounded-full border border-blue-400/10 bg-white/[0.015] p-4 text-blue-400/20 backdrop-blur-md md:block"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: [0, -9, 10, 0],
          y: [0, 12, -8, 0],
          rotate: [0, -5, 4, 0],
        }}
        transition={{
          opacity: { duration: 1.2, delay: 1.25 },
          scale: { duration: 1.2, delay: 1.25 },
          x: {
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          y: {
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <Layout size={28} />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute right-[7%] top-[18%] hidden rounded-full border border-violet-400/10 bg-white/[0.015] p-4 text-violet-400/20 backdrop-blur-md md:block"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: [0, -11, 8, 0],
          y: [0, 10, -12, 0],
          rotate: [0, -4, 5, 0],
        }}
        transition={{
          opacity: { duration: 1.2, delay: 1.4 },
          scale: { duration: 1.2, delay: 1.4 },
          x: {
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          y: {
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <Target size={29} />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-[13%] right-[8%] hidden rounded-full border border-blue-400/10 bg-white/[0.015] p-4 text-blue-400/20 backdrop-blur-md md:block"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: [0, 10, -7, 0],
          y: [0, -12, 8, 0],
          rotate: [0, 6, -3, 0],
        }}
        transition={{
          opacity: { duration: 1.2, delay: 1.55 },
          scale: { duration: 1.2, delay: 1.55 },
          x: {
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          y: {
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <Zap size={27} />
      </motion.div>

      {/* ================================================= */}
      {/* TWINKLING PARTICLES */}
      {/* ================================================= */}

      <motion.span
        aria-hidden="true"
        className="absolute left-[18%] top-[26%] h-1 w-1 rounded-full bg-white"
        animate={{
          opacity: [0.15, 0.85, 0.15],
          scale: [0.7, 1.4, 0.7],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.span
        aria-hidden="true"
        className="absolute right-[19%] top-[24%] h-1.5 w-1.5 rounded-full bg-purple-400 blur-[1px]"
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.8, 1.5, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0.8,
          ease: 'easeInOut',
        }}
      />

      <motion.span
        aria-hidden="true"
        className="absolute bottom-[24%] left-[20%] h-1.5 w-1.5 rounded-full bg-blue-400 blur-[1px]"
        animate={{
          opacity: [0.15, 0.8, 0.15],
          scale: [0.7, 1.4, 0.7],
        }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          delay: 1.4,
          ease: 'easeInOut',
        }}
      />

      <motion.span
        aria-hidden="true"
        className="absolute bottom-[26%] right-[21%] h-1 w-1 rounded-full bg-white"
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.8, 1.5, 0.8],
        }}
        transition={{
          duration: 4.4,
          repeat: Infinity,
          delay: 0.5,
          ease: 'easeInOut',
        }}
      />

      {/* ================================================= */}
      {/* HERO CONTENT */}
      {/* ================================================= */}

      <div className="relative z-20 mx-auto w-full max-w-7xl text-center">
        {/* OD SOCIALS */}
        <motion.p
          className="mb-6 text-[10px] font-medium uppercase tracking-[0.48em] text-gray-400 sm:mb-8 sm:text-xs md:text-sm"
          initial={{
            opacity: 0,
            y: -18,
            filter: 'blur(8px)',
            letterSpacing: '0.8em',
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            letterSpacing: '0.48em',
          }}
          transition={{
            duration: 1.50,
            delay: 0.75,
            ease: [0.60, 1, 0.60, 1],
          }}
        >
          OD SOCIALS
        </motion.p>

        {/* Main heading */}
        <motion.h1
          style={{
            fontFamily: '"Instrument Serif", serif',
            transformStyle: 'preserve-3d',
          }}
          className="relative mx-auto max-w-[1450px] select-none tracking-[-0.045em]"
        >
          {/* Your Brand */}
          <motion.span
            className="block text-[82px] leading-[0.9] text-white drop-shadow-[0_15px_45px_rgba(255,255,255,0.09)] sm:text-[82px] md:text-[128px] lg:text-[156px] xl:text-[152px]"
            initial={{
              opacity: 0,
              y: 80,
              rotateX: -35,
              filter: 'blur(16px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 1.50,
              delay: 0.75,
              ease: [0.60, 1, 0.60, 1],
            }}
          >
            Your Brand.
          </motion.span>

          {/* Our Creativity */}
          <motion.span
            className="relative block bg-gradient-to-r from-[#c084fc] via-[#8b5cf6] to-[#60a5fa] bg-[length:200%_200%] bg-clip-text text-[66px] leading-[0.9] text-transparent drop-shadow-[0_20px_65px_rgba(139,92,246,0.38)] sm:text-[82px] md:text-[128px] lg:text-[156px] xl:text-[152px]"
            initial={{
              opacity: 0,
              y: 90,
              rotateX: -38,
              filter: 'blur(18px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: 'blur(0px)',
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              opacity: {
                duration: 1.50,
                delay: 0.75,
                ease: [0.60, 1, 0.60, 1],
              },
              y: {
                duration: 1.50,
                delay: 0.75,
                ease: [0.60, 1, 0.60, 1],
              },
              rotateX: {
                duration: 1.50,
                delay: 0.75,
                ease: [0.60, 1, 0.60, 1],
              },
              filter: {
                duration: 1.50,
                delay: 0.75,
                ease: [0.60, 1, 0.60, 1],
              },
              backgroundPosition: {
                duration: 9,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            Our Creativity
          </motion.span>

          {/* Smaller subtagline */}
          <motion.span
            className="mt-2 block text-[46px] leading-[0.95] text-white/95 drop-shadow-[0_15px_45px_rgba(245,245,245,0.07)] sm:mt-2 sm:text-[50px] md:text-[66px] lg:text-[78px] xl:text-[88px]"
            initial={{
              opacity: 0,
              y: 70,
              rotateX: -30,
              filter: 'blur(15px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 1.50,
              delay: 0.75,
              ease: [0.60, 1, 0.60, 1],
            }}
          >
            Optimised by design
          </motion.span>
        </motion.h1>

        {/* Services line */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-gray-400 sm:mt-9 sm:text-base md:mt-10 md:text-xl"
          initial={{
            opacity: 0,
            y: 24,
            filter: 'blur(8px)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 1.50,
            delay: 0.95,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Social Media • Website Systems • AI Automation
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-row items-center justify-center gap-3 sm:mt-12 sm:gap-5 lg:mt-14"
          initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          delay: 1.1,
          ease: [0.22, 1, 0.36, 1],
          }}
          >
          <div
            className="w-[44%] max-w-[170px] sm:w-auto sm:max-w-none"
            onMouseEnter={() => setActiveButton("primary")}
            onTouchStart={() => setActiveButton("primary")}
          >
            <Button
              variant={activeButton === "primary" ? "primary" : "secondary"}
              href="#services"
            >
              Explore Systems
            </Button>
          </div>

          <div
            className="w-[44%] max-w-[170px] sm:w-auto sm:max-w-none"
            onMouseEnter={() => setActiveButton("secondary")}
            onTouchStart={() => setActiveButton("secondary")}
          >
            <Button
              variant={activeButton === "secondary" ? "primary" : "secondary"}
              href="#contact"
            >
              Start a Project
            </Button>
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* PREMIUM GLASS STRIP */}
        {/* ================================================= */}

        <motion.div
          className="mx-auto mt-12 max-w-5xl sm:mt-14 lg:mt-16"
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.96,
            filter: 'blur(10px)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 1,
            delay: 1.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] px-5 py-4 shadow-[0_0_80px_rgba(139,92,246,0.08)] backdrop-blur-2xl sm:rounded-full sm:px-8 sm:py-5"
            animate={{
              borderColor: [
                'rgba(255,255,255,0.08)',
                'rgba(139,92,246,0.22)',
                'rgba(255,255,255,0.08)',
              ],
              boxShadow: [
                '0 0 60px rgba(139,92,246,0.05)',
                '0 0 90px rgba(59,130,246,0.10)',
                '0 0 60px rgba(139,92,246,0.05)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Moving glass reflection */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-y-0 w-32 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
              animate={{
                left: ['-25%', '125%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 5,
                ease: 'easeInOut',
              }}
            />

            <div className="relative z-10 grid grid-cols-2 gap-4 text-xs text-gray-300 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-7 sm:text-sm">
              <div className="flex items-center justify-center gap-2">
                <Camera size={16} className="text-purple-300" />
                <span>Social Systems</span>
              </div>

              <div className="hidden h-4 w-px bg-white/10 sm:block" />

              <div className="flex items-center justify-center gap-2">
                <Layout size={16} className="text-blue-300" />
                <span>Website Engineering</span>
              </div>

              <div className="hidden h-4 w-px bg-white/10 sm:block" />

              <div className="flex items-center justify-center gap-2">
                <Zap size={16} className="text-violet-300" />
                <span>AI Automation</span>
              </div>

              <div className="hidden h-4 w-px bg-white/10 sm:block" />

              <div className="flex items-center justify-center gap-2">
                <Target size={16} className="text-blue-300" />
                <span>Growth Strategy</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================================================= */}
      {/* BOTTOM FADE */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-full bg-gradient-to-b from-transparent via-[#050509]/70 to-[#050509]" />
    </section>

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
