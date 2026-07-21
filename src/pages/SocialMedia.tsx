import ContactSection from '../components/ContactSection';
import {
  Instagram,
  Video,
  MessageSquare,
  TrendingUp,
  Calendar,
} from 'lucide-react';

export default function SocialMedia() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="absolute top-1/4 right-1/4 opacity-20 animate-float pointer-events-none">
          <Instagram size={40} className="text-purple-400" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-20 animate-float-delayed pointer-events-none">
          <Video size={36} className="text-blue-400" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Social Media,
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Built as a System
            </span>
          </h1>

          <p className="text-2xl text-gray-400">
            Consistent content. Clear strategy. Measurable growth.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-12">What We Do</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[
              {
                icon: Instagram,
                title: 'Content Creation',
                description:
                  'High-quality visual content designed to capture attention and build brand identity',
              },
              {
                icon: Video,
                title: 'Reels & Short-Form Videos',
                description: 'Engaging video content optimized for maximum reach and engagement',
              },
              {
                icon: MessageSquare,
                title: 'Captions & Storytelling',
                description:
                  'Compelling narratives that connect with your audience and drive action',
              },
              {
                icon: TrendingUp,
                title: 'Community Management',
                description: 'Active engagement strategies to build loyal, responsive communities',
              },
              {
                icon: Calendar,
                title: 'Growth Strategy & Planning',
                description:
                  'Data-driven planning to ensure consistent growth and brand visibility',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative rounded-3xl border backdrop-blur-xl transition-all duration-500 bg-white/5 border-white/10 hover:bg-white/[0.07] hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-3xl pointer-events-none">
                  <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/10 blur-3xl rounded-full" />
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full" />
                </div>

                <div className="relative z-10 p-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-6">
                    <service.icon size={24} className="text-purple-300" />
                  </div>

                  <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA PACKAGES */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-4">
              Social Media Systems
            </h2>
            <p className="text-xl text-gray-400">
              Structured content systems built for consistency and growth
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {[
              {
                title: 'Foundation',
                badge: 'For individuals & early-stage brands',
                popular: false,
                included: [
                  'Strategy & Setup',
                  'Platform setup & optimisation (2 platforms)',
                  'Profile bio optimisation',
                  'Brand tone & voice guideline',
                  'Content direction & posting framework',
                  'Competitor benchmark snapshot',

                  'Content & Publishing',
                  '8–10 posts per month',
                  'Caption & hashtag system',
                  'Posting & scheduling',

                  'Ads & Insights',
                  'Basic ads setup',
                  'Monthly performance summary',
                ],
              },
              {
                title: 'Growth',
                badge: 'Creators, coaches & service brands',
                popular: true,
                included: [
                  'Platform optimisation (3 platforms)',
                  'Growth content calendar',
                  '14–16 posts per month',
                  'Reels & short-form strategy',
                  'Audience interaction guidance',
                  'Performance tracking & optimisation',
                  'Monthly report with insights',
                ],
              },
              {
                title: 'Authority',
                badge: 'Scaling brands & businesses',
                popular: false,
                included: [
                  'Platform optimisation (3–4 platforms)',
                  'Brand storytelling & content pillars',
                  '20–24 posts per month',
                  'Short-form video focus strategy',
                  'Community management system',
                  'Scalable content workflow',
                  'Monthly report with insights',
                ],
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={[
                  'relative rounded-3xl border backdrop-blur-xl transition-all duration-500',
                  'bg-white/5 border-white/10 hover:bg-white/[0.07] hover:-translate-y-1',
                  pkg.popular
                    ? 'ring-1 ring-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.20)]'
                    : '',
                ].join(' ')}
              >
                <div className="absolute inset-0 rounded-3xl pointer-events-none">
                  <div className="absolute -top-28 -left-24 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full" />
                  <div className="absolute -bottom-28 -right-24 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full" />
                </div>

                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-1 rounded-full text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-purple-500 to-blue-500">
                      Popular
                    </div>
                  </div>
                )}

                <div className="relative z-10 p-8">
                  <h3 className="text-3xl font-serif mb-4">{pkg.title}</h3>

                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5 text-gray-200 mb-8">
                    {pkg.badge}
                  </div>

                  <p className="text-sm tracking-widest text-gray-400 mb-4">
                    INCLUDED
                  </p>

                  <ul className="space-y-3">
                    {pkg.included.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-200">
                        <span className="mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-xs">
                          ✓
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
