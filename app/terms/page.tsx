import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageShell, ContentCard, ContentList } from "@/components/content/page-shell";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms of service for SmartVerse Studio covering AI usage, content ownership, copyright, and affiliate disclosures.",
});

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms"
      title="Terms of service"
      description="These terms describe acceptable use of the SmartVerse Studio website, content, and associated ecosystem materials."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <ContentCard title="AI usage">
          <Typography as="p" variant="body-sm" muted>
            Content and technology references on the site may include AI-driven concepts and services. Users should review product-specific information directly where applicable.
          </Typography>
        </ContentCard>
        <ContentCard title="Content ownership">
          <Typography as="p" variant="body-sm" muted>
            SmartVerse Studio retains ownership of its brand, content, and ecosystem materials unless explicitly stated otherwise by a specific project or partner.
          </Typography>
        </ContentCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ContentCard title="Copyright & use">
          <ContentList
            items={[
              { title: "Respect rights", description: "Users should not reproduce or redistribute site content without permission." },
              { title: "External links", description: "SmartVerse Studio is not responsible for the content of third-party sites linked from the platform." },
            ]}
          />
        </ContentCard>
        <ContentCard title="Affiliate disclosure">
          <Typography as="p" variant="body-sm" muted>
            Some travel and commerce-related experiences may include affiliate or partner relationships. These are disclosed where relevant and handled transparently.
          </Typography>
        </ContentCard>
      </div>
    </PageShell>
  );
}
