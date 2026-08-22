"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
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

const STEP_DURATION_MS = 6500;

export function MeetingWindow() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeTranscriptId, setActiveTranscriptId] = useState<string | null>(null);
  const [mobileTab, setMobileTab] = useState<"transcript" | "insights">("transcript");
  const [progress, setProgress] = useState(0);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const currentStep = DEMO_STEPS[currentStepIndex];

  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setIsPlaying(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Handle auto-advance and progress bar
  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const interval = 50;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / STEP_DURATION_MS) * 100);
      setProgress(pct);

      if (elapsed >= STEP_DURATION_MS) {
        setCurrentStepIndex((prev) => (prev + 1) % DEMO_STEPS.length);
        setProgress(0);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, currentStepIndex, prefersReducedMotion]);

  const visibleTranscripts = CANONICAL_TRANSCRIPT.filter((tx) =>
    currentStep.transcriptIds.includes(tx.id)
  );

  const visibleInsights = CANONICAL_INSIGHTS.filter((ins) =>
    currentStep.activeInsightIds.includes(ins.id)
  );

  const handleStepSelect = useCallback((index: number) => {
    setCurrentStepIndex(index);
    setIsPlaying(false);
    setProgress(0);
    setActiveTranscriptId(null);
  }, []);

  // Keyboard navigation for step tabs (ArrowLeft, ArrowRight, Home, End)
  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = (index + 1) % DEMO_STEPS.length;
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = (index - 1 + DEMO_STEPS.length) % DEMO_STEPS.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIndex = DEMO_STEPS.length - 1;
    } else {
      return;
    }

    handleStepSelect(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const toggleTranscriptHighlight = (id: string) => {
    setActiveTranscriptId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full rounded-2xl border border-border bg-surface shadow-xl overflow-hidden flex flex-col transition-all">
      {/* Live Region Announcement for Screen Readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`Paso ${currentStep.stepNumber} de ${DEMO_STEPS.length}: ${currentStep.title}. ${visibleInsights.length} inferencias activas.`}
      </div>

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
            <Cpu className={cn("w-3 h-3 text-emerald-600", !prefersReducedMotion && "animate-pulse")} />
            <span>QVAC Engine Active</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
            <ShieldCheck className="w-3 h-3 text-zinc-600" />
            <span>0 bytes cloud</span>
          </span>
        </div>
      </div>

      {/* Interactive Step Switcher & Timeline Controls */}
      <div className="px-4 sm:px-6 py-3 border-b border-border bg-zinc-50/70 flex flex-wrap items-center justify-between gap-4">
        <div 
          role="tablist" 
          aria-label="Pasos de la simulación"
          className="flex items-center gap-1.5 sm:gap-2 flex-wrap"
        >
          {DEMO_STEPS.map((step, idx) => {
            const isCurrent = idx === currentStepIndex;
            return (
              <button
                key={step.stepNumber}
                ref={(el) => { tabRefs.current[idx] = el; }}
                role="tab"
                id={`step-tab-${idx}`}
                aria-selected={isCurrent}
                aria-controls={`step-panel-${idx}`}
                tabIndex={isCurrent ? 0 : -1}
                onClick={() => handleStepSelect(idx)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-left flex items-center gap-2 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-1",
                  isCurrent
                    ? "bg-foreground text-background border-foreground shadow-xs font-semibold"
                    : "bg-surface-raised text-foreground-muted hover:text-foreground border-border hover:bg-white"
                )}
              >
                <span>{step.title}</span>
                {isCurrent && <ChevronRight className="w-3 h-3 ml-auto opacity-75" aria-hidden="true" />}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md border border-border bg-surface-raised hover:bg-zinc-100 text-foreground transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-1"
            aria-label={isPlaying ? "Pausar avance automático de simulación" : "Iniciar avance automático de simulación"}
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
              setActiveTranscriptId(null);
            }}
            className="p-1.5 rounded-md border border-border bg-surface-raised hover:bg-zinc-100 text-foreground-muted hover:text-foreground transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-1"
            title="Reiniciar demostración"
            aria-label="Reiniciar simulación desde el inicio"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Autoplay Progress Bar */}
      {isPlaying && !prefersReducedMotion && (
        <div 
          className="w-full h-0.5 bg-zinc-200 overflow-hidden" 
          role="progressbar" 
          aria-valuenow={Math.round(progress)} 
          aria-valuemin={0} 
          aria-valuemax={100}
          aria-label="Progreso del paso actual"
        >
          <div 
            className="h-full bg-foreground/60 transition-all ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Mobile Tab Toggle */}
      <div 
        role="tablist" 
        aria-label="Vistas en dispositivo móvil"
        className="lg:hidden flex border-b border-border bg-surface"
      >
        <button
          role="tab"
          id="mobile-tab-transcript"
          aria-selected={mobileTab === "transcript"}
          aria-controls="mobile-panel-transcript"
          onClick={() => setMobileTab("transcript")}
          className={cn(
            "flex-1 py-2.5 text-xs font-semibold border-b-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground",
            mobileTab === "transcript"
              ? "border-foreground text-foreground bg-surface-raised"
              : "border-transparent text-foreground-muted hover:text-foreground"
          )}
        >
          Conversación ({visibleTranscripts.length})
        </button>
        <button
          role="tab"
          id="mobile-tab-insights"
          aria-selected={mobileTab === "insights"}
          aria-controls="mobile-panel-insights"
          onClick={() => setMobileTab("insights")}
          className={cn(
            "flex-1 py-2.5 text-xs font-semibold border-b-2 transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground",
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
      <div 
        id={`step-panel-${currentStepIndex}`}
        role="tabpanel"
        aria-labelledby={`step-tab-${currentStepIndex}`}
        className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-background"
      >
        {/* Left Column: Literal Conversation */}
        <div
          id="mobile-panel-transcript"
          role="region"
          aria-label="Panel de Conversación Literal"
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
              <span className="text-[11px] text-zinc-600 font-mono">
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
                  onSelect={() => toggleTranscriptHighlight(entry.id)}
                />
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-border/60 text-[11px] text-foreground-muted flex items-center justify-between">
            <span>Audio stream local · Micrófono activo</span>
            <span className="font-mono text-zinc-500">Latencia: ~14ms</span>
          </div>
        </div>

        {/* Right Column: Dolphin Live Understanding */}
        <div
          id="mobile-panel-insights"
          role="region"
          aria-label="Panel de Comprensión Dolphin"
          className={cn(
            "lg:col-span-6 p-4 sm:p-6 bg-surface/40 flex flex-col justify-between space-y-4",
            mobileTab === "transcript" ? "hidden lg:flex" : "flex"
          )}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-border/60">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-foreground" />
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-mono">
                  Comprensión Estructurada
                </span>
              </div>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-mono">
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
                      toggleTranscriptHighlight(insight.relatedTranscriptId);
                    }
                  }}
                />
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-border/60 text-[11px] text-foreground-muted flex items-center justify-between">
            <span>Modelo mental actualizado en tiempo real</span>
            <span className="font-mono text-emerald-700 font-semibold">
              On-Device Inference
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
