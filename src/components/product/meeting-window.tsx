"use client";

import React, { useState, useEffect } from "react";
import { 
  DEMO_STEPS, 
  CANONICAL_TRANSCRIPT, 
  CANONICAL_INSIGHTS,
  MEETING_PARTICIPANTS 
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
  RefreshCw,
  Video,
  Mic,
  MicOff,
  Radio
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

  // Determine current active speaker
  const currentActiveSpeaker = visibleTranscripts[visibleTranscripts.length - 1]?.speaker;

  return (
    <div className="w-full rounded-2xl border border-zinc-200/90 bg-white shadow-2xl overflow-hidden flex flex-col transition-all glow-ambient">
      {/* Window Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-zinc-200/80 bg-zinc-900 text-white">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-rose-500/90" />
            <div className="w-3 h-3 rounded-full bg-amber-500/90" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
          </div>

          <div className="h-4 w-px bg-zinc-700 mx-1 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-100 flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-blue-400" />
              <span>Architecture & ERP Migration Sync</span>
            </span>
            <span className="text-[11px] font-mono text-zinc-300 px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
              {currentStep.timestamp}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-700/50">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>QVAC On-Device Active</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-700">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>0 Bytes Sent to Cloud</span>
          </span>
        </div>
      </div>

      {/* Live Video Room Grid (Simulating Real Video Meeting Participants) */}
      <div className="bg-zinc-950 px-4 sm:px-6 py-3 border-b border-zinc-800">
        <div className="flex items-center justify-between pb-2 text-[11px] font-mono text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live WebRTC Room · 4 Active Participants</span>
          </span>
          <span className="text-zinc-500 hidden sm:inline">Encrypted Local Audio Feed</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {MEETING_PARTICIPANTS.map((participant) => {
            const isSpeakingNow = participant.name === currentActiveSpeaker;
            return (
              <div
                key={participant.id}
                className={cn(
                  "relative rounded-xl overflow-hidden aspect-video bg-zinc-900 border transition-all duration-300 group",
                  isSpeakingNow
                    ? "border-emerald-500 ring-2 ring-emerald-500/40 shadow-lg"
                    : "border-zinc-800 opacity-80 hover:opacity-100"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={participant.avatarUrl}
                  alt={participant.name}
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Speaking indicator tag */}
                {isSpeakingNow && (
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-emerald-600/90 text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span>SPEAKING</span>
                  </div>
                )}

                {/* Bottom info strip */}
                <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-white text-[11px]">
                  <div className="truncate pr-1">
                    <div className="font-semibold text-xs leading-tight truncate">{participant.name}</div>
                    <div className="text-[9px] text-zinc-300 font-mono truncate">{participant.roleTitle}</div>
                  </div>

                  <div className="shrink-0 p-1 rounded-full bg-black/60 backdrop-blur-xs">
                    {participant.isMuted ? (
                      <MicOff className="w-3 h-3 text-rose-400" />
                    ) : (
                      <Mic className={cn("w-3 h-3", isSpeakingNow ? "text-emerald-400" : "text-zinc-300")} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Step Switcher & Timeline Controls */}
      <div className="px-4 sm:px-6 py-3 border-b border-border bg-zinc-50/90 flex flex-wrap items-center justify-between gap-4">
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
                    ? "bg-zinc-900 text-white border-zinc-900 shadow-sm font-semibold"
                    : "bg-white text-zinc-600 hover:text-zinc-900 border-zinc-200 hover:bg-zinc-100/70"
                )}
                aria-pressed={isCurrent}
              >
                <span>{step.title}</span>
                {isCurrent && <ChevronRight className="w-3 h-3 ml-auto text-emerald-400" />}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-800 transition-colors cursor-pointer shadow-2xs"
            aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-zinc-700" />
                <span className="hidden sm:inline">Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline font-semibold text-emerald-700">Auto-play</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setCurrentStepIndex(0);
              setIsPlaying(true);
            }}
            className="p-1.5 rounded-md border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer shadow-2xs"
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
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-zinc-50/50">
        {/* Left Column: Literal Conversation */}
        <div
          className={cn(
            "lg:col-span-6 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-border/80 flex flex-col justify-between space-y-4 bg-white",
            mobileTab === "insights" ? "hidden lg:flex" : "flex"
          )}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-border/60">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono flex items-center gap-1.5">
                <Mic className="w-3.5 h-3.5 text-blue-600" />
                <span>Conversación Literal</span>
              </span>
              <span className="text-[11px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded border">
                {visibleTranscripts.length} fragmentos
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

          <div className="pt-3 border-t border-border/60 text-[11px] text-zinc-500 flex items-center justify-between font-mono">
            <span>Audio stream local · Micrófono activo</span>
            <span className="text-emerald-600 font-semibold">Latencia: ~12ms</span>
          </div>
        </div>

        {/* Right Column: Dolphin Live Understanding */}
        <div
          className={cn(
            "lg:col-span-6 p-4 sm:p-6 bg-zinc-50/70 flex flex-col justify-between space-y-4",
            mobileTab === "transcript" ? "hidden lg:flex" : "flex"
          )}
          aria-live="polite"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-border/60">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono">
                  Comprensión Estructurada
                </span>
              </div>
              <span className="text-[11px] font-medium font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
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

          <div className="pt-3 border-t border-border/60 text-[11px] text-zinc-500 flex items-center justify-between font-mono">
            <span>Modelo mental actualizado en tiempo real</span>
            <span className="text-emerald-700 font-bold bg-emerald-100/70 px-2 py-0.5 rounded">
              Local QVAC Intelligence
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

