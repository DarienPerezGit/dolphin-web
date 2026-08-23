import React from "react";
import { Container } from "./container";
import { DolphinLogo } from "../ui/logo";
import { PRODUCT_INFO } from "@/content/mock-data";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-stone-200/80 bg-[#FAF8F5] py-14 text-xs font-sans text-stone-500">
      <Container className="space-y-10 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-stone-200/60">
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2">
              <DolphinLogo size={32} textColor="text-stone-900" />
            </div>
            <p className="text-xs text-stone-500 leading-relaxed font-sans">
              Capa de inteligencia local para reuniones. Comprensión semántica, detección de contradicciones y privacidad total on-device.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-sans text-xs">
            <a
              href="#infografias"
              className="text-stone-600 hover:text-stone-950 transition-colors"
            >
              Infografías
            </a>
            <a
              href="#demo"
              className="text-stone-600 hover:text-stone-950 transition-colors"
            >
              Simulación
            </a>
            <a
              href="#privacy"
              className="text-stone-600 hover:text-stone-950 transition-colors"
            >
              Privacidad
            </a>
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-950 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans text-xs text-stone-400">
          <div className="flex items-center gap-3">
            <span>Dolphin © 2026</span>
            <span>·</span>
            <span>Motor QVAC Local</span>
            <span>·</span>
            <span>Inferencia On-Device</span>
          </div>

          <div>
            Prototipo de Investigación Open-Source
          </div>
        </div>
      </Container>
    </footer>
  );
}
