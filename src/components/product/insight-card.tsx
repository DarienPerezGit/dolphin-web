import React from "react";
import { InsightItem } from "@/types/landing";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface InsightCardProps {
  insight: InsightItem;
  isActive?: boolean;
  onSelect?: () => void;
  onCopyAction?: (text: string) => void;
}

export function InsightCard({
  insight,
  isActive = false,
  onSelect,
  onCopyAction,
}: InsightCardProps) {
  const typeLabels = {
    process: {
      category: "Proceso detectado",
      categoryColor: "text-blue-700",
    },
    requirement: {
      category: "Requerimiento de negocio",
      categoryColor: "text-emerald-700",
    },
    explanation: {
      category: "Explicación de contexto",
      categoryColor: "text-indigo-700",
    },
    contradiction: {
      category: "Posible contradicción",
      categoryColor: "text-rose-700",
    },
    question: {
      category: "Pregunta recomendada",
      categoryColor: "text-amber-700",
    },
  };

  const config = typeLabels[insight.type];

  return (
    <div
      onClick={onSelect}
      className={cn(
        "py-4 px-3 rounded-lg transition-colors duration-150 cursor-pointer text-left",
        isActive
          ? "bg-zinc-100/90 text-zinc-950"
          : "hover:bg-zinc-50/90 text-zinc-800"
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className={cn("text-xs font-semibold uppercase tracking-wider", config.categoryColor)}>
          {config.category}
        </span>
      </div>

      <h4 className="text-sm font-semibold text-zinc-900 mb-1 leading-snug">
        {insight.title}
      </h4>

      <p className="text-sm text-zinc-600 leading-relaxed">
        {insight.summary}
      </p>

      {/* Sequential Process Flow Rendering without boxed cards */}
      {insight.processFlow && insight.processFlow.length > 0 && (
        <div className="mt-3 pt-2">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-700 font-medium">
            {insight.processFlow.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="text-zinc-900 font-semibold">
                  {step}
                </span>
                {idx < insight.processFlow!.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Bullet points details without boxed containers */}
      {insight.details && insight.details.length > 0 && (
        <ul className="mt-2.5 space-y-1 text-xs text-zinc-500 list-disc list-inside">
          {insight.details.map((detail, idx) => (
            <li key={idx} className="leading-relaxed">
              <span className="text-zinc-700">{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
