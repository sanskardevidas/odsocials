import { Outlet } from "react-router-dom";
import CursorGlow from "./CursorGlow";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden pointer-events-auto">
      {/* Never block clicks */}
      <CursorGlow />

      {/* REMOVE OLD BACKGROUND */}
      {/* REMOVE OLD NAVIGATION */}

      <main className="relative pointer-events-auto">
        <Outlet />
      </main>
    </div>
  );
}