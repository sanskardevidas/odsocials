import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors ${
      isActive ? "text-white" : "text-white/70 hover:text-white"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block w-full rounded-xl px-4 py-3 text-base transition-colors ${
      isActive
        ? "bg-white/10 text-white"
        : "text-white/80 hover:bg-white/5 hover:text-white"
    }`;

  const closeMenu = () => setOpen(false);

  // close on route change
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // lock body scroll when menu open
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const goContact = () => {
    closeMenu();

    // If already on current page, just scroll
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Otherwise go home then scroll (works if contact section is on home)
    if (location.pathname !== "/") {
      navigate("/#contact");
    } else {
      navigate("/#contact");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
<div
  onClick={() => navigate("/")}
  className="
    relative
    w-9 h-9
    rounded-full
    flex items-center justify-center
    cursor-pointer
    transition-transform duration-300
    hover:scale-110
  "
>
  {/* glow */}
  <span
    className="
      absolute inset-0
      rounded-full
      bg-purple-500/30
      blur-xl
      opacity-60
      pointer-events-none
    "
  />

  {/* logo holder */}
  <div
    className="
      w-9 h-9
      rounded-full
      bg-black
      flex items-center justify-center
      overflow-hidden
      ring-1 ring-white/10
    "
  >
    <img
      src="/od-logo.png"
      alt="OD Socials"
      className="w-6 h-6 object-contain"
      draggable={false}
    />
  </div>
</div>
          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/social-media" className={linkClass}>
              Social Media
            </NavLink>
            <NavLink to="/website" className={linkClass}>
              Website
            </NavLink>
            <NavLink to="/ai-automation" className={linkClass}>
              AI Automation
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            {/* DESKTOP CTA */}
            <div className="hidden md:flex">
              <Button variant="secondary" onClick={goContact}>
                Start a Project
              </Button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="text-white" size={18} /> : <Menu className="text-white" size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY + PANEL */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* panel */}
          <div className="absolute top-16 left-0 right-0 px-4">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.55)] overflow-hidden">
              <div className="p-3">
                <NavLink to="/" className={mobileLinkClass} onClick={closeMenu}>
                  Home
                </NavLink>
                <NavLink
                  to="/social-media"
                  className={mobileLinkClass}
                  onClick={closeMenu}
                >
                  Social Media
                </NavLink>
                <NavLink
                  to="/website"
                  className={mobileLinkClass}
                  onClick={closeMenu}
                >
                  Website
                </NavLink>
                <NavLink
                  to="/ai-automation"
                  className={mobileLinkClass}
                  onClick={closeMenu}
                >
                  AI Automation
                </NavLink>

                <div className="mt-3 px-1 pb-1">
                  <Button variant="secondary" onClick={goContact}>
                    Start a Project
                  </Button>
                </div>
              </div>

              {/* subtle purple glow line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
