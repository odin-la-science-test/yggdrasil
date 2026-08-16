import { Link } from "react-router-dom";
import { SubNav } from "../components/SubNav";
import { Footer } from "../components/Footer";
import {
  LegalSidebar,
  legalPageWrapperStyle,
  legalSectionStyle,
  legalArticleStyle,
  legalEntryStyle,
  legalEntryLastStyle,
  legalHeadingStyle,
  legalParaStyle,
  legalLinkStyle,
} from "../components/LegalSidebar";

export function Privacy() {
  return (
    <div style={legalPageWrapperStyle}>
      <SubNav />

      <section style={legalSectionStyle}>
        <LegalSidebar
          eyebrow="Données"
          title={<>Politique de<br />confidentialité</>}
          updated="14 août 2026"
          intro="Nous collectons le strict nécessaire, pour une durée limitée, et jamais à des fins publicitaires."
          email="legal@yggdrasil.group"
          otherLink={{ to: "/mentions-legales", label: "Mentions légales" }}
        />

        <div style={legalArticleStyle}>
          <div style={legalEntryStyle}>
            <span style={legalHeadingStyle}>01 — Responsable de traitement</span>
            <p style={legalParaStyle}>
              Yggdrasil Group SAS, 12 rue des Racines, 75011 Paris, est responsable des traitements réalisés via ce
              site. Contact : <a href="mailto:privacy@yggdrasil.group" style={legalLinkStyle}>privacy@yggdrasil.group</a>.
            </p>
          </div>
          <div style={legalEntryStyle}>
            <span style={legalHeadingStyle}>02 — Données collectées &amp; finalités</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(237,237,232,0.14)", border: "1px solid rgba(237,237,232,0.14)", borderRadius: 14, overflow: "hidden" }}>
              {[
                { title: "Formulaire de contact", text: "Nom, e-mail, organisation, message — pour répondre à votre demande (intérêt légitime)." },
                { title: "Mesure d'audience", text: "Statistiques agrégées et anonymisées, sans traceur publicitaire." },
                { title: "Journaux techniques", text: "Adresse IP tronquée et données de connexion, pour la sécurité du service." },
              ].map((row) => (
                <div key={row.title} style={{ background: "#0B0C0B", padding: "16px 18px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{row.title}</span>
                  <span style={{ fontSize: 14.5, color: "rgba(237,237,232,0.6)" }}>{row.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={legalEntryStyle}>
            <span style={legalHeadingStyle}>03 — Durées de conservation</span>
            <p style={legalParaStyle}>
              Messages de contact : 24 mois après le dernier échange. Statistiques d'audience : 13 mois. Journaux
              techniques : 12 mois. Au-delà, les données sont supprimées ou anonymisées.
            </p>
          </div>
          <div style={legalEntryStyle}>
            <span style={legalHeadingStyle}>04 — Hébergement &amp; destinataires</span>
            <p style={legalParaStyle}>
              Les données sont hébergées dans l'Union européenne. Elles sont accessibles aux seules équipes du
              groupe concernées et à nos sous-traitants techniques, liés par contrat et soumis aux mêmes exigences.
              Aucune donnée n'est vendue ni transférée hors UE sans garanties appropriées.
            </p>
          </div>
          <div style={legalEntryStyle}>
            <span style={legalHeadingStyle}>05 — Cookies</span>
            <p style={legalParaStyle}>
              Ce site n'utilise que des cookies strictement nécessaires à son fonctionnement et une mesure d'audience
              exemptée de consentement. Aucun cookie publicitaire ni traceur tiers n'est déposé.
            </p>
          </div>
          <div style={legalEntryStyle}>
            <span style={legalHeadingStyle}>06 — Vos droits</span>
            <p style={legalParaStyle}>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation,
              d'opposition et de portabilité. Exercez-les à{" "}
              <a href="mailto:privacy@yggdrasil.group" style={legalLinkStyle}>privacy@yggdrasil.group</a> ; une
              réponse vous est apportée sous un mois. Vous pouvez également introduire une réclamation auprès de la
              CNIL.
            </p>
          </div>
          <div style={legalEntryLastStyle}>
            <span style={legalHeadingStyle}>07 — Évolutions</span>
            <p style={legalParaStyle}>
              Cette politique peut être mise à jour pour refléter des évolutions légales ou techniques. La date de
              dernière mise à jour figure en tête de page. Voir aussi nos{" "}
              <Link to="/mentions-legales" style={legalLinkStyle}>mentions légales</Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer variant="plain" />
    </div>
  );
}
