import { notFound } from "next/navigation";
import { PageHero } from "../../components/Sections";
import {
  ArticleBreadcrumbs,
  ArticleConclusion,
  ArticleIntro,
  Checklist,
  ComparisonTable,
  DirectAnswer,
  EditorialMeta,
  FaqSection,
  LongFormArticle,
  RelatedLinks,
  faqSchema,
} from "../../components/GeoContent";
import { resources } from "../../_data/editorialContent";
import { resourceWordCount } from "../../_data/resourceArticleFactory.mjs";
import { getResourceModule } from "../../_data/resourceTaxonomy.mjs";

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
    keywords: item.keywords,
    authors: [{ name: item.author.name }],
    alternates: { canonical: `/resources/${slug}` },
    openGraph: {
      title: item.title,
      description: item.description,
      url: `/resources/${slug}`,
      type: "article",
      publishedTime: item.dates.published,
      modifiedTime: item.dates.modified,
      authors: [item.author.name],
    },
  };
}

export default async function ResourceDetailPage({ params }) {
  const { slug } = await params;
  const item = resources[slug];
  if (!item) notFound();
  const resourceModule = getResourceModule(item.category);

  const breadcrumbItems = [
    { name: "Home", url: "https://oxylifediary.com" },
    { name: "Resources", url: "https://oxylifediary.com/resources" },
    ...(resourceModule
      ? [{ name: resourceModule.label, url: `https://oxylifediary.com/resources#${resourceModule.id}` }]
      : []),
    { name: item.title, url: `https://oxylifediary.com/resources/${slug}` },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://oxylifediary.com/resources/${slug}#article`,
        headline: item.title,
        description: item.description,
        url: `https://oxylifediary.com/resources/${slug}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://oxylifediary.com/resources/${slug}`,
        },
        articleSection: item.category,
        keywords: item.keywords?.join(", "),
        wordCount: resourceWordCount(item),
        datePublished: item.dates.published,
        dateModified: item.dates.modified,
        author: {
          "@type": "Person",
          name: item.author.name,
          jobTitle: item.author.role,
          worksFor: { "@id": "https://oxylifediary.com/#organization" },
        },
        publisher: { "@id": "https://oxylifediary.com/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((breadcrumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: breadcrumb.name,
          item: breadcrumb.url,
        })),
      },
      faqSchema(item.faqs),
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <PageHero eyebrow={item.category} title={item.title} text={item.description} />
      <div className="article-context-panel">
        <ArticleBreadcrumbs module={resourceModule} title={item.title} />
        <EditorialMeta
          author={item.author.name}
          authorRole={item.author.role}
          updated={item.dates.display}
        />
      </div>
      <DirectAnswer label="Short answer">{item.answer}</DirectAnswer>
      <ArticleIntro paragraphs={item.intro} />
      <LongFormArticle sections={item.sections} />
      <ComparisonTable
        title={item.comparison.title}
        headers={item.comparison.headers}
        rows={item.comparison.rows}
      />
      <Checklist
        title={item.checklist.title}
        description={item.checklist.description}
        items={item.checklist.items}
      />
      <FaqSection faqs={item.faqs} />
      <ArticleConclusion paragraphs={item.conclusion} />
      <RelatedLinks links={item.related} />
    </main>
  );
}
