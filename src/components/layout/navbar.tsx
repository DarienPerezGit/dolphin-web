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
    <header className="absolute top-0 left-0 right-0 z-50 w-full border-b border-stone-200/70 bg-transparent">
      <Container className="flex h-20 max-w-6xl items-center justify-between">
        {/* Left: Brand Identity with Dark Text */}
        <div className="flex items-center gap-10">
          <a
            href="#"
            className="flex items-center gap-3 focus-visible:outline-none"
            aria-label="Dolphin Inicio"
          >
            <DolphinLogo size={40} textColor="text-stone-900" />
          </a>

          {/* Clean 3-Item Navigation in Dark Ink */}
          <nav className="hidden md:flex items-center gap-8 font-sans" aria-label="Navegación Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-normal leading-normal tracking-[-0.01em] text-stone-600 hover:text-stone-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Clean GitHub Link in Dark Ink */}
        <div className="hidden md:flex items-center gap-4 font-sans">
          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-normal leading-normal tracking-[-0.01em] text-stone-600 hover:text-stone-950 transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu toggle in Dark Ink */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-700 hover:text-stone-950 rounded-lg"
          aria-expanded={mobileMenuOpen}
          aria-label="Alternar menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white/95 backdrop-blur-xl px-6 py-4 space-y-3 font-sans shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] font-normal leading-normal tracking-[-0.01em] text-stone-800 hover:text-stone-950 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-stone-100">
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-normal leading-normal tracking-[-0.01em] text-stone-600 hover:text-stone-950 block py-1"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
