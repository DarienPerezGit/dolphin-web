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
      <body className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans relative selection:bg-stone-200 selection:text-stone-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
