import type { ReactNode } from "react";

interface SwipeInSectionProps {
  children: ReactNode;
  className?: string;
}

export default function SwipeInSection({
  children,
  className = "",
}: SwipeInSectionProps) {
  return (
    <section className={className}>
      <div
        className="
          relative
          min-h-[60vh]
          overflow-hidden
          rounded-[48px]
          bg-black

          flex
          items-center
          justify-center

          px-6
          py-24

          sm:px-10
          sm:py-32

          lg:px-16
          lg:py-40
        "
      >
        {children}
      </div>
    </section>
  );
}