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

export function Legal() {
  return (
    <div style={legalPageWrapperStyle}>
      <SubNav />

      <section style={legalSectionStyle}>
        <LegalSidebar
          eyebrow="Légal"
          title={<>Mentions<br />légales</>}
          updated="14 août 2026"
          email="legal@yggdrasil.group"
          otherLink={{ to: "/confidentialite", label: "Politique de confidentialité" }}
        />

        <div style={legalArticleStyle}>
          <div style={legalEntryStyle}>
            <span style={legalHeadingStyle}>01 — Éditeur du site</span>
            <p style={legalParaStyle}>
              Le présent site est édité par <strong style={{ fontWeight: 600, color: "#EDEDE8" }}>Yggdrasil Group SAS</strong>,
              société par actions simplifiée au capital de 100 000 €, immatriculée au RCS de Paris sous le numéro
              000 000 000, dont le siège social est situé 12 rue des Racines, 75011 Paris, France.
            </p>
            <p style={legalParaStyle}>
              Numéro de TVA intracommunautaire : FR00000000000. Directeur de la publication : le représentant légal
              de Yggdrasil Group SAS. Contact : <a href="mailto:legal@yggdrasil.group" style={legalLinkStyle}>legal@yggdrasil.group</a>.
            </p>
          </div>
          <div style={legalEntryStyle}>
            <span style={legalHeadingStyle}>02 — Hébergement</span>
            <p style={legalParaStyle}>
              Le site est hébergé au sein de l'Union européenne. Les coordonnées complètes de l'hébergeur (raison
              sociale, adresse, téléphone) sont communiquées sur simple demande à{" "}
              <a href="mailto:legal@yggdrasil.group" style={legalLinkStyle}>legal@yggdrasil.group</a>.
            </p>
          </div>
          <div style={legalEntryStyle}>
            <span style={legalHeadingStyle}>03 — Propriété intellectuelle</span>
            <p style={legalParaStyle}>
              L'ensemble des éléments du site — structure, textes, identité visuelle, logotype Yggdrasil Group,
              marques OLS, SAGA, NÜA, NÌDHÖGG, Verdandi, Sleipnir et Surtr, illustrations et code — est protégé par le droit
              de la propriété intellectuelle et demeure la propriété exclusive de Yggdrasil Group SAS ou de ses
              partenaires.
            </p>
            <p style={legalParaStyle}>
              Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite
              préalable, est interdite.
            </p>
          </div>
          <div style={legalEntryStyle}>
            <span style={legalHeadingStyle}>04 — Responsabilité</span>
            <p style={legalParaStyle}>
              Les informations publiées sont fournies à titre indicatif et peuvent évoluer sans préavis. Yggdrasil
              Group met tout en œuvre pour assurer leur exactitude mais ne saurait être tenu responsable des
              erreurs, omissions ou indisponibilités temporaires du service.
            </p>
            <p style={legalParaStyle}>
              Les liens vers des sites tiers sont proposés pour information : leur contenu n'engage que leurs
              éditeurs respectifs.
            </p>
          </div>
          <div style={legalEntryStyle}>
            <span style={legalHeadingStyle}>05 — Données personnelles</span>
            <p style={legalParaStyle}>
              Le traitement des données personnelles est détaillé dans notre{" "}
              <Link to="/confidentialite" style={legalLinkStyle}>politique de confidentialité</Link>.
            </p>
          </div>
          <div style={legalEntryLastStyle}>
            <span style={legalHeadingStyle}>06 — Droit applicable</span>
            <p style={legalParaStyle}>
              Les présentes mentions sont soumises au droit français. En cas de litige, et à défaut de résolution
              amiable, compétence est attribuée aux tribunaux du ressort de Paris.
            </p>
          </div>
        </div>
      </section>

      <Footer variant="plain" />
    </div>
  );
}
