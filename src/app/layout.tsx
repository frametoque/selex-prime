import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Selex Prime Engineering | Core Cutting & Construction Solutions Sri Lanka",
  description: "Established in 2017, Selex Prime Engineering offers dust-controlled, damage-free RCC slab, wall & beam core cutting, chemical anchor drilling, Mechanical, Electrical and Plumbing solutions, and civil construction islandwide.",
  keywords: "Core Cutting, Construction, Mechanical, Electrical and Plumbing Solutions, Engineering Sri Lanka, RCC Slab Cutting, Chemical Anchor, Selex Prime",
  icons: {
    icon: "/favicon.png",
  },
  generator: "FrameToque Digital Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
       {/* 
        Website designed and developed by FrameToque Digital Media
        https://frametoque.online
      */}
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
