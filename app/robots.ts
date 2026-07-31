import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"],
    },
    sitemap: "https://smartversestudio.com/sitemap.xml",
    host: "https://smartversestudio.com",
  };
}
