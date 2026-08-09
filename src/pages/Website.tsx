import ContactSection from "../components/ContactSection";
import { Layout, Zap, Search, Users, TrendingUp, Check } from "lucide-react";

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

  return (
    <div className="relative">
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="absolute top-1/4 right-1/4 opacity-20 animate-float">
          <Layout size={40} className="text-purple-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-20 animate-float-delayed">
          <Zap size={36} className="text-blue-400" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Websites That
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Work Beyond Launch
            </span>
          </h1>

          <p className="text-2xl text-gray-400">
            Designed for performance, clarity, and scale.
          </p>
        </div>
      </section>

      {/* WHAT WE BUILD — MATCHES PACKAGES UI/THEME */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-12">
              What We Build
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[
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
            ].map((service, index) => (
              <div
                key={index}
                className="relative rounded-3xl border backdrop-blur-xl transition-all duration-500 bg-white/5 border-white/10 hover:bg-white/[0.07] hover:-translate-y-1"
              >
                {/* subtle glow (same system as packages) */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none">
                  <div className="absolute -top-28 -left-24 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full" />
                  <div className="absolute -bottom-28 -right-24 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full" />
                </div>

                <div className="relative z-10 p-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-6">
                    <service.icon size={24} className="text-purple-300" />
                  </div>

                  <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 text-xl text-gray-400 leading-relaxed">
            <p>A website is only as valuable as the system behind it.</p>
            <p>
              We focus on the mechanics behind growth search visibility,
              conversion points, and structured flows that guide visitors toward
              action. Everything is designed to evolve as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES (ADDED) */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-4">
              Website System
            </h2>
            <p className="text-xl text-gray-400">
              Choose the level of system you want to build
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={[
                  "relative rounded-3xl border backdrop-blur-xl transition-all duration-500",
                  "bg-white/5 border-white/10 hover:bg-white/[0.07] hover:-translate-y-1",
                  pkg.popular
                    ? "ring-1 ring-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.20)]"
                    : "",
                ].join(" ")}
              >
                {/* soft glow */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none">
                  <div className="absolute -top-28 -left-24 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full" />
                  <div className="absolute -bottom-28 -right-24 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full" />
                </div>

                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-1 rounded-full text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_10px_30px_rgba(59,130,246,0.25)]">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="relative z-10 p-8">
                  <h3 className="text-3xl font-serif mb-4">{pkg.title}</h3>

                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5 text-gray-200 mb-8">
                    {pkg.badge}
                  </div>

                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {pkg.outcome}
                  </p>

                  <p className="text-sm tracking-widest text-gray-400 mb-4">
                    INCLUDED
                  </p>
                  <ul className="space-y-3">
                    {pkg.included.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-200">
                        <span className="mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                          <Check size={14} className="text-purple-300" />
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
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
