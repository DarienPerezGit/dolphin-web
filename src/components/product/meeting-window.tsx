"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  DEMO_STEPS, 
  CANONICAL_TRANSCRIPT, 
  CANONICAL_INSIGHTS 
} from "@/content/mock-data";
import { TranscriptMessage } from "./transcript-message";
import { InsightCard } from "./insight-card";
import { cn } from "@/lib/utils";

const STEP_DURATION_MS = 7500;

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

  // Keyboard navigation for step tabs
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
    <div className="w-full rounded-[4px] border border-[#D8D2C5] bg-[#FDFCF9] shadow-paper overflow-hidden flex flex-col text-left">
      {/* Live Region Announcement for Screen Readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`Folio Chapter ${currentStep.stepNumber} of ${DEMO_STEPS.length}: ${currentStep.title}.`}
      </div>

      {/* Editorial Folio Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-2.5 border-b border-[#D8D2C5] bg-[#F5F2EB] font-mono text-[11px]">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-foreground tracking-tight">
            PROCEEDINGS FOLIO · REF: 2026-Q3-ERP
          </span>
          <span className="text-[#D8D2C5] hidden sm:inline">|</span>
          <span className="text-foreground-muted hidden sm:inline">
            BUFFER: {currentStep.timestamp} EST
          </span>
        </div>

        {/* Minimal Typographic Status Legend */}
        <div className="flex items-center gap-3 font-mono text-[10px] text-foreground-muted uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-editorial-sage shrink-0" />
            <span>On-Device Substrate (RAM)</span>
          </span>
          <span className="text-[#D8D2C5] hidden sm:inline">|</span>
          <span className="hidden sm:inline text-foreground-faded">0 Bytes Cloud</span>
        </div>
      </div>

      {/* Step Tabs / Chapter Navigation */}
      <div className="px-5 py-2 border-b border-[#D8D2C5] bg-[#FAF8F3] flex flex-wrap items-center justify-between gap-2">
        <div 
          role="tablist" 
          aria-label="Folio chapters"
          className="flex items-center gap-1.5 flex-wrap font-mono text-xs"
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
                  "px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer border rounded-[2px]",
                  isCurrent
                    ? "bg-foreground text-background border-foreground font-semibold"
                    : "bg-[#F5F2EB] text-foreground-muted hover:text-foreground border-[#D8D2C5]"
                )}
              >
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Clean Interactive Text Controls */}
        <div className="flex items-center gap-3 font-mono text-[11px] text-foreground-muted ml-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="hover:text-foreground underline underline-offset-4 decoration-[#D8D2C5] hover:decoration-foreground cursor-pointer transition-colors"
          >
            {isPlaying ? "Pause Stream" : "Play Stream"}
          </button>
          <span className="text-[#D8D2C5]">·</span>
          <button
            onClick={() => {
              setCurrentStepIndex(0);
              setIsPlaying(true);
              setActiveTranscriptId(null);
            }}
            className="hover:text-foreground underline underline-offset-4 decoration-[#D8D2C5] hover:decoration-foreground cursor-pointer transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Subtle Hairline Progress Rule */}
      {isPlaying && !prefersReducedMotion && (
        <div 
          className="w-full h-[1px] bg-[#E5E0D8] overflow-hidden" 
          role="progressbar" 
          aria-valuenow={Math.round(progress)} 
          aria-valuemin={0} 
          aria-valuemax={100}
          aria-label="Chapter reading progress"
        >
          <div
            className="h-full bg-foreground transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Mobile Tab Toggle */}
      <div className="md:hidden flex border-b border-[#D8D2C5] bg-[#F5F2EB] font-mono text-[11px]">
        <button
          onClick={() => setMobileTab("transcript")}
          className={cn(
            "flex-1 py-1.5 border-b-2 text-center transition-colors uppercase tracking-wider",
            mobileTab === "transcript"
              ? "border-foreground text-foreground bg-[#FDFCF9] font-semibold"
              : "border-transparent text-foreground-muted hover:text-foreground"
          )}
        >
          Audio Buffer ({visibleTranscripts.length})
        </button>
        <button
          onClick={() => setMobileTab("insights")}
          className={cn(
            "flex-1 py-1.5 border-b-2 text-center transition-colors uppercase tracking-wider",
            mobileTab === "insights"
              ? "border-foreground text-foreground bg-[#FDFCF9] font-semibold"
              : "border-transparent text-foreground-muted hover:text-foreground"
          )}
        >
          Analysis ({visibleInsights.length})
        </button>
      </div>

      {/* Main Two-Column Editorial Folio Grid */}
      <div 
        id={`step-panel-${currentStepIndex}`}
        role="tabpanel"
        aria-labelledby={`step-tab-${currentStepIndex}`}
        className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] bg-[#FDFCF9]"
      >
        {/* Left Column: Live Spoken Transcript */}
        <div
          className={cn(
            "md:col-span-6 p-5 border-r border-[#D8D2C5] flex flex-col justify-between space-y-4 bg-[#FBF9F5]",
            mobileTab === "insights" ? "hidden md:flex" : "flex"
          )}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-[10px] text-foreground-faded uppercase tracking-wider pb-1.5 border-b border-[#EBE6DC]">
              <span>Audio Record Buffer</span>
              <span>Click line to cite</span>
            </div>

            <div className="space-y-3">
              {visibleTranscripts.map((entry) => (
                <TranscriptMessage
                  key={entry.id}
                  entry={entry}
                  isHighlighted={activeTranscriptId === entry.id}
                  onSelect={() => toggleTranscriptHighlight(entry.id)}
                />
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[#EBE6DC] flex items-center justify-between font-mono text-[10px] text-foreground-muted uppercase tracking-wider">
            <span>Model Ingestion: Active</span>
            <span className="text-foreground-faded">~12ms Local QVAC</span>
          </div>
        </div>

        {/* Right Column: Dolphin Structured Reasoning & Marginalia */}
        <div
          className={cn(
            "md:col-span-6 p-5 flex flex-col justify-between space-y-4 bg-[#FDFCF9]",
            mobileTab === "transcript" ? "hidden md:flex" : "flex"
          )}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-[10px] text-foreground-faded uppercase tracking-wider pb-1.5 border-b border-[#EBE6DC]">
              <span>Cognitive Structuring & Marginalia</span>
              <span>{visibleInsights.length} Inferred Notes</span>
            </div>

            <div className="space-y-3">
              {visibleInsights.map((insight) => (
                <InsightCard
                  key={insight.id}
                  insight={insight}
                  isActive={
                    activeTranscriptId !== null &&
                    insight.relatedTranscriptId === activeTranscriptId
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

          {/* Editorial Footnote Callout */}
          <div className="pt-3 border-t border-[#EBE6DC] text-xs text-foreground-muted font-serif italic">
            Dolphin monitors the stream continuously, structuring technical entities and exceptions as notes in the margin.
          </div>
        </div>
      </div>
    </div>
  );
}
