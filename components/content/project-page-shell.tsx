import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { EcosystemProject } from "@/data/ecosystem";
import { cn } from "@/lib/utils";

interface ProjectPageShellProps {
  project: EcosystemProject;
  children: React.ReactNode;
}

export function ProjectPageShell({ project, children }: ProjectPageShellProps) {
  const statusLabel = {
    live: "Live",
    "in-development": "In development",
    planning: "Planning",
  }[project.status];

  return (
    <>
      <Section className="pt-32 sm:pt-36 lg:pt-40">
        <Container>
          <div className="mx-auto max-w-5xl rounded-[32px] border border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/80 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.08)] backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant={project.status}>{statusLabel}</Badge>
              <span className="rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)]/70 px-3 py-1 text-caption text-foreground/80">
                {project.category}
              </span>
            </div>
            <Typography as="h1" variant="display-md" className="mt-6">
              {project.name}
            </Typography>
            {project.tagline ? (
              <Typography as="p" variant="body-lg" muted className="mt-4 max-w-3xl">
                {project.tagline}
              </Typography>
            ) : null}
            {project.description ? (
              <Typography as="p" variant="body-md" muted className="mt-5 max-w-3xl">
                {project.description}
              </Typography>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.officialUrl ? (
                <Button asChild variant="gradient" size="md">
                  <Link href={project.officialUrl} target="_blank" rel="noopener noreferrer">
                    Visit project
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              ) : null}
              <Button asChild variant="outline" size="md">
                <Link href="/ecosystem">Back to ecosystem</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-0">
        <Container>
          <div className="mx-auto max-w-6xl space-y-6">{children}</div>
        </Container>
      </Section>
    </>
  );
}
