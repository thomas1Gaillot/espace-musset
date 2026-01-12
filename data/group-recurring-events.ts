/**
 * Fonction pour grouper les événements récurrents par activité
 * et séparer les événements uniques des événements récurrents
 */

import { EventData } from "@/types/event-types";

export interface RecurringEventGroup {
  // L'événement de base avec les informations communes
  baseEvent: EventData;
  // Toutes les dates de l'événement récurrent
  dates: Date[];
  // Nombre d'occurrences
  count: number;
}

/**
 * Identifie si deux événements font partie de la même activité récurrente
 * en comparant le type et le titre (sans les dates/détails spécifiques)
 */
function areSameRecurringActivity(event1: EventData, event2: EventData): boolean {
  // Même type d'événement
  if (event1.type.name !== event2.type.name) {
    return false;
  }

  // Pour certains types, on compare juste le type (car le titre contient souvent des détails variables)
  const recurringByTypeOnly = [
    "Qi Gong",
    "Méditation",
    "Feldenkrais",
    "Yoga",
    "Théâtre d'improvisation",
    "Mercredi Montessori",
    "Chant",
    "Cours de piano",
    "Yoga du rire",
    "Ecriture spontanée",
    "Clown Socratique",
  ];

  if (recurringByTypeOnly.includes(event1.type.name)) {
    // Pour ces activités, on vérifie aussi l'heure pour différencier les sessions
    // (ex: Théâtre impro du soir vs de nuit)
    return event1.time === event2.time;
  }

  // Pour les autres (Café philo, conférences, etc.), on compare aussi le titre de base
  // en retirant les parties variables (après ":")
  const getBaseTitle = (title: string) => {
    const colonIndex = title.indexOf(":");
    return colonIndex > 0 ? title.substring(0, colonIndex).trim() : title;
  };

  return getBaseTitle(event1.title) === getBaseTitle(event2.title);
}

/**
 * Groupe les événements récurrents par activité
 * Retourne { recurringGroups, uniqueEvents }
 */
export function groupRecurringEvents(events: EventData[]): {
  recurringGroups: RecurringEventGroup[];
  uniqueEvents: EventData[];
} {
  // Map pour suivre quels événements ont déjà été groupés
  const processedIndices = new Set<number>();
  const recurringGroups: RecurringEventGroup[] = [];
  const uniqueEvents: EventData[] = [];

  events.forEach((event, index) => {
    if (processedIndices.has(index)) {
      return;
    }

    // Chercher tous les événements similaires
    const relatedEvents: EventData[] = [event];
    const relatedIndices: number[] = [index];

    events.forEach((otherEvent, otherIndex) => {
      if (
        otherIndex !== index &&
        !processedIndices.has(otherIndex) &&
        areSameRecurringActivity(event, otherEvent)
      ) {
        relatedEvents.push(otherEvent);
        relatedIndices.push(otherIndex);
      }
    });

    // Si on a trouvé au moins 2 occurrences, c'est un événement récurrent
    if (relatedEvents.length >= 2) {
      // Trier par date
      relatedEvents.sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

      // Marquer tous comme traités
      relatedIndices.forEach((i) => processedIndices.add(i));

      // Créer le groupe
      recurringGroups.push({
        baseEvent: relatedEvents[0], // Prendre le premier comme base
        dates: relatedEvents.map((e) => e.dateObj),
        count: relatedEvents.length,
      });
    } else {
      // C'est un événement unique
      processedIndices.add(index);
      uniqueEvents.push(event);
    }
  });

  return { recurringGroups, uniqueEvents };
}

/**
 * Formate une liste de dates pour l'affichage
 */
export function formatRecurringDates(dates: Date[]): string {
  if (dates.length === 0) return "";
  if (dates.length === 1) {
    return dates[0].toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }

  // Grouper par mois si possible
  const byMonth = dates.reduce((acc, date) => {
    const monthKey = date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
    if (!acc[monthKey]) {
      acc[monthKey] = [];
    }
    acc[monthKey].push(date);
    return acc;
  }, {} as Record<string, Date[]>);

  const monthKeys = Object.keys(byMonth);

  // Si tout est dans le même mois
  if (monthKeys.length === 1) {
    const month = monthKeys[0];
    const days = byMonth[month].map((d) => d.getDate()).join(", ");
    return `Les ${days} ${month}`;
  }

  // Si plusieurs mois, lister les dates complètes
  return dates
    .map((d) =>
      d.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "short",
      })
    )
    .join(", ");
}
