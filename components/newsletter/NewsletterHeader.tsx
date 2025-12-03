import { Mail } from "lucide-react";

interface NewsletterHeaderProps {
  month?: string;
  year?: number;
}

export function NewsletterHeader({ month, year }: NewsletterHeaderProps) {
  const currentDate = new Date();
  const displayMonth = month || currentDate.toLocaleDateString("fr-FR", { month: "long" });
  const displayYear = year || currentDate.getFullYear();

  return (
    <header className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-newsletter-accent rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-newsletter-accent rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative px-6 py-8 sm:px-8 sm:py-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              Espace Musset
            </h1>
            <p className="text-sm opacity-80">Centre culturel & associatif</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-4 mt-4">
          <p className="text-sm opacity-80 mb-1">Votre rendez-vous culturel mensuel</p>
          <p className="font-display text-xl capitalize">
            {displayMonth} {displayYear}
          </p>
        </div>
      </div>
    </header>
  );
}
