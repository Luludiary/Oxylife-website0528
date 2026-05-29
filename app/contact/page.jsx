import { PageHero } from "../components/Sections";
import { QuoteForm } from "../components/QuoteForm";

export const metadata = {
  title: "Contact | OXYDIARY",
  description: "Request a quote for OEM/ODM stainless steel drinkware manufacturing.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Request a quote"
        title="Tell Us What You Want to Manufacture"
        text="Share your product category, target quantity, customization requirements, and destination market. Our export team will reply within 24 hours."
      />
      <section className="section section-alt">
        <div className="container contact-layout">
          <div className="info-card">
            <span className="line-icon" />
            <h3>Export Sales Team</h3>
            <p style={{ marginTop: 12 }}>Email: sales@oxydiary.com</p>
            <p>Address: No. 8 Industry Road, Yongkang City, Zhejiang, China</p>
            <p>Response time: within 24 hours on business days.</p>
          </div>
          <div className="quote-panel">
            <h2>Request a Quote</h2>
            <p>Tell us your requirements, and we will reply within 24 hours.</p>
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
