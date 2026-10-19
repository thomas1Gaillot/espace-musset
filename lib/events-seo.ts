import { eventList } from "@/data/data.allevents";
import { existingPath } from "@/data/pages.seo";
import { SITE, absoluteUrl, postalAddressJsonLd } from "@/lib/site";
import type { EventData } from "@/types/event-types";

const pad = (n: number) => String(n).padStart(2, "0");

/** Date du jour de l'événement au format YYYY-MM-DD */
const dayOf = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/** Décalage horaire de Paris à cette date, ex. "+02:00" */
function parisOffset(day: string) {
  const name = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Paris",
    timeZoneName: "longOffset",
  })
    .formatToParts(new Date(`${day}T12:00:00Z`))
    .find((p) => p.type === "timeZoneName")?.value;
  return name?.replace("GMT", "") || "+01:00";
}

/** "19:30 à 21:30" ou "20:45 à 22h45" → { start: "19:30", end: "21:30" } */
function parseTime(time: string) {
  const [start, end] = (time.match(/\d{1,2}[:h]\d{2}/g) ?? []).map((t) =>
    t.replace("h", ":").padStart(5, "0")
  );
  return { start, end };
}

/** "6,00 €" → 6 ; "Gratuit" / "Entrée libre" → 0 ; sinon undefined */
function parsePrice(price: string) {
  if (/gratuit|entrée libre/i.test(price)) return 0;
  const match = price.match(/^\s*(\d+(?:[.,]\d+)?)\s*€/);
  return match ? Number(match[1].replace(",", ".")) : undefined;
}

/** Événements à venir (hors fermetures), triés par date */
export function getUpcomingEvents(days: number, now = new Date()) {
  const today = dayOf(now);
  const limit = dayOf(new Date(now.getTime() + days * 86_400_000));
  return eventList
    .filter((e) => e.type.name !== "Vacances" && e.price !== "Fermé")
    .filter((e) => {
      const day = dayOf(e.dateObj);
      return day >= today && day <= limit;
    })
    .sort(
      (a, b) =>
        dayOf(a.dateObj).localeCompare(dayOf(b.dateObj)) ||
        (parseTime(a.time).start ?? "").localeCompare(parseTime(b.time).start ?? "")
    );
}

/** Lien externe (billetterie) ou page interne existante, sinon l'agenda */
export function eventUrl(e: EventData) {
  if (e.eventLink?.startsWith("http")) return e.eventLink;
  const path = existingPath(e.eventLink ?? "") ?? existingPath(e.type.href) ?? "/#agenda";
  return absoluteUrl(path);
}

export function eventJsonLd(e: EventData) {
  const day = dayOf(e.dateObj);
  const offset = parisOffset(day);
  const { start, end } = parseTime(e.time);
  const price = parsePrice(e.price);

  return {
    "@type": "Event",
    name: e.title,
    startDate: start ? `${day}T${start}:00${offset}` : day,
    ...(end && { endDate: `${day}T${end}:00${offset}` }),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description:
      `${e.type.name} à l'Espace Musset, Toulouse (Minimes). ${e.price ? `Tarif : ${e.price}.` : ""}`.trim(),
    image: absoluteUrl(e.image.split("?")[0]),
    url: eventUrl(e),
    location: {
      "@type": "Place",
      name: SITE.name,
      address: postalAddressJsonLd,
    },
    organizer: { "@type": "Organization", name: SITE.name, url: SITE.url },
    ...(price !== undefined && {
      offers: {
        "@type": "Offer",
        price,
        priceCurrency: "EUR",
        url: eventUrl(e),
        availability: "https://schema.org/InStock",
      },
    }),
    ...(price === 0 && { isAccessibleForFree: true }),
  };
}
