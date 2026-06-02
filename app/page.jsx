import Link from "next/link";
import { CustomTabs } from "./components/CustomTabs";
import {
  BuyerSection,
  FactoryIntro,
  ProcessSection,
  ProductCategories,
  QualitySection,
  ShippingQuoteSection,
  StatsBand,
  SustainabilitySection,
} from "./components/Sections";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <video
          className="hero-bg-video"
          src="/videos/premium-stainless-steel-tumbler-manufacturer.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">OEM / ODM drinkware partner</p>
            <h1>
              <span>Custom Stainless Steel</span>
              <span>Drinkware Manufacturer</span>
              <span>for Global Brands</span>
            </h1>
            <p>
              Reliable bottle, tumbler, mug, and accessory manufacturing with
              flexible customization, controlled quality, and export-ready service.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/products">
                Explore Products
              </Link>
              <Link className="btn btn-secondary" href="/factory">
                Our Capabilities
              </Link>
            </div>
            <div className="hero-proof" aria-label="Manufacturing strengths">
              <div className="proof-item">
                <span className="proof-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M4 17.5 16.8 4.7a2.1 2.1 0 0 1 3 3L7 20.5H4v-3Z" />
                    <path d="m14.8 6.7 2.5 2.5" />
                    <path d="M4 5h6M4 9h3" />
                  </svg>
                </span>
                <strong>OEM/ODM Customization</strong>
              </div>
              <div className="proof-item">
                <span className="proof-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12 14.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                    <path d="m8.8 13.2-1.1 7.3 4.3-2.4 4.3 2.4-1.1-7.3" />
                    <path d="M12 6.4v3.2l2.1 1.2" />
                  </svg>
                </span>
                <strong>15+ Years Experience</strong>
              </div>
              <div className="proof-item">
                <span className="proof-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M3.5 20.5h17" />
                    <path d="M5 20.5V9.8l5 2.8V9.8l5 2.8V6.5h4v14" />
                    <path d="M8 16h2M13 16h2M18 16h1" />
                  </svg>
                </span>
                <strong>Factory Direct Supply</strong>
              </div>
              <div className="proof-item">
                <span className="proof-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12 3.5 19 6v5.2c0 4.3-2.8 7.7-7 9.3-4.2-1.6-7-5-7-9.3V6l7-2.5Z" />
                    <path d="m8.8 12.1 2.1 2.1 4.5-4.8" />
                  </svg>
                </span>
                <strong>Strict Quality Control</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-categories-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Product range</p>
            <h2>Product Categories</h2>
          </div>
          <ProductCategories />
        </div>
      </section>

      <FactoryIntro />
      <StatsBand />

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Custom solutions</p>
            <h2>OEM/ODM Customization</h2>
            <p>Flexible options tailored to your brand positioning, channel needs, and target price range.</p>
          </div>
          <CustomTabs />
        </div>
      </section>

      <ProcessSection />
      <QualitySection />
      <BuyerSection />
      <ShippingQuoteSection />
      <SustainabilitySection />
    </main>
  );
}
