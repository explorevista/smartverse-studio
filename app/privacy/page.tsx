import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageShell, ContentCard, ContentList } from "@/components/content/page-shell";
import { Typography } from "@/components/ui/typography";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for SmartVerse Studio covering data handling, GDPR readiness, cookies, and advertising compliance.",
});

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy policy"
      description="SmartVerse Studio is committed to respectful data handling, transparency, and compliance with applicable privacy regulations."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <ContentCard title="Data handling">
          <Typography as="p" variant="body-sm" muted>
            SmartVerse Studio may collect limited contact and interaction data when users engage with the site, contact forms, or external links.
          </Typography>
        </ContentCard>
        <ContentCard title="GDPR-ready structure">
          <ContentList
            items={[
              { title: "Lawful basis", description: "Processing is limited to legitimate business and communication purposes." },
              { title: "User rights", description: "Users can request access, correction, or deletion where applicable." },
            ]}
          />
        </ContentCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ContentCard title="Cookie policy">
          <Typography as="p" variant="body-sm" muted>
            Cookies and analytics tools may be used in accordance with site settings and applicable regulations, including Google services where enabled.
          </Typography>
        </ContentCard>
        <ContentCard title="Adsense compliance">
          <Typography as="p" variant="body-sm" muted>
            Advertising partners and embedded services are used in a way that respects policy expectations, user consent, and transparency obligations.
          </Typography>
        </ContentCard>
      </div>
    </PageShell>
  );
}
