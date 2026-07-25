import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { headquarters, ecosystemProjects } from "@/data/ecosystem";

export function Hero() {
  const liveProjectsCount = ecosystemProjects.filter(
    (project) => project.status === "live"
  ).length;
  const totalProjectsCount = ecosystemProjects.length;

  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient opacity-60"
        aria-hidden="true"
      />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <Typography as="span" variant="overline">
              {headquarters.name} Ecosystem
            </Typography>
          </div>

          <Typography as="h1" variant="display-xl" className="text-balance">
            {headquarters.tagline}
          </Typography>

          <Typography
            as="p"
            variant="body-lg"
            muted
            className="mx-auto mt-6 max-w-2xl"
          >
            {headquarters.description}
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

          <div className="mt-16 flex items-center justify-center gap-10 border-t border-white/10 pt-10">
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
    </section>
  );
}
