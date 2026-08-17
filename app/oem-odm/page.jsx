import Link from "next/link";
import { CustomTabs } from "../components/CustomTabs";
import { PageHero, ProcessSection, ShippingQuoteSection } from "../components/Sections";
import {
  ComparisonTable,
  DirectAnswer,
  EditorialMeta,
  FaqSection,
} from "../components/GeoContent";

export const metadata = {
  title: "OEM/ODM Customization",
  description: "OEM and ODM drinkware development with material selection, quality verification, confidential project controls, tooling, packaging, and private-label support.",
  alternates: { canonical: "/oem-odm" },
};

const engineeringGroups = [
  {
    title: "Metallurgy & Wall Control",
    items: [
      ["Forming", "Deep Drawing & Hydro-forming"],
      ["Ultra-light", "0.20mm–0.30mm CNC"],
      ["Heavy-Duty", "0.60mm–1.00mm Steel"],
      ["Alloy Purity", "Virgin SUS316L / 18/8 SUS304"],
    ],
  },
  {
    title: "Vacuum Thermodynamics",
    items: [
      ["Vacuum", "10⁻⁴ Pa Isolation Depth"],
      ["Sealing", "570°C Lead-Free Frit"],
      ["Validation", "100% Infrared Imaging"],
      ["Cycle", "Hot 12H / Cold 24H+"],
    ],
  },
  {
    title: "Precision & QA Standards",
    items: [
      ["Injection Tolerance", "±0.05mm"],
      ["Coating Adhesion", "ASTM D3359 5B"],
      ["Custom Branding", "3D UV / Precision Laser"],
      ["Security", "FDA / LFGB / Prop 65 Safe"],
    ],
  },
];

const sourcingRows = [
  ["Tooling CapEx", "$0 (100+ Ready-Stock Molds)", "$2,500–$7,000 (Body Mold) / $8k–$30k+ (Lid Injection)"],
  ["Design Input Required", "Choose from open-stock catalog silhouettes", "AI Prompts, Hand Sketches, STP 3D CAD, or Reference Samples"],
  ["Speed-to-Market", "15–35 Days (Rapid Launch)", "45–90 Days (Includes DFM & Tooling)"],
  ["Minimum Order Volume", "Flexible Low MOQ: 100–1,000 Units", "Custom Production Line Run: 3,000+ Units"],
  ["IP & Market Exclusivity", "Public Mold Base (Shared Geometry)", "100% Client-Owned Molds + NNN Legal Protection"],
  ["CapEx Refund Policy", "N/A (No Upfront Tooling)", "100% Tooling Fee Refund @ 500,000 units"],
];

export default function OemOdmPage() {
  const faqs = [
    ["What is the difference between OEM and ODM here?", "OEM commonly starts from a defined buyer specification or artwork; ODM can start from an existing verified model that is adapted through approved options. Scope is confirmed per project."],
    ["Can every component be customized?", "No. Available bodies, lids, seals, straws, colors, tooling, and packaging depend on the selected model and order configuration."],
    ["What are the benchmark MOQ and lead-time ranges?", "The ODM benchmark is 100–1,000 units with a 15–35 day launch range. The OEM benchmark is 3,000+ units with a 45–90 day development and tooling range."],
    ["What must be approved before production?", "The exact SKU, components, color, artwork, decoration, packaging, evidence plan, inspection criteria, and commercial order details."],
  ];

  return (
    <main>
      <PageHero
        eyebrow="Custom manufacturing"
        title="OEM/ODM Drinkware Built Around Your Brand"
        text="From model selection to packaging, we help buyers create a coherent product line with controlled cost, quality, and production timelines."
        image="/images/heroes/oem-odm-concept-to-production-v1.png"
        imageAlt="Custom stainless steel drinkware prototypes progressing from material samples to finished bottles and tumblers"
        className="oem-odm-page-hero"
      />
      <EditorialMeta />
      <DirectAnswer label="Customization answer">
        The lowest-risk path is to start from a verified model, define only the changes that create buyer value, and approve the final product, decoration, components, packaging, evidence plan, and inspection criteria as one controlled SKU.
      </DirectAnswer>

      <div id="production-process" className="oem-anchored-section">
        <ProcessSection />
      </div>

      <section id="choose-oem-odm" className="section section-alt oem-strategy-section" aria-labelledby="oem-odm-benchmark">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Step 1 · Choose your sourcing path</p>
            <h2 id="oem-odm-benchmark">Strategic Matrix: OEM vs ODM Sourcing Benchmark</h2>
            <p>Compare investment, design input, speed, MOQ, exclusivity, and refund policy before deciding how deeply to customize.</p>
          </div>
          <div className="oem-strategy-table-wrap">
            <table className="oem-strategy-table">
              <thead>
                <tr>
                  <th scope="col">Evaluation vector</th>
                  <th scope="col">ODM / private-label path</th>
                  <th scope="col">OEM / custom-development path</th>
                </tr>
              </thead>
              <tbody>
                {sourcingRows.map(([vector, odm, oem]) => (
                  <tr key={vector}>
                    <th scope="row">{vector}</th>
                    <td>{odm}</td>
                    <td>{oem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="define-customization" className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Step 2 · Define the product</p>
            <h2>Choose the Right Level of Customization</h2>
            <p>Start with a verified model, then confirm material, color, logo, components, packaging, MOQ, testing, and production timing for the order.</p>
          </div>
          <CustomTabs />
          <div className="page-grid oem-custom-summary">
            <article className="info-card"><span className="line-icon" /><h3>Color & Finish</h3><p>Powder coating, gloss coating, gradient finishes, metallic effects, and matte texture matching.</p></article>
            <article className="info-card"><span className="line-icon" /><h3>Logo & Graphics</h3><p>Laser engraving, screen printing, heat transfer, wraparound artwork, and premium gift presentation.</p></article>
            <article className="info-card"><span className="line-icon" /><h3>Packaging Design</h3><p>Retail boxes, mailer packaging, kraft packaging, custom inserts, and promotional bundle planning.</p></article>
          </div>
        </div>
      </section>

      <section className="section section-alt oem-engineering-section" aria-labelledby="engineering-specifications">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Step 3 · Verify engineering capability</p>
            <h2 id="engineering-specifications">Verified Technical Engineering Specifications</h2>
            <p>Confirmed metallurgy, vacuum thermodynamics, precision, branding, and quality-assurance parameters for custom drinkware engineering.</p>
          </div>
          <div className="oem-engineering-grid">
            {engineeringGroups.map((group) => (
              <article className="oem-spec-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="oem-spec-list">
                  {group.items.map(([label, description]) => (
                    <li key={label}>
                      <strong>{label}:</strong> {description}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section oem-ip-section" aria-labelledby="confidential-innovation">
        <div className="container">
          <div className="oem-ip-heading">
            <p className="eyebrow">Step 4 · Protect your project</p>
            <h2 id="confidential-innovation">IP Protection & Confidential Innovation Workflow</h2>
            <blockquote>“Good development control turns a buyer’s concept into a manufacturable product while limiting unnecessary disclosure at every stage.”</blockquote>
          </div>
          <div className="oem-ip-panel">
            <div className="oem-ip-copy">
              <p className="oem-kicker">Confidential-by-project engineering</p>
              <h3>Protect the idea while the product takes shape</h3>
              <p>OXYDIARY can develop from buyer-provided sketches, reference samples, appearance requirements, structure ideas, or 3D files. Sensitive information is introduced through a defined project brief and shared only as needed for quoting, engineering, sampling, tooling, and production.</p>
              <ul className="oem-ip-list">
                <li><strong>Confidential intake:</strong> agree the project scope, authorized contacts, file list, and confidentiality terms before sensitive details are released.</li>
                <li><strong>Design and DFM review:</strong> evaluate appearance, structure, materials, lid fit, function, decoration, and manufacturability through controlled revisions.</li>
                <li><strong>Tooling controls:</strong> state ownership, permitted use, storage, maintenance, modification, and end-of-project handling in writing.</li>
                <li><strong>Approval trail:</strong> identify the current drawing, sample, artwork, color, packaging, and test plan before production begins.</li>
              </ul>
              <p className="oem-legal-note">Manufacturing review is not a patent-clearance opinion. Buyers should confirm design rights and obtain qualified IP advice or a freedom-to-operate review when the project requires it.</p>
              <Link className="oem-text-link" href="/resources/drinkware-design-ip-protection-nda-tooling">Read the practical IP, NDA & tooling guide <span aria-hidden="true">→</span></Link>
            </div>
            <div className="oem-ip-visual" aria-label="Editable illustration of a controlled confidential project file">
              <div className="oem-file-tabs" aria-hidden="true"><span /><span /><span /></div>
              <div className="oem-nda-sheet">
                <p className="oem-doc-label">Controlled project file</p>
                <strong>CONFIDENTIAL</strong>
                <span>Development brief & NDA record</span>
                <div className="oem-doc-line oem-doc-line-wide" />
                <div className="oem-doc-line" />
                <div className="oem-doc-line oem-doc-line-short" />
                <div className="oem-doc-stamp">OXYDIARY<br />PROJECT CONTROL</div>
              </div>
              <div className="oem-file-caption">
                <span>01</span><p><strong>Need-to-know access</strong>Files move through defined quoting, engineering, approval, and production stages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="pre-production-approval" className="oem-anchored-section">
        <ComparisonTable
          title="Customization decisions to lock before production"
          headers={["Area", "Examples", "Required approval"]}
          rows={[
            ["Product", "Body, capacity, lid, straw, handle, accessories", "Final specification and physical sample"],
            ["Appearance", "Pantone color, finish, logo process, artwork", "Artwork proof and decorated sample"],
            ["Packaging", "Box, insert, labels, barcode, carton marks", "Dieline, print proof, and pack-out"],
            ["Evidence", "Material files, test scope, destination needs", "SKU-to-report match and test plan"],
            ["Commercial", "Quantity, Incoterm, destination, timing", "Confirmed quotation and purchase order"],
          ]}
        />
      </div>
      <div id="oem-odm-faq" className="oem-anchored-section">
        <FaqSection faqs={faqs} title="OEM/ODM questions" />
      </div>
      <ShippingQuoteSection />
    </main>
  );
}
