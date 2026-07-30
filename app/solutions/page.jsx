import Link from "next/link";
import { PageHero } from "../components/Sections";
import { solutionList } from "../_data/editorialContent";

export const metadata = {
  title: "B2B Drinkware Solutions",
  description:
    "Wholesale, corporate gift, promotional, and custom packaging solutions for verified drinkware and lunch box sourcing programs.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "OXYDIARY B2B Drinkware Solutions",
    url: "https://oxylifediary.com/solutions",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: solutionList.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `https://oxylifediary.com/solutions/${item.slug}`,
      })),
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="B2B solutions"
        title="Drinkware Programs Built Around the Buyer"
        text="Practical guidance for importers, distributors, corporate gift teams, and brands planning custom products, packaging, evidence, and delivery."
      />
      <section className="section">
        <div className="container editorial-card-grid">
          {solutionList.map((item) => (
            <article className="editorial-card" key={item.slug}>
              <p className="eyebrow">{item.eyebrow}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Link href={`/solutions/${item.slug}`}>Read the sourcing solution <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
