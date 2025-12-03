import { NewsletterHeader } from "./NewsletterHeader";
import { MonthlyEventsSection } from "./MonthlyEventsSection";
import { NewsletterHighlights } from "./NewsletterHighlights";
import { NewsletterActions } from "./NewsletterActions";
import { NewsletterFooter } from "./NewsletterFooter";
import { EventData } from "@/types/event-types";

interface NewsletterTemplateProps {
  events: EventData[];
  month?: string;
  year?: number;
}

export function NewsletterTemplate({ events, month, year }: NewsletterTemplateProps) {
  return (
    <div className="min-h-screen w-full flex justify-center bg-background py-8 px-4 sm:py-12">
      <div className="w-full max-w-2xl">
        {/* Newsletter container */}
        <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border animate-fade-in">
          <NewsletterHeader month={month} year={year} />

          <div className="px-6 sm:px-8">
            <MonthlyEventsSection events={events} />
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
