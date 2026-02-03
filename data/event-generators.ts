import { EventData, EventType } from "@/types/event-types";
import { createEvent } from "./create.event";

/**
 * Event Template Interface
 * Defines a template for creating multiple similar events
 */
export interface EventTemplate {
  title: string;
  time: string;
  image: string;
  price: string;
  type: { name: EventType; href: string };
  category: { name: string; href: string };
  eventLink?: string;
  eventContact?: string;
}

/**
 * Recurrence Pattern Interface
 */
export type RecurrencePattern = {
  type: "weekly" | "biweekly" | "monthly" | "custom";
  dayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday, 1 = Monday, etc.
  weekOfMonth?: 1 | 2 | 3 | 4 | -1; // -1 for last week
  customDates?: Date[]; // For irregular patterns
};

/**
 * Generate a weekly recurring event
 * @example
 * generateWeeklyEvents({
 *   title: "Atelier chant",
 *   time: "18:15 à 19:15",
 *   category: EVENT_CATEGORIES.ACTIVITES,
 *   type: EVENT_TYPES.CHANT,
 *   price: "Nous contacter",
 *   image: "/espace-musset.jpeg",
 * }, new Date("2026-01-07"), new Date("2026-02-25"))
 */
export function generateWeeklyEvents(
  template: EventTemplate,
  startDate: Date,
  endDate: Date
): EventData[] {
  const events: EventData[] = [];
  const current = new Date(startDate);
  const dayOfWeek = startDate.getDay();

  while (current <= endDate) {
    events.push(
      createEvent({
        ...template,
        dateObj: new Date(current),
      })
    );
    // Move to next week (same day)
    current.setDate(current.getDate() + 7);
  }

  return events;
}

/**
 * Generate a bi-weekly recurring event
 * @example
 * generateBiWeeklyEvents({
 *   title: "Atelier Ecriture spontanée",
 *   time: "19:30 à 21:00",
 *   category: EVENT_CATEGORIES.ACTIVITES,
 *   type: EVENT_TYPES.ECRITURE_SPONTANEE,
 *   price: "10 €",
 *   image: "/cours/ecriture.jpeg",
 * }, new Date("2025-10-16"), 5)
 */
export function generateBiWeeklyEvents(
  template: EventTemplate,
  startDate: Date,
  occurrences: number
): EventData[] {
  const events: EventData[] = [];
  const current = new Date(startDate);

  for (let i = 0; i < occurrences; i++) {
    events.push(
      createEvent({
        ...template,
        dateObj: new Date(current),
      })
    );
    // Move to next occurrence (2 weeks)
    current.setDate(current.getDate() + 14);
  }

  return events;
}

/**
 * Generate monthly recurring event (specific day of week and week of month)
 * @example
 * // First Thursday of each month
 * generateMonthlyEvents({
 *   title: "Café Philo",
 *   time: "19:30 à 21:15",
 *   category: EVENT_CATEGORIES.PHILOSOPHIE,
 *   type: EVENT_TYPES.CAFE_PHILO,
 *   price: "7,58 €",
 *   image: "/event/cafe-philo-1er-jeudi.jpg",
 * }, 2025, 9, 12, 4, 1) // September to December, Thursday, 1st week
 */
export function generateMonthlyEvents(
  template: EventTemplate,
  year: number,
  startMonth: number, // 1-12
  endMonth: number, // 1-12
  dayOfWeek: number, // 0-6 (0=Sunday)
  weekOfMonth: number // 1-4 or -1 for last week
): EventData[] {
  const events: EventData[] = [];

  for (let month = startMonth; month <= endMonth; month++) {
    const date = getNthDayOfMonth(year, month, dayOfWeek, weekOfMonth);
    if (date) {
      events.push(
        createEvent({
          ...template,
          dateObj: date,
        })
      );
    }
  }

  return events;
}

/**
 * Generate events from a list of specific dates
 * Perfect for irregular schedules
 * @example
 * generateEventsFromDates({
 *   title: "Atelier philosophie",
 *   time: "19:30 à 22:00",
 *   category: EVENT_CATEGORIES.PHILOSOPHIE,
 *   type: EVENT_TYPES.ATELIER_PHILO,
 *   price: "-",
 *   image: "/event/atelier-philo.jpg",
 *   eventContact: "Benjamin, au 06 30 15 46 48",
 * }, [
 *   new Date("2025-10-13"),
 *   new Date("2025-10-20"),
 *   new Date("2025-10-27"),
 *   new Date("2025-11-03"),
 *   new Date("2025-11-10"),
 * ])
 */
export function generateEventsFromDates(template: EventTemplate, dates: Date[]): EventData[] {
  return dates.map((date) =>
    createEvent({
      ...template,
      dateObj: date,
    })
  );
}

/**
 * Generate events for specific days of the week within a date range
 * @example
 * // Every Monday from Sept 29 to Dec 15
 * generateEventsByDayOfWeek({
 *   title: "Théatre d'improvisation",
 *   time: "18:30 à 20:30",
 *   category: EVENT_CATEGORIES.ACTIVITES,
 *   type: EVENT_TYPES.THEATRE_IMPRO,
 *   price: "Nous contacter",
 *   image: "/espace-musset.jpeg",
 * }, new Date("2025-09-29"), new Date("2025-12-15"), 1) // 1 = Monday
 */
export function generateEventsByDayOfWeek(
  template: EventTemplate,
  startDate: Date,
  endDate: Date,
  dayOfWeek: number // 0-6 (0=Sunday)
): EventData[] {
  const events: EventData[] = [];
  const current = new Date(startDate);

  // Find the first occurrence of the desired day
  while (current.getDay() !== dayOfWeek && current <= endDate) {
    current.setDate(current.getDate() + 1);
  }

  // Generate events every week on that day
  while (current <= endDate) {
    events.push(
      createEvent({
        ...template,
        dateObj: new Date(current),
      })
    );
    current.setDate(current.getDate() + 7);
  }

  return events;
}

/**
 * Helper function to get the Nth occurrence of a day of week in a month
 */
function getNthDayOfMonth(
  year: number,
  month: number, // 1-12
  dayOfWeek: number, // 0-6
  weekNumber: number // 1-4 or -1 for last
): Date | null {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  if (weekNumber === -1) {
    // Find last occurrence
    let current = new Date(lastDay);
    while (current.getDay() !== dayOfWeek) {
      current.setDate(current.getDate() - 1);
    }
    return current;
  }

  // Find Nth occurrence
  let current = new Date(firstDay);
  let count = 0;

  while (current.getMonth() === month - 1) {
    if (current.getDay() === dayOfWeek) {
      count++;
      if (count === weekNumber) {
        return current;
      }
    }
    current.setDate(current.getDate() + 1);
  }

  return null;
}

/**
 * Create multiple variations of the same event on the same day (different times)
 * Useful for events that run multiple sessions in one day
 * @example
 * generateSameDayVariations({
 *   title: "Théatre d'improvisation",
 *   category: EVENT_CATEGORIES.ACTIVITES,
 *   type: EVENT_TYPES.THEATRE_IMPRO,
 *   price: "Nous contacter",
 *   image: "/espace-musset.jpeg",
 * }, new Date("2026-01-05"), ["18:30 à 20:30", "20:45 à 22h45"])
 */
export function generateSameDayVariations(
  template: Omit<EventTemplate, "time">,
  date: Date,
  times: string[]
): EventData[] {
  return times.map((time) =>
    createEvent({
      ...template,
      time,
      dateObj: new Date(date),
    })
  );
}

/**
 * Advanced: Generate events with a custom recurrence pattern
 * Supports weekly, bi-weekly, monthly, and custom patterns
 */
export function generateRecurringEvents(
  template: EventTemplate,
  pattern: RecurrencePattern,
  startDate: Date,
  endOrCount: Date | number
): EventData[] {
  switch (pattern.type) {
    case "weekly":
      if (endOrCount instanceof Date) {
        return generateWeeklyEvents(template, startDate, endOrCount);
      } else {
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 7 * endOrCount);
        return generateWeeklyEvents(template, startDate, endDate);
      }

    case "biweekly":
      const occurrences = endOrCount instanceof Date ? 10 : endOrCount;
      return generateBiWeeklyEvents(template, startDate, occurrences);

    case "custom":
      if (pattern.customDates) {
        return generateEventsFromDates(template, pattern.customDates);
      }
      return [];

    default:
      return [];
  }
}
