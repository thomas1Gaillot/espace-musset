import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/data/route";
import Link from "next/link";

export default function EcologiePage() {
  const subpages = [
    {
      title: "Ateliers écologiques",
      description: "Apprenez les gestes du quotidien pour réduire votre impact environnemental",
      link: ROUTES.ECOLOGIE.SUBPAGES.ATELIERS,
      icon: "🌱"
    },
    {
      title: "Jardinage urbain",
      description: "Découvrez comment cultiver en ville et créer votre propre jardin",
      link: ROUTES.ECOLOGIE.SUBPAGES.JARDINAGE,
      icon: "🌿"
    },
    {
      title: "Zéro déchet",
      description: "Adoptez un mode de vie durable et réduisez vos déchets",
      link: ROUTES.ECOLOGIE.SUBPAGES.ZERO_DECHET,
      icon: "♻️"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={ROUTES.ACCUEIL}>
                Accueil
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              Ecologie
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Écologie
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sensibilisation environnementale, actions concrètes et partage de solutions
            durables pour construire ensemble un avenir plus respectueux de notre planète.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Image principale */}
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Nature et écologie"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Agir ensemble pour l'environnement
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                L'écologie à l'Espace Musset va au-delà de la simple sensibilisation.
                Nous proposons des ateliers pratiques, des initiations au jardinage urbain
                et des solutions concrètes pour adopter un mode de vie plus durable.
              </p>
              <p>
                Notre approche privilégie l'action collective et l'entraide. Ensemble,
                nous explorons des alternatives écologiques accessibles et partageons
                nos expériences pour créer une communauté engagée.
              </p>
              <p>
                Que vous soyez débutant ou déjà sensibilisé aux questions environnementales,
                vous trouverez ici un espace d'apprentissage et d'échange bienveillant.
              </p>
            </div>
          </div>
        </div>

        {/* Sous-pages */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-semibold text-center text-foreground mb-8">
            Nos activités écologiques
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {subpages.map((page, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="text-4xl mb-2">{page.icon}</div>
                  <CardTitle className="font-serif text-xl">{page.title}</CardTitle>
                  <CardDescription>{page.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={page.link}>En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Valeurs écologiques */}
        <div className="bg-sage-50/50 rounded-lg p-8 mb-12">
          <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-6">
            Nos engagements écologiques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Consommation responsable</h3>
              <p className="text-sm text-muted-foreground">Produits locaux et équitables</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Réduction des déchets</h3>
              <p className="text-sm text-muted-foreground">Zéro déchet et compostage</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Énergie verte</h3>
              <p className="text-sm text-muted-foreground">Sources renouvelables</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Mobilité douce</h3>
              <p className="text-sm text-muted-foreground">Vélo et transports partagés</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Participez à notre démarche écologique
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Rejoignez nos ateliers et initiatives pour agir concrètement en faveur de l'environnement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Participer aux ateliers
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={ROUTES.CONTACT}>Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
