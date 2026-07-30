import { FactoryIntro, PageHero, StatsBand } from "../components/Sections";
import {
  Checklist,
  ComparisonTable,
  DirectAnswer,
  EditorialMeta,
  FaqSection,
} from "../components/GeoContent";

export const metadata = {
  title: "Factory",
  description: "Drinkware manufacturing coordination, sampling, inspection, packaging, and export service for confirmed B2B orders.",
  alternates: { canonical: "/factory" },
};

export default function FactoryPage() {
  const faqs = [
    ["Is every product made at one site?", "Production scope and qualified manufacturing site are confirmed for the selected model and purchase order."],
    ["When is capacity confirmed?", "After the exact model, quantity, process, packaging, quality plan, and requested delivery window are reviewed."],
    ["How are production changes controlled?", "Material, component, color, artwork, process, packaging, and site changes should be documented and approved before shipment."],
  ];

  return (
    <main>
      <PageHero
        eyebrow="Factory direct"
        title="Manufacturing Coordination for Repeatable B2B Orders"
        text="Production scope, qualified site, capacity, lead time, and inspection plan are confirmed against the selected product and purchase order."
      />
      <EditorialMeta />
      <DirectAnswer label="Manufacturing answer">
        OXYDIARY coordinates the selected product from specification and sample through qualified production, decoration, assembly, inspection, packaging, and export documents. Site, capacity, lead time, and process claims are confirmed per order rather than applied to every SKU.
      </DirectAnswer>
      <FactoryIntro />
      <StatsBand />
      <ComparisonTable
        title="Order-control checkpoints"
        headers={["Checkpoint", "What is confirmed", "Buyer record"]}
        rows={[
          ["Specification", "Model, materials, components, dimensions, function", "Approved SKU sheet"],
          ["Appearance", "Color, finish, logo, artwork position", "Approved sample and artwork"],
          ["Quality", "Checks, method, sample size, acceptance", "Inspection plan and report"],
          ["Packaging", "Unit pack, accessories, carton, marks", "Approved pack-out and carton file"],
          ["Shipment", "Quantity, documents, booking, destination", "Final shipment document set"],
        ]}
      />
      <Checklist
        title="Factory and order verification checklist"
        items={["Exact model and production site", "Process and material specification", "Approved sample and change record", "Inspection method and acceptance", "Packing, carton marks, and shipment documents"]}
      />
      <FaqSection faqs={faqs} title="Manufacturing questions" />
    </main>
  );
}
