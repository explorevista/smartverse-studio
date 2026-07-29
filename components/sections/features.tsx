import {
  Sparkles,
  BookOpen,
  MapPinned,
  HeartPulse,
  Home,
  Wrench,
  ShieldCheck,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { Container, Section, Grid } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Typography } from "@/components/ui/typography";
import { headquarters, platformFeatures } from "@/data/ecosystem";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  "book-open": BookOpen,
  "map-pinned": MapPinned,
  "heart-pulse": HeartPulse,
  home: Home,
  wrench: Wrench,
  "shield-check": ShieldCheck,
  "layout-grid": LayoutGrid,
};

export function Features() {
  return (
    <Section id="features">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title={`What Powers the ${headquarters.name} Ecosystem`}
          description="One shared foundation, purpose-built for every vertical inside the ecosystem."
        />

        <Grid cols={4} gap="md">
          {platformFeatures.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <GlassPanel key={feature.id} className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>

                <Typography as="h3" variant="h4" className="mt-4">
                  {feature.title}
                </Typography>

                <Typography as="p" variant="body-sm" muted className="mt-2">
                  {feature.description}
                </Typography>
              </GlassPanel>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}
