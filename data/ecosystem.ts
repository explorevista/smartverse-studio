// ============================================================================
// data/ecosystem.ts
// SMART VERSE STUDIO — SINGLE SOURCE OF TRUTH
// ----------------------------------------------------------------------------
// This file is the ONLY authoritative source for organization, founder,
// branding, contact, analytics, SEO, social, and ecosystem project data.
// Every component in this repository must read from here — never hardcode
// this information elsewhere.
//
// All values below are real, founder-verified production data.
// No placeholder, example, or invented values exist in this file.
// ============================================================================

// ----------------------------------------------------------------------------
// PHASE 1 — TYPES
// ----------------------------------------------------------------------------

export interface Founder {
  name: string;
  role: string;
  email: string;
  whatsapp: string;
  messenger: string;
}

export interface Headquarters {
  name: string;
  tagline: string;
  description: string;
  repository: string;
}

export interface AnalyticsConfig {
  ga4MeasurementId: string;
  adsensePublisherId: string;
  adsTxtLine: string;
  searchConsoleVerification: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
  username?: string;
  order?: number;
}

export interface EcosystemProject {
  id: string;
  name: string;
  tagline?: string;
  description?: string;
  category: string;
  status: "live" | "in-development" | "planning";
  officialUrl?: string;
  alternateUrls?: { label: string; url: string }[];
  email?: string;
  isHeadquarters?: boolean;
  slug?: string;
  logo?: string;
  thumbnail?: string;
  github?: string;
  technologies?: string[];
  featured?: boolean;
  priority?: number;
  launchYear?: number;
}

export interface RoadmapPhase {
  id: string;
  label: string;
  description: string;
  projects: EcosystemProject[];
}

export interface PlatformFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FeaturedTool {
  id: string;
  name: string;
  category: string;
  cta: string;
}

// ----------------------------------------------------------------------------
// PHASE 2 — FOUNDER & HEADQUARTERS
// ----------------------------------------------------------------------------

export const founder: Founder = {
  name: "Muhammad Ali",
  role: "Founder & CEO",
  email: "muhammadalikn53@gmail.com",
  whatsapp: "+92 344 1695860",
  messenger: "+92 327 2358384",
};

export const headquarters: Headquarters = {
  name: "SmartVerse Studio",
  tagline: "Building Smarter Digital Products for the Future",
  description:
    "Smart Verse Studio is a premium digital ecosystem connecting AI tools, digital publishing, travel platforms, healthcare innovation, rental marketplace solutions, local service platforms, affiliate commerce and future-ready digital experiences into one unified headquarters.",
  repository: "https://github.com/explorevista/smartverse-studio",
};

// ----------------------------------------------------------------------------
// PHASE 3 — ANALYTICS & SEO CONFIGURATION
// ----------------------------------------------------------------------------

export const analyticsConfig: AnalyticsConfig = {
  ga4MeasurementId: "G-XFYP9S89XR",
  adsensePublisherId: "pub-7495097418204600",
  adsTxtLine: "google.com, pub-7495097418204600, DIRECT, f08c47fec0942fa0",
  searchConsoleVerification: "-RLGta2YHyblTY3SKORbDxIig2jg7TR1ZlQib9Hx28w",
};

// ----------------------------------------------------------------------------
// PHASE 4 — ECOSYSTEM PROJECTS
// ----------------------------------------------------------------------------

export const ecosystemProjects: EcosystemProject[] = [
  {
    id: "smart-tools-universe",
    name: "Smart Tools Universe",
    tagline: "Explore Smart Tools Universe",
    description:
      "One of the world's most modern AI productivity platforms, helping students, creators, freelancers, businesses, marketers, developers and researchers solve daily tasks using intelligent tools inside one premium SaaS experience.",
    category: "AI SaaS Platform",
    status: "in-development",
    officialUrl: "https://smart-tools-universe-pro.netlify.app/",
    email: "smarttoolsuniverse2026@gmail.com",
  },
  {
    id: "digital-reads-studio",
    name: "Digital Reads Studio",
    description:
      "Digital publishing platform for books, learning resources, templates, guides, and courses on digital entrepreneurship.",
    category: "Digital Publishing",
    status: "live",
    officialUrl: "https://digitalreadsstudio.lovable.app/",
    email: "digitalreadsstudio5@gmail.com",
  },
  {
    id: "explorevista",
    name: "ExploreVista",
    description:
      "Travel inspiration platform for destination discovery, photography, travel guides, and hidden gems across Pakistan and internationally.",
    category: "Travel & Discovery",
    status: "live",
    officialUrl: "https://sites.google.com/view/explorevista-2025/home",
  },
  {
    id: "travelscope-360",
    name: "TravelScope 360",
    description:
      "Affiliate travel platform for hotel booking, flights, tours, travel packages, and trip planning.",
    category: "Travel Affiliate Platform",
    status: "live",
    officialUrl: "https://leafy-creponne-841496.netlify.app/",
    alternateUrls: [{ label: "Official branded domain (pending)", url: "" }],
    email: "contact@travelscope360.com",
  },
  {
    id: "smart-rent-universe",
    name: "Smart Rent Universe",
    description:
      "Pakistan's rental marketplace connecting tenants directly with property owners via WhatsApp — no middlemen.",
    category: "Real Estate Marketplace",
    status: "live",
    officialUrl: "https://smartrentuniverse.pk/",
    alternateUrls: [
      { label: "GitHub mirror", url: "https://explorevista.github.io/smart-rent-universe/" },
      { label: "Replit version", url: "https://smart-rent-universe.replit.app" },
    ],
  },
  {
    id: "greencare-digital-hospital",
    name: "GreenCare Digital Hospital",
    description:
      "Digital healthcare platform connecting patients with trusted, verified doctors across Pakistan for online appointment booking.",
    category: "Healthcare",
    status: "live",
    officialUrl: "https://greencare.netlify.app/",
    alternateUrls: [
      {
        label: "GitHub mirror",
        url: "https://explorevista.github.io/greencare-digital-hospitalGreenCare-Digital-Hospital-Pakistan/",
      },
    ],
    email: "greencontrolcenteraiagent@gmail.com",
  },
  {
    id: "karigarhub-pakistan",
    name: "KarigarHub Pakistan",
    category: "Local Services Marketplace",
    status: "live",
    officialUrl: "https://explorevista.github.io/karegarhub-pakistan/",
  },
  {
    id: "profit-pulse",
    name: "Profit Pulse",
    category: "Affiliate Commerce",
    status: "planning",
  },
];

// ----------------------------------------------------------------------------
// PHASE 5 — SOCIAL LINKS
// ----------------------------------------------------------------------------

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-ali-kn-22505a28a" },
  { platform: "Telegram", url: "https://t.me/Aiearnverse" },
  { platform: "Yo.Fan", url: "https://yo.fan/smartworks" },
  { platform: "Facebook (Main)", url: "https://www.facebook.com/share/1HtgWdb4eR/" },
  { platform: "Facebook (Travel)", url: "https://www.facebook.com/share/1aQ3bjzXhG/" },
  { platform: "Facebook (Prosperity Hub)", url: "https://www.facebook.com/share/1CAX3kBsUk/" },
  { platform: "Facebook (Green Control Center)", url: "https://www.facebook.com/share/1CE7nLSxZy/" },
  { platform: "Instagram (ExploreVista)", url: "https://www.instagram.com/explorevista2025" },
  { platform: "Instagram (Inspire Reads Hub)", url: "https://www.instagram.com/inspirereadshub2025" },
];

// ----------------------------------------------------------------------------
// PHASE 6 — PLATFORM FEATURES, FEATURED TOOLS, ROADMAP
// ----------------------------------------------------------------------------

export const platformFeatures: PlatformFeature[] = [
  { id: "ai", title: "AI-Powered Tools", description: "Smart Tools Universe brings intelligent, productivity-first AI tools into one workspace.", icon: "sparkles" },
  { id: "publishing", title: "Digital Publishing", description: "Digital Reads Studio delivers curated books and learning resources under one platform.", icon: "book-open" },
  { id: "travel", title: "Travel & Discovery", description: "ExploreVista and TravelScope 360 connect travelers to destinations, deals, and bookings.", icon: "map-pinned" },
  { id: "healthcare", title: "Digital Healthcare", description: "GreenCare Digital Hospital links patients with verified doctors for online consultations.", icon: "heart-pulse" },
  { id: "realestate", title: "Real Estate Marketplace", description: "Smart Rent Universe connects tenants directly with property owners across Pakistan.", icon: "home" },
  { id: "local", title: "Local Services", description: "KarigarHub Pakistan connects households with trusted, verified skilled workers.", icon: "wrench" },
  { id: "architecture", title: "Firebase-Ready Architecture", description: "Built on a scalable Next.js and Firebase foundation, ready for authentication and data at any scale.", icon: "shield-check" },
  { id: "design", title: "Premium Design System", description: "One consistent, modern UI system shared across the entire ecosystem — fast, responsive, accessible.", icon: "layout-grid" },
];

export const featuredTools: FeaturedTool[] = [
  { id: "gif-creator", name: "GIF Creator", category: "Media", cta: "Open Tool" },
  { id: "qr-generator", name: "QR Generator", category: "Utility", cta: "Generate QR" },
  { id: "password-generator", name: "Password Generator", category: "Security", cta: "Generate Password" },
  { id: "pdf-toolkit", name: "PDF Toolkit", category: "Documents", cta: "Open Toolkit" },
  { id: "resume-builder", name: "Resume Builder", category: "Career", cta: "Build Resume" },
  { id: "ai-translator", name: "AI Translator", category: "AI Productivity", cta: "Translate Now" },
];

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "live",
    label: "Live Today",
    description: "Projects already serving real users.",
    projects: ecosystemProjects.filter((p) => p.status === "live"),
  },
  {
    id: "in-development",
    label: "In Development",
    description: "Actively being built inside the ecosystem.",
    projects: ecosystemProjects.filter((p) => p.status === "in-development"),
  },
  {
    id: "planning",
    label: "Planning",
    description: "Scoped for future development.",
    projects: ecosystemProjects.filter((p) => p.status === "planning"),
  },
];

// ----------------------------------------------------------------------------
// PHASE 7 — ORGANIZATION, BRANDING & PLATFORM CONFIGURATION
// ----------------------------------------------------------------------------

export interface Organization {
  legalName: string;
  brandName: string;
  shortName: string;
  founder: string;
  brandEmail: string;
  supportEmail: string;
  repository: string;
  country: string;
  timezone: string;
  currency: string;
  defaultLanguage: string;
  copyrightYear: number;
  mission: string;
}

export const organization: Organization = {
  legalName: headquarters.name,
  brandName: headquarters.name,
  shortName: "SmartVerse",
  founder: founder.name,
  brandEmail: founder.email,
  supportEmail: founder.email,
  repository: headquarters.repository,
  country: "Pakistan",
  timezone: "Asia/Karachi",
  currency: "PKR",
  defaultLanguage: "en",
  copyrightYear: new Date().getFullYear(),
  mission: headquarters.description,
};

export interface BrandingAssets {
  logo: string;
  logoDark: string;
  logoLight: string;
  favicon: string;
  appleTouchIcon: string;
  openGraphImage: string;
  twitterImage: string;
  themeColor: string;
  accentColor: string;
}

// Paths only — actual files are added once the verified asset export
// (Google Drive) is placed into public/assets/, per existing folder structure.
export const brandingAssets: BrandingAssets = {
  logo: "/assets/logos/smartverse-logo.png",
  logoDark: "/assets/logos/smartverse-logo-dark.png",
  logoLight: "/assets/logos/smartverse-logo-light.png",
  favicon: "/assets/favicon/favicon.ico",
  appleTouchIcon: "/assets/favicon/apple-touch-icon.png",
  openGraphImage: "/assets/social/og-image.jpg",
  twitterImage: "/assets/social/og-image.jpg",
  themeColor: "#0A0A0F",
  accentColor: "#D4AF37",
};

export interface PlatformFeatureFlags {
  aiAssistant: boolean;
  voiceAssistant: boolean;
  darkTheme: boolean;
  lightTheme: boolean;
  analytics: boolean;
  adsense: boolean;
  searchConsole: boolean;
  structuredData: boolean;
  sitemap: boolean;
  robots: boolean;
  openGraph: boolean;
  twitterCards: boolean;
}

export const platformFeatureFlags: PlatformFeatureFlags = {
  aiAssistant: false,
  voiceAssistant: false,
  darkTheme: true,
  lightTheme: true,
  analytics: Boolean(analyticsConfig.ga4MeasurementId),
  adsense: Boolean(analyticsConfig.adsensePublisherId),
  searchConsole: Boolean(analyticsConfig.searchConsoleVerification),
  structuredData: false,
  sitemap: true,
  robots: true,
  openGraph: true,
  twitterCards: true,
};
