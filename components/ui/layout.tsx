import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-28", className)} {...props}>
      {children}
    </section>
  );
}

export function Stack({
  className,
  gap = "md",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { gap?: "sm" | "md" | "lg" }) {
  const gapMap = { sm: "gap-3", md: "gap-6", lg: "gap-10" };
  return (
    <div className={cn("flex flex-col", gapMap[gap], className)} {...props}>
      {children}
    </div>
  );
}

export function Flex({
  className,
  align = "center",
  justify = "start",
  wrap = false,
  gap = "md",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "between";
  wrap?: boolean;
  gap?: "sm" | "md" | "lg";
}) {
  const alignMap = { start: "items-start", center: "items-center", end: "items-end" };
  const justifyMap = { start: "justify-start", center: "justify-center", end: "justify-end", between: "justify-between" };
  const gapMap = { sm: "gap-2", md: "gap-4", lg: "gap-8" };

  return (
    <div
      className={cn("flex", alignMap[align], justifyMap[justify], wrap && "flex-wrap", gapMap[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function Grid({
  className,
  cols = 3,
  gap = "md",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { cols?: 1 | 2 | 3 | 4; gap?: "sm" | "md" | "lg" }) {
  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };
  const gapMap = { sm: "gap-4", md: "gap-6", lg: "gap-8" };

  return (
    <div className={cn("grid", colsMap[cols], gapMap[gap], className)} {...props}>
      {children}
    </div>
  );
}

export function Spacer({ size = "md" }: { size?: "sm" | "md" | "lg" | "xl" }) {
  const sizeMap = { sm: "h-4", md: "h-8", lg: "h-16", xl: "h-24" };
  return <div className={sizeMap[size]} aria-hidden="true" />;
}

export function Divider({
  className,
  orientation = "horizontal",
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(orientation === "horizontal" ? "h-px w-full bg-white/10" : "w-px h-full bg-white/10", className)}
    />
  );
}

export function PageWrapper({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("min-h-screen bg-background", className)} {...props}>
      {children}
    </div>
  );
}
