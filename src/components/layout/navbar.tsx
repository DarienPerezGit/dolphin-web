"use client";

import React, { useState } from "react";
import { Container } from "./container";
import { DolphinLogo } from "../ui/logo";
import { PRODUCT_INFO } from "@/content/mock-data";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Folio", href: "#demo" },
    { label: "Problem", href: "#problem" },
    { label: "Instruments", href: "#capabilities" },
    { label: "Method", href: "#how-it-works" },
    { label: "Constitution", href: "#privacy" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D8D2C5] bg-[#F5F2EB]">
      <Container className="flex h-13 items-center justify-between py-2">
        {/* Left: Serif Brand Imprint */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
            aria-label="Dolphin Home"
          >
            <DolphinLogo size={20} />
          </a>

          {/* Editorial Navigation */}
          <nav className="hidden lg:flex items-center gap-5 border-l border-[#D8D2C5] pl-5" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-mono tracking-wider text-foreground-muted hover:text-foreground transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Center: Masthead Session Status in Small-Caps */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-editorial-sage shrink-0" />
          <span>Local Substrate · QVAC Engine Operational</span>
        </div>

        {/* Right: Indispensable Controls Only */}
        <div className="hidden sm:flex items-center gap-4 font-mono text-xs">
          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-foreground-muted hover:text-foreground transition-colors underline underline-offset-4 decoration-[#D8D2C5] hover:decoration-foreground"
          >
            <span>Repository</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <a
            href="#demo"
            className="inline-flex items-center justify-center px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-foreground bg-[#FBF9F5] border border-[#D8D2C5] rounded-[3px] hover:border-foreground transition-colors"
          >
            Examine Folio
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 text-foreground-muted hover:text-foreground rounded-[3px] border border-[#D8D2C5]"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </Container>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D8D2C5] bg-[#F5F2EB] px-4 py-3 space-y-2.5">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-foreground-muted pb-2 border-b border-[#E3DEC3]">
            <span className="w-1.5 h-1.5 rounded-full bg-editorial-sage" />
            <span>Local Substrate · Active</span>
          </div>
          <nav className="flex flex-col space-y-1.5 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono uppercase tracking-wider text-foreground-muted hover:text-foreground py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#E3DEC3] flex items-center justify-between text-xs font-mono">
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground underline underline-offset-4"
            >
              GitHub Source ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
