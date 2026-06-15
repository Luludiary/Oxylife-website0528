"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CATEGORY_PRODUCTS_PER_PAGE = 20;

export function CategoryProductGrid({ products, categoryTitle }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(products.length / CATEGORY_PRODUCTS_PER_PAGE));
  const activePage = Math.min(Math.max(currentPage, 1), totalPages);
  const pageStart = (activePage - 1) * CATEGORY_PRODUCTS_PER_PAGE;
  const visibleProducts = products.slice(pageStart, pageStart + CATEGORY_PRODUCTS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
      <div className="category-product-grid">
        {visibleProducts.map((product) => (
          <Link className="category-product-card" href={`/products/${product.slug}`} key={product.slug}>
            <div className="category-product-image">
              <Image
                src={product.image}
                alt={product.primaryKeyword || product.title}
                width={520}
                height={520}
                quality={100}
              />
            </div>
            <h2>{product.title}</h2>
            <p>{product.capacities}</p>
          </Link>
        ))}
      </div>

      {totalPages > 1 ? (
        <nav className="category-pagination" aria-label={`${categoryTitle} pagination`}>
          {activePage > 1 ? (
            <button className="category-page-link is-wide" type="button" onClick={() => setCurrentPage(activePage - 1)}>
              Prev
            </button>
          ) : null}
          {pageNumbers.map((page) => (
            <button
              className={`category-page-link ${page === activePage ? "is-active" : ""}`}
              type="button"
              aria-current={page === activePage ? "page" : undefined}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}
            </button>
          ))}
          {activePage < totalPages ? (
            <button className="category-page-link is-wide" type="button" onClick={() => setCurrentPage(activePage + 1)}>
              Next
            </button>
          ) : null}
        </nav>
      ) : null}
    </>
  );
}
