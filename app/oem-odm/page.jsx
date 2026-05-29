import { CustomTabs } from "../components/CustomTabs";
import { PageHero, ProcessSection, ShippingQuoteSection } from "../components/Sections";

export const metadata = {
  title: "OEM/ODM Customization | OXYDIARY",
  description: "Custom color, logo, lid, packaging, and private label drinkware manufacturing for global B2B brands.",
};

export default function OemOdmPage() {
  return (
    <main>
      <PageHero
        eyebrow="Custom manufacturing"
        title="OEM/ODM Drinkware Built Around Your Brand"
        text="From model selection to packaging, we help buyers create a coherent product line with controlled cost, quality, and production timelines."
      />
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Customization menu</p>
            <h2>Choose the Right Level of Customization</h2>
            <p>Start with color, material, logo, lid, and packaging options, then build toward exclusive tooling when the project requires it.</p>
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
      <ShippingQuoteSection />
    </main>
  );
}
