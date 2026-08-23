import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Dolphin — Understand the meeting while you're still in it",
  description:
    "A local intelligence layer for work conversations that understands meaning, processes, contradictions, and actionable context in real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans relative">
        {/* High-Intensity Ambient Glassmorphic Frame with Kled AI-style Zenith Inner Glow & Shimmer Border */}
        <div 
          className="fixed inset-1.5 sm:inset-2.5 md:inset-3.5 pointer-events-none z-50 rounded-2xl md:rounded-3xl border border-white/80 shadow-[0_0_80px_20px_rgba(255,255,255,1),inset_0_2.5px_4px_rgba(255,255,255,1),inset_0_0_60px_10px_rgba(255,255,255,0.7),inset_0_0_0_1.5px_rgba(216,210,197,0.5)] overflow-hidden"
          aria-hidden="true"
        >
          {/* Intense Top Zenith Shimmer Light Edge */}
          <div className="absolute inset-x-4 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_24px_6px_rgba(255,255,255,1)]" />
          
          {/* Broad Zenith Overhead Light Diffusion */}
          <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.6)_30%,rgba(255,255,255,0.15)_60%,transparent_85%)]" />

          {/* Deep Inner Glow Corner Highlights */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_35%,transparent_75%)]" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,1)_0%,rgba(255,255,255,0.5)_35%,transparent_75%)]" />
        </div>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
