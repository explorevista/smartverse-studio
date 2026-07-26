import * as React from "react";
import { cn } from "@/lib/utils";

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

export function CardBadge({
  status,
}: {
  status: "live" | "in-development" | "planning";
}) {
  const statusMap = {
    live: { label: "Live", className: "bg-success/10 text-success border-success/30" },
    "in-development": { label: "In Development", className: "bg-primary/10 text-primary border-primary/30" },
    planning: { label: "Planning", className: "bg-slate-500/10 text-muted border-slate-500/30" },
  };
  const { label, className } = statusMap[status];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-caption font-medium",
        className
      )}
    >
      {label}
    </span>
  );
}
