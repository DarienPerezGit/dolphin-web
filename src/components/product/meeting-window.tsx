"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  ShieldCheck, 
  ChevronRight,
  RefreshCw,
  Video,
  Mic,
  MicOff,
  Radio,
  Command,
  Zap,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

export function MeetingWindow() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTranscriptId, setActiveTranscriptId] = useState<string | null>(null);
  const [mobileTab, setMobileTab] = useState<"transcript" | "insights">("transcript");
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const currentStep = DEMO_STEPS[currentStepIndex];

  // Auto advance timeline
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % DEMO_STEPS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Keyboard navigation (Superhuman style: 1, 2, 3, Space)
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

  const handleCopyAction = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNotification("Copiado al portapapeles");
    setTimeout(() => setCopiedNotification(null), 2000);
  };

  // Determine current active speaker
  const currentActiveSpeaker = visibleTranscripts[visibleTranscripts.length - 1]?.speaker;

  return (
    <div className="w-full rounded-2xl border border-zinc-300/90 bg-white shadow-2xl overflow-hidden flex flex-col transition-all text-left">
      {/* Superhuman-style Top Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-2.5 bg-zinc-950 text-white border-b border-zinc-800 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
          </div>

          <div className="h-3.5 w-px bg-zinc-800 mx-1 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-100 flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-blue-400" />
              <span>Dolphin Live Intelligence Session</span>
            </span>
            <span className="text-[10px] text-zinc-400 px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-700">
              {currentStep.timestamp}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-700/50">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>0ms Latency · On-Device</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>100% Private</span>
          </span>
        </div>
      </div>

      {/* Live Video Room Grid (WebRTC Grid) */}
      <div className="bg-zinc-900 px-4 sm:px-6 py-3 border-b border-zinc-800">
        <div className="flex items-center justify-between pb-2 text-[11px] font-mono text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Participantes en llamada (4 activos)</span>
          </span>
          <span className="text-zinc-500 hidden sm:inline flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-400" />
            <span>Stream local procesado vía QVAC</span>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {MEETING_PARTICIPANTS.map((participant) => {
            const isSpeakingNow = participant.name === currentActiveSpeaker;
            return (
              <div
                key={participant.id}
                className={cn(
                  "relative rounded-xl overflow-hidden aspect-video bg-zinc-950 border transition-all duration-300 group",
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

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Speaking tag & animated soundwave */}
                {isSpeakingNow && (
                  <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-emerald-600 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-full shadow-md">
                    <div className="flex items-center gap-0.5 h-2">
                      <span className="w-0.5 h-full bg-white rounded-full animate-bounce" />
                      <span className="w-0.5 h-2/3 bg-white rounded-full animate-bounce [animation-delay:0.15s]" />
                      <span className="w-0.5 h-4/5 bg-white rounded-full animate-bounce [animation-delay:0.3s]" />
                    </div>
                    <span>HABLANDO</span>
                  </div>
                )}

                {/* Participant name strip */}
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

      {/* Superhuman Step Switcher & Keyboard Shortcut Bar */}
      <div className="px-4 sm:px-6 py-2.5 border-b border-zinc-200 bg-zinc-50 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {DEMO_STEPS.map((step, idx) => {
            const isCurrent = idx === currentStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => handleStepSelect(idx)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer border",
                  isCurrent
                    ? "bg-zinc-950 text-white border-zinc-950 shadow-sm"
                    : "bg-white text-zinc-600 hover:text-zinc-900 border-zinc-200 hover:bg-zinc-100"
                )}
                aria-pressed={isCurrent}
              >
                <span className={cn(
                  "text-[10px] font-mono px-1 rounded",
                  isCurrent ? "bg-zinc-800 text-emerald-400" : "bg-zinc-100 text-zinc-500"
                )}>
                  {idx + 1}
                </span>
                <span>{step.title}</span>
                {isCurrent && <ChevronRight className="w-3 h-3 ml-auto text-emerald-400" />}
              </button>
            );
          })}
        </div>

        {/* Keyboard navigation hints & Controls */}
        <div className="flex items-center gap-2.5 ml-auto">
          <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 bg-white px-2.5 py-1 rounded-md border border-zinc-200 shadow-2xs">
            <Command className="w-3 h-3 text-zinc-400" />
            <span>Teclas: <kbd className="px-1 bg-zinc-100 border rounded font-bold">1</kbd> <kbd className="px-1 bg-zinc-100 border rounded font-bold">2</kbd> <kbd className="px-1 bg-zinc-100 border rounded font-bold">3</kbd> · <kbd className="px-1 bg-zinc-100 border rounded font-bold">Espacio</kbd></span>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-800 transition-colors cursor-pointer shadow-2xs"
            aria-label={isPlaying ? "Pausar" : "Auto-play"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-zinc-700" />
                <span className="hidden sm:inline">Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline text-emerald-700">Auto-play</span>
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
      <div className="lg:hidden flex border-b border-zinc-200 bg-zinc-50">
        <button
          onClick={() => setMobileTab("transcript")}
          className={cn(
            "flex-1 py-2.5 text-xs font-semibold border-b-2 transition-colors",
            mobileTab === "transcript"
              ? "border-zinc-900 text-zinc-900 bg-white"
              : "border-transparent text-zinc-500 hover:text-zinc-900"
          )}
        >
          Conversación ({visibleTranscripts.length})
        </button>
        <button
          onClick={() => setMobileTab("insights")}
          className={cn(
            "flex-1 py-2.5 text-xs font-semibold border-b-2 transition-colors flex items-center justify-center gap-1.5",
            mobileTab === "insights"
              ? "border-zinc-900 text-zinc-900 bg-white"
              : "border-transparent text-zinc-500 hover:text-zinc-900"
          )}
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>Comprensión Dolphin ({visibleInsights.length})</span>
        </button>
      </div>

      {/* Two Column Live Workspace (Superhuman Split View) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-zinc-50/50">
        {/* Left Column: Literal Conversation */}
        <div
          className={cn(
            "lg:col-span-6 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-zinc-200 flex flex-col justify-between space-y-4 bg-white",
            mobileTab === "insights" ? "hidden lg:flex" : "flex"
          )}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono flex items-center gap-1.5">
                <Mic className="w-3.5 h-3.5 text-blue-600" />
                <span>Conversación Literal</span>
              </span>
              <span className="text-[11px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
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

          <div className="pt-3 border-t border-zinc-200 text-[11px] text-zinc-500 flex items-center justify-between font-mono">
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
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
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
                    activeTranscriptId === insight.relatedTranscriptId ||
                    currentStep.activeInsightIds.includes(insight.id)
                  }
                  onSelect={() => {
                    if (insight.relatedTranscriptId) {
                      setActiveTranscriptId(insight.relatedTranscriptId);
                    }
                  }}
                  onCopyAction={handleCopyAction}
                />
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-200 text-[11px] text-zinc-500 flex items-center justify-between font-mono">
            <span>Modelo mental en tiempo real</span>
            <span className="text-emerald-700 font-bold bg-emerald-100/80 px-2.5 py-0.5 rounded-md border border-emerald-200">
              QVAC On-Device Intelligence
            </span>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {copiedNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 shadow-2xl border border-zinc-700 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{copiedNotification}</span>
        </div>
      )}
    </div>
  );
}
