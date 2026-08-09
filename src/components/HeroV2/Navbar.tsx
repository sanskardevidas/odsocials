import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Social Media", path: "/social-media" },
    { name: "Website", path: "/website" },
    { name: "AI Automation", path: "/ai-automation" },
  ];

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          z-50
          w-full
          backdrop-blur-md
          bg-white/70
        "
      >
        <div
          className="
            mx-auto
            flex

            h-[72px]
            sm:h-[78px]
            md:h-[84px]
            lg:h-[92px]

            max-w-[1700px]

            items-center
            justify-between

            px-4
            sm:px-6
            md:px-8
            lg:px-10
            xl:px-12
          "
        >
          {/* Logo */}

          <NavLink to="/" className="flex items-center gap-3 select-none">
            <div
              className="
                flex
                h-10
                w-10

                sm:h-11
                sm:w-11

                lg:h-[54px]
                lg:w-[54px]

                items-center
                justify-center

                rounded-full
                bg-black
              "
            >
              <span
                className="
                  text-base
                  sm:text-lg
                  lg:text-[22px]

                  font-black
                  text-white
                "
              >
                od.
              </span>
            </div>

            <span
              className="
                text-[15px]
                sm:text-[17px]
                md:text-[18px]
                lg:text-[22px]

                font-semibold

                tracking-[0.16em]
                uppercase

                text-black
              "
            >
              OD SOCIALS
            </span>
          </NavLink>

          {/* Desktop Navigation */}

          <nav
            className="
              hidden
              lg:flex

              items-center

              gap-8
              xl:gap-10
            "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-[16px] xl:text-[17px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-black"
                      : "text-black hover:text-neutral-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Button */}

          <button
            className="
              hidden
              lg:flex

              items-center
              justify-center

              h-[54px]
              xl:h-[58px]

              rounded-full

              border-2
              border-black

              px-8
              xl:px-9

              text-[16px]
              xl:text-[18px]

              font-semibold

              text-black

              transition-all
              duration-300

              hover:bg-black
              hover:text-white
            "
          >
            Start a Project
          </button>

          {/* Mobile Menu */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-black"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`
          fixed
          inset-0
          z-40

          bg-white

          transition-all
          duration-500

          lg:hidden

          ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div
          className="
            flex
            h-full

            flex-col

            items-center
            justify-center

            gap-8
            sm:gap-10
          "
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-[28px] sm:text-[34px] font-semibold transition-colors duration-300 ${
                  isActive ? "text-black" : "text-black hover:text-neutral-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button
            onClick={() => setIsOpen(false)}
            className="
              mt-4

              rounded-full

              border-2
              border-black

              px-10
              py-4

              text-lg
              font-semibold

              text-black

              transition-all
              duration-300

              hover:bg-black
              hover:text-white
            "
          >
            Start a Project
          </button>
        </div>
      </div>
    </>
  );
}
