import { EventData } from "@/types/event-types";
import { Calendar, Clock, MapPin, Euro } from "lucide-react";

interface EventCardProps {
  event: EventData;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  return (
    <article
      className="group bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative w-full sm:w-32 h-32 sm:h-auto flex-shrink-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-foreground/50  z-10" />
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={
              "absolute top-2 left-2 z-20 text-xs font-medium px-2 py-1 rounded-full text-primary-foreground"
            }
          >
            {event.type.name}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <h3 className="font-display text-lg font-semibold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>

          <div className="space-y-1.5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary/70" />
              <span className="capitalize">{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary/70" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary/70" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              <Euro className="w-4 h-4" />
              {event.price}
            </span>
            {event.eventLink && (
              <a
                href={event.eventLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
              >
                Réserver →
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
