import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import type { CSS } from "../types";
import logo from "../assets/images/logo.png";

type FooterVariant = "home" | "page" | "plain";

type FooterProps = {
  /**
   * home  — homepage footer (id="contact", larger logo, email pill)
   * page  — About/Vision footer (email pill, no border-top)
   * plain — Contact/Legal/Confidentialite footer (no pill, border-top)
   */
  variant: FooterVariant;
};

const linkColStyle: CSS = { display: "flex", flexDirection: "column", gap: 12 };
const linkColLabel: CSS = {
  fontFamily: "'JetBrains Mono',monospace",
  fontSize: 10,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(237,237,232,0.4)",
};
const linkStyle: CSS = { fontSize: 14.5, color: "rgba(237,237,232,0.8)" };

export function Footer({ variant }: FooterProps) {
  const isHome = variant === "home";
  const showPill = variant === "home" || variant === "page";

  const footerStyle: CSS = {
    background: "#0B0C0B",
    color: "#EDEDE8",
    padding: isHome
      ? "clamp(70px,10vh,120px) clamp(20px,4vw,64px) 40px"
      : variant === "page"
        ? "clamp(60px,9vh,110px) clamp(20px,4vw,64px) 36px"
        : "clamp(50px,8vh,100px) clamp(20px,4vw,64px) 36px",
    borderTop: variant === "plain" ? "1px solid rgba(237,237,232,0.12)" : undefined,
  };

  const innerStyle: CSS = {
    maxWidth: 1440,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: isHome ? "clamp(48px,7vh,86px)" : variant === "page" ? "clamp(36px,6vh,72px)" : "clamp(32px,5vh,64px)",
  };

  const gridStyle: CSS = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
    gap: isHome ? 32 : 28,
    paddingTop: isHome ? 34 : 30,
    borderTop: "1px solid rgba(237,237,232,0.14)",
  };

  const logoImg = isHome ? (
    <img src={logo} alt="Yggdrasil Group" style={{ height: 165, width: 183, aspectRatio: "1", display: "block" }} />
  ) : (
    <img
      src={logo}
      alt="Yggdrasil Group"
      style={{ height: "clamp(140px,16vw,200px)", width: "auto", display: "block" }}
    />
  );

  const tagline = (
    <span
      style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "rgba(237,237,232,0.5)",
        maxWidth: "20ch",
      }}
    >
      Entreprises indépendantes. Vision commune.
    </span>
  );

  return (
    <footer id={isHome ? "contact" : undefined} style={footerStyle}>
      <div style={innerStyle}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 32 }}>
          {isHome ? (
            <Reveal as="div" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {logoImg}
              {tagline}
            </Reveal>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
              {logoImg}
              {tagline}
            </div>
          )}
          {showPill && (
            <a
              href="mailto:hello@yggdrasil.group"
              className="ygg-pill-email"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "15px 24px",
                borderRadius: 999,
                border: "1px solid rgba(237,237,232,0.25)",
                fontSize: 14,
                transition: "border-color 300ms ease",
              }}
            >
              hello@yggdrasil.group
            </a>
          )}
        </div>

        <div style={gridStyle}>
          <div style={linkColStyle}>
            <span style={linkColLabel}>Entreprises</span>
            <Link to="/#companies" style={linkStyle}>OLS</Link>
            <Link to="/#companies" style={linkStyle}>SAGA</Link>
            <Link to="/#companies" style={linkStyle}>NÜA</Link>
            <Link to="/#companies" style={linkStyle}>NÌDHÖGG</Link>
            <Link to="/#companies" style={linkStyle}>Verdandi</Link>
            <Link to="/#companies" style={linkStyle}>Sleipnir</Link>
            <Link to="/#companies" style={linkStyle}>Surtr</Link>
          </div>
          <div style={linkColStyle}>
            <span style={linkColLabel}>Le groupe</span>
            <Link to="/a-propos" style={linkStyle}>À propos</Link>
            <Link to="/vision" style={linkStyle}>Vision</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </div>
          <div style={linkColStyle}>
            <span style={linkColLabel}>Mentions</span>
            <Link to="/mentions-legales" style={linkStyle}>Mentions légales</Link>
            <Link to="/confidentialite" style={linkStyle}>Confidentialité</Link>
          </div>
          <div style={linkColStyle}>
            <span style={linkColLabel}>Langue</span>
            <span style={linkStyle}>FR / EN</span>
          </div>
        </div>

        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 10.5,
            letterSpacing: "0.14em",
            color: "rgba(237,237,232,0.38)",
          }}
        >
          © 2026 Yggdrasil Group. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
}
