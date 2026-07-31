import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold font-[var(--font-inter)] select-none transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_12px_34px_rgba(212,175,55,0.2)] hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(212,175,55,0.26)] active:translate-y-0 active:scale-[0.98]",
        secondary:
          "border border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/90 text-foreground shadow-[0_10px_26px_rgba(2,6,23,0.06)] hover:-translate-y-0.5 hover:bg-[color:var(--surface)] hover:shadow-[0_14px_34px_rgba(2,6,23,0.1)]",
        outline:
          "border border-[color:var(--border-color)] bg-transparent text-foreground/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-primary/40 hover:bg-primary/[0.08] hover:text-primary",
        ghost:
          "bg-transparent text-foreground/80 hover:bg-[color:var(--surface-muted)] hover:text-foreground",
        gradient:
          "bg-[linear-gradient(135deg,var(--color-gold)_0%,var(--color-gold-light)_100%)] text-background font-semibold shadow-[0_14px_38px_rgba(212,175,55,0.2)] hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(212,175,55,0.26)] active:translate-y-0 active:scale-[0.98]",
        icon:
          "rounded-full bg-[color:var(--surface-muted)] text-foreground/80 hover:bg-[color:var(--surface)] hover:text-foreground",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-[0.95rem] sm:h-14 sm:px-8 sm:text-base",
        iconOnly: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, disabled, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
            {children}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
