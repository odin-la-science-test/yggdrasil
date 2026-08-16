import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

type LegalSidebarProps = {
  eyebrow: string;
  title: ReactNode;
  updated: string;
  intro?: string;
  email: string;
  otherLink: { to: string; label: string };
};

export function LegalSidebar({ eyebrow, title, updated, intro, email, otherLink }: LegalSidebarProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 110 }}>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(237,237,232,0.45)" }}>
        {eyebrow}
      </span>
      <h1 style={{ margin: 0, fontFamily: "'Bricolage Grotesque',serif", fontWeight: 400, fontSize: "clamp(36px,4.6vw,74px)", lineHeight: 0.96, letterSpacing: "-0.04em" }}>
        {title}
      </h1>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.14em", color: "rgba(237,237,232,0.4)" }}>
        Dernière mise à jour : {updated}
      </span>
      {intro && (
        <p style={{ margin: 0, maxWidth: "34ch", fontSize: 15, lineHeight: 1.75, color: "rgba(237,237,232,0.55)" }}>{intro}</p>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 18, padding: 22, border: "1px solid rgba(237,237,232,0.14)", borderRadius: 18, background: "rgba(237,237,232,0.03)" }}>
        <img src={logo} alt="Yggdrasil Group" style={{ width: "min(170px,42vw)", height: "auto", aspectRatio: "1", objectFit: "contain", alignSelf: "flex-start", flex: "none", display: "block", opacity: 0.9 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(237,237,232,0.42)" }}>
            Une question ?
          </span>
          <a href={`mailto:${email}`} style={{ fontSize: 15, color: "oklch(0.80 0.07 85)" }}>{email}</a>
          <span style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(237,237,232,0.55)" }}>
            Yggdrasil Group SAS
            <br />
            12 rue des Racines
            <br />
            75011 Paris, France
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 16, borderTop: "1px solid rgba(237,237,232,0.14)" }}>
          <Link to={otherLink.to} style={{ fontSize: 14.5, color: "rgba(237,237,232,0.8)" }}>
            {otherLink.label} <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12 }}>→</span>
          </Link>
          <Link to="/contact" style={{ fontSize: 14.5, color: "rgba(237,237,232,0.8)" }}>
            Contact <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12 }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const legalPageWrapperStyle = {
  background: "#0B0C0B",
  color: "#EDEDE8",
  overflowX: "hidden",
  minHeight: "100svh",
  display: "flex",
  flexDirection: "column",
} as const;

export const legalSectionStyle = {
  flex: 1,
  padding: "clamp(60px,11vh,130px) clamp(20px,4vw,64px) clamp(60px,9vh,110px)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
  gap: "clamp(32px,6vw,90px)",
  alignItems: "start",
  maxWidth: 1440,
  margin: "0 auto",
  width: "100%",
  boxSizing: "border-box",
} as const;

export const legalArticleStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 0,
  maxWidth: "70ch",
  borderTop: "1px solid rgba(237,237,232,0.14)",
} as const;

export const legalEntryStyle = {
  padding: "30px 0",
  borderBottom: "1px solid rgba(237,237,232,0.14)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
} as const;

export const legalEntryLastStyle = {
  padding: "30px 0",
  display: "flex",
  flexDirection: "column",
  gap: 12,
} as const;

export const legalHeadingStyle = {
  fontFamily: "'JetBrains Mono',monospace",
  fontSize: 10,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "oklch(0.80 0.07 85)",
} as const;

export const legalParaStyle = {
  margin: 0,
  fontSize: 16,
  lineHeight: 1.8,
  color: "rgba(237,237,232,0.68)",
} as const;

export const legalLinkStyle = { color: "oklch(0.80 0.07 85)" } as const;
