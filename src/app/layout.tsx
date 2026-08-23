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
        {/* Continuous Viewport Top & Bottom Subtle Defocus Fades (Active while scrolling) */}
        <div 
          className="fixed top-0 inset-x-0 h-14 sm:h-16 pointer-events-none z-40 bg-gradient-to-b from-[#FBF9F5]/85 via-[#FBF9F5]/40 to-transparent backdrop-blur-[2px]" 
          aria-hidden="true" 
        />
        <div 
          className="fixed bottom-0 inset-x-0 h-14 sm:h-16 pointer-events-none z-40 bg-gradient-to-t from-[#FBF9F5]/85 via-[#FBF9F5]/40 to-transparent backdrop-blur-[2px]" 
          aria-hidden="true" 
        />

        {/* Ambient Glassmorphic Frame with Balanced Top & Bottom Edge Vignettes */}
        <div 
          className="fixed inset-1.5 sm:inset-2.5 md:inset-3.5 pointer-events-none z-50 rounded-2xl md:rounded-3xl border border-white/60 shadow-[0_0_30px_4px_rgba(255,255,255,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.9),inset_0_0_0_1px_rgba(216,210,197,0.35)] overflow-hidden"
          aria-hidden="true"
        >
          {/* Top & Bottom Shimmer Edges */}
          <div className="absolute inset-x-4 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_12px_2px_rgba(255,255,255,0.9)]" />
          <div className="absolute inset-x-4 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent shadow-[0_0_12px_2px_rgba(255,255,255,0.8)]" />
          
          {/* Top Edge Diffusion */}
          <div className="absolute inset-x-0 top-0 h-20 sm:h-24 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.2)_40%,transparent_80%)]" />

          {/* Bottom Edge Diffusion */}
          <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.2)_40%,transparent_80%)]" />

          {/* 4 Corner Subtle Highlights */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_40%,transparent_75%)]" />
          <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_40%,transparent_75%)]" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_40%,transparent_75%)]" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_40%,transparent_75%)]" />
        </div>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
