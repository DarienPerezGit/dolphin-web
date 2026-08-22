"use client";

import React, { useState } from "react";
import { Container } from "./container";
import { Button } from "../ui/button";
import { PRODUCT_INFO } from "@/content/mock-data";
import { Menu, X, Github, ArrowRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Product", href: "#demo" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Privacy", href: "#privacy" },
    { label: "Use cases", href: "#use-cases" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2">
            <span className="text-xl font-bold tracking-tight text-foreground group-hover:opacity-90 transition-opacity">
              {PRODUCT_INFO.name}
            </span>
            <span className="text-[10px] uppercase font-semibold px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded-full border border-zinc-200 font-mono">
              v1 Preview
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors rounded-md py-1 px-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={PRODUCT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted hover:text-foreground px-3 py-2 rounded-md hover:bg-accent-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-1"
            aria-label="View on GitHub"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          
          <Button
            size="sm"
            onClick={() => {
              document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="gap-1.5"
          >
            <span>Watch demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground-muted hover:text-foreground rounded-lg hover:bg-accent-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-foreground py-1 px-2 rounded-md hover:bg-accent-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-border flex flex-col gap-2">
            <Button
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Watch demo
            </Button>
            <a
              href={PRODUCT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            >
              <Github className="w-4 h-4" />
              <span>View repository on GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
