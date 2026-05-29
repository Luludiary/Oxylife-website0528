import { PageHero, QualitySection, SustainabilitySection } from "../components/Sections";

export const metadata = {
  title: "Quality & Compliance | OXYDIARY",
  description: "Quality assurance, product testing, and compliance support for stainless steel drinkware manufacturing.",
};

export default function QualityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Quality assurance"
        title="Inspection and Compliance Support for Global Buyers"
        text="Quality is managed across raw material, production, surface treatment, vacuum performance, packaging, and final shipment checks."
      />
      <QualitySection />
      <section className="section">
        <div className="container page-grid">
          <article className="info-card"><span className="line-icon" /><h3>Food Contact Support</h3><p>Testing support can be arranged for FDA, LFGB, and destination-specific requirements.</p></article>
          <article className="info-card"><span className="line-icon" /><h3>Social Compliance</h3><p>Factory audit support for BSCI, Sedex, and customer-specific responsible sourcing programs.</p></article>
          <article className="info-card"><span className="line-icon" /><h3>Shipment Checks</h3><p>Final inspection covers appearance, function, packaging, carton marks, and export readiness.</p></article>
        </div>
      </section>
      <SustainabilitySection />
    </main>
  );
}
