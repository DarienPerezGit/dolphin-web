import React from "react";
import { InsightItem } from "@/types/landing";
import { cn } from "@/lib/utils";
import { 
  GitBranch, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  BookOpen,
  ArrowRight
} from "lucide-react";

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
  const typeConfig = {
    process: {
      icon: <GitBranch className="w-4 h-4 text-blue-600" />,
      tag: "PROCESO DETECTADO",
      badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
      accentBorder: "border-l-blue-500",
    },
    requirement: {
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
      tag: "REQUERIMIENTO",
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accentBorder: "border-l-emerald-500",
    },
    explanation: {
      icon: <BookOpen className="w-4 h-4 text-purple-600" />,
      tag: "EXPLICACIÓN CONTEXTUAL",
      badgeClass: "bg-purple-50 text-purple-700 border-purple-200",
      accentBorder: "border-l-purple-500",
    },
    contradiction: {
      icon: <AlertTriangle className="w-4 h-4 text-amber-600" />,
      tag: "POSIBLE CONTRADICCIÓN",
      badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
      accentBorder: "border-l-amber-500",
    },
    question: {
      icon: <HelpCircle className="w-4 h-4 text-indigo-600" />,
      tag: "PREGUNTA SUGERIDA",
      badgeClass: "bg-indigo-50 text-indigo-700 border-indigo-200",
      accentBorder: "border-l-indigo-500",
    },
  };

  const config = typeConfig[insight.type];

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
      aria-label={`${config.tag}: ${insight.title}. ${insight.summary}`}
      className={cn(
        "p-4 rounded-xl border border-l-4 bg-surface-raised shadow-xs transition-all cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-1",
        config.accentBorder,
        isActive
          ? "ring-1 ring-foreground/30 shadow-md border-foreground/30"
          : "hover:border-border hover:shadow-sm"
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-md bg-zinc-50 border border-border">
            {config.icon}
          </span>
          <span
            className={cn(
              "text-[10px] font-bold tracking-wider uppercase font-mono px-2 py-0.5 rounded border",
              config.badgeClass
            )}
          >
            {config.tag}
          </span>
        </div>
      </div>

      <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-1">
        {insight.title}
      </h4>

      <p className="text-xs text-foreground/80 leading-relaxed mb-2.5">
        {insight.summary}
      </p>

      {/* Sequential Process Flow Rendering */}
      {insight.processFlow && insight.processFlow.length > 0 && (
        <div className="mt-2 pt-2 border-t border-border/60">
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
            {insight.processFlow.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="px-2 py-0.5 bg-zinc-100 text-zinc-800 rounded border border-zinc-200">
                  {step}
                </span>
                {idx < insight.processFlow!.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-zinc-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Bullet points details */}
      {insight.details && insight.details.length > 0 && (
        <ul className="mt-2 pt-2 border-t border-border/60 space-y-1 text-xs text-foreground-muted list-disc list-inside">
          {insight.details.map((detail, idx) => (
            <li key={idx} className="leading-normal">
              <span className="text-foreground/90">{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
