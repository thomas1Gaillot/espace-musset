/**
 * REFACTORED EVENT DATA FILE
 *
 * This file demonstrates the new, more efficient way to manage events.
 * It uses:
 * - Event constants for categories and types
 * - Event templates for recurring events
 * - Generator functions for creating multiple similar events
 *
 * To use this file:
 * 1. Replace the content of data.allevents.ts with this file
 * 2. Adjust dates and details as needed
 * 3. Add new events using the templates and generators
 */

import { EventData } from "@/types/event-types";
import { createEvent } from "./create.event";
import { EVENT_CATEGORIES, EVENT_TYPES } from "./event-constants";
import { ROUTES } from "./route";
import {
  generateWeeklyEvents,
  generateBiWeeklyEvents,
  generateMonthlyEvents,
  generateEventsFromDates,
  generateEventsByDayOfWeek,
  generateSameDayVariations,
} from "./event-generators";
import { RECURRING_EVENT_TEMPLATES, customizeTemplate } from "./event-templates";

/**
 * ONE-TIME EVENTS (Special Events, Conferences, etc.)
 * For unique events that don't repeat
 */
const oneTimeEvents: EventData[] = [
  createEvent({
    title: "Ciné philo : Kaamelott et le roi Arthur",
    dateObj: new Date("2025-08-26"),
    time: "19:30 à 21:30",
    image: "/event/kamelot.jpg",
    price: "6,00 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CINE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-cine-philo-kaamelott-et-le-roi-arthur-1459840976659?aff=ebdssbdestsearch",
  }),

  createEvent({
    title: "La philosophie de la Divine Comédie de Dante",
    dateObj: new Date("2025-07-08"),
    time: "19:30 à 20:30",
    image: "/event/divina-comedie.jpg?height=80&width=120",
    price: "6,00 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CONFERENCE_PHILO,
    eventLink:
      "https://www.eventbrite.com/e/billets-la-philosophie-de-la-divine-comedie-de-dante-1434042903929?aff=ebdssbdestsearch&keep_tld=1",
  }),

  createEvent({
    title: "Sur les traces d'Ulysse : un périple en quête de soi.",
    dateObj: new Date("2025-07-22"),
    time: "19:30 à 20:30",
    image: "/event/ulysse.png?height=80&width=120",
    price: "6,00 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.RENCONTRE_PHILO,
    eventLink:
      "https://www.eventbrite.com/e/billets-sur-les-traces-dulysse-un-periple-en-quete-de-soi-1434216262449?aff=ebdssbdestsearch&keep_tld=1",
  }),

  createEvent({
    title: "L'indifférence est-elle le mal de notre siècle ?",
    dateObj: new Date("2025-07-29"),
    time: "19:30 à 20:30",
    image: "/event/indif.jpg?height=80&width=120",
    price: "6,00 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.RENCONTRE_PHILO,
    eventLink:
      "https://www.eventbrite.com/e/billets-lindifference-est-elle-le-mal-de-notre-siecle-1434429299649?aff=ebdssbdestsearch&keep_tld=1",
  }),

  createEvent({
    title: "Journée portes ouvertes",
    dateObj: new Date("2025-09-13"),
    time: "14:00 à 19:00",
    image: "/espace-musset.jpeg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.CAFE_ASSOCIATIF,
    type: EVENT_TYPES.PORTES_OUVERTES,
    eventLink:
      "https://www.helloasso.com/associations/association-espace-musset/evenements/portes-ouvertes-espace-musset",
  }),

  createEvent({
    title: "Inauguration Café d'Oc",
    dateObj: new Date("2025-09-13"),
    time: "19:30",
    image: "/cafe-doc.png",
    price: "Gratuit",
    category: EVENT_CATEGORIES.CAFE_ASSOCIATIF,
    type: EVENT_TYPES.PORTES_OUVERTES,
    eventLink: "/contact",
  }),

  createEvent({
    title: "Concert de musique baroque",
    dateObj: new Date("2025-10-17"),
    time: "20:00 à 21:30",
    image: "/event/concert-baroque.jpg",
    price: "10 €",
    category: EVENT_CATEGORIES.CAFE_ASSOCIATIF,
    type: EVENT_TYPES.SPECTACLE,
    eventLink:
      "https://www.eventbrite.fr/e/billets-concert-de-musique-baroque-1765835534619?aff=ebdsoporgprofile",
  }),

  createEvent({
    title: "World CleanUp Day ",
    dateObj: new Date("2025-09-20"),
    time: "10:00 à 12:00",
    image: "/event/cleanup-20-sept.jpg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.VOLONTARIAT,
    type: EVENT_TYPES.ZERO_DECHET,
    eventLink:
      "https://www.eventbrite.fr/e/billets-world-cleanup-day-1629072703309?aff=ebdsoporgprofile",
  }),

  createEvent({
    title: "Ainsi parlait VRAIMENT Zarathoustra",
    dateObj: new Date("2026-01-23"),
    time: "19:30 à 21:30",
    image: "/event/zatoustra.jpg",
    price: "6,00 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CONFERENCE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-ainsi-parlait-vraiment-zarathoustra-1976582034072",
  }),

  createEvent({
    title: "La conscience dans tous ses états ...",
    dateObj: new Date("2026-02-13"),
    time: "19:30 à 22:00",
    image: "conference-philo.jpg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CONFERENCE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-la-conscience-dans-tous-ses-etats-1982281492305",
  }),
  createEvent({
    title: "Hathor : la puissance de la joie au cœur de la spiritualité égyptienne.",
    dateObj: new Date("2026-03-13"),
    time: "20:00 à 22:00",
    image: "event/hator.png",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CONFERENCE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-hathor-la-puissance-de-la-joie-au-cur-de-la-spiritualite-egyptienne-1980548869985",
  }),

  createEvent({
    title: "Café Philo Socratique : Égalité homme-femme, utopie ou réalité ?",
    dateObj: new Date("2026-03-05"),
    time: "19:30 à 21:15",
    image: "/event/cafe-philo-1er-jeudi.jpg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CAFE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-cafe-philo-socratique-egalite-homme-femme-utopie-ou-realite-1982283114156",
  }),

  createEvent({
    title: "CES TOULOUSAINNES QUI ONT FAIT L'HISTOIRE !",
    dateObj: new Date("2026-03-20"),
    time: "19:30 à 21:30",
    image: "conference-philo.jpg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CONFERENCE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-ces-toulousainnes-qui-ont-fait-lhistoire-1982292622596",
  }),

  createEvent({
    title: "Nietzsche : Dire oui à la vie",
    dateObj: new Date("2026-04-09"),
    time: "20:00 à 22:00",
    image: "event/nietzsche.jpg",
    price: "10 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CONFERENCE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-nietzsche-dire-oui-a-la-vie-1984387606750",
  }),

  createEvent({
    title: "Sport et Philo",
    dateObj: new Date("2026-07-22"),
    time: "19:30",
    image: "/event/sportetphilo.webp",
    price: "6 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.SPORT_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-sport-et-philo-1992158991170?aff=erelexpmlt",
  }),

  createEvent({
    title: "Ciné Philo : L'attaque des Titans, la caverne de Platon",
    dateObj: new Date("2026-08-26"),
    time: "19:30",
    image: "/event/aot.jpg",
    price: "6 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CINE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-cine-philo-lattaque-des-titans-la-caverne-de-platon-1994229337632",
  }),

  createEvent({
    title: "Soirée Jeux de société",
    dateObj: new Date("2026-08-27"),
    time: "19:30 à 23:00",
    image: "/event/jeu-societe.jpg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.CAFE_ASSOCIATIF,
    type: EVENT_TYPES.SOIREE_JEUX,
    eventLink: ROUTES.CONTACT,
  }),

  createEvent({
    title: "Café Philo : La culture nous rend-elle plus humain ?",
    dateObj: new Date("2026-09-01"),
    time: "19:30 à 21:15",
    image: "/event/cafe-philo-1er-jeudi.jpg",
    price: "6 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CAFE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-cafe-philo-la-culuture-nous-rend-elle-plus-humain-1995202166389",
  }),

  createEvent({
    title: "World CleanUp Day",
    dateObj: new Date("2026-09-19"),
    time: "14:30 à 16:30",
    image: "/event/cleanup-20-sept.jpg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.VOLONTARIAT,
    type: EVENT_TYPES.ZERO_DECHET,
    eventLink:
      "https://www.eventbrite.fr/e/billets-world-cleanup-day-1995208437145",
  }),
];

const devienstoiMemeAtelierPhilo = generateEventsFromDates(
  customizeTemplate(RECURRING_EVENT_TEMPLATES.ATELIER_PHILO_PAYANT, {
    title: "Deviens toi-même : atelier de philosophie pratique",
    price: "5 €",
    image: "/event/atelier-philo.jpg",
    eventLink:
      "https://www.eventbrite.fr/e/billets-deviens-toi-meme-atelier-de-philosophie-pratique-1467522010839",
  }),
  [new Date("2026-09-14"), new Date("2026-09-21"), new Date("2026-09-28")]
);

/**
 * RECURRING EVENTS - WEEKLY
 * Events that happen every week on the same day
 */

// Atelier Chant - Every Wednesday (January to June 2026, except Feb 4)
const atelierChantJanJun = generateEventsFromDates(RECURRING_EVENT_TEMPLATES.CHANT_ATELIER, [
  new Date("2026-01-07"),
  new Date("2026-01-14"),
  new Date("2026-01-21"),
  new Date("2026-01-28"),
  // Feb 4 removed
  new Date("2026-02-11"),
  new Date("2026-02-18"),
  new Date("2026-02-25"),
  new Date("2026-03-04"),
  new Date("2026-03-11"),
  new Date("2026-03-18"),
  new Date("2026-03-25"),
  new Date("2026-04-01"),
  new Date("2026-04-08"),
  new Date("2026-04-15"),
  new Date("2026-04-22"),
  new Date("2026-04-29"),
  new Date("2026-05-06"),
  new Date("2026-05-13"),
  new Date("2026-05-20"),
  new Date("2026-05-27"),
  new Date("2026-06-03"),
  new Date("2026-06-10"),
  new Date("2026-06-17"),
  new Date("2026-06-24"),
]);

// Théâtre d'Improvisation - Every Monday (multiple time slots), excluding March 2
const theatreImproMonday = [
  ...generateEventsByDayOfWeek(
    RECURRING_EVENT_TEMPLATES.THEATRE_IMPRO_SOIR,
    new Date("2025-09-29"),
    new Date("2026-02-23"),
    1 // Monday
  ),
  ...generateEventsByDayOfWeek(
    RECURRING_EVENT_TEMPLATES.THEATRE_IMPRO_SOIR,
    new Date("2026-03-09"),
    new Date("2026-05-30"),
    1 // Monday
  ),
  // Tous les lundis de juin 2026 (1, 8, 15, 22, 29)
  ...generateEventsByDayOfWeek(
    RECURRING_EVENT_TEMPLATES.THEATRE_IMPRO_SOIR,
    new Date("2026-06-01"),
    new Date("2026-06-29"),
    1 // Monday
  ),
  // Reprise septembre - décembre 2026 (pause estivale juillet-août)
  ...generateEventsByDayOfWeek(
    RECURRING_EVENT_TEMPLATES.THEATRE_IMPRO_SOIR,
    new Date("2026-09-01"),
    new Date("2026-12-31"),
    1 // Monday
  ),
];

// Théâtre d'Improvisation - Evening session, excluding March 2
const theatreImproNuit = [
  ...generateEventsByDayOfWeek(
    RECURRING_EVENT_TEMPLATES.THEATRE_IMPRO_NUIT,
    new Date("2026-01-05"),
    new Date("2026-02-23"),
    1 // Monday
  ),
  ...generateEventsByDayOfWeek(
    RECURRING_EVENT_TEMPLATES.THEATRE_IMPRO_NUIT,
    new Date("2026-03-09"),
    new Date("2026-05-30"),
    1 // Monday
  ),
  // Tous les lundis de juin 2026 (1, 8, 15, 22, 29)
  ...generateEventsByDayOfWeek(
    RECURRING_EVENT_TEMPLATES.THEATRE_IMPRO_NUIT,
    new Date("2026-06-01"),
    new Date("2026-06-29"),
    1 // Monday
  ),
  // Reprise septembre - décembre 2026 (pause estivale juillet-août)
  ...generateEventsByDayOfWeek(
    RECURRING_EVENT_TEMPLATES.THEATRE_IMPRO_NUIT,
    new Date("2026-09-01"),
    new Date("2026-12-31"),
    1 // Monday
  ),
];

// Qi Gong - Every Friday (Oct 2025 - Mar 2026, pause Apr-Mai)
const qiGongTuesday = generateEventsByDayOfWeek(
  RECURRING_EVENT_TEMPLATES.QI_GONG,
  new Date("2025-10-28"),
  new Date("2026-03-31"),
  5 // Friday
);

// Mercredi Montessori - Every Wednesday
const mercrediMontessori = generateEventsByDayOfWeek(
  RECURRING_EVENT_TEMPLATES.MERCREDI_MONTESSORI,
  new Date("2025-09-24"),
  new Date("2025-10-29"),
  3 // Wednesday
);

// Atelier philosophie - Every Wednesday, November 2026 to June 2027, 19h30-22h00
const atelierPhilosophieMercredi = generateEventsByDayOfWeek(
  RECURRING_EVENT_TEMPLATES.ATELIER_PHILO_PAYANT,
  new Date("2026-11-01"),
  new Date("2027-06-30"),
  3 // Wednesday
);

// Et si on chantait - Every Wednesday, reprise septembre 2026 (et décembre 2026)
const etSiOnChantaitSeptDec = generateEventsByDayOfWeek(
  RECURRING_EVENT_TEMPLATES.ET_SI_ON_CHANTAIT,
  new Date("2026-09-01"),
  new Date("2026-09-30"),
  3 // Wednesday
).concat(
  generateEventsByDayOfWeek(
    RECURRING_EVENT_TEMPLATES.ET_SI_ON_CHANTAIT,
    new Date("2026-12-01"),
    new Date("2026-12-31"),
    3 // Wednesday
  )
);

// Yoga - Every Thursday, reprise septembre 2026 à janvier 2027
const yogaSeptJan = generateEventsByDayOfWeek(
  RECURRING_EVENT_TEMPLATES.YOGA,
  new Date("2026-09-01"),
  new Date("2027-01-28"),
  4 // Thursday
);

/**
 * RECURRING EVENTS - MONTHLY
 * Events that happen on a specific week/day each month
 */

// Café Philo - First Thursday of each month
const cafePhiloMonthly = [
  createEvent({
    title: "Café Philo : La réalité virtuelle, illusion ou nouvelle conscience ?",
    dateObj: new Date("2025-09-04"),
    time: "19:30 à 21:15",
    image: "/event/cafe-philo-1er-jeudi.jpg",
    price: "7,58 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CAFE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-cafe-philo-la-realite-virtuelle-illusion-ou-nouvelle-conscience-1549423811329?aff=ebdsoporgprofile",
  }),
  createEvent({
    title: "Café Philo :L'engagement : prison ou liberté ?",
    dateObj: new Date("2025-10-02"),
    time: "19:30 à 21:15",
    image: "/event/cafe-philo-1er-jeudi.jpg",
    price: "7,58 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CAFE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-cafe-philo-lengagement-prison-ou-liberte-1549624692169?aff=ebdsoporgprofile",
  }),
  createEvent({
    title: "Café Philo : Penser à la mort est-utile ?",
    dateObj: new Date("2025-12-04"),
    time: "19:30 à 21:15",
    image: "/event/cafe-philo-1er-jeudi.jpg",
    price: "7,58 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CAFE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-cafe-philo-penser-a-la-mort-est-utile-1549755342949?aff=ebdsoporgprofile",
  }),
  createEvent({
    title: "Café Philo : La justice suit-elle la loi ou la conscience ?",
    dateObj: new Date("2026-01-08"),
    time: "19:30 à 21:15",
    image: "/event/cafe-philo-1er-jeudi.jpg",
    price: "7,58 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CAFE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-cafe-philo-la-justice-suit-elle-la-loi-ou-la-conscience-1976509953477",
  }),
  createEvent({
    title: "Sommes-nous condamnés à craindre l'avenir ?",
    dateObj: new Date("2026-02-05"),
    time: "19:30 à 22:00",
    image: "/event/cafe-philo-1er-jeudi.jpg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CAFE_PHILO,
    eventLink: ROUTES.PHILOSOPHIE.SUBPAGES.CAFES,
  }),
  createEvent({
    title: "Café Philo : La liberté d'expression est-elle sans limites ?",
    dateObj: new Date("2026-04-02"),
    time: "19:30 à 21:15",
    image: "/event/cafe-philo-1er-jeudi.jpg",
    price: "6 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CAFE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-cafe-philo-la-liberte-dexpression-est-elle-sans-limites-1985379201637",
  }),
];

/**
 * RECURRING EVENTS - BI-WEEKLY or CUSTOM DATES
 * Events with irregular schedules
 */

// Atelier Chant - Specific October & November dates
const atelierChantOctNov = generateEventsFromDates(
  customizeTemplate(RECURRING_EVENT_TEMPLATES.CHANT_ATELIER, {
    time: "18:30 à 20:30",
  }),
  [
    new Date("2025-10-01"),
    new Date("2025-10-08"),
    new Date("2025-10-15"),
    new Date("2025-10-22"),
    new Date("2025-10-29"),
    new Date("2025-11-05"),
    new Date("2025-11-12"),
    new Date("2025-11-19"),
    new Date("2025-11-26"),
  ]
);

// Atelier Philosophie - Specific Monday dates
const atelierPhiloMondays = generateEventsFromDates(RECURRING_EVENT_TEMPLATES.ATELIER_PHILO, [
  new Date("2025-10-13"),
  new Date("2025-10-20"),
  new Date("2025-10-27"),
  new Date("2025-11-03"),
  new Date("2025-11-10"),
]);

// Meditation - Specific Thursday dates
const meditationThursdays = generateEventsFromDates(RECURRING_EVENT_TEMPLATES.MEDITATION, [
  new Date("2025-10-09"),
  new Date("2025-10-16"),
  new Date("2025-10-23"),
  new Date("2025-10-30"),
]);

// Yoga - Every Thursday February to June 2026
const yogaThursdays = generateEventsFromDates(RECURRING_EVENT_TEMPLATES.YOGA, [
  new Date("2026-02-05"),
  new Date("2026-02-12"),
  new Date("2026-02-19"),
  new Date("2026-02-26"),
  new Date("2026-03-05"),
  new Date("2026-03-12"),
  new Date("2026-03-19"),
  new Date("2026-03-26"),
  new Date("2026-04-02"),
  new Date("2026-04-09"),
  new Date("2026-04-16"),
  new Date("2026-04-23"),
  new Date("2026-04-30"),
  new Date("2026-05-07"),
  new Date("2026-05-14"),
  new Date("2026-05-21"),
  new Date("2026-05-28"),
  new Date("2026-06-04"),
  new Date("2026-06-11"),
  new Date("2026-06-18"),
  new Date("2026-06-25"),
]);

// Atelier écriture "Libérez votre plume" - February 19, 2026
const atelierEcritureFeb = [
  createEvent({
    title: "Libérez votre plume",
    dateObj: new Date("2026-02-19"),
    time: "19:30 à 21:30",
    image: "/cours/ecriture.jpeg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.ECRITURE_SPONTANEE,
    eventLink: ROUTES.ACTIVITES.SUBPAGES.ECRITURE_SPONTANEE,
  }),
];

// Clown Socratique - Monthly Saturday sessions (Feb-Mar 2026)
const clownSocratiqueEvents = generateEventsFromDates(RECURRING_EVENT_TEMPLATES.CLOWN_SOCRATIQUE, [
  new Date("2026-02-28"),
  new Date("2026-03-28"),
]);

// Clown Socratique - Tuesday sessions (Sept-Oct)
const clownSocratiqueTuesdays = generateEventsFromDates(
  customizeTemplate(RECURRING_EVENT_TEMPLATES.CLOWN_SOCRATIQUE, {
    title: "Clown Socratique",
    time: "19:00 à 21:30",
  }),
  [new Date("2025-09-23"), new Date("2025-09-30"), new Date("2025-10-21"), new Date("2025-10-28")]
);

// Meditation Midi - Tuesday sessions
const meditationMidiTuesdays = generateEventsFromDates(RECURRING_EVENT_TEMPLATES.MEDITATION_MIDI, [
  new Date("2025-09-23"),
  new Date("2025-09-30"),
]);

// Ecriture Spontanée
const ecritureSpontanee = generateEventsFromDates(RECURRING_EVENT_TEMPLATES.ECRITURE_SPONTANEE, [
  new Date("2025-10-16"),
  new Date("2025-11-20"),
  new Date("2026-03-19"),
  new Date("2026-05-28"),
]);

// 4e jeudi du mois - Soirée jeux (20h-23h) et Atelier écriture (18h-19h) - septembre 2026 à juin 2027
const quatriemeJeudiDates = [
  new Date("2026-09-23"),
  new Date("2026-10-21"),
  new Date("2026-11-25"),
  new Date("2026-12-23"),
  new Date("2027-01-27"),
  new Date("2027-02-24"),
  new Date("2027-03-24"),
  new Date("2027-04-21"),
  new Date("2027-05-26"),
  new Date("2027-06-23"),
];
const soireeJeux4eJeudi = generateEventsFromDates(
  RECURRING_EVENT_TEMPLATES.SOIREE_JEUX_4E_JEUDI,
  quatriemeJeudiDates
);
const ecriture4eJeudi = generateEventsFromDates(
  RECURRING_EVENT_TEMPLATES.ECRITURE_4E_JEUDI,
  quatriemeJeudiDates
);

// Maraude - créneau 16h, dernier dimanche du mois, septembre 2026 à juin 2027
const maraude16h = generateEventsFromDates(RECURRING_EVENT_TEMPLATES.MARAUDE_16H, [
  new Date("2026-09-26"),
  new Date("2026-10-24"),
  new Date("2026-11-28"),
  new Date("2026-12-26"),
  new Date("2027-01-30"),
  new Date("2027-02-27"),
  new Date("2027-03-27"),
  new Date("2027-04-24"),
  new Date("2027-05-29"),
  new Date("2027-06-26"),
]);

/**
 * VOLUNTEER ACTIVITIES
 */
const volunteerEvents: EventData[] = [
  createEvent({
    title: "Journée Volontariat - Atelier écogeste",
    dateObj: new Date("2025-12-06"),
    time: "14:30",
    image: "/event/journeevolontariat.jpg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.VOLONTARIAT,
    type: EVENT_TYPES.ZERO_DECHET,
    eventLink:
      "https://www.eventbrite.fr/e/billets-journee-mondiale-du-volontariat-atelier-volontariat-1909364112459",
  }),

  createEvent({
    title: "Atelier nettoyage de notre cité",
    dateObj: new Date("2025-12-06"),
    time: "15:30",
    image: "/event/journeevolontariat.jpg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.VOLONTARIAT,
    type: EVENT_TYPES.ZERO_DECHET,
    eventLink:
      "https://www.eventbrite.fr/e/billets-journee-mondiale-du-volontariat-atelier-volontariat-1909364112459",
  }),

  // Maraude events
  createEvent({
    title: "Je cuisine pour les autres",
    dateObj: new Date("2026-02-22"),
    time: "14:30 à 16:30",
    image: "/event/cuisine.jpeg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.VOLONTARIAT,
    type: EVENT_TYPES.MARAUDE,
    eventLink: ROUTES.CONTACT,
  }),
  createEvent({
    title: "Je cuisine pour les autres",
    dateObj: new Date("2026-05-31"),
    time: "14:30 à 16:30",
    image: "/event/cuisine.jpeg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.VOLONTARIAT,
    type: EVENT_TYPES.MARAUDE,
    eventLink: ROUTES.CONTACT,
  }),
  createEvent({
    title: "Je cuisine pour les autres",
    dateObj: new Date("2026-06-21"),
    time: "14:30 à 16:30",
    image: "/event/cuisine.jpeg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.VOLONTARIAT,
    type: EVENT_TYPES.MARAUDE,
    eventLink: ROUTES.CONTACT,
  }),

  ...generateEventsFromDates(RECURRING_EVENT_TEMPLATES.MARAUDE, [
    new Date("2025-09-28"),
    new Date("2025-10-26"),
    new Date("2026-01-25"),
    new Date("2026-02-22"),
    new Date("2026-03-22"),
    new Date("2026-05-31"),
    new Date("2026-06-21"),
  ]),

  createEvent({
    title: "Colis de Noël pour les enfants de 4 à 12 ans",
    dateObj: new Date("2025-12-06"),
    time: "17:00",
    image: "/event/journeevolontariat.jpg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.VOLONTARIAT,
    type: EVENT_TYPES.MARAUDE,
    eventLink:
      "https://www.eventbrite.fr/e/billets-journee-mondiale-du-volontariat-atelier-volontariat-1909364112459",
  }),
  createEvent({
    title: "Exploration vocale et mouvement",
    dateObj: new Date("2026-03-28"),
    time: "10:30",
    image: "/event/atelier_vocal.png",
    price: "Prix libre (atelier découverte)",
    category: EVENT_CATEGORIES.ARTS,
    type: EVENT_TYPES.EXPLORATION_VOCALE,
    eventLink: ROUTES.ARTS.SUBPAGES.EXPLORATION_VOCALE,
  }),
  createEvent({
    title: "Cuisine Paléstinienne",
    dateObj: new Date("2026-03-28"),
    time: "16:00",
    image: "/event/cuisine_palestine.png",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.ATELIER_CUISINE,
    eventLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSc9TNw-42qMCOvtDs0TShxLuzrVlWVvu8ow5ElqpYLVzNVTfg/viewform",
  }),

  createEvent({
    title: "#1 - La Géobiologie, un autre regard sur la terre, l'univers et le vivant",
    dateObj: new Date("2026-04-17"),
    time: "20:00 à 21:30",
    image: "/event/geobiologie.jpg",
    price: "10 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CONFERENCE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-1-la-geobiologie-un-autre-regard-sur-la-terre-lunivers-et-le-vivant-1985455555012",
  }),

  createEvent({
    title: "Concert - 7 siècles de chansons",
    dateObj: new Date("2026-04-18"),
    time: "20:00 à 21:00",
    image: "/event/concert-tim.jpg",
    price: "12 €",
    category: EVENT_CATEGORIES.CAFE_ASSOCIATIF,
    type: EVENT_TYPES.SPECTACLE,
    eventLink:
      "https://www.eventbrite.fr/e/billets-concert-7-siecles-de-chansons-1985678450699",
  }),

  
  createEvent({
    title: "Journée de la Terre Mère #2 - Nettoyons notre cité, ramassage de mégots",
    dateObj: new Date("2026-04-18"),
    time: "14:30 à 16:30",
    image: "/event/terre-merre.jpg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.VOLONTARIAT,
    type: EVENT_TYPES.ZERO_DECHET,
    eventLink:
      "https://www.eventbrite.fr/e/billets-journee-de-la-terre-mere-2-nettoyons-notre-cite-ramassage-de-megots-1985677670365",
  }),

  createEvent({
    title: "Journée de la Terre Mère #3 - Contes et Sagesse de la Terre Sacrée",
    dateObj: new Date("2026-04-18"),
    time: "17:00 à 18:30",
    image: "/event/terre-merre.jpg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.CAFE_ASSOCIATIF,
    type: EVENT_TYPES.SPECTACLE,
    eventLink:
      "https://www.eventbrite.fr/e/billets-journee-de-la-terre-mere-3-contes-et-sagesse-de-la-terre-sacree-1985678279186",
  }),

  createEvent({
    title: "Journée de la Terre Mère #5 - Maraude auprès des sans abris",
    dateObj: new Date("2026-04-19"),
    time: "16:30 à 19:30",
    image: "/event/terre-merre.jpg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.VOLONTARIAT,
    type: EVENT_TYPES.MARAUDE,
    eventLink:
      "https://www.eventbrite.fr/e/billets-journee-de-la-terre-mere-5-maraude-aupres-des-sans-abris-1985679028427",
  }),

  createEvent({
    title: "Colis de Noël pour les enfants de 4 à 12 ans",
    dateObj: new Date("2025-12-18"),
    time: "17:30 à 21:00",
    image: "/event/journeevolontariat.jpg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.VOLONTARIAT,
    type: EVENT_TYPES.MARAUDE,
    eventLink:
      "https://www.eventbrite.fr/e/billets-colis-de-noel-pour-les-plus-demunis-1909344032399?aff=ebdsoporgprofile",
  }),
];

/**
 * SPECIAL PHILOSOPHY EVENTS & WORKSHOPS
 */
const philosophyWorkshops: EventData[] = [
  createEvent({
    title: "Rencontre philo - Socrate, ce rebelle.",
    dateObj: new Date("2025-09-15"),
    time: "19:30 à 22:00",
    image: "/event/atelier-philo.jpg",
    price: "6,52 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.RENCONTRE_PHILO,
    eventLink:
      "https://toulouse.nouvelle-acropole.fr/component/jem/event/3020-rencontre-philo-la-sagesse-de-socrate-c-est-pas-faux",
  }),

  createEvent({
    title: "Café Philo : Dire la vérité, un devoir ou un risque ?",
    dateObj: new Date("2025-09-13"),
    time: "17:00 à 18:30",
    image: "/event/cafe-philo-13-sep.jpg",
    price: "7,58 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CAFE_PHILO,
    eventLink:
      "https://toulouse.nouvelle-acropole.fr/component/jem/event/3022-journee-portes-ouvertes",
  }),

  createEvent({
    title: "Deviens toi-même, une aventure authentique",
    dateObj: new Date("2025-09-22"),
    time: "19:30 à 22:00",
    image: "/event/atelier-philo.jpg",
    price: "6,52 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.ATELIER_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-deviens-toi-meme-une-aventure-authentique-1467522010839?aff=ebdsoporgprofile",
  }),

  createEvent({
    title: "Penser par soi-même, oser la vérité",
    dateObj: new Date("2025-10-06"),
    time: "19:30 à 22:00",
    image: "/event/atelier-philo.jpg",
    price: "6,52 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.ATELIER_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-deviens-toi-meme-une-aventure-authentique-1467522010839?aff=ebdsoporgprofile",
  }),

  createEvent({
    title: "Le courage de PENSER, le devoir d'AGIR.",
    dateObj: new Date("2025-11-05"),
    time: "19:30 à 21:30",
    image: "/event/event0511.jpg",
    price: "6,00 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CONFERENCE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-le-courage-de-penser-le-devoir-dagir-1801650066849",
  }),

  createEvent({
    title: "L'art d'agir dans la philosophie orientale",
    dateObj: new Date("2025-12-10"),
    time: "19:30 à 22:00",
    image: "/event/cours1012.jpg",
    price: "6,00 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.ATELIER_PHILO,
    eventLink: "https://www.eventbrite.fr/e/billets-atelier-de-philosophie-pratique-1976893701277",
  }),

  createEvent({
    title: "La philosophie, une aventure authentique",
    dateObj: new Date("2026-02-04"),
    time: "19:30 à 22:00",
    image: "event/philo_fev.jpg",
    price: "6 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.ATELIER_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-deviens-toi-meme-atelier-de-philosophie-pratique-1979518582367",
  }),

  createEvent({
    title: "Rencontre philo : La Voix du silence",
    dateObj: new Date("2026-01-27"),
    time: "19:30 à 21:30",
    image: "/event/voix_silence.jpg",
    price: "6€, nous contacter",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.RENCONTRE_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-la-voix-du-silence-dans-un-monde-assourdissant-1976552416485",
  }),
];

// November Philosophy Workshop Series
const novemberPhiloWorkshops = generateEventsFromDates(
  customizeTemplate(RECURRING_EVENT_TEMPLATES.ATELIER_PHILO_PAYANT, {
    title: "Atelier philo : Deviens toi-même",
  }),
  [new Date("2025-11-12"), new Date("2025-11-19")]
);

const novemberPhiloWorkshop2 = [
  createEvent({
    title: "Atelier philo : Penser par soi-même",
    dateObj: new Date("2025-11-26"),
    time: "19:30 à 21:30",
    image: "/event/atelier-philo.jpg",
    price: "6,00 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.ATELIER_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-deviens-toi-meme-atelier-de-philosophie-pratique-1785999174609?aff=erelexpmlt",
  }),
];

// February Philosophy Workshops
const februaryPhiloWorkshops = [
  createEvent({
    title: "Penser par soi-même : oser la vérité avec la caverne de Platon",
    dateObj: new Date("2026-02-11"),
    time: "19:30 à 22:00",
    image: "event/philo_fev.jpg",
    price: "6 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.ATELIER_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-deviens-toi-meme-atelier-de-philosophie-pratique-1979518582367",
  }),
  createEvent({
    title: "Etre ou paraître : la vision de l'être humain en orient",
    dateObj: new Date("2026-02-18"),
    time: "19:30 à 22:00",
    image: "event/philo_fev.jpg",
    price: "6 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.ATELIER_PHILO,
    eventLink:
      "https://www.eventbrite.fr/e/billets-deviens-toi-meme-atelier-de-philosophie-pratique-1979518582367",
  }),
  createEvent({
    title: "Atelier de philo pratique : L'art d'agir",
    dateObj: new Date("2026-02-25"),
    time: "19:30 à 22:00",
    image: "event/atelierbg.jpg",
    price: "6 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.ATELIER_PHILO,
    eventLink: "https://www.eventbrite.fr/e/billets-atelier-de-philosophie-pratique-1983563054492",
  }),
];

/**
 * MAY 2026 EVENTS
 */
const mayEvents: EventData[] = [
  createEvent({
    title: "Atelier art vibrant",
    dateObj: new Date("2026-05-02"),
    time: "10:30 à 12:00",
    image: "/event/02mai.jpg",
    price: "20 €",
    category: EVENT_CATEGORIES.ARTS,
    type: EVENT_TYPES.ATELIER_VOCAL,
    eventLink: ROUTES.ARTS.SUBPAGES.EXPLORATION_VOCALE,
  }),

  createEvent({
    title: "Atelier clown socratiques",
    dateObj: new Date("2026-05-02"),
    time: "13:00 à 15:00",
    image: "/event/02mai.jpg",
    price: "25 €",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.CLOWN_SOCRATIQUE,
    eventLink: ROUTES.ACTIVITES.SUBPAGES.CLOWN,
  }),

  createEvent({
    title: "Café Philo : Vivons-nous dans une société de l'indifférence ?",
    dateObj: new Date("2026-05-07"),
    time: "19:30 à 21:15",
    image: "/event/cafe-philo-1er-jeudi.jpg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CAFE_PHILO,
    eventLink: "https://www.eventbrite.fr/e/billets-cafe-philo-vivons-nous-dans-une-societe-de-lindifference-1985383528579",
  }),

  createEvent({
    title: "Rûmi, à l'écoute du coeur - Conférence",
    dateObj: new Date("2026-05-21"),
    time: "20:00",
    image: "/event/rumi.webp",
    price: "8 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CONFERENCE_PHILO,
    eventLink: "https://www.eventbrite.fr/e/billets-rumi-a-lecoute-du-coeur-1987610393191",
  }),

  createEvent({
    title: "Café Philo : La discipline contrainte ou liberté ?",
    dateObj: new Date("2026-06-04"),
    time: "19:30 à 21:15",
    image: "/event/cafe-philo-1er-jeudi.jpg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CAFE_PHILO,
    eventLink: "https://www.eventbrite.fr/e/billets-cafe-philo-la-discipline-contrainte-ou-liberte-1985383961875",
  }),

  // JUIN 2026 - Rencontre & Journée des arts
  createEvent({
    title: "Rencontre avec Gilles Colliard",
    dateObj: new Date("2026-06-19"),
    time: "20:00 à 21:00",
    image: "/event/gilles-colliar.webp",
    price: "10 €",
    category: EVENT_CATEGORIES.CAFE_ASSOCIATIF,
    type: EVENT_TYPES.SPECTACLE,
    eventLink: "https://www.eventbrite.fr/e/billets-rencontre-avec-gilles-colliard-1990119133902",
  }),

  createEvent({
    title: "Journée des arts : Atelier Chant",
    dateObj: new Date("2026-06-20"),
    time: "16:00 à 17:00",
    image: "/event/art-atelier-chant.webp",
    price: "Gratuit",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.CHANT,
    eventLink: "https://www.eventbrite.fr/e/billets-journee-des-arts-la-beaute-a-portee-de-sens-1990792526036",
  }),

  createEvent({
    title: "Journée des arts : Atelier Théâtre d'impro",
    dateObj: new Date("2026-06-20"),
    time: "17:30 à 18:30",
    image: "/event/art-atelier-impro.webp",
    price: "Gratuit",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.THEATRE_IMPRO,
    eventLink: "https://www.eventbrite.fr/e/billets-journee-des-arts-la-beaute-a-portee-de-sens-1990799799792",
  }),

  createEvent({
    title: "Journée des arts : Récital de piano romantique",
    dateObj: new Date("2026-06-20"),
    time: "20:00 à 21:00",
    image: "/event/art-recital.webp",
    price: "10 €",
    category: EVENT_CATEGORIES.CAFE_ASSOCIATIF,
    type: EVENT_TYPES.SPECTACLE,
    eventLink: "https://www.eventbrite.fr/e/billets-journee-des-arts-recital-de-piano-romantique-1990807389493",
  }),
];

/**
 * CAFÉ ASSOCIATIF EVENTS
 */
const cafeEvents: EventData[] = [
  createEvent({
    title: "Scène ouverte",
    dateObj: new Date("2025-06-06"),
    time: "12:00 à 22:00",
    image: "/placeholder.svg?height=80&width=120",
    price: "6,00 €",
    category: EVENT_CATEGORIES.CAFE_ASSOCIATIF,
    type: EVENT_TYPES.SPECTACLE,
    eventLink: "",
  }),

  createEvent({
    title: "Tournoi Echecs Amateur",
    dateObj: new Date("2025-10-30"),
    time: "19:00 à 22:00",
    image: "/event/tournoi-echec.png",
    price: "Gratuit",
    category: EVENT_CATEGORIES.CAFE_ASSOCIATIF,
    type: EVENT_TYPES.SOIREE_JEUX,
    eventLink:
      "https://www.helloasso.com/associations/association-espace-musset/evenements/tournoi-d-echecs-amateurs",
  }),

  createEvent({
    title: "Soirée Impro",
    dateObj: new Date("2025-11-29"),
    time: "20:30 à 21:45",
    image: "/diseuses-amertume.jpeg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.CAFE_ASSOCIATIF,
    type: EVENT_TYPES.SPECTACLE,
    eventLink:
      "https://www.helloasso.com/associations/les-diseuses-de-bonne-amertume/evenements/impact-emoi-a-l-espace-musset-29-11-25",
  }),

  ...generateEventsFromDates(RECURRING_EVENT_TEMPLATES.SOIREE_JEUX, [
    new Date("2025-11-27"),
    new Date("2026-01-29"),
    new Date("2026-02-26"),
    new Date("2026-03-26"),
    new Date("2026-04-23"),
    new Date("2026-05-28"),
    new Date("2026-06-25"),
  ]),
];

/**
 * COMBINE ALL EVENTS
 */
const eventList: EventData[] = [
  ...oneTimeEvents,
  ...atelierChantJanJun,
  ...atelierChantOctNov,
  ...theatreImproMonday,
  ...theatreImproNuit,
  ...qiGongTuesday,
  ...mercrediMontessori,
  ...cafePhiloMonthly,
  ...atelierPhiloMondays,
  ...meditationThursdays,
  ...meditationMidiTuesdays,

  ...clownSocratiqueTuesdays,
  ...ecritureSpontanee,
  ...volunteerEvents,
  ...philosophyWorkshops,
  ...novemberPhiloWorkshops,
  ...novemberPhiloWorkshop2,
  ...februaryPhiloWorkshops,
  ...mayEvents,
  ...cafeEvents,
  ...yogaThursdays,
  ...atelierEcritureFeb,
  ...clownSocratiqueEvents,
  ...devienstoiMemeAtelierPhilo,
  ...atelierPhilosophieMercredi,
  ...etSiOnChantaitSeptDec,
  ...yogaSeptJan,
  ...soireeJeux4eJeudi,
  ...ecriture4eJeudi,
  ...maraude16h,
];

export { eventList };
