import { PAGES } from "@/data/pages.seo";
import { pageMetadata } from "@/lib/site";
import type React from "react";

// La page est un composant client : ses metadata sont déclarées ici
export const metadata = pageMetadata(PAGES.CAFE_ASSOCIATIF);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
