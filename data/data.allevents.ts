import { EventData, EventType } from "@/types/event-types";
import { ROUTES } from "./route";




const philosophieEventCategory: { name: string, href: string } = { name: 'Philosophie', href: '/philosophie' };
const ArtEventCategory: { name: string, href: string } = { name: 'Arts', href: '/arts-du-corps' };
const EcologieEventCategory: { name: string, href: string } = { name: 'Ecologie', href: '/ecologie' };
const CafeEventCategory: { name: string, href: string } = { name: 'Café associatif', href: 'cafe-associatif' };

const CaféPhilo: { name: EventType, href: string } = { name: 'Café philo', href: ROUTES.PHILOSOPHIE.SUBPAGES.CAFES }
const CinéPhilo: { name: EventType, href: string } = { name: 'Ciné philo', href: ROUTES.PHILOSOPHIE.SUBPAGES.CAFES }
const ConférencesPhilo: { name: EventType, href: string } = { name: 'Conférence', href: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES }
const RencontrePhilo: { name: EventType, href: string } = { name: 'Rencontre philo', href: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES }
const SpectacleDuCafeAsso: { name: EventType, href: string } = { name: 'Spectacle', href: 'cafe-associatif' }
const AtelierPhilo: { name: EventType, href: string } = { name: 'Atelier philo', href: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS }
const PortesOuvertesDuCafeAsso: { name: EventType, href: string } = { name: 'Portes ouvertes', href: ROUTES.CAFE_ASSOCIATIF }
const Volontariat: { name: EventType, href: string } = { name: 'Volontariat', href: ROUTES.ECOLOGIE.SUBPAGES.ZERO_DECHET }



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
        type: CinéPhilo
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
        type: ConférencesPhilo
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
        type: RencontrePhilo
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
        type: RencontrePhilo
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
        type: SpectacleDuCafeAsso
    },
    {
        id: 409,
        price: '7,58 €',
        title: "La réalité virtuelle, illusion ou nouvelle conscience ?",
        date: "Jeudi 4 Septembre 2025",
        time: "19:30 à 21:15",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/cafe-philo-1er-jeudi.jpg",
        dateObj: new Date("2025-09-04"),
        eventLink: 'https://www.eventbrite.fr/e/billets-cafe-philo-la-realite-virtuelle-illusion-ou-nouvelle-conscience-1549423811329?aff=ebdsoporgprofile',
        category: philosophieEventCategory,
        type: CaféPhilo
    },
    {
        id: 12,
        price: '6,52 €',
        title: "Rencontre philo - Socrate, ce rebelle.",
        date: "Lundi 15 Septembre 2025",
        time: "19:30 à 22:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/atelier-philo.jpg",
        dateObj: new Date("2025-09-15"),
        eventLink: "https://toulouse.nouvelle-acropole.fr/component/jem/event/3020-rencontre-philo-la-sagesse-de-socrate-c-est-pas-faux",
        category: philosophieEventCategory,
        type: RencontrePhilo
    },
    {
        id: 13,
        price: "6,52 €",
        title: "Deviens toi-même, une aventure authentique",
        date: "Lundi 22 Septembre 2025",
        time: "19:30 à 22:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/atelier-philo.jpg",
        dateObj: new Date("2025-09-22"),
        eventLink: 'https://www.eventbrite.fr/e/billets-deviens-toi-meme-une-aventure-authentique-1467522010839?aff=ebdsoporgprofile',
        category: philosophieEventCategory,
        type: AtelierPhilo
    },
    {
        id: 14,
        price: "6,52 €",
        title: "Deviens toi-même, une aventure authentique",
        date: "Lundi 29 Septembre 2025",
        time: "19:30 à 22:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/atelier-philo.jpg",
        dateObj: new Date("2025-09-29"),
        eventLink: 'https://www.eventbrite.fr/e/billets-deviens-toi-meme-une-aventure-authentique-1467522010839?aff=ebdsoporgprofile',
        category: philosophieEventCategory,
        type: AtelierPhilo
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
        type: PortesOuvertesDuCafeAsso
    },
    {
        id: 16,
        price: "7,58 €",
        title: "Café Philo : Dire la vérité, un devoir ou un risque ?",
        date: "Samedi 13 Septembre 2025",
        time: "17:00 à 18:30",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/cafe-philo-13-sep.jpg",
        dateObj: new Date("2025-09-13"),
        eventLink: 'https://toulouse.nouvelle-acropole.fr/component/jem/event/3022-journee-portes-ouvertes',
        category: philosophieEventCategory,
        type: CaféPhilo
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
        image: "/event/cleanup-20-sept.jpg",
        dateObj: new Date("2025-09-20"),
        eventLink: "https://www.eventbrite.fr/e/billets-world-cleanup-day-1629072703309?aff=ebdsoporgprofile",
        category: EcologieEventCategory,
        type: Volontariat
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
        type: AtelierPhilo
    },
    {
        id: 2809,
        price: 'Gratuit',
        title: "Maraude auprès des sans abris",
        date: "Dimanche 28 Septembre 2025",
        time: "17:30 à 21:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/cleanup-20-sept.jpg",
        dateObj: new Date("2025-09-28"),
        eventLink: ROUTES.CONTACT,
        category: EcologieEventCategory,
        type: Volontariat
    },
    {
        id: 210,
        price: '7,58 €',
        title: "Café Philo :L'engagement : prison ou liberté ?",
        date: "Jeudi 2 Octobre 2025",
        time: "19:30 à 21:15",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/cafe-philo-1er-jeudi.jpg",
        dateObj: new Date("2025-10-02"),
        eventLink: 'https://www.eventbrite.fr/e/billets-cafe-philo-lengagement-prison-ou-liberte-1549624692169?aff=ebdsoporgprofile',
        category: philosophieEventCategory,
        type: CaféPhilo
    },
    {
        id: 610,
        price: "6,52 €",
        title: "Penser par soi-même, oser la vérité",
        date: "Lundi 6 Octobre 2025",
        time: "19:30 à 22:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/atelier-philo.jpg",
        dateObj: new Date("2025-10-06"),
        eventLink: 'https://www.eventbrite.fr/e/billets-deviens-toi-meme-une-aventure-authentique-1467522010839?aff=ebdsoporgprofile',
        category: philosophieEventCategory,
        type: AtelierPhilo
    },
    {
        id: 1710,
        price: "10 €",
        title: "Concert aux chandelles et déclamations",
        date: "Vendredi 17 Octobre 2025",
        time: "20:00 à 21:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/concert-chandelle.jpeg",
        dateObj: new Date("2025-10-17"),
        eventLink: ROUTES.CONTACT,
        category: CafeEventCategory,
        type: SpectacleDuCafeAsso
    },
    {
        id: 2610,
        price: 'Gratuit',
        title: "Maraude auprès des sans abris",
        date: "Dimanche 26 Octobre 2025",
        time: "17:30 à 21:00",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/cleanup-20-sept.jpg",
        dateObj: new Date("2025-10-26"),
        eventLink: ROUTES.CONTACT,
        category: EcologieEventCategory,
        type: Volontariat
    },
    {
        id: 412,
        price: '7,58 €',
        title: "Café Philo : Penser à la mort est-utile ?",
        date: "Jeudi 4 Décembre 2025",
        time: "19:30 à 21:15",
        location: "Espace Musset",
        venue: "École de philosophie - ANAT",
        city: "31200 Toulouse",
        image: "/event/cafe-philo-1er-jeudi.jpg",
        dateObj: new Date("2025-12-04"),
        eventLink: 'https://www.eventbrite.fr/e/billets-cafe-philo-penser-a-la-mort-est-utile-1549755342949?aff=ebdsoporgprofile',
        category: philosophieEventCategory,
        type: CaféPhilo
    },

]


export { eventList };

