import Image from "next/image";
import Link from "next/link";
import { bulkProductDetails } from "./[slug]/bulkProducts";
import {
  redirectedProductSlugs,
  verifiedProductDetails,
} from "./[slug]/verifiedProducts";
import { ProductCatalogList } from "./ProductCatalogList";

export const metadata = {
  title: "Custom Drinkware & Lunch Boxes",
  description:
    "Custom stainless steel, plastic, and glass drinkware plus lunch boxes for B2B buyers. Compare verified models, materials, capacities, customization, and compliance scope.",
  alternates: { canonical: "/products" },
};

const categories = [
  {
    href: "/products/coffee-cups",
    title: "Coffee Cups",
    subtitle: "For Cafes & Retail Gifts",
    image: "/images/products/category-coffee-cups-quote-update.png",
  },
  {
    href: "/products/tumblers",
    title: "Tumblers",
    subtitle: "For Retail & Outdoor Markets",
    image: "/images/products/category-tumblers.png",
  },
  {
    href: "/products/smart-bottles",
    title: "Smart Bottles",
    subtitle: "For Premium Gift Projects",
    image: "/images/products/category-smart-bottles.png",
  },
  {
    href: "/products/water-bottles",
    title: "Water Bottles",
    subtitle: "For Office, Sports & Travel",
    image: "/images/products/category-water-bottles.png",
  },
  {
    href: "/products/sports-bottles",
    title: "Sports Bottles",
    subtitle: "For Fitness & Outdoor Use",
    image: "/images/products/category-sports-bottles.png",
  },
  {
    href: "/products/kids-bottles",
    title: "Kids Bottles",
    subtitle: "For School & Children's Markets",
    image: "/images/products/category-kids-bottles.png",
  },
  {
    href: "/products/plastic-drinkware",
    title: "Plastic Drinkware",
    subtitle: "For Sports & Promotional Programs",
    image: "/images/products/alibaba-bulk/sports-bottle-7648-1.avif",
  },
  {
    href: "/products/glass-drinkware",
    title: "Glass Drinkware",
    subtitle: "For Retail & Hospitality",
    image: "/images/products/alibaba-bulk/16oz-frosted-tumbler-8009-1.avif",
  },
  {
    href: "/products/lunch-boxes",
    title: "Lunch Boxes",
    subtitle: "For School, Office & Retail",
    image: "/images/products/lunch-boxes/pp-lunch-box-1.avif",
  },
];

const customOptions = [
  {
    title: "Logo Printing",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 16.5 15.5 5l3.5 3.5L7.5 20H4v-3.5Z" />
        <path d="m13.5 7 3.5 3.5" />
      </svg>
    ),
  },
  {
    title: "Color Matching",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4a8 8 0 1 0 0 16h1.2a1.8 1.8 0 0 0 .5-3.5l-.7-.2a1.7 1.7 0 0 1 .5-3.3H16a4 4 0 0 0 0-8h-4Z" />
        <path d="M7.5 10h.01M10 7.5h.01M14 7.5h.01" />
      </svg>
    ),
  },
  {
    title: "Lid Options",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 8h10v12H7V8Z" />
        <path d="M6 8h12M8 5h8l1 3H7l1-3Z" />
      </svg>
    ),
  },
  {
    title: "Retail Packaging",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M4.5 7.8 12 12l7.5-4.2M12 12v8.5" />
      </svg>
    ),
  },
];

const factoryItems = [
  {
    title: "Factory Building",
    image: "/images/factory-background.png",
  },
  {
    title: "Production Line",
    image: "/images/inspection/06-packaging-line-inspection.png",
  },
  {
    title: "Quality Inspection",
    image: "/images/inspection/03-polishing-inspection.png",
  },
  {
    title: "Warehouse & Packaging",
    image: "/images/process/mass-production.png",
  },
];

const featuredProducts = [
  {
    category: "Tumblers",
    title: "Leak Proof Tumbler with Straw",
    specs: "380ml / 500ml - Custom Logo",
    image: "/images/products/alibaba/leak-proof-tumbler-1.actual-png.png",
    href: "/products/custom-leak-proof-stainless-steel-tumbler-with-straw",
  },
  {
    category: "Sports Bottles",
    title: "24oz/32oz Sports Bottle",
    specs: "24oz / 32oz - Vacuum Insulated",
    image: "/images/products/alibaba/sports-tumbler-24-32-1.actual-png.png",
    href: "/products/wholesale-24-32oz-insulated-sports-bottle",
  },
  {
    category: "Coffee Cups",
    title: "20oz Coffee Tumbler",
    specs: "20oz / 600ml - Custom Logo",
    image: "/images/products/alibaba/coffee-tumbler-20oz-1.actual-png.png",
    href: "/products/custom-20oz-stainless-steel-coffee-tumbler",
  },
  {
    category: "Water Bottles",
    title: "16-32oz Water Bottle",
    specs: "16oz / 19oz / 24oz / 32oz",
    image: "/images/products/alibaba/outdoor-sports-bottle-1.actual-png.png",
    href: "/products/custom-16-32oz-stainless-steel-water-bottle",
  },
  {
    category: "Kids Bottles",
    title: "500ml Kids Water Bottle",
    specs: "500ml - BPA-Free Flip Straw",
    image: "/images/products/alibaba/kids-bottle-500ml-1.actual-png.png",
    href: "/products/custom-500ml-bpa-free-kids-stainless-steel-water-bottle",
  },
];

const manualProducts = featuredProducts.map((product, index) => ({
  slug: product.href.replace("/products/", ""),
  title: product.title,
  image: product.image,
  capacities: product.specs,
  primaryKeyword: product.title,
  popularityRank: index,
  latestRank: index,
  indexable: true,
}));

const bulkProducts = Object.entries(bulkProductDetails)
  .filter(([slug]) => !redirectedProductSlugs.includes(slug))
  .map(([slug, product], index) => ({
    slug,
    title: product.title,
    image: product.image,
    capacities: product.capacities,
    primaryKeyword: product.primaryKeyword,
    popularityRank: manualProducts.length + index,
    latestRank: manualProducts.length + index,
    indexable: false,
  }));

const verifiedProducts = Object.entries(verifiedProductDetails).map(
  ([slug, product], index) => ({
    slug,
    title: product.title,
    image: product.image,
    capacities: product.capacities,
    primaryKeyword: product.primaryKeyword,
    popularityRank: manualProducts.length + index,
    latestRank: manualProducts.length + index,
    indexable: true,
  }),
);

const catalogProducts = [
  ...manualProducts,
  ...verifiedProducts,
  ...bulkProducts.map((product, index) => ({
    ...product,
    popularityRank: manualProducts.length + verifiedProducts.length + index,
  })),
];

export default function ProductsPage() {
  return (
    <main className="products-page">
      <section className="products-catalog-hero">
        <div className="container products-hero-inner">
          <div className="products-hero-copy">
            <h1>Custom Drinkware & Lunch Box Product Series</h1>
            <p>
              Compare stainless steel, plastic, and glass drinkware plus lunch
              boxes for private-label, retail, promotional, and hospitality programs.
            </p>
            <div className="products-hero-actions">
              <Link className="btn btn-primary" href="#product-list">
                View Products
              </Link>
              <Link className="btn btn-green" href="/contact">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="products-catalog-section" id="product-list">
        <div className="container">
          <ProductCatalogList products={catalogProducts} />
        </div>
      </section>

      <section className="products-custom-strip">
        <div className="container products-custom-inner">
          <h2>Customization Confirmed by Product & Order</h2>
          <div className="products-custom-options">
            {customOptions.map((option) => (
              <div className="products-custom-option" key={option.title}>
                {option.icon}
                <span>{option.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-catalog-section products-factory-section">
        <div className="container">
          <div className="products-section-head">
            <h2>Inside Our Factory</h2>
            <p>A quick look at production, inspection, assembly, and packaging activities used for qualified orders.</p>
          </div>
          <div className="products-factory-grid">
            {factoryItems.map((item) => (
              <article className="products-factory-card" key={item.title}>
                {item.image ? (
                  <Image src={item.image} alt={item.title} width={520} height={320} />
                ) : (
                  <div className="products-empty-image" />
                )}
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="products-catalog-section products-featured-section">
        <div className="container">
          <div className="products-section-head">
            <h2>Featured Product Series</h2>
          </div>
          <div className="products-featured-grid">
            {featuredProducts.map((product) => (
              <Link className="products-featured-card" href={product.href} key={product.title}>
                <Image src={product.image} alt={product.title} width={440} height={440} />
                <span className="products-featured-category">{product.category}</span>
                <h3>{product.title}</h3>
                <p>{product.specs}</p>
                <span>View Details</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="products-help-band">
        <div className="container products-help-inner">
          <div>
            <h2>Need Help Choosing the Right Series?</h2>
            <p>
              Tell us your market, capacity, logo method, and target price.
              Our team will recommend suitable products.
            </p>
          </div>
          <Link className="btn btn-green" href="/contact">
            Request Product Recommendation
          </Link>
        </div>
      </section>

      <section className="products-assurance-strip">
        <div className="container">
          <span>Model-Specific Specifications</span>
          <span>Compliance Matched per SKU</span>
          <span>Documented Order Milestones</span>
          <span>Private-Label Support</span>
        </div>
      </section>
    </main>
  );
}


