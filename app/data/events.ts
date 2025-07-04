

export interface Event {
    id: number
    title: string
    date: string
    time: string
    location: string
    venue: string
    city: string
    image: string
    dateObj: Date
    eventLink: string
    price: string
    type: EventType
    category: {name :string, href : string}
}

export type EventType =
    | "Café philo"
    | "Atelier"
    | "Conférence"
    | "Rencontre"
    | "Volontariat"
    | "Ciné philo"
    | "Cours de philosophie"
    | "Yoga"
    | "Danse"
    | "Théâtre"
    | "Chant"
    | 'Spectacle';

const philosophieEventCategory: {name :string, href : string} = { name: 'Philosophie', href: '/philosophie' };
const ArtEventCategory:  {name :string, href : string}  = { name: 'Arts', href: '/arts-du-corps' };
const EcologieEventCategory:  {name :string, href : string}  = { name: 'Ecologie', href: '/ecologie' };
const CafeEventCategory:  {name :string, href : string}  = { name: 'Café associatif', href: 'philosophie' };

const eventList: Event[] = [
    {
        id: 1,
        price: '6 €',
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
        type: 'Ciné philo'
    },
    {
        id: 2,
        price: '6 €',
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
        type: 'Conférence'
    },
    {
        id: 3,
        price: '6 €',
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
        type: 'Rencontre'
    },
    {
        id: 4,
        price: '6 €',
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
        type: 'Rencontre'
    },
    {
        id: 11,
        price: '6 €',
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
        type: 'Spectacle'
    },
]


export { eventList }

