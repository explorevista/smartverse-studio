import { Container, Section, Grid } from "@/components/ui/layout";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { Typography } from "@/components/ui/typography";
import { headquarters, ecosystemProjects } from "@/data/ecosystem";

export function Statistics() {
  const totalProjects = ecosystemProjects.length;
  const liveProjects = ecosystemProjects.filter((p) => p.status === "live").length;
  const inDevelopment = ecosystemProjects.filter((p) => p.status === "in-development").length;
  const categories = new Set(ecosystemProjects.map((p) => p.category)).size;

  const stats = [
    { label: "Ecosystem Projects", value: totalProjects },
    { label: "Live Today", value: liveProjects },
    { label: "In Development", value: inDevelopment },
    { label: "Industry Categories", value: categories },
  ];

  return (
    <Section id="statistics">
      <Container>
        <SectionHeading
          eyebrow="By the Numbers"
          title={`${headquarters.name} in Real Numbers`}
          description="No projections, no invented metrics — just the current, real state of the ecosystem."
        />

        <Grid cols={4} gap="md">
          {stats.map((stat) => (
            <GlassPanel key={stat.label} className="p-6 text-center">
              <Typography as="span" variant="display-lg" className="!text-4xl text-primary">
                {stat.value}
              </Typography>
              <Typography as="p" variant="body-sm" muted className="mt-2">
                {stat.label}
              </Typography>
            </GlassPanel>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
