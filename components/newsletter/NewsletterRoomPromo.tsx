import { Building2, Users, Ruler, Euro, PhoneIcon, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export function NewsletterRoomPromo() {
  return (
    <>
      {/* Intro */}
      <section className="py-6 border-b border-border">
        <p className="text-lg text-foreground leading-relaxed">
          Ce mois-ci à l'Espace Musset : découvrez notre{" "}
          <strong>mise à disposition de salles</strong>, et retrouvez tous nos{" "}
          <strong>événements de janvier</strong> — conférences, philosophie, soirées jeux, ateliers
          chant, théâtre et bien plus encore !
        </p>
      </section>

      {/* Room Promo */}
      <section className="py-6 border-b border-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Building2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-primary">
              {"Mise à disposition de salle"}
            </h2>
          </div>
        </div>

        {/* Salle des Muses */}
        <div className="flex rounded-xl overflow-hidden bg-primary/10 border border-primary/20 mb-4">
          {/* Image */}
          <div className="relative w-2/5 min-h-[200px]">
            <Image
              src="/salle-des-muses-3.jpg"
              alt="Salle des Muses"
              fill
              className="object-cover"
              style={{ objectPosition: "80% center" }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Salle des Muses
            </h3>

            <div className="flex flex-wrap gap-2 mb-3">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Ruler className="w-4 h-4 text-primary" />
                <span>42 m²</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>24 à 50 pers.</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Euro className="w-4 h-4 text-primary" />
                <span>Dès 50 €</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Salle de réunion, lieu de séminaire, espace de formation…
            </p>

            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <PhoneIcon className="w-4 h-4 text-primary" />
              <span>06 21 79 97 50</span>
            </div>
            <div className="flex items-center gap-1.5 mb-3 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span>contact@espace-musset.com</span>
            </div>
            <a
              href="https://www.espace-musset.com/mise-a-disposition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm" className="w-full">
                En savoir plus
              </Button>
            </a>
          </div>
        </div>

        {/* Café d'Oc */}
        <div className="flex rounded-xl overflow-hidden bg-primary/10 border border-primary/20">
          {/* Image */}
          <div className="relative w-2/5 min-h-[200px]">
            <Image
              src="/mise-a-disposition/cafe_classe.jpeg"
              alt="Café d'Oc"
              fill
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Le Café d'Oc
            </h3>

            <div className="flex flex-wrap gap-2 mb-3">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Ruler className="w-4 h-4 text-primary" />
                <span>28 m²</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>25 pers.</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Euro className="w-4 h-4 text-primary" />
                <span>Dès 30 €</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              Espace convivial idéal pour conférences et ateliers en petit comité.
            </p>

            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <PhoneIcon className="w-4 h-4 text-primary" />
              <span>06 21 79 97 50</span>
            </div>
            <div className="flex items-center gap-1.5 mb-3 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span>contact@espace-musset.com</span>
            </div>
            <a
              href="https://www.espace-musset.com/mise-a-disposition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm" className="w-full">
                En savoir plus
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
