import Image from "next/image";
import Link from "next/link";

export function CategoryProductGrid({ products }) {
  return (
    <div className="category-product-grid">
      {products.map((product) => (
        <Link className="category-product-card" href={`/products/${product.slug}`} key={product.slug}>
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
      ))}
    </div>
  );
}
