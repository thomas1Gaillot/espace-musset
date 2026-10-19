import { ROUTES } from "./route";
import { USAGES, usagePath } from "./salles-usages.data";
import { PRIX_HORAIRE_MIN, SALLES, prixHoraire, sallePath } from "./salles.data";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  section:
    | "Le lieu"
    | "Location de salles"
    | "Philosophie"
    | "Arts du corps"
    | "Activités et arts"
    | "Écologie"
    | "Infos";
  image?: string;
  priority?: number;
};

/**
 * Titre et description de chaque page publique.
 * Source unique pour les metadata, le sitemap et /llms.txt.
 */
export const PAGES = {
  ACCUEIL: {
    path: ROUTES.ACCUEIL,
    title: "Espace Musset – Lieu associatif et location de salles à Toulouse",
    description:
      "Lieu inter-associatif au cœur des Minimes à Toulouse : café associatif, cafés philo, conférences, yoga, qi gong, théâtre, chant, ateliers écologiques et location de salles.",
    section: "Le lieu",
    priority: 1,
  },
  MISE_A_DISPOSITION: {
    path: ROUTES.MISE_A_DISPOSITION,
    title: "Location de salle à Toulouse (Minimes) – Réunion, formation, séminaire",
    description: `Louez une salle à Toulouse Minimes, métro ligne A : Salle des Muses (42 m², jusqu'à 50 personnes) ou Café d'Oc (28 m², 25 personnes). WiFi, climatisation, accès PMR. Dès ${PRIX_HORAIRE_MIN} €/h.`,
    section: "Location de salles",
    image: "/salle-des-muses.jpg",
    priority: 0.9,
  },
  CAFE_ASSOCIATIF: {
    path: ROUTES.CAFE_ASSOCIATIF,
    title: "Le Café d'Oc – Café associatif à Toulouse Minimes",
    description:
      "Le Café d'Oc, café associatif de l'Espace Musset à Toulouse : un lieu de rencontre ouvert à tous, convivial et interculturel, au cœur du quartier des Minimes.",
    section: "Le lieu",
    image: "/cafe-asso.jpeg",
    priority: 0.8,
  },
  CONTACT: {
    path: ROUTES.CONTACT,
    title: "Contact et accès – 52 bis rue Alfred de Musset, Toulouse",
    description:
      "Contacter l'Espace Musset : 52 bis rue Alfred de Musset, 31200 Toulouse, métro A Minimes – Claude Nougaro. Tél. 06 21 79 97 50, contact@espace-musset.com.",
    section: "Le lieu",
    priority: 0.7,
  },

  PHILOSOPHIE: {
    path: ROUTES.PHILOSOPHIE.ROOT,
    title: "Philosophie à Toulouse – Cafés philo, conférences, ciné philo",
    description:
      "Cours hebdomadaires, cafés philo, conférences, ciné philo et rencontres pour explorer les grandes questions de l'existence à l'Espace Musset, Toulouse.",
    section: "Philosophie",
    image: "/event/atelier-philo.jpg",
    priority: 0.8,
  },
  PHILO_ATELIERS: {
    path: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS,
    title: "Ateliers hebdomadaires de philosophie à Toulouse",
    description:
      "Chaque semaine, explorez les grandes questions philosophiques dans un esprit de dialogue et de découverte, à l'Espace Musset (Toulouse Minimes).",
    section: "Philosophie",
  },
  PHILO_CAFES: {
    path: ROUTES.PHILOSOPHIE.SUBPAGES.CAFES,
    title: "Café philo socratique à Toulouse",
    description:
      "Un espace structuré d'échanges collectifs selon la méthode socratique, pour exercer son esprit critique dans un cadre bienveillant et rigoureux. Toulouse Minimes.",
    section: "Philosophie",
    image: "/conference-philo.jpg",
  },
  PHILO_CINE: {
    path: ROUTES.PHILOSOPHIE.SUBPAGES.CINE,
    title: "Ciné philo à Toulouse – Projection et débat",
    description:
      "Le cinéma comme porte d'entrée vers la philosophie : projections suivies de débats pour explorer les grandes questions existentielles, à l'Espace Musset.",
    section: "Philosophie",
    image: "/cine-philo.jpg",
  },
  PHILO_CONFERENCES: {
    path: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES,
    title: "Conférences de philosophie à Toulouse",
    description:
      "Conférences dont l'angle d'approche est la philosophie : mythes, grands auteurs, questions de société. À l'Espace Musset, Toulouse Minimes.",
    section: "Philosophie",
    image: "/conference-philo.jpg",
  },
  PHILO_RENCONTRES: {
    path: ROUTES.PHILOSOPHIE.SUBPAGES.RENCONTRES,
    title: "Rencontres philo à Toulouse",
    description:
      "Des moments d'échange collectif centrés sur des questionnements philosophiques, ouverts à tous, à l'Espace Musset (Toulouse Minimes).",
    section: "Philosophie",
    image: "/rencontre-philo.jpeg",
  },

  ARTS: {
    path: ROUTES.ARTS.ROOT,
    title: "Arts du corps à Toulouse – Qi gong, méditation, yoga du rire",
    description:
      "Qi gong, méditation, yoga du rire, exploration vocale : reconnectez avec votre corps et cultivez votre bien-être à l'Espace Musset, Toulouse Minimes.",
    section: "Arts du corps",
  },
  ARTS_EXPLORATION_VOCALE: {
    path: ROUTES.ARTS.SUBPAGES.EXPLORATION_VOCALE,
    title: "Exploration vocale et mouvement à Toulouse",
    description:
      "À l'écoute du sensible : laisser la voix vibrer dans le cœur et dans le corps. Atelier d'exploration vocale et mouvement à l'Espace Musset, Toulouse.",
    section: "Arts du corps",
  },
  ARTS_MEDITATION: {
    path: ROUTES.ARTS.SUBPAGES.MEDITATION,
    title: "Méditation guidée à Toulouse (Minimes)",
    description:
      "Séances de méditation guidée par Anne-Marie, sophrologue certifiée RNCP, pour cultiver la sérénité et gérer ses émotions. Espace Musset, Toulouse.",
    section: "Arts du corps",
  },
  ARTS_QI_GONG: {
    path: ROUTES.ARTS.SUBPAGES.QI_GONG,
    title: "Cours de qi gong à Toulouse",
    description:
      "Découvrez le qi gong et les arts taoïstes avec Martial Gontrand à l'Espace Musset, quartier des Minimes à Toulouse.",
    section: "Arts du corps",
  },
  ARTS_QI_GONG_ENERGETIQUE: {
    path: ROUTES.ARTS.SUBPAGES.QI_GONG_ENERGETIQUE,
    title: "Qi gong énergétique à Toulouse",
    description:
      "Harmoniser le corps, apaiser l'esprit et cultiver l'énergie vitale : cours de qi gong énergétique avec Philippe à l'Espace Musset, Toulouse.",
    section: "Arts du corps",
  },
  ARTS_YOGA_DU_RIRE: {
    path: ROUTES.ARTS.SUBPAGES.YOGA_DU_RIRE,
    title: "Yoga du rire à Toulouse",
    description:
      "Retrouvez équilibre, vitalité et bonne humeur grâce au yoga du rire, idéal contre le stress du quotidien. Séances à l'Espace Musset, Toulouse Minimes.",
    section: "Arts du corps",
  },

  ACTIVITES: {
    path: ROUTES.ACTIVITES.ROOT,
    title: "Activités et arts à Toulouse – Chant, théâtre, yoga, clown",
    description:
      "Chant, théâtre d'improvisation, yoga, clown, écriture spontanée, Montessori, psychophonie : les ateliers proposés à l'Espace Musset, Toulouse Minimes.",
    section: "Activités et arts",
  },
  ACTIVITES_CHANT: {
    path: ROUTES.ACTIVITES.SUBPAGES.CHANT,
    title: "Atelier chant à Toulouse",
    description:
      "Venez explorer votre voix et vivre le bonheur de chanter ensemble : atelier chant hebdomadaire à l'Espace Musset, Toulouse Minimes.",
    section: "Activités et arts",
  },
  ACTIVITES_CLOWN: {
    path: ROUTES.ACTIVITES.SUBPAGES.CLOWN,
    title: "Atelier clown socratique à Toulouse",
    description:
      "Et si le clown et le philosophe avaient plus en commun qu'on ne le croit ? Atelier clown socratique à l'Espace Musset, Toulouse.",
    section: "Activités et arts",
  },
  ACTIVITES_ECRITURE: {
    path: ROUTES.ACTIVITES.SUBPAGES.ECRITURE_SPONTANEE,
    title: "Atelier d'écriture spontanée à Toulouse",
    description:
      "Libérez votre plume : l'atelier d'écriture spontanée qui réveille votre créativité, à l'Espace Musset, Toulouse Minimes.",
    section: "Activités et arts",
  },
  ACTIVITES_MONTESSORI: {
    path: ROUTES.ACTIVITES.SUBPAGES.MONTESSORI,
    title: "Atelier Montessori à Toulouse",
    description:
      "Des clés concrètes pour permettre à votre enfant de développer son potentiel : atelier Montessori à l'Espace Musset, Toulouse.",
    section: "Activités et arts",
  },
  ACTIVITES_PSYCHOPHONIE: {
    path: ROUTES.ACTIVITES.SUBPAGES.PSYCHOPHONIE,
    title: "Psychophonie à Toulouse – Voix et corps",
    description:
      "Venez découvrir votre voix et votre corps-instrument : ateliers de psychophonie à l'Espace Musset, Toulouse Minimes.",
    section: "Activités et arts",
  },
  ACTIVITES_THEATRE: {
    path: ROUTES.ACTIVITES.SUBPAGES.THEATRE,
    title: "Théâtre et improvisation à Toulouse",
    description:
      "Explorez votre créativité à travers l'improvisation et le jeu théâtral, dans un cadre ludique et bienveillant, à l'Espace Musset, Toulouse.",
    section: "Activités et arts",
  },
  ACTIVITES_YOGA: {
    path: ROUTES.ACTIVITES.SUBPAGES.YOGA,
    title: "Cours de yoga à Toulouse avec Medha",
    description:
      "Une parenthèse de douceur chaque jeudi : respiration, étirements et relâchement des tensions. Cours de yoga à l'Espace Musset, Toulouse Minimes.",
    section: "Activités et arts",
  },

  ECOLOGIE: {
    path: ROUTES.ECOLOGIE.ROOT,
    title: "Écologie et volontariat à Toulouse",
    description:
      "Maraudes, ateliers écologiques, démarche zéro déchet : des actions concrètes et humaines pour la planète et pour les autres, avec l'Espace Musset.",
    section: "Écologie",
  },
  ECOLOGIE_ATELIERS: {
    path: ROUTES.ECOLOGIE.SUBPAGES.ATELIERS,
    title: "Ateliers écologiques à Toulouse",
    description:
      "Apprenez les gestes concrets du quotidien pour réduire votre impact environnemental et adopter un mode de vie durable. Espace Musset, Toulouse.",
    section: "Écologie",
  },
  ECOLOGIE_MARAUDE: {
    path: ROUTES.ECOLOGIE.SUBPAGES.MARAUDE,
    title: "Maraude solidaire pour les sans-abris à Toulouse",
    description:
      "Un moment de partage, d'écoute et de solidarité pour venir en aide aux plus démunis. Rejoignez la maraude bénévole de l'Espace Musset à Toulouse.",
    section: "Écologie",
  },
  ECOLOGIE_ZERO_DECHET: {
    path: ROUTES.ECOLOGIE.SUBPAGES.ZERO_DECHET,
    title: "Démarche zéro déchet à Toulouse",
    description:
      "Nettoyer l'extérieur pour se purifier intérieurement : une pratique simple, consciente et philosophique du service, avec l'Espace Musset.",
    section: "Écologie",
  },

  MENTIONS_LEGALES: {
    path: "/mentions-legales",
    title: "Mentions légales",
    description: "Mentions légales du site espace-musset.com.",
    section: "Infos",
    priority: 0.2,
  },
  POLITIQUE_CONFIDENTIALITE: {
    path: "/politique-confidentialite",
    title: "Politique de confidentialité",
    description:
      "Politique de confidentialité et gestion des données personnelles du site espace-musset.com.",
    section: "Infos",
    priority: 0.2,
  },
} satisfies Record<string, PageSeo>;

const SALLE_DESCRIPTIONS: Record<string, string> = {
  "salle-des-muses":
    "Salle lumineuse de 42 m² avec vue sur jardin à Toulouse Minimes : jusqu'à 50 personnes en conférence, 24 en U ou en classe. Climatisation, WiFi, micro, accès PMR.",
  "cafe-doc":
    "Louez le Café d'Oc, café associatif de 28 m² à Toulouse Minimes : jusqu'à 25 personnes, bar, café, thé et tapas faits maison sur demande.",
};

/** Une page par salle : /mise-a-disposition/<id> */
export const SALLE_PAGES: PageSeo[] = SALLES.map((salle) => ({
  path: sallePath(salle),
  title: `${salle.name} – Salle de ${salle.surface} m² à louer à Toulouse`,
  description: `${SALLE_DESCRIPTIONS[salle.id] ?? salle.description} Dès ${prixHoraire(salle)} €/h.`,
  section: "Location de salles",
  image: salle.image,
  priority: 0.8,
}));

/** Une page par usage : /mise-a-disposition/<slug> */
export const USAGE_PAGES: PageSeo[] = USAGES.map((usage) => ({
  path: usagePath(usage),
  title: usage.title,
  description: usage.description,
  section: "Location de salles",
  image: usage.image,
  priority: 0.8,
}));

export const PUBLIC_PAGES: PageSeo[] = [...Object.values(PAGES), ...SALLE_PAGES, ...USAGE_PAGES];

export const pageSeoByPath = (path: string) => PUBLIC_PAGES.find((p) => p.path === path);

const PUBLIC_PATHS = new Set(PUBLIC_PAGES.map((p) => p.path));

/** Normalise un lien interne ("cafe-associatif" → "/cafe-associatif") et vérifie que la page existe */
export function existingPath(link: string) {
  const path = (link.startsWith("/") ? link : `/${link}`).split(/[?#]/)[0];
  return PUBLIC_PATHS.has(path) ? path : undefined;
}
