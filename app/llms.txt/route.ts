import { PUBLIC_PAGES, type PageSeo } from "@/data/pages.seo";
import { DISPOSITIONS_SALLE_DES_MUSES, SALLES, SALLES_FAQ, formatTarif } from "@/data/salles.data";
import { eventUrl, getUpcomingEvents } from "@/lib/events-seo";
import { SITE, absoluteUrl } from "@/lib/site";

/**
 * /llms.txt : résumé du site en Markdown pour les assistants IA (https://llmstxt.org).
 * Régénéré chaque jour pour que l'agenda reste à jour.
 */
export const revalidate = 86400;

const AGENDA_DAYS = 60;

export function GET() {
  const { address } = SITE;

  const salles = SALLES.map((salle) =>
    [
      `### ${salle.name} – ${salle.surface} m², jusqu'à ${salle.maxCapacity} personnes`,
      "",
      salle.description,
      "",
      "| Formule | Lundi–vendredi | Week-end |",
      "| --- | --- | --- |",
      ...salle.tarifs.map(
        (t) => `| ${t.label} | ${formatTarif(t, t.semaine)} | ${formatTarif(t, t.weekend)} |`
      ),
      "",
      `- Équipements inclus : ${salle.features.map((f) => f.title).join(", ")}`,
      salle.paidOptions.length > 0 &&
        `- En option : ${salle.paidOptions.map((o) => o.title).join(", ")}`,
      salle.showDispositions &&
        `- Dispositions : ${DISPOSITIONS_SALLE_DES_MUSES.map((d) => `${d.name} (${d.capacity.toLowerCase()})`).join(", ")}`,
    ]
      .filter((line) => line !== false)
      .join("\n")
  ).join("\n\n");

  const sections = PUBLIC_PAGES.reduce<Record<string, PageSeo[]>>((acc, page) => {
    (acc[page.section] ??= []).push(page);
    return acc;
  }, {});

  const pages = Object.entries(sections)
    .map(
      ([section, list]) =>
        `## ${section}\n\n` +
        list.map((p) => `- [${p.title}](${absoluteUrl(p.path)}): ${p.description}`).join("\n")
    )
    .join("\n\n");

  const events = getUpcomingEvents(AGENDA_DAYS)
    .map(
      (e) =>
        `- ${e.date}, ${e.time} – ${e.title} (${e.type.name})${e.price ? ` – ${e.price}` : ""} – ${eventUrl(e)}`
    )
    .join("\n");

  const body = `# ${SITE.name}

> ${SITE.shortDescription}

## Informations clés

- Adresse : ${address.street}, ${address.postalCode} ${address.city} (quartier des ${address.district}), France
- Accès : ${SITE.transport}. Parking à proximité. Accès PMR.
- Téléphone : ${SITE.phoneDisplay}
- E-mail : ${SITE.email}
- Site : ${SITE.url}
- Instagram : ${SITE.sameAs[0]}
- Lieu inter-associatif animé par des bénévoles, avec un café associatif, « Le Café d'Oc ».

## Location de salles

Page : ${absoluteUrl("/mise-a-disposition")}
Réservation par téléphone au ${SITE.phoneDisplay} (Anne-Marie) ou par e-mail à ${SITE.email}. Visite et devis personnalisé.

${salles}

### Questions fréquentes

${SALLES_FAQ.map((f) => `**${f.question}**\n${f.answer}`).join("\n\n")}

## Agenda des ${AGENDA_DAYS} prochains jours

Mis à jour le ${new Date().toLocaleDateString("fr-FR", { timeZone: "Europe/Paris" })}. Agenda complet : ${absoluteUrl("/#agenda")}

${events || "Aucun événement programmé pour le moment : consultez l'agenda en ligne."}

${pages}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
