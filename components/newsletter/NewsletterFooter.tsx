import { MapPin, Mail, Heart } from "lucide-react";

export function NewsletterFooter() {
  return (
    <footer className="bg-primary px-6 py-6 sm:px-8">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-primary-foreground mt-0.5 flex-shrink-0" />
          <div className="text-sm text-primary-foreground">
            <p className="font-medium">Espace Musset</p>
            <p>52 bis rue Alfred de Musset</p>
            <p>31200 Toulouse</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-secondary-foreground">
          <Mail className="w-4 h-4 flex-shrink-0" />
          <p>
            Pour ne plus recevoir nos emails :{" "}
            <a
              href="mailto:contact@espace-musset.com"
              className="text-primary-foreground hover:underline"
            >
              contactez-nous
            </a>
          </p>
        </div>

        <div className="pt-4 border-t border-border/50 flex items-center justify-center gap-1 text-xs text-primary-foreground">
          <span>Fait avec</span>
          <Heart className="w-3 h-3 text-primary-foreground fill-primary" />
          <span>à Toulouse</span>
        </div>
      </div>
    </footer>
  );
}
