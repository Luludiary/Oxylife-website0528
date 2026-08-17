import Link from "next/link";
import { PageHero } from "../components/Sections";
import { faqGroups, faqItems } from "../_data/faqContent.mjs";

export const metadata = {
  title: "Drinkware Manufacturer FAQ",
  description:
    "Answers about OXYDIARY, drinkware materials, OEM and ODM customization, quality control, MOQ, samples, payment, production, shipping, and after-sales support.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <PageHero
        eyebrow="Frequently asked questions"
        title="Clear Answers for Drinkware Buyers"
        text="Explore practical answers about OXYDIARY, product specifications, OEM and ODM customization, quality, orders, payment, shipping, and after-sales support."
        image="/images/heroes/faq-buyer-answers-v1.png"
        imageAlt="Drinkware product, lid structure, material samples, technical documents, and packaging organized to answer buyer questions"
        className="content-image-page-hero faq-page-hero"
      />

      <section className="section faq-page-section">
        <div className="container faq-layout">
          <aside className="faq-toc" aria-label="FAQ table of contents">
            <p className="eyebrow">On this page</p>
            <h2>FAQ categories</h2>
            <nav>
              {faqGroups.map((group) => (
                <a href={`#${group.id}`} key={group.id}>
                  <span>{group.number}</span>
                  {group.title}
                </a>
              ))}
            </nav>
            <Link className="faq-toc-contact" href="/contact">Ask our team</Link>
          </aside>

          <div className="faq-content">
            {faqGroups.map((group) => (
              <section className="faq-group" id={group.id} key={group.id}>
                <div className="faq-group-head">
                  <span>{group.number}</span>
                  <div>
                    <h2>{group.title}</h2>
                    <p>{group.description}</p>
                  </div>
                </div>
                <div className="faq-accordion-list">
                  {group.items.map((item, index) => (
                    <details className="faq-accordion" key={item.question} open={index === 0}>
                      <summary>
                        <span>{item.question}</span>
                        <span className="faq-toggle" aria-hidden="true">+</span>
                      </summary>
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-cta-section">
        <div className="container faq-cta">
          <div>
            <p className="eyebrow">Still planning your project?</p>
            <h2>Ask a Question About Your Exact SKU</h2>
            <p>
              Share the product type, target market, quantity, customization, evidence needs,
              destination, and required delivery date. We will respond with project-specific guidance.
            </p>
          </div>
          <Link className="btn btn-primary" href="/contact">Contact OXYDIARY</Link>
        </div>
      </section>
    </main>
  );
}
