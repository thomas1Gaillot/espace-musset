import { EventData } from "@/types/event-types";
import { ROUTES } from "./route";




const philosophieEventCategory: { name: string, href: string } = { name: 'Philosophie', href: '/philosophie' };
const ArtEventCategory: { name: string, href: string } = { name: 'Arts', href: '/arts-du-corps' };
const EcologieEventCategory: { name: string, href: string } = { name: 'Ecologie', href: '/ecologie' };
const CafeEventCategory: { name: string, href: string } = { name: 'Café associatif', href: 'cafe-associatif' };

const eventList: EventData[] = [
    {
        id: 1,
        price: '6,00 €',
        title: "Ciné philo : Kaamelott et le roi Arthur",
        date: "Mardi 26 août 2025",
        time: "19:30 à 21:30",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/kamelot.jpg",
        eventLink: 'https://www.eventbrite.fr/e/billets-cine-philo-kaamelott-et-le-roi-arthur-1459840976659?aff=ebdssbdestsearch',
        dateObj: new Date("2025-08-26"),
        category: philosophieEventCategory,
        type: { name: 'Ciné philo', href: ROUTES.PHILOSOPHIE.SUBPAGES.CAFES }
    },
    {
        id: 2,
        price: '6,00 €',
        title: "La philosophie de la Divine Comédie de Dante",
        date: "mardi 8 juillet 2025",
        time: "19:30 à 20:30",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/divina-comedie.jpg?height=80&width=120",
        dateObj: new Date("2025-07-08"),
        eventLink: 'https://www.eventbrite.com/e/billets-la-philosophie-de-la-divine-comedie-de-dante-1434042903929?aff=ebdssbdestsearch&keep_tld=1',
        category: philosophieEventCategory,
        type: { name: 'Conférence', href: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES }
    },
    {
        id: 3,
        price: '6,00 €',
        title: "Sur les traces d'Ulysse : un périple en quête de soi.",
        date: "mardi 22 juillet 2025",
        time: "19:30 à 20:30",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/ulysse.png?height=80&width=120",
        dateObj: new Date("2025-07-22"),
        eventLink: 'https://www.eventbrite.com/e/billets-sur-les-traces-dulysse-un-periple-en-quete-de-soi-1434216262449?aff=ebdssbdestsearch&keep_tld=1',
        category: philosophieEventCategory,
        type: { name: 'Rencontre philo', href: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES }
    },
    {
        id: 4,
        price: '6,00 €',
        title: "L'indifférence est-elle le mal de notre siècle ?",
        date: "mardi 29 juillet 2025",
        time: "19:30 à 20:30",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/indif.jpg?height=80&width=120",
        dateObj: new Date("2025-07-29"),
        eventLink: 'https://www.eventbrite.com/e/billets-lindifference-est-elle-le-mal-de-notre-siecle-1434429299649?aff=ebdssbdestsearch&keep_tld=1',
        category: philosophieEventCategory,
        type: { name: 'Rencontre philo', href: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES }
    },
    {
        id: 11,
        price: '6,00 €',
        title: "Scène ouverte",
        date: "Samedi 6 Juin 2025",
        time: "12:00 à 22:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/placeholder.svg?height=80&width=120",
        dateObj: new Date("2025-06-06"),
        eventLink: '',
        category: CafeEventCategory,
        type: { name: 'Spectacle', href: 'cafe-associatif' }
    },
    {
        id: 12,
        price: '6,52 €',
        title: "La philosophie, forme de vie avec Socrate",
        date: "Lundi 15 Septembre 2025",
        time: "19:30 à 22:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/atelier-philo.jpg",
        dateObj: new Date("2025-09-15"),
        eventLink: 'https://www.eventbrite.fr/e/billets-deviens-toi-meme-ateliers-de-philosophie-pratique-1467524448129',
        category: philosophieEventCategory,
        type: { name: 'Atelier', href: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS }
    },
    {
        id: 13,
        price: "6,52 €",
        title: "Sortir de l'illusion avec la caverne de Platon",
        date: "Lundi 22 Septembre 2025",
        time: "19:30 à 22:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/atelier-philo.jpg",
        dateObj: new Date("2025-09-22"),
        eventLink: 'https://www.eventbrite.fr/e/billets-deviens-toi-meme-ateliers-de-philosophie-pratique-1467524448129',
        category: philosophieEventCategory,
        type: { name: 'Atelier', href: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS }
    },
    {
        id: 14,
        price: "6,52 €",
        title: "L'art du combat intérieur avec la Bhagavad Gîtâ",
        date: "Lundi 29 Septembre 2025",
        time: "19:30 à 22:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/atelier-philo.jpg",
        dateObj: new Date("2025-09-29"),
        eventLink: 'https://www.eventbrite.fr/e/billets-deviens-toi-meme-ateliers-de-philosophie-pratique-1467524448129',
        category: philosophieEventCategory,
        type: { name: 'Atelier', href: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS }
    },
    {
        id: 15,
        price: "Gratuit",
        title: "Journée portes ouvertes",
        date: "Samedi 13 Septembre 2025",
        time: "14:00 à 19:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/cafe-asso.jpeg",
        dateObj: new Date("2025-09-13"),
        eventLink: 'https://toulouse.nouvelle-acropole.fr/component/jem/event/3022-journee-portes-ouvertes',
        category: CafeEventCategory,
        type: { name: 'Portes ouvertes', href: ROUTES.CAFE_ASSOCIATIF }
    },
    {
        id: 16,
        price: "6 €",
        title: "La liberté d’expression est-elle sans limite ? ",
        date: "Samedi 13 Septembre 2025",
        time: "17:00 à 18:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/cafe-philo.jpg",
        dateObj: new Date("2025-09-13"),
        eventLink: 'https://toulouse.nouvelle-acropole.fr/component/jem/event/3022-journee-portes-ouvertes',
        category: philosophieEventCategory,
        type: { name: 'Café philo', href: ROUTES.PHILOSOPHIE.SUBPAGES.CAFES }
    },

    {
        id: 17,
        price: '6,00 €',
        title: " Rencontre philo : 'La sagesse de Socrate, c’est pas faux...!'",
        date: "mardi 16 Septembre 2025",
        time: "19:30 à 21:30",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/cours2philo.jpg",
        dateObj: new Date("2025-09-16"),
        eventLink: 'https://toulouse.nouvelle-acropole.fr/component/jem/event/3020-rencontre-philo-la-sagesse-de-socrate-c-est-pas-faux',
        category: philosophieEventCategory,
        type: { name: 'Rencontre philo', href: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS }
    },
    {
        id: 18,
        price: 'Gratuit',
        title: "World CleanUp Day ",
        date: "Samedi 20 Septembre 2025",
        time: "14:00 à 16:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/cleanupday.jpg",
        dateObj: new Date("2025-09-20"),
        eventLink: ROUTES.CONTACT,
        category: EcologieEventCategory,
        type: { name: 'Volontariat', href: ROUTES.ECOLOGIE.SUBPAGES.ZERO_DECHET }
    },


    {
        id: 19,
        price: "6,52 €",
        title: " 1er atelier philo : ''Les exercices spirituels de la philosophie'' ",
        date: "Mercredi 24 Septembre 2025",
        time: "19:30 à 22:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/atelier-philo.jpg",
        dateObj: new Date("2025-09-24"),
        eventLink: ROUTES.CONTACT,
        category: philosophieEventCategory,
        type: { name: 'Atelier', href: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS }
    },
    {
        id: 20,
        price: "6,52 €",
        title: " 2ème atelier philo : Sortir de la caverne de Platon ",
        date: "Lundi 29 Septembre 2025",
        time: "19:30 à 22:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/atelier-philo.jpg",
        dateObj: new Date("2025-10-01"),
        eventLink: ROUTES.CONTACT,
        category: philosophieEventCategory,
        type: { name: 'Atelier', href: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS }
    },

]


export { eventList };

