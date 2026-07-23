// data/ecosystem.ts
// Central source of truth for the Smart Verse Studio ecosystem.

export interface SocialLink {
  platform: string;
  url: string;
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
}

export const founder = {
  name: "Muhammad Ali",
  role: "Founder & CEO",
  email: "muhammadalikn53@gmail.com",
  whatsapp: "+92 344 1695860",
  messenger: "+92 327 2358384",
};

export const headquarters = {
  name: "Smart Verse Studio",
  tagline: "Building the Future of AI, Learning, Travel and Digital Innovation",
  description:
    "Smart Verse Studio is a premium digital ecosystem connecting AI tools, digital publishing, travel platforms, healthcare innovation, rental marketplace solutions, local service platforms, affiliate commerce and future-ready digital experiences into one unified headquarters.",
  repository: "https://github.com/explorevista/smartverse-studio",
};

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
    alternateUrls: [
      { label: "Official branded domain (pending)", url: "" },
    ],
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

export const analyticsConfig = {
  ga4MeasurementId: "G-XFYP9S89XR",
  adsensePublisherId: "pub-7495097418204600",
  adsTxtLine: "google.com, pub-7495097418204600, DIRECT, f08c47fec0942fa0",
  searchConsoleVerification: "-RLGta2YHyblTY3SKORbDxIig2jg7TR1ZlQib9Hx28w",
};
