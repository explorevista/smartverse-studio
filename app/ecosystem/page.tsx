import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageShell, ContentCard, ContentList } from "@/components/content/page-shell";
import { Container, Grid, Section } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ecosystemProjects, platformFeatures, roadmapPhases, headquarters } from "@/data/ecosystem";

export const metadata: Metadata = createMetadata({
  title: "Ecosystem",
  description: "Explore the SmartVerse Studio ecosystem, mission, architecture, and roadmap using the existing project data.",
});

export default function EcosystemPage() {
  const categories = Array.from(new Set(ecosystemProjects.map((project) => project.category)));
  const liveProjects = ecosystemProjects.filter((project) => project.status === "live").length;

  return (
    <>
      <PageShell
        eyebrow="Ecosystem"
        title="One headquarters, many connected products"
        description="The SmartVerse Studio ecosystem brings each product under one shared mission, infrastructure, and product standard."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ContentCard title="Mission & Vision">
            <Typography as="p" variant="body-md" muted>
              {headquarters.description}
            </Typography>
            <Typography as="p" variant="body-sm" muted className="mt-3">
              Every product is designed to operate with a consistent premium experience, clear trust model, and scalable product architecture.
            </Typography>
          </ContentCard>
          <ContentCard title="Platform architecture">
            <ContentList
              items={[
                { title: "Shared brand system", description: "The same foundation powers every product experience across the ecosystem." },
                { title: "Scalable delivery", description: "Projects are grouped around a common operating model for future growth." },
                { title: "Connected infrastructure", description: "The ecosystem is designed for future expansion into authentication, data, and collaboration services." },
              ]}
            />
          </ContentCard>
        </div>

        <Section className="py-12">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <GlassPanel className="border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/80 p-6 sm:p-8">
              <Typography as="h3" variant="h4">
                Current footprint
              </Typography>
              <Typography as="span" variant="display-lg" className="mt-4 block !text-3xl sm:!text-4xl">
                {liveProjects}+ live
              </Typography>
              <Typography as="p" variant="body-sm" muted className="mt-3">
                The portfolio spans AI products, publishing, travel, healthcare, and local services using one shared operating model.
              </Typography>
            </GlassPanel>
            <ContentCard title="Categories">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span key={category} className="rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)]/80 px-3 py-1 text-caption text-foreground/80">
                    {category}
                  </span>
                ))}
              </div>
            </ContentCard>
          </div>
        </Section>

        <Section className="py-0">
          <ContentCard title="Technology stack & shared infrastructure">
            <Grid cols={2} gap="md">
              {platformFeatures.map((feature) => (
                <div key={feature.id} className="rounded-[24px] border border-[color:var(--border-color)] bg-[color:var(--surface)]/70 p-5">
                  <Typography as="h4" variant="h5">
                    {feature.title}
                  </Typography>
                  <Typography as="p" variant="body-sm" muted className="mt-2">
                    {feature.description}
                  </Typography>
                </div>
              ))}
            </Grid>
          </ContentCard>
        </Section>

        <Section className="py-12">
          <ContentCard title="Roadmap">
            <div className="space-y-4">
              {roadmapPhases.map((phase) => (
                <div key={phase.id} className="rounded-[24px] border border-[color:var(--border-color)] bg-[color:var(--surface)]/70 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Typography as="h4" variant="h5">
                      {phase.label}
                    </Typography>
                    <span className="rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] px-3 py-1 text-caption text-foreground/70">
                      {phase.projects.length} project{phase.projects.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <Typography as="p" variant="body-sm" muted className="mt-2">
                    {phase.description}
                  </Typography>
                </div>
              ))}
            </div>
          </ContentCard>
        </Section>
      </PageShell>
    </>
  );
}
