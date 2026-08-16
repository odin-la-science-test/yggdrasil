import { Link } from "react-router-dom";
import { SubNav } from "../components/SubNav";
import { Footer } from "../components/Footer";

const CHAPTERS = [
  { n: "01", name: "Science", brand: "OLS", accent: "oklch(0.74 0.11 230)", text: "Rendre les données scientifiques exploitables, traçables et durables — de la paillasse à la publication." },
  { n: "02", name: "Patrimoine", brand: "SAGA", accent: "oklch(0.74 0.11 75)", text: "Structurer la mémoire des institutions pour qu'elle reste lisible au siècle prochain." },
  { n: "03", name: "Communauté", brand: "NÜA", accent: "oklch(0.74 0.11 15)", text: "Une architecture sociale pensée pour l'expression, pas pour l'extraction." },
  { n: "04", name: "Mondes vivants", brand: "NÌDHÖGG", accent: "oklch(0.74 0.11 145)", text: "Un commerce spécialisé autour d'un univers vivant : élevage, écologie et celles et ceux qui le font vivre." },
  { n: "05", name: "Mode", brand: "VERDANDI", accent: "oklch(0.74 0.11 320)", text: "Structurer le vêtement : traçabilité, durabilité, seconde vie." },
  { n: "06", name: "Automobile", brand: "SLEIPNIR", accent: "oklch(0.74 0.11 190)", text: "Tracer la provenance et la rareté des voitures d'exception." },
  { n: "07", name: "Streetwear", brand: "SURTR", accent: "oklch(0.74 0.11 30)", text: "Habiller une génération qui ne demande pas la permission, en séries courtes assumées." },
];

const COMMITMENTS = [
  { title: "Souveraineté des données", text: "Hébergement européen, formats ouverts, réversibilité garantie." },
  { title: "Durée avant vitesse", text: "Des produits maintenus dix ans plutôt que lancés en six mois." },
  { title: "Science ouverte", text: "Standards partagés et interopérabilité avec les institutions publiques." },
  { title: "Autonomie des équipes", text: "Chaque société pilote son produit, son rythme et sa culture." },
];

export function Vision() {
  return (
    <div style={{ background: "#0B0C0B", color: "#EDEDE8", overflowX: "hidden" }}>
      <SubNav active="vision" />

      <header style={{ padding: "clamp(70px,14vh,150px) clamp(20px,4vw,64px) clamp(50px,8vh,90px)", borderBottom: "1px solid rgba(237,237,232,0.12)" }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(237,237,232,0.45)" }}>
          Vision
        </span>
        <h1 style={{ margin: "22px 0 0", fontFamily: "'Bricolage Grotesque',serif", fontWeight: 400, fontSize: "clamp(42px,9.5vw,170px)", lineHeight: 0.88, letterSpacing: "-0.05em" }}>
          Nous construisons
          <br />
          ce qui vient.
        </h1>
      </header>

      <section
        style={{
          padding: "clamp(60px,10vh,120px) clamp(20px,4vw,64px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))",
          gap: "clamp(32px,6vw,90px)",
          alignItems: "start",
        }}
      >
        <h2 style={{ margin: 0, fontFamily: "'Bricolage Grotesque',serif", fontWeight: 400, fontSize: "clamp(28px,3.4vw,52px)", lineHeight: 1.02, letterSpacing: "-0.03em" }}>
          Nous ne construisons pas des entreprises. Nous construisons des écosystèmes.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ margin: 0, maxWidth: "52ch", fontSize: 16.5, lineHeight: 1.8, color: "rgba(237,237,232,0.64)" }}>
            Yggdrasil Group imagine, construit et accompagne des entreprises indépendantes capables d'évoluer dans
            leur propre univers tout en bénéficiant d'une infrastructure commune. Pas une simple maison mère — une
            architecture.
          </p>
          <p style={{ margin: 0, maxWidth: "52ch", fontSize: 16.5, lineHeight: 1.8, color: "rgba(237,237,232,0.64)" }}>
            Nos horizons se comptent en décennies. Un laboratoire, un musée, une communauté ou un élevage ne se
            pilotent pas au trimestre : ils demandent des outils qui durent, des données qui survivent aux
            migrations et des équipes qui restent.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,4vw,64px) clamp(70px,11vh,140px)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", flexDirection: "column", borderTop: "1px solid rgba(237,237,232,0.14)" }}>
          {CHAPTERS.map((c) => (
            <div
              key={c.n}
              style={{ display: "grid", gridTemplateColumns: "minmax(56px,0.5fr) repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "clamp(16px,3vw,56px)", padding: "clamp(26px,3.4vw,44px) 0", borderBottom: "1px solid rgba(237,237,232,0.14)", alignItems: "start" }}
            >
              <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(40px,5.4vw,92px)", lineHeight: 0.85, letterSpacing: "-0.04em", color: "rgba(237,237,232,0.22)" }}>
                {c.n}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: "clamp(22px,2.2vw,34px)", letterSpacing: "-0.02em" }}>{c.name}</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: c.accent }}>{c.brand}</span>
              </div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: "rgba(237,237,232,0.62)", maxWidth: "46ch" }}>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#EDEDE8", color: "#0B0C0B", padding: "clamp(60px,10vh,120px) clamp(20px,4vw,64px)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(30px,5vh,56px)" }}>
          <h2 style={{ margin: 0, fontFamily: "'Bricolage Grotesque',serif", fontWeight: 400, fontSize: "clamp(28px,3.2vw,48px)", letterSpacing: "-0.03em" }}>
            Nos engagements
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "clamp(14px,1.6vw,24px)" }}>
            {COMMITMENTS.map((c) => (
              <div key={c.title} style={{ display: "flex", flexDirection: "column", gap: 10, padding: 26, border: "1px solid rgba(11,12,11,0.18)", borderRadius: 18 }}>
                <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: 21 }}>{c.title}</span>
                <span style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(11,12,11,0.66)" }}>{c.text}</span>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="ygg-btn-solid"
            style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 14, padding: "16px 26px", borderRadius: 999, background: "#0B0C0B", color: "#EDEDE8", fontSize: 14, fontWeight: 500, transition: "transform 400ms cubic-bezier(.2,.8,.2,1)" }}
          >
            Parler au groupe <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12 }}>→</span>
          </Link>
        </div>
      </section>

      <Footer variant="page" />
    </div>
  );
}
