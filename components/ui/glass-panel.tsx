import * as React from "react";
import { cn } from "@/lib/utils";

export function GlassPanel({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
