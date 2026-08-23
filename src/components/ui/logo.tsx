/* eslint-disable @next/next/no-img-element */
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
  size = 24,
  showText = true,
}: {
  className?: string;
  size?: number;
  showText?: boolean;
}) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none group", className)}>
      <div
        className="relative flex items-center justify-center rounded-[6px] border border-[#D8D2C5] bg-[#F5F2EB] overflow-hidden p-0.5 transition-colors group-hover:border-[#1C1917]"
        style={{ width: size + 8, height: size + 8 }}
        aria-hidden="true"
      >
        <img
          src="/dolphin-logo.png"
          alt="Dolphin Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#1C1917]">
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
}: LogoProps) {
  const pixelSizes = {
    sm: 20,
    md: 24,
    lg: 28,
  };
  const finalSize = typeof size === "number" ? size : pixelSizes[size];

  return <DolphinLogo className={className} size={finalSize} showText={true} />;
}
