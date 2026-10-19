import {
  HORAIRES_LOCATION,
  PRIX_HORAIRE_MIN,
  type FaqItem,
  type Tarif,
  formatTarif,
  salleById,
} from "./salles.data";
import { ROUTES } from "./route";

export type Usage = {
  slug: string;
  /** Libellé court, pour les cartes et liens */
  label: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  image: string;
  imageAlt: string;
  /** Configurations recommandées : salle + nom d'une de ses dispositions */
  configurations: { salleId: string; disposition: string }[];
  atouts: string[];
  /** Pages du site illustrant cet usage (activités déjà accueillies) */
  references?: { label: string; href: string }[];
  faq: FaqItem[];
};

const muses = salleById("salle-des-muses")!;
const cafe = salleById("cafe-doc")!;

/** Tarif formaté d'une salle, ex. tarif("cafe-doc", "Horaire") → "30 €/h" */
const tarif = (
  salleId: string,
  label: Tarif["label"],
  periode: "semaine" | "weekend" = "semaine"
) => {
  const t = salleById(salleId)!.tarifs.find((t) => t.label === label)!;
  return formatTarif(t, t[periode]);
};

export const USAGES: Usage[] = [
  {
    slug: "salle-de-formation-toulouse",
    label: "Formation & séminaire",
    title: "Salle de formation et de séminaire à Toulouse (Minimes)",
    description: `Louez une salle de formation à Toulouse Minimes : jusqu'à 24 participants en U ou en classe, paperboard, WiFi, vidéoprojecteur sur demande, pauses café sur place. Journée dès ${tarif("cafe-doc", "Journée")}.`,
    h1: "Une salle de formation et de séminaire à Toulouse",
    intro: [
      `Vous organisez une formation, un séminaire ou une journée de travail à Toulouse ? La Salle des Muses (${muses.surface} m²) accueille de 10 à 24 participants en U ou en classe, dans un cadre lumineux et calme, avec vue sur un jardin privatif.`,
      "Paperboard, WiFi, climatisation et lumière du jour sont inclus ; un vidéoprojecteur est disponible sur demande. Une personne dédiée vous accompagne pour préparer la salle selon votre programme.",
      `Pour les pauses, ${cafe.nameWithArticle}, café associatif sur place, peut proposer café, thé et tapas faits maison sur demande. Accès direct par le métro ligne A, station Minimes – Claude Nougaro.`,
    ],
    image: "/salle-des-muses-2.jpg",
    imageAlt: "Salle des Muses disposée en salle de classe pour une formation",
    configurations: [
      { salleId: "salle-des-muses", disposition: "En U" },
      { salleId: "salle-des-muses", disposition: "Salle de classe" },
      { salleId: "salle-des-muses", disposition: "En épis" },
      { salleId: "cafe-doc", disposition: "Salle de classe" },
    ],
    atouts: [
      "Paperboard et feutres",
      "WiFi",
      "Vidéoprojecteur sur demande",
      "Climatisation",
      "Lumière du jour et vue sur jardin",
      "Verres et carafes d'eau",
      "Pauses café et tapas sur demande",
      "Accès PMR",
    ],
    references: [
      {
        label: "Ateliers hebdomadaires de philosophie",
        href: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS,
      },
      {
        label: "Ateliers d'écriture spontanée",
        href: ROUTES.ACTIVITES.SUBPAGES.ECRITURE_SPONTANEE,
      },
    ],
    faq: [
      {
        question: "Combien de stagiaires peut accueillir la salle de formation ?",
        answer: `La Salle des Muses accueille 10 à 24 personnes en U, 12 à 24 en salle de classe et 12 à 21 en épis. Pour un petit groupe, le Café d'Oc reçoit 12 personnes en classe.`,
      },
      {
        question: "Combien coûte une journée de formation ?",
        answer: `En semaine, la Salle des Muses est à ${tarif("salle-des-muses", "Journée")} la journée et ${tarif("salle-des-muses", "1/2 Journée")} la demi-journée ; le Café d'Oc à ${tarif("cafe-doc", "Journée")} la journée et ${tarif("cafe-doc", "1/2 Journée")} la demi-journée. Tarifs week-end et devis sur demande.`,
      },
      {
        question: "Un vidéoprojecteur est-il disponible ?",
        answer:
          "Oui, un vidéoprojecteur peut être mis à disposition sur demande, en option. Le paperboard, les feutres et le WiFi sont inclus.",
      },
      {
        question: "Peut-on organiser les pauses et le déjeuner sur place ?",
        answer:
          "Oui. Le Café d'Oc, café associatif de l'Espace Musset, peut proposer café, thé et tapas faits maison sur demande, et une restauration peut être organisée pour votre groupe.",
      },
    ],
  },

  {
    slug: "salle-de-reunion-toulouse",
    label: "Réunion",
    title: "Salle de réunion à louer à Toulouse (Minimes)",
    description: `Louez une salle de réunion à l'heure à Toulouse Minimes, métro ligne A : de 12 à 24 personnes, WiFi, paperboard, café et thé sur demande. Dès ${PRIX_HORAIRE_MIN} €/h en semaine.`,
    h1: "Une salle de réunion à louer à Toulouse",
    intro: [
      `Pour une réunion d'équipe, un comité, un bureau d'association ou un rendez-vous client, l'Espace Musset propose deux salles à louer à l'heure, à la demi-journée ou à la journée, au cœur du quartier des Minimes.`,
      `${cafe.name} réunit jusqu'à 12 personnes autour d'une grande table, dans une ambiance conviviale, avec café et thé sur demande. La Salle des Muses accueille 10 à 24 personnes en U, au calme, avec paperboard et climatisation.`,
      "La station de métro Minimes – Claude Nougaro (ligne A) est à quelques minutes à pied, et un parking est disponible à proximité.",
    ],
    image: "/mise-a-disposition/cafe_U.jpeg",
    imageAlt: "Le Café d'Oc disposé en table de réunion pour 12 personnes",
    configurations: [
      { salleId: "cafe-doc", disposition: "En bloc" },
      { salleId: "salle-des-muses", disposition: "En U" },
    ],
    atouts: [
      `Location à l'heure, dès ${PRIX_HORAIRE_MIN} €/h`,
      "WiFi",
      "Paperboard et feutres (Salle des Muses)",
      "Café et thé sur demande",
      "Cadre calme",
      "Métro ligne A à proximité",
      "Accès PMR",
    ],
    faq: [
      {
        question: "Peut-on louer une salle de réunion à l'heure ?",
        answer: `Oui. En semaine, le Café d'Oc est à ${tarif("cafe-doc", "Horaire")} et la Salle des Muses à ${tarif("salle-des-muses", "Horaire")}. Le week-end : ${tarif("cafe-doc", "Horaire", "weekend")} et ${tarif("salle-des-muses", "Horaire", "weekend")}.`,
      },
      {
        question: "Pour combien de personnes ?",
        answer:
          "Le Café d'Oc accueille 12 personnes autour d'une table. La Salle des Muses accueille 10 à 24 personnes en U, et jusqu'à 50 en configuration conférence.",
      },
      {
        question: "Peut-on réserver une salle de réunion en soirée ou le week-end ?",
        answer: HORAIRES_LOCATION,
      },
    ],
  },

  {
    slug: "salle-de-yoga-toulouse",
    label: "Yoga & bien-être",
    title: "Salle de yoga, méditation et bien-être à louer à Toulouse",
    description: `Louez une salle de yoga à Toulouse Minimes : 42 m² au calme, plancher en chêne, vue sur jardin, tapis de yoga et coussins de méditation fournis, climatisation. Dès ${tarif("salle-des-muses", "Horaire")}.`,
    h1: "Une salle de yoga et de bien-être à Toulouse",
    intro: [
      "Vous enseignez le yoga, la méditation, le qi gong, la sophrologie ou une pratique corporelle ? La Salle des Muses offre 42 m² au calme, avec un plancher en chêne, de la lumière du jour et une vue sur un jardin privatif.",
      "Tapis de yoga et coussins de méditation sont fournis. L'éclairage à variateurs et tonalités permet de créer l'ambiance de votre séance, et la climatisation réversible assure le confort en toute saison. La salle peut être laissée entièrement vide.",
      "Plusieurs intervenants y donnent déjà leurs cours chaque semaine : yoga, qi gong, méditation guidée, yoga du rire.",
    ],
    image: "/cours/meditation.jpg",
    imageAlt: "Séance de méditation sur un tapis de yoga",
    configurations: [{ salleId: "salle-des-muses", disposition: "Espace vide" }],
    atouts: [
      "Plancher en chêne",
      "Tapis de yoga et coussins de méditation fournis",
      "Éclairage à variateurs et tonalités",
      "Climatisation réversible",
      "Lumière du jour et vue sur jardin",
      "Calme",
      "Piano",
      "Accès PMR",
    ],
    references: [
      { label: "Cours de yoga", href: ROUTES.ACTIVITES.SUBPAGES.YOGA },
      { label: "Qi gong", href: ROUTES.ARTS.SUBPAGES.QI_GONG },
      { label: "Qi gong énergétique", href: ROUTES.ARTS.SUBPAGES.QI_GONG_ENERGETIQUE },
      { label: "Méditation guidée", href: ROUTES.ARTS.SUBPAGES.MEDITATION },
      { label: "Yoga du rire", href: ROUTES.ARTS.SUBPAGES.YOGA_DU_RIRE },
    ],
    faq: [
      {
        question: "Les tapis de yoga sont-ils fournis ?",
        answer:
          "Oui, des tapis de yoga et des coussins de méditation sont à disposition dans la Salle des Muses.",
      },
      {
        question: "Peut-on louer la salle pour des cours réguliers ?",
        answer:
          "Oui, plusieurs intervenants y donnent déjà leurs cours chaque semaine (yoga, qi gong, méditation, yoga du rire). Contactez-nous pour convenir d'un créneau régulier.",
      },
      {
        question: "Combien coûte la location pour un cours de yoga ?",
        answer: `En semaine, la Salle des Muses est à ${tarif("salle-des-muses", "Horaire")}, ${tarif("salle-des-muses", "1/2 Journée")} la demi-journée et ${tarif("salle-des-muses", "Journée")} la journée (stage, retraite urbaine). Tarifs week-end et devis sur demande.`,
      },
      {
        question: "Quels créneaux sont disponibles ?",
        answer: HORAIRES_LOCATION,
      },
    ],
  },

  {
    slug: "salle-de-conference-toulouse",
    label: "Conférence & événement",
    title: "Salle de conférence et d'événement à Toulouse (Minimes)",
    description: `Louez une salle de conférence à Toulouse Minimes : jusqu'à 50 personnes, micro, vidéoprojecteur sur demande, piano, bar et tapas maison sur place. Pour conférences, concerts, spectacles et soirées.`,
    h1: "Une salle de conférence et d'événement à Toulouse",
    intro: [
      "Conférence, présentation, concert, lecture, spectacle ou soirée associative : la Salle des Muses accueille jusqu'à 50 personnes en configuration conférence, avec micro et vidéoprojecteur sur demande. Un piano est présent dans la salle.",
      "Le Café d'Oc reçoit jusqu'à 25 personnes en conférence, et son bar permet de prolonger l'événement autour d'un verre : café, thé, bières et tapas faits maison sur demande.",
      "L'Espace Musset accueille lui-même régulièrement des conférences de philosophie, des ciné-philo, des concerts et des spectacles.",
    ],
    image: "/gallery/gallery-cafe-3.jpeg",
    imageAlt: "Concert de musique ancienne devant le public dans la Salle des Muses",
    configurations: [
      { salleId: "salle-des-muses", disposition: "Conférence" },
      { salleId: "cafe-doc", disposition: "Conférence" },
      { salleId: "cafe-doc", disposition: "Bar" },
    ],
    atouts: [
      "Jusqu'à 50 personnes",
      "Micro",
      "Vidéoprojecteur sur demande",
      "Piano",
      "Éclairage modulable",
      "Bar, bières et tapas maison sur demande",
      "Accès PMR",
    ],
    references: [
      { label: "Conférences de philosophie", href: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES },
      { label: "Ciné philo", href: ROUTES.PHILOSOPHIE.SUBPAGES.CINE },
      { label: "Théâtre", href: ROUTES.ACTIVITES.SUBPAGES.THEATRE },
    ],
    faq: [
      {
        question: "Combien de personnes peut accueillir la salle de conférence ?",
        answer:
          "La Salle des Muses accueille jusqu'à 50 personnes en configuration conférence, le Café d'Oc jusqu'à 25 personnes.",
      },
      {
        question: "Peut-on organiser un concert ou un spectacle ?",
        answer:
          "Oui. La Salle des Muses accueille régulièrement concerts, récitals et spectacles ; un piano est présent dans la salle et l'éclairage est modulable.",
      },
      {
        question: "Peut-on prévoir un apéritif ou un cocktail après l'événement ?",
        answer:
          "Oui. Au Café d'Oc, café, thé, bières et tapas faits maison peuvent être proposés sur demande.",
      },
      {
        question: "Quel est le tarif pour une soirée ou une journée ?",
        answer: `En semaine, la Salle des Muses est à ${tarif("salle-des-muses", "Horaire")}, ${tarif("salle-des-muses", "1/2 Journée")} la demi-journée et ${tarif("salle-des-muses", "Journée")} la journée. Le week-end, les tarifs sont légèrement plus élevés. Devis personnalisé sur demande.`,
      },
    ],
  },
];

export const usagePath = (usage: Usage) => `${ROUTES.MISE_A_DISPOSITION}/${usage.slug}`;

export const usageBySlug = (slug: string) => USAGES.find((u) => u.slug === slug);

/** Usages pour lesquels une salle est recommandée */
export const usagesForSalle = (salleId: string) =>
  USAGES.filter((u) => u.configurations.some((c) => c.salleId === salleId));
