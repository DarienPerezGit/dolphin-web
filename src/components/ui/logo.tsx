import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function DolphinLogo({ className, size = 24, showText = true }: LogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <div 
        className="relative flex items-center justify-center rounded-xl bg-zinc-950 text-white shadow-xs"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        {/* Stylized intelligent acoustic wave & fluid crest mark */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/5 h-3/5 text-white"
        >
          {/* Main fluid spine representing the Dolphin arc & signal wave */}
          <path
            d="M3.5 14C6 8 11.5 5 18 6.5C18.5 6.6 18.2 7.5 17.5 7.6C13 8.5 9 12 7.5 17C7.3 17.6 6.5 17.5 6.4 16.9C6.2 16 5 15 3.5 14Z"
            fill="currentColor"
          />
          {/* Intelligent focus dot / pulse beacon */}
          <circle cx="18.5" cy="6.5" r="1.5" fill="#38bdf8" />
          {/* Echo arc */}
          <path
            d="M13 13.5C14.8 12.2 17 11.8 19.5 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />
        </svg>
      </div>

      {showText && (
        <span className="font-bold tracking-tight text-foreground text-lg sm:text-xl">
          Dolphin
        </span>
      )}
    </div>
  );
}
