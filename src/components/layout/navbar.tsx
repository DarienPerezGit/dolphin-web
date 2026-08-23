"use client";

import React, { useState } from "react";
import { Container } from "./container";
import { DolphinLogo } from "../ui/logo";
import { PRODUCT_INFO } from "@/content/mock-data";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact 3 sections of the landing page
  const navLinks = [
    { label: "Infografías", href: "#infografias" },
    { label: "Simulación", href: "#demo" },
    { label: "Privacidad", href: "#privacy" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-transparent">
      <Container className="flex h-20 max-w-6xl items-center justify-between">
        {/* Left: Brand Identity (Serif Elegante con Tracking Expandido 0.15em) */}
        <div className="flex items-center gap-10">
          <a
            href="#"
            className="flex items-center gap-3 focus-visible:outline-none"
            aria-label="Dolphin Inicio"
          >
            <DolphinLogo size={40} textColor="text-white" />
          </a>

          {/* Clean 3-Item Navigation (14px, Weight 400 Regular, -0.01em Tracking) */}
          <nav className="hidden md:flex items-center gap-8 font-sans" aria-label="Navegación Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-normal leading-normal tracking-[-0.01em] text-white/85 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Clean GitHub Link (14px, Weight 400 Regular, -0.01em Tracking) */}
        <div className="hidden md:flex items-center gap-4 font-sans">
          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-normal leading-normal tracking-[-0.01em] text-white/85 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu toggle in White */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-white/80 rounded-lg"
          aria-expanded={mobileMenuOpen}
          aria-label="Alternar menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl px-6 py-4 space-y-3 font-sans">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] font-normal leading-normal tracking-[-0.01em] text-white hover:text-white/80 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10">
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-normal leading-normal tracking-[-0.01em] text-white/80 hover:text-white block py-1"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
