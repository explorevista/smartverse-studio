import type { Metadata, Viewport } from "next";
import { analyticsConfig } from "@/data/ecosystem";

export const siteConfig = {
  name: "Smart Verse Studio",
  title: "Smart Verse Studio",
  description:
    "Official Smart Verse Studio ecosystem connecting AI, Digital Publishing, Travel, Healthcare, Marketplace, SaaS, and Future Digital Innovation.",
  url: "https://smartversestudio.com",
  locale: "en_US",
};

export function createMetadata(overrides: Metadata = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: siteConfig.url,
    },
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    keywords: [
      "Smart Verse Studio",
      "AI",
      "SaaS",
      "Travel",
      "Healthcare",
      "Marketplace",
      "Digital Publishing",
      "Firebase",
      "Next.js",
      "Muhammad Ali",
    ],
    authors: [{ name: "Muhammad Ali" }],
    creator: "Muhammad Ali",
    publisher: siteConfig.name,
    other: {
      "google-site-verification": analyticsConfig.searchConsoleVerification,
      "google-adsense-account": analyticsConfig.adsensePublisherId,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
    },
    ...overrides,
  } satisfies Metadata;
}

export function createStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      description:
        "Official Smart Verse Studio ecosystem connecting AI, digital publishing, travel, healthcare, marketplace solutions, and future-ready digital experiences.",
      sameAs: [
        "https://www.linkedin.com/company/smartverse-studio",
        "https://www.instagram.com/smartverse.studio",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
      ],
    },
  ];
}

export const viewportConfig: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0F",
};
