"use client";

import React from "react";
import { Container } from "../layout/container";
import { PRODUCT_INFO } from "@/content/mock-data";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Github } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-ambient-hero overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none -z-10" />

      <Container className="space-y-8 text-center max-w-4xl relative">
        {/* Aceternity Style Floating Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-xs backdrop-blur-md text-xs font-semibold text-slate-800"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
          </span>
          <span className="font-mono text-slate-900">Local-First Cognitive Layer</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500 font-medium font-mono">100% On-Device Ingestion</span>
        </motion.div>

        {/* Hero Headlines */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.06]">
            Understand the meeting <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-slate-900 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
              while you&apos;re still in it.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Dolphin listens in real time directly on your machine—extracting business requirements, system workflows, and subtle contradiction alerts as they happen.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-zinc-950 hover:bg-zinc-800 shadow-md hover:shadow-lg transition-all"
          >
            <span>Launch Live Interactive Demo</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </a>

          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs transition-all"
          >
            <Github className="w-4 h-4" />
            <span>Open Source</span>
          </a>
        </motion.div>

        {/* Value Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 text-xs font-medium text-slate-600"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% On-Device (0 bytes cloud)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>QVAC Engine (~12ms latency)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Living Mental Model</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
