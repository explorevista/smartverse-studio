import { Container, Section } from "@/components/ui/layout";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { Typography } from "@/components/ui/typography";
import { headquarters, ecosystemProjects } from "@/data/ecosystem";

export function Mission() {
  const categories = Array.from(new Set(ecosystemProjects.map((project) => project.category)));

  return (
    <Section id="technology">
      <Container>
        <SectionHeading
          eyebrow="Technology & Vision"
          title="Scalable by Design, Built for the Future"
          description="The ecosystem is shaped around a scalable product architecture that connects AI, publishing, travel, healthcare, real estate, and local services under one shared standard."
        />

        <GlassPanel className="mx-auto max-w-5xl border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/80 p-8 text-left sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <Typography as="p" variant="overline">
                Product philosophy
              </Typography>
              <Typography as="p" variant="body-lg" className="mt-4 text-pretty">
                {headquarters.description}
              </Typography>
            </div>

            <div className="rounded-[24px] border border-[color:var(--border-color)] bg-[color:var(--surface)]/70 p-6">
              <Typography as="p" variant="label" className="text-foreground/70">
                Operating domains
              </Typography>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] px-3 py-1 text-caption text-foreground/80"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassPanel>
      </Container>
    </Section>
  );
}
