import Link from "next/link";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Typography } from "@/components/ui/typography";
import { headquarters, ecosystemProjects, founder } from "@/data/ecosystem";

export function Hero() {
  const liveProjectsCount = ecosystemProjects.filter(
    (project) => project.status === "live"
  ).length;
  const totalProjectsCount = ecosystemProjects.length;
  const highlightedProjects = ecosystemProjects.slice(0, 4);

  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl motion-safe:animate-pulse"
        aria-hidden="true"
      />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <Typography as="span" variant="overline">
              {headquarters.name} Ecosystem
            </Typography>
          </div>

          <Typography as="h1" variant="display-xl" className="text-balance">
            {headquarters.tagline}
          </Typography>

          <Typography as="p" variant="body-lg" muted className="mx-auto mt-6 max-w-2xl">
            {headquarters.description}
          </Typography>

          <Typography as="p" variant="caption" className="mt-4">
            Founded by {founder.name} — {founder.role}
          </Typography>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

          <GlassPanel className="mt-14 flex flex-wrap items-center justify-center gap-3 p-4">
            {highlightedProjects.map((project) => (
              <span
                key={project.id}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-caption text-foreground/80"
              >
                {project.name}
              </span>
            ))}
          </GlassPanel>

          <div className="mt-14 flex items-center justify-center gap-10 border-t border-white/10 pt-10">
            <div className="text-center">
              <Typography as="span" variant="display-lg" className="!text-3xl">
                {totalProjectsCount}
              </Typography>
              <Typography as="p" variant="caption" className="mt-1">
                Ecosystem Projects
              </Typography>
            </div>
            <div className="h-10 w-px bg-white/10" aria-hidden="true" />
            <div className="text-center">
              <Typography as="span" variant="display-lg" className="!text-3xl">
                {liveProjectsCount}
              </Typography>
              <Typography as="p" variant="caption" className="mt-1">
                Live Today
              </Typography>
            </div>
          </div>
        </div>
      </Container>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-safe:animate-bounce"
        aria-hidden="true"
      >
        <ChevronDown className="h-6 w-6 text-foreground/40" />
      </div>
    </section>
  );
}
