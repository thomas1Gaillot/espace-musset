import { EventCard } from "./EventCard";
import { EventData } from "@/types/event-types";
import { Calendar, Sparkles } from "lucide-react";

interface MonthlyEventsSectionProps {
  events: EventData[];
  showTitle?: boolean;
  title?: string;
  icon?: "calendar" | "sparkles";
}

export function MonthlyEventsSection({
  events,
  showTitle = true,
  title = "Événements du mois",
  icon = "calendar",
}: MonthlyEventsSectionProps) {
  const sortedEvents = [...events].sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  if (events.length === 0) {
    return null;
  }

  const IconComponent = icon === "sparkles" ? Sparkles : Calendar;

  return (
    <section className="py-6">
      {showTitle && (
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <IconComponent className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-primary">{title}</h2>
            <p className="text-sm text-muted-foreground">
              {events.length} événement{events.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {sortedEvents.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}
