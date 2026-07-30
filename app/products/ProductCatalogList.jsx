import Image from "next/image";
import Link from "next/link";

export function ProductCatalogList({ products }) {
  const sortedProducts = [...products].sort(
    (a, b) => a.popularityRank - b.popularityRank,
  );

  return (
    <div className="products-list-shell">
      <div className="products-list-toolbar">
        <div>
          <h2>Verified & Review-Pending Product Models</h2>
          <p>
            Category pages and verified models are ready for search. Review-pending
            models remain browseable while their material, image, and specifications
            are checked against the source product.
          </p>
        </div>
      </div>

      <div className="products-list-grid">
        {sortedProducts.map((product) => (
          <Link className="products-list-card" href={`/products/${product.slug}`} key={product.slug}>
            <div className="products-list-image">
              <Image
                src={product.image}
                alt={product.primaryKeyword || product.title}
                width={520}
                height={520}
                sizes="(max-width: 640px) 92vw, (max-width: 980px) 45vw, 24vw"
                quality={86}
              />
            </div>
            <h3>{product.title}</h3>
            <p>{product.capacities}</p>
            <span className="product-review-state">
              {product.indexable === false ? "Specifications under review" : "Source checked"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
