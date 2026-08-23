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
        {/* Continuous Viewport Top Edge Defocus Diffusion (Smooth fade out, zero boxes) */}
        <div 
          className="fixed top-0 inset-x-0 h-14 sm:h-16 pointer-events-none z-40 bg-gradient-to-b from-[#FBF9F5] via-[#FBF9F5]/70 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_25%,transparent_100%)]" 
          aria-hidden="true" 
        />

        {/* Continuous Viewport Bottom Edge Defocus Diffusion (Smooth fade in, zero boxes) */}
        <div 
          className="fixed bottom-0 inset-x-0 h-14 sm:h-16 pointer-events-none z-40 bg-gradient-to-t from-[#FBF9F5] via-[#FBF9F5]/70 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,black_25%,transparent_100%)]" 
          aria-hidden="true" 
        />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
