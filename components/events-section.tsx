import { ROUTES } from "@/data/route";
import { EventType } from "@/types/event-types";
import {
  Coffee,
  Drama,
  GraduationCap,
  HandshakeIcon,
  HeartPulseIcon,
  LandmarkIcon,
  LeafIcon,
  Music2Icon,
  PopcornIcon,
  Presentation,
  Star,
  WindIcon
} from "lucide-react";
import Link from "next/link";
import type React from "react";



const eventData: { type: EventType; icon: React.ComponentType<any>, href: string }[] = [
  { type: "Café philo", icon: Coffee, href: ROUTES.PHILOSOPHIE.SUBPAGES.CAFES },
  { type: "Atelier philo", icon: LandmarkIcon, href: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS },
  { type: "Conférence", icon: Presentation, href: ROUTES.PHILOSOPHIE.SUBPAGES.CONFERENCES },
  { type: "Rencontre philo", icon: HandshakeIcon, href: ROUTES.PHILOSOPHIE.SUBPAGES.RENCONTRES },
  { type: "Ciné philo", icon: PopcornIcon, href: ROUTES.PHILOSOPHIE.SUBPAGES.CINE },
  { type: "Cours de philosophie", icon: GraduationCap, href: ROUTES.PHILOSOPHIE.SUBPAGES.ATELIERS },
  { type: "Volontariat", icon: LeafIcon, href: ROUTES.ECOLOGIE.SUBPAGES.ATELIERS },
  { type: "Spectacle", icon: Star, href: ROUTES.CAFE_ASSOCIATIF },
  { type: "Yoga", icon: WindIcon, href: ROUTES.ARTS_DU_CORPS.SUBPAGES.YOGA },
  { type: "Danse", icon: HeartPulseIcon, href: ROUTES.ARTS_DU_CORPS.SUBPAGES.DANSE },
  { type: "Théâtre", icon: Drama, href: ROUTES.ARTS_DU_CORPS.SUBPAGES.THEATRE },
  { type: "Chant", icon: Music2Icon, href: ROUTES.ARTS_DU_CORPS.SUBPAGES.CHANT },
]

export default function EventsSection() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-auto container">
      {eventData.map((event) => {
        const IconComponent = event.icon
        return (
          <Link
            key={event.type}
            href={event.href}
            className="group flex flex-col items-center px-3 py-2 rounded-2xl bg-background"
          >
            <div className="w-24 h-24 rounded-full border border-primary/30 hover:border-none flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <IconComponent strokeWidth={1.1} className="w-10 h-10 text-primary " />
            </div>
            <h3 className="text-sm font-semibold text-center leading-tight text-primary/60 group-hover:text-primary transition-colors">
              {event.type}
            </h3>
          </Link>
        )
      })}
    </div>
  )
}
