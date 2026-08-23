import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "success" | "warning" | "danger" | "dark" | "outline" | "terracotta" | "sage" | "ochre";
}

export function Badge({
  children,
  className,
  variant = "neutral",
  ...props
}: BadgeProps) {
  const variants = {
    neutral: "bg-surface text-foreground-muted border-border",
    dark: "bg-ink text-paper border-ink",
    success: "bg-[#EEF4F0] text-[#2F523A] border-[#D1E0D6]",
    sage: "bg-[#EEF4F0] text-[#2F523A] border-[#D1E0D6]",
    warning: "bg-[#F8F3E8] text-[#805F1F] border-[#E8DEC7]",
    ochre: "bg-[#F8F3E8] text-[#805F1F] border-[#E8DEC7]",
    danger: "bg-[#F9ECE9] text-[#9A3825] border-[#ECC9C2]",
    terracotta: "bg-[#F9ECE9] text-[#9A3825] border-[#ECC9C2]",
    outline: "bg-transparent text-foreground-muted border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[3px] text-[10px] font-mono tracking-wider uppercase border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
