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
        "radial-gradient(circle at 30% 30%, rgba(126,34,206,0.14), transparent 42%), radial-gradient(circle at 75% 65%, rgba(37,99,235,0.10), transparent 40%)",
        "radial-gradient(circle at 65% 25%, rgba(126,34,206,0.16), transparent 44%), radial-gradient(circle at 30% 70%, rgba(37,99,235,0.12), transparent 42%)",
        "radial-gradient(circle at 30% 30%, rgba(126,34,206,0.14), transparent 42%), radial-gradient(circle at 75% 65%, rgba(37,99,235,0.10), transparent 40%)",
      ],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
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
      ease: "easeInOut",
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
      ease: "easeInOut",
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
      backgroundSize: "90px 90px",
      maskImage:
        "radial-gradient(circle at center, black 10%, transparent 78%)",
      WebkitMaskImage:
        "radial-gradient(circle at center, black 10%, transparent 78%)",
    }}
    animate={{
      backgroundPosition: ["0px 0px", "90px 90px"],
    }}
    transition={{
      duration: 28,
      repeat: Infinity,
      ease: "linear",
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
      ease: "easeInOut",
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
      ease: "easeInOut",
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
      ease: "linear",
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
        ease: "linear",
      },
      scale: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
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
        ease: "linear",
      },
      scale: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
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
      ease: "easeInOut",
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
        ease: "easeInOut",
      },
      y: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
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
        ease: "easeInOut",
      },
      y: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 13,
        repeat: Infinity,
        ease: "easeInOut",
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
        ease: "easeInOut",
      },
      y: {
        duration: 13,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
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
        ease: "easeInOut",
      },
      y: {
        duration: 11,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
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
      ease: "easeInOut",
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
      ease: "easeInOut",
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
      ease: "easeInOut",
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
      ease: "easeInOut",
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
        filter: "blur(8px)",
        letterSpacing: "0.8em",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        letterSpacing: "0.48em",
      }}
      transition={{
        duration: 1.5,
        delay: 0.75,
        ease: [0.6, 1, 0.6, 1],
      }}
    >
      OD SOCIALS
    </motion.p>

    {/* Main heading */}
    <motion.h1
      style={{
        fontFamily: "'General Sans', sans-serif",
        transformStyle: "preserve-3d",
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
          filter: "blur(16px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.5,
          delay: 0.75,
          ease: [0.6, 1, 0.6, 1],
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
          filter: "blur(18px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          opacity: {
            duration: 1.5,
            delay: 0.75,
            ease: [0.6, 1, 0.6, 1],
          },
          y: {
            duration: 1.5,
            delay: 0.75,
            ease: [0.6, 1, 0.6, 1],
          },
          rotateX: {
            duration: 1.5,
            delay: 0.75,
            ease: [0.6, 1, 0.6, 1],
          },
          filter: {
            duration: 1.5,
            delay: 0.75,
            ease: [0.6, 1, 0.6, 1],
          },
          backgroundPosition: {
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        Our Creativity
      </motion.span>

      {/* Smaller subtagline */}
      <motion.span
        className="
              mt-3   
              block
              text-[50px]
              sm:text-[58px]
              md:text-[72px]
              lg:text-[82px]
              xl:text-[92px]
              leading-[1]
              font-light
              text-transparent
              select-none
              "
        style={{
          fontFamily: "'General Sans', sans-serif",
          WebkitTextStroke: "1.5px rgba(255,255,255,.92)",
          color: "transparent",
        }}
        initial={{
          opacity: 0,
          y: 70,
          rotateX: -30,
          filter: "blur(15px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.5,
          delay: 0.75,
          ease: [0.6, 1, 0.6, 1],
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
        filter: "blur(8px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.5,
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
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
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
            "rgba(255,255,255,0.08)",
            "rgba(139,92,246,0.22)",
            "rgba(255,255,255,0.08)",
          ],
          boxShadow: [
            "0 0 60px rgba(139,92,246,0.05)",
            "0 0 90px rgba(59,130,246,0.10)",
            "0 0 60px rgba(139,92,246,0.05)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Moving glass reflection */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-0 w-32 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
          animate={{
            left: ["-25%", "125%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
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
</section>;
