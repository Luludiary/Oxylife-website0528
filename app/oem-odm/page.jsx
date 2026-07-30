import { CustomTabs } from "../components/CustomTabs";
import { PageHero, ProcessSection, ShippingQuoteSection } from "../components/Sections";
import {
  ComparisonTable,
  DirectAnswer,
  EditorialMeta,
  FaqSection,
} from "../components/GeoContent";

export const metadata = {
  title: "OEM/ODM Customization",
  description: "Custom color, logo, components, packaging, and private-label support for drinkware and lunch box programs.",
  alternates: { canonical: "/oem-odm" },
};

export default function OemOdmPage() {
  const faqs = [
    ["What is the difference between OEM and ODM here?", "OEM commonly starts from a defined buyer specification or artwork; ODM can start from an existing verified model that is adapted through approved options. Scope is confirmed per project."],
    ["Can every component be customized?", "No. Available bodies, lids, seals, straws, colors, tooling, and packaging depend on the selected model and order configuration."],
    ["Why are MOQ and lead time not fixed?", "They depend on model, material, color, decoration, packaging, testing, quantity, approvals, and production conditions."],
    ["What must be approved before production?", "The exact SKU, components, color, artwork, decoration, packaging, evidence plan, inspection criteria, and commercial order details."],
  ];

  return (
    <main>
      <PageHero
        eyebrow="Custom manufacturing"
        title="OEM/ODM Drinkware & Foodware Built Around Your Brand"
        text="From model selection to packaging, we help buyers create a coherent product line with controlled cost, quality, and production timelines."
      />
      <EditorialMeta />
      <DirectAnswer label="Customization answer">
        The lowest-risk path is to start from a verified model, define only the changes that create buyer value, and approve the final product, decoration, components, packaging, evidence plan, and inspection criteria as one controlled SKU.
      </DirectAnswer>
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Customization menu</p>
            <h2>Choose the Right Level of Customization</h2>
            <p>Start with a verified model, then confirm material, color, logo, components, packaging, MOQ, testing, and production timing for the order.</p>
          </div>
          <CustomTabs />
        </div>
      </section>
      <section className="section">
        <div className="container page-grid">
          <article className="info-card"><span className="line-icon" /><h3>Color & Finish</h3><p>Powder coating, gloss coating, gradient finishes, metallic effects, and matte texture matching.</p></article>
          <article className="info-card"><span className="line-icon" /><h3>Logo & Graphics</h3><p>Laser engraving, screen printing, heat transfer, wraparound artwork, and premium gift presentation.</p></article>
          <article className="info-card"><span className="line-icon" /><h3>Packaging Design</h3><p>Retail boxes, mailer packaging, kraft packaging, custom inserts, and promotional bundle planning.</p></article>
        </div>
      </section>
      <ProcessSection />
      <ComparisonTable
        title="Customization decisions to lock before production"
        headers={["Area", "Examples", "Required approval"]}
        rows={[
          ["Product", "Body, capacity, lid, straw, handle, accessories", "Final specification and physical sample"],
          ["Appearance", "Pantone color, finish, logo process, artwork", "Artwork proof and decorated sample"],
          ["Packaging", "Box, insert, labels, barcode, carton marks", "Dieline, print proof, and pack-out"],
          ["Evidence", "Material files, test scope, destination needs", "SKU-to-report match and test plan"],
          ["Commercial", "Quantity, Incoterm, destination, timing", "Confirmed quotation and purchase order"],
        ]}
      />
      <FaqSection faqs={faqs} title="OEM/ODM questions" />
      <ShippingQuoteSection />
    </main>
  );
}
