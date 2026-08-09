import {
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

import { useState } from "react";

export default function ContactSection() {
  // =========================================
  // CONTACT DETAILS
  // =========================================

  const email = "contact@odsocials.co.uk";
  const whatsappNumber = "447393121595";

  const instagramUrl =
    "https://www.instagram.com/od.socials?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  const linkedinUrl =
    "https://www.linkedin.com/company/od-socials/posts/?feedView=all";

  // =========================================
  // FORM STATE
  // =========================================

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  // =========================================
  // INPUT CHANGE
  // =========================================

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================
  // SUBMIT
  // Opens visitor's email application
  // =========================================

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `New Project Enquiry from ${form.name}`;

    const body = `
NEW PROJECT ENQUIRY

----------------------------------------

Name:
${form.name}

Email:
${form.email}

Phone / WhatsApp:
${form.phone || "Not provided"}

Company:
${form.company || "Not provided"}

----------------------------------------

PROJECT DETAILS

${form.message}

----------------------------------------

Submitted through OD Socials website.
    `.trim();

    const mailtoLink =
      `mailto:${email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  // =========================================
  // REUSABLE STYLES
  // =========================================

  const labelStyle = `
    mb-2
    block
    text-[12px]
    sm:text-[13px]
    md:text-[14px]
    font-bold
    uppercase
    tracking-[0.14em]
    text-black/70
  `;

  const inputStyle = `
    w-full
    border-0
    border-b
    border-black/15
    bg-transparent
    px-0
    py-3
    sm:py-4
    text-[16px]
    sm:text-[17px]
    font-medium
    text-black
    outline-none
    transition-all
    duration-300
    placeholder:font-normal
    placeholder:text-black/30
    focus:border-black
  `;

  const socialButtonStyle = `
    group
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    border
    border-black/15
    bg-white
    px-4
    py-2.5
    sm:px-6
    sm:py-3
    text-[12px]
    sm:text-sm
    font-semibold
    text-black
    transition-all
    duration-300
    hover:bg-black
    hover:text-white
    hover:border-black
  `;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        py-16
        sm:px-6
        sm:py-20
        md:py-28
        lg:py-32
      "
    >
      {/* =========================================
          PAGE BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(0,0,0,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.35)_1px,transparent_1px)]
            [background-size:48px_48px]
            sm:[background-size:70px_70px]
          "
        />

        {/* LEFT CIRCLE */}
        <div
          className="
            absolute
            -left-24
            top-24
            hidden
            h-52
            w-52
            rounded-full
            border
            border-black/[0.06]
            lg:block
          "
        />

        {/* RIGHT CIRCLE */}
        <div
          className="
            absolute
            -right-28
            bottom-20
            hidden
            h-64
            w-64
            rounded-full
            border
            border-black/[0.06]
            lg:block
          "
        />

        {/* DOT GRID */}
        <div className="absolute left-16 top-32 hidden grid-cols-5 gap-2 opacity-20 lg:grid">
          {[...Array(20)].map((_, index) => (
            <span
              key={index}
              className="h-[3px] w-[3px] rounded-full bg-black"
            />
          ))}
        </div>
      </div>

      {/* =========================================
          MAIN WRAPPER
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =========================================
            TOP BADGE
        ========================================= */}

        <div className="mb-5 flex justify-center sm:mb-7">
          <div
            className="
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-black/15
              bg-white
              px-4
              py-2
              text-[9px]
              sm:text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              sm:tracking-[0.35em]
              text-black/55
            "
          >
            <span className="h-1 w-1 rounded-full bg-black" />

            LET&apos;S WORK TOGETHER

            <span className="h-1 w-1 rounded-full bg-black" />
          </div>
        </div>

        {/* =========================================
            MAIN HEADING
        ========================================= */}

        <div
          className="
            mx-auto
            mb-9
            max-w-4xl
            text-center
            sm:mb-12
            md:mb-16
          "
        >
          <h2
            className="
              font-serif
              text-[42px]
              leading-[0.95]
              tracking-[-0.035em]
              text-black
              sm:text-6xl
              md:text-7xl
              lg:text-[5.5rem]
            "
          >
            Start a Project
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              px-3
              text-[15px]
              leading-6
              text-black/55
              sm:mt-6
              sm:text-lg
              sm:leading-7
            "
          >
            Tell us what you&apos;re building — we&apos;ll reply with clarity,
            scope, and next steps.
          </p>

          {/* DIVIDER */}

          <div className="mt-7 flex items-center justify-center gap-3 sm:mt-9">
            <div className="h-px w-12 bg-black/15 sm:w-16" />

            <div className="h-1.5 w-1.5 rotate-45 border border-black/30 sm:h-2 sm:w-2" />

            <div className="h-px w-12 bg-black/15 sm:w-16" />
          </div>
        </div>

        {/* =========================================
            CONTACT CARD
        ========================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-black/10
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.06)]
            sm:rounded-[28px]
            md:rounded-[32px]
            md:shadow-[0_30px_100px_rgba(0,0,0,0.08)]
          "
        >
          {/* TOP LEFT BLACK CORNER */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-10
              w-10
              rounded-br-[40px]
              bg-black
              sm:h-14
              sm:w-14
              sm:rounded-br-[56px]
              md:h-20
              md:w-20
              md:rounded-br-[80px]
            "
          />

          {/* BOTTOM RIGHT BLACK CORNER */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              h-10
              w-10
              rounded-tl-[40px]
              bg-black
              sm:h-14
              sm:w-14
              sm:rounded-tl-[56px]
              md:h-20
              md:w-20
              md:rounded-tl-[80px]
            "
          />

          {/* CARD GRID */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.022]
              [background-image:linear-gradient(rgba(0,0,0,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.4)_1px,transparent_1px)]
              [background-size:42px_42px]
              sm:[background-size:55px_55px]
            "
          />

          {/* =========================================
              CARD CONTENT
          ========================================= */}

          <div
            className="
              relative
              z-10
              px-5
              pb-7
              pt-12
              sm:px-8
              sm:pb-9
              sm:pt-14
              md:p-12
              lg:p-16
            "
          >
            {/* =========================================
                CARD HEADER
            ========================================= */}

            <div
              className="
                mb-8
                flex
                items-end
                justify-between
                gap-4
                border-b
                border-black/10
                pb-7
                sm:mb-10
                sm:pb-8
                md:mb-12
                md:pb-10
              "
            >
              <div className="min-w-0">
                <span
                  className="
                    mb-3
                    block
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.32em]
                    text-black/40
                    sm:mb-4
                    sm:text-[10px]
                    sm:tracking-[0.4em]
                  "
                >
                  PROJECT ENQUIRY
                </span>

                <h3
                  className="
                    max-w-xl
                    text-[28px]
                    font-bold
                    leading-[1.05]
                    tracking-[-0.025em]
                    text-black
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  Tell us what you&apos;re building.
                </h3>
              </div>

              {/* HEADER ICON */}

              <div
                className="
                  hidden
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/15
                  text-black
                  sm:flex
                  md:h-14
                  md:w-14
                "
              >
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* =========================================
                FORM
            ========================================= */}

            <form onSubmit={handleSubmit}>
              {/* =========================================
                  INPUT GRID
              ========================================= */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-y-6
                  md:grid-cols-2
                  md:gap-x-10
                  md:gap-y-9
                "
              >
                {/* NAME */}

                <div className="group">
                  <label htmlFor="name" className={labelStyle}>
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className={inputStyle}
                  />
                </div>

                {/* EMAIL */}

                <div className="group">
                  <label htmlFor="email" className={labelStyle}>
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputStyle}
                  />
                </div>

                {/* PHONE */}

                <div className="group">
                  <label htmlFor="phone" className={labelStyle}>
                    Phone / WhatsApp
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="+44 ..."
                    className={inputStyle}
                  />
                </div>

                {/* COMPANY */}

                <div className="group">
                  <label htmlFor="company" className={labelStyle}>
                    Company
                  </label>

                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    placeholder="Company name (optional)"
                    className={inputStyle}
                  />
                </div>
              </div>

              {/* =========================================
                  PROJECT DETAILS
              ========================================= */}

              <div className="mt-7 md:mt-10">
                <label htmlFor="message" className={labelStyle}>
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="What are you building? Share goals, timeline, and what you need help with."
                  className="
                    min-h-[110px]
                    w-full
                    resize-none
                    border-0
                    border-b
                    border-black/15
                    bg-transparent
                    px-0
                    py-3
                    text-[16px]
                    font-medium
                    leading-7
                    text-black
                    outline-none
                    transition-all
                    duration-300
                    placeholder:font-normal
                    placeholder:text-black/30
                    focus:border-black
                    sm:min-h-[125px]
                    sm:py-4
                    sm:text-[17px]
                    md:min-h-[145px]
                  "
                />
              </div>

              {/* =========================================
                  FORM FOOTER
              ========================================= */}

              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-5
                  sm:mt-9
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p
                  className="
                    order-2
                    text-center
                    text-[12px]
                    leading-5
                    text-black/45
                    sm:order-1
                    sm:text-left
                    sm:text-sm
                  "
                >
                  Your details stay private. No spam.
                </p>

                <button
                  type="submit"
                  className="
                    group
                    order-1
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-black
                    px-7
                    py-3.5
                    text-[13px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]
                    sm:order-2
                    sm:w-auto
                    sm:min-w-[210px]
                    sm:px-8
                    sm:py-4
                    sm:text-sm
                  "
                >
                  Submit Enquiry

                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* =========================================
            SOCIAL / CONTACT BUTTONS
        ========================================= */}

        <div
          className="
            mt-7
            grid
            grid-cols-2
            gap-2.5
            sm:mt-9
            sm:flex
            sm:flex-wrap
            sm:items-center
            sm:justify-center
            sm:gap-3
          "
        >
          {/* WHATSAPP */}

          <a
            className={socialButtonStyle}
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          {/* EMAIL */}

          <a
            className={socialButtonStyle}
            href={`mailto:${email}`}
          >
            <Mail size={16} />
            Email
          </a>

          {/* INSTAGRAM */}

          <a
            className={socialButtonStyle}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={16} />
            Instagram
          </a>

          {/* LINKEDIN */}

          <a
            className={socialButtonStyle}
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        {/* =========================================
            BOTTOM TEXT
        ========================================= */}

        <div className="mt-7 text-center sm:mt-9">
          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-black/30
              sm:text-[9px]
              sm:tracking-[0.4em]
            "
          >
            OD SOCIALS — DIGITAL SYSTEMS BUILT FOR GROWTH
          </span>
        </div>
      </div>
    </section>
  );
}