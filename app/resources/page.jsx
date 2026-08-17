import Link from "next/link";
import { PageHero } from "../components/Sections";
import { resourceList } from "../_data/editorialContent";

export const metadata = {
  title: "Custom Drinkware Buyer Resources",
  description:
    "Original B2B guides organized by drinkware engineering, materials, OEM/ODM, sourcing, quality, customization, packaging, and product use.",
  alternates: { canonical: "/resources" },
};

const resourceModules = [
  {
    id: "engineering-manufacturing-quality",
    label: "Engineering, Manufacturing & Quality",
    description: "Design rules, factory processes, insulation science, testing standards, inspection, and connected-product engineering.",
    categories: new Set([
      "Manufacturing",
      "Product Engineering",
      "Quality Assurance",
      "Product Education",
      "Smart Drinkware Engineering",
    ]),
  },
  {
    id: "materials-safety-compliance",
    label: "Materials, Safety & Compliance",
    description: "Stainless steel, plastics, silicone, ceramic linings, food-contact evidence, care, and destination-market compliance.",
    categories: new Set([
      "Materials and Safety",
      "Materials and OEM",
      "Materials and Sourcing",
      "Materials and Product Design",
      "Compliance and Evidence",
      "Care and Product Support",
    ]),
  },
  {
    id: "oem-odm-customization-packaging",
    label: "OEM/ODM, Customization & Packaging",
    description: "Development routes, tooling, private label, coatings, decoration, branding, intellectual property, and packaging execution.",
    categories: new Set([
      "Product Development",
      "OEM/ODM Engineering",
      "Tooling and Cost",
      "Private Label",
      "IP and Procurement",
      "Customization",
      "Decoration Engineering",
      "Color and Finishing",
      "Tactile Branding",
      "Packaging and Fulfillment",
      "Luxury Packaging",
    ]),
  },
  {
    id: "sourcing-suppliers-commercial",
    label: "Sourcing, Suppliers & Commercial Strategy",
    description: "Supplier qualification, country comparison, global sourcing, cost structures, MOQ, and purchase-risk controls.",
    categories: new Set([
      "Supplier Evaluation",
      "Global Sourcing",
      "Global Sourcing Strategy",
      "Supplier Due Diligence",
      "Plastic Bottle Sourcing",
    ]),
  },
  {
    id: "selection-use-cases-gifting",
    label: "Product Selection, Use Cases & Gifting",
    description: "Format selection for commuting, coffee, outdoor use, corporate programs, and customer-specific buying scenarios.",
    categories: new Set([
      "Product Selection",
      "Coffee Drinkware",
      "Outdoor Drinkware",
      "Corporate Gifting",
    ]),
  },
];

const groupedResources = resourceModules.map((module) => ({
  ...module,
  items: resourceList.filter((item) => module.categories.has(item.category)),
}));

export default function ResourcesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "OXYDIARY Custom Drinkware Buyer Resources",
    url: "https://oxylifediary.com/resources",
    hasPart: groupedResources.map((module) => ({
      "@type": "ItemList",
      name: module.label,
      itemListElement: module.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `https://oxylifediary.com/resources/${item.slug}`,
      })),
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Buyer resources"
        title="The OXYDIARY Drinkware Knowledge Library"
        text="Use this structured library to move from material and product decisions through engineering, supplier qualification, customization, quality control, packaging, and repeat purchasing."
        image="/images/heroes/resources-engineering-knowledge-v1.png"
        imageAlt="Drinkware cutaway, material samples, technical drawings, and sourcing analysis arranged as an engineering knowledge library"
        className="content-image-page-hero resources-page-hero"
      />

      <section className="resource-directory-intro" aria-labelledby="resource-directory-title">
        <div className="container">
          <div className="resource-directory-summary">
            <div>
              <p className="eyebrow">Browse by decision stage</p>
              <h2 id="resource-directory-title">{resourceList.length} practical guides in 5 focused modules</h2>
            </div>
            <p>Each article is written for brand owners, importers, wholesalers, retailers, gifting teams, and product developers. Technical values are identified as specifications, test references, or model-specific information so they can be used responsibly in an RFQ.</p>
          </div>
          <nav className="resource-module-nav" aria-label="Resource modules">
            {groupedResources.map((module, index) => (
              <a href={`#${module.id}`} key={module.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{module.label}</strong>
                <small>{module.items.length} guides</small>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section section-alt resource-directory">
        <div className="container">
          {groupedResources.map((module, moduleIndex) => (
            <section className="resource-module" id={module.id} key={module.id} aria-labelledby={`${module.id}-title`}>
              <header className="resource-module-head">
                <span>{String(moduleIndex + 1).padStart(2, "0")}</span>
                <div>
                  <p className="eyebrow">Knowledge module · {module.items.length} guides</p>
                  <h2 id={`${module.id}-title`}>{module.label}</h2>
                  <p>{module.description}</p>
                </div>
              </header>
              <ol className="resource-list">
                {module.items.map((item, index) => (
                  <li key={item.slug}>
                    <Link href={`/resources/${item.slug}`}>
                      <span className="resource-list-number">{String(index + 1).padStart(2, "0")}</span>
                      <span className="resource-list-copy">
                        <small>{item.category}</small>
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </span>
                      <span className="resource-list-arrow" aria-hidden="true">-&gt;</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
