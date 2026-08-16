import { useState } from "react";
import type { FormEvent } from "react";
import { SubNav } from "../components/SubNav";
import { Footer } from "../components/Footer";
import type { CSS } from "../types";

const DEFAULT_STATUS = "Vos informations ne sont utilisées que pour répondre à votre demande.";

const fieldStyle: CSS = {
  background: "transparent",
  border: "1px solid rgba(237,237,232,0.2)",
  borderRadius: 12,
  padding: "14px 16px",
  color: "#EDEDE8",
  fontSize: 15,
  outline: "none",
  transition: "border-color 250ms ease",
};

const fieldLabel: CSS = {
  fontFamily: "'JetBrains Mono',monospace",
  fontSize: 10,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(237,237,232,0.45)",
};

export function Contact() {
  const [status, setStatus] = useState(DEFAULT_STATUS);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Merci — votre message est prêt à partir. Le formulaire sera connecté à la boîte du groupe à la mise en ligne.");
  };

  return (
    <div style={{ background: "#0B0C0B", color: "#EDEDE8", overflowX: "hidden", minHeight: "100svh", display: "flex", flexDirection: "column" }}>
      <SubNav active="contact" />

      <section
        style={{
          flex: 1,
          padding: "clamp(60px,11vh,130px) clamp(20px,4vw,64px) clamp(60px,9vh,110px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))",
          gap: "clamp(32px,6vw,90px)",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(237,237,232,0.45)" }}>
              Contact
            </span>
            <h1 style={{ margin: 0, fontFamily: "'Bricolage Grotesque',serif", fontWeight: 400, fontSize: "clamp(38px,5.4vw,86px)", lineHeight: 0.94, letterSpacing: "-0.04em" }}>
              Parlons de
              <br />
              ce que vous
              <br />
              <em style={{ fontStyle: "italic", color: "oklch(0.80 0.07 85)" }}>construisez.</em>
            </h1>
            <p style={{ margin: 0, maxWidth: "44ch", fontSize: 16.5, lineHeight: 1.75, color: "rgba(237,237,232,0.62)" }}>
              Projet de plateforme scientifique, collaboration institutionnelle, presse ou candidature spontanée :
              écrivez-nous, une personne du groupe vous répond sous 48 h ouvrées.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(237,237,232,0.14)", borderTop: "1px solid rgba(237,237,232,0.14)", borderBottom: "1px solid rgba(237,237,232,0.14)" }}>
            {[
              { label: "Général", value: "hello@yggdrasil.group" },
              { label: "Presse", value: "press@yggdrasil.group" },
              { label: "Recrutement", value: "jobs@yggdrasil.group" },
            ].map((row) => (
              <div key={row.label} style={{ background: "#0B0C0B", padding: "20px 0", display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "space-between" }}>
                <span style={fieldLabel}>{row.label}</span>
                <a href={`mailto:${row.value}`} style={{ fontSize: 15 }}>{row.value}</a>
              </div>
            ))}
            <div style={{ background: "#0B0C0B", padding: "20px 0", display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "space-between" }}>
              <span style={fieldLabel}>Siège</span>
              <span style={{ fontSize: 15, color: "rgba(237,237,232,0.8)", textAlign: "right" }}>
                12 rue des Racines
                <br />
                75011 Paris, France
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 18, padding: "clamp(24px,2.6vw,38px)", border: "1px solid rgba(237,237,232,0.16)", borderRadius: 22, background: "rgba(237,237,232,0.03)" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={fieldLabel}>Nom</span>
              <input type="text" name="nom" required placeholder="Ada Lovelace" className="ygg-field" style={fieldStyle} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={fieldLabel}>E-mail</span>
              <input type="email" name="email" required placeholder="vous@institution.fr" className="ygg-field" style={fieldStyle} />
            </label>
          </div>
          <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={fieldLabel}>Organisation</span>
            <input type="text" name="organisation" placeholder="Laboratoire, musée, entreprise…" className="ygg-field" style={fieldStyle} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={fieldLabel}>Sujet</span>
            <select name="sujet" className="ygg-field" style={{ ...fieldStyle, background: "#0B0C0B" }}>
              <option>Le groupe</option>
              <option>OLS — science &amp; données</option>
              <option>SAGA — musées &amp; collections</option>
              <option>NÜA — communauté</option>
              <option>NÌDHÖGG — collections vivantes</option>
              <option>Verdandi — mode &amp; vêtements</option>
              <option>Sleipnir — supercars &amp; collection</option>
              <option>Surtr — streetwear</option>
              <option>Presse</option>
              <option>Candidature</option>
            </select>
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={fieldLabel}>Message</span>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Dites-nous en quelques lignes ce que vous avez en tête."
              className="ygg-field"
              style={{ ...fieldStyle, lineHeight: 1.6, resize: "vertical" }}
            />
          </label>
          <button
            type="submit"
            className="ygg-btn-light"
            style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 26px", border: "none", borderRadius: 999, background: "#EDEDE8", color: "#0B0C0B", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "transform 400ms cubic-bezier(.2,.8,.2,1)" }}
          >
            Envoyer le message <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12 }}>→</span>
          </button>
          <span style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(237,237,232,0.45)" }}>{status}</span>
        </form>
      </section>

      <Footer variant="plain" />
    </div>
  );
}
