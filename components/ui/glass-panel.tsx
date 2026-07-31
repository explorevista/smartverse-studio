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
        "glass-surface relative overflow-hidden rounded-[28px] p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(2,6,23,0.12)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
