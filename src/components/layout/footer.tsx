import React from "react";
import { Container } from "./container";
import { PRODUCT_INFO } from "@/content/mock-data";
import { Github, Shield, Cpu, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12 text-sm text-foreground-muted">
      <Container className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-base text-foreground">
                {PRODUCT_INFO.name}
              </span>
              <span className="text-xs bg-zinc-200/70 text-zinc-700 px-2 py-0.5 rounded font-mono">
                Local-first
              </span>
            </div>
            <p className="text-xs max-w-md">
              {PRODUCT_INFO.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-medium">
            <a href="#demo" className="hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground">
              Product Demo
            </a>
            <a href="#capabilities" className="hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground">
              Capabilities
            </a>
            <a href="#privacy" className="hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground">
              Privacy & Local AI
            </a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground">
              Architecture
            </a>
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-zinc-600">
              <Cpu className="w-3.5 h-3.5 text-emerald-600" />
              <span>Designed to run locally with QVAC by Tether</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-zinc-600">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              <span>100% On-Device Privacy</span>
            </span>
          </div>

          <p className="text-zinc-500">
            © {new Date().getFullYear()} Dolphin Project. Hackathon visual & marketing prototype.
          </p>
        </div>
      </Container>
    </footer>
  );
}
