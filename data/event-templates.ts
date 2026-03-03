import { EventTemplate } from "./event-generators";
import { EVENT_CATEGORIES, EVENT_TYPES } from "./event-constants";
import { ROUTES } from "./route";

/**
 * Pre-configured event templates for recurring events
 * Use these templates with the generator functions for quick event creation
 */

export const RECURRING_EVENT_TEMPLATES = {
  // Arts & Body Activities
  CHANT_ATELIER: {
    title: "Atelier chant",
    time: "18:15 à 19:15",
    image: "/cours/chant.jpg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.CHANT,
    eventContact: "Béatrice, au 06 19 87 06 90",
    eventLink: ROUTES.ACTIVITES.SUBPAGES.CHANT,
  } as EventTemplate,

  QI_GONG: {
    title: "Qi Gong",
    time: "18:30 à 19:30",
    image: "/cours/qi-gong.png",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.ARTS,
    type: EVENT_TYPES.QI_GONG,
    eventLink: ROUTES.ARTS.SUBPAGES.QI_GONG,
  } as EventTemplate,

  MEDITATION: {
    title: "Atelier Méditation",
    time: "18:00 à 18:45",
    image: "/cours/meditation.jpg",
    price: "",
    category: EVENT_CATEGORIES.ARTS,
    type: EVENT_TYPES.MEDITATION,
    eventContact: "Anne-Marie, au 06 21 79 97 50",
  } as EventTemplate,

  MEDITATION_MIDI: {
    title: "Méditation",
    time: "13:00 à 13:45",
    image: "/espace-musset.jpeg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.ARTS,
    type: EVENT_TYPES.MEDITATION,
    eventLink: ROUTES.ARTS.SUBPAGES.MEDITATION,
  } as EventTemplate,

  CLOWN_SOCRATIQUE: {
    title: "Atelier Clown Socratique",
    time: "19:00 à 21:00",
    image: "/cours/clown.jpg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.CLOWN_SOCRATIQUE,
    eventLink: ROUTES.ACTIVITES.SUBPAGES.CLOWN,
  } as EventTemplate,

  YOGA_DU_RIRE: {
    title: "Yoga du Rire",
    time: "10:00 à 11:30",
    image: "/cours/meditation.jpg",
    price: "",
    category: EVENT_CATEGORIES.ARTS,
    type: EVENT_TYPES.YOGA_DU_RIRE,
    eventContact: "Béatrice, au 06 19 87 06 90",
  } as EventTemplate,

  YOGA: {
    title: "Yoga",
    time: "12:15 à 13:15",
    image: "/cours/yoga.jpg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.YOGA,
    eventContact: "Medha, au 06 52 62 99 49",
    eventLink: ROUTES.ACTIVITES.SUBPAGES.YOGA,
  } as EventTemplate,

  // Activities
  THEATRE_IMPRO_SOIR: {
    title: "Théatre d'improvisation",
    time: "18:30 à 20:30",
    image: "/diseuses_profil.webp",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.THEATRE_IMPRO,
    eventLink: ROUTES.ACTIVITES.SUBPAGES.THEATRE,
  } as EventTemplate,

  THEATRE_IMPRO_NUIT: {
    title: "Théatre d'improvisation",
    time: "20:45 à 22h45",
    image: "/espace-musset.jpeg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.THEATRE_IMPRO,
    eventLink: ROUTES.ACTIVITES.SUBPAGES.THEATRE,
  } as EventTemplate,

  MERCREDI_MONTESSORI: {
    title: "Mercredi Montessori",
    time: "16:00 à 18:00",
    image: "/espace-musset.jpeg",
    price: "Nous contacter",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.MERCREDI_MONTESSORI,
    eventContact: "Claire, au 06 71 35 31 83",
  } as EventTemplate,

  ECRITURE_SPONTANEE: {
    title: "Atelier Ecriture spontanée",
    time: "19:30 à 21:00",
    image: "/cours/ecriture.jpeg",
    price: "10 €",
    category: EVENT_CATEGORIES.ACTIVITES,
    type: EVENT_TYPES.ECRITURE_SPONTANEE,
    eventContact: "Béatrice, au 06 19 87 06 90",
  } as EventTemplate,

  // Philosophy Activities
  CAFE_PHILO_PREMIER_JEUDI: {
    title: "Café Philo",
    time: "19:30 à 21:15",
    image: "/event/cafe-philo-1er-jeudi.jpg",
    price: "7,58 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CAFE_PHILO,
  } as EventTemplate,

  ATELIER_PHILO: {
    title: "Atelier philosophie",
    time: "19:30 à 22:00",
    image: "/event/atelier-philo.jpg",
    price: "-",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.ATELIER_PHILO,
    eventContact: "Benjamin, au 06 30 15 46 48",
  } as EventTemplate,

  ATELIER_PHILO_PAYANT: {
    title: "Atelier philo",
    time: "19:30 à 21:30",
    image: "/event/atelier-philo.jpg",
    price: "6,00 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.ATELIER_PHILO,
  } as EventTemplate,

  RENCONTRE_PHILO: {
    title: "Rencontre philo",
    time: "19:30 à 22:00",
    image: "/event/atelier-philo.jpg",
    price: "6,52 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.RENCONTRE_PHILO,
  } as EventTemplate,

  CONFERENCE_PHILO: {
    title: "Conférence",
    time: "19:30 à 21:30",
    image: "conference-philo.jpg",
    price: "6,00 €",
    category: EVENT_CATEGORIES.PHILOSOPHIE,
    type: EVENT_TYPES.CONFERENCE_PHILO,
    eventLink: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES,
  } as EventTemplate,

  // Volunteer Activities
  MARAUDE: {
    title: "Maraude auprès des sans abris",
    time: "14:30 à 19:30",
    image: "/event/maraude.jpg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.VOLONTARIAT,
    type: EVENT_TYPES.MARAUDE,
    eventLink: ROUTES.CONTACT,
  } as EventTemplate,

  // Café Associatif Events
  SOIREE_JEUX: {
    title: "Soirée Jeux de société",
    time: "19:00 à 22:00",
    image: "/event/jeu-societe.jpg",
    price: "Gratuit",
    category: EVENT_CATEGORIES.CAFE_ASSOCIATIF,
    type: EVENT_TYPES.SOIREE_JEUX,
    eventLink: ROUTES.CONTACT,
  } as EventTemplate,
} as const;

/**
 * Helper function to customize a template
 * @example
 * const myEvent = customizeTemplate(RECURRING_EVENT_TEMPLATES.CHANT_ATELIER, {
 *   time: "19:00 à 20:00",
 *   price: "15 €"
 * })
 */
export function customizeTemplate(
  template: EventTemplate,
  overrides: Partial<EventTemplate>
): EventTemplate {
  return { ...template, ...overrides };
}
