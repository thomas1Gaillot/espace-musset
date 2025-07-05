import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/data/route";
import Link from "next/link";

export default function ArtsCorpsPage() {
  const subpages = [
    {
      title: "Yoga",
      description: "Pratiques douces et dynamiques pour harmoniser corps et esprit",
      link: ROUTES.ARTS_DU_CORPS.SUBPAGES.YOGA,
      icon: "🧘"
    },
    {
      title: "Danse",
      description: "Expression corporelle libre et créative pour tous niveaux",
      link: ROUTES.ARTS_DU_CORPS.SUBPAGES.DANSE,
      icon: "💃"
    },
    {
      title: "Théâtre",
      description: "Improvisation et jeu théâtral pour explorer sa créativité",
      link: ROUTES.ARTS_DU_CORPS.SUBPAGES.THEATRE,
      icon: "🎭"
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
              Arts du corps
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Arts du Corps
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explorez l'expression corporelle sous toutes ses formes : yoga, danse et théâtre
            pour reconnecter avec votre corps, libérer votre créativité et cultiver votre bien-être.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Image principale */}
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
              alt="Arts du corps et mouvement"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Le corps comme langage d'expression
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Les arts du corps à l'Espace Musset célèbrent la richesse de l'expression
                corporelle. Nous proposons des pratiques variées qui permettent à chacun
                de découvrir ou redécouvrir son rapport au mouvement et à la créativité.
              </p>
              <p>
                Nos activités s'adressent à tous, quel que soit votre niveau ou votre âge.
                Dans un environnement bienveillant et sans jugement, vous pourrez explorer
                de nouvelles formes d'expression et développer votre conscience corporelle.
              </p>
              <p>
                Que ce soit par le yoga, la danse ou le théâtre, nous cultivons l'écoute
                de soi, l'expression authentique et la joie du mouvement partagé.
              </p>
            </div>
          </div>
        </div>

        {/* Sous-pages */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-semibold text-center text-foreground mb-8">
            Nos disciplines
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {subpages.map((page, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="text-5xl mb-4">{page.icon}</div>
                  <CardTitle className="font-serif text-xl">{page.title}</CardTitle>
                  <CardDescription>{page.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={page.link}>Voir les cours</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bienfaits */}
        <div className="bg-warmBrown-50/30 rounded-lg p-8 mb-12">
          <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-6">
            Les bienfaits des arts du corps
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Bien-être physique</h3>
              <p className="text-sm text-muted-foreground">Souplesse, force et vitalité</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Équilibre mental</h3>
              <p className="text-sm text-muted-foreground">Relaxation et sérénité</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Expression créative</h3>
              <p className="text-sm text-muted-foreground">Libération artistique</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Lien social</h3>
              <p className="text-sm text-muted-foreground">Partage et bienveillance</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Explorez votre potentiel corporel
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Découvrez nos cours et ateliers pour tous niveaux dans une ambiance conviviale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Voir les cours
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={ROUTES.CONTACT}>Essayer gratuitement</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
