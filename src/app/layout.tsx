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
        <Navbar />

        {/* High-Intensity Top Edge Diffusion (Directly below 80px Navbar, strong blur) */}
        <div 
          className="fixed top-20 inset-x-0 h-10 sm:h-12 pointer-events-none z-40 bg-gradient-to-b from-[#FBF9F5] via-[#FBF9F5]/90 to-transparent backdrop-blur-xl" 
          aria-hidden="true" 
        />

        {/* High-Intensity Bottom Edge Diffusion (Strong blur, same compact reach) */}
        <div 
          className="fixed bottom-0 inset-x-0 h-10 sm:h-12 pointer-events-none z-40 bg-gradient-to-t from-[#FBF9F5] via-[#FBF9F5]/90 to-transparent backdrop-blur-xl" 
          aria-hidden="true" 
        />

        {/* High-Intensity Lateral Diffusions (Left & Right with backdrop-blur) */}
        <div 
          className="fixed left-0 top-20 bottom-0 w-4 sm:w-8 pointer-events-none z-40 bg-gradient-to-r from-[#FBF9F5] via-[#FBF9F5]/80 to-transparent backdrop-blur-md" 
          aria-hidden="true" 
        />
        <div 
          className="fixed right-0 top-20 bottom-0 w-4 sm:w-8 pointer-events-none z-40 bg-gradient-to-l from-[#FBF9F5] via-[#FBF9F5]/80 to-transparent backdrop-blur-md" 
          aria-hidden="true" 
        />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
