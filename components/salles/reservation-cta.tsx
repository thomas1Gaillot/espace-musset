import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/route";
import { SITE } from "@/lib/site";
import { Phone } from "lucide-react";
import Link from "next/link";

const ETAPES = [
  {
    title: "Contactez-nous",
    text: "Par téléphone ou par mail, partagez-nous votre projet et vos besoins",
  },
  {
    title: "Visite & Devis",
    text: "Visitez nos espaces et recevez un devis personnalisé adapté à votre événement",
  },
  {
    title: "Réservation",
    text: "Validation de votre réservation et préparation de la salle selon vos souhaits",
  },
];

/** Étapes de réservation et boutons de contact */
export function ReservationCta() {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 mb-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Comment réserver ?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Un processus simple et rapide pour réserver votre espace. Horaires flexibles : on s'adapte
          à votre projet !
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {ETAPES.map((etape, idx) => (
          <div key={etape.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
              {idx + 1}
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">{etape.title}</h3>
            <p className="text-muted-foreground text-sm">{etape.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-lg text-muted-foreground mb-6">
          Prêt à réserver votre espace ? Contactez-nous dès maintenant
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant={"outline"} size="lg" className="text-base" asChild>
            <a href={`tel:${SITE.phone}`}>
              <Phone className="w-5 h-5 mr-2" />
              Appeler Anne-Marie
            </a>
          </Button>
          <span className="text-muted-foreground font-medium">ou</span>
          <Button size="lg" className="text-base" asChild>
            <Link href={ROUTES.CONTACT}>Nous contacter par mail</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
