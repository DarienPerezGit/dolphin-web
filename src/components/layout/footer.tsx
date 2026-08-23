import React from "react";
import { Container } from "./container";
import { DolphinLogo } from "../ui/logo";
import { PRODUCT_INFO } from "@/content/mock-data";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper py-14 text-xs font-sans text-foreground-muted">
      <Container className="space-y-10 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-border-subtle">
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2">
              <DolphinLogo size={20} />
            </div>
            <p className="text-xs text-foreground-muted leading-relaxed font-serif">
              {PRODUCT_INFO.tagline} A local-first cognitive substrate for complex proceedings.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px]">
            <a
              href="#demo"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              01. Live Folio
            </a>
            <a
              href="#capabilities"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              02. Instruments
            </a>
            <a
              href="#privacy"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              03. Constitution
            </a>
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground-muted hover:text-foreground transition-colors"
            >
              <span>Repository</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Colophon & Substrate Metadata */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] text-foreground-faded uppercase tracking-wider">
          <div className="flex items-center gap-4">
            <span>COLOPHON: EDITION 2026</span>
            <span>·</span>
            <span>SUBSTRATE: QVAC ON-DEVICE</span>
            <span>·</span>
            <span>ZERO CLOUD TELEMETRY</span>
          </div>

          <div>
            OPEN-SOURCE RESEARCH PROTOTYPE
          </div>
        </div>
      </Container>
    </footer>
  );
}
