"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const inspectionSteps = [
  {
    number: "01",
    title: "Spray Painting Inspection",
    text: "Every coated bottle is checked for surface coverage, adhesion, dust marks, and finish consistency before moving forward.",
    image: "/images/inspection/01-spray-painting-inspection.png",
    icon: "spray",
  },
  {
    number: "02",
    title: "Metalworking Inspection",
    text: "Bottle bodies are inspected for forming accuracy, mouth dimensions, threading, and visible structural defects.",
    image: "/images/inspection/02-metalworking-inspection.png",
    icon: "gauge",
  },
  {
    number: "03",
    title: "Polishing Inspection",
    text: "Polished stainless steel surfaces are reviewed for smoothness, scratches, burrs, and clean reflective quality.",
    image: "/images/inspection/03-polishing-inspection.png",
    icon: "spark",
  },
  {
    number: "04",
    title: "Color Difference Check",
    text: "Finished colors are compared under controlled lighting to keep bulk production aligned with approved samples.",
    image: "/images/inspection/04-color-difference-check.png",
    icon: "palette",
  },
  {
    number: "05",
    title: "Vacuum Test",
    text: "Thermal performance is tested to verify vacuum integrity and insulation reliability for every production batch.",
    image: "/images/inspection/05-thermal-insulation-performance-test.png",
    icon: "thermal",
  },
  {
    number: "06",
    title: "Packaging Line Inspection",
    text: "Final goods are checked during assembly and packaging to confirm logo, accessories, cartons, and shipment readiness.",
    image: "/images/inspection/06-packaging-line-inspection.png",
    icon: "package",
  },
];

function InspectionIcon({ type }) {
  const paths = {
    spray: (
      <>
        <path d="M8 4h7l1.5 3H6.5L8 4Z" />
        <path d="M7 7h10v4H7z" />
        <path d="M10 11v8h4v-8" />
        <path d="M18 8h2M19 12h2M18 16h2" />
      </>
    ),
    gauge: (
      <>
        <path d="M5 18a7 7 0 1 1 14 0" />
        <path d="m12 15 4-5" />
        <path d="M8 18h8" />
        <path d="M7.5 13.5 6 12M16.5 13.5 18 12" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3 10.2 9.2 4 11l6.2 1.8L12 19l1.8-6.2L20 11l-6.2-1.8L12 3Z" />
        <path d="M5 4v3M3.5 5.5h3M18 17v3M16.5 18.5h3" />
      </>
    ),
    palette: (
      <>
        <path d="M12 4a8 8 0 0 0 0 16h1.5a1.8 1.8 0 0 0 .8-3.4 1.7 1.7 0 0 1 .8-3.2H16a4 4 0 0 0 0-8.1A8.2 8.2 0 0 0 12 4Z" />
        <path d="M7.8 10h.01M10.5 7.8h.01M14 8.2h.01" />
      </>
    ),
    thermal: (
      <>
        <path d="M10 14.5V5a2 2 0 1 1 4 0v9.5a4 4 0 1 1-4 0Z" />
        <path d="M12 16v-5" />
        <path d="M17 6h3M17 10h2" />
      </>
    ),
    package: (
      <>
        <path d="M4 8 12 4l8 4-8 4-8-4Z" />
        <path d="M4 8v8l8 4 8-4V8" />
        <path d="M12 12v8" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {paths[type]}
    </svg>
  );
}

export function QualityInspection() {
  const [active, setActive] = useState(0);
  const current = inspectionSteps[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % inspectionSteps.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="quality-inspection">
      <div className="inspection-visual">
        {inspectionSteps.map((item, index) => (
          <Image
            className={`inspection-image ${index === active ? "is-active" : ""}`}
            src={item.image}
            alt={item.title}
            width={900}
            height={900}
            sizes="(max-width: 980px) 100vw, 50vw"
            quality={90}
            priority={index === 0}
            key={item.image}
          />
        ))}
      </div>
      <div className="inspection-content">
        {inspectionSteps.map((item, index) => (
          <button
            className={`inspection-step ${index === active ? "is-active" : ""}`}
            type="button"
            key={item.number}
            onClick={() => setActive(index)}
          >
            <span className="inspection-icon">
              <InspectionIcon type={item.icon} />
            </span>
            <span className="inspection-copy">
              <strong>{item.title}</strong>
              <small>{item.text}</small>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
