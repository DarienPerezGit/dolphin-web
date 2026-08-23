import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium text-xs rounded-[4px] transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-tight";

  const variants = {
    primary:
      "bg-ink text-paper hover:bg-ink-light border border-ink shadow-2xs active:translate-y-px",
    dark:
      "bg-ink text-paper hover:bg-ink-light border border-ink",
    secondary:
      "bg-surface text-foreground hover:bg-surface-sunken border border-border hover:border-border-strong",
    outline:
      "bg-paper-light text-foreground border border-border hover:border-foreground-muted hover:bg-surface active:translate-y-px",
    ghost:
      "text-foreground-muted hover:text-foreground hover:bg-surface",
  };

  const sizes = {
    sm: "h-7 px-2.5 text-[11px] gap-1.5",
    md: "h-8 px-3.5 text-xs gap-2",
    lg: "h-10 px-5 text-sm gap-2.5 font-normal",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
