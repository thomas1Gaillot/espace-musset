import { EventData } from "@/types/event-types";
import { RecurringEventGroup } from "@/data/group-recurring-events";
import { Calendar, Repeat } from "lucide-react";

interface RecurringEventsSectionProps {
  recurringGroups: RecurringEventGroup[];
}

export function RecurringEventsSection({ recurringGroups }: RecurringEventsSectionProps) {
  if (recurringGroups.length === 0) {
    return null;
  }

  return (
    <section className="py-6 border-t border-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          <Repeat className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-primary">Activités récurrentes</h2>
          <p className="text-sm text-muted-foreground">
            {recurringGroups.length} activité{recurringGroups.length > 1 ? "s" : ""} régulière
            {recurringGroups.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {recurringGroups.map((group, index) => (
          <RecurringEventCard key={index} group={group} />
        ))}
      </div>
    </section>
  );
}

interface RecurringEventCardProps {
  group: RecurringEventGroup;
}

function RecurringEventCard({ group }: RecurringEventCardProps) {
  const { baseEvent, dates, count } = group;

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
      {/* Header avec catégorie */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 px-4 py-2 flex items-center justify-between">
        <span className="text-sm font-medium text-primary/80">
          {baseEvent.category.name} : {baseEvent.type.name}
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-medium bg-green-500 text-white px-2 py-1 rounded-full">
          <Repeat className="w-3 h-3" />
          Récurrent ({count} dates)
        </span>
      </div>

      {/* Contenu */}
      <div className="p-4 bg-gradient-to-b from-card to-muted/30">
        <h3 className="font-semibold text-lg text-foreground mb-3">{baseEvent.title}</h3>

        {/* Liste des dates */}
        <div className="bg-muted/50 rounded-lg p-3 mb-3">
          <div className="flex items-start gap-2 mb-2">
            <Calendar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm font-medium text-foreground">Dates :</span>
          </div>
          <div className="ml-6 space-y-1">
            {dates.map((date, i) => (
              <div key={i} className="text-sm text-muted-foreground">
                •{" "}
                {date.toLocaleDateString("fr-FR", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Infos pratiques */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>🕐</span>
          <span>{baseEvent.time}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span>📍</span>
          <span>{baseEvent.location}</span>
        </div>

        {/* Prix et lien */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            <span>💶</span>
            {baseEvent.price}
          </span>
          <a
            href={baseEvent.eventLink || "/#evenements"}
            className="text-sm font-medium text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Je réserve →
          </a>
        </div>
      </div>
    </div>
  );
}
