import {
  Accessibility,
  AirVentIcon,
  Armchair,
  Bird,
  Brackets,
  Brush,
  Coffee,
  CookingPot,
  Drama,
  GlassWater,
  Lightbulb,
  type LucideIcon,
  MicIcon,
  Minus,
  MoveDiagonal2,
  PencilRuler,
  PianoIcon,
  Projector,
  Scroll,
  Snowflake,
  SpeakerIcon,
  SquareDashed,
  SquareMenu,
  Sun,
  Theater,
  TreeDeciduous,
  Wifi,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { ROUTES } from "./route";

type Item = { title: string; Icon: LucideIcon };

export type Tarif = {
  label: "Horaire" | "1/2 Journée" | "Journée";
  semaine: number;
  weekend: number;
};

export type Disposition = { name: string; capacity: string; Icon: LucideIcon };

export type Photo = { src: string; config: string; capacity: string; Icon: LucideIcon };

export type Salle = {
  id: string;
  name: string;
  /** Nom précédé de son article, pour les phrases ("la Salle des Muses") */
  nameWithArticle: string;
  surface: number;
  maxCapacity: number;
  capacity: string;
  description: string;
  paragraphs: string[];
  image: string;
  photos: Photo[];
  features: Item[];
  activity: Item[];
  tarifs: Tarif[];
  contactForPrice: boolean;
  dispositions: Disposition[];
  paidOptions: Item[];
};

export const SALLES: Salle[] = [
  {
    id: "salle-des-muses",
    name: "Salle des Muses",
    nameWithArticle: "la Salle des Muses",
    surface: 42,
    maxCapacity: 50,
    capacity: "42m² - 24-50 personnes selon disposition",
    description:
      "Salle de 42 m² lumineuse et calme avec vue sur un jardin privatif, plancher en chêne, éclairage modulable et climatisation réversible. Idéale pour formations, réunions, séminaires, ateliers, yoga ou conférences.",
    paragraphs: [
      "La Salle des Muses est une salle de 42 m² lumineuse et calme, offrant une vue agréable sur un jardin privatif.",
      "Pensée pour être chaleureuse, elle dispose d'un plancher en chêne et d'un environnement apaisant, propice au travail et aux échanges. L'éclairage modulable et la climatisation réversible garantissent un confort optimal en toute saison.",
      "Idéale pour formations, réunions, ateliers ou tout autre événement professionnel ou associatif. Une personne dédiée est disponible pour vous accompagner selon vos besoins.",
    ],
    image: "/salle-des-muses.jpg",
    photos: [
      { src: "/salle-des-muses-3.jpg", config: "en U", capacity: "24 personnes", Icon: Brackets },
      {
        src: "/salle-des-muses.jpg",
        config: "Conférence",
        capacity: "50 personnes",
        Icon: Theater,
      },
      {
        src: "/salle-des-muses-2.jpg",
        config: "Classe",
        capacity: "24 personnes",
        Icon: SquareMenu,
      },
    ],
    features: [
      { title: "WiFi", Icon: Wifi },
      { title: "Toilettes PMR", Icon: Accessibility },
      { title: "Éclairage avec variateurs et tonalités", Icon: Lightbulb },
      { title: "Climatisation", Icon: Snowflake },
      { title: "Lumière du jour", Icon: Sun },
      { title: "Micro", Icon: MicIcon },
      { title: "Plancher chêne", Icon: TreeDeciduous },
      { title: "Calme", Icon: Bird },
      { title: "Table et chaises", Icon: Armchair },
      { title: "Paperboard et feutres", Icon: Scroll },
      { title: "Verres et carafes d'eau", Icon: GlassWater },
      { title: "Tapis de Yoga et coussins de méditation", Icon: Minus },
    ],
    activity: [
      { title: "Séminaire", Icon: PencilRuler },
      { title: "Yoga", Icon: AirVentIcon },
      { title: "Conférences", Icon: SpeakerIcon },
      { title: "Piano", Icon: PianoIcon },
      { title: "Art", Icon: Brush },
      { title: "Evènements", Icon: Drama },
    ],
    tarifs: [
      { label: "1/2 Journée", semaine: 120, weekend: 140 },
      { label: "Journée", semaine: 200, weekend: 240 },
      { label: "Horaire", semaine: 50, weekend: 60 },
    ],
    contactForPrice: false,
    dispositions: [
      { name: "Espace vide", capacity: "Configuration libre", Icon: SquareDashed },
      { name: "Conférence", capacity: "Jusqu'à 50 personnes", Icon: Theater },
      { name: "En U", capacity: "10 à 24 personnes", Icon: Brackets },
      { name: "Salle de classe", capacity: "12 à 24 personnes", Icon: SquareMenu },
      { name: "En épis", capacity: "12 à 21 personnes", Icon: MoveDiagonal2 },
    ],
    paidOptions: [{ title: "Vidéoprojecteur (sur demande)", Icon: Projector }],
  },

  {
    id: "cafe-doc",
    name: "Le Café d'Oc",
    nameWithArticle: "le Café d'Oc",
    surface: 28,
    maxCapacity: 25,
    capacity: "28m² - 25 personnes en mode conférence",
    description:
      "Espace convivial de 28 m² (bar, 18 couverts) pouvant accueillir jusqu'à 25 personnes en conférence. Idéal pour rencontres, ateliers, réunions et événements professionnels ou associatifs.",
    paragraphs: [
      "Le Café d'Oc est le café associatif de l'Espace Musset : un espace de 28 m² chaleureux et lumineux, organisé autour de son bar.",
      "Il accueille jusqu'à 25 personnes en conférence, 12 personnes en classe ou autour d'une grande table, et 18 couverts côté bar.",
      "Idéal pour vos rencontres, ateliers, réunions ou événements professionnels ou associatifs, dans un cadre convivial. Café, thé, bières et tapas faits maison peuvent être proposés sur demande.",
    ],
    image: "/mise-a-disposition/cafe_conf.jpeg",
    photos: [
      {
        src: "/mise-a-disposition/cafe_oc.jpeg",
        config: "Bar",
        capacity: "18 couverts",
        Icon: Coffee,
      },
      {
        src: "/mise-a-disposition/cafe_classe.jpeg",
        config: "Classe",
        capacity: "12 personnes",
        Icon: SquareMenu,
      },
      {
        src: "/mise-a-disposition/cafe_conf.jpeg",
        config: "Conférence",
        capacity: "25 personnes",
        Icon: Theater,
      },
      {
        src: "/mise-a-disposition/cafe_U.jpeg",
        config: "En Bloc",
        capacity: "12 personnes",
        Icon: Brackets,
      },
      {
        src: "/mise-a-disposition/cafe_U2.jpeg",
        config: "En Bloc",
        capacity: "12 personnes",
        Icon: Brackets,
      },
    ],
    features: [
      { title: "WiFi", Icon: Wifi },
      { title: "Toilettes PMR", Icon: Accessibility },
      { title: "Lumière du jour", Icon: Sun },
      { title: "Calme", Icon: Bird },
    ],
    activity: [
      { title: "Conférences", Icon: SpeakerIcon },
      { title: "Ateliers", Icon: PencilRuler },
      { title: "Evènements", Icon: Drama },
      { title: "Art", Icon: Brush },
      { title: "Séminaire", Icon: PencilRuler },
    ],
    tarifs: [
      { label: "Journée", semaine: 100, weekend: 120 },
      { label: "1/2 Journée", semaine: 60, weekend: 75 },
      { label: "Horaire", semaine: 30, weekend: 40 },
    ],
    contactForPrice: false,
    dispositions: [
      { name: "Conférence", capacity: "Jusqu'à 25 personnes", Icon: Theater },
      { name: "Bar", capacity: "18 couverts", Icon: Coffee },
      { name: "Salle de classe", capacity: "12 personnes", Icon: SquareMenu },
      { name: "En bloc", capacity: "12 personnes", Icon: Brackets },
    ],
    paidOptions: [
      { title: "Café, Thé (sur demande)", Icon: Coffee },
      { title: "Bières (sur demande)", Icon: GlassWater },
      { title: "Tapas fait maison (sur demande)", Icon: CookingPot },
    ],
  },
];

export const salleById = (id: string) => SALLES.find((s) => s.id === id);

export const sallePath = (salle: Salle) => `${ROUTES.MISE_A_DISPOSITION}/${salle.id}`;

export const formatTarif = (t: Tarif, prix: number) =>
  t.label === "Horaire" ? `${prix} €/h` : `${prix} €`;

export const prixHoraire = (salle: Salle) =>
  salle.tarifs.find((t) => t.label === "Horaire")?.semaine ?? 0;

const tarifsTexte = (salle: Salle) =>
  salle.tarifs
    .map(
      (t) =>
        `${t.label.toLowerCase()} ${formatTarif(t, t.semaine)} en semaine, ${formatTarif(t, t.weekend)} le week-end`
    )
    .join(" ; ");

export const PRIX_HORAIRE_MIN = Math.min(...SALLES.map(prixHoraire));

export const HORAIRES_LOCATION =
  "Les horaires sont flexibles : nous nous adaptons à votre projet, en semaine comme le week-end. Contactez-nous pour connaître les disponibilités.";

export type FaqItem = { question: string; answer: string };

/**
 * Questions fréquentes sur la location de salles.
 * Affichées sur la page et exposées en FAQPage (JSON-LD) : les réponses sont générées
 * depuis les données ci-dessus pour rester à jour.
 */
export const SALLES_FAQ: FaqItem[] = [
  {
    question: "Quelles salles peut-on louer à l'Espace Musset à Toulouse ?",
    answer: `L'Espace Musset propose deux espaces à la location : ${SALLES.map(
      (s) => `${s.nameWithArticle} (${s.surface} m², jusqu'à ${s.maxCapacity} personnes)`
    ).join(
      " et "
    )}. Ils accueillent réunions, formations, séminaires, ateliers, conférences et événements associatifs ou professionnels.`,
  },
  {
    question: "Combien coûte la location d'une salle ?",
    answer: `${SALLES.map((s) => `${s.name} : ${tarifsTexte(s)}.`).join(" ")} Un devis personnalisé est établi selon votre projet.`,
  },
  {
    question: "Quels sont les horaires de location ?",
    answer: HORAIRES_LOCATION,
  },
  {
    question: "Où se trouve l'Espace Musset et comment y accéder ?",
    answer: `L'Espace Musset est situé au ${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}, dans le quartier des ${SITE.address.district}. Accès par le ${SITE.transport}, à quelques minutes à pied. Parking disponible à proximité.`,
  },
  {
    question: "Quels équipements sont inclus dans la Salle des Muses ?",
    answer: `${SALLES[0].features.map((f) => f.title).join(", ")}. Vidéoprojecteur disponible en option sur demande.`,
  },
  {
    question: "Les salles sont-elles accessibles aux personnes à mobilité réduite ?",
    answer: "Oui, les espaces sont accessibles PMR et équipés de toilettes PMR.",
  },
  {
    question: "Combien de personnes peut accueillir la Salle des Muses ?",
    answer: `Selon la disposition : ${SALLES[0].dispositions
      .filter((d) => d.name !== "Espace vide")
      .map((d) => `${d.name} : ${d.capacity.toLowerCase()}`)
      .join(" ; ")}. La salle peut aussi être laissée vide (yoga, danse, atelier).`,
  },
  {
    question: "Peut-on prévoir du café ou une restauration ?",
    answer:
      "Oui. Au Café d'Oc, café, thé, bières et tapas faits maison peuvent être proposés sur demande. Une restauration peut être organisée sur demande pour vos événements.",
  },
  {
    question: "Comment réserver une salle ?",
    answer: `Contactez-nous par téléphone au ${SITE.phoneDisplay} (Anne-Marie) ou par e-mail à ${SITE.email} en décrivant votre projet. Nous vous proposons une visite et un devis personnalisé, puis la salle est préparée selon vos souhaits.`,
  },
];
