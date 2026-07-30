import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { headquarters, ecosystemProjects } from "@/data/ecosystem";

export function CtaBanner() {
  const liveProjectsCount = ecosystemProjects.filter(
    (project) => project.status === "live"
  ).length;

  return (
    <Section id="cta">
      <Container>
        <GlassPanel className="px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient opacity-40"
            aria-hidden="true"
          />

          <Typography as="h2" variant="display-md" className="mx-auto max-w-2xl">
            Ready to Explore the {headquarters.name} Ecosystem?
          </Typography>

          <Typography as="p" variant="body-md" muted className="mx-auto mt-4 max-w-xl">
            {headquarters.description}
          </Typography>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="gradient" size="lg">
              <Link href="/ecosystem">
                Explore the Ecosystem
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/founder">Meet the Founder</Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 border-t border-white/10 pt-6">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            <Typography as="span" variant="caption">
              {liveProjectsCount} live projects already operating inside the {headquarters.name} ecosystem
            </Typography>
          </div>
        </GlassPanel>
      </Container>
    </Section>
  );
}
