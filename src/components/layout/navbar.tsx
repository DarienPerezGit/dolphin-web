"use client";

import React, { useState } from "react";
import { Container } from "./container";
import { Button } from "../ui/button";
import { PRODUCT_INFO } from "@/content/mock-data";
import { Menu, X, Github, ArrowRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Demostración", href: "#demo" },
    { label: "Traducción", href: "#translation" },
    { label: "Contradicciones", href: "#contradiction" },
    { label: "Privacidad", href: "#privacy" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-100">
      <Container className="flex h-[84px] items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="text-xl font-bold tracking-tight text-zinc-950 hover:opacity-90 transition-opacity">
            {PRODUCT_INFO.name}
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-950 px-3 py-2 transition-colors"
            aria-label="View on GitHub"
          >
            GitHub
          </a>
          
          <Button
            onClick={() => {
              document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="min-h-[44px] px-5 rounded-[10px] bg-zinc-950 text-white hover:bg-zinc-800 text-sm font-medium transition-colors"
          >
            <span>Ver demostración</span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-500 hover:text-zinc-950 rounded-lg"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-100 bg-white px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-950 py-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
            <Button
              className="w-full justify-center min-h-[48px] rounded-[10px] bg-zinc-950 text-white"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver demostración
            </Button>
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center text-sm font-medium text-zinc-600 hover:text-zinc-950 py-2"
            >
              Ver en GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
