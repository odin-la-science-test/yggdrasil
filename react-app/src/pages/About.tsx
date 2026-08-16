import { Link } from "react-router-dom";
import { SubNav } from "../components/SubNav";
import { Footer } from "../components/Footer";

const BRANCHES = [
  { name: "OLS", accent: "oklch(0.62 0.11 230)", tag: "Science / Données", desc: "Munin Atlas & Hugin Lab : l'infrastructure numérique des laboratoires." },
  { name: "SAGA", accent: "oklch(0.62 0.11 75)", tag: "Musée / Patrimoine", desc: "La gestion des collections d'histoire naturelle." },
  { name: "NÜA", accent: "oklch(0.62 0.11 15)", tag: "Social / Communauté", desc: "Un réseau social nouvelle génération." },
  { name: "NÌDHÖGG", accent: "oklch(0.62 0.11 145)", tag: "Commerce / Vivant", desc: "Le commerce spécialisé des collections vivantes." },
  { name: "VERDANDI", accent: "oklch(0.62 0.11 320)", tag: "Mode / Vêtements", desc: "La gestion du vêtement, de la collection à la seconde main." },
  { name: "SLEIPNIR", accent: "oklch(0.62 0.11 190)", tag: "Automobile / Supercars", desc: "Le courtage de supercars et voitures de collection, de la provenance à la livraison." },
  { name: "SURTR", accent: "oklch(0.62 0.11 30)", tag: "Mode / Streetwear", desc: "Une marque de streetwear nouvelle génération, en séries courtes assumées." },
];

const PILLARS = [
  { n: "01", title: "Capital patient", text: "Un financement pensé sur dix ans, pas sur un cycle de levée." },
  { n: "02", title: "Socle technique", text: "Infrastructure, données, sécurité et outillage mutualisés entre les sept sociétés." },
  { n: "03", title: "Design & recherche", text: "Un studio interne et une cellule recherche qui accompagnent chaque produit." },
  { n: "04", title: "Indépendance", text: "Chaque société décide de sa feuille de route. Le groupe soutient, il ne dirige pas au quotidien." },
];

export function About() {
  return (
    <div style={{ background: "#0B0C0B", color: "#EDEDE8", overflowX: "hidden" }}>
      <SubNav active="about" />

      <header
        style={{
          padding: "clamp(70px,14vh,150px) clamp(20px,4vw,64px) clamp(50px,8vh,90px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
          gap: "clamp(28px,5vw,80px)",
          alignItems: "end",
          borderBottom: "1px solid rgba(237,237,232,0.12)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(237,237,232,0.45)" }}>
            À propos
          </span>
          <h1 style={{ margin: 0, fontFamily: "'Bricolage Grotesque',serif", fontWeight: 400, fontSize: "clamp(40px,6vw,96px)", lineHeight: 0.94, letterSpacing: "-0.04em" }}>
            Une holding
            <br />
            construite comme
            <br />
            <em style={{ fontStyle: "italic", color: "oklch(0.80 0.07 85)" }}>une architecture.</em>
          </h1>
        </div>
        <p style={{ margin: 0, maxWidth: "52ch", fontSize: 17, lineHeight: 1.75, color: "rgba(237,237,232,0.62)" }}>
          Yggdrasil Group développe et fédère des entreprises indépendantes là où la technologie, la science, la
          donnée et les communautés se rencontrent. Sept sociétés, un même tronc : capital, infrastructure, design
          et direction stratégique en commun.
        </p>
      </header>

      <section
        style={{
          padding: "clamp(60px,10vh,120px) clamp(20px,4vw,64px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
          gap: "clamp(32px,6vw,90px)",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 style={{ margin: 0, fontFamily: "'Bricolage Grotesque',serif", fontWeight: 400, fontSize: "clamp(28px,3.2vw,48px)", lineHeight: 1.02, letterSpacing: "-0.03em" }}>
            Ce que nous faisons
          </h2>
          <p style={{ margin: 0, maxWidth: "46ch", fontSize: 16, lineHeight: 1.75, color: "rgba(237,237,232,0.62)" }}>
            Nous ne rachetons pas des entreprises : nous les concevons, les finançons et les outillons. Chaque
            société garde son univers, son produit et sa culture — et s'appuie sur une infrastructure partagée qui
            lui évite de tout réinventer.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(237,237,232,0.14)", borderTop: "1px solid rgba(237,237,232,0.14)", borderBottom: "1px solid rgba(237,237,232,0.14)" }}>
          {PILLARS.map((p) => (
            <div key={p.n} style={{ background: "#0B0C0B", padding: "26px 0", display: "grid", gridTemplateColumns: "minmax(46px,0.4fr) minmax(0,1fr)", gap: "clamp(14px,3vw,40px)" }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.2em", color: "rgba(237,237,232,0.4)" }}>{p.n}</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: 21 }}>{p.title}</span>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "rgba(237,237,232,0.6)", maxWidth: "48ch" }}>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#EDEDE8", color: "#0B0C0B", padding: "clamp(60px,10vh,120px) clamp(20px,4vw,64px)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(30px,5vh,56px)" }}>
          <h2 style={{ margin: 0, fontFamily: "'Bricolage Grotesque',serif", fontWeight: 400, fontSize: "clamp(28px,3.2vw,48px)", letterSpacing: "-0.03em" }}>
            Les sept branches
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "clamp(14px,1.6vw,24px)" }}>
            {BRANCHES.map((b) => (
              <Link
                key={b.name}
                to="/#companies"
                className="ygg-branch-card"
                style={{ display: "flex", flexDirection: "column", gap: 12, padding: 26, border: "1px solid rgba(11,12,11,0.18)", borderRadius: 18, transition: "transform 500ms cubic-bezier(.2,.8,.2,1), border-color 300ms ease" }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: b.accent }} />
                <span style={{ fontFamily: "'Bricolage Grotesque',serif", fontSize: 26, letterSpacing: "-0.02em" }}>{b.name}</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(11,12,11,0.5)" }}>{b.tag}</span>
                <span style={{ fontSize: 14.5, lineHeight: 1.65, color: "rgba(11,12,11,0.66)" }}>{b.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="page" />
    </div>
  );
}
