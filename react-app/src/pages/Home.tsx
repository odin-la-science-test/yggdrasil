import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HomeNav } from "../components/HomeNav";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";
import type { CSS } from "../types";
import heroTree from "../assets/images/hero-tree.png";
import manifestoTree from "../assets/images/manifesto-tree.png";
import nidhogg from "../assets/images/nidhogg.png";
import logo from "../assets/images/logo.png";

type Branch = { name: string; tag: string; accent: string };

const BRANCHES: Branch[] = [
  { name: "OLS", tag: "Science / Données", accent: "oklch(0.74 0.11 230)" },
  { name: "SAGA", tag: "Musée / Patrimoine", accent: "oklch(0.74 0.11 75)" },
  { name: "NÜA", tag: "Social / Communauté", accent: "oklch(0.74 0.11 15)" },
  { name: "NÌDHÖGG", tag: "Commerce / Vivant", accent: "oklch(0.74 0.11 145)" },
  { name: "VERDANDI", tag: "Mode / Vêtements", accent: "oklch(0.74 0.11 320)" },
  { name: "SLEIPNIR", tag: "Automobile / Supercars", accent: "oklch(0.74 0.11 190)" },
  { name: "SURTR", tag: "Mode / Streetwear", accent: "oklch(0.74 0.11 30)" },
];

const MARQUEE_ITEMS = [
  ...BRANCHES,
  { name: "Munin Atlas", tag: "Données scientifiques", accent: "oklch(0.74 0.11 230)" },
  { name: "Hugin Lab", tag: "Bioinformatique", accent: "oklch(0.74 0.11 230)" },
];

function MarqueeGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }} aria-hidden={ariaHidden}>
      {MARQUEE_ITEMS.map((item, i) => (
        <span
          key={i}
          style={{ display: "flex", alignItems: "center", gap: 16, padding: "0 clamp(20px,2.4vw,40px)" }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: item.accent }} />
          <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(20px,2vw,30px)", letterSpacing: "-0.01em" }}>
            {item.name}
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(237,237,232,0.45)",
            }}
          >
            {item.tag}
          </span>
        </span>
      ))}
    </div>
  );
}

export function Home() {
  const heroImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const p = Math.min(1, Math.max(0, y / (window.innerHeight * 0.62)));
      const img = heroImgRef.current;
      if (img) img.style.transform = `scale(${1.04 + p * 0.1}) translateY(${-p * 24}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pillDark: CSS = {
    display: "inline-flex",
    alignItems: "center",
    gap: 14,
    padding: "16px 26px",
    borderRadius: 999,
    background: "#EDEDE8",
    color: "#0B0C0B",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.01em",
    transition: "transform 400ms cubic-bezier(.2,.8,.2,1), background 300ms ease",
  };
  const pillOutline: CSS = {
    display: "inline-flex",
    alignItems: "center",
    gap: 14,
    padding: "16px 26px",
    borderRadius: 999,
    border: "1px solid rgba(237,237,232,0.22)",
    color: "#EDEDE8",
    fontSize: 14,
    letterSpacing: "0.01em",
    transition: "border-color 300ms ease, transform 400ms cubic-bezier(.2,.8,.2,1)",
  };

  return (
    <div style={{ background: "#0B0C0B", color: "#EDEDE8", overflowX: "hidden", position: "relative" }}>
      <HomeNav />

      {/* Hero */}
      <section
        id="top"
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
          gap: "clamp(24px,4vw,72px)",
          alignItems: "end",
          padding: "clamp(120px,16vh,180px) clamp(20px,4vw,64px) clamp(40px,6vh,72px)",
        }}
      >
        <div style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,40px)" }}>
          <Reveal
            as="span"
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(237,237,232,0.45)",
            }}
          >
            Holding technologique — depuis 2026
          </Reveal>
          <Reveal
            as="h1"
            style={{
              margin: 0,
              fontFamily: "'Bricolage Grotesque',serif",
              fontWeight: 400,
              fontSize: "clamp(44px,6.4vw,104px)",
              lineHeight: 0.92,
              letterSpacing: "-0.035em",
              textWrap: "balance",
            }}
          >
            L'architecture
            <br />
            derrière une technologie
            <br />
            <em style={{ fontStyle: "italic", color: "oklch(0.78 0.10 175)" }}>indépendante.</em>
          </Reveal>
          <Reveal
            as="p"
            style={{
              margin: 0,
              maxWidth: "52ch",
              fontSize: "clamp(15px,1.15vw,18px)",
              lineHeight: 1.7,
              color: "rgba(237,237,232,0.62)",
              textWrap: "pretty",
            }}
          >
            Yggdrasil Group développe et fédère des entreprises indépendantes là où la technologie, la science, la
            donnée et les communautés se rencontrent — un même système racinaire, sept mondes distincts.
          </Reveal>
          <Reveal as="div" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
            <a href="#group" className="ygg-btn-light" style={pillDark}>
              Explorer le groupe <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12 }}>↓</span>
            </a>
            <a href="#companies" className="ygg-btn-outline-dark" style={pillOutline}>
              Découvrir nos entreprises
            </a>
          </Reveal>
          <Reveal
            as="div"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))",
              gap: 1,
              background: "rgba(237,237,232,0.14)",
              borderTop: "1px solid rgba(237,237,232,0.14)",
              borderBottom: "1px solid rgba(237,237,232,0.14)",
              marginTop: "clamp(8px,2vh,28px)",
            }}
          >
            {[
              { value: "07", label: "Entreprises", pad: "18px 4px 16px 0" },
              { value: "08", label: "Plateformes", pad: "18px 4px 16px 16px" },
              { value: "100%", label: "Indépendance", pad: "18px 4px 16px 16px" },
              { value: "∞", label: "Horizon", pad: "18px 4px 16px 16px" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "#0B0C0B", padding: stat.pad }}>
                <div style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: 26, letterSpacing: "-0.02em" }}>
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(237,237,232,0.4)",
                    marginTop: 6,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <div
          style={{
            position: "relative",
            alignSelf: "stretch",
            minHeight: "min(78svh,760px)",
            borderRadius: 28,
            overflow: "hidden",
            background:
              "radial-gradient(120% 90% at 60% 20%, rgba(237,237,232,0.09), rgba(237,237,232,0.02) 55%, rgba(237,237,232,0) 100%)",
            border: "1px solid rgba(237,237,232,0.12)",
          }}
        >
          <img
            ref={heroImgRef}
            src={heroTree}
            alt="Yggdrasil Group — un arbre, quatre branches : OLS, SAGA, NÜA, NÌDHÖGG"
            style={{
              position: "absolute",
              inset: 0,
              width: 637,
              height: 603,
              objectFit: "cover",
              objectPosition: "center 46%",
              display: "block",
              transform: "scale(1.04)",
              willChange: "transform",
              left: 15,
              top: 108,
              maskImage:
                "radial-gradient(120% 105% at 50% 46%, #000 52%, rgba(0,0,0,0.55) 78%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(120% 105% at 50% 46%, #000 52%, rgba(0,0,0,0.55) 78%, transparent 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(11,12,11,0.35) 0%, rgba(11,12,11,0) 26%, rgba(11,12,11,0) 62%, rgba(11,12,11,0.55) 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 22,
              left: 24,
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(237,237,232,0.6)",
            }}
          >
            Système racinaire / quatre branches
          </div>
        </div>
      </section>

      {/* Group */}
      <section id="group" style={{ background: "#EDEDE8", color: "#0B0C0B", padding: "clamp(80px,12vh,160px) clamp(20px,4vw,64px)" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
            gap: "clamp(32px,6vw,96px)",
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 28, position: "sticky", top: 120 }}>
            <Reveal
              as="span"
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(11,12,11,0.45)",
              }}
            >
              01 — Le groupe
            </Reveal>
            <Reveal
              as="h2"
              style={{
                margin: 0,
                fontFamily: "'Bricolage Grotesque',serif",
                fontWeight: 400,
                fontSize: "clamp(38px,4.6vw,74px)",
                lineHeight: 0.96,
                letterSpacing: "-0.035em",
              }}
            >
              Un groupe.
              <br />
              Sept mondes.
            </Reveal>
            <Reveal
              as="p"
              style={{ margin: 0, maxWidth: "44ch", fontSize: 16, lineHeight: 1.75, color: "rgba(11,12,11,0.62)", textWrap: "pretty" }}
            >
              Sept entreprises, sept publics, sept esthétiques — nées d'un même tronc de capital,
              d'infrastructure et de design partagés. L'indépendance est le produit ; l'architecture est ce que nous
              construisons.
            </Reveal>
            <Reveal as="div" style={{ display: "flex", alignItems: "center", gap: 22, paddingTop: 8 }}>
              <img
                src={logo}
                alt="Yggdrasil Group"
                style={{ width: "min(210px,34vw)", height: "auto", aspectRatio: "1", objectFit: "contain", flex: "none", display: "block", opacity: 0.92 }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  background: "rgba(11,12,11,0.16)",
                  borderTop: "1px solid rgba(11,12,11,0.16)",
                  borderBottom: "1px solid rgba(11,12,11,0.16)",
                  flex: 1,
                }}
              >
                {[
                  ["Fondé", "2026"],
                  ["Siège", "Paris, France"],
                  ["Sociétés", "07 — indépendantes"],
                ].map(([label, value]) => (
                  <div key={label} style={{ background: "#EDEDE8", padding: "11px 0", display: "flex", justifyContent: "space-between", gap: 14 }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: 10,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(11,12,11,0.45)",
                      }}
                    >
                      {label}
                    </span>
                    <span style={{ fontSize: 14 }}>{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal
              as={Link}
              to="/a-propos"
              className="ygg-btn-outline-light"
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: 12,
                padding: "14px 22px",
                borderRadius: 999,
                border: "1px solid rgba(11,12,11,0.25)",
                fontSize: 14,
                transition: "border-color 300ms ease, transform 400ms cubic-bezier(.2,.8,.2,1)",
              }}
            >
              En savoir plus sur le groupe <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12 }}>→</span>
            </Reveal>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              background: "rgba(11,12,11,0.14)",
              borderTop: "1px solid rgba(11,12,11,0.14)",
              borderBottom: "1px solid rgba(11,12,11,0.14)",
            }}
          >
            {[
              {
                name: "OLS",
                accent: "oklch(0.62 0.11 230)",
                tag: "Science / Laboratoire / Données",
                desc: (
                  <>
                    Odin La Science développe un environnement scientifique complet : <strong style={{ fontWeight: 600 }}>Munin Atlas</strong> pour
                    la gestion des données scientifiques, <strong style={{ fontWeight: 600 }}>Hugin Lab</strong> pour les outils bioinformatiques, les
                    laboratoires et les workflows.
                  </>
                ),
                quote: "Construire l'infrastructure numérique de la science moderne.",
              },
              {
                name: "SAGA",
                accent: "oklch(0.62 0.11 75)",
                tag: "Musée / Patrimoine / Collections",
                desc: "Une plateforme de gestion de données dédiée aux musées d'histoire naturelle — collections, spécimens, catalogues, métadonnées, archives et la recherche qui en découle.",
                quote: "Préserver le savoir. Structurer le patrimoine.",
              },
              {
                name: "NÜA",
                accent: "oklch(0.62 0.11 15)",
                tag: "Social / Communauté / Culture",
                desc: "Un réseau social nouvelle génération construit autour de la découverte, de l'expression et de communautés qui tiennent réellement ensemble.",
                quote: "Un nouvel espace pour les personnes, les idées et les communautés.",
              },
              {
                name: "NÌDHÖGG",
                accent: "oklch(0.62 0.11 145)",
                tag: "Commerce / Nature / Collections vivantes",
                desc: "Une plateforme commerciale spécialisée dans les cloportes et l'univers de leur élevage — vivant, substrats, terrariums, savoir-faire.",
                quote: "Faire émerger en ligne le monde caché des collections vivantes.",
              },
              {
                name: "VERDANDI",
                accent: "oklch(0.62 0.11 320)",
                tag: "Mode / Textile / Vêtements",
                desc: "Verdandi conçoit une plateforme de gestion pour l'industrie du vêtement — collections, tailles, stocks, traçabilité textile et cycle de vie des pièces, de la conception à la seconde main.",
                quote: "Habiller autrement. Vêtir avec intention.",
              },
              {
                name: "SLEIPNIR",
                accent: "oklch(0.62 0.11 190)",
                tag: "Automobile / Supercars / Collection",
                desc: "Sleipnir conçoit une plateforme de courtage automobile dédiée aux supercars et voitures de collection — provenance, certification, configuration et livraison, pour les collectionneurs les plus exigeants.",
                quote: "La vitesse comme héritage. La rareté comme standard.",
              },
              {
                name: "SURTR",
                accent: "oklch(0.62 0.11 30)",
                tag: "Mode / Streetwear nouvelle génération",
                desc: "Surtr conçoit une marque de streetwear nouvelle génération — coupes travaillées, broderies et matières en mouvement, en séries courtes assumées.",
                quote: "Habiller une génération qui ne demande pas la permission.",
              },
            ].map((row) => (
              <Reveal
                key={row.name}
                as="div"
                style={{
                  background: "#EDEDE8",
                  padding: "clamp(22px,2.6vw,34px) 0",
                  display: "grid",
                  gridTemplateColumns: "minmax(0,120px) minmax(0,1fr)",
                  gap: "clamp(16px,3vw,48px)",
                  alignItems: "start",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: 24, letterSpacing: "-0.01em" }}>{row.name}</span>
                  <span style={{ width: 26, height: 2, background: row.accent }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(11,12,11,0.45)",
                    }}
                  >
                    {row.tag}
                  </span>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "rgba(11,12,11,0.72)", maxWidth: "56ch" }}>{row.desc}</p>
                  <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontStyle: "italic", fontSize: 17 }}>{row.quote}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section id="companies" style={{ background: "#EDEDE8", color: "#0B0C0B", padding: "0 clamp(20px,4vw,64px) clamp(80px,12vh,150px)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Reveal
            as="div"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "end",
              justifyContent: "space-between",
              gap: 24,
              paddingBottom: "clamp(28px,4vh,52px)",
              borderBottom: "1px solid rgba(11,12,11,0.16)",
            }}
          >
            <h2 style={{ margin: 0, fontFamily: "'Bricolage Grotesque',serif", fontWeight: 400, fontSize: "clamp(32px,3.4vw,56px)", letterSpacing: "-0.03em", lineHeight: 1 }}>
              Les entreprises
            </h2>
            <span
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(11,12,11,0.45)",
                whiteSpace: "nowrap",
              }}
            >
              OLS → SAGA → NÜA → NÌDHÖGG → VERDANDI → SLEIPNIR → SURTR
            </span>
          </Reveal>

          <div data-cards-grid="" style={{ gap: "clamp(14px,1.6vw,24px)", paddingTop: "clamp(28px,4vh,52px)", alignItems: "stretch" } as CSS}>
            {/* OLS */}
            <TiltCard
              style={{
                minHeight: "clamp(380px,46vh,520px)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 32,
                padding: "clamp(24px,2.4vw,38px)",
                borderRadius: 22,
                background: "#131513",
                color: "#EDEDE8",
                overflow: "hidden",
                transition: "transform 620ms cubic-bezier(.2,.8,.2,1), box-shadow 620ms ease",
                ["--ygg-accent" as string]: "oklch(0.78 0.10 230)",
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(115deg, rgba(237,237,232,0.05) 0 1px, rgba(237,237,232,0) 1px 9px)", pointerEvents: "none" }} />
              <div
                data-card-orb=""
                style={{
                  position: "absolute",
                  right: "-12%",
                  top: "-18%",
                  width: "58%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, oklch(0.62 0.11 230 / 0.30), transparent 68%)",
                  filter: "blur(6px)",
                  transition: "transform 900ms cubic-bezier(.2,.8,.2,1)",
                }}
              />
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(34px,3.6vw,58px)", letterSpacing: "-0.03em", lineHeight: 1 }}>OLS</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.78 0.10 230)" }}>
                    Science / Laboratoire / Données
                  </span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "rgba(237,237,232,0.4)" }}>01/07</span>
              </div>
              <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 10 }}>
                <div style={{ border: "1px solid rgba(237,237,232,0.16)", borderRadius: 12, padding: "14px 16px" }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Munin Atlas</div>
                  <div style={{ fontSize: 12.5, color: "rgba(237,237,232,0.55)", marginTop: 4 }}>Gestion des données scientifiques</div>
                </div>
                <div style={{ border: "1px solid rgba(237,237,232,0.16)", borderRadius: 12, padding: "14px 16px" }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Hugin Lab</div>
                  <div style={{ fontSize: 12.5, color: "rgba(237,237,232,0.55)", marginTop: 4 }}>Bioinformatique &amp; workflows</div>
                </div>
              </div>
              <div style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: 18 }}>
                <p style={{ margin: 0, maxWidth: "38ch", fontSize: 15, lineHeight: 1.65, color: "rgba(237,237,232,0.66)" }}>
                  Odin La Science bâtit l'infrastructure numérique sur laquelle reposent les laboratoires modernes.
                </p>
                <a
                  href="#vision"
                  data-card-cta=""
                  className="ygg-card-cta"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 20px", borderRadius: 999, border: "1px solid rgba(237,237,232,0.28)", fontSize: 13, transition: "transform 520ms cubic-bezier(.2,.8,.2,1), border-color 300ms ease" }}
                >
                  Découvrir OLS <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>→</span>
                </a>
              </div>
            </TiltCard>

            {/* SAGA */}
            <TiltCard
              style={{
                minHeight: "clamp(380px,46vh,520px)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 28,
                padding: "clamp(24px,2.4vw,38px)",
                borderRadius: 22,
                background: "#16150F",
                color: "#EDEDE8",
                overflow: "hidden",
                transition: "transform 620ms cubic-bezier(.2,.8,.2,1), box-shadow 620ms ease",
                ["--ygg-accent" as string]: "oklch(0.80 0.10 75)",
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg, rgba(237,237,232,0.05) 0 1px, rgba(237,237,232,0) 1px 14px)", pointerEvents: "none" }} />
              <div
                data-card-orb=""
                style={{
                  position: "absolute",
                  left: "-14%",
                  bottom: "-20%",
                  width: "66%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, oklch(0.62 0.11 75 / 0.28), transparent 68%)",
                  filter: "blur(6px)",
                  transition: "transform 900ms cubic-bezier(.2,.8,.2,1)",
                }}
              />
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(32px,3.2vw,52px)", letterSpacing: "-0.03em", lineHeight: 1 }}>SAGA</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.80 0.10 75)" }}>
                    Musée / Patrimoine
                  </span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "rgba(237,237,232,0.4)" }}>02/07</span>
              </div>
              <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Collections", "Spécimens", "Métadonnées", "Archives"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 10.5,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "7px 12px",
                      borderRadius: 999,
                      border: "1px solid rgba(237,237,232,0.18)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18 }}>
                <p style={{ margin: 0, maxWidth: "34ch", fontSize: 15, lineHeight: 1.65, color: "rgba(237,237,232,0.66)" }}>
                  Structurer et préserver les données des institutions d'histoire naturelle.
                </p>
                <a
                  href="#vision"
                  data-card-cta=""
                  className="ygg-card-cta"
                  style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 10, padding: "12px 20px", borderRadius: 999, border: "1px solid rgba(237,237,232,0.28)", fontSize: 13, transition: "transform 520ms cubic-bezier(.2,.8,.2,1), border-color 300ms ease" }}
                >
                  Découvrir SAGA <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>→</span>
                </a>
              </div>
            </TiltCard>

            {/* NÜA */}
            <TiltCard
              style={{
                minHeight: "clamp(340px,40vh,460px)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 28,
                padding: "clamp(24px,2.4vw,38px)",
                borderRadius: 22,
                background: "#EDEDE8",
                color: "#0B0C0B",
                border: "1px solid rgba(11,12,11,0.16)",
                overflow: "hidden",
                transition: "transform 620ms cubic-bezier(.2,.8,.2,1), box-shadow 620ms ease",
              }}
            >
              <div
                data-card-orb=""
                style={{
                  position: "absolute",
                  right: "-18%",
                  top: "-24%",
                  width: "70%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, oklch(0.72 0.11 15 / 0.32), transparent 66%)",
                  filter: "blur(4px)",
                  transition: "transform 900ms cubic-bezier(.2,.8,.2,1)",
                }}
              />
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(32px,3.2vw,52px)", letterSpacing: "-0.03em", lineHeight: 1 }}>NÜA</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.55 0.12 15)" }}>
                    Social / Communauté
                  </span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "rgba(11,12,11,0.4)" }}>03/07</span>
              </div>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18 }}>
                <p style={{ margin: 0, maxWidth: "34ch", fontSize: 15, lineHeight: 1.65, color: "rgba(11,12,11,0.66)" }}>
                  Un nouvel espace pour les personnes, les idées et les communautés — la découverte et l'expression,
                  repensées.
                </p>
                <a
                  href="#vision"
                  data-card-cta=""
                  style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 10, padding: "12px 20px", borderRadius: 999, background: "#0B0C0B", color: "#EDEDE8", fontSize: 13, transition: "transform 520ms cubic-bezier(.2,.8,.2,1)" }}
                >
                  Découvrir NÜA <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>→</span>
                </a>
              </div>
            </TiltCard>

            {/* NÌDHÖGG */}
            <TiltCard
              style={{
                minHeight: "clamp(340px,40vh,460px)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 28,
                padding: "clamp(24px,2.4vw,38px)",
                borderRadius: 22,
                background: "#0E120E",
                color: "#EDEDE8",
                overflow: "hidden",
                transition: "transform 620ms cubic-bezier(.2,.8,.2,1), box-shadow 620ms ease",
                ["--ygg-accent" as string]: "oklch(0.78 0.10 145)",
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, rgba(237,237,232,0.045) 0 1px, rgba(237,237,232,0) 1px 7px)", pointerEvents: "none" }} />
              <div
                data-card-orb=""
                style={{
                  position: "absolute",
                  right: "-8%",
                  bottom: "-30%",
                  width: "52%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, oklch(0.62 0.11 145 / 0.32), transparent 68%)",
                  filter: "blur(6px)",
                  transition: "transform 900ms cubic-bezier(.2,.8,.2,1)",
                }}
              />
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(30px,3vw,50px)", letterSpacing: "-0.03em", lineHeight: 1 }}>NÌDHÖGG</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.78 0.10 145)" }}>
                    Commerce / Collections vivantes
                  </span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "rgba(237,237,232,0.4)" }}>04/07</span>
              </div>
              <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,0.9fr)", gap: 20, alignItems: "end" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <p style={{ margin: 0, maxWidth: "34ch", fontSize: 15, lineHeight: 1.65, color: "rgba(237,237,232,0.66)" }}>
                    Cloportes, substrats et élevage — le monde caché des collections vivantes, enfin en ligne.
                  </p>
                  <a
                    href="#vision"
                    data-card-cta=""
                    className="ygg-card-cta"
                    style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 10, padding: "12px 20px", borderRadius: 999, border: "1px solid rgba(237,237,232,0.28)", fontSize: 13, transition: "transform 520ms cubic-bezier(.2,.8,.2,1), border-color 300ms ease" }}
                  >
                    Découvrir NÌDHÖGG <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>→</span>
                  </a>
                </div>
                <div style={{ height: 150, borderRadius: 14, border: "1px solid rgba(237,237,232,0.16)", overflow: "hidden", position: "relative" }}>
                  <img
                    src={nidhogg}
                    alt="Cloporte sur un bois mort — collections vivantes NÌDHÖGG"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 42%", display: "block" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(11,12,11,0) 55%, rgba(11,12,11,0.6) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </TiltCard>

            {/* VERDENDIS */}
            <TiltCard
              style={{
                minHeight: "clamp(340px,40vh,460px)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 28,
                padding: "clamp(24px,2.4vw,38px)",
                borderRadius: 22,
                background: "#150E17",
                color: "#EDEDE8",
                overflow: "hidden",
                transition: "transform 620ms cubic-bezier(.2,.8,.2,1), box-shadow 620ms ease",
                ["--ygg-accent" as string]: "oklch(0.78 0.10 320)",
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(70deg, rgba(237,237,232,0.05) 0 1px, rgba(237,237,232,0) 1px 11px)", pointerEvents: "none" }} />
              <div
                data-card-orb=""
                style={{
                  position: "absolute",
                  left: "-10%",
                  top: "-22%",
                  width: "60%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, oklch(0.62 0.11 320 / 0.30), transparent 68%)",
                  filter: "blur(6px)",
                  transition: "transform 900ms cubic-bezier(.2,.8,.2,1)",
                }}
              />
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(32px,3.2vw,52px)", letterSpacing: "-0.03em", lineHeight: 1 }}>VERDANDI</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.78 0.10 320)" }}>
                    Mode / Textile / Vêtements
                  </span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "rgba(237,237,232,0.4)" }}>05/07</span>
              </div>
              <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Collections", "Tailles", "Stocks", "Traçabilité"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 10.5,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "7px 12px",
                      borderRadius: 999,
                      border: "1px solid rgba(237,237,232,0.18)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18 }}>
                <p style={{ margin: 0, maxWidth: "34ch", fontSize: 15, lineHeight: 1.65, color: "rgba(237,237,232,0.66)" }}>
                  Structurer la gestion du vêtement, de la conception à la seconde vie des pièces.
                </p>
                <a
                  href="#vision"
                  data-card-cta=""
                  className="ygg-card-cta"
                  style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 10, padding: "12px 20px", borderRadius: 999, border: "1px solid rgba(237,237,232,0.28)", fontSize: 13, transition: "transform 520ms cubic-bezier(.2,.8,.2,1), border-color 300ms ease" }}
                >
                  Découvrir Verdandi <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>→</span>
                </a>
              </div>
            </TiltCard>

            {/* SLEIPNIR */}
            <TiltCard
              style={{
                minHeight: "clamp(340px,40vh,460px)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 28,
                padding: "clamp(24px,2.4vw,38px)",
                borderRadius: 22,
                background: "#0E1416",
                color: "#EDEDE8",
                overflow: "hidden",
                transition: "transform 620ms cubic-bezier(.2,.8,.2,1), box-shadow 620ms ease",
                ["--ygg-accent" as string]: "oklch(0.78 0.10 190)",
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(25deg, rgba(237,237,232,0.05) 0 1px, rgba(237,237,232,0) 1px 10px)", pointerEvents: "none" }} />
              <div
                data-card-orb=""
                style={{
                  position: "absolute",
                  right: "-16%",
                  top: "-20%",
                  width: "62%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, oklch(0.62 0.11 190 / 0.30), transparent 68%)",
                  filter: "blur(6px)",
                  transition: "transform 900ms cubic-bezier(.2,.8,.2,1)",
                }}
              />
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(32px,3.2vw,52px)", letterSpacing: "-0.03em", lineHeight: 1 }}>SLEIPNIR</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.78 0.10 190)" }}>
                    Automobile / Supercars
                  </span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "rgba(237,237,232,0.4)" }}>06/07</span>
              </div>
              <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Configurateur", "Provenance", "Certification", "Livraison"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 10.5,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "7px 12px",
                      borderRadius: 999,
                      border: "1px solid rgba(237,237,232,0.18)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18 }}>
                <p style={{ margin: 0, maxWidth: "34ch", fontSize: 15, lineHeight: 1.65, color: "rgba(237,237,232,0.66)" }}>
                  Un courtage d'exception pour supercars et voitures de collection — provenance, certification et livraison.
                </p>
                <a
                  href="#vision"
                  data-card-cta=""
                  className="ygg-card-cta"
                  style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 10, padding: "12px 20px", borderRadius: 999, border: "1px solid rgba(237,237,232,0.28)", fontSize: 13, transition: "transform 520ms cubic-bezier(.2,.8,.2,1), border-color 300ms ease" }}
                >
                  Découvrir Sleipnir <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>→</span>
                </a>
              </div>
            </TiltCard>

            {/* SURTR */}
            <TiltCard
              style={{
                minHeight: "clamp(340px,40vh,460px)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 28,
                padding: "clamp(24px,2.4vw,38px)",
                borderRadius: 22,
                background: "#170D0B",
                color: "#EDEDE8",
                overflow: "hidden",
                transition: "transform 620ms cubic-bezier(.2,.8,.2,1), box-shadow 620ms ease",
                ["--ygg-accent" as string]: "oklch(0.78 0.10 30)",
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(160deg, rgba(237,237,232,0.05) 0 1px, rgba(237,237,232,0) 1px 9px)", pointerEvents: "none" }} />
              <div
                data-card-orb=""
                style={{
                  position: "absolute",
                  left: "-12%",
                  bottom: "-24%",
                  width: "60%",
                  aspectRatio: "1",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, oklch(0.62 0.11 30 / 0.32), transparent 68%)",
                  filter: "blur(6px)",
                  transition: "transform 900ms cubic-bezier(.2,.8,.2,1)",
                }}
              />
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(32px,3.2vw,52px)", letterSpacing: "-0.03em", lineHeight: 1 }}>SURTR</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.78 0.10 30)" }}>
                    Mode / Streetwear
                  </span>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "rgba(237,237,232,0.4)" }}>07/07</span>
              </div>
              <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Broderie", "Séries courtes", "Coupes", "Matières"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 10.5,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "7px 12px",
                      borderRadius: 999,
                      border: "1px solid rgba(237,237,232,0.18)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18 }}>
                <p style={{ margin: 0, maxWidth: "34ch", fontSize: 15, lineHeight: 1.65, color: "rgba(237,237,232,0.66)" }}>
                  Une marque de streetwear nouvelle génération, pensée en séries courtes assumées.
                </p>
                <a
                  href="#vision"
                  data-card-cta=""
                  className="ygg-card-cta"
                  style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 10, padding: "12px 20px", borderRadius: 999, border: "1px solid rgba(237,237,232,0.28)", fontSize: 13, transition: "transform 520ms cubic-bezier(.2,.8,.2,1), border-color 300ms ease" }}
                >
                  Découvrir Surtr <span style={{ fontFamily: "'JetBrains Mono',monospace" }}>→</span>
                </a>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section
        style={{
          background: "#0B0C0B",
          borderTop: "1px solid rgba(237,237,232,0.14)",
          borderBottom: "1px solid rgba(237,237,232,0.14)",
          padding: "clamp(18px,2.4vh,26px) 0",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", width: "max-content", alignItems: "center", animation: "ygg-marquee 42s linear infinite", whiteSpace: "nowrap" }}>
          <MarqueeGroup />
          <MarqueeGroup ariaHidden />
        </div>
      </section>

      {/* Ecosystem */}
      <section style={{ background: "#0B0C0B", color: "#EDEDE8", padding: "clamp(80px,12vh,150px) clamp(20px,4vw,64px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px,7vh,80px)" }}>
          <Reveal as="div" style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center", textAlign: "center" }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(237,237,232,0.42)" }}>
              02 — Le système
            </span>
            <h2 style={{ margin: 0, fontFamily: "'Bricolage Grotesque',serif", fontWeight: 400, fontSize: "clamp(32px,4vw,64px)", lineHeight: 1, letterSpacing: "-0.035em", maxWidth: "18ch" }}>
              Un écosystème conçu pour grandir en toute indépendance.
            </h2>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
            <Reveal as="div" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, maxWidth: 760 }}>
              {["Capital", "Technologie", "Infrastructure", "Design", "Recherche", "Opérations", "Direction stratégique"].map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "9px 15px",
                    borderRadius: 999,
                    border: "1px solid rgba(237,237,232,0.18)",
                    color: "rgba(237,237,232,0.72)",
                  }}
                >
                  {t}
                </span>
              ))}
            </Reveal>
            <Reveal as="div" style={{ width: 1, height: 56, background: "linear-gradient(180deg, rgba(237,237,232,0), rgba(237,237,232,0.4))" }} />
            <Reveal
              as="div"
              style={{ display: "flex", alignItems: "center", gap: 14, padding: "20px 34px", borderRadius: 999, border: "1px solid rgba(237,237,232,0.35)", background: "rgba(237,237,232,0.04)" }}
            >
              <span style={{ width: 9, height: 9, border: "1px solid #EDEDE8", transform: "rotate(45deg)", display: "block" }} />
              <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(16px,1.6vw,22px)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Yggdrasil Group
              </span>
            </Reveal>
            <Reveal as="div" style={{ width: 1, height: 40, background: "linear-gradient(180deg, rgba(237,237,232,0.4), rgba(237,237,232,0.18))" }} />
            <Reveal as="div" style={{ width: "min(100%,900px)", height: 1, background: "rgba(237,237,232,0.18)" }} />
            <div style={{ width: "min(100%,900px)", display: "grid", gridTemplateColumns: "repeat(6,minmax(0,1fr))" }}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: 1, height: 40, background: "rgba(237,237,232,0.18)" }} />
                </div>
              ))}
            </div>
            <div style={{ width: "min(100%,900px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "clamp(10px,1.4vw,18px)" }}>
              {[
                { name: "OLS", label: "Science", accent: "oklch(0.74 0.11 230)" },
                { name: "SAGA", label: "Patrimoine", accent: "oklch(0.74 0.11 75)" },
                { name: "NÜA", label: "Communauté", accent: "oklch(0.74 0.11 15)" },
                { name: "NÌDHÖGG", label: "Mondes vivants", accent: "oklch(0.74 0.11 145)" },
                { name: "VERDANDI", label: "Mode", accent: "oklch(0.74 0.11 320)" },
                { name: "SLEIPNIR", label: "Supercars", accent: "oklch(0.74 0.11 190)" },
                { name: "SURTR", label: "Streetwear", accent: "oklch(0.74 0.11 30)" },
              ].map((leaf) => (
                <Reveal
                  key={leaf.name}
                  as="div"
                  style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center", textAlign: "center", padding: "20px 12px", border: "1px solid rgba(237,237,232,0.14)", borderRadius: 14 }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: leaf.accent }} />
                  <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: 17 }}>{leaf.name}</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(237,237,232,0.45)" }}>
                    {leaf.label}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" style={{ background: "#0B0C0B", color: "#EDEDE8", padding: "clamp(70px,10vh,130px) clamp(20px,4vw,64px) clamp(80px,12vh,150px)", borderTop: "1px solid rgba(237,237,232,0.12)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(48px,8vh,110px)" }}>
          <Reveal
            as="h2"
            style={{ margin: 0, fontFamily: "'Bricolage Grotesque',serif", fontWeight: 400, fontSize: "clamp(44px,10.5vw,190px)", lineHeight: 0.86, letterSpacing: "-0.05em", textWrap: "balance" }}
          >
            Nous construisons
            <br />
            ce qui vient.
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid rgba(237,237,232,0.14)" }}>
            {[
              { n: "01", name: "Science", brand: "OLS", accent: "oklch(0.74 0.11 230)", text: "OLS développe les infrastructures numériques dont dépendent les laboratoires modernes — données, outils et workflows dans un environnement cohérent." },
              { n: "02", name: "Patrimoine", brand: "SAGA", accent: "oklch(0.74 0.11 75)", text: "SAGA structure et préserve les données des collections scientifiques et muséales, pour que la mémoire des institutions reste exploitable au siècle prochain." },
              { n: "03", name: "Communauté", brand: "NÜA", accent: "oklch(0.74 0.11 15)", text: "NÜA imagine de nouvelles façons de créer des communautés numériques — une architecture sociale pensée pour l'expression, pas pour l'extraction." },
              { n: "04", name: "Mondes vivants", brand: "NÌDHÖGG", accent: "oklch(0.74 0.11 145)", text: "NÌDHÖGG construit un commerce spécialisé autour d'un univers vivant et inattendu — élevage, écologie et celles et ceux qui le font vivre." },
              { n: "05", name: "Mode", brand: "VERDANDI", accent: "oklch(0.74 0.11 320)", text: "Verdandi structure la donnée du vêtement pour une mode plus lente et plus traçable — de la conception à la seconde vie des pièces." },
              { n: "06", name: "Automobile", brand: "SLEIPNIR", accent: "oklch(0.74 0.11 190)", text: "Sleipnir structure la donnée de la voiture de collection — provenance, entretien, rareté — pour un marché de l'exception enfin traçable." },
              { n: "07", name: "Streetwear", brand: "SURTR", accent: "oklch(0.74 0.11 30)", text: "Surtr habille une génération qui ne demande pas la permission — coupes travaillées, broderies et séries courtes assumées." },
            ].map((row) => (
              <Reveal
                key={row.n}
                as="div"
                style={{ display: "grid", gridTemplateColumns: "minmax(56px,0.5fr) repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "clamp(16px,3vw,56px)", padding: "clamp(26px,3.4vw,44px) 0", borderBottom: "1px solid rgba(237,237,232,0.14)", alignItems: "start" }}
              >
                <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(40px,5.4vw,92px)", lineHeight: 0.85, letterSpacing: "-0.04em", color: "rgba(237,237,232,0.22)" }}>
                  {row.n}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(22px,2.2vw,34px)", letterSpacing: "-0.02em" }}>{row.name}</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: row.accent }}>{row.brand}</span>
                </div>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: "rgba(237,237,232,0.62)", maxWidth: "46ch" }}>{row.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manifeste */}
      <section style={{ background: "#EDEDE8", color: "#0B0C0B", padding: "clamp(80px,14vh,170px) clamp(20px,4vw,64px)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "clamp(32px,6vw,96px)", alignItems: "center" }}>
          <Reveal
            as="div"
            style={{ position: "relative", borderRadius: 22, overflow: "hidden", minHeight: "clamp(320px,50vh,560px)", background: "#0B0C0B", border: "1px solid rgba(237,237,232,0.12)", display: "block" }}
          >
            <img
              src={manifestoTree}
              alt="Yggdrasil Group : un tronc commun et quatre branches — SAGA, NÍDHÖGG, NÜA, OLS"
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            />
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <Reveal
              as="span"
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(11,12,11,0.45)" }}
            >
              03 — Manifeste
            </Reveal>
            <Reveal
              as="h2"
              style={{ margin: 0, fontFamily: "'Bricolage Grotesque',serif", fontWeight: 400, fontSize: "clamp(30px,3.6vw,58px)", lineHeight: 1, letterSpacing: "-0.035em" }}
            >
              Nous ne construisons pas des entreprises.
              <br />
              Nous construisons des écosystèmes.
            </Reveal>
            <Reveal as="p" style={{ margin: 0, maxWidth: "50ch", fontSize: 16.5, lineHeight: 1.75, color: "rgba(11,12,11,0.66)", textWrap: "pretty" }}>
              Yggdrasil Group imagine, construit et accompagne des entreprises indépendantes capables d'évoluer dans
              leur propre univers tout en bénéficiant d'une infrastructure commune. Pas une simple maison mère — une
              architecture.
            </Reveal>
            <Reveal
              as="a"
              href="#contact"
              className="ygg-btn-solid"
              style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 14, padding: "16px 26px", borderRadius: 999, background: "#0B0C0B", color: "#EDEDE8", fontSize: 14, fontWeight: 500, transition: "transform 400ms cubic-bezier(.2,.8,.2,1)" }}
            >
              Parler au groupe <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12 }}>→</span>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer variant="home" />
    </div>
  );
}
