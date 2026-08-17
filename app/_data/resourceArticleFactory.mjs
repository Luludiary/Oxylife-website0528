export const RESOURCE_AUTHOR = {
  name: "Lyra GAO",
  role: "Marketing Director",
};

export const RESOURCE_DATES = {
  published: "2026-08-11",
  modified: "2026-08-11",
  display: "August 11, 2026",
};

export function defineResource(resource) {
  return {
    category: "B2B Buyer Guide",
    author: RESOURCE_AUTHOR,
    dates: RESOURCE_DATES,
    ...resource,
  };
}

export function resourceWordCount(resource) {
  const words = [];

  function collect(value, key = "") {
    if (typeof value === "string") {
      if (!key.toLowerCase().includes("href")) words.push(value);
      return;
    }
    if (Array.isArray(value)) {
      value.forEach((item) => collect(item, key));
      return;
    }
    if (value && typeof value === "object") {
      Object.entries(value).forEach(([childKey, childValue]) => collect(childValue, childKey));
    }
  }

  collect(resource);
  return words.join(" ").trim().split(/\s+/).filter(Boolean).length;
}
