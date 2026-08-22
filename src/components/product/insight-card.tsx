import React from "react";
import { InsightItem } from "@/types/landing";
import { cn } from "@/lib/utils";
import { 
  GitBranch, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  BookOpen,
  ArrowRight,
  Copy,
  Share2,
  Check
} from "lucide-react";

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
  const typeConfig = {
    process: {
      icon: <GitBranch className="w-3.5 h-3.5 text-blue-600" />,
      tag: "PROCESO DETECTADO",
      badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
      accentBorder: "border-l-blue-500",
      actionLabel: "Copiar flujo",
    },
    requirement: {
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />,
      tag: "REQUERIMIENTO",
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accentBorder: "border-l-emerald-500",
      actionLabel: "Copiar regla",
    },
    explanation: {
      icon: <BookOpen className="w-3.5 h-3.5 text-indigo-600" />,
      tag: "EXPLICACIÓN TÉCNICA",
      badgeClass: "bg-indigo-50 text-indigo-700 border-indigo-200",
      accentBorder: "border-l-indigo-500",
      actionLabel: "Copiar concepto",
    },
    contradiction: {
      icon: <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />,
      tag: "POSIBLE CONTRADICCIÓN",
      badgeClass: "bg-rose-50 text-rose-800 border-rose-200",
      accentBorder: "border-l-rose-500",
      actionLabel: "Copiar alerta",
    },
    question: {
      icon: <HelpCircle className="w-3.5 h-3.5 text-amber-600" />,
      tag: "PREGUNTA SUGERIDA",
      badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
      accentBorder: "border-l-amber-500",
      actionLabel: "Hacer pregunta",
    },
  };

  const config = typeConfig[insight.type];

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const copyContent = `${insight.title}: ${insight.summary}`;
    onCopyAction?.(copyContent);
  };

  return (
    <div
      onClick={onSelect}
      className={cn(
        "p-4 rounded-xl border border-l-4 bg-white shadow-xs transition-all duration-200 cursor-pointer text-left group relative",
        config.accentBorder,
        isActive
          ? "border-zinc-400 shadow-md ring-1 ring-zinc-300 translate-x-0.5"
          : "border-zinc-200/80 hover:border-zinc-300 hover:shadow-sm"
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-md bg-zinc-50 border border-zinc-200">
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

        {/* Superhuman Quick Copy Pill */}
        <button
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity inline-flex items-center gap-1 text-[10px] font-mono text-zinc-500 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 px-2 py-0.5 rounded border border-zinc-200 cursor-pointer"
          title="Copiar contenido"
          aria-label={config.actionLabel}
        >
          <Copy className="w-2.5 h-2.5" />
          <span>{config.actionLabel}</span>
        </button>
      </div>

      <h4 className="text-xs sm:text-[13px] font-bold text-zinc-900 mb-1">
        {insight.title}
      </h4>

      <p className="text-xs text-zinc-700 leading-relaxed mb-2">
        {insight.summary}
      </p>

      {/* Sequential Process Flow Rendering */}
      {insight.processFlow && insight.processFlow.length > 0 && (
        <div className="mt-2 pt-2 border-t border-zinc-100">
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
            {insight.processFlow.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="px-2 py-0.5 bg-zinc-100 text-zinc-800 rounded border border-zinc-200 font-medium">
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
        <ul className="mt-2 pt-2 border-t border-zinc-100 space-y-1 text-xs text-zinc-600 list-disc list-inside">
          {insight.details.map((detail, idx) => (
            <li key={idx} className="leading-normal">
              <span className="text-zinc-800">{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
