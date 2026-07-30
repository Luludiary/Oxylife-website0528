import { PageHero, QualitySection, SustainabilitySection } from "../components/Sections";
import {
  ComparisonTable,
  DirectAnswer,
  EditorialMeta,
  FaqSection,
  faqSchema,
} from "../components/GeoContent";

export const metadata = {
  title: "Quality & Compliance",
  description: "Model-specific quality assurance, product testing evidence, FSC packaging scope, and compliance support for drinkware and lunch box orders.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  const evidenceRows = [
    ["November 2024 third-party file", "Named “Space pot” samples and selected components", "Selected BPA, LFGB-related, migration, and material tests stated in the report", "Only the named samples, components, methods, and conditions"],
    ["FSC Chain of Custody certificate", "Eligible wood- and paper-based materials and packaging activities", "Certificate on file through March 21, 2027", "Not a Sedex certificate and not a finished-drinkware certification"],
    ["FDA-related supplier file", "Named silicone masterbatch from the material supplier", "Raw-material supplier documentation", "Does not certify every silicone part or finished product"],
    ["BSCI social-audit file dated May 20, 2022", "Named audited site and audit period", "Historical social-audit evidence", "Do not present as current until status and renewal are confirmed"],
  ];
  const faqs = [
    ["Can one test report cover every product?", "No. Reports apply only to the identified sample, materials, components, methods, and conditions."],
    ["Does an FSC certificate certify a bottle or lunch box?", "No. FSC Chain of Custody applies to eligible certified wood- or paper-based materials and activities within the certificate scope."],
    ["Are compliance requirements the same in every market?", "No. Confirm current product, labeling, packaging, and testing requirements for the destination and buyer program."],
    ["When should testing be planned?", "Confirm the exact SKU, destination, required scope, laboratory, sample quantity, cost, and timing before production approval."],
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "OXYDIARY Quality & Compliance",
        url: "https://oxylifediary.com/quality",
        dateModified: "2026-07-30",
        reviewedBy: { "@type": "Organization", name: "OXYDIARY Product & Quality Team" },
      },
      faqSchema(faqs),
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Quality assurance"
        title="Inspection and Compliance Support for Global Buyers"
        text="Quality is managed across raw material, production, surface treatment, vacuum performance, packaging, and final shipment checks."
      />
      <EditorialMeta />
      <DirectAnswer label="Evidence policy">
        Compliance language is approved only after the exact SKU, component, destination, test method, and supporting file have been matched. Supplier-level or raw-material documents are not presented as finished-product certification.
      </DirectAnswer>
      <QualitySection />
      <ComparisonTable
        title="Evidence currently on file and its limits"
        headers={["File", "Identified scope", "What it can support", "Important limit"]}
        rows={evidenceRows}
      />
      <FaqSection faqs={faqs} title="Quality and compliance questions" />
      <SustainabilitySection />
    </main>
  );
}
