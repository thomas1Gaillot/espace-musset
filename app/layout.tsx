import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import Script from "next/script";
import type React from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "Espace Musset - Lieu de vie associatif à Toulouse",
  description:
    "Espace Musset est un lieu de vie associatif à Toulouse dédié à la philosophie, l'écologie, aux arts du corps et au partage culturel.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
  themeColor: "#ffffff",
  other: {
    "msapplication-TileColor": "#da532c",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="f125975c-d2bc-45d8-91af-c147329a6fd4"
      />

      <body
        className={`${inter.variable} ${crimsonText.variable} font-sans bg-cream text-burgundy`}
      >
        <Header />
        <Toaster />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
