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

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}