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
  RefreshCw,
  Video,
  Mic,
  Users,
  Cpu,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEP_DURATION_MS = 8000;

export function MeetingWindow() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeTranscriptId, setActiveTranscriptId] = useState<string | null>(null);
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
    <div className="w-full flex flex-col text-left transition-all">
      {/* Top macOS App Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-3.5 border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          {/* macOS window dots */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-rose-400/90" />
            <span className="w-3 h-3 rounded-full bg-amber-400/90" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
          </div>

          <div className="h-4 w-px bg-slate-300 mx-1 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900 text-xs sm:text-sm tracking-tight font-sans flex items-center gap-1.5">
              <span>ERP Sync Architecture & Purchasing Rules</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200 shadow-2xs">
              {currentStep.timestamp} EST
            </span>
          </div>
        </div>

        {/* Engine Status Tag */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-[11px] font-medium">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>QVAC Engine: ~12ms</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
            <span>0 bytes cloud</span>
          </span>
        </div>
      </div>

      {/* Chapter Steps & Playback Controls */}
      <div className="px-5 sm:px-6 py-3 border-b border-slate-200/80 bg-white flex flex-wrap items-center justify-between gap-3">
        <div 
          role="tablist" 
          aria-label="Discussion chapters"
          className="flex items-center gap-2 flex-wrap text-xs"
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
                  "px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer border flex items-center gap-1.5",
                  isCurrent
                    ? "bg-slate-950 text-white border-slate-950 shadow-xs"
                    : "bg-slate-50 text-slate-700 hover:text-slate-950 border-slate-200 hover:bg-slate-100"
                )}
              >
                <span>{step.title}</span>
                {isCurrent && <ChevronRight className="w-3 h-3 opacity-60 ml-0.5" />}
              </button>
            );
          })}
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2 text-xs text-slate-600 ml-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 font-medium text-slate-800 cursor-pointer shadow-2xs transition-colors"
            aria-label={isPlaying ? "Pause auto play" : "Start auto play"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-slate-700" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-slate-700" />
                <span>Auto-play</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setCurrentStepIndex(0);
              setIsPlaying(true);
              setActiveTranscriptId(null);
            }}
            className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-950 cursor-pointer shadow-2xs transition-colors"
            title="Reset"
            aria-label="Reset simulation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Real-Time Linear Progress Bar */}
      {isPlaying && !prefersReducedMotion && (
        <div 
          className="w-full h-1 bg-slate-100 overflow-hidden" 
          role="progressbar" 
          aria-valuenow={Math.round(progress)} 
          aria-valuemin={0} 
          aria-valuemax={100}
        >
          <div
            className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Main Two-Column Layout */}
      <div 
        id={`step-panel-${currentStepIndex}`}
        role="tabpanel"
        aria-labelledby={`step-tab-${currentStepIndex}`}
        className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-white"
      >
        {/* Left Column: Live Audio Stream & Floating Video Call Tile */}
        <div className="lg:col-span-5 p-5 sm:p-6 border-r border-slate-200/80 flex flex-col justify-between space-y-6 bg-slate-50/50">
          <div className="space-y-4">
            {/* Discreet Atmospheric Video Call Tile (Granola-inspired) */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 bg-zinc-950 shadow-md">
              <video
                src="/videos/sidev/meeting-call.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-[150px] sm:h-[175px] object-cover opacity-90 pointer-events-none"
              />

              {/* Discreet Overlay Badges */}
              <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 text-white text-[10px] font-mono backdrop-blur-md border border-white/10">
                <Video className="w-3 h-3 text-emerald-400" />
                <span>Live Call · Audio Buffer</span>
              </div>

              <div className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 text-white text-[10px] font-mono backdrop-blur-md border border-white/10">
                <Users className="w-3 h-3 opacity-75" />
                <span>3 participants</span>
              </div>
            </div>

            {/* Live Audio Dialogue Transcript */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px] text-slate-500 uppercase tracking-wider pb-1 border-b border-slate-200">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  Live Audio Transcript
                </span>
                <span>Click to inspect</span>
              </div>

              <div className="space-y-2.5">
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
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between font-mono text-[10px] text-slate-500 uppercase tracking-wider">
            <span>Audio Ingestion: Synced</span>
            <span className="font-semibold text-slate-700">~12ms Local QVAC</span>
          </div>
        </div>

        {/* Right Column: Dolphin Structured Reasoning & Mental Model */}
        <div className="lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between space-y-5 bg-white">
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-[10px] text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-200">
              <span className="font-bold text-slate-800">Dolphin Cognitive Workspace</span>
              <span className="text-sky-700 font-semibold bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                {visibleInsights.length} active inferences
              </span>
            </div>

            {/* Cognitive Cards with High Polish */}
            <div className="space-y-3.5">
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

          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>💡 Dolphin models mental dependencies and questions privately as you speak.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
