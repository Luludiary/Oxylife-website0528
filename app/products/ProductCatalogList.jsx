"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const PRODUCTS_PER_PAGE = 20;

export function ProductCatalogList({ products }) {
  const [sortMode, setSortMode] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProducts = useMemo(() => {
    const list = [...products];
    if (sortMode === "latest") {
      return list.sort((a, b) => b.latestRank - a.latestRank);
    }
    return list.sort((a, b) => a.popularityRank - b.popularityRank);
  }, [products, sortMode]);

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE));
  const activePage = Math.min(Math.max(currentPage, 1), totalPages);
  const pageStart = (activePage - 1) * PRODUCTS_PER_PAGE;
  const visibleProducts = sortedProducts.slice(pageStart, pageStart + PRODUCTS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  function changeSort(nextSortMode) {
    setSortMode(nextSortMode);
    setCurrentPage(1);
  }

  return (
    <div className="products-list-shell">
      <div className="products-list-toolbar">
        <div>
          <h2>All Drinkware Products</h2>
          <p>Browse custom drinkware models ready for OEM logo, color, and packaging projects.</p>
        </div>
        <div className="products-sort-control" aria-label="Product sorting">
          <button
            className={sortMode === "popularity" ? "is-active" : ""}
            type="button"
            onClick={() => changeSort("popularity")}
          >
            Sort by popularity
          </button>
          <button
            className={sortMode === "latest" ? "is-active" : ""}
            type="button"
            onClick={() => changeSort("latest")}
          >
            Sort by latest
          </button>
        </div>
      </div>

      <div className="products-list-grid">
        {visibleProducts.map((product) => (
          <Link className="products-list-card" href={`/products/${product.slug}`} key={product.slug}>
            <div className="products-list-image">
              <Image
                src={product.image}
                alt={product.primaryKeyword || product.title}
                width={520}
                height={520}
                quality={100}
              />
            </div>
            <h3>{product.title}</h3>
            <p>{product.capacities}</p>
          </Link>
        ))}
      </div>

      {totalPages > 1 ? (
        <nav className="category-pagination products-list-pagination" aria-label="Products pagination">
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
    </div>
  );
}
