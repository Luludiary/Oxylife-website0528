import Image from "next/image";
import { BuyerSection, PageHero, StatsBand } from "../components/Sections";

export const metadata = {
  title: "About Us | OXYDIARY",
  description: "About OXYDIARY, a stainless steel drinkware manufacturer serving overseas B2B buyers.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About OXYDIARY"
        title="A Manufacturing Partner for Long-Term Drinkware Programs"
        text="We support buyers who need reliable production, clear communication, practical customization, and controlled export service."
      />
      <section className="section section-alt">
        <div className="container split">
          <div>
            <p className="eyebrow">Company profile</p>
            <h2>Built for Global B2B Cooperation</h2>
            <p>
              OXYDIARY focuses on stainless steel insulated drinkware,
              including bottles, tumblers, mugs, kids bottles, and accessories.
              Our service model is designed for brands, importers, distributors,
              and corporate gift suppliers that need consistent execution.
            </p>
            <ul className="content-list">
              <li>OEM/ODM product development</li>
              <li>Factory direct manufacturing and export support</li>
              <li>Private label, promotional, and retail packaging projects</li>
              <li>Repeat-order service for long-term buyer relationships</li>
            </ul>
          </div>
          <div className="about-manufacture-visual">
            <Image
              src="/images/about-manufacture-process.png"
              alt="OXYDIARY manufacture process workshops"
              width={750}
              height={665}
              quality={100}
            />
          </div>
        </div>
      </section>
      <StatsBand />
      <BuyerSection />
    </main>
  );
}
