import { Container, Section, Grid } from "@/components/ui/layout";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { Typography } from "@/components/ui/typography";
import { headquarters } from "@/data/ecosystem";

export function Mission() {
  return (
    <Section id="mission">
      <Container>
        <SectionHeading eyebrow="Our Mission" title="Why the Ecosystem Exists" />

        <GlassPanel className="mx-auto max-w-3xl p-8 text-center sm:p-12">
          <Typography as="p" variant="body-lg" className="text-balance">
            {headquarters.description}
          </Typography>
        </GlassPanel>
      </Container>
    </Section>
  );
}
