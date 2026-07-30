import { notFound } from "next/navigation";
import { PageHero } from "../../components/Sections";
import {
  Checklist,
  ComparisonTable,
  ContentSections,
  DirectAnswer,
  EditorialMeta,
  FaqSection,
  RelatedLinks,
  faqSchema,
} from "../../components/GeoContent";
import { resources } from "../../_data/editorialContent";

export function generateStaticParams() {
  return Object.keys(resources).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = resources[slug];
  if (!item) notFound();
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/resources/${slug}` },
    openGraph: {
      title: item.title,
      description: item.description,
      url: `/resources/${slug}`,
      type: "article",
    },
  };
}

export default async function ResourceDetailPage({ params }) {
  const { slug } = await params;
  const item = resources[slug];
  if (!item) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: item.title,
        description: item.description,
        url: `https://oxylifediary.com/resources/${slug}`,
        datePublished: "2026-07-30",
        dateModified: "2026-07-30",
        author: { "@type": "Organization", name: "OXYDIARY Product & Quality Team" },
        publisher: { "@type": "Organization", name: "OXYDIARY", url: "https://oxylifediary.com" },
      },
      faqSchema(item.faqs),
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <PageHero eyebrow="B2B buyer guide" title={item.title} text={item.description} />
      <EditorialMeta />
      <DirectAnswer label="Short answer">{item.answer}</DirectAnswer>
      <ContentSections sections={item.sections} />
      <ComparisonTable headers={item.headers} rows={item.rows} />
      <Checklist items={item.checklist} />
      <FaqSection faqs={item.faqs} />
      <RelatedLinks links={item.related} />
    </main>
  );
}
