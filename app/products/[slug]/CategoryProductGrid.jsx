"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const INITIAL_VISIBLE_PRODUCTS = 12;

export function CategoryProductGrid({ products }) {
  const [showAll, setShowAll] = useState(false);
  const hasMoreProducts = products.length > INITIAL_VISIBLE_PRODUCTS;
  const remainingProducts = products.length - INITIAL_VISIBLE_PRODUCTS;

  return (
    <>
      <div className="category-product-grid" id="category-product-grid">
        {products.map((product, index) => {
          const isInitiallyHidden = !showAll && index >= INITIAL_VISIBLE_PRODUCTS;

          return (
            <Link
              className="category-product-card"
              href={`/products/${product.slug}`}
              key={product.slug}
              hidden={isInitiallyHidden}
            >
              <div className="category-product-image">
                <Image
                  src={product.image}
                  alt={product.primaryKeyword || product.title}
                  width={520}
                  height={520}
                  sizes="(max-width: 640px) 92vw, (max-width: 980px) 45vw, 24vw"
                  quality={86}
                />
              </div>
              <h2>{product.title}</h2>
              <p>{product.capacities}</p>
            </Link>
          );
        })}
      </div>
      {hasMoreProducts ? (
        <div className="category-products-toggle">
          <button
            aria-controls="category-product-grid"
            aria-expanded={showAll}
            className="btn btn-outline"
            onClick={() => setShowAll((currentValue) => !currentValue)}
            type="button"
          >
            {showAll ? "Show Fewer Products" : `Load More Products (${remainingProducts} remaining)`}
          </button>
        </div>
      ) : null}
    </>
  );
}
