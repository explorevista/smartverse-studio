import { Container, Section } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { roadmapPhases } from "@/data/ecosystem";

export function Timeline() {
  return (
    <Section id="roadmap">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Typography as="span" variant="overline">
            Roadmap
          </Typography>
          <Typography as="h2" variant="display-md" className="mt-4">
            Where the Ecosystem Stands Today
          </Typography>
        </div>

        <div className="mx-auto max-w-2xl">
          {roadmapPhases.map((phase, index) => (
            <div key={phase.id} className="relative pl-10 pb-12 last:pb-0">
              {index !== roadmapPhases.length - 1 && (
                <div
                  className="absolute left-[7px] top-4 h-full w-px bg-white/10"
                  aria-hidden="true"
                />
              )}
              <div
                className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background"
                aria-hidden="true"
              />

              <Typography as="h3" variant="h4">
                {phase.label}
              </Typography>
              <Typography as="p" variant="body-sm" muted className="mt-1">
                {phase.description}
              </Typography>

              {phase.projects.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {phase.projects.map((project) => (
                    <span
                      key={project.id}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-caption text-foreground/80"
                    >
                      {project.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
