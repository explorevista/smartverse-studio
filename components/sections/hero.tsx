import Link from "next/link";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Typography } from "@/components/ui/typography";
import { headquarters, ecosystemProjects } from "@/data/ecosystem";

function HeroBadge({ name }: { name: string }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 shadow-[0_8px_24px_rgba(212,175,55,0.08)] backdrop-blur-sm">
      <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
      <Typography as="span" variant="overline">
        {name} | Digital Product Ecosystem
      </Typography>
    </div>
  );
}

function HeroHeadline({ tagline, id }: { tagline: string; id?: string }) {
  return (
    <Typography as="h1" id={id} variant="display-xl" className="max-w-3xl text-balance">
      {tagline}
    </Typography>
  );
}

function HeroSupportingHeadline({ positioning }: { positioning: string }) {
  return (
    <Typography as="p" variant="body-sm" muted className="mt-4 max-w-2xl text-pretty">
      {positioning}
    </Typography>
  );
}

function HeroDescription({ description }: { description: string }) {
  return (
    <Typography as="p" variant="body-lg" muted className="mx-auto mt-6 max-w-2xl text-pretty">
      {description}
    </Typography>
  );
}

function HeroActions() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Button asChild variant="gradient" size="lg">
        <Link href="#ecosystem">
          Explore the Ecosystem
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Button>
      <Button asChild variant="outline" size="lg">
        <Link href="#features">View Products</Link>
      </Button>
    </div>
  );
}

function TrustIndicators({ projects }: { projects: typeof ecosystemProjects }) {
  return (
    <GlassPanel className="mt-12 flex w-full flex-wrap items-center justify-center gap-3 border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/80 p-4 sm:p-5" role="list" aria-label="Featured ecosystem projects">
      {projects.map((project) => (
        <span
          key={project.id}
          role="listitem"
          className="rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)]/80 px-4 py-1.5 text-caption text-foreground/80"
        >
          {project.name}
        </span>
      ))}
    </GlassPanel>
  );
}

function HeroStats({ totalProjectsCount, liveProjectsCount }: { totalProjectsCount: number; liveProjectsCount: number }) {
  return (
    <div className="mt-10 grid w-full max-w-3xl gap-4 sm:grid-cols-2">
      <GlassPanel className="border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/80 p-6 text-center">
        <Typography as="span" variant="display-lg" className="!text-3xl">
          {totalProjectsCount}
        </Typography>
        <Typography as="p" variant="caption" className="mt-2">
          Ecosystem projects
        </Typography>
      </GlassPanel>
      <GlassPanel className="border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/80 p-6 text-center">
        <Typography as="span" variant="display-lg" className="!text-3xl">
          {liveProjectsCount}
        </Typography>
        <Typography as="p" variant="caption" className="mt-2">
          Live today
        </Typography>
      </GlassPanel>
    </div>
  );
}

export function Hero() {
  const liveProjectsCount = ecosystemProjects.filter(
    (project) => project.status === "live"
  ).length;
  const totalProjectsCount = ecosystemProjects.length;
  const highlightedProjects = ecosystemProjects.slice(0, 4);

  const ecosystemPositioning =
    "A premium digital ecosystem connecting AI tools, digital publishing, travel platforms, healthcare innovation, and future-ready digital experiences.";

  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-24 pt-40 sm:pb-28 sm:pt-48 lg:pb-32 lg:pt-56"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <HeroBadge name={headquarters.name} />
          <HeroHeadline id="hero-heading" tagline={headquarters.tagline} />
          <HeroDescription description={headquarters.description} />
          <HeroSupportingHeadline positioning={ecosystemPositioning} />
          <HeroActions />
          <TrustIndicators projects={highlightedProjects} />
          <HeroStats totalProjectsCount={totalProjectsCount} liveProjectsCount={liveProjectsCount} />
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <ChevronDown className="h-6 w-6 text-foreground/40" />
      </div>
    </section>
  );
}
