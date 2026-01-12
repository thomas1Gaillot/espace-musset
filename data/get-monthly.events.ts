/**
 * {""Fonction pour récupérer les événements du mois en cours, sans doublons et triés par date""}
 */

import { EventData } from "@/types/event-types";
import { groupRecurringEvents, RecurringEventGroup } from "./group-recurring-events";

export interface MonthlyEventsData {
  uniqueEvents: EventData[];
  recurringGroups: RecurringEventGroup[];
}

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

/**
 * Nouvelle fonction pour récupérer les événements séparés en uniques et récurrents
 */
export function getMonthlyEventsGrouped(allEvents: EventData[]): MonthlyEventsData {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // Filtrer les événements du mois en cours
  const monthlyEvents = allEvents.filter((event) => {
    const d = event.dateObj;
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  });

  // Grouper les événements récurrents
  const { recurringGroups, uniqueEvents } = groupRecurringEvents(monthlyEvents);

  // Trier les événements uniques par date
  uniqueEvents.sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  // Trier les groupes récurrents par la date de la première occurrence
  recurringGroups.sort((a, b) => a.dates[0].getTime() - b.dates[0].getTime());

  return {
    uniqueEvents,
    recurringGroups,
  };
}
