import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.productionUrl;
  if (!base) return [];
  return [{ url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
