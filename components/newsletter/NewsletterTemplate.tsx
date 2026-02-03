import { NewsletterHeader } from "./NewsletterHeader";
import { NewsletterRoomPromo } from "./NewsletterRoomPromo";
import { MonthlyEventsSection } from "./MonthlyEventsSection";
import { RecurringEventsSection } from "./RecurringEventsSection";
import { NewsletterHighlights } from "./NewsletterHighlights";
import { NewsletterActions } from "./NewsletterActions";
import { NewsletterFooter } from "./NewsletterFooter";
import { EventData } from "@/types/event-types";
import { MonthlyEventsData } from "@/data/get-monthly.events";
import { Calendar } from "lucide-react";

interface NewsletterTemplateProps {
  events?: EventData[];
  eventsData?: MonthlyEventsData;
  month?: string;
  year?: number;
}

export function NewsletterTemplate({ events, eventsData, month, year }: NewsletterTemplateProps) {
  // Support both old and new API
  const uniqueEvents = eventsData?.uniqueEvents || events || [];
  const recurringGroups = eventsData?.recurringGroups || [];
  const hasAnyEvents = uniqueEvents.length > 0 || recurringGroups.length > 0;

  return (
    <div className="min-h-screen w-full flex justify-center bg-background py-8 px-4 sm:py-12">
      <div className="w-full max-w-2xl">
        {/* Newsletter container */}
        <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border animate-fade-in">
          <NewsletterHeader month={month} year={year} />

          <div className="px-6 sm:px-8">
            {/* Événements spéciaux (non-récurrents) */}
            <MonthlyEventsSection
              events={uniqueEvents}
              title="Événements spéciaux"
              icon="sparkles"
            />

            {/* Activités récurrentes */}
            <RecurringEventsSection recurringGroups={recurringGroups} />

            {/* Message si aucun événement */}
            {!hasAnyEvents && (
              <section className="py-6">
                <div className="text-center py-12 bg-muted/50 rounded-xl border border-dashed border-border">
                  <Calendar className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
                  <p className="text-muted-foreground">Aucun événement prévu ce mois-ci</p>
                </div>
              </section>
            )}

            <NewsletterHighlights />
            <NewsletterActions />
          </div>

          <NewsletterFooter />
        </div>

        {/* Preview badge */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Aperçu de la newsletter • Version web
        </p>
      </div>
    </div>
  );
}
