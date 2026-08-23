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
  size = 34,
  showText = true,
}: {
  className?: string;
  size?: number;
  showText?: boolean;
}) {
  return (
    <div className={cn("inline-flex items-center gap-3 select-none group", className)}>
      <img
        src="/images/logo.png"
        alt="Dolphin Logo"
        width={size}
        height={size}
        className="h-auto object-contain transition-transform duration-200 group-hover:scale-105"
        style={{ width: size, height: size }}
      />

      {showText && (
        <span className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-stone-900 leading-none">
          Dolphin
        </span>
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
    sm: 28,
    md: 34,
    lg: 42,
  };
  const finalSize = typeof size === "number" ? size : pixelSizes[size];

  return <DolphinLogo className={className} size={finalSize} showText={true} />;
}
