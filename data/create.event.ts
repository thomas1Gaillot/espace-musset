import { EventData, EventType } from "@/types/event-types";

let _idCounter = 1;

// {""} Valeurs par défaut réutilisées partout {""}
const DEFAULT_EVENT_INFO = {
  city: "31200 Toulouse",
  location: "Espace Musset",
  venue: "52 Bis Rue Alfred de Musset",
};

// {""} Formatage automatique de la date en Français {""}
function formatDateFR(dateObj: Date): string {
  return dateObj.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function createEvent(data: {
  title: string;
  dateObj: Date;
  time: string;
  image: string;
  price: string;
  type: { name: EventType; href: string };
  category: { name: string; href: string };
  eventLink?: string;
  eventContact?: string;
}): EventData {
  return {
    id: _idCounter++,
    title: data.title,
    dateObj: data.dateObj,
    date: formatDateFR(data.dateObj),
    time: data.time,
    image: data.image,
    price: data.price,
    type: data.type,
    category: data.category,
    eventLink: data.eventLink,
    eventContact: data.eventContact,

    // {""} Valeurs par défaut auto-ajoutées {""}
    ...DEFAULT_EVENT_INFO,
  };
}
