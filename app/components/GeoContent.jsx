import Link from "next/link";

export function ArticleBreadcrumbs({ module, title }) {
  return (
    <nav className="article-breadcrumbs" aria-label="Breadcrumb">
      <div className="container">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/resources">Resources</Link></li>
          {module ? (
            <>
              <li aria-hidden="true">/</li>
              <li><Link href={`/resources#${module.id}`}>{module.label}</Link></li>
            </>
          ) : null}
          <li aria-hidden="true">/</li>
          <li><span aria-current="page">{title}</span></li>
        </ol>
      </div>
    </nav>
  );
}

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

export function ArticleIntro({ paragraphs }) {
  return (
    <section className="section article-intro-section">
      <div className="container longform-copy article-intro">
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}

function InlineDataTable({ table }) {
  return (
    <div className="geo-table-wrap article-inline-table">
      {table.caption ? <p className="article-table-caption">{table.caption}</p> : null}
      <table className="geo-table">
        <thead>
          <tr>{table.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${rowIndex}-${row.join("-")}`}>
              {row.map((cell, cellIndex) => cellIndex === 0
                ? <th key={`${cellIndex}-${cell}`} scope="row">{cell}</th>
                : <td key={`${cellIndex}-${cell}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      {table.note ? <p className="article-table-note">{table.note}</p> : null}
    </div>
  );
}

function ArticleBlock({ block }) {
  if (block.type === "heading") return <h3>{block.text}</h3>;
  if (block.type === "paragraph") return <p>{block.text}</p>;
  if (block.type === "bullets") {
    return <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
  }
  if (block.type === "steps") {
    return <ol>{block.items.map((item) => <li key={item}>{item}</li>)}</ol>;
  }
  if (block.type === "table") return <InlineDataTable table={block} />;
  if (block.type === "note") {
    return (
      <aside className="article-technical-note">
        {block.title ? <strong>{block.title}</strong> : null}
        <p>{block.text}</p>
      </aside>
    );
  }
  return null;
}

export function LongFormArticle({ sections }) {
  return (
    <section className="section section-alt">
      <div className="container longform-copy longform-article">
        {sections.map((section) => (
          <article className="longform-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.blocks
              ? section.blocks.map((block, index) => <ArticleBlock block={block} key={`${section.title}-${index}`} />)
              : section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>
        ))}
      </div>
    </section>
  );
}

export function ArticleConclusion({ paragraphs }) {
  return (
    <section className="section article-conclusion-section">
      <div className="container longform-copy article-conclusion">
        <p className="eyebrow">Conclusion</p>
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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

export function Checklist({
  items,
  title = "Information to confirm",
  description = "Confirm these items against the exact product and order before approving production.",
}) {
  return (
    <section className="section">
      <div className="container geo-checklist">
        <div>
          <p className="eyebrow">RFQ checklist</p>
          <h2>{title}</h2>
          <p>{description}</p>
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
            <Link href={href} key={href}>{label}<span aria-hidden="true">-&gt;</span></Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorialMeta({
  reviewedBy = "OXYDIARY Product & Quality Team",
  author,
  authorRole,
  updated = "July 31, 2026",
}) {
  return (
    <div className="container editorial-meta">
      {author ? <span>Written by: {author}{authorRole ? ` | ${authorRole}` : ""}</span> : null}
      <span>Last updated: {updated}</span>
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
