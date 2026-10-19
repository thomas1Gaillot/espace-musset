import {
  Accessibility,
  AirVentIcon,
  Armchair,
  Bird,
  Brush,
  Coffee,
  CookingPot,
  Drama,
  GlassWater,
  Lightbulb,
  type LucideIcon,
  MicIcon,
  Minus,
  PencilRuler,
  PianoIcon,
  Projector,
  Scroll,
  Snowflake,
  SpeakerIcon,
  Sun,
  TreeDeciduous,
  Wifi,
} from "lucide-react";
import { SITE } from "@/lib/site";

type Item = { title: string; Icon: LucideIcon };

export type Tarif = {
  label: "Horaire" | "1/2 Journée" | "Journée";
  semaine: number;
  weekend: number;
};

export type Salle = {
  id: string;
  name: string;
  surface: number;
  maxCapacity: number;
  capacity: string;
  description: string;
  image: string;
  features: Item[];
  activity: Item[];
  tarifs: Tarif[];
  contactForPrice: boolean;
  showDispositions: boolean;
  paidOptions: Item[];
};

export const SALLES: Salle[] = [
  {
    id: "salle-des-muses",
    name: "Salle des muses",
    surface: 42,
    maxCapacity: 50,
    capacity: "42m² - 24-50 personnes selon disposition",
    description:
      "Salle de 42 m² lumineuse et calme avec vue sur un jardin privatif, plancher en chêne, éclairage modulable et climatisation réversible. Idéale pour formations, réunions, séminaires, ateliers, yoga ou conférences.",
    image: "/salle-des-muses.jpg",
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
    showDispositions: true,
    paidOptions: [{ title: "Vidéoprojecteur (sur demande)", Icon: Projector }],
  },

  {
    id: "cafe-doc",
    name: "Le café d'Oc",
    surface: 28,
    maxCapacity: 25,
    capacity: "28m² - 25 personnes en mode conférence",
    description:
      "Espace convivial de 28 m² (bar, 18 couverts) pouvant accueillir jusqu'à 25 personnes en conférence. Idéal pour rencontres, ateliers, réunions et événements professionnels ou associatifs.",
    image: "/mise-a-disposition/cafe_conf.jpeg",
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
    showDispositions: false,
    paidOptions: [
      { title: "Café, Thé (sur demande)", Icon: Coffee },
      { title: "Bières (sur demande)", Icon: GlassWater },
      { title: "Tapas fait maison (sur demande)", Icon: CookingPot },
    ],
  },
];

export const DISPOSITIONS_SALLE_DES_MUSES = [
  { name: "Espace vide", capacity: "Configuration libre" },
  { name: "Conférence", capacity: "Jusqu'à 50 personnes" },
  { name: "En U", capacity: "10 à 24 personnes" },
  { name: "Salle de classe", capacity: "12 à 24 personnes" },
  { name: "En épis", capacity: "12 à 21 personnes" },
];

export const formatTarif = (t: Tarif, prix: number) =>
  t.label === "Horaire" ? `${prix} €/h` : `${prix} €`;

const tarifsTexte = (salle: Salle) =>
  salle.tarifs
    .map(
      (t) =>
        `${t.label.toLowerCase()} ${formatTarif(t, t.semaine)} en semaine, ${formatTarif(t, t.weekend)} le week-end`
    )
    .join(" ; ");

export const PRIX_HORAIRE_MIN = Math.min(
  ...SALLES.flatMap((s) => s.tarifs.filter((t) => t.label === "Horaire").map((t) => t.semaine))
);

/**
 * Questions fréquentes sur la location de salles.
 * Affichées sur la page et exposées en FAQPage (JSON-LD) : les réponses sont générées
 * depuis les données ci-dessus pour rester à jour.
 */
export const SALLES_FAQ: { question: string; answer: string }[] = [
  {
    question: "Quelles salles peut-on louer à l'Espace Musset à Toulouse ?",
    answer: `L'Espace Musset propose deux espaces à la location : ${SALLES.map(
      (s) =>
        `${s.name === "Salle des muses" ? "la Salle des Muses" : s.name} (${s.surface} m², jusqu'à ${s.maxCapacity} personnes)`
    ).join(
      " et "
    )}. Ils accueillent réunions, formations, séminaires, ateliers, conférences et événements associatifs ou professionnels.`,
  },
  {
    question: "Combien coûte la location d'une salle ?",
    answer: `${SALLES.map((s) => `${s.name} : ${tarifsTexte(s)}.`).join(" ")} Un devis personnalisé est établi selon votre projet.`,
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
    answer: `Selon la disposition : ${DISPOSITIONS_SALLE_DES_MUSES.filter(
      (d) => d.name !== "Espace vide"
    )
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
