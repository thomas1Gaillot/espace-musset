import { ExternalLink, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterActions() {
  return (
    <section className="py-6 border-t border-border">
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          asChild
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
        >
          <a href="https://www.espace-musset.com/#agenda" target="_blank" rel="noopener noreferrer">
            <CalendarDays className="w-4 h-4 mr-2" />
            Voir l'agenda complet
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 border-primary/30 text-primary hover:bg-primary/5"
        >
          <a href="https://www.espace-musset.com" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Visiter le site
          </a>
        </Button>
      </div>
    </section>
  );
}
