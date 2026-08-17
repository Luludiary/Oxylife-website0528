import Image from "next/image";
import Link from "next/link";

function pageHref(categorySlug, page) {
  const basePath = `/products/${categorySlug}`;
  return page === 1 ? basePath : `${basePath}?page=${page}`;
}

export function CategoryProductGrid({
  products,
  categorySlug,
  currentPage,
  totalPages,
}) {

  return (
    <>
      <div className="category-product-grid" id="category-product-grid">
        {products.map((product) => {
          return (
            <Link
              className="category-product-card"
              href={`/products/${product.slug}`}
              key={product.slug}
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
      {totalPages > 1 ? (
        <nav className="category-pagination" aria-label="Coffee cup product pages">
          {currentPage > 1 ? (
            <Link
              className="category-page-link is-wide"
              href={pageHref(categorySlug, currentPage - 1)}
              rel="prev"
            >
              Previous
            </Link>
          ) : null}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <Link
                aria-current={page === currentPage ? "page" : undefined}
                className={`category-page-link${page === currentPage ? " is-active" : ""}`}
                href={pageHref(categorySlug, page)}
                key={page}
              >
                {page}
              </Link>
            ),
          )}
          {currentPage < totalPages ? (
            <Link
              className="category-page-link is-wide"
              href={pageHref(categorySlug, currentPage + 1)}
              rel="next"
            >
              Next
            </Link>
          ) : null}
        </nav>
      ) : null}
    </>
  );
}
