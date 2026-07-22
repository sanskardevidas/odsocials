import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";

import Home from "./pages/Home";
import SocialMedia from "./pages/SocialMedia";
import Website from "./pages/Website";
import AIAutomation from "./pages/AIAutomation";

export default function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/website" element={<Website />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
        </Route>
      </Routes>
    </SmoothScroll>
  );
}