"use client";

import React, { useState, useEffect } from "react";
import { 
  DEMO_STEPS, 
  CANONICAL_TRANSCRIPT, 
  CANONICAL_INSIGHTS 
} from "@/content/mock-data";
import { TranscriptMessage } from "./transcript-message";
import { InsightCard } from "./insight-card";
import { 
  Play, 
  Pause, 
  Sparkles, 
  Volume2, 
  ShieldCheck, 
  Cpu, 
  ChevronRight,
  RefreshCw 
} from "lucide-react";
import { cn } from "@/lib/utils";

export function MeetingWindow() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTranscriptId, setActiveTranscriptId] = useState<string | null>(null);
  const [mobileTab, setMobileTab] = useState<"transcript" | "insights">("transcript");

  const currentStep = DEMO_STEPS[currentStepIndex];

  // Auto advance timeline
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % DEMO_STEPS.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const visibleTranscripts = CANONICAL_TRANSCRIPT.filter((tx) =>
    currentStep.transcriptIds.includes(tx.id)
  );

  const visibleInsights = CANONICAL_INSIGHTS.filter((ins) =>
    currentStep.activeInsightIds.includes(ins.id)
  );

  const handleStepSelect = (index: number) => {
    setCurrentStepIndex(index);
    setIsPlaying(false);
    setActiveTranscriptId(null);
  };

  return (
    <div className="w-full rounded-2xl border border-border/90 bg-surface shadow-xl overflow-hidden flex flex-col transition-all">
      {/* Window Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-border/80 bg-surface-raised">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-rose-400/80" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>

          <div className="h-4 w-px bg-border mx-1 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-zinc-500" />
              <span>ERP Sync & Purchasing Architecture</span>
            </span>
            <span className="text-[11px] font-mono text-foreground-muted px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200">
              {currentStep.timestamp}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            <Cpu className="w-3 h-3 text-emerald-600 animate-pulse" />
            <span>QVAC Engine Active</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded border">
            <ShieldCheck className="w-3 h-3 text-zinc-600" />
            <span>0 bytes cloud</span>
          </span>
        </div>
      </div>

      {/* Interactive Step Switcher & Timeline Controls */}
      <div className="px-4 sm:px-6 py-3 border-b border-border bg-zinc-50/70 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {DEMO_STEPS.map((step, idx) => {
            const isCurrent = idx === currentStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => handleStepSelect(idx)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-left flex items-center gap-2 cursor-pointer border",
                  isCurrent
                    ? "bg-foreground text-background border-foreground shadow-xs font-semibold"
                    : "bg-surface-raised text-foreground-muted hover:text-foreground border-border hover:bg-white"
                )}
                aria-pressed={isCurrent}
              >
                <span>{step.title}</span>
                {isCurrent && <ChevronRight className="w-3 h-3 ml-auto opacity-75" />}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md border border-border bg-surface-raised hover:bg-zinc-100 text-foreground transition-colors cursor-pointer"
            aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-zinc-600" />
                <span className="hidden sm:inline">Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-zinc-600" />
                <span className="hidden sm:inline">Auto-play</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setCurrentStepIndex(0);
              setIsPlaying(true);
            }}
            className="p-1.5 rounded-md border border-border bg-surface-raised hover:bg-zinc-100 text-foreground-muted hover:text-foreground transition-colors cursor-pointer"
            title="Reiniciar demostración"
            aria-label="Reiniciar simulación"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile Tab Toggle */}
      <div className="lg:hidden flex border-b border-border bg-surface">
        <button
          onClick={() => setMobileTab("transcript")}
          className={cn(
            "flex-1 py-2.5 text-xs font-semibold border-b-2 transition-colors",
            mobileTab === "transcript"
              ? "border-foreground text-foreground bg-surface-raised"
              : "border-transparent text-foreground-muted hover:text-foreground"
          )}
        >
          Conversación ({visibleTranscripts.length})
        </button>
        <button
          onClick={() => setMobileTab("insights")}
          className={cn(
            "flex-1 py-2.5 text-xs font-semibold border-b-2 transition-colors flex items-center justify-center gap-1.5",
            mobileTab === "insights"
              ? "border-foreground text-foreground bg-surface-raised"
              : "border-transparent text-foreground-muted hover:text-foreground"
          )}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Comprensión Dolphin ({visibleInsights.length})</span>
        </button>
      </div>

      {/* Two Column Live Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-background">
        {/* Left Column: Literal Conversation */}
        <div
          className={cn(
            "lg:col-span-6 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-border/80 flex flex-col justify-between space-y-4",
            mobileTab === "insights" ? "hidden lg:flex" : "flex"
          )}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-border/60">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground-muted font-mono">
                Conversación en Vivo
              </span>
              <span className="text-[11px] text-zinc-500">
                {visibleTranscripts.length} fragmentos detectados
              </span>
            </div>

            <div className="space-y-2.5">
              {visibleTranscripts.map((entry) => (
                <TranscriptMessage
                  key={entry.id}
                  entry={entry}
                  isHighlighted={
                    activeTranscriptId === entry.id ||
                    entry.highlightedInSteps?.includes(currentStep.stepNumber)
                  }
                  onSelect={() => setActiveTranscriptId(entry.id)}
                />
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-border/60 text-[11px] text-foreground-muted flex items-center justify-between">
            <span>Audio stream local · Micrófono activo</span>
            <span className="font-mono text-zinc-400">Latencia: ~14ms</span>
          </div>
        </div>

        {/* Right Column: Dolphin Live Understanding */}
        <div
          className={cn(
            "lg:col-span-6 p-4 sm:p-6 bg-surface/40 flex flex-col justify-between space-y-4",
            mobileTab === "transcript" ? "hidden lg:flex" : "flex"
          )}
          aria-live="polite"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-border/60">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-foreground" />
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-mono">
                  Comprensión Estructurada
                </span>
              </div>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {visibleInsights.length} inferencias activas
              </span>
            </div>

            <div className="space-y-3 overflow-y-auto max-h-[380px] pr-1">
              {visibleInsights.map((insight) => (
                <InsightCard
                  key={insight.id}
                  insight={insight}
                  isActive={
                    activeTranscriptId === insight.relatedTranscriptId
                  }
                  onSelect={() => {
                    if (insight.relatedTranscriptId) {
                      setActiveTranscriptId(insight.relatedTranscriptId);
                    }
                  }}
                />
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-border/60 text-[11px] text-foreground-muted flex items-center justify-between">
            <span>Modelo mental actualizado en tiempo real</span>
            <span className="font-mono text-emerald-600 font-semibold">
              On-Device Inference
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
