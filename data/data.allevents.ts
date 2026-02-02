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
    dateObj: new Date("2026-02-14"),
    time: "19:30 à 22:00",
    image: "conference-philo.jpg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CONFERENCE_PHILO,
    eventLink: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES,
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
];

/**
 * RECURRING EVENTS - WEEKLY
 * Events that happen every week on the same day
 */

// Atelier Chant - Every Wednesday (January & February 2026, except Feb 4)
const atelierChantJanFev = generateEventsFromDates(
  RECURRING_EVENT_TEMPLATES.CHANT_ATELIER,
  [
    new Date("2026-01-07"),
    new Date("2026-01-14"),
    new Date("2026-01-21"),
    new Date("2026-01-28"),
    // Feb 4 removed
    new Date("2026-02-11"),
    new Date("2026-02-18"),
    new Date("2026-02-25"),
  ]
);

// Théâtre d'Improvisation - Every Monday (multiple time slots)
const theatreImproMonday = generateEventsByDayOfWeek(
  RECURRING_EVENT_TEMPLATES.THEATRE_IMPRO_SOIR,
  new Date("2025-09-29"),
  new Date("2026-05-30"),
  1 // Monday
);

// Théâtre d'Improvisation - Evening session
const theatreImproNuit = generateEventsByDayOfWeek(
  RECURRING_EVENT_TEMPLATES.THEATRE_IMPRO_NUIT,
  new Date("2026-01-05"),
  new Date("2026-05-30"),
  1 // Monday
);

// Qi Gong - Every Tuesday
const qiGongTuesday = generateEventsByDayOfWeek(
  RECURRING_EVENT_TEMPLATES.QI_GONG,
  new Date("2025-10-28"),
  new Date("2026-05-30"),
  2 // Tuesday
);

// Mercredi Montessori - Every Wednesday
const mercrediMontessori = generateEventsByDayOfWeek(
  RECURRING_EVENT_TEMPLATES.MERCREDI_MONTESSORI,
  new Date("2025-09-24"),
  new Date("2025-10-29"),
  3 // Wednesday
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

// Yoga - Every Thursday in February 2026
const yogaThursdaysFeb = generateEventsFromDates(
  RECURRING_EVENT_TEMPLATES.YOGA,
  [
    new Date("2026-02-05"),
    new Date("2026-02-12"),
    new Date("2026-02-19"),
    new Date("2026-02-26"),
  ]
);

// Atelier écriture "Libérez votre plume" - February 19, 2026
const atelierEcritureFeb = [
  createEvent({
    title: "Libérez votre plume",
    dateObj: new Date("2026-02-19"),
    time: "19:30 à 21:30",
    image: "/cours/ecriture.jpg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.ECRITURE_SPONTANEE,
    eventLink: ROUTES.ACTIVITES.SUBPAGES.ECRITURE_SPONTANEE,
  }),
];

// Clown Socratique - February 2026
const clownSocratiqueEvents = generateEventsFromDates(RECURRING_EVENT_TEMPLATES.CLOWN_SOCRATIQUE, [
  new Date("2026-02-10"),
  new Date("2026-02-17"),
  new Date("2026-02-24"),
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
    image: "/gallery/gallery-cafe-6.jpeg",
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
  ]),
];

/**
 * COMBINE ALL EVENTS
 */
const eventList: EventData[] = [
  ...oneTimeEvents,
  ...atelierChantJanFev,
  ...atelierChantOctNov,
  ...theatreImproMonday,
  ...theatreImproNuit,
  ...qiGongTuesday,
  ...mercrediMontessori,
  ...cafePhiloMonthly,
  ...atelierPhiloMondays,
  ...meditationThursdays,
  ...meditationMidiTuesdays,
  ...clownSocratiqueEvents,
  ...clownSocratiqueTuesdays,
  ...ecritureSpontanee,
  ...volunteerEvents,
  ...philosophyWorkshops,
  ...novemberPhiloWorkshops,
  ...novemberPhiloWorkshop2,
  ...februaryPhiloWorkshops,
  ...cafeEvents,
  ...yogaThursdaysFeb,
  ...atelierEcritureFeb,
];

export { eventList };
