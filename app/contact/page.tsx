import { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageShell, ContentCard } from "@/components/content/page-shell";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { founder, socialLinks } from "@/data/ecosystem";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Contact SmartVerse Studio for partnerships, product inquiries, and business collaboration.",
});

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Get in touch with SmartVerse Studio"
      description="For partnership inquiries, product feedback, or collaboration opportunities, use the contact options below."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <ContentCard title="Founder & team">
          <Typography as="p" variant="body-md" muted>
            {founder.name} — {founder.role}
          </Typography>
          <Typography as="p" variant="body-sm" muted className="mt-3">
            {founder.email}
          </Typography>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="outline" size="md">
              <a href={`mailto:${founder.email}`}>Email founder</a>
            </Button>
            <Button asChild variant="ghost" size="md">
              <a href={`https://wa.me/${founder.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </ContentCard>

        <ContentCard title="Professional contact options">
          <Typography as="p" variant="body-sm" muted>
            Business inquiries, partnership opportunities, and ecosystem collaboration requests can be directed through the channels below.
          </Typography>
          <ul className="mt-4 space-y-3">
            {socialLinks.slice(0, 5).map((link) => (
              <li key={link.platform}>
                <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-label text-foreground/80 transition-colors hover:text-primary">
                  {link.platform}
                </Link>
              </li>
            ))}
          </ul>
        </ContentCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ContentCard title="Google Maps placeholder">
          <Typography as="p" variant="body-sm" muted>
            A future business location or office map can be embedded here once official location details are confirmed.
          </Typography>
        </ContentCard>
        <ContentCard title="Contact form architecture">
          <Typography as="p" variant="body-sm" muted>
            The contact form is prepared for future integration with a secure form backend and anti-spam protection.
          </Typography>
        </ContentCard>
      </div>
    </PageShell>
  );
}
