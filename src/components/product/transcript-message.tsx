import React from "react";
import { TranscriptEntry } from "@/types/landing";
import { cn } from "@/lib/utils";
import { User, Code2, Briefcase, Calculator } from "lucide-react";

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
  const roleIcons = {
    Client: <User className="w-3.5 h-3.5 text-blue-600" />,
    Engineer: <Code2 className="w-3.5 h-3.5 text-purple-600" />,
    Manager: <Briefcase className="w-3.5 h-3.5 text-amber-600" />,
    Accounting: <Calculator className="w-3.5 h-3.5 text-emerald-600" />,
  };

  const roleBadge = {
    Client: "bg-blue-50 text-blue-700 border-blue-200",
    Engineer: "bg-purple-50 text-purple-700 border-purple-200",
    Manager: "bg-amber-50 text-amber-700 border-amber-200",
    Accounting: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  return (
    <div
      onClick={onSelect}
      className={cn(
        "p-3.5 rounded-xl border transition-all cursor-pointer text-left",
        isHighlighted
          ? "bg-surface-raised border-foreground/30 shadow-sm ring-1 ring-foreground/10"
          : "bg-surface/60 border-border/80 hover:bg-surface-raised hover:border-border"
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-md bg-white border border-border shadow-2xs">
            {roleIcons[entry.role]}
          </span>
          <span className="text-xs font-semibold text-foreground">
            {entry.speaker}
          </span>
          <span
            className={cn(
              "text-[10px] uppercase tracking-wider font-mono px-1.5 py-0.2 rounded border",
              roleBadge[entry.role]
            )}
          >
            {entry.role}
          </span>
        </div>

        <span className="text-[11px] font-mono text-foreground-muted">
          {entry.timestamp}
        </span>
      </div>

      <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed pl-7">
        &ldquo;{entry.text}&rdquo;
      </p>
    </div>
  );
}
