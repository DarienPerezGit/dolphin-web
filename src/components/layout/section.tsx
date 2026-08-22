import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  hasBackground?: boolean;
}

export function Section({
  children,
  className,
  id,
  hasBackground = false,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 border-b border-border/40 scroll-mt-20",
        hasBackground && "bg-surface/60",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
