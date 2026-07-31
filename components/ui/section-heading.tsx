import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-14 max-w-3xl sm:mb-16 lg:mb-18",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Typography as="span" variant="overline" className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.68rem] shadow-[0_4px_16px_rgba(212,175,55,0.08)]">
          {eyebrow}
        </Typography>
      )}
      <Typography as="h2" variant="display-md" className="mt-4 leading-tight">
        {title}
      </Typography>
      {description && (
        <Typography as="p" variant="body-md" muted className={cn("mt-4 max-w-2xl text-pretty", align === "center" ? "mx-auto" : "") }>
          {description}
        </Typography>
      )}
    </div>
  );
}
