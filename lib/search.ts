import { ecosystemProjects, type EcosystemProject } from "@/data/ecosystem";

export type SearchEntryType = "project" | "page";

export interface SearchEntry {
  id: string;
  title: string;
  description: string;
  href: string;
  type: SearchEntryType;
  keywords: string[];
}

export function getSearchEntries(): SearchEntry[] {
  const projectEntries: SearchEntry[] = ecosystemProjects.map((project) => ({
    id: `project-${project.id}`,
    title: project.name,
    description: project.description ?? project.tagline ?? project.category,
    href: `/project/${project.id}`,
    type: "project",
    keywords: [project.category, project.status, ...(project.tags ?? [])],
  }));

  const pageEntries: SearchEntry[] = [
    {
      id: "page-ecosystem",
      title: "Ecosystem",
      description: "Mission, vision, platform architecture, categories, and roadmap.",
      href: "/ecosystem",
      type: "page",
      keywords: ["ecosystem", "vision", "roadmap", "architecture"],
    },
    {
      id: "page-contact",
      title: "Contact",
      description: "Contact SmartVerse Studio for collaboration and partnership inquiries.",
      href: "/contact",
      type: "page",
      keywords: ["contact", "partnership", "business"],
    },
    {
      id: "page-privacy",
      title: "Privacy",
      description: "Privacy policy, GDPR-ready structure, and advertising compliance details.",
      href: "/privacy",
      type: "page",
      keywords: ["privacy", "gdpr", "cookie", "adsense"],
    },
    {
      id: "page-terms",
      title: "Terms",
      description: "Terms of service covering AI usage, content ownership, and affiliate disclosure.",
      href: "/terms",
      type: "page",
      keywords: ["terms", "usage", "copyright", "affiliate"],
    },
    {
      id: "page-blog",
      title: "Blog",
      description: "Content architecture for future documentation, changelogs, guides, and announcements.",
      href: "/blog",
      type: "page",
      keywords: ["blog", "documentation", "changelog", "guides"],
    },
  ];

  return [...projectEntries, ...pageEntries];
}

export function searchEntries(query: string): SearchEntry[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return getSearchEntries().slice(0, 6);
  }

  return getSearchEntries().filter((entry) => {
    const haystack = [entry.title, entry.description, ...entry.keywords].join(" ").toLowerCase();
    return haystack.includes(normalized);
  });
}
