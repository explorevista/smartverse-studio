import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, Grid } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { Card, CardBadge } from "@/components/ui/card";
import { ecosystemProjects } from "@/data/ecosystem";

export function EcosystemOverview() {
  return (
    <Section id="ecosystem">
      <Container>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Typography as="span" variant="overline">
            The Ecosystem
          </Typography>
          <Typography as="h2" variant="display-md" className="mt-4">
            Every Project, One Headquarters
          </Typography>
          <Typography as="p" variant="body-md" muted className="mt-4">
            Eight independent products, one shared identity — each built to
            solve a real problem, connected back to the headquarters.
          </Typography>
        </div>

        <Grid cols={3} gap="md">
          {ecosystemProjects.map((project) => (
            <Card key={project.id} className="flex flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <CardBadge status={project.status} />
                </div>

                <Typography as="h3" variant="h4">
                  {project.name}
                </Typography>

                <Typography as="p" variant="caption" className="mt-1 text-primary">
                  {project.category}
                </Typography>

                {project.description && (
                  <Typography as="p" variant="body-sm" muted className="mt-3">
                    {project.description}
                  </Typography>
                )}
              </div>

              {project.officialUrl && (
                <Link
                  href={project.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-label text-foreground/90 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Visit Project
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              )}
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
