import { bulkProductDetails } from "./bulkProducts";

const fromBulk = (slug, overrides) => ({
  ...bulkProductDetails[slug],
  ...overrides,
  indexable: true,
  verificationNote: "Product title, source URL, and gallery were cross-checked on 2026-07-30.",
});

const commonB2bFaqs = (productName) => [
  {
    question: `Can ${productName} be customized for a private-label order?`,
    answer:
      "Logo, color, component, and packaging options depend on the selected model. Send the target market, quantity, artwork, and packaging brief for a model-specific confirmation.",
  },
  {
    question: "What are the MOQ and lead time?",
    answer:
      "MOQ, sample timing, and production lead time are confirmed per model and order quantity. They are not presented as fixed figures until the exact configuration is reviewed.",
  },
  {
    question: "How is food-contact compliance confirmed?",
    answer:
      "Compliance is matched to the exact SKU, material, component, and destination market. Available reports apply only to the tested samples stated in each report.",
  },
];

const simpleQualitySteps = [
  {
    title: "Material & Component Check",
    text: "Material, color, lid, seal, and accessory requirements are matched to the approved order specification.",
    image: "/images/inspection/02-metalworking-inspection.png",
  },
  {
    title: "Fit & Function Check",
    text: "Assembly, opening and closing, sealing structure, and visible workmanship are checked against the approved sample.",
    image: "/images/inspection/05-thermal-insulation-performance-test.png",
  },
  {
    title: "Packaging & Shipment Check",
    text: "Logo, accessories, retail packaging, carton marks, and shipment quantities are checked before dispatch.",
    image: "/images/inspection/06-packaging-line-inspection.png",
  },
];

export const redirectedProductSlugs = [
  "750ml-stainless-steel-sports-bottle-8189",
  "straw-lid-gift-set-coffee-cup-7083",
  "1l-frosted-coffee-cup-5062",
  "sports-bottle-7648",
  "16oz-frosted-tumbler-8009",
];

export const verifiedProductDetails = {
  "750ml-textured-plastic-tumbler": fromBulk(
    "750ml-stainless-steel-sports-bottle-8189",
    {
      category: "Plastic Drinkware Series",
      categorySlug: "plastic-drinkware",
      primaryKeyword: "custom 750ml textured plastic tumbler",
      title: "Custom 750ml Textured Plastic Tumbler",
      seoTitle: "Custom 750ml Textured Plastic Tumbler | Wholesale OEM Cup",
      metaDescription:
        "750ml textured plastic tumbler for wholesale and private-label programs. Confirm material grade, logo, color, packaging, MOQ, and testing for your selected model.",
      heroSubtitle:
        "A novelty textured plastic cup for retail and promotional programs, with model-specific logo, color, and packaging confirmation.",
      capacities: "750ml",
      summaryRows: [
        ["Product Type", "Textured plastic tumbler"],
        ["Capacity", "750ml"],
        ["Material", "Plastic grade confirmed with quotation"],
        ["Customization", "Logo, color, and packaging by model"],
      ],
      specs: [
        ["Capacity", "750ml"],
        ["Material", "Plastic grade confirmed with quotation"],
        ["Surface", "Textured novelty body"],
        ["Logo & Packaging", "Confirmed from artwork and order brief"],
      ],
      keyFeatures: [
        {
          title: "Textured Body",
          text: "Distinctive novelty texture designed for visual retail appeal.",
          image: bulkProductDetails["750ml-stainless-steel-sports-bottle-8189"].gallery[1],
        },
        {
          title: "750ml Capacity",
          text: "Large single-serve capacity for cold-drink and promotional programs.",
          image: bulkProductDetails["750ml-stainless-steel-sports-bottle-8189"].gallery[2],
        },
        {
          title: "Custom Program Support",
          text: "Color, logo, and packaging are confirmed against the selected model.",
          image: bulkProductDetails["750ml-stainless-steel-sports-bottle-8189"].gallery[3],
        },
      ],
      customOptions: [
        { title: "Color Matching", image: "/images/detail-options/pantone.png" },
        { title: "Logo Artwork", image: "/images/detail-options/silk-screen-printing.png", logoCrop: true },
        { title: "Retail Packaging", image: "/images/detail-options/packaging-customization.png" },
      ],
      qualitySteps: simpleQualitySteps,
      faqs: commonB2bFaqs("this plastic tumbler"),
    },
  ),
  "hammered-stainless-steel-moscow-mule-mug": fromBulk(
    "straw-lid-gift-set-coffee-cup-7083",
    {
      category: "Tumbler Series",
      categorySlug: "tumblers",
      primaryKeyword: "custom hammered stainless steel Moscow mule mug",
      title: "Custom Hammered Stainless Steel Moscow Mule Mug",
      seoTitle: "Custom Hammered Stainless Steel Moscow Mule Mug | Wholesale",
      metaDescription:
        "Hammered stainless steel Moscow mule mug with copper-color finish for wholesale barware, gift, and private-label programs. Request model-specific specifications.",
      heroSubtitle:
        "A hammered stainless steel mug with a copper-color exterior for barware, gift, hospitality, and private-label collections.",
      capacities: "Capacity confirmed by selected model",
      summaryRows: [
        ["Product Type", "Hammered Moscow mule mug"],
        ["Body", "Stainless steel"],
        ["Exterior", "Copper-color hammered finish"],
        ["Capacity", "Confirmed by selected model"],
      ],
      specs: [
        ["Body Material", "Stainless steel"],
        ["Exterior", "Copper-color hammered finish"],
        ["Capacity", "Confirmed by selected model"],
        ["Logo & Packaging", "Confirmed from artwork and order brief"],
      ],
      detailPlaceholders: [
        "The gallery shows a handled Moscow mule mug with a hammered copper-color exterior.",
        "Stainless steel construction is used beneath the decorative exterior finish.",
        "Capacity, finish process, logo method, and carton configuration are confirmed per quotation.",
      ],
      qualitySteps: simpleQualitySteps,
      faqs: commonB2bFaqs("this Moscow mule mug"),
    },
  ),
  "1l-borosilicate-glass-carafe": fromBulk("1l-frosted-coffee-cup-5062", {
    category: "Glass Drinkware Series",
    categorySlug: "glass-drinkware",
    primaryKeyword: "custom 1L borosilicate glass carafe",
    title: "Custom 1L Borosilicate Glass Carafe",
    seoTitle: "Custom 1L Borosilicate Glass Carafe | Wholesale OEM Supplier",
    metaDescription:
      "1L borosilicate glass carafe for tea, coffee, hospitality, and private-label programs. Confirm lid, infuser, logo, packaging, MOQ, and testing by model.",
    heroSubtitle:
      "A 1L borosilicate glass carafe for tea, coffee, table service, hospitality, and branded retail programs.",
    capacities: "1L",
    summaryRows: [
      ["Product Type", "Glass carafe"],
      ["Material", "Borosilicate glass"],
      ["Capacity", "1L"],
      ["Components", "Lid and infuser confirmed by model"],
    ],
    specs: [
      ["Capacity", "1L"],
      ["Body Material", "Borosilicate glass"],
      ["Lid / Infuser", "Confirmed by selected model"],
      ["Logo & Packaging", "Confirmed from artwork and order brief"],
    ],
    keyFeatures: [
      {
        title: "Borosilicate Glass Body",
        text: "Clear glass body suited to tea, coffee, and table-service presentation.",
        image: bulkProductDetails["1l-frosted-coffee-cup-5062"].gallery[1],
      },
      {
        title: "1L Serving Format",
        text: "A one-liter carafe format for hospitality and retail programs.",
        image: bulkProductDetails["1l-frosted-coffee-cup-5062"].gallery[2],
      },
      {
        title: "Model-Specific Components",
        text: "Lid, infuser, logo method, and packaging are confirmed for the selected configuration.",
        image: bulkProductDetails["1l-frosted-coffee-cup-5062"].gallery[3],
      },
    ],
    customOptions: [
      { title: "Logo Artwork", image: "/images/detail-options/silk-screen-printing.png", logoCrop: true },
      { title: "Gift Packaging", image: "/images/detail-options/packaging-customization.png" },
    ],
    qualitySteps: simpleQualitySteps,
    faqs: commonB2bFaqs("this glass carafe"),
  }),
  "custom-plastic-squeeze-sports-bottle": fromBulk("sports-bottle-7648", {
    category: "Plastic Drinkware Series",
    categorySlug: "plastic-drinkware",
    primaryKeyword: "custom plastic squeeze sports bottle",
    title: "Custom Plastic Squeeze Sports Bottle",
    seoTitle: "Custom Plastic Squeeze Sports Bottle | Wholesale OEM Supplier",
    metaDescription:
      "Plastic squeeze sports bottle for cycling, fitness, teams, and promotional programs. Confirm resin, capacity, closure, logo, MOQ, and testing by model.",
    heroSubtitle:
      "A lightweight plastic squeeze bottle for cycling, fitness, team, retail, and promotional programs.",
    capacities: "Capacity confirmed by selected model",
    summaryRows: [
      ["Product Type", "Plastic squeeze sports bottle"],
      ["Material", "Plastic resin confirmed by model"],
      ["Capacity", "Confirmed by selected model"],
      ["Customization", "Color, logo, closure, and packaging"],
    ],
    specs: [
      ["Material", "Plastic resin confirmed by model"],
      ["Capacity", "Confirmed by selected model"],
      ["Closure", "Confirmed by selected model"],
      ["Logo & Packaging", "Confirmed from artwork and order brief"],
    ],
    keyFeatures: [
      {
        title: "Squeeze Bottle Format",
        text: "Lightweight sports format shown for cycling, fitness, and team programs.",
        image: bulkProductDetails["sports-bottle-7648"].gallery[1],
      },
      {
        title: "Custom Color Program",
        text: "Body and closure colors are confirmed against the chosen model and order brief.",
        image: bulkProductDetails["sports-bottle-7648"].gallery[2],
      },
      {
        title: "Private-Label Support",
        text: "Logo and packaging options are reviewed before sampling and quotation.",
        image: bulkProductDetails["sports-bottle-7648"].gallery[3],
      },
    ],
    customOptions: [
      { title: "Color Matching", image: "/images/detail-options/pantone.png" },
      { title: "Logo Artwork", image: "/images/detail-options/silk-screen-printing.png", logoCrop: true },
      { title: "Retail Packaging", image: "/images/detail-options/packaging-customization.png" },
    ],
    qualitySteps: simpleQualitySteps,
    faqs: commonB2bFaqs("this plastic sports bottle"),
  }),
  "16-20oz-frosted-glass-tumbler": fromBulk("16oz-frosted-tumbler-8009", {
    category: "Glass Drinkware Series",
    categorySlug: "glass-drinkware",
    primaryKeyword: "custom 16oz 20oz frosted glass tumbler",
    title: "Custom 16oz / 20oz Frosted Glass Tumbler",
    seoTitle: "Custom 16oz / 20oz Frosted Glass Tumbler | Wholesale",
    metaDescription:
      "High-borosilicate frosted glass tumbler in 16oz and 20oz formats for private-label retail and gift programs. Confirm lid, straw, logo, and packaging.",
    heroSubtitle:
      "A frosted high-borosilicate glass tumbler in 16oz and 20oz formats for branded retail, gift, and lifestyle programs.",
    capacities: "16oz / 20oz",
    summaryRows: [
      ["Product Type", "Frosted glass tumbler"],
      ["Material", "High-borosilicate glass"],
      ["Capacity", "16oz / 20oz"],
      ["Components", "Lid and straw confirmed by model"],
    ],
    specs: [
      ["Capacity", "16oz / 20oz"],
      ["Body Material", "High-borosilicate glass"],
      ["Lid / Straw", "Confirmed by selected model"],
      ["Logo & Packaging", "Confirmed from artwork and order brief"],
    ],
    keyFeatures: [
      {
        title: "Frosted Glass Body",
        text: "A matte-look glass surface for branded retail and gift collections.",
        image: bulkProductDetails["16oz-frosted-tumbler-8009"].gallery[1],
      },
      {
        title: "16oz / 20oz Formats",
        text: "Two common drink sizes for coordinated product programs.",
        image: bulkProductDetails["16oz-frosted-tumbler-8009"].gallery[2],
      },
      {
        title: "Component Options",
        text: "Lid, straw, sleeve, logo, and packaging are confirmed by selected model.",
        image: bulkProductDetails["16oz-frosted-tumbler-8009"].gallery[3],
      },
    ],
    customOptions: [
      { title: "Logo Artwork", image: "/images/detail-options/silk-screen-printing.png", logoCrop: true },
      { title: "Gift Packaging", image: "/images/detail-options/packaging-customization.png" },
    ],
    qualitySteps: simpleQualitySteps,
    faqs: commonB2bFaqs("this frosted glass tumbler"),
  }),
  "portable-stainless-steel-insulated-lunch-cup": {
    category: "Lunch Box Series",
    categorySlug: "lunch-boxes",
    primaryKeyword: "portable stainless steel insulated lunch cup",
    title: "Portable Stainless Steel Insulated Lunch Cup",
    seoTitle: "Portable Stainless Steel Insulated Lunch Cup | Wholesale OEM",
    metaDescription:
      "Portable stainless steel insulated lunch cup for breakfast, cereal, soup, office, and private-label programs. Confirm capacity, lid, spoon, logo, and packaging.",
    heroSubtitle:
      "A compact stainless steel insulated food cup for breakfast, cereal, soup, office, school, gift, and private-label programs.",
    sourceUrl:
      "https://www.alibaba.com/product-detail/Portable-Stainless-Steel-Insulated-Lunch-Box_1601404958351.html",
    image: "/images/products/lunch-boxes/stainless-lunch-box-1.avif",
    gallery: Array.from(
      { length: 6 },
      (_, index) => `/images/products/lunch-boxes/stainless-lunch-box-${index + 1}.avif`,
    ),
    scenarioImages: [
      "/images/products/lunch-boxes/stainless-lunch-box-2.avif",
      "/images/products/lunch-boxes/stainless-lunch-box-3.avif",
    ],
    capacities: "Capacity confirmed by selected model",
    summaryRows: [
      ["Product Type", "Insulated food / lunch cup"],
      ["Food Container", "Stainless steel"],
      ["Capacity", "Confirmed by selected model"],
      ["Accessories", "Lid and spoon configuration confirmed by model"],
    ],
    specs: [
      ["Food Container", "Stainless steel"],
      ["Outer / Lid Components", "Confirmed by selected model"],
      ["Capacity", "Confirmed by selected model"],
      ["Logo & Packaging", "Confirmed from artwork and order brief"],
    ],
    keyFeatures: [
      {
        title: "Compact Food Cup",
        text: "Cylindrical format shown for breakfast, cereal, soup, and office meals.",
        image: "/images/products/lunch-boxes/stainless-lunch-box-2.avif",
      },
      {
        title: "Stainless Steel Container",
        text: "The product gallery shows a stainless steel inner food container.",
        image: "/images/products/lunch-boxes/stainless-lunch-box-3.avif",
      },
      {
        title: "Portable Lid Design",
        text: "Lid and utensil configuration are confirmed for the chosen model.",
        image: "/images/products/lunch-boxes/stainless-lunch-box-4.avif",
      },
    ],
    customOptions: [
      { title: "Color Matching", image: "/images/detail-options/pantone.png" },
      { title: "Logo Artwork", image: "/images/detail-options/silk-screen-printing.png", logoCrop: true },
      { title: "Retail Packaging", image: "/images/detail-options/packaging-customization.png" },
    ],
    detailPlaceholders: [
      "The cylindrical format is shown with a stainless steel food container and portable lid.",
      "Gallery images show use with soup, cereal, porridge, and other small meals.",
      "Capacity, insulation performance, lid parts, logo, and packaging are confirmed per selected model.",
    ],
    scenarioCopy: [
      "Suitable for office breakfast, school meals, soup, cereal, gift sets, and private-label foodware collections.",
      "Send the target capacity, color, logo, packaging, destination market, and order quantity for a precise quotation.",
    ],
    qualitySteps: simpleQualitySteps,
    faqs: commonB2bFaqs("this insulated lunch cup"),
    indexable: true,
    verificationNote: "Matched to the user-supplied Alibaba product page and gallery on 2026-07-30.",
  },
  "large-capacity-pp-four-sided-buckle-lunch-box": {
    category: "Lunch Box Series",
    categorySlug: "lunch-boxes",
    primaryKeyword: "large capacity PP four-sided buckle lunch box",
    title: "Large-Capacity PP Four-Sided Buckle Lunch Box",
    seoTitle: "Large-Capacity PP Four-Sided Buckle Lunch Box | Wholesale",
    metaDescription:
      "Large-capacity PP lunch box with four-sided buckle lid and divided food-storage format for wholesale and private-label programs. Confirm size and configuration.",
    heroSubtitle:
      "A large-capacity PP food-storage lunch box with four-sided buckle lid and divided-container options for school, office, retail, and private label.",
    sourceUrl:
      "https://www.alibaba.com/product-detail/Large-Capacity-Eco-friendly-PP-Lunch_1601404971426.html",
    image: "/images/products/lunch-boxes/pp-lunch-box-1.avif",
    gallery: Array.from(
      { length: 6 },
      (_, index) => `/images/products/lunch-boxes/pp-lunch-box-${index + 1}.avif`,
    ),
    scenarioImages: [
      "/images/products/lunch-boxes/pp-lunch-box-1.avif",
      "/images/products/lunch-boxes/pp-lunch-box-5.avif",
    ],
    capacities: "1L / 2L / 3L model range shown on source page",
    summaryRows: [
      ["Product Type", "Four-sided buckle lunch box"],
      ["Main Material", "PP"],
      ["Capacity Range", "1L / 2L / 3L models shown"],
      ["Structure", "Buckle lid; divided-container option shown"],
    ],
    specs: [
      ["Main Material", "PP"],
      ["Capacity Range", "1L / 2L / 3L models shown on source page"],
      ["Closure", "Four-sided buckle lid"],
      ["Interior", "Divided-container option shown"],
      ["Logo & Packaging", "Confirmed from artwork and order brief"],
    ],
    keyFeatures: [
      {
        title: "PP Food Container",
        text: "The source gallery identifies PP material for the food-contact container.",
        image: "/images/products/lunch-boxes/pp-lunch-box-2.avif",
      },
      {
        title: "Four-Sided Buckle Lid",
        text: "Four side latches are shown for closing the lid around the container.",
        image: "/images/products/lunch-boxes/pp-lunch-box-3.avif",
      },
      {
        title: "Divided Interior Option",
        text: "A divided-container configuration is shown for separating foods.",
        image: "/images/products/lunch-boxes/pp-lunch-box-5.avif",
      },
    ],
    customOptions: [
      { title: "Color Matching", image: "/images/detail-options/pantone.png" },
      { title: "Logo Artwork", image: "/images/detail-options/silk-screen-printing.png", logoCrop: true },
      { title: "Retail Packaging", image: "/images/detail-options/packaging-customization.png" },
    ],
    detailPlaceholders: [
      "The gallery shows a square PP lunch box with four latches around the lid.",
      "A divided interior option is shown for separating meal components.",
      "Capacity, color, exact lid parts, logo, packaging, and destination-market testing are confirmed per selected model.",
    ],
    scenarioCopy: [
      "Suitable for school, office, meal-prep, refrigerator storage, retail, and private-label foodware programs.",
      "Microwave suitability must be confirmed for the exact container and all included components before use or marketing.",
    ],
    qualitySteps: simpleQualitySteps,
    faqs: commonB2bFaqs("this PP lunch box"),
    indexable: true,
    verificationNote: "Matched to the user-supplied Alibaba product page and gallery on 2026-07-30.",
  },
};

export const indexableVerifiedProductSlugs = Object.keys(verifiedProductDetails);
