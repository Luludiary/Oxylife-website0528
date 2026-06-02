import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "../../components/QuoteForm";
import { products } from "../../components/Sections";

const productDetails = {
  "coffee-cups": {
    category: "Coffee Cup Series",
    title: "Custom Stainless Steel Coffee Cup",
    image: "/images/products/coffee-cup-transparent.png",
    gallery: [
      "/images/products/category-coffee-cups.png",
      "/images/products/coffee-cup-transparent.png",
      "/images/products/coffee-cup.png",
    ],
    capacities: "12oz / 16oz / 20oz",
  },
  tumblers: {
    category: "Tumbler Series",
    title: "Custom Stainless Steel Tumbler",
    image: "/images/products/tumbler-transparent.png",
    gallery: [
      "/images/products/category-tumblers.png",
      "/images/products/tumbler-transparent.png",
      "/images/products/tumbler.png",
    ],
    capacities: "20oz / 30oz / 40oz",
  },
  "smart-bottles": {
    category: "Smart Bottle Series",
    title: "Custom Smart Stainless Steel Bottle",
    image: "/images/products/smart-bottle-transparent.png",
    gallery: [
      "/images/products/category-smart-bottles.png",
      "/images/products/smart-bottle-transparent.png",
      "/images/products/smart-bottle.png",
    ],
    capacities: "500ml / 650ml / 750ml",
  },
  "water-bottles": {
    category: "Water Bottle Series",
    title: "Custom Stainless Steel Water Bottle",
    image: "/images/products/water-bottle-transparent.png",
    gallery: [
      "/images/products/category-water-bottles.png",
      "/images/products/water-bottle-transparent.png",
      "/images/products/water-bottle.png",
    ],
    capacities: "500ml / 750ml / 1000ml",
  },
  "sports-bottles": {
    category: "Sports Bottle Series",
    title: "Custom Stainless Steel Sports Bottle",
    image: "/images/products/sports-bottles-transparent.png",
    gallery: [
      "/images/products/category-sports-bottles.png",
      "/images/products/sports-bottles-transparent.png",
      "/images/products/sports-bottles.png",
    ],
    capacities: "500ml / 750ml / 1000ml / 1500ml",
  },
  "kids-bottles": {
    category: "Kids Bottle Series",
    title: "Custom Stainless Steel Kids Bottle",
    image: "/images/products/category-kids-bottles.png",
    gallery: [
      "/images/products/category-kids-bottles.png",
      "/images/products/water-bottle-transparent.png",
      "/images/products/water-bottle.png",
    ],
    capacities: "350ml / 500ml / 600ml",
  },
};

const summaryRows = [
  ["Material", "18/8 (304) Stainless Steel"],
  ["MOQ", "500 pcs per model"],
  ["Color Customization", "Pantone color available"],
  ["Lid Options", "Screw cap / Sport lid / Straw lid"],
  ["Logo Options", "Silk print / 3D logo / Laser engraving"],
];

const keyFeatures = [
  ["Double-Wall Insulation", "Keeps drinks cold or hot for daily use."],
  ["Leak-Resistant Lid", "Multiple lid options for retail and outdoor channels."],
  ["Food-Grade Steel", "Durable 18/8 stainless steel with BPA-free contact parts."],
  ["Custom Branding", "Logo, color, finish, and packaging can be customized."],
];

const specs = [
  ["Capacity", "500ml / 750ml / 1000ml / 1500ml"],
  ["Material", "18/8 (304) Stainless Steel"],
  ["Size", "Customized by model"],
  ["Finish", "Matte / Powder Coated / Electroplated"],
  ["Logo", "Silk Print / 3D Logo / Laser Engraving"],
  ["Packing", "White Box / Color Box / Custom Box"],
  ["MOQ", "500 pcs per model"],
  ["Sample Time", "7-10 Days"],
  ["Lead Time", "25-35 Days"],
  ["Port", "Shenzhen / Ningbo"],
];

const customOptions = [
  "Pantone Color Customization",
  "Multiple Lid Options",
  "Silk Print Logo",
  "3D Logo",
  "Laser Engraving",
  "Packaging Customization",
];

const detailPlaceholders = [
  "Premium surface finish for excellent durability and style.",
  "Leak-resistant lid structure helps prevent spills.",
  "Wide mouth design supports easy cleaning and filling.",
];

const qualitySteps = [
  "Raw Material Inspection",
  "Vacuum Performance Test",
  "Leak-Proof Test",
  "Final Inspection",
];

const whyChoose = [
  ["Flexible MOQ", "Low MOQ support to help you grow your business."],
  ["Fast Sampling", "Quick samples in 7-10 days to speed up projects."],
  ["Stable Lead Time", "Efficient production and on-time delivery."],
  ["Export to 60+ Countries", "Trusted by buyers across global markets."],
];

export function generateStaticParams() {
  return Object.keys(productDetails).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const item = productDetails[params.slug] || productDetails["sports-bottles"];
  return {
    title: `${item.title} | OXYDIARY`,
    description: `OEM/ODM ${item.title.toLowerCase()} detail page for global B2B buyers.`,
  };
}

export default function ProductDetailPage({ params }) {
  const item = productDetails[params.slug] || productDetails["sports-bottles"];
  const capacityRow = ["Capacity", item.capacities];
  const rows = [summaryRows[0], capacityRow, ...summaryRows.slice(1)];
  const related = products.filter((product) => product.id !== params.slug).slice(0, 4);

  return (
    <main className="product-detail-page">
      <section className="product-detail-hero">
        <div className="container">
          <nav className="product-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span>{item.category}</span>
          </nav>

          <div className="product-detail-grid">
            <div className="product-gallery">
              <div className="product-main-image">
                <Image src={item.image} alt={item.title} width={920} height={920} quality={100} priority />
              </div>
              <div className="product-thumbs">
                {item.gallery.map((image) => (
                  <div className="product-thumb" key={image}>
                    <Image src={image} alt={`${item.title} view`} width={180} height={180} quality={100} />
                  </div>
                ))}
              </div>
            </div>

            <div className="product-summary">
              <span className="product-series">{item.category}</span>
              <h1>{item.title}</h1>
              <p>Premium quality. Fully customizable. Built for your brand.</p>
              <div className="product-summary-table">
                {rows.map(([label, value]) => (
                  <div key={label}>
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              <div className="product-actions">
                <Link className="btn btn-primary" href="/contact">Request a Quote</Link>
                <a className="btn btn-outline" href="#specifications">Download Specs</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-section">
        <div className="container">
          <h2 className="detail-section-title">Key Features</h2>
          <div className="detail-card-grid four">
            {keyFeatures.map(([title, text]) => (
              <article className="detail-feature-card" key={title}>
                <span className="detail-line-icon" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <h2 className="detail-section-title" id="specifications">Specifications</h2>
          <div className="spec-table">
            {specs.map(([label, value]) => (
              <div key={label}>
                <strong>{label}</strong>
                <span>{label === "Capacity" ? item.capacities : value}</span>
              </div>
            ))}
          </div>

          <h2 className="detail-section-title">Customization Options</h2>
          <div className="custom-option-grid">
            {customOptions.map((option) => (
              <article className="custom-option-card" key={option}>
                <span className="detail-line-icon" />
                <h3>{option}</h3>
              </article>
            ))}
          </div>

          <h2 className="detail-section-title">Product Details</h2>
          <div className="detail-placeholder-grid">
            {detailPlaceholders.map((text) => (
              <article className="detail-placeholder-card" key={text}>
                <div>Detail Image</div>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <h2 className="detail-section-title">Application Scenarios</h2>
          <div className="scenario-grid">
            <article className="detail-placeholder-card"><div>Scene Image</div><p>Suitable for retail, outdoor, corporate gifting, and lifestyle campaigns.</p></article>
            <article className="detail-placeholder-card"><div>Scene Image</div><p>Flexible branding supports ecommerce, promotional, and wholesale programs.</p></article>
          </div>

          <h2 className="detail-section-title">Quality Control</h2>
          <div className="quality-flow">
            {qualitySteps.map((step) => (
              <article key={step}>
                <span className="detail-line-icon" />
                <h3>{step}</h3>
              </article>
            ))}
          </div>

          <h2 className="detail-section-title">Why Choose OXYDIARY</h2>
          <div className="detail-card-grid four">
            {whyChoose.map(([title, text]) => (
              <article className="detail-feature-card" key={title}>
                <span className="detail-line-icon" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <h2 className="detail-section-title">Related Products</h2>
          <div className="related-products-grid">
            {related.map((product) => (
              <Link className="related-product-card" href={`/products/${product.id}`} key={product.id}>
                <Image src={product.image} alt={product.alt} width={320} height={320} quality={100} />
                <span>{product.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="product-inquiry-band">
        <div className="container product-inquiry-grid">
          <div>
            <h2>Start Your Custom Drinkware Project</h2>
            <p>Tell us your ideas and requirements. Our team will provide the best solution for your market.</p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
