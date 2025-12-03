/**
 * {""Fonction pour récupérer les événements du mois en cours, sans doublons et triés par date""}
 */

import { EventData } from "@/types/event-types";

export function getMonthlyEvents(allEvents: EventData[]): EventData[] {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // Filtrer les événements du mois en cours
  const monthlyEvents = allEvents.filter((event) => {
    const d = event.dateObj;
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  });

  // Supprimer les doublons (même titre)
  const uniqueByTitle = new Map<string, EventData>();
  monthlyEvents.forEach((event) => {
    if (!uniqueByTitle.has(event.title)) {
      uniqueByTitle.set(event.title, event);
    }
  });

  // Retour trié par date
  return [...uniqueByTitle.values()].sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
}
