export interface EventData {
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
  type: { name: EventType; href: string }
  category: { name: string; href: string }
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
  | "Spectacle"
