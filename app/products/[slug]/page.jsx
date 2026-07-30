import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteForm } from "../../components/QuoteForm";
import { products } from "../../components/Sections";
import { CategoryProductGrid } from "./CategoryProductGrid";
import { ProductGallery } from "./ProductGallery";
import { bulkProductDetails } from "./bulkProducts";
import { verifiedProductDetails } from "./verifiedProducts";
import { categoryGuides } from "../../_data/categoryGuides";
import {
  Checklist,
  ComparisonTable,
  ContentSections,
  DirectAnswer,
  EditorialMeta,
  FaqSection,
  RelatedLinks,
  faqSchema,
} from "../../components/GeoContent";

const baseProductDetails = {
  "coffee-cups": {
    category: "Coffee Cup Series",
    title: "Custom Stainless Steel Coffee Cup",
    image: "/images/products/coffee-cup-transparent.png",
    gallery: [
      "/images/products/category-coffee-cups.png",
      "/images/products/coffee-cup-transparent.png",
      "/images/products/coffee-cup.png",
    ],
    capacities: "12oz / 16oz / 20oz",
  },
  tumblers: {
    category: "Tumbler Series",
    title: "Custom Stainless Steel Tumbler",
    image: "/images/products/tumbler-transparent.png",
    gallery: [
      "/images/products/category-tumblers.png",
      "/images/products/tumbler-transparent.png",
      "/images/products/tumbler.png",
    ],
    capacities: "20oz / 30oz / 40oz",
  },
  "smart-bottles": {
    category: "Smart Bottle Series",
    title: "Custom Smart Stainless Steel Bottle",
    image: "/images/products/smart-bottle-transparent.png",
    gallery: [
      "/images/products/category-smart-bottles.png",
      "/images/products/smart-bottle-transparent.png",
      "/images/products/smart-bottle.png",
    ],
    capacities: "500ml / 650ml / 750ml",
  },
  "water-bottles": {
    category: "Water Bottle Series",
    title: "Custom Stainless Steel Water Bottle",
    image: "/images/products/water-bottle-transparent.png",
    gallery: [
      "/images/products/category-water-bottles.png",
      "/images/products/water-bottle-transparent.png",
      "/images/products/water-bottle.png",
    ],
    capacities: "500ml / 750ml / 1000ml",
  },
  "sports-bottles": {
    category: "Sports Bottle Series",
    title: "Custom Stainless Steel Sports Bottle",
    image: "/images/products/sports-bottles-transparent.png",
    gallery: [
      "/images/products/category-sports-bottles.png",
      "/images/products/sports-bottles-transparent.png",
      "/images/products/sports-bottles.png",
    ],
    capacities: "500ml / 750ml / 1000ml / 1500ml",
  },
  "kids-bottles": {
    category: "Kids Bottle Series",
    title: "Custom Stainless Steel Kids Bottle",
    image: "/images/products/category-kids-bottles.png",
    gallery: [
      "/images/products/category-kids-bottles.png",
      "/images/products/water-bottle-transparent.png",
      "/images/products/water-bottle.png",
    ],
    capacities: "350ml / 500ml / 600ml",
  },
  "plastic-drinkware": {
    category: "Plastic Drinkware Series",
    title: "Custom Plastic Drinkware",
    image: "/images/products/alibaba-bulk/sports-bottle-7648-1.avif",
    gallery: [
      "/images/products/alibaba-bulk/sports-bottle-7648-1.avif",
      "/images/products/alibaba-bulk/750ml-stainless-steel-sports-bottle-8189-1.jpg",
    ],
    capacities: "Capacity and resin confirmed by model",
    metaDescription:
      "Custom plastic cups and sports bottles for wholesale and private-label projects. Compare material, capacity, closure, logo, packaging, MOQ, and testing by model.",
    collectionIntro:
      "Compare verified plastic drinkware by use case, capacity, resin, closure, decoration, and destination-market requirements. Material and BPA-related claims are confirmed per SKU, not applied across the whole collection.",
  },
  "glass-drinkware": {
    category: "Glass Drinkware Series",
    title: "Custom Glass Drinkware",
    image: "/images/products/alibaba-bulk/16oz-frosted-tumbler-8009-1.avif",
    gallery: [
      "/images/products/alibaba-bulk/16oz-frosted-tumbler-8009-1.avif",
      "/images/products/alibaba-bulk/1l-frosted-coffee-cup-5062-1.avif",
    ],
    capacities: "16oz / 20oz / 1L verified models",
    metaDescription:
      "Custom borosilicate glass tumblers and carafes for wholesale, hospitality, retail, and private-label programs. Confirm components, packaging, and testing by model.",
    collectionIntro:
      "This collection covers verified borosilicate glass tumblers and carafes. Buyers can compare capacity, lid or infuser configuration, decoration method, protective packaging, and test requirements for the exact model.",
  },
  "lunch-boxes": {
    category: "Lunch Box Series",
    title: "Custom Lunch Boxes & Insulated Food Containers",
    image: "/images/products/lunch-boxes/pp-lunch-box-1.avif",
    gallery: [
      "/images/products/lunch-boxes/pp-lunch-box-1.avif",
      "/images/products/lunch-boxes/stainless-lunch-box-1.avif",
    ],
    capacities: "Compact cup and 1L / 2L / 3L box models",
    metaDescription:
      "Custom stainless steel insulated lunch cups and PP buckle lunch boxes for wholesale and private-label programs. Compare material, capacity, closure, logo, and packaging.",
    collectionIntro:
      "Choose between a compact stainless steel insulated food cup and large-capacity PP buckle lunch boxes. Microwave, insulation, food-contact, and BPA-related claims are confirmed only for the exact model and tested components.",
  },
  "custom-20oz-stainless-steel-coffee-tumbler": {
    category: "Coffee Cup Series",
    categorySlug: "coffee-cups",
    primaryKeyword: "custom 20oz stainless steel coffee tumbler",
    title: "Custom 20oz Coffee Tumbler",
    seoTitle: "Custom 20oz Stainless Steel Coffee Tumbler | Wholesale OEM Coffee Cup Manufacturer",
    metaDescription:
      "Custom 20oz stainless steel coffee tumbler for wholesale bulk orders, OEM logo printing, powder coating, and retail packaging. Request a quote from OXYDIARY.",
    heroSubtitle:
      "Wholesale 20oz coffee tumbler with custom logo, double-wall insulation, and low MOQ support for cafes, retail gifts, and promotional programs.",
    sourceUrl: "https://www.alibaba.com/product-detail/20oz-Custom-Logo-Stainless-Steel-Cup_1601634190761.html",
    image: "/images/products/alibaba/coffee-tumbler-20oz-1.png",
    gallery: [
      "/images/products/alibaba/coffee-tumbler-20oz-1.png",
      "/images/products/alibaba/coffee-tumbler-20oz-2.actual-jpg.jpg",
      "/images/products/alibaba/coffee-tumbler-20oz-3.png",
      "/images/products/alibaba/coffee-tumbler-20oz-4.png",
      "/images/products/alibaba/coffee-tumbler-20oz-5.png",
      "/images/products/alibaba/coffee-tumbler-20oz-6.png",
    ],
    scenarioImages: [
      "/images/products/alibaba/coffee-tumbler-20oz-6.png",
      "/images/products/alibaba/coffee-tumbler-20oz-4.png",
    ],
    capacities: "20oz / 600ml",
    summaryRows: [
      ["Material", "Inner: 18/8 (304) Stainless Steel / Outer: 201 Stainless Steel"],
      ["Capacity", "20oz / 600ml"],
      ["MOQ", "100 pcs per model"],
      ["Insulation", "6-12 hours"],
      ["Logo Options", "Silk print / 3D logo / Laser engraving"],
    ],
    specs: [
      ["Capacity", "20oz / 600ml"],
      ["Material", "Inner: 18/8 (304) Stainless Steel / Outer: 201 Stainless Steel"],
      ["Size", "Customized by model"],
      ["Finish", "Powder Coated"],
      ["Logo", "Custom logo printing available"],
      ["Packing", "White Box / Custom Box"],
      ["MOQ", "100 pcs per model"],
      ["Sample Time", "3-5 Days"],
      ["Lead Time", "5-15 Days"],
      ["Port", "Shanghai / Ningbo"],
    ],
    detailPlaceholders: [
      "20oz stainless steel body designed for daily coffee, office, retail, and gift programs.",
      "Multiple lid options support drinking, sipping, and leak-resistant carry needs.",
      "Powder coated finish and logo area support brand customization for wholesale channels.",
    ],
    scenarioCopy: [
      "Ideal for cafes, corporate gifts, ecommerce bundles, and retail coffee drinkware lines.",
      "Flexible logo and packaging options help buyers launch small-batch or repeat wholesale programs.",
    ],
  },
  "custom-leak-proof-stainless-steel-tumbler-with-straw": {
    category: "Tumbler Series",
    categorySlug: "tumblers",
    primaryKeyword: "custom leak proof stainless steel tumbler with straw",
    title: "Custom Leak Proof Tumbler with Straw",
    seoTitle: "Custom Leak Proof Stainless Steel Tumbler with Straw | Wholesale Tumbler Manufacturer",
    metaDescription:
      "Custom leak proof stainless steel tumbler with straw for wholesale buyers. OEM logo, powder coated colors, retail packaging, and low MOQ available.",
    heroSubtitle:
      "Leak proof tumbler with straw for drinkware brands, promotional projects, and retail programs that need custom logo and reliable daily use.",
    sourceUrl: "https://www.alibaba.com/product-detail/New-Products-Drinkware-Leak-Proof-Tumbler_1601399986082.html",
    image: "/images/products/alibaba/leak-proof-tumbler-1.png",
    gallery: [
      "/images/products/alibaba/leak-proof-tumbler-1.png",
      "/images/products/alibaba/leak-proof-tumbler-2.png",
      "/images/products/alibaba/leak-proof-tumbler-3.actual-jpg.jpg",
      "/images/products/alibaba/leak-proof-tumbler-4.jpg",
      "/images/products/alibaba/leak-proof-tumbler-5.jpg",
      "/images/products/alibaba/leak-proof-tumbler-6.jpg",
    ],
    scenarioImages: [
      "/images/products/alibaba/leak-proof-tumbler-3.actual-jpg.jpg",
      "/images/products/alibaba/leak-proof-tumbler-4.jpg",
    ],
    capacities: "380ml / 500ml",
    summaryRows: [
      ["Material", "Inner: 18/8 (304) Stainless Steel / Outer: 201 Stainless Steel"],
      ["Capacity", "380ml / 500ml"],
      ["MOQ", "100 pcs per model"],
      ["Insulation", "6-12 hours"],
      ["Logo Options", "Silk print / 3D logo / Laser engraving"],
    ],
    specs: [
      ["Capacity", "380ml / 500ml"],
      ["Material", "Inner: 18/8 (304) Stainless Steel / Outer: 201 Stainless Steel"],
      ["Size", "Customized by model"],
      ["Finish", "Powder Coated"],
      ["Logo", "Custom logo printing available"],
      ["Packing", "White Box / Custom Box"],
      ["MOQ", "100 pcs per model"],
      ["Sample Time", "3-5 Days"],
      ["Lead Time", "5-15 Days"],
      ["Port", "Shanghai / Ningbo"],
    ],
    detailPlaceholders: [
      "Leak proof lid structure supports daily commuting, gifting, and retail drinkware programs.",
      "Straw lid design makes the tumbler suitable for iced drinks, coffee, and all-day hydration.",
      "Compact 380ml and 500ml sizes provide flexible options for brand collections.",
    ],
    scenarioCopy: [
      "Suitable for retail drinkware shelves, online store launches, corporate gifts, and seasonal promotions.",
      "Custom color, logo, and packaging options help build a consistent branded tumbler series.",
    ],
  },
  "wholesale-24-32oz-insulated-sports-bottle": {
    category: "Sports Bottle Series",
    categorySlug: "sports-bottles",
    primaryKeyword: "wholesale insulated sports bottle",
    title: "Wholesale 24oz/32oz Insulated Sports Bottle",
    seoTitle: "Wholesale 24oz/32oz Insulated Sports Bottle | Custom Logo Sports Tumbler Supplier",
    metaDescription:
      "Wholesale 24oz and 32oz insulated sports bottle with stainless steel body, custom logo options, powder coating, and retail packaging support.",
    heroSubtitle:
      "Large-capacity sports bottle for outdoor, fitness, retail, and promotional markets with custom logo and stocked color support.",
    sourceUrl: "https://www.alibaba.com/product-detail/24oz-32oz-Sports-Bottles-Tumblers-Wholesale_1601571945487.html",
    image: "/images/products/alibaba/sports-tumbler-24-32-1.png",
    gallery: [
      "/images/products/alibaba/sports-tumbler-24-32-1.png",
      "/images/products/alibaba/sports-tumbler-24-32-2.png",
      "/images/products/alibaba/sports-tumbler-24-32-3.png",
      "/images/products/alibaba/sports-tumbler-24-32-4.png",
      "/images/products/alibaba/sports-tumbler-24-32-5.png",
      "/images/products/alibaba/sports-tumbler-24-32-6.png",
    ],
    scenarioImages: [
      "/images/products/alibaba/sports-tumbler-24-32-5.png",
      "/images/products/alibaba/sports-tumbler-24-32-6.png",
    ],
    capacities: "24oz / 32oz",
    summaryRows: [
      ["Material", "Inner: 18/8 (304) Stainless Steel / Outer: 201 Stainless Steel"],
      ["Capacity", "24oz / 32oz"],
      ["MOQ", "100 pcs per model"],
      ["Insulation", "6-12 hours"],
      ["Logo Options", "Silk print / 3D logo / Laser engraving"],
    ],
    specs: [
      ["Capacity", "24oz / 32oz"],
      ["Material", "Inner: 18/8 (304) Stainless Steel / Outer: 201 Stainless Steel"],
      ["Size", "Customized by model"],
      ["Finish", "Powder Coated"],
      ["Logo", "Custom logo printing available"],
      ["Packing", "White Box / Custom Box"],
      ["MOQ", "100 pcs per model"],
      ["Sample Time", "3-5 Days"],
      ["Lead Time", "5-15 Days"],
      ["Port", "Shanghai / Ningbo"],
    ],
    detailPlaceholders: [
      "24oz and 32oz sizes cover fitness, outdoor, school, and travel drinkware needs.",
      "Insulated stainless steel structure helps support cold and hot beverage use.",
      "Custom logo and color matching make it suitable for wholesale product lines.",
    ],
    scenarioCopy: [
      "Designed for sports teams, outdoor retailers, gyms, ecommerce stores, and promotional campaigns.",
      "Reliable capacity options and custom packaging support repeat wholesale buying programs.",
    ],
  },
  "custom-16-32oz-stainless-steel-water-bottle": {
    category: "Water Bottle Series",
    categorySlug: "water-bottles",
    primaryKeyword: "custom stainless steel water bottle",
    title: "Custom 16-32oz Water Bottle",
    seoTitle: "Custom 16oz/19oz/24oz/32oz Stainless Steel Water Bottle | OEM Water Bottle Factory",
    metaDescription:
      "Custom stainless steel water bottle in 16oz, 19oz, 24oz, and 32oz sizes with double-wall vacuum insulation, OEM logo, and wholesale packaging.",
    heroSubtitle:
      "Outdoor stainless steel water bottle series with multiple capacities, long insulation performance, and OEM customization for global buyers.",
    sourceUrl: "https://www.alibaba.com/product-detail/Wholesale-16-19-24-32OZ-Custom_1601735300435.html",
    image: "/images/products/alibaba/outdoor-sports-bottle-1.png",
    gallery: [
      "/images/products/alibaba/outdoor-sports-bottle-1.png",
      "/images/products/alibaba/outdoor-sports-bottle-2.png",
      "/images/products/alibaba/outdoor-sports-bottle-3.png",
      "/images/products/alibaba/outdoor-sports-bottle-4.png",
      "/images/products/alibaba/outdoor-sports-bottle-5.png",
      "/images/products/alibaba/outdoor-sports-bottle-6.png",
    ],
    scenarioImages: [
      "/images/products/alibaba/outdoor-sports-bottle-5.png",
      "/images/products/alibaba/outdoor-sports-bottle-6.png",
    ],
    capacities: "16oz / 19oz / 24oz / 32oz",
    summaryRows: [
      ["Material", "Inner: 18/8 (304) Stainless Steel / Outer: 201 Stainless Steel"],
      ["Capacity", "16oz / 19oz / 24oz / 32oz"],
      ["MOQ", "100 pcs per model"],
      ["Insulation", "12-24 hours"],
      ["Logo Options", "Silk print / 3D logo / Laser engraving"],
    ],
    specs: [
      ["Capacity", "16oz / 19oz / 24oz / 32oz"],
      ["Material", "Inner: 18/8 (304) Stainless Steel / Outer: 201 Stainless Steel"],
      ["Size", "Customized by model"],
      ["Finish", "Powder Coated"],
      ["Logo", "Custom logo printing available"],
      ["Packing", "White Box / Custom Box"],
      ["MOQ", "100 pcs per model"],
      ["Sample Time", "3-5 Days"],
      ["Lead Time", "5-15 Days"],
      ["Port", "Shanghai / Ningbo"],
    ],
    detailPlaceholders: [
      "Multiple capacities allow buyers to build one coordinated stainless steel water bottle series.",
      "Double-wall vacuum insulation supports longer temperature retention for outdoor and travel use.",
      "Custom powder coating and logo methods help match retail and brand identity requirements.",
    ],
    scenarioCopy: [
      "Suitable for outdoor gear brands, fitness retailers, travel gift sets, and corporate wellness programs.",
      "OEM/ODM support helps buyers prepare branded collections across several capacity choices.",
    ],
  },
  "custom-500ml-bpa-free-kids-stainless-steel-water-bottle": {
    category: "Kids Bottle Series",
    categorySlug: "kids-bottles",
    primaryKeyword: "custom kids stainless steel water bottle",
    title: "Custom 500ml Kids Water Bottle",
    seoTitle: "Custom 500ml BPA-Free Kids Stainless Steel Water Bottle | Wholesale Kids Bottle Supplier",
    metaDescription:
      "Custom 500ml BPA-free kids stainless steel water bottle with flip straw, leak-proof lid, OEM printing, and wholesale school bottle packaging.",
    heroSubtitle:
      "Child-friendly 500ml stainless steel bottle with BPA-free contact parts, flip straw lid, and colorful custom branding for school and gift markets.",
    sourceUrl: "https://www.alibaba.com/product-detail/316-BPA-Free-Stainless-Steel-Kids_1601823935658.html",
    image: "/images/products/alibaba/kids-bottle-500ml-1.png",
    gallery: [
      "/images/products/alibaba/kids-bottle-500ml-1.png",
      "/images/products/alibaba/kids-bottle-500ml-2.png",
      "/images/products/alibaba/kids-bottle-500ml-3.png",
      "/images/products/alibaba/kids-bottle-500ml-4.png",
      "/images/products/alibaba/kids-bottle-500ml-5.png",
      "/images/products/alibaba/kids-bottle-500ml-6.png",
    ],
    scenarioImages: [
      "/images/products/alibaba/kids-bottle-500ml-4.png",
      "/images/products/alibaba/kids-bottle-500ml-6.png",
    ],
    capacities: "500ml",
    summaryRows: [
      ["Material", "Inner: 18/8 (304) Stainless Steel / Outer: 201 Stainless Steel"],
      ["Capacity", "500ml"],
      ["MOQ", "100 pcs per model"],
      ["Insulation", "12-24 hours"],
      ["Logo Options", "Silk print / 3D logo / Laser engraving"],
    ],
    specs: [
      ["Capacity", "500ml"],
      ["Material", "Inner: 18/8 (304) Stainless Steel / Outer: 201 Stainless Steel"],
      ["Size", "Customized by model"],
      ["Finish", "Powder Coated"],
      ["Logo", "Custom logo printing available"],
      ["Packing", "White Box / Custom Box"],
      ["MOQ", "100 pcs per model"],
      ["Sample Time", "3-5 Days"],
      ["Lead Time", "5-15 Days"],
      ["Port", "Shanghai / Ningbo"],
    ],
    detailPlaceholders: [
      "500ml size is designed for children, school use, gift sets, and retail kids bottle programs.",
      "BPA-free contact parts and leak-proof flip straw lid support safer daily hydration.",
      "Colorful custom artwork and packaging can be adapted for children's markets.",
    ],
    scenarioCopy: [
      "Suitable for schools, kids retail stores, family gift programs, and branded children's drinkware lines.",
      "OEM logo, custom color, and packaging support helps buyers prepare market-ready kids bottle collections.",
    ],
  },
  "custom-30oz-stainless-steel-travel-tumbler": {
    category: "Tumbler Series",
    title: "Custom 30oz Stainless Steel Travel Tumbler",
    seoTitle: "Custom 30oz Stainless Steel Travel Tumbler | Wholesale Insulated Tumbler Supplier",
    metaDescription:
      "Custom 30oz stainless steel travel tumbler with handle, straw lid options, OEM logo printing, and wholesale packaging support. Get custom pricing.",
    heroSubtitle:
      "Large-capacity travel tumbler for retail brands, outdoor markets, and corporate drinkware projects with flexible customization.",
    image: "/images/products/category-tumblers.png",
    gallery: [
      "/images/products/category-tumblers.png",
      "/images/products/tumbler-transparent.png",
      "/images/products/tumbler.png",
    ],
    capacities: "30oz / 900ml",
  },
  "custom-500ml-smart-temperature-bottle": {
    category: "Smart Bottle Series",
    title: "Custom 500ml Smart Temperature Bottle",
    seoTitle: "Custom 500ml Smart Temperature Bottle | OEM LED Display Water Bottle Manufacturer",
    metaDescription:
      "Custom 500ml smart temperature bottle with LED display, stainless steel vacuum insulation, logo printing, and gift packaging. Send an inquiry.",
    heroSubtitle:
      "Premium smart bottle for gift projects and retail programs, combining LED temperature display with OEM branding options.",
    image: "/images/products/category-smart-bottles.png",
    gallery: [
      "/images/products/category-smart-bottles.png",
      "/images/products/smart-bottle-transparent.png",
      "/images/products/smart-bottle.png",
    ],
    capacities: "500ml / 16oz",
  },
  "custom-32oz-stainless-steel-sports-bottle": {
    category: "Sports Bottle Series",
    title: "Custom 32oz Stainless Steel Sports Bottle",
    seoTitle: "Custom 32oz Stainless Steel Sports Bottle | Wholesale Sports Water Bottle Manufacturer",
    metaDescription:
      "Custom 32oz stainless steel sports bottle for gyms, outdoor brands, team gifts, and promotional programs. OEM logo and packaging available.",
    heroSubtitle:
      "Durable sports water bottle with leak-resistant lid options, powder coating, and custom logo support for active lifestyle markets.",
    image: "/images/products/category-sports-bottles.png",
    gallery: [
      "/images/products/category-sports-bottles.png",
      "/images/products/sports-bottles-transparent.png",
      "/images/products/sports-bottles.png",
    ],
    capacities: "32oz / 950ml",
  },
  "custom-kids-insulated-stainless-steel-bottle": {
    category: "Kids Bottle Series",
    title: "Custom Kids Insulated Stainless Steel Bottle",
    seoTitle: "Custom Kids Insulated Stainless Steel Bottle | Wholesale Kids Water Bottle Supplier",
    metaDescription:
      "Custom kids insulated stainless steel bottle with BPA-free parts, colorful printing, low MOQ, and retail gift packaging. Request a custom quote.",
    heroSubtitle:
      "Child-friendly insulated bottle for school, gifting, and retail programs with custom artwork, color matching, and secure packaging.",
    image: "/images/products/category-kids-bottles.png",
    gallery: [
      "/images/products/category-kids-bottles.png",
      "/images/products/water-bottle-transparent.png",
      "/images/products/water-bottle.png",
    ],
    capacities: "350ml / 500ml / 600ml",
  },
};

const productDetails = {
  ...baseProductDetails,
  ...bulkProductDetails,
  ...verifiedProductDetails,
};

const categoryRoutes = {
  "Coffee Cup Series": "coffee-cups",
  "Tumbler Series": "tumblers",
  "Smart Bottle Series": "smart-bottles",
  "Water Bottle Series": "water-bottles",
  "Sports Bottle Series": "sports-bottles",
  "Kids Bottle Series": "kids-bottles",
  "Plastic Drinkware Series": "plastic-drinkware",
  "Glass Drinkware Series": "glass-drinkware",
  "Lunch Box Series": "lunch-boxes",
};

const summaryRows = [
  ["Material", "Inner: 18/8 (304) Stainless Steel / Outer: 201 Stainless Steel"],
  ["MOQ", "Confirmed by model and configuration"],
  ["Color Customization", "Pantone color available"],
  ["Lid Options", "Screw cap / Sport lid / Straw lid"],
  ["Logo Options", "Silk print / 3D logo / Laser engraving"],
];

const keyFeatures = [
  {
    title: "Double-Wall Insulation",
    text: "Keeps drinks cold or hot for daily use.",
    image: "/images/detail-features/double-wall-insulation.png",
  },
  {
    title: "Leak-Resistant Lid",
    text: "Multiple lid options for retail and outdoor channels.",
    image: "/images/detail-features/leak-resistant-lid.png",
  },
  {
    title: "Material Specification",
    text: "Steel grade and food-contact components are confirmed for the selected model and order.",
    image: "/images/detail-features/food-grade-steel.png",
  },
  {
    title: "Custom Branding",
    text: "Logo, color, finish, and packaging can be customized.",
    image: "/images/detail-features/custom-branding.png",
  },
];

const specs = [
  ["Capacity", "500ml / 750ml / 1000ml / 1500ml"],
  ["Material", "Inner: 18/8 (304) Stainless Steel / Outer: 201 Stainless Steel"],
  ["Size", "Customized by model"],
  ["Finish", "Powder Coated"],
  ["Logo", "Silk Print / 3D Logo / Laser Engraving"],
  ["Packing", "White Box / Custom Box"],
  ["MOQ", "Confirmed by model and configuration"],
  ["Sample Time", "Confirmed after artwork and requirements review"],
  ["Lead Time", "Confirmed after sample approval and order review"],
  ["Port", "Shanghai / Ningbo"],
];

const customOptions = [
  {
    title: "Pantone Color Customization",
    image: "/images/detail-options/pantone.png",
  },
  {
    title: "Silk Print Logo",
    image: "/images/detail-options/silk-screen-printing.png",
    logoCrop: true,
  },
  {
    title: "3D Logo",
    image: "/images/detail-options/3d-printing.png",
    logoCrop: true,
  },
  {
    title: "5D Logo",
    image: "/images/detail-options/5d-printing.png",
    logoCrop: true,
  },
  {
    title: "Laser Engraving",
    image: "/images/detail-options/laser-engraving.png",
    logoCrop: true,
  },
  {
    title: "Packaging Customization",
    image: "/images/detail-options/packaging-customization.png",
  },
];

const detailPlaceholders = [
  "Premium surface finish for excellent durability and style.",
  "Leak-resistant lid structure helps prevent spills.",
  "Wide mouth design supports easy cleaning and filling.",
];

const qualitySteps = [
  {
    title: "Spray Painting Inspection",
    text: "Every coated bottle is checked for surface coverage, adhesion, dust marks, and finish consistency before moving forward.",
    image: "/images/inspection/01-spray-painting-inspection.png",
  },
  {
    title: "Metalworking Inspection",
    text: "Bottle bodies are inspected for forming accuracy, mouth dimensions, threading, and visible structural defects.",
    image: "/images/inspection/02-metalworking-inspection.png",
  },
  {
    title: "Polishing Inspection",
    text: "Polished stainless steel surfaces are reviewed for smoothness, scratches, burrs, and clean reflective quality.",
    image: "/images/inspection/03-polishing-inspection.png",
  },
  {
    title: "Color Difference Check",
    text: "Finished colors are compared under controlled lighting to keep bulk production aligned with approved samples.",
    image: "/images/inspection/04-color-difference-check.png",
  },
  {
    title: "Vacuum Test",
    text: "Thermal performance is tested to verify vacuum integrity and insulation reliability for every production batch.",
    image: "/images/inspection/05-thermal-insulation-performance-test.png",
  },
  {
    title: "Packaging Line Inspection",
    text: "Final goods are checked during assembly and packaging to confirm logo, accessories, cartons, and shipment readiness.",
    image: "/images/inspection/06-packaging-line-inspection.png",
  },
];

const whyChoose = [
  {
    title: "Model-Specific MOQ",
    text: "MOQ is quoted against the exact model, color, decoration, and packaging.",
    icon: "moq",
  },
  {
    title: "Sampling Plan",
    text: "Sampling scope and timing are confirmed after the product brief is reviewed.",
    icon: "sampling",
  },
  {
    title: "Documented Order Plan",
    text: "Approved sample, production milestones, inspection, and shipping details are tracked per order.",
    icon: "leadTime",
  },
  {
    title: "Export Coordination",
    text: "Product, packaging, inspection, and shipping documents are aligned to the destination and buyer brief.",
    icon: "global",
  },
];

function getProductFaqs(item) {
  if (item.faqs) return item.faqs;
  return [
    {
      question: `Can I customize the logo on this ${item.title.toLowerCase()}?`,
      answer:
        "Yes. We support silk screen printing, 3D logo, 5D logo, laser engraving, and packaging artwork based on your brand requirements.",
    },
    {
      question: "What is the MOQ for custom orders?",
      answer:
        "MOQ is confirmed by model, material, decoration method, packaging, and order quantity. Ask for a model-specific quotation before planning a launch.",
    },
    {
      question: "How long does sampling and bulk production take?",
      answer:
        "Sample and production timing are confirmed after the exact model, artwork, packaging, quantity, and test requirements are reviewed.",
    },
    {
      question: "Can you provide custom packaging for wholesale buyers?",
      answer:
        "Yes. White box and custom box packaging are available, and we can help prepare retail-ready packaging for your market.",
    },
  ];
}

function DetailIcon({ type }) {
  const icons = {
    thermos: (
      <>
        <path d="M9 3h6" />
        <path d="M10 6h4v2.5a4 4 0 0 1 2 3.5v5a4 4 0 0 1-8 0v-5a4 4 0 0 1 2-3.5V6Z" />
        <path d="M10 13h4M10 17h4" />
        <path d="M5 9c-1 1.2-1 3 0 4.2M19 9c1 1.2 1 3 0 4.2" />
      </>
    ),
    dropletShield: (
      <>
        <path d="M12 3 19 6v5.5c0 4.5-3 7.4-7 9.5-4-2.1-7-5-7-9.5V6l7-3Z" />
        <path d="M12 8.2s3 3.2 3 5.2a3 3 0 0 1-6 0c0-2 3-5.2 3-5.2Z" />
        <path d="M10.5 13.8c.4.9 1.3 1.3 2.3 1" />
      </>
    ),
    badge304: (
      <>
        <path d="M12 3 19 6.5v5c0 4.5-2.8 7.4-7 9.5-4.2-2.1-7-5-7-9.5v-5L12 3Z" />
        <path d="M8.2 12.8c.5.6 1.1.9 1.9.9 1 0 1.7-.5 1.7-1.3s-.6-1.2-1.5-1.2h-.8" />
        <path d="M13.2 10.4v3.2M13.2 10.4h1.4a1.6 1.6 0 0 1 0 3.2h-1.4" />
        <path d="M17.2 10.4v3.2" />
      </>
    ),
    logoSpark: (
      <>
        <path d="M6 16.5V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8.5" />
        <path d="M8 16h8M9.5 13.5 12 9l2.5 4.5M10.5 12h3" />
        <path d="M4 19h16" />
        <path d="M18.5 4.5 20 3M20.5 7h1.5M16 3.5V2" />
      </>
    ),
    palette: (
      <>
        <path d="M12 4a8 8 0 1 0 0 16h1.2a1.8 1.8 0 0 0 .5-3.5l-.7-.2a1.7 1.7 0 0 1 .5-3.3H16a4 4 0 0 0 0-8h-4Z" />
        <path d="M7.5 10h.01M10 7.5h.01M14 7.5h.01" />
      </>
    ),
    lid: (
      <>
        <path d="M7 8h10v12H7V8Z" />
        <path d="M6 8h12M8 5h8l1 3H7l1-3Z" />
        <path d="M9 12h6" />
      </>
    ),
    print: (
      <>
        <path d="M7 4h10v5H7V4Z" />
        <path d="M6 14h12v6H6v-6Z" />
        <path d="M5 9h14a2 2 0 0 1 2 2v5h-3M6 16H3v-5a2 2 0 0 1 2-2" />
      </>
    ),
    cube: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M4.5 7.8 12 12l7.5-4.2M12 12v8.5" />
        <path d="M8.5 10 16 5.8" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
        <path d="m5.6 5.6 3.5 3.5M14.9 14.9l3.5 3.5M18.4 5.6l-3.5 3.5M9.1 14.9l-3.5 3.5" />
        <path d="M12 9.5 13.2 12 12 14.5 10.8 12 12 9.5Z" />
      </>
    ),
    box: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M4.5 7.8 12 12l7.5-4.2M12 12v8.5" />
        <path d="m8 5.4 8 4.5" />
      </>
    ),
  };

  return (
    <span className="detail-line-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{icons[type] || icons.tag}</svg>
    </span>
  );
}

function AdvantageDetailIcon({ type }) {
  const icons = {
    moq: (
      <>
        <path d="M4 7h16" />
        <path d="M7 7v12h10V7" />
        <path d="M9 4h6l1 3H8l1-3Z" />
        <path d="M9.5 11h5M9.5 14h5" />
      </>
    ),
    sampling: (
      <>
        <path d="M12 6v6l4 2" />
        <path d="M12 21a9 9 0 1 0-7.8-4.5" />
        <path d="M3 21v-5h5" />
      </>
    ),
    leadTime: (
      <>
        <path d="M3 17h2l2-7 4 10 3-13 3 10h4" />
        <path d="M4 21h16" />
        <path d="M6 5h12" />
      </>
    ),
    global: (
      <>
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M3.6 9h16.8M3.6 15h16.8" />
        <path d="M12 3c2.2 2.3 3.2 5.3 3.2 9s-1 6.7-3.2 9c-2.2-2.3-3.2-5.3-3.2-9s1-6.7 3.2-9Z" />
      </>
    ),
  };

  return (
    <span className="detail-line-icon detail-advantage-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{icons[type]}</svg>
    </span>
  );
}

function CategoryCollectionPage({ category, categorySlug }) {
  const guide = categoryGuides[categorySlug];
  const categoryProducts = Object.entries(productDetails)
    .filter(
      ([, product]) =>
        product.sourceUrl &&
        product.categorySlug === categorySlug &&
        (!Object.values(bulkProductDetails).includes(product) || product.indexable === true),
    )
    .map(([slug, product]) => ({ slug, ...product }));
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.title,
    description: category.collectionIntro,
    url: `https://oxylifediary.com/products/${categorySlug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categoryProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://oxylifediary.com/products/${product.slug}`,
        name: product.title,
      })),
    },
  };
  const categorySchema = guide
    ? {
        "@context": "https://schema.org",
        "@graph": [{ ...collectionSchema, "@context": undefined }, faqSchema(guide.faqs)],
      }
    : collectionSchema;

  return (
    <main className="product-detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categorySchema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="category-collection-hero">
        <div className="container">
          <nav className="product-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span>{category.title}</span>
          </nav>
          <div className="category-collection-head">
            <span className="product-series">{category.category}</span>
            <h1>{category.title}</h1>
            <p>{category.collectionIntro || "Browse verified models for wholesale, private-label, color, logo, and packaging projects."}</p>
          </div>
        </div>
      </section>

      <section className="products-catalog-section">
        <div className="container">
          {categoryProducts.length > 0 ? (
            <CategoryProductGrid products={categoryProducts} categoryTitle={category.title} />
          ) : (
            <div className="category-empty-state">
              <h2>{category.title} products are being prepared.</h2>
              <p>More models will be added to this collection after product images and specifications are confirmed.</p>
              <Link className="btn btn-primary" href="/contact">Request Product Recommendation</Link>
            </div>
          )}
        </div>
      </section>
      {guide ? (
        <>
          <EditorialMeta />
          <DirectAnswer>{guide.answer}</DirectAnswer>
          <ContentSections sections={guide.decisions} />
          <ComparisonTable
            headers={guide.headers}
            rows={guide.rows}
            title={`${category.title} buyer comparison`}
          />
          <Checklist items={guide.checklist} />
          <FaqSection faqs={guide.faqs} title={`${category.title} sourcing questions`} />
          <RelatedLinks
            links={[
              ["/oem-odm", "Review OEM/ODM options"],
              ["/quality", "Match evidence to the SKU"],
              ["/contact", "Request a model recommendation"],
            ]}
          />
        </>
      ) : null}
    </main>
  );
}

function rotateProducts(list, seed) {
  if (list.length <= 1) return list;
  const offset = Math.abs(seed) % list.length;
  return [...list.slice(offset), ...list.slice(0, offset)];
}

export function generateStaticParams() {
  return Object.keys(productDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = productDetails[slug];
  if (!item) notFound();
  const pageTitle = (
    item.seoTitle ||
    `${item.title} | Custom Drinkware Manufacturer`
  ).replace(/\s*\|\s*OXYDIARY$/i, "");
  const isUnverifiedBulk =
    Object.prototype.hasOwnProperty.call(bulkProductDetails, slug) &&
    item.indexable !== true;
  return {
    title: pageTitle,
    description:
      item.metaDescription ||
      `OEM/ODM ${item.title.toLowerCase()} detail page for global B2B buyers. Custom logo, packaging, and wholesale support available.`,
    alternates: {
      canonical: `/products/${slug}`,
    },
    robots: isUnverifiedBulk
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: item.title,
      description: item.metaDescription || item.collectionIntro,
      url: `/products/${slug}`,
      type: "website",
      images: item.image ? [{ url: item.image, alt: item.title }] : [],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const item = productDetails[slug];
  if (!item) notFound();
  const categorySlug = item.categorySlug || categoryRoutes[item.category];
  const isCategoryPage = !item.sourceUrl && categorySlug;

  if (isCategoryPage) {
    return <CategoryCollectionPage category={item} categorySlug={categorySlug} />;
  }

  const rows = item.summaryRows || [summaryRows[0], ["Capacity", item.capacities], ...summaryRows.slice(1)];
  const specRows =
    item.specs ||
    specs.map(([label, value]) => [
      label,
      label === "Capacity" ? item.capacities : value,
    ]);
  const appliedKeyFeatures = item.keyFeatures || keyFeatures;
  const appliedCustomOptions = item.customOptions || customOptions;
  const appliedQualitySteps = item.qualitySteps || qualitySteps;
  const detailTexts = item.detailPlaceholders || detailPlaceholders;
  const scenarioTexts =
    item.scenarioCopy || [
      "Suitable for retail, outdoor, corporate gifting, and lifestyle campaigns.",
      "Flexible branding supports ecommerce, promotional, and wholesale programs.",
    ];
  const galleryImages = item.gallery?.length ? item.gallery : [item.image];
  const detailItems = detailTexts.map((text, index) => ({
    text,
    image: galleryImages[index] || galleryImages[0],
    alt: `${item.primaryKeyword || item.title} detail image ${index + 1}`,
  }));
  const scenarioItems = scenarioTexts.map((text, index) => ({
    text,
    image: item.scenarioImages?.[index] || galleryImages[index + 1] || galleryImages[index] || galleryImages[0],
    alt: `${item.primaryKeyword || item.title} application scenario ${index + 1}`,
  }));
  const importedProducts = Object.entries(productDetails)
    .filter(([, product]) => product.sourceUrl)
    .map(([key, product]) => ({ id: key, ...product }));
  const relatedSeed = [...slug].reduce((sum, character) => sum + character.charCodeAt(0), 0);
  const sameCategoryRelated = importedProducts.filter(
    (product) => product.id !== slug && product.categorySlug === categorySlug,
  );
  const otherRelated = importedProducts.filter((product) => product.id !== slug && product.categorySlug !== categorySlug);
  const relatedImportedProducts = [
    ...rotateProducts(sameCategoryRelated, relatedSeed),
    ...rotateProducts(otherRelated, relatedSeed),
  ]
    .slice(0, 4)
    .map((product) => ({
      id: product.id,
      title: product.title,
      image: product.image,
      alt: product.primaryKeyword || product.title,
    }));
  const related =
    relatedImportedProducts.length > 0
      ? relatedImportedProducts
      : products.filter((product) => product.id !== slug).slice(0, 4);
  const faqs = getProductFaqs(item);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.title,
    description: item.metaDescription || item.heroSubtitle,
    url: `https://oxylifediary.com/products/${slug}`,
    image: galleryImages.map((image) => `https://oxylifediary.com${image}`),
    category: item.category,
    brand: {
      "@type": "Brand",
      name: "OXYDIARY",
    },
    additionalProperty: specRows.map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value,
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://oxylifediary.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://oxylifediary.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.title,
        item: `https://oxylifediary.com/products/${slug}`,
      },
    ],
  };

  return (
    <main className="product-detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="product-detail-hero">
        <div className="container">
          <nav className="product-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            {categorySlug ? <Link href={`/products/${categorySlug}`}>{item.category}</Link> : <span>{item.category}</span>}
          </nav>

          <div className="product-detail-grid">
            <ProductGallery title={item.title} images={galleryImages} />

            <div className="product-summary">
              <span className="product-series">{item.category}</span>
              <h1>{item.title}</h1>
              <p>
                {item.heroSubtitle ||
                  "Premium quality. Fully customizable. Built for your brand."}
              </p>
              <div className="product-summary-table">
                {rows.map(([label, value]) => (
                  <div key={label}>
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              <div className="product-actions">
                <Link className="btn btn-primary" href="/contact">Request a Quote</Link>
                <a className="btn btn-outline" href="#specifications">Download Specs</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-section">
        <div className="container">
          <h2 className="detail-section-title">Key Features</h2>
          <div className="detail-card-grid four">
            {appliedKeyFeatures.map((feature) => (
              <article className="detail-feature-card" key={feature.title}>
                <div className="detail-feature-icon-image">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={220}
                    height={220}
                    quality={95}
                  />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>

          <h2 className="detail-section-title" id="specifications">Specifications</h2>
          <div className="spec-table">
            {specRows.map(([label, value]) => (
              <div key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>

          <h2 className="detail-section-title">Customization Options</h2>
          <div className="custom-option-grid">
            {appliedCustomOptions.map((option) => (
              <article className="custom-option-card" key={option.title}>
                <div className={`custom-option-image ${option.logoCrop ? "is-logo-crop" : ""}`}>
                  <Image
                    src={option.image}
                    alt={option.title}
                    width={420}
                    height={300}
                    quality={95}
                  />
                </div>
                <h3>{option.title}</h3>
              </article>
            ))}
          </div>

          <h2 className="detail-section-title">Product Details</h2>
          <div className="detail-placeholder-grid">
            {detailItems.map((detail) => (
              <article className="detail-placeholder-card" key={detail.text}>
                <div className="detail-image-frame">
                  <Image src={detail.image} alt={detail.alt} width={620} height={620} quality={95} />
                </div>
                <p>{detail.text}</p>
              </article>
            ))}
          </div>

          <h2 className="detail-section-title">Application Scenarios</h2>
          <div className="scenario-grid">
            {scenarioItems.map((scenario) => (
              <article className="detail-placeholder-card" key={scenario.text}>
                <div className="detail-image-frame">
                  <Image src={scenario.image} alt={scenario.alt} width={620} height={620} quality={95} />
                </div>
                <p>{scenario.text}</p>
              </article>
            ))}
          </div>

          <h2 className="detail-section-title">Quality Control</h2>
          <div className="quality-flow">
            {appliedQualitySteps.map((step) => (
              <article key={step.title}>
                <div className="quality-flow-image">
                  <Image src={step.image} alt={step.title} width={360} height={360} quality={95} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <h2 className="detail-section-title">Why Choose OXYDIARY</h2>
          <div className="detail-card-grid four">
            {whyChoose.map((item) => (
              <article className="detail-feature-card" key={item.title}>
                <AdvantageDetailIcon type={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <h2 className="detail-section-title">FAQ</h2>
          <div className="product-faq-grid">
            {faqs.map((faq) => (
              <article className="product-faq-card" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>

          <h2 className="detail-section-title">Related Products</h2>
          <div className="related-products-grid">
            {related.map((product) => (
              <Link className="related-product-card" href={`/products/${product.id}`} key={product.id}>
                <Image src={product.image} alt={product.alt} width={320} height={320} quality={100} />
                <span>{product.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="product-inquiry-band">
        <div className="container product-inquiry-grid">
          <div>
            <h2>Start Your Custom Product Project</h2>
            <p>Share the model, quantity, market, logo, packaging, and testing requirements for a configuration-specific quotation.</p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
