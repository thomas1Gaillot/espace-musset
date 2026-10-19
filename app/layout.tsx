import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { Toaster } from "@/components/ui/sonner";
import { ORGANIZATION_ID, SITE, absoluteUrl, postalAddressJsonLd } from "@/lib/site";
import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL(SITE.url),
  title: {
    default: "Espace Musset – Lieu associatif et location de salles à Toulouse",
    template: "%s | Espace Musset Toulouse",
  },
  description:
    "Espace Musset est un lieu de vie associatif à Toulouse dédié à la philosophie, l'écologie, aux arts du corps et au partage culturel.",
  applicationName: SITE.name,
  openGraph: {
    siteName: SITE.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: SITE.image }],
  },
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
  other: {
    "msapplication-TileColor": "#da532c",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventVenue"],
  "@id": ORGANIZATION_ID,
  name: SITE.name,
  alternateName: "Espace Musset Toulouse",
  description: SITE.shortDescription,
  url: SITE.url,
  logo: absoluteUrl(SITE.logo),
  image: absoluteUrl(SITE.image),
  email: SITE.email,
  telephone: SITE.phone,
  address: postalAddressJsonLd,
  geo: { "@type": "GeoCoordinates", ...SITE.geo },
  hasMap: "https://maps.google.com/?q=Espace+Musset+52+bis+rue+Alfred+de+Musset+31200+Toulouse",
  publicAccess: true,
  isAccessibleForFree: true,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Accès PMR", value: true },
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Café associatif", value: true },
  ],
  sameAs: SITE.sameAs,
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
        <JsonLd data={organizationJsonLd} />
        <Header />
        <Toaster />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
