import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import CursorGlow from "./CursorGlow";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-[#07070B] text-white overflow-x-hidden pointer-events-auto">
      {/* Never block clicks */}
      <CursorGlow />

      {/* Decorative background (click-through) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.10),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070B] via-[#0B0B12] to-[#07070B] opacity-90" />
      </div>

      {/* Nav must stay clickable */}
      <div className="relative z-50 pointer-events-auto">
        <Navigation />
      </div>

      {/* Content must stay clickable */}
      <main className="relative z-10 pointer-events-auto">
        <Outlet />
      </main>
    </div>
  );
}
