import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-caption font-medium",
  {
    variants: {
      variant: {
        live: "border-success/30 bg-success/10 text-success",
        "in-development": "border-primary/30 bg-primary/10 text-primary",
        planning: "border-slate-500/30 bg-slate-500/10 text-muted",
        beta: "border-primary/30 bg-primary/10 text-primary",
        "coming-soon": "border-slate-500/30 bg-slate-500/10 text-muted",
        premium: "border-primary/30 bg-primary/10 text-primary",
        new: "border-royal-blue/30 bg-royal-blue/10 text-royal-blue",
        neutral: "border-white/10 bg-white/5 text-foreground/80",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
}
