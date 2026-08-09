import ContactSection from "../components/ContactSection";
import {
  Zap,
  Database,
  MessageCircle,
  BarChart3,
  Share2,
  Check,
} from "lucide-react";

export default function AIAutomation() {
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
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="absolute top-1/4 right-1/4 opacity-20 animate-float">
          <Zap size={40} className="text-purple-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-20 animate-float-delayed">
          <Database size={36} className="text-blue-400" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Automation That
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Runs the Business
            </span>
          </h1>

          <p className="text-2xl text-gray-400">
            Smarter workflows. Less manual work.
          </p>
        </div>
      </section>

      {/* WHAT WE AUTOMATE — MATCHES PACKAGES UI/THEME */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-12">
              What We Automate
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[
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
            ].map((service, index) => (
              <div
                key={index}
                className="relative rounded-3xl border backdrop-blur-xl transition-all duration-500 bg-white/5 border-white/10 hover:bg-white/[0.07] hover:-translate-y-1"
              >
                {/* soft glow (same system as packages) */}
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
            <p>
              Modern businesses don’t fail from lack of effort they fail from
              friction.
            </p>
            <p>
              Manual follow-ups, missed leads, disconnected tools, and systems
              that don’t talk to each other. We replace that friction with
              intelligent AI layersthat sit directly inside your business from
              first interaction to final handoff.
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-4">
              AI Automation System
            </h2>
            <p className="text-xl text-gray-400">
              Choose the level of AI system you want to deploy
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

                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5 text-gray-200 mb-6">
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
