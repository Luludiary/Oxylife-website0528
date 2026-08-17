"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const finishOptions = [
  {
    title: "Electroplating",
    image: "/images/finish-electroplating.png",
    text: "Mirror-like metallic color with a premium reflective surface for high-end bottle programs.",
  },
  {
    title: "Glitter Powder Coating",
    image: "/images/finish-glitter-powder-coating.png",
    text: "Sparkling powder finish with durable coverage, ideal for fashion, gifting, and seasonal collections.",
  },
  {
    title: "Hydro Dipping",
    image: "/images/finish-hydro-dipping.png",
    text: "Immersive pattern transfer for all-around decorative designs, including floral, marble, and custom effects.",
  },
  {
    title: "Powder Coating",
    image: "/images/finish-powder-coating.png",
    text: "Matte or textured coating with strong adhesion, scratch resistance, and stable bulk color matching.",
  },
  {
    title: "Rainbow Paint",
    image: "/images/finish-rainbow-paint.png",
    text: "Gradient color effect with bright visual appeal for retail shelves and lifestyle drinkware lines.",
  },
  {
    title: "Soft-Touch Coating",
    image: "/images/finish-rhinestone-decoration.png",
    text: "Smooth velvety hand feel with refined color presentation for premium private-label drinkware.",
  },
  {
    title: "Rubber Coating",
    image: "/images/finish-rubber-coating.png",
    text: "Soft rubberized feel with comfortable grip and a muted surface for outdoor and daily-use bottles.",
  },
  {
    title: "Rhinestone Decoration",
    image: "/images/finish-soft-touch-coating.png",
    text: "Decorative rhinestone surface for eye-catching luxury gifts, events, and boutique collections.",
  },
  {
    title: "Spray Painting",
    image: "/images/finish-spray-painting.png",
    text: "Flexible color finishing for solid, matte, glossy, and customized brand color requirements.",
  },
  {
    title: "Water Transfer Printing",
    image: "/images/finish-water-transfer-printing.png",
    text: "Realistic pattern application for woodgrain, camouflage, marble, and full-surface decorative finishes.",
  },
];

const brandingOptions = [
  {
    title: "3D Printing",
    image: "/images/branding-3d-printing.png",
    text: "Raised logo texture with a dimensional touch, ideal for premium retail lines and gift programs.",
  },
  {
    title: "5D Printing",
    image: "/images/branding-5d-printing.png",
    text: "High-gloss layered branding with stronger depth and shine for eye-catching shelf presentation.",
  },
  {
    title: "Heat Transfer",
    image: "/images/branding-heat-transfer.png",
    text: "Full-color artwork with smooth gradients, suitable for complex patterns and large logo areas.",
  },
  {
    title: "Laser Engraving",
    image: "/images/branding-laser-engraving.png",
    text: "Durable, precise, and refined mark that resists fading on stainless steel and coated surfaces.",
  },
  {
    title: "Silk Screen Printing",
    image: "/images/branding-silk-screen-printing.png",
    text: "Cost-efficient spot-color printing for clean brand logos, simple artwork, and bulk production.",
  },
];

const lidOptions = [
  "magnetic-lid2.png",
  "carry-lid.png",
  "straw-lid.png",
  "owala-lid5.png",
  "40oz-lid3.png",
  "40oz-lid4.png",
  "owala-lid.png",
  "flip-lid.png",
  "owala-lid2.png",
  "plastic-lid.png",
  "straw-lid4.jpg",
  "straw-lid3.jpg",
  "push-lid.png",
  "push-lid2.png",
  "40oz-lid2.jpg",
  "straw-lid2.jpg",
  "flip-lid4.jpg",
  "flip-lid3.jpg",
  "flip-lid2.jpg",
  "40oz-lid.jpg",
  "owala-lid4.jpg",
  "owala-lid3.jpg",
  "carry-lid3.jpg",
  "carry-lid2.jpg",
  "carry-lid.jpg",
].map((fileName) => ({
  image: `/images/lids/${fileName}`,
  alt: "Drinkware lid design option",
}));

export function CustomTabs() {
  const [active, setActive] = useState("cml");
  const finishTrackRef = useRef(null);
  const lidTrackRef = useRef(null);

  function scrollTrack(trackRef, direction) {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const atStart = track.scrollLeft <= 8;
    const atEnd = track.scrollLeft >= maxScroll - 8;

    if (direction > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction < 0 && atStart) {
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }

    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  }

  function scrollFinish(direction) {
    scrollTrack(finishTrackRef, direction);
  }

  function scrollLid(direction) {
    scrollTrack(lidTrackRef, direction);
  }

  useEffect(() => {
    if (active !== "cml" && active !== "lid") return undefined;

    const timer = window.setInterval(() => {
      scrollTrack(active === "cml" ? finishTrackRef : lidTrackRef, 1);
    }, active === "cml" ? 4500 : 3800);

    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <>
      <div className="tabs" role="tablist">
        <button
          className={`tab-button ${active === "cml" ? "is-active" : ""}`}
          type="button"
          onClick={() => setActive("cml")}
        >
          Color &middot; Material &middot; Finish
        </button>
        <button
          className={`tab-button ${active === "lid" ? "is-active" : ""}`}
          type="button"
          onClick={() => setActive("lid")}
        >
          Lid Design
        </button>
        <button
          className={`tab-button ${active === "logo" ? "is-active" : ""}`}
          type="button"
          onClick={() => setActive("logo")}
        >
          Logo & Branding
        </button>
      </div>
      {active === "cml" ? (
        <div className="finish-carousel">
          <button
            className="carousel-button carousel-button-prev"
            type="button"
            aria-label="Previous finish options"
            onClick={() => scrollFinish(-1)}
          >
            &lsaquo;
          </button>
          <div className="branding-grid finish-grid" ref={finishTrackRef}>
            {finishOptions.map((item) => (
              <article className="branding-card" key={item.title}>
                <div className="branding-image-wrap">
                  <Image
                    className="branding-image"
                    src={item.image}
                    alt={`${item.title} finish sample on OxyDiary bottle`}
                    width={520}
                    height={520}
                    sizes="(max-width: 640px) 86vw, (max-width: 980px) 44vw, 20vw"
                    quality={90}
                  />
                </div>
                <div className="branding-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <button
            className="carousel-button carousel-button-next"
            type="button"
            aria-label="Next finish options"
            onClick={() => scrollFinish(1)}
          >
            &rsaquo;
          </button>
        </div>
      ) : active === "lid" ? (
        <div className="finish-carousel lid-carousel">
          <button
            className="carousel-button carousel-button-prev"
            type="button"
            aria-label="Previous lid designs"
            onClick={() => scrollLid(-1)}
          >
            &lsaquo;
          </button>
          <div className="lid-grid" ref={lidTrackRef}>
            {lidOptions.map((item) => (
              <article className="lid-card" key={item.image}>
                <div className="lid-image-wrap">
                  <Image
                    className="lid-image"
                    src={item.image}
                    alt={item.alt}
                    width={520}
                    height={520}
                    sizes="(max-width: 640px) 86vw, (max-width: 980px) 44vw, 20vw"
                    quality={90}
                  />
                </div>
              </article>
            ))}
          </div>
          <button
            className="carousel-button carousel-button-next"
            type="button"
            aria-label="Next lid designs"
            onClick={() => scrollLid(1)}
          >
            &rsaquo;
          </button>
        </div>
      ) : active === "logo" ? (
        <div className="branding-grid">
          {brandingOptions.map((item) => (
            <article className="branding-card" key={item.title}>
              <div className="branding-image-wrap">
                <Image
                  className="branding-image"
                  src={item.image}
                  alt={`${item.title} logo technique sample on OxyDiary tumbler`}
                  width={520}
                  height={520}
                  sizes="(max-width: 640px) 90vw, (max-width: 980px) 45vw, 20vw"
                  quality={90}
                />
              </div>
              <div className="branding-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </>
  );
}
