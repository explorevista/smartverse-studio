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
        "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow",
        className
      )}
      {...props}
    >
      {children}
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
