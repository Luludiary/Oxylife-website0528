import Link from "next/link";

export function DirectAnswer({ children, label = "Buyer answer" }) {
  return (
    <section className="geo-answer" aria-labelledby="geo-answer-title">
      <div className="container">
        <div className="geo-answer-card">
          <p className="eyebrow" id="geo-answer-title">{label}</p>
          <p>{children}</p>
        </div>
      </div>
    </section>
  );
}

export function ContentSections({ sections }) {
  return (
    <section className="section">
      <div className="container geo-section-grid">
        {sections.map(([title, text]) => (
          <article className="info-card" key={title}>
            <span className="line-icon" aria-hidden="true" />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ComparisonTable({ headers, rows, title = "Buyer comparison" }) {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Decision support</p>
          <h2>{title}</h2>
        </div>
        <div className="geo-table-wrap">
          <table className="geo-table">
            <thead>
              <tr>{headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.join("-")}>
                  {row.map((cell, index) => index === 0
                    ? <th key={cell} scope="row">{cell}</th>
                    : <td key={`${index}-${cell}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Checklist({ items, title = "Information to confirm" }) {
  return (
    <section className="section">
      <div className="container geo-checklist">
        <div>
          <p className="eyebrow">RFQ checklist</p>
          <h2>{title}</h2>
          <p>Confirm these items against the exact product and order before approving production.</p>
        </div>
        <ol>
          {items.map((item, index) => (
            <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FaqSection({ faqs, title = "Buyer questions" }) {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>{title}</h2>
        </div>
        <div className="product-faq-grid">
          {faqs.map(([question, answer]) => (
            <article className="product-faq-card" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({ links }) {
  return (
    <section className="section geo-related-section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Continue sourcing</p>
          <h2>Related pages</h2>
        </div>
        <div className="geo-related-grid">
          {links.map(([href, label]) => (
            <Link href={href} key={href}>{label}<span aria-hidden="true">→</span></Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorialMeta({ reviewedBy = "OXYDIARY Product & Quality Team" }) {
  return (
    <div className="container editorial-meta">
      <span>Last updated: July 30, 2026</span>
      <span>Reviewed by: {reviewedBy}</span>
      <span>Scope: B2B sourcing guidance; requirements remain SKU- and market-specific.</span>
    </div>
  );
}

export function faqSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
