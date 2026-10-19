import { JsonLd } from "@/components/json-ld";
import { ROUTES } from "@/data/route";
import { PAGES } from "@/data/pages.seo";
import { SALLES, SALLES_FAQ } from "@/data/salles.data";
import { ORGANIZATION_ID, SITE, absoluteUrl, pageMetadata, postalAddressJsonLd } from "@/lib/site";
import type React from "react";

const path = ROUTES.MISE_A_DISPOSITION;

export const metadata = pageMetadata(PAGES.MISE_A_DISPOSITION);

const unitText = { Horaire: "heure", "1/2 Journée": "demi-journée", Journée: "journée" } as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": absoluteUrl(`${path}#service`),
      name: "Location de salles à l'Espace Musset",
      serviceType: "Location de salle de réunion, de formation et d'événement",
      description:
        "Mise à disposition de salles modulables et équipées à Toulouse (quartier des Minimes) pour réunions, formations, séminaires, ateliers, conférences, yoga et événements associatifs ou professionnels.",
      url: absoluteUrl(path),
      provider: { "@id": ORGANIZATION_ID },
      areaServed: { "@type": "City", name: "Toulouse" },
      offers: SALLES.flatMap((salle) =>
        salle.tarifs.flatMap((t) =>
          (["semaine", "weekend"] as const).map((periode) => ({
            "@type": "Offer",
            name: `${salle.name} – ${t.label} (${periode === "semaine" ? "lundi au vendredi" : "week-end"})`,
            itemOffered: { "@id": absoluteUrl(`${path}#${salle.id}`) },
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: t[periode],
              priceCurrency: "EUR",
              unitText: unitText[t.label],
            },
          }))
        )
      ),
    },
    ...SALLES.map((salle) => ({
      "@type": "MeetingRoom",
      "@id": absoluteUrl(`${path}#${salle.id}`),
      name: `${salle.name} – ${SITE.name}`,
      description: salle.description,
      image: absoluteUrl(salle.image),
      url: absoluteUrl(path),
      floorSize: { "@type": "QuantitativeValue", value: salle.surface, unitCode: "MTK" },
      maximumAttendeeCapacity: salle.maxCapacity,
      address: postalAddressJsonLd,
      containedInPlace: { "@id": ORGANIZATION_ID },
      amenityFeature: salle.features.map((f) => ({
        "@type": "LocationFeatureSpecification",
        name: f.title,
        value: true,
      })),
    })),
    {
      "@type": "FAQPage",
      mainEntity: SALLES_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Mise à disposition de salles",
          item: absoluteUrl(path),
        },
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  );
}
