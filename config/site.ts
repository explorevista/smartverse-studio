// config/site.ts
// Centralized site configuration.
//
// When the official SmartVerse Studio production domain is purchased,
// update ONLY `productionUrl` below. Every file that needs the site URL
// (metadata, canonical tags, Open Graph, Twitter Cards, sitemap, robots)
// should read from this single source — never hardcode a domain elsewhere.

export const siteConfig = {
  name: "Smart Verse Studio",

  // PENDING: No confirmed, purchased production domain exists yet.
  // Do NOT fabricate a domain here. Leave this as `null` until a real,
  // owned domain (or a real, stable hosting deployment URL) is confirmed.
  productionUrl: null as string | null,
};
