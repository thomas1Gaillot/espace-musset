import { Info, Instagram, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export function NewsletterHighlights() {
  return (
    <section className="py-6 border-t border-border">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-newsletter-accent/20 rounded-full flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-newsletter-accent" />
        </div>
        <h2 className="font-display text-xl font-semibold text-foreground">En prime ce mois-ci</h2>
      </div>

      <div className="grid gap-3">
        <HighlightItem
          icon={<Instagram className="w-4 h-4" />}
          title="Suivez-nous"
          buttonLabel={"Nous suivre"}
          buttonHref="https://www.instagram.com/espacemussettoulouse/"
          description={
            <span>
              Sur Instagram{" "}
              <a
                href="https://www.instagram.com/espacemussettoulouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                @espacemussettoulouse
              </a>
            </span>
          }
        />
        <HighlightItem
          icon={<Info className="w-4 h-4" />}
          title="Infos pratiques"
          description={
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">{"Horaires d'ouverture"}</p>
                <ul className="list-disc ml-4">
                  <li>{"Lundi : 17h00 - 22h00"}</li>
                  <li>{"Mardi : 17h00 - 22h00"}</li>
                  <li>{"Mercredi : 17h00 - 22h00"}</li>
                  <li>{"Jeudi : (Lors des activités programmées)"}</li>
                  <li>{"Vendredi : (Lors des activités programmées)"}</li>
                  <li>{"Samedi : 14h00 - 18h00"}</li>
                  <li>{"Dimanche : (Lors des activités programmées)"}</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mt-3">{"Nos coordonnées"}</p>

                <p className="font-medium mt-1">{"Adresse"}</p>
                <p>
                  {"52 Bis Rue Alfred de Musset"} <br />
                  {"31200 Toulouse"} <br />
                  {"France"}
                </p>

                <p className="font-medium mt-3">{"Transport"}</p>
                <p>
                  {"Métro ligne A - Minimes - Claude Nougaro"}
                  <br />
                  {"Depuis la station de métro, à pied :"}
                </p>
                <p className="text-xs leading-relaxed opacity-90 mt-1">
                  {
                    "Au fond de la place, prendre la rue du Général Bourbaki vers la droite, puis la première à gauche, rue Biot. Au bout de cette rue, prendre la rue Alfred de Musset à gauche. Notre local est à 20 mètres à gauche."
                  }
                </p>

                <p className="font-medium mt-3">{"Téléphone"}</p>
                <p>{"06 30 15 46 48"}</p>

                <p className="font-medium mt-3">{"Email"}</p>
                <p>{"contact@espace-musset.com"}</p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}

function HighlightItem({
  icon,
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-3 p-3 bg-primary/20 rounded-lg transition-colors">
      {/* ICONE + TEXTE */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center text-primary flex-shrink-0">
          {icon}
        </div>

        <div>
          <h3 className="font-medium text-foreground text-sm">{title}</h3>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
      </div>

      {/* BOUTON À DROITE */}
      {buttonLabel && buttonHref && (
        <a href={buttonHref} target="_blank" rel="noopener noreferrer">
          <Button variant="default" className="ml-4 whitespace-nowrap">
            {buttonLabel}
          </Button>
        </a>
      )}
    </div>
  );
}
