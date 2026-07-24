import { useEffect } from "react";
import Lenis from "lenis";

interface Props {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    // Recalculate scroll height once everything (fonts, images) has fully loaded
    const handleLoad = () => lenis.resize();
    window.addEventListener("load", handleLoad);

    // Also recalculate any time the page's actual height changes
    // (e.g. late-rendering sections, images loading in)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("load", handleLoad);
      resizeObserver.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}