import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SwipeInSectionProps {
  children: ReactNode;
  className?: string;
}

export default function SwipeInSection({ children, className = "" }: SwipeInSectionProps) {
  return (
    <section className={`relative overflow-hidden flex items-center justify-center ${className}`}>
      <motion.div
        initial={{ x: "-120%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-4 sm:inset-10 md:inset-16 bg-black rounded-[3rem] sm:rounded-[4rem]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}