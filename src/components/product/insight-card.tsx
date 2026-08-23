import React from "react";
import { InsightItem } from "@/types/landing";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  insight: InsightItem;
  isActive?: boolean;
  onSelect?: () => void;
}

export function InsightCard({
  insight,
  isActive = false,
  onSelect,
}: InsightCardProps) {
  const typeMeta: Record<string, { prefix: string; label: string; accentColor: string }> = {
    process: {
      prefix: "FIG. 1.1",
      label: "Process Schematic",
      accentColor: "border-l-foreground",
    },
    requirement: {
      prefix: "§ 01.A",
      label: "Requirement Spec",
      accentColor: "border-l-editorial-sage",
    },
    explanation: {
      prefix: "DEF. 02",
      label: "Context Lexicon",
      accentColor: "border-l-editorial-lavender",
    },
    contradiction: {
      prefix: "CRIT. 03",
      label: "Logic Discrepancy",
      accentColor: "border-l-editorial-terracotta",
    },
    question: {
      prefix: "QRY. 04",
      label: "Suggested Query",
      accentColor: "border-l-editorial-ochre",
    },
  };

  const meta = typeMeta[insight.type] || {
    prefix: "NOTE",
    label: insight.type.toUpperCase(),
    accentColor: "border-l-border-strong",
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
      aria-pressed={isActive}
      aria-label={`${meta.label}: ${insight.title}`}
      className={cn(
        "group relative pl-3.5 pr-2 py-3 border-l-2 transition-all cursor-pointer text-left border-b border-border-subtle/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground",
        meta.accentColor,
        isActive
          ? "bg-surface/80 -ml-1 pl-4.5"
          : "hover:bg-surface/40"
      )}
    >
      {/* Top Folio Label */}
      <div className="flex items-baseline justify-between gap-2 mb-1 font-mono text-[10px]">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-foreground-faded">{meta.prefix}</span>
          <span className="text-border-strong">/</span>
          <span className="text-foreground-muted uppercase tracking-widest text-[9px]">
            {meta.label}
          </span>
        </div>
      </div>

      <h4 className="font-serif text-[13px] sm:text-sm font-semibold text-foreground tracking-tight mb-1">
        {insight.title}
      </h4>

      <p className="text-xs text-foreground-muted leading-relaxed mb-2 font-sans">
        {insight.summary}
      </p>

      {/* Process Flow rendered as clean typographic diagram */}
      {insight.processFlow && insight.processFlow.length > 0 && (
        <div className="mt-2 pt-2 border-t border-border-subtle/80 font-mono text-[10px]">
          <div className="flex flex-wrap items-center gap-1 text-foreground">
            {insight.processFlow.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="text-foreground font-mono bg-paper px-1.5 py-0.5 rounded-[2px] border border-border">
                  {String(idx + 1).padStart(2, "0")}. {step}
                </span>
                {idx < insight.processFlow!.length - 1 && (
                  <span className="text-foreground-faded px-0.5 select-none">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Bullet Points Details rendered as classical numbered/dash list */}
      {insight.details && insight.details.length > 0 && (
        <div className="mt-2 pt-1.5 border-t border-border-subtle/80 space-y-1 font-sans text-xs text-foreground-muted">
          {insight.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="font-mono text-[10px] text-foreground-faded select-none">
                [{idx + 1}]
              </span>
              <span className="leading-snug">{detail}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
