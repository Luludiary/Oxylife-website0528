import { QuoteForm } from "../components/QuoteForm";

export const metadata = {
  title: "Contact | OXYDIARY",
  description: "Request a quote for OEM/ODM stainless steel drinkware manufacturing.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero contact-page-hero">
        <div className="container">
          <p className="eyebrow">Request a quote</p>
          <h1>Tell Us What You Want to Manufacture</h1>
          <p>
            Share your product category, target quantity, customization
            requirements, and destination market. Our export team will reply
            within 24 hours.
          </p>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container contact-layout">
          <div className="info-card">
            <h3>Export Sales Team</h3>
            <p style={{ marginTop: 12 }}>Whatsapp: +86 15102106279</p>
            <p>Email: shservice@oxylifediary.com</p>
            <p>Address: 181 Yingbin Ave, Xiangzhu Town, Yongkang, Zhejiang 321313, P.R.China</p>
            <p>Response time: within 24 hours on business days.</p>
            <div className="contact-map">
              <iframe
                title="OXYDIARY location on Google Maps"
                src="https://www.google.com/maps?q=181%20Yingbin%20Ave%2C%20Xiangzhu%20Town%2C%20Yongkang%2C%20Zhejiang%20321313%2C%20P.R.China&z=14&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
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
