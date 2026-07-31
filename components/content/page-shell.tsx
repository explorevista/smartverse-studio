import * as React from "react";
import { Container, Section } from "@/components/ui/layout";
import { Typography } from "@/components/ui/typography";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassPanel } from "@/components/ui/glass-panel";
import { cn } from "@/lib/utils";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function PageShell({
  eyebrow,
  title,
  description,
  children,
  align = "center",
  className,
}: PageShellProps) {
  return (
    <Section className={cn("pt-32 sm:pt-36 lg:pt-40", className)}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={align}
        />
        <div className="mx-auto max-w-6xl">{children}</div>
      </Container>
    </Section>
  );
}

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentCard({ title, children, className }: ContentCardProps) {
  return (
    <GlassPanel className={cn("border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/80 p-6 sm:p-8", className)}>
      <Typography as="h3" variant="h4" className="text-foreground">
        {title}
      </Typography>
      <div className="mt-4 space-y-3">{children}</div>
    </GlassPanel>
  );
}

interface ContentListProps {
  items: Array<{ title: string; description?: string }>;
  className?: string;
}

export function ContentList({ items, className }: ContentListProps) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item.title} className="rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface)]/70 p-4">
          <Typography as="h4" variant="h5" className="text-foreground">
            {item.title}
          </Typography>
          {item.description ? (
            <Typography as="p" variant="body-sm" muted className="mt-2">
              {item.description}
            </Typography>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
