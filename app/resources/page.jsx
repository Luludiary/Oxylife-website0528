import Link from "next/link";
import { PageHero } from "../components/Sections";
import { resourceList } from "../_data/editorialContent";

export const metadata = {
  title: "Custom Drinkware Buyer Resources",
  description:
    "Evidence-led B2B guides covering drinkware materials, testing, logo methods, lunch boxes, compliance files, and RFQ preparation.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "OXYDIARY Custom Drinkware Buyer Resources",
    url: "https://oxylifediary.com/resources",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: resourceList.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `https://oxylifediary.com/resources/${item.slug}`,
      })),
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Buyer resources"
        title="Evidence-Led Guides for Custom Drinkware Sourcing"
        text="Use these guides to write clearer specifications, compare products, match evidence to the exact SKU, and prepare a more complete RFQ."
      />
      <section className="section">
        <div className="container editorial-card-grid">
          {resourceList.map((item) => (
            <article className="editorial-card" key={item.slug}>
              <p className="eyebrow">B2B buyer guide</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Link href={`/resources/${item.slug}`}>Read the guide <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
