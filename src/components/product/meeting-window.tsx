"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  RefreshCw,
  ArrowRight
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

  // Keyboard navigation: 1, 2, 3, Space
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return;
    }

    if (e.key === "1") {
      e.preventDefault();
      setCurrentStepIndex(0);
      setIsPlaying(false);
    } else if (e.key === "2") {
      e.preventDefault();
      setCurrentStepIndex(1);
      setIsPlaying(false);
    } else if (e.key === "3") {
      e.preventDefault();
      setCurrentStepIndex(2);
      setIsPlaying(false);
    } else if (e.key === " " || e.code === "Space") {
      e.preventDefault();
      setIsPlaying((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

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
    <div className="w-full bg-white text-left py-6">
      {/* Step Switcher Navigation using Pure Typography & Underlines */}
      <div className="flex flex-wrap items-center justify-between gap-6 pb-6 mb-8 border-b border-zinc-100">
        <div className="flex items-center gap-6 sm:gap-8">
          {DEMO_STEPS.map((step, idx) => {
            const isCurrent = idx === currentStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => handleStepSelect(idx)}
                className={cn(
                  "text-sm font-medium transition-colors cursor-pointer text-left pb-1 relative",
                  isCurrent
                    ? "text-zinc-950 font-semibold"
                    : "text-zinc-400 hover:text-zinc-700"
                )}
                aria-pressed={isCurrent}
              >
                <span>{step.title}</span>
                {isCurrent && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-950" />
                )}
              </button>
            );
          })}
        </div>

        {/* Play / Pause / Reset Controls (minimal text & icons) */}
        <div className="flex items-center gap-4 text-xs text-zinc-500">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="hover:text-zinc-900 transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-zinc-900" />
                <span className="text-zinc-900 font-semibold">Reproducir</span>
              </>
            )}
          </button>

          <span className="text-zinc-200">·</span>

          <button
            onClick={() => {
              setCurrentStepIndex(0);
              setIsPlaying(true);
            }}
            className="hover:text-zinc-900 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Reiniciar"
            aria-label="Reiniciar demostración"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reiniciar</span>
          </button>
        </div>
      </div>

      {/* Mobile Tab Toggle */}
      <div className="lg:hidden flex border-b border-zinc-100 mb-6">
        <button
          onClick={() => setMobileTab("transcript")}
          className={cn(
            "flex-1 pb-3 text-xs font-semibold transition-colors text-left",
            mobileTab === "transcript"
              ? "text-zinc-950 border-b-2 border-zinc-950"
              : "text-zinc-400"
          )}
        >
          Conversación literal ({visibleTranscripts.length})
        </button>
        <button
          onClick={() => setMobileTab("insights")}
          className={cn(
            "flex-1 pb-3 text-xs font-semibold transition-colors text-left",
            mobileTab === "insights"
              ? "text-zinc-950 border-b-2 border-zinc-950"
              : "text-zinc-400"
          )}
        >
          Entendimiento Dolphin ({visibleInsights.length})
        </button>
      </div>

      {/* Two Column Workspace Separated by Whitespace and Typography Hierarchy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Literal Conversation */}
        <div
          className={cn(
            "lg:col-span-6 space-y-6",
            mobileTab === "insights" ? "hidden lg:block" : "block"
          )}
        >
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Conversación literal
            </h3>
            <p className="text-xs text-zinc-500 font-normal">
              Audio capturado y procesado localmente en tiempo real
            </p>
          </div>

          <div className="space-y-3">
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

        {/* Right Column: Dolphin Live Understanding */}
        <div
          className={cn(
            "lg:col-span-6 space-y-6",
            mobileTab === "transcript" ? "hidden lg:block" : "block"
          )}
          aria-live="polite"
        >
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Comprensión estructurada
            </h3>
            <p className="text-xs text-zinc-500 font-normal">
              Inferencia de procesos, dependencias y contradicciones
            </p>
          </div>

          <div className="space-y-4">
            {visibleInsights.map((insight) => (
              <InsightCard
                key={insight.id}
                insight={insight}
                isActive={
                  activeTranscriptId === insight.relatedTranscriptId ||
                  currentStep.activeInsightIds.includes(insight.id)
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
      </div>
    </div>
  );
}
