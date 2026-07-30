import Image from "next/image";
import { BuyerSection, PageHero, StatsBand } from "../components/Sections";
import { DirectAnswer, EditorialMeta, FaqSection } from "../components/GeoContent";

export const metadata = {
  title: "About Us",
  description: "About OXYDIARY, a B2B supplier of stainless steel, plastic, and glass drinkware plus lunch boxes and private-label packaging support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const faqs = [
    ["What products does OXYDIARY focus on?", "The main focus is stainless steel drinkware, with selected plastic and glass drinkware plus lunch boxes for B2B programs."],
    ["Who does OXYDIARY work with?", "Brands, importers, distributors, corporate gift suppliers, retailers, and other buyers that need model-specific customization and export coordination."],
    ["Where is OXYDIARY located?", "The published contact address is 181 Yingbin Avenue, Xiangzhu Town, Yongkang, Zhejiang 321313, P.R. China."],
  ];

  return (
    <main>
      <PageHero
        eyebrow="About OXYDIARY"
        title="A Manufacturing Partner for Long-Term Drinkware Programs"
        text="We support buyers who need reliable production, clear communication, practical customization, and controlled export service."
      />
      <EditorialMeta reviewedBy="OXYDIARY Commercial & Product Team" />
      <DirectAnswer label="Company focus">
        OXYDIARY is a B2B sourcing and manufacturing coordination partner focused on custom stainless steel drinkware, with selected plastic and glass drinkware and lunch boxes. Product, manufacturing, evidence, MOQ, and timing are confirmed against the exact project.
      </DirectAnswer>
      <section className="section section-alt">
        <div className="container split">
          <div>
            <p className="eyebrow">Company profile</p>
            <h2>Built for Global B2B Cooperation</h2>
            <p>
              OXYDIARY focuses on stainless steel insulated drinkware and also
              offers selected plastic and glass drinkware plus lunch boxes.
              Our service model is designed for brands, importers, distributors,
              and corporate gift suppliers that need consistent execution.
            </p>
            <ul className="content-list">
              <li>OEM/ODM product development</li>
              <li>Product-specific manufacturing coordination and export support</li>
              <li>Private label, promotional, and retail packaging projects</li>
              <li>Repeat-order service for long-term buyer relationships</li>
            </ul>
          </div>
          <div className="about-manufacture-visual">
            <Image
              src="/images/about-manufacture-process.png"
              alt="OXYDIARY manufacturing coordination process"
              width={750}
              height={665}
              quality={86}
            />
          </div>
        </div>
      </section>
      <StatsBand />
      <BuyerSection />
      <FaqSection faqs={faqs} title="About OXYDIARY" />
    </main>
  );
}
