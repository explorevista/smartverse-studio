import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageShell, ContentCard } from "@/components/content/page-shell";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description: "SmartVerse Studio blog architecture and content framework for future publishing.",
});

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="Blog"
      title="Blog architecture"
      description="The blog section is now scaffolded for future publishing using the same SmartVerse Studio content and brand standards."
    >
      <ContentCard title="Publishing framework">
        <Typography as="p" variant="body-sm" muted>
          Future articles can be structured with consistent metadata, categories, summaries, and SEO settings without changing the existing app architecture.
        </Typography>
      </ContentCard>
    </PageShell>
  );
}
