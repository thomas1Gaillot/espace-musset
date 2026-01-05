export interface EventData {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  city: string;
  image: string;
  dateObj: Date;
  eventLink?: string;
  eventContact?: string;
  price: string;
  type: { name: EventType; href: string };
  category: { name: string; href: string };
}

export type EventType =
  | "Café philo socratique"
  | "Feldenkrais"
  | "Atelier philo"
  | "Clown Socratique"
  | "Qi Gong"
  | "Méditation"
  | "Conférence"
  | "Rencontre philo"
  | "Volontariat"
  | "Ciné philo"
  | "Cours de philosophie"
  | "Yoga"
  | "Théâtre"
  | "Théâtre d'improvisation"
  | "Mercredi Montessori"
  | "Chant"
  | "Spectacle"
  | "Portes ouvertes"
  | "Soirée Jeux"
  | "Cours de piano"
  | "Yoga du rire"
  | "Ecriture spontanée"
  | "Maraude";
