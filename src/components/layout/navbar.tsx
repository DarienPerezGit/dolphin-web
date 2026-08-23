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
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
      <Container className="flex h-20 max-w-6xl items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-10">
          <a
            href="#"
            className="flex items-center gap-3 focus-visible:outline-none"
            aria-label="Dolphin Inicio"
          >
            <DolphinLogo size={42} />
          </a>

          {/* Clean 3-Item Navigation (Strict Sans-serif, Clean Whitespace) */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navegación Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-sans font-medium text-stone-600 hover:text-stone-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Clean GitHub Link */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans font-medium text-stone-600 hover:text-stone-950 transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-600 hover:text-stone-950 rounded-lg"
          aria-expanded={mobileMenuOpen}
          aria-label="Alternar menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50 px-6 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-sans font-medium text-stone-800 hover:text-stone-950 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-stone-200">
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans font-medium text-stone-600 hover:text-stone-950 block py-1"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
