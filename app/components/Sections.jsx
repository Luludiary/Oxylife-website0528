import Link from "next/link";
import Image from "next/image";
import { QuoteForm } from "./QuoteForm";

export const products = [
  {
    id: "coffee-cups",
    title: "Coffee Cups",
    image: "/images/products/category-coffee-cups.png",
    alt: "Blue OxyDiary coffee cup with black lid",
  },
  {
    id: "tumblers",
    title: "Tumblers",
    image: "/images/products/category-tumblers.png",
    alt: "Blue OxyDiary tumbler with handle and straw",
  },
  {
    id: "smart-bottles",
    title: "Smart Bottles",
    image: "/images/products/category-smart-bottles.png",
    alt: "Blue OxyDiary smart bottle with magnetic phone holder",
  },
  {
    id: "water-bottles",
    title: "Water Bottles",
    image: "/images/products/category-water-bottles.png",
    alt: "Blue OxyDiary stainless steel water bottle",
  },
  {
    id: "sports-bottles",
    title: "Sports Bottles",
    image: "/images/products/category-sports-bottles.png",
    alt: "Black OxyDiary sports bottle with flip lid",
  },
  {
    id: "kids-bottles",
    title: "Kids Bottles",
    image: "/images/products/category-kids-bottles.png",
    alt: "Cartoon OxyDiary kids bottle with blue lid",
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
                width={760}
                height={760}
                sizes="(max-width: 640px) 88vw, (max-width: 980px) 44vw, 30vw"
                quality={100}
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
          <span className="stat-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M3 21V9l6 4V9l6 4V7h6v14H3Z" />
              <path d="M7 17h2M12 17h2M17 17h2" />
            </svg>
          </span>
          <div>
            <strong>15,000+</strong>
            <span>sq m Factory Area</span>
          </div>
        </div>
        <div className="stat">
          <span className="stat-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 0 1-4 0v-.05a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 0 1 0-4h.05A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 0 1 4 0v.05a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 0 1 0 4h-.05A1.7 1.7 0 0 0 19.4 15Z" />
            </svg>
          </span>
          <div>
            <strong>80+</strong>
            <span>Automated Equipments</span>
          </div>
        </div>
        <div className="stat">
          <span className="stat-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M4 19V5" />
              <path d="M4 19h17" />
              <path d="M8 16v-5" />
              <path d="M13 16V8" />
              <path d="M18 16v-9" />
            </svg>
          </span>
          <div>
            <strong>10+ Millions</strong>
            <span>Annual Output</span>
          </div>
        </div>
        <div className="stat">
          <span className="stat-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
              <path d="M3.6 9h16.8M3.6 15h16.8" />
              <path d="M12 3a14 14 0 0 1 0 18" />
              <path d="M12 3a14 14 0 0 0 0 18" />
            </svg>
          </span>
          <div>
            <strong>60+</strong>
            <span>Countries & Regions</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FactoryIntro() {
  return (
    <section className="section factory-intro-section">
      <div className="container factory-intro-content">
        <div className="factory-copy-panel">
          <p className="eyebrow">Manufacturing strength</p>
          <h2>Your Trusted Drinkware Manufacturer</h2>
          <p>
            Located in Yongkang, our factory supports global buyers with design
            development, stainless steel production, surface finishing, assembly,
            and export documentation.
          </p>
          <div className="factory-service-grid">
            <article>
              <span className="factory-service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M3 21V9l6 4V9l6 4V7h6v14H3Z" />
                  <path d="M7 17h2M12 17h2M17 17h2" />
                </svg>
              </span>
              <h3>OEM</h3>
              <p>
                We provide reliable OEM manufacturing services for stainless
                steel water bottles and tumblers. From product specifications to
                bulk production, we help brands achieve stable quality,
                efficient delivery, and consistent supply.
              </p>
              <Link href="/oem-odm">Custom Water Bottle</Link>
            </article>
            <article>
              <span className="factory-service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M8 14a6 6 0 1 1 8 0c-1.2.9-1.7 1.9-1.8 3H9.8C9.7 15.9 9.2 14.9 8 14Z" />
                  <path d="M12 5v2M7.8 7.2l1.4 1.4M16.2 7.2l-1.4 1.4" />
                </svg>
              </span>
              <h3>ODM</h3>
              <p>
                Our ODM service supports product development from concept to
                finished design. With experience in structure, materials,
                colors, and functionality, we help customers create competitive
                drinkware products for their markets.
              </p>
              <Link href="/oem-odm">Develop New Products</Link>
            </article>
            <article>
              <span className="factory-service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 12.5 12.5 4H20v7.5L11.5 20 4 12.5Z" />
                  <path d="M16.5 7.5h.01" />
                  <path d="M8 12.5 11.5 16" />
                </svg>
              </span>
              <h3>Private Label</h3>
              <p>
                Our ODM service supports product development from concept to
                finished design. With experience in structure, materials,
                colors, and functionality, we help customers create competitive
                drinkware products for their markets.
              </p>
              <Link href="/contact">Build Your Brand</Link>
            </article>
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
