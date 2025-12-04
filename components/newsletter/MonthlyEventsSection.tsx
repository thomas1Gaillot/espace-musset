import { EventCard } from "./EventCard";
import { EventData } from "@/types/event-types";
import { Calendar } from "lucide-react";

interface MonthlyEventsSectionProps {
  events: EventData[];
}

export function MonthlyEventsSection({ events }: MonthlyEventsSectionProps) {
  const sortedEvents = [...events].sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  return (
    <section className="py-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          <Calendar className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-primary">Événements du mois</h2>
          <p className="text-sm text-muted-foreground">
            {events.length} événement{events.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {sortedEvents.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>

      {events.length === 0 && (
        <div className="text-center py-12 bg-muted/50 rounded-xl border border-dashed border-border">
          <Calendar className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
          <p className="text-muted-foreground">Aucun événement prévu ce mois-ci</p>
        </div>
      )}
    </section>
  );
}
