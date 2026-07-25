import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      "display-xl": "text-display-xl",
      "display-lg": "text-display-lg",
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      h4: "text-h4",
      h5: "text-h5",
      h6: "text-h6",
      "body-lg": "text-body-lg",
      "body-md": "text-body-md",
      "body-sm": "text-body-sm",
      caption: "text-caption",
      label: "text-label",
      overline: "text-overline",
      code: "text-code",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

type TypographyElement =
  | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  | "p" | "span" | "label" | "code" | "blockquote";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: TypographyElement;
  muted?: boolean;
  gradient?: boolean;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, muted, gradient, children, ...props }, ref) => {
    const Comp = (as ?? "p") as React.ElementType;

    return (
      <Comp
        ref={ref}
        className={cn(
          typographyVariants({ variant }),
          muted && "text-muted",
          gradient && "text-gradient",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Typography.displayName = "Typography";

export function Blockquote({ className, children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn(
        "border-l-2 border-primary pl-4 italic text-body-md text-muted",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function InlineLink({
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "text-primary underline underline-offset-4 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function HelperText({
  className,
  error,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { error?: boolean }) {
  return (
    <p
      className={cn(
        "text-caption",
        error ? "text-danger" : "text-muted",
        className
      )}
      role={error ? "alert" : undefined}
      {...props}
    >
      {children}
    </p>
  );
}

export { Typography, typographyVariants };
