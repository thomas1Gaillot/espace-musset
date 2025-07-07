import { CoffeeIcon, HandshakeIcon, LandmarkIcon, MicVocalIcon, PopcornIcon } from "lucide-react";
import { ROUTES } from "./route";

export const philosophieContent = {
  breadcrumb: {
    home: {
      label: "Accueil",
      link: ROUTES.ACCUEIL
    },
    current: "Philosophie"
  },
  hero: {
    title: "Philosophie",
    description:
      "Un espace de réflexion et de dialogue pour explorer ensemble les grandes questions de l'existence, développer notre pensée critique et nourrir notre sagesse collective.",
    image: {
      url: "/event/atelier-philo.jpg",
      alt: "Réflexion philosophique"
    }
  },
  intro: {
    title: "La philosophie accessible à tous",
    paragraphs: [
      "À l'Espace Musset, la philosophie n'est pas une discipline réservée aux érudits. C'est un art de vivre et de penser que nous pratiquons ensemble, dans un esprit d'ouverture et de bienveillance.",
      "Nos activités philosophiques s'adressent à tous, quel que soit votre niveau. L'important n'est pas d'avoir des réponses, mais de savoir poser les bonnes questions et d'être prêt à les explorer avec curiosité.",
      "Nous créons un espace de parole libre où chacun peut exprimer ses idées, ses doutes et ses interrogations dans le respect mutuel et l'écoute active."
    ]
  },
  subpages: {
    title: "Nos activités philosophiques",
    items: [
      {
        title: "Ateliers hebdos",
        description: "Rencontres philosophiques régulières pour explorer les grandes questions existentielles",
        link: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS,
        Icon: LandmarkIcon,
        buttonLabel: "Découvrir"
      },
      {
        title: "Cafés philo",
        description: "Ateliers de réflexion collective guidés pour apprendre à penser par soi-même et avec les autres",
        link: ROUTES.PHILOSOPHIE.SUBPAGES.CAFES,
        Icon: CoffeeIcon,
        buttonLabel: "Découvrir"
      },
      {
        title: "Ciné philo",
        description: "Projections d'extraits de film suivies de discussions philosophiques enrichissantes",
        link: ROUTES.PHILOSOPHIE.SUBPAGES.CINE,
        Icon: PopcornIcon,
        buttonLabel: "Découvrir"
      },
      {
        title: "Conférences",
        description: "Interventions sur des thématiques philosophiques actuelles",
        link: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES,
        Icon: MicVocalIcon,
        buttonLabel: "Découvrir"
      },
      {
        title: "Rencontres philo",
        description: "Discussion ouverte et abordable autour d'un sujet philosophique",
        link: ROUTES.PHILOSOPHIE.SUBPAGES.RENCONTRES,
        Icon: HandshakeIcon,
        buttonLabel: "Découvrir"
      }
    ]
  },
  approche: {
    title: "Notre approche",
    citation: "“ Non pas un chantier de pierre, mais un chantier d'homme. ”",
    items: [
      {
        title: "Philosophie pratique",
        description: "La philosophie comme support à l'action en conscience."
      },
      {
        title: "Culture",
        description: "Le développement d'une culture où la philosophie est au coeur de la vie."
      },
      {
        title: "Diversité",
        description: "Une philosophie qui promeut la diversité de chacun pour l'unité du groupe."
      }
    ]
  },
  cta: {
    title: "Rejoignez nos réflexions philosophiques",
    description: "Que vous soyez novice ou passionné, venez explorer avec nous les questions fondamentales de l'existence humaine",
    primaryLabel: "Découvrir les ateliers",
    primaryLink: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS,
    secondaryLabel: "Nous contacter",
    secondaryLink: ROUTES.CONTACT
  }
};
