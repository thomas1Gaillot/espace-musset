import type { Metadata } from "next";
import type React from "react";

// Outil interne de génération de la newsletter : à ne pas indexer
export const metadata: Metadata = {
  title: "Newsletter",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
