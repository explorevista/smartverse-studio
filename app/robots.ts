import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.productionUrl;
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/dashboard", "/auth"] },
    ...(base ? { sitemap: `${base}/sitemap.xml` } : {}),
  };
}
