import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number | "sm" | "md" | "lg";
  showBadge?: boolean;
  showText?: boolean;
}

export function DolphinLogo({
  className,
  size = 22,
  showText = true,
}: {
  className?: string;
  size?: number;
  showText?: boolean;
}) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none group", className)}>
      {/* Ink-drawn woodblock/press emblem */}
      <div
        className="relative flex items-center justify-center rounded-[4px] border border-border-strong bg-surface text-foreground p-1 transition-colors group-hover:border-foreground"
        style={{ width: size + 6, height: size + 6 }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full stroke-current"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Refined single-line ink acoustic crest & dolphin arc */}
          <path d="M4 14.5C6.5 9 11.5 6 18 7.5C18.2 8.5 17.5 9.2 16.5 9.5C12.5 10.5 8.8 13.5 7.5 18" />
          <path d="M12 6.5C12 4.5 13.5 3.5 15 4.5" />
          <circle cx="17.5" cy="7.5" r="1" fill="currentColor" />
          <path d="M13 14C14.5 13 16.5 12.8 18.5 13" strokeWidth="1.2" strokeDasharray="1.5 2" />
        </svg>
      </div>

      {showText && (
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-foreground">
            Dolphin
          </span>
          <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-widest text-foreground-faded px-1.5 py-0.5 rounded-[3px] border border-border-subtle bg-paper">
            v1.0 / Local
          </span>
        </div>
      )}
    </div>
  );
}

export function Logo({
  className,
  size = "md",
  showBadge = true,
}: LogoProps) {
  const pixelSizes = {
    sm: 18,
    md: 22,
    lg: 26,
  };
  const finalSize = typeof size === "number" ? size : pixelSizes[size];

  return <DolphinLogo className={className} size={finalSize} showText={true} />;
}
