import React from "react";
import { TranscriptEntry } from "@/types/landing";
import { cn } from "@/lib/utils";
import { User, Code2, Briefcase, Calculator, Mic } from "lucide-react";

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
  const roleBadge = {
    Client: "bg-blue-50/80 text-blue-700 border-blue-200/80",
    Engineer: "bg-indigo-50/80 text-indigo-700 border-indigo-200/80",
    Manager: "bg-amber-50/80 text-amber-700 border-amber-200/80",
    Accounting: "bg-emerald-50/80 text-emerald-700 border-emerald-200/80",
  };

  return (
    <div
      onClick={onSelect}
      className={cn(
        "p-3.5 rounded-xl border transition-all duration-200 cursor-pointer text-left relative overflow-hidden group",
        isHighlighted
          ? "bg-white border-zinc-400 shadow-md ring-1 ring-zinc-300 translate-x-1"
          : "bg-surface/80 border-border/70 hover:bg-white hover:border-border hover:shadow-xs"
      )}
    >
      {isHighlighted && (
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600" />
      )}

      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2.5">
          {/* Avatar with live speech ripple */}
          <div className="relative">
            {entry.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={entry.avatarUrl}
                alt={entry.speaker}
                className="w-7 h-7 rounded-full object-cover border border-border shadow-xs"
              />
            ) : (
              <div className="w-7 h-7 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 text-xs font-bold">
                {entry.speaker[0]}
              </div>
            )}
            {isHighlighted && (
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-foreground">
                {entry.speaker}
              </span>
              <span
                className={cn(
                  "text-[10px] uppercase tracking-wider font-mono font-medium px-1.5 py-0.2 rounded border",
                  roleBadge[entry.role]
                )}
              >
                {entry.role}
              </span>
            </div>
            {entry.roleTitle && (
              <span className="text-[10px] text-foreground-muted block -mt-0.5 font-normal">
                {entry.roleTitle}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {isHighlighted && (
            <div className="flex items-center gap-0.5 text-blue-600">
              <div className="w-0.5 bg-blue-600 rounded-full animate-wave-1" />
              <div className="w-0.5 bg-blue-600 rounded-full animate-wave-2" />
              <div className="w-0.5 bg-blue-600 rounded-full animate-wave-3" />
            </div>
          )}
          <span className="text-[11px] font-mono text-foreground-muted">
            {entry.timestamp}
          </span>
        </div>
      </div>

      <p className="text-xs sm:text-[13px] text-foreground/90 leading-relaxed pl-9.5">
        &ldquo;{entry.text}&rdquo;
      </p>
    </div>
  );
}

