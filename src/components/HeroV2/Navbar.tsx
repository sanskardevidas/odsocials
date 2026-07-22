import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-[92px] max-w-[1600px] items-center justify-between px-10">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-4 select-none"
        >
          <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-black">
            <span className="text-[22px] font-black text-white">
              od.
            </span>
          </div>

          <span className="text-[22px] font-semibold tracking-[0.18em] uppercase text-black">
            OD SOCIALS
          </span>
        </NavLink>

        {/* Navigation */}

        <nav className="flex items-center gap-16">
          <NavLink
            to="/"
            className="text-[18px] font-medium text-black transition-colors duration-300 hover:text-neutral-500"
            >
              Home
          </NavLink>
          <NavLink
            to="/social-media"
            className="text-[18px] font-medium text-black transition-colors duration-300 hover:text-neutral-500"
          >
            Social Media
          </NavLink>
          <NavLink
            to="/website"
            className="text-[18px] font-medium text-black transition-colors duration-300 hover:text-neutral-500"
          >
            Website
          </NavLink>
          <NavLink
            to="/ai-automation"
            className="text-[18px] font-medium text-black transition-colors duration-300 hover:text-neutral-500"
          >
            AI Automation
          </NavLink>
        </nav>

        {/* Button */}

        <button
          className="
          h-[58px]
          rounded-full
          border-2
          border-black
          px-9
          text-[18px]
          font-semibold
          transition-all
          duration-300
          hover:bg-black
          hover:text-white
          "
        >
          Start a Project
        </button>

      </div>
    </header>
  );
}