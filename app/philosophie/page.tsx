import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PhilosophiePage() {
  const subpages = [
    {
      title: "Ateliers hebdos",
      description: "Rencontres philosophiques régulières pour explorer les grandes questions existentielles",
      link: "/philosophie/atelier-hebdos",
      icon: "📚"
    },
    {
      title: "Cafés philo",
      description: "Discussions informelles autour d'un café sur les sujets qui nous interrogent",
      link: "/philosophie/cafes-philo",
      icon: "☕"
    },
    {
      title: "Ciné philo",
      description: "Projections de films suivies de débats philosophiques enrichissants",
      link: "/philosophie/cine-philo",
      icon: "🎬"
    },
    {
      title: "Conférences",
      description: "Interventions d'experts et penseurs sur des thématiques philosophiques actuelles",
      link: "/philosophie/conferences",
      icon: "🎤"
    }
  ];

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
              Philosophie
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Philosophie
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un espace de réflexion et de dialogue pour explorer ensemble les grandes questions
            de l'existence, développer notre pensée critique et nourrir notre sagesse collective.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Image principale */}
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
              alt="Réflexion philosophique"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              La philosophie accessible à tous
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                À l'Espace Musset, la philosophie n'est pas une discipline réservée aux érudits.
                C'est un art de vivre et de penser que nous pratiquons ensemble, dans un esprit
                d'ouverture et de bienveillance.
              </p>
              <p>
                Nos activités philosophiques s'adressent à tous, quel que soit votre niveau.
                L'important n'est pas d'avoir des réponses, mais de savoir poser les bonnes
                questions et d'être prêt à les explorer avec curiosité.
              </p>
              <p>
                Nous créons un espace de parole libre où chacun peut exprimer ses idées,
                ses doutes et ses interrogations dans le respect mutuel et l'écoute active.
              </p>
            </div>
          </div>
        </div>

        {/* Sous-pages */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-semibold text-center text-foreground mb-8">
            Nos activités philosophiques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subpages.map((page, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="text-4xl mb-2">{page.icon}</div>
                  <CardTitle className="font-serif text-lg">{page.title}</CardTitle>
                  <CardDescription className="text-sm">{page.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={page.link}>Découvrir</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Approche philosophique */}
        <div className="bg-earth-50/50 rounded-lg p-8 mb-12">
          <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-6">
            Notre approche
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Dialogue socratique</h3>
              <p className="text-sm text-muted-foreground">
                Questionnement mutuel pour approfondir la réflexion
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Pensée critique</h3>
              <p className="text-sm text-muted-foreground">
                Développement de l'esprit d'analyse et de discernement
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Sagesse pratique</h3>
              <p className="text-sm text-muted-foreground">
                Application concrète des réflexions dans la vie quotidienne
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Rejoignez nos réflexions philosophiques
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Que vous soyez novice ou passionné, venez explorer avec nous les questions
            fondamentales de l'existence humaine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Découvrir les ateliers
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};