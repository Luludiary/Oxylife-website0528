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
import { solutions } from "../../_data/editorialContent";

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = solutions[slug];
  if (!item) notFound();
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `/solutions/${slug}` },
    openGraph: {
      title: item.title,
      description: item.description,
      url: `/solutions/${slug}`,
      type: "article",
    },
  };
}

export default async function SolutionDetailPage({ params }) {
  const { slug } = await params;
  const item = solutions[slug];
  if (!item) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: item.title,
        description: item.description,
        url: `https://oxylifediary.com/solutions/${slug}`,
        dateModified: "2026-07-30",
        reviewedBy: { "@type": "Organization", name: "OXYDIARY" },
      },
      faqSchema(item.faqs),
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <PageHero eyebrow={item.eyebrow} title={item.title} text={item.description} />
      <EditorialMeta />
      <DirectAnswer>{item.answer}</DirectAnswer>
      <ContentSections sections={item.sections} />
      <ComparisonTable headers={item.headers} rows={item.rows} title="Program decision table" />
      <Checklist items={item.checklist} />
      <FaqSection faqs={item.faqs} />
      <RelatedLinks links={item.related} />
    </main>
  );
}
