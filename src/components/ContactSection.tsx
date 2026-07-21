import { Mail, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const email = 'contact@odsocials.com';
  const whatsappNumber = '447393121595';
  const instagramUrl =
    'https://www.instagram.com/od.socials?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
  const linkedinUrl =
    'https://www.linkedin.com/company/od-socials/posts/?feedView=all';

  const buttonBase =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-white/90 hover:bg-white/[0.08] hover:border-white/20 transition-all';

  // ✅ added state
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ webhook submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('https://ddevidas.app.n8n.cloud/webhook/start-project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        pageUrl: window.location.href,
      }),
    });

    // optional reset
    setForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.07] shadow-[0_0_80px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 rounded-3xl pointer-events-none">
            <div className="absolute -top-28 -left-24 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-28 -right-24 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full" />
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-5xl md:text-6xl font-serif mb-4">Start a Project</h2>
              <p className="text-lg text-gray-400">
                Tell us what you’re building — we’ll reply with clarity, scope, and next steps.
              </p>
            </div>

            {/* ✅ FORM WRAPPED */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 outline-none focus:border-white/20"
                placeholder="Your name"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 outline-none focus:border-white/20"
                placeholder="Email address"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 outline-none focus:border-white/20"
                placeholder="Phone / WhatsApp"
              />

              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 outline-none focus:border-white/20"
                placeholder="Company (optional)"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full min-h-[160px] bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 outline-none focus:border-white/20 resize-none"
                placeholder="What are you building? Share goals, timeline, and what you need help with."
              />

              <button
                type="submit"
                className="w-full mt-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:opacity-95 transition-all"
              >
                Submit Enquiry
              </button>

              <div className="text-center text-sm text-gray-500 pt-2">
                Your details stay private. No spam.
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a className={buttonBase} href={`https://wa.me/${whatsappNumber}`} target="_blank">
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a className={buttonBase} href={`mailto:${email}`}>
            <Mail size={18} /> Email
          </a>
          <a className={buttonBase} href={instagramUrl} target="_blank">
            <Instagram size={18} /> Instagram
          </a>
          <a className={buttonBase} href={linkedinUrl} target="_blank">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
