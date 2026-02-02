import { EventType } from "@/types/event-types";
import { ROUTES } from "./route";

/**
 * Event Categories - Reusable category definitions
 */
export const EVENT_CATEGORIES = {
  PHILOSOPHIE: {
    name: "Philosophie",
    href: "/philosophie",
  },
  ARTS: {
    name: "Arts",
    href: ROUTES.ARTS.ROOT,
  },
  ACTIVITES: {
    name: "Activités, Culture, Art",
    href: ROUTES.ACTIVITES.ROOT,
  },
  VOLONTARIAT: {
    name: "Volontariat",
    href: "/ecologie",
  },
  CAFE_ASSOCIATIF: {
    name: "Café associatif",
    href: "cafe-associatif",
  },
} as const;

/**
 * Event Types - Reusable type definitions with linked routes
 */
export const EVENT_TYPES = {
  QI_GONG: {
    name: "Qi Gong" as EventType,
    href: ROUTES.ARTS.SUBPAGES.QI_GONG,
  },
  CHANT: {
    name: "Chant" as EventType,
    href: ROUTES.ACTIVITES.SUBPAGES.CHANT,
  },
  YOGA_DU_RIRE: {
    name: "Yoga du rire" as EventType,
    href: ROUTES.ARTS.SUBPAGES.YOGA_DU_RIRE,
  },
  ECRITURE_SPONTANEE: {
    name: "Ecriture spontanée" as EventType,
    href: ROUTES.ACTIVITES.SUBPAGES.ECRITURE_SPONTANEE,
  },
  MERCREDI_MONTESSORI: {
    name: "Mercredi Montessori" as EventType,
    href: ROUTES.ACTIVITES.SUBPAGES.MONTESSORI,
  },
  THEATRE_IMPRO: {
    name: "Théâtre d'improvisation" as EventType,
    href: ROUTES.ACTIVITES.SUBPAGES.THEATRE,
  },
  CAFE_PHILO: {
    name: "Café philo socratique" as EventType,
    href: ROUTES.PHILOSOPHIE.SUBPAGES.CAFES,
  },
  CINE_PHILO: {
    name: "Ciné philo" as EventType,
    href: ROUTES.PHILOSOPHIE.SUBPAGES.CAFES,
  },
  CONFERENCE_PHILO: {
    name: "Conférence" as EventType,
    href: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES,
  },
  RENCONTRE_PHILO: {
    name: "Rencontre philo" as EventType,
    href: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES,
  },
  SPECTACLE: {
    name: "Spectacle" as EventType,
    href: "cafe-associatif",
  },
  SOIREE_JEUX: {
    name: "Soirée Jeux" as EventType,
    href: "cafe-associatif",
  },
  ATELIER_PHILO: {
    name: "Atelier philo" as EventType,
    href: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS,
  },
  PORTES_OUVERTES: {
    name: "Portes ouvertes" as EventType,
    href: ROUTES.CAFE_ASSOCIATIF,
  },
  ZERO_DECHET: {
    name: "Volontariat" as EventType,
    href: ROUTES.ECOLOGIE.SUBPAGES.ZERO_DECHET,
  },
  MARAUDE: {
    name: "Maraude" as EventType,
    href: ROUTES.ECOLOGIE.SUBPAGES.MARAUDE,
  },
  MEDITATION: {
    name: "Méditation" as EventType,
    href: ROUTES.ARTS.SUBPAGES.MEDITATION,
  },
  CLOWN_SOCRATIQUE: {
    name: "Clown Socratique" as EventType,
    href: ROUTES.ACTIVITES.SUBPAGES.CLOWN,
  },
  YOGA: {
    name: "Yoga" as EventType,
    href: ROUTES.ACTIVITES.SUBPAGES.YOGA,
  },
} as const;

/**
 * Default event location info
 */
export const DEFAULT_LOCATION = {
  location: "Espace Musset",
  venue: "52 Bis Rue Alfred de Musset",
  city: "31200 Toulouse",
} as const;
