import { PUBLIC_PAGES } from "@/data/pages.seo";
import { absoluteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PUBLIC_PAGES.map((page) => ({
      url: absoluteUrl(page.path),
      // L'accueil affiche l'agenda : il change à chaque déploiement
      ...(page.path === "/" && { lastModified: new Date(), changeFrequency: "daily" as const }),
      priority: page.priority ?? 0.6,
    })),
    { url: absoluteUrl("/llms.txt"), priority: 0.3 },
  ];
}
