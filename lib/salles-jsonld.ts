import { type FaqItem, type Salle, sallePath } from "@/data/salles.data";
import { ORGANIZATION_ID, SITE, absoluteUrl, postalAddressJsonLd } from "@/lib/site";

const UNIT_TEXT = { Horaire: "heure", "1/2 Journée": "demi-journée", Journée: "journée" } as const;

export const salleId = (salle: Salle) => absoluteUrl(`${sallePath(salle)}#salle`);

/** La salle elle-même : surface, capacité, équipements */
export function meetingRoomJsonLd(salle: Salle) {
  return {
    "@type": "MeetingRoom",
    "@id": salleId(salle),
    name: `${salle.name} – ${SITE.name}`,
    description: salle.description,
    image: salle.photos.map((p) => absoluteUrl(p.src)),
    url: absoluteUrl(sallePath(salle)),
    floorSize: { "@type": "QuantitativeValue", value: salle.surface, unitCode: "MTK" },
    maximumAttendeeCapacity: salle.maxCapacity,
    address: postalAddressJsonLd,
    containedInPlace: { "@id": ORGANIZATION_ID },
    amenityFeature: salle.features.map((f) => ({
      "@type": "LocationFeatureSpecification",
      name: f.title,
      value: true,
    })),
  };
}

/** Les offres de location d'une salle (tarifs semaine et week-end) */
export function salleOffersJsonLd(salle: Salle) {
  return salle.tarifs.flatMap((t) =>
    (["semaine", "weekend"] as const).map((periode) => ({
      "@type": "Offer",
      name: `${salle.name} – ${t.label} (${periode === "semaine" ? "lundi au vendredi" : "week-end"})`,
      itemOffered: { "@id": salleId(salle) },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: t[periode],
        priceCurrency: "EUR",
        unitText: UNIT_TEXT[t.label],
      },
    }))
  );
}

/** Service de location, avec les offres des salles concernées */
export function locationServiceJsonLd({
  id,
  name,
  serviceType,
  description,
  path,
  salles,
}: {
  id: string;
  name: string;
  serviceType: string;
  description: string;
  path: string;
  salles: Salle[];
}) {
  return {
    "@type": "Service",
    "@id": absoluteUrl(`${path}#${id}`),
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "City", name: "Toulouse" },
    offers: salles.flatMap(salleOffersJsonLd),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
