import React from "react";
import { TranscriptEntry } from "@/types/landing";
import { cn } from "@/lib/utils";

interface TranscriptMessageProps {
  entry: TranscriptEntry;
  isHighlighted?: boolean;
  onSelect?: () => void;
}

export function TranscriptMessage({
  entry,
  isHighlighted = false,
  onSelect,
}: TranscriptMessageProps) {
  const roleBorder: Record<string, string> = {
    Client: "border-l-[#D8D2C5]",
    Engineer: "border-l-[#3D6047]",
    Manager: "border-l-[#9E782F]",
    Accounting: "border-l-[#B94732]",
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect?.();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      aria-pressed={isHighlighted}
      aria-label={`Record at ${entry.timestamp} by ${entry.speaker} (${entry.role}): "${entry.text}"`}
      className={cn(
        "group relative pl-3.5 pr-2 py-2.5 border-l-2 transition-all cursor-pointer text-left border-b border-border-subtle/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground",
        roleBorder[entry.role] || "border-l-border",
        isHighlighted
          ? "bg-surface/80 border-l-foreground -ml-1 pl-4.5"
          : "hover:bg-surface/40"
      )}
    >
      {/* Marginalia Header */}
      <div className="flex items-baseline justify-between gap-2 mb-1 font-mono text-[10px]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground tracking-tight">
            {entry.speaker}
          </span>
          <span className="text-foreground-faded text-[9px] uppercase tracking-widest">
            /{entry.role}
          </span>
        </div>

        <span className="text-foreground-faded font-mono text-[9px]">
          {entry.timestamp}
        </span>
      </div>

      {/* Spoken Quote in Serif */}
      <blockquote className="text-xs sm:text-[13px] text-foreground font-serif leading-relaxed italic">
        &ldquo;{entry.text}&rdquo;
      </blockquote>
    </div>
  );
}
