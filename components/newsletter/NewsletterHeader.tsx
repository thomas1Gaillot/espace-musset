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

      <div className="flex justify-between items-start px-6 py-8  ">
        <div>
          <p className="text-xs opacity-80 mb-1 uppercase">
            Newsletter : Votre rendez-vous culturel mensuel
          </p>
          <p className="font-display text-xl capitalize">
            {displayMonth} {displayYear}
          </p>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div className="space-y-0">
            <p className="font-display text-end text-lg font-bold">Espace Musset</p>
            <p className="text-xs opacity-80 text-end">Centre culturel & associatif</p>
          </div>
          <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <img src="/logoEM.png" alt="Espace Musset" className="min-w-10 h-10" />
          </div>
        </div>
      </div>
    </header>
  );
}
