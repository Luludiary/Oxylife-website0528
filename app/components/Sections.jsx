import Link from "next/link";
import Image from "next/image";
import { QuoteForm } from "./QuoteForm";

export const products = [
  {
    id: "water-bottle",
    title: "Water Bottle",
    image: "/images/products/water-bottle.png",
    alt: "Black OxyDiary stainless steel water bottle",
  },
  {
    id: "food-jars",
    title: "Food Jars",
    image: "/images/products/food-jars.png",
    alt: "Blue OxyDiary insulated food jar with handle",
  },
  {
    id: "smart-bottle",
    title: "Smart Bottle",
    image: "/images/products/smart-bottle.png",
    alt: "White OxyDiary smart bottle with temperature display",
  },
  {
    id: "sports-bottles",
    title: "Sports Bottles",
    image: "/images/products/sports-bottles.png",
    alt: "Black OxyDiary sports bottle with flip lid",
  },
  {
    id: "tumbler",
    title: "Tumbler",
    image: "/images/products/tumbler.png",
    alt: "Blue OxyDiary tumbler with handle and straw",
  },
  {
    id: "coffee-cup",
    title: "Coffee Cup",
    image: "/images/products/coffee-cup.png",
    alt: "Blue OxyDiary coffee cup with black lid",
  },
];

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function ProductCategories({ showCta = true }) {
  return (
    <div>
      <div className="category-grid">
        {products.map((product) => (
          <Link className="product-card" href={`/products#${product.id}`} id={product.id} key={product.id}>
            <div className="product-visual">
              <Image
                className="product-image"
                src={product.image}
                alt={product.alt}
                width={520}
                height={520}
                sizes="(max-width: 640px) 90vw, (max-width: 980px) 45vw, 31vw"
              />
            </div>
            <h3>{product.title}</h3>
          </Link>
        ))}
      </div>
      {showCta ? (
        <div className="wide-cta">
          <Link className="btn btn-outline" href="/products">
            View All Products
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="stats-band">
      <div className="stats-grid">
        <div className="stat">
          <strong>15,000+</strong>
          <span>sq m Factory Area</span>
        </div>
        <div className="stat">
          <strong>300+</strong>
          <span>Employees</span>
        </div>
        <div className="stat">
          <strong>1,000,000+</strong>
          <span>PCS Monthly Output</span>
        </div>
        <div className="stat">
          <strong>60+</strong>
          <span>Countries & Regions</span>
        </div>
      </div>
    </section>
  );
}

export function FactoryIntro() {
  return (
    <section className="section">
      <div className="container split">
        <div className="factory-art" aria-hidden="true" />
        <div>
          <p className="eyebrow">Manufacturing strength</p>
          <h2>Your Trusted Drinkware Manufacturer</h2>
          <p>
            Located in Yongkang, our factory supports global buyers with design
            development, stainless steel production, surface finishing, assembly,
            and export documentation.
          </p>
          <ul className="content-list">
            <li>15,000 sq m modern manufacturing area</li>
            <li>300+ trained employees and stable production lines</li>
            <li>Advanced equipment for shaping, coating, and testing</li>
            <li>BSCI, ISO9001, FDA, LFGB, and Sedex compliance support</li>
          </ul>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/about">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    ["01", "Pick A Model", "Choose from existing bottle styles, sizes, and lid systems or match a custom brief."],
    ["02", "Design & Packaging", "Confirm color, logo, finish, box, insert, and retail presentation details."],
    ["03", "Sampling", "Approve pre-production samples before bulk manufacturing begins."],
    ["04", "Mass Production", "Production, inspection, packing, and export handover are managed under one workflow."],
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">From concept to shipment</p>
          <h2>Custom Process</h2>
          <p>We keep global B2B projects simple, fast, and controlled from idea confirmation to mass production.</p>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step-card" key={number}>
              <div className="process-visual" />
              <div className="step-body">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualitySection() {
  const items = [
    ["Raw Material", "Stainless steel checks before production."],
    ["Vacuum Test", "Thermal performance validation."],
    ["Leak Proof", "Reliability checks for lids and seals."],
    ["Final Inspection", "Comprehensive export QC."],
  ];

  return (
    <section className="section section-alt">
      <div className="container quality-wrap">
        <div className="lab-art" aria-hidden="true" />
        <div>
          <p className="eyebrow">Quality assurance</p>
          <h2>Compliance Built Into Production</h2>
          <p>
            Our inspection process covers incoming material, vacuum performance,
            leak resistance, coating adhesion, packaging, and final shipment readiness.
          </p>
          <div className="cert-grid" style={{ marginTop: 28 }}>
            {items.map(([title, text]) => (
              <div className="cert-card" key={title}>
                <span className="line-icon" />
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BuyerSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Buyer fit</p>
          <h2>Who We Work With</h2>
        </div>
        <div className="buyer-grid">
          <article className="buyer-card"><span className="line-icon" /><h3>DTC Brands</h3><p>Design unique bottle collections and build a branded line from concept to reality.</p></article>
          <article className="buyer-card"><span className="line-icon" /><h3>Large Corporations</h3><p>Reliable production capacity for promotional gifts, retail programs, and staff merchandise.</p></article>
          <article className="buyer-card"><span className="line-icon" /><h3>Gifting Suppliers</h3><p>Small-batch customization and OEM services for corporate gift channels.</p></article>
        </div>
        <div className="section-head" style={{ marginTop: 58 }}>
          <p className="eyebrow">Why global buyers choose us</p>
        </div>
        <div className="advantage-grid">
          <article className="advantage-card"><span className="line-icon" /><h3>Low MOQ</h3><p>Flexible MOQ from 300 pcs per style.</p></article>
          <article className="advantage-card"><span className="line-icon" /><h3>Fast Sampling</h3><p>Samples ready in 7-10 days on average.</p></article>
          <article className="advantage-card"><span className="line-icon" /><h3>Stable Lead Time</h3><p>Efficient production with on-time delivery.</p></article>
          <article className="advantage-card"><span className="line-icon" /><h3>Export to 60+</h3><p>Trusted by wholesalers and brands worldwide.</p></article>
        </div>
      </div>
    </section>
  );
}

export function ShippingQuoteSection() {
  return (
    <section className="section section-alt">
      <div className="container shipping-quote">
        <div className="shipping-panel">
          <p className="eyebrow">Global fast shipping</p>
          <h2>Reliable Export Delivery</h2>
          <p>
            We support ocean freight, land transport, air freight, and global
            delivery coordination for wholesale and promotional orders.
          </p>
          <div className="ship-grid">
            <div className="ship-tile">Ocean Freight</div>
            <div className="ship-tile">Land Transport</div>
            <div className="ship-tile">Air Freight</div>
            <div className="ship-tile">Global Delivery</div>
          </div>
        </div>
        <div className="quote-panel">
          <h2>Request a Quote</h2>
          <p>Tell us your requirements, and we will reply within 24 hours.</p>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

export function SustainabilitySection() {
  return (
    <section className="sustainability">
      <div className="sustain-left">
        <p className="eyebrow">Sustainability</p>
        <h2>Commitment to Global Sustainability</h2>
        <p>
          We prioritize responsible manufacturing through water treatment,
          cleaner production, and energy-saving practices to support long-term
          sustainable growth.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/quality">
            Know More
          </Link>
        </div>
      </div>
      <div className="sustain-right">
        <p className="eyebrow">Best practices</p>
        <h2>We Follow Responsible Production Standards</h2>
        <ul className="content-list sustain-list">
          <li>Reuse of recyclable materials</li>
          <li>Systematic treatment of waste gas and water</li>
          <li>Reduced energy consumption</li>
          <li>Energy conservation for a sustainable future</li>
        </ul>
      </div>
    </section>
  );
}
