import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[24px] border border-[color:var(--border-color)] bg-[color:var(--surface-strong)] p-6 shadow-[0_18px_55px_rgba(2,6,23,0.08)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:bg-[color:var(--surface)] hover:shadow-[0_24px_70px_rgba(2,6,23,0.12)] dark:bg-[color:var(--surface)]",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.16),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const statusLabels = {
  live: "Live",
  "in-development": "In Development",
  planning: "Planning",
} as const;

export function CardBadge({
  status,
}: {
  status: "live" | "in-development" | "planning";
}) {
  return <Badge variant={status}>{statusLabels[status]}</Badge>;
}
