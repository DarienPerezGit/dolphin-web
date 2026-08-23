import React from "react";
import { Container } from "./container";
import { DolphinLogo } from "../ui/logo";
import { PRODUCT_INFO } from "@/content/mock-data";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#D8D2C5] bg-[#F5F2EB] py-14 text-xs font-sans text-foreground-muted">
      <Container className="space-y-10 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-[#D8D2C5]">
          <div className="space-y-2 max-w-md">
            <DolphinLogo size={20} />
            <p className="text-xs text-foreground-muted leading-relaxed font-serif">
              {PRODUCT_INFO.tagline} Capa cognitiva local potenciada por el motor de inferencia QVAC.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px]">
            <a href="#demo" className="text-foreground-muted hover:text-foreground transition-colors">
              01. Folio Interactivo
            </a>
            <a href="#infografias" className="text-foreground-muted hover:text-foreground transition-colors">
              02. Infografías
            </a>
            <a href="#privacidad" className="text-foreground-muted hover:text-foreground transition-colors">
              03. Privacidad
            </a>
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground hover:text-foreground-muted transition-colors"
            >
              <span>Repositorio GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] text-foreground-faded uppercase tracking-wider">
          <div className="flex items-center gap-4">
            <span>COLOPHON: EDICIÓN 2026</span>
            <span>·</span>
            <span>SUSTRATO: QVAC ON-DEVICE</span>
            <span>·</span>
            <span>CERO TELEMETRÍA CLOUD</span>
          </div>

          <div>
            PROTOTIPO DE INVESTIGACIÓN OPEN-SOURCE
          </div>
        </div>
      </Container>
    </footer>
  );
}
