import { indexableVerifiedProductSlugs } from "./products/[slug]/verifiedProducts";
import { resourceList } from "./_data/editorialContent";

const baseUrl = "https://oxylifediary.com";

const staticRoutes = [
  "",
  "/products",
  "/oem-odm",
  "/factory",
  "/quality",
  "/about",
  "/contact",
  "/faq",
  "/resources",
];

const categorySlugs = [
  "coffee-cups",
  "tumblers",
  "smart-bottles",
  "water-bottles",
  "sports-bottles",
  "kids-bottles",
  "plastic-drinkware",
  "glass-drinkware",
  "lunch-boxes",
];

const paginatedCategoryRoutes = [
  "/products/coffee-cups?page=2",
  "/products/tumblers?page=2",
  "/products/sports-bottles?page=2",
];

const curatedProductSlugs = [
  "custom-20oz-stainless-steel-coffee-tumbler",
  "custom-leak-proof-stainless-steel-tumbler-with-straw",
  "wholesale-24-32oz-insulated-sports-bottle",
  "custom-16-32oz-stainless-steel-water-bottle",
  "custom-500ml-bpa-free-kids-stainless-steel-water-bottle",
  "custom-30oz-stainless-steel-travel-tumbler",
  "custom-500ml-smart-temperature-bottle",
  "custom-32oz-stainless-steel-sports-bottle",
  "custom-kids-insulated-stainless-steel-bottle",
  ...indexableVerifiedProductSlugs,
];

export default function sitemap() {
  const lastModified = new Date("2026-07-31T00:00:00+08:00");

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/products" ? 0.9 : 0.7,
    })),
    ...categorySlugs.map((slug) => ({
      url: `${baseUrl}/products/${slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
    ...paginatedCategoryRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    })),
    ...curatedProductSlugs.map((slug) => ({
      url: `${baseUrl}/products/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...resourceList.map(({ slug, dates }) => ({
      url: `${baseUrl}/resources/${slug}`,
      lastModified: new Date(`${dates.modified}T00:00:00+08:00`),
      changeFrequency: "monthly",
      priority: 0.65,
    })),
  ];
}
