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
  return (
    <div
      onClick={onSelect}
      className={cn(
        "py-3.5 px-3 rounded-lg transition-colors duration-150 cursor-pointer text-left",
        isHighlighted
          ? "bg-zinc-100/80 text-zinc-950"
          : "hover:bg-zinc-50 text-zinc-800"
      )}
    >
      <div className="flex items-baseline justify-between gap-4 mb-1.5">
        <div className="flex items-baseline gap-2">
          <span className="text-xs font-semibold text-zinc-900">
            {entry.speaker}
          </span>
          <span className="text-xs text-zinc-400">
            ·
          </span>
          <span className="text-xs text-zinc-500 font-normal">
            {entry.roleTitle || entry.role}
          </span>
        </div>

        <span className="text-xs text-zinc-400 font-normal shrink-0">
          {entry.timestamp}
        </span>
      </div>

      <p className={cn(
        "text-sm leading-relaxed",
        isHighlighted ? "text-zinc-900 font-medium" : "text-zinc-600"
      )}>
        &ldquo;{entry.text}&rdquo;
      </p>
    </div>
  );
}
