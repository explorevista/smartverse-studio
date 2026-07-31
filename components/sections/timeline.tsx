import { Container, Section } from "@/components/ui/layout";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Typography } from "@/components/ui/typography";
import { SectionHeading } from "@/components/ui/section-heading";
import { roadmapPhases } from "@/data/ecosystem";

export function Timeline() {
  return (
    <Section id="roadmap">
      <Container>
        <SectionHeading eyebrow="Roadmap" title="Where the Ecosystem Stands Today" />

        <div className="mx-auto max-w-3xl space-y-4" role="list" aria-label="Project roadmap phases">
          {roadmapPhases.map((phase) => (
            <GlassPanel key={phase.id} className="border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/80 p-6 sm:p-7" role="listitem">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Typography as="h3" variant="h4">
                    {phase.label}
                  </Typography>
                  <Typography as="p" variant="body-sm" muted className="mt-2">
                    {phase.description}
                  </Typography>
                </div>
                <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-caption text-primary">
                  {phase.projects.length} project{phase.projects.length === 1 ? "" : "s"}
                </div>
              </div>

              {phase.projects.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {phase.projects.map((project) => (
                    <span
                      key={project.id}
                      className="rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)]/80 px-3 py-1 text-caption text-foreground/80"
                    >
                      {project.name}
                    </span>
                  ))}
                </div>
              )}
            </GlassPanel>
          ))}
        </div>
      </Container>
    </Section>
  );
}
