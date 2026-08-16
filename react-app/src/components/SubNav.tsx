import { Link } from "react-router-dom";
import type { CSS } from "../types";
import logo from "../assets/images/logo.png";

const ACCENT = "oklch(0.80 0.07 85)";

type SubNavProps = {
  active?: "about" | "vision" | "contact";
};

/** Sticky, always-opaque nav used on every page except the homepage. */
export function SubNav({ active }: SubNavProps) {
  const navStyle: CSS = {
    position: "sticky",
    top: 0,
    zIndex: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 20,
    padding: "16px clamp(20px,4vw,64px)",
    background: "rgba(11,12,11,0.82)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(237,237,232,0.12)",
  };

  const linkStyle = (key: SubNavProps["active"]): CSS => ({
    opacity: active === key ? 1 : 0.7,
    color: active === key ? ACCENT : "inherit",
  });

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
            fontSize: 14,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
          }}
        >
          Yggdrasil Group
        </span>
      </Link>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "clamp(12px,2.4vw,36px)",
          fontSize: 13,
          letterSpacing: "0.06em",
        }}
      >
        <Link to="/#group" style={{ opacity: 0.7 }}>
          Le groupe
        </Link>
        <Link to="/a-propos" style={linkStyle("about")}>
          À propos
        </Link>
        <Link to="/vision" style={linkStyle("vision")}>
          Vision
        </Link>
        <Link to="/contact" style={linkStyle("contact")}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
