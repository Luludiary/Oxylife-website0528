"use client";

import { useState } from "react";
import Image from "next/image";

export function ProductGallery({ title, images }) {
  const galleryImages = images?.length ? images : [];
  const [activeImage, setActiveImage] = useState(galleryImages[0]);
  const [thumbStart, setThumbStart] = useState(0);
  const visibleThumbs = galleryImages.slice(thumbStart, thumbStart + 4);
  const canMoveThumbs = galleryImages.length > 4;

  const moveThumbs = (direction) => {
    setThumbStart((current) => {
      const next = current + direction;
      return Math.max(0, Math.min(next, galleryImages.length - 4));
    });
  };

  if (!galleryImages.length) {
    return null;
  }

  return (
    <div className="product-gallery">
      <div className="product-main-image">
        <Image
          src={activeImage}
          alt={`${title} main product image`}
          width={920}
          height={920}
          sizes="(max-width: 640px) calc(100vw - 56px), (max-width: 980px) calc(100vw - 80px), 46vw"
          quality={90}
          priority
        />
      </div>
      <div className="product-thumbs-wrap">
        {canMoveThumbs && (
          <button
            className="product-thumb-arrow"
            type="button"
            onClick={() => moveThumbs(-1)}
            disabled={thumbStart === 0}
            aria-label="Show previous product images"
          >
            {"<"}
          </button>
        )}
        <div className="product-thumbs" aria-label={`${title} image gallery`}>
          {visibleThumbs.map((image, index) => (
          <button
            className={`product-thumb ${activeImage === image ? "is-active" : ""}`}
            key={image}
            type="button"
            onClick={() => setActiveImage(image)}
            aria-label={`Show ${title} image ${thumbStart + index + 1}`}
            aria-pressed={activeImage === image}
          >
            <Image
              src={image}
              alt={`${title} thumbnail ${thumbStart + index + 1}`}
              width={180}
              height={180}
              sizes="(max-width: 640px) 22vw, 90px"
              quality={84}
            />
          </button>
          ))}
        </div>
        {canMoveThumbs && (
          <button
            className="product-thumb-arrow"
            type="button"
            onClick={() => moveThumbs(1)}
            disabled={thumbStart >= galleryImages.length - 4}
            aria-label="Show next product images"
          >
            {">"}
          </button>
        )}
      </div>
    </div>
  );
}
