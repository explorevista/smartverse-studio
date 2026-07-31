import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, Grid } from "@/components/ui/layout";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Typography } from "@/components/ui/typography";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardBadge } from "@/components/ui/card";
import { ecosystemProjects } from "@/data/ecosystem";

export function EcosystemOverview() {
  const featuredProjects = ecosystemProjects.filter((project) => project.status !== "planning");
  const liveProjects = ecosystemProjects.filter((project) => project.status === "live").length;

  return (
    <Section id="ecosystem">
      <Container>
        <SectionHeading
          eyebrow="Ecosystem Overview"
          title="One Headquarters, Many Connected Products"
          description="SmartVerse Studio brings independent products under a shared identity, each solving a real problem and contributing to one broader digital ecosystem."
        />

        <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassPanel className="border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/80 p-6 sm:p-8">
            <Typography as="p" variant="overline">
              Featured Products
            </Typography>
            <Typography as="h3" variant="h3" className="mt-3">
              Built to operate across AI, publishing, travel, healthcare, real estate, and local services.
            </Typography>
            <Typography as="p" variant="body-sm" muted className="mt-4 max-w-2xl">
              A selection of flagship projects currently live or in development, united by a single premium experience and shared product standard.
            </Typography>
          </GlassPanel>

          <GlassPanel className="border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/80 p-6 sm:p-8">
            <Typography as="p" variant="overline">
              Active footprint
            </Typography>
            <Typography as="span" variant="display-lg" className="mt-3 block !text-3xl sm:!text-4xl">
              {liveProjects}+ live
            </Typography>
            <Typography as="p" variant="body-sm" muted className="mt-3">
              The current portfolio spans production-ready offerings and carefully staged launches across the wider ecosystem.
            </Typography>
          </GlassPanel>
        </div>

        <Grid cols={3} gap="md" className="mt-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <CardBadge status={project.status} />
                </div>

                <Typography as="h3" variant="h4">
                  {project.name}
                </Typography>

                <Typography as="p" variant="caption" className="mt-1 text-primary">
                  {project.category}
                </Typography>

                {project.description && (
                  <Typography as="p" variant="body-sm" muted className="mt-3">
                    {project.description}
                  </Typography>
                )}
              </div>

              {project.officialUrl && (
                <Link
                  href={project.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name} (opens in a new tab)`}
                  className="mt-6 inline-flex items-center gap-1 rounded-full text-label text-foreground/90 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring-color)]"
                >
                  Visit Project
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              )}
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
