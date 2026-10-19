import type { Metadata } from "next";

/**
 * Informations de référence sur le lieu.
 * Utilisées pour les metadata, les données structurées (JSON-LD), le sitemap et /llms.txt.
 */
export const SITE = {
  url: "https://www.espace-musset.com",
  name: "Espace Musset",
  shortDescription:
    "Lieu inter-associatif et location de salles à Toulouse (quartier des Minimes) : café associatif, philosophie, arts du corps, écologie, conférences et ateliers.",
  email: "contact@espace-musset.com",
  phone: "+33621799750",
  phoneDisplay: "06 21 79 97 50",
  address: {
    street: "52 bis rue Alfred de Musset",
    postalCode: "31200",
    city: "Toulouse",
    district: "Minimes",
    region: "Occitanie",
    country: "FR",
  },
  geo: { latitude: 43.62143, longitude: 1.428601 },
  transport: "Métro ligne A, station Minimes – Claude Nougaro",
  image: "/espace-musset.jpeg",
  logo: "/logoEM.png",
  sameAs: [
    "https://instagram.com/espacemussettoulouse",
    "https://www.kactus.com/fr/lieux/espace-musset",
  ],
} as const;

export const ORGANIZATION_ID = `${SITE.url}/#organization`;

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE.url}${path.startsWith("/") ? "" : "/"}${path}`;

export const postalAddressJsonLd = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  postalCode: SITE.address.postalCode,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.region,
  addressCountry: SITE.address.country,
};

/**
 * Metadata d'une page : titre, description, URL canonique et Open Graph.
 * Open Graph est redéfini entièrement car Next.js ne fusionne pas cet objet avec celui du layout.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = SITE.image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    // La page d'accueil garde son titre complet, sans le suffixe du modèle
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      locale: "fr_FR",
      type: "website",
      images: [{ url: image }],
    },
  };
}
