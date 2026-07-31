import { Mail, MessageCircle } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { founder, headquarters } from "@/data/ecosystem";

export function FounderSection() {
  return (
    <Section id="founder">
      <Container>
        <GlassPanel className="mx-auto max-w-5xl border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/80 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <Typography as="span" variant="overline">
                The Founder
              </Typography>

              <Typography as="h2" variant="display-md" className="mt-4">
                {founder.name}
              </Typography>

              <Typography as="p" variant="body-sm" className="mt-1 text-primary">
                {founder.role}, {headquarters.name}
              </Typography>

              <Typography as="p" variant="body-md" muted className="mt-6 max-w-2xl">
                {headquarters.name} was founded by {founder.name} to bring AI tools, digital publishing, travel, healthcare, real estate, and local services together under one premium, unified ecosystem — built with the belief that every product should share the same standard of quality and trust.
              </Typography>
            </div>

            <div className="rounded-[24px] border border-[color:var(--border-color)] bg-[color:var(--surface)]/70 p-6">
              <Typography as="p" variant="label" className="text-foreground/70">
                Direct contact
              </Typography>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild variant="outline" size="md">
                  <a href={`mailto:${founder.email}`} aria-label={`Email ${founder.name}`}>
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {founder.email}
                  </a>
                </Button>

                <Button asChild variant="ghost" size="md">
                  <a
                    href={`https://wa.me/${founder.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contact ${founder.name} on WhatsApp`}
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </GlassPanel>
      </Container>
    </Section>
  );
}
