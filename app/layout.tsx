import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import type { Metadata } from "next"
import { Crimson_Text, Inter } from "next/font/google"
import Head from "next/head"
import type React from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson",
})



export const metadata: Metadata = {
  title: "Espace Musset - Lieu de vie associatif à Toulouse",
  description: "Espace Musset est un lieu de vie associatif à Toulouse dédié à la philosophie, l'écologie, aux arts du corps et au partage culturel.",
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "16x16", type: "image/png" },
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
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${crimsonText.variable} font-sans bg-cream text-burgundy`}>
        <Header />
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
