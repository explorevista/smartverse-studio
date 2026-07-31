import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { ProjectPageShell } from "@/components/content/project-page-shell";
import { ContentCard, ContentList } from "@/components/content/page-shell";
import { Typography } from "@/components/ui/typography";
import { ecosystemProjects } from "@/data/ecosystem";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ecosystemProjects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = ecosystemProjects.find((item) => item.id === slug);

  if (!project) {
    return createMetadata({ title: "Project not found" });
  }

  return createMetadata({
    title: project.name,
    description: project.description ?? project.tagline ?? "SmartVerse Studio project page",
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = ecosystemProjects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  const features = [
    { title: "Overview", description: project.description ?? "This project contributes to the SmartVerse Studio ecosystem." },
    { title: "Problem solved", description: project.tagline ?? "The product is built to solve a clear, real-world problem for its users." },
    { title: "Delivery status", description: `${project.status === "live" ? "Live and operating" : project.status === "in-development" ? "In active development" : "Planned for future release"}.` },
  ];

  return (
    <ProjectPageShell project={project}>
      <div className="grid gap-6 lg:grid-cols-2">
        <ContentCard title="Overview">
          <Typography as="p" variant="body-md" muted>
            {project.description ?? "This project contributes to the SmartVerse Studio ecosystem."}
          </Typography>
        </ContentCard>

        <ContentCard title="Problem solved">
          <Typography as="p" variant="body-md" muted>
            {project.tagline ?? "The product is designed around a focused need and clear user value."}
          </Typography>
        </ContentCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ContentCard title="Features">
          <ContentList items={features.map((feature) => ({ title: feature.title, description: feature.description }))} />
        </ContentCard>
        <ContentCard title="Technology & status">
          <ContentList
            items={[
              { title: "Category", description: project.category },
              { title: "Current status", description: project.status },
              { title: "Official links", description: project.officialUrl ? "Available from the project hero section." : "No public URL currently listed." },
            ]}
          />
        </ContentCard>
      </div>

      <ContentCard title="Official links">
        <div className="flex flex-wrap gap-3">
          {project.officialUrl ? (
            <Link href={project.officialUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)]/80 px-4 py-2 text-label text-foreground/80 transition-colors hover:text-primary">
              Visit project
            </Link>
          ) : null}
          <Link href="/ecosystem" className="rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)]/80 px-4 py-2 text-label text-foreground/80 transition-colors hover:text-primary">
            View ecosystem
          </Link>
        </div>
      </ContentCard>

      <ContentCard title="Gallery placeholder">
        <Typography as="p" variant="body-sm" muted>
          Future project assets will be added here when official media becomes available in the SmartVerse Studio asset library.
        </Typography>
      </ContentCard>
    </ProjectPageShell>
  );
}
