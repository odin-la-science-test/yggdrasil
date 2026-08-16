import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Vision } from "./pages/Vision";
import { Contact } from "./pages/Contact";
import { Legal } from "./pages/Legal";
import { Privacy } from "./pages/Privacy";

/** Scrolls to the top on route change, or to the matching #hash anchor. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Legal />} />
        <Route path="/confidentialite" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}
