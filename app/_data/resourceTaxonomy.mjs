export const resourceModules = [
  {
    id: "engineering-manufacturing-quality",
    label: "Engineering, Manufacturing & Quality",
    categories: ["Manufacturing", "Product Engineering", "Quality Assurance", "Product Education", "Smart Drinkware Engineering"],
  },
  {
    id: "materials-safety-compliance",
    label: "Materials, Safety & Compliance",
    categories: ["Materials and Safety", "Materials and OEM", "Materials and Sourcing", "Materials and Product Design", "Compliance and Evidence", "Care and Product Support"],
  },
  {
    id: "oem-odm-customization-packaging",
    label: "OEM/ODM, Customization & Packaging",
    categories: ["Product Development", "OEM/ODM Engineering", "Tooling and Cost", "Private Label", "IP and Procurement", "Customization", "Decoration Engineering", "Color and Finishing", "Tactile Branding", "Packaging and Fulfillment", "Luxury Packaging"],
  },
  {
    id: "sourcing-suppliers-commercial",
    label: "Sourcing, Suppliers & Commercial Strategy",
    categories: ["Supplier Evaluation", "Global Sourcing", "Global Sourcing Strategy", "Supplier Due Diligence", "Plastic Bottle Sourcing"],
  },
  {
    id: "selection-use-cases-gifting",
    label: "Product Selection, Use Cases & Gifting",
    categories: ["Product Selection", "Coffee Drinkware", "Outdoor Drinkware", "Corporate Gifting"],
  },
];

export function getResourceModule(category) {
  return resourceModules.find((module) => module.categories.includes(category));
}
