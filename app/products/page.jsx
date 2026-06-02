import { ProductCategories, PageHero } from "../components/Sections";

export const metadata = {
  title: "Products | OXYDIARY",
  description: "Coffee cups, smart bottles, tumblers, water bottles, sports bottles, and kids bottles for B2B buyers.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Product catalog"
        title="Stainless Steel Drinkware for Retail, Promotion, and Private Label"
        text="Select proven product platforms, then customize capacity, surface finish, logo, packaging, and accessories for your market."
      />
      <section className="section section-alt">
        <div className="container">
          <ProductCategories showCta={false} />
        </div>
      </section>
      <section className="section feature-band">
        <div className="container page-grid">
          <article className="info-card"><span className="line-icon" /><h3>Retail Ready</h3><p>Products can be supplied with barcode labels, inserts, color boxes, sleeves, and display packaging.</p></article>
          <article className="info-card"><span className="line-icon" /><h3>Material Options</h3><p>Food-grade stainless steel and BPA-free contact parts can be selected according to destination requirements.</p></article>
          <article className="info-card"><span className="line-icon" /><h3>Channel Flexibility</h3><p>Suitable for ecommerce brands, supermarket programs, outdoor retailers, and corporate gifting channels.</p></article>
        </div>
      </section>
    </main>
  );
}
