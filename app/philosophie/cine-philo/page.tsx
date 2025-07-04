import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CinePhilo = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                Accueil
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/philosophie">
                Philosophie
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{"Ciné philo"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ciné Philo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Le cinéma comme porte d'entrée vers la philosophie. Projections suivies
            de débats enrichissants pour explorer les grandes questions existentielles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="relative h-80 rounded-lg overflow-hidden bg-gradient-to-br from-sage-200 to-earth-200 flex items-center justify-center">
            <div className="text-center text-6xl">🎬</div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Quand le cinéma interroge l'existence
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nos soirées ciné-philo proposent une approche originale de la philosophie
                à travers le 7ème art. Après la projection d'un film soigneusement choisi,
                nous engageons un débat collectif sur les questions philosophiques soulevées.
              </p>
              <p>
                Cette formule permet d'aborder des concepts complexes de manière accessible
                et vivante, en s'appuyant sur l'émotion et la narration cinématographique
                pour nourrir la réflexion.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-sage-50/50 rounded-lg p-6">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Programmation
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>Fréquence :</strong> Une fois par mois</li>
              <li><strong>Horaire :</strong> Vendredi 20h-23h</li>
              <li><strong>Format :</strong> Film + débat (1h30)</li>
              <li><strong>Tarif :</strong> 8€ (5€ étudiants/chômeurs)</li>
            </ul>
          </div>

          <div className="bg-earth-50/50 rounded-lg p-6">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Films récents
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• "Her" - Intelligence artificielle et amour</li>
              <li>• "Gattaca" - Génétique et déterminisme</li>
              <li>• "Minority Report" - Libre arbitre et destin</li>
              <li>• "Eternal Sunshine" - Mémoire et identité</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Prochaine séance
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Découvrez notre programmation mensuelle et réservez votre place
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Voir la programmation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CinePhilo;