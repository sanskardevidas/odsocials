import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string; // "/website" OR "#contact" OR "https://..."
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const baseStyles =
    "px-8 py-3.5 text-sm font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center cursor-pointer select-none";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]",
    secondary:
      "border border-purple-500/50 hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleClick = (e: React.MouseEvent) => {
    // Always allow user custom click too
    if (onClick) onClick();

    if (!href) return;

    // Hash scroll on same page
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToId(href.replace("#", ""));
      return;
    }

    // External links
    if (
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      window.location.href = href;
      return;
    }

    // Internal route
    e.preventDefault();

    // If user passes "/#contact" style
    const [path, hash] = href.split("#");
    if (path && path !== location.pathname) {
      navigate(path);
      // scroll after route paint
      requestAnimationFrame(() => {
        if (hash) scrollToId(hash);
        else window.scrollTo({ top: 0, behavior: "smooth" });
      });
      return;
    }

    // Same route but want top
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    scrollToId(hash);
  };

  return (
    <button type={type} onClick={handleClick} className={combinedClassName}>
      {children}
    </button>
  );
}
