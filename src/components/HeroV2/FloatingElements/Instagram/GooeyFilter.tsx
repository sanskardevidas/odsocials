export default function GooeyFilter() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute h-0 w-0"
    >
      <defs>
        <filter id="instagram-gooey-filter">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="14"
            result="blur"
          />

          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 24 -10
            "
            result="gooey"
          />

          <feComposite
            in="SourceGraphic"
            in2="gooey"
            operator="atop"
          />
        </filter>
      </defs>
    </svg>
  );
}