import { resourceArticles } from "./resourceArticles.mjs";

export const resources = resourceArticles;

export const resourceList = Object.entries(resources).map(([slug, item]) => ({
  slug,
  ...item,
}));
