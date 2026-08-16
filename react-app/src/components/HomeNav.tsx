import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import type { CSS } from "../types";
import logo from "../assets/images/logo.png";

/** Fixed, transparent-to-opaque nav used only on the homepage. */
export function HomeNav() {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const nav = navRef.current;
      if (!nav) return;
      const on = y > 40;
      nav.style.background = on ? "rgba(11,12,11,0.72)" : "rgba(11,12,11,0)";
      nav.style.backdropFilter = on ? "blur(16px)" : "blur(0px)";
      nav.style.setProperty("-webkit-backdrop-filter", on ? "blur(16px)" : "blur(0px)");
      nav.style.borderBottomColor = on ? "rgba(237,237,232,0.12)" : "rgba(237,237,232,0)";
      nav.style.padding = on ? "14px clamp(20px,4vw,64px)" : "22px clamp(20px,4vw,64px)";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: CSS = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    padding: "22px clamp(20px,4vw,64px)",
    background: "rgba(11,12,11,0)",
    backdropFilter: "blur(0px)",
    borderBottom: "1px solid rgba(237,237,232,0)",
    transition:
      "background 420ms ease, backdrop-filter 420ms ease, border-color 420ms ease, padding 420ms ease",
  };

  return (
    <nav ref={navRef} style={navStyle}>
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span
          style={{
            width: 64,
            height: 64,
            overflow: "hidden",
            display: "block",
            flex: "none",
            position: "relative",
          }}
        >
          <img
            src={logo}
            alt="Yggdrasil Group"
            style={{
              position: "absolute",
              width: 122,
              height: 122,
              left: -29,
              top: -11,
              display: "block",
            }}
          />
        </span>
        <span
          style={{
            fontFamily: "'Bricolage Grotesque',serif",
            fontWeight: 500,
            fontSize: 15,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Yggdrasil Group
        </span>
      </a>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "clamp(12px,2.6vw,40px)",
          fontSize: 13,
          letterSpacing: "0.08em",
          whiteSpace: "nowrap",
        }}
      >
        <a href="#group" style={{ opacity: 0.7 }}>
          Le groupe
        </a>
        <a href="#companies" style={{ opacity: 0.7 }}>
          Entreprises
        </a>
        <Link to="/a-propos" style={{ opacity: 0.7 }}>
          À propos
        </Link>
        <Link to="/vision" style={{ opacity: 0.7 }}>
          Vision
        </Link>
        <Link to="/contact" style={{ opacity: 0.7 }}>
          Contact
        </Link>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            opacity: 0.5,
            paddingLeft: 8,
            borderLeft: "1px solid rgba(237,237,232,0.18)",
          }}
        >
          <span style={{ opacity: 1 }}>FR</span>
          <span>/</span>
          <span>EN</span>
        </span>
      </div>
    </nav>
  );
}
