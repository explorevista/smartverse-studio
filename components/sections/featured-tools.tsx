import { Wrench } from "lucide-react";
import { Container, Section, Grid } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { featuredTools, ecosystemProjects } from "@/data/ecosystem";

export function FeaturedTools() {
  const smartTools = ecosystemProjects.find((p) => p.id === "smart-tools-universe");

  return (
    <Section id="featured-tools">
      <Container>
        <SectionHeading
          eyebrow="Smart Tools Universe"
          title="Featured AI Tools"
          description="A preview of the AI productivity tools available inside Smart Tools Universe."
        />

        <Grid cols={3} gap="md">
          {featuredTools.map((tool) => (
            <GlassPanel key={tool.id} className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <Wrench className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <Typography as="h3" variant="h4" className="mt-4">
                {tool.name}
              </Typography>
              <Typography as="p" variant="caption" className="mt-1 text-primary">
                {tool.category}
              </Typography>
              {smartTools?.officialUrl && (
                <Button asChild variant="outline" size="sm" className="mt-4">
                  <a href={smartTools.officialUrl} target="_blank" rel="noopener noreferrer">
                    {tool.cta}
                  </a>
                </Button>
              )}
            </GlassPanel>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
