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
        "mx-auto mb-16 max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Typography as="span" variant="overline">
          {eyebrow}
        </Typography>
      )}
      <Typography as="h2" variant="display-md" className="mt-4">
        {title}
      </Typography>
      {description && (
        <Typography as="p" variant="body-md" muted className="mt-4">
          {description}
        </Typography>
      )}
    </div>
  );
}
