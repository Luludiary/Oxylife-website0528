import { FactoryIntro, PageHero, StatsBand } from "../components/Sections";

export const metadata = {
  title: "Factory | OXYDIARY",
  description: "Modern stainless steel drinkware factory with controlled production capacity and export service.",
};

export default function FactoryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Factory direct"
        title="Manufacturing Capacity for Repeatable B2B Orders"
        text="Our facility is planned for stable output, consistent quality, and repeat orders across private label, retail, and promotional channels."
      />
      <FactoryIntro />
      <StatsBand />
      <section className="section section-alt">
        <div className="container page-grid">
          <article className="info-card"><span className="line-icon" /><h3>Production Lines</h3><p>Integrated processes for shaping, welding, polishing, coating, printing, assembly, and packing.</p></article>
          <article className="info-card"><span className="line-icon" /><h3>Project Control</h3><p>Merchandising teams coordinate samples, purchase orders, production updates, inspection, and shipping documents.</p></article>
          <article className="info-card"><span className="line-icon" /><h3>Export Experience</h3><p>Products are shipped to North America, Europe, Southeast Asia, the Middle East, and other global markets.</p></article>
        </div>
      </section>
    </main>
  );
}
