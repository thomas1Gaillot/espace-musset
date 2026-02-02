import EventList from "@/components/event-list";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { eventList } from "@/data/data.allevents";
import { ROUTES } from "@/data/route";
import Link from "next/link";

export default function ArtsCorpsPage() {
  const artsDuCorpsEvents = eventList.filter(
    (e) =>
      e.category.name === "Arts" &&
      (e.type.name === "Qi Gong" ||
        e.type.name === "Méditation" ||
        e.type.name === "Yoga du rire")
  );
  const subpages = [
    {
      title: "Qi Gong",
      description:
        "Venez découvrir le Qi Gong et les arts Taoistes périphériques à cette pratique avec Martial Gontrand, enseignant en Qi Gong depuis 3 ans chez Leçon du Gong.",
      link: ROUTES.ARTS.SUBPAGES.QI_GONG,
      icon: "⛩️",
    },
    {
      title: "Méditation",
      description:
        "Cultivez la sérénité et gérez vos émotions lors de nos séances de méditation guidée, par Anne-Marie, sophrologue certifiée R.N.C.P.",
      link: ROUTES.ARTS.SUBPAGES.MEDITATION,
      icon: "🧘🏼",
    },
    {
      title: "Yoga Du Rire",
      description:
        "Dans le chaleureux quartier des Minimes, découvrez comment retrouver équilibre, vitalité et bonne humeur… grâce au Yoga du Rire.",
      link: ROUTES.ARTS.SUBPAGES.YOGA_DU_RIRE,
      icon: "😄",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={ROUTES.ACCUEIL}>Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>Arts du corps</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Arts du Corps
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explorez l'expression corporelle sous toutes ses formes pour reconnecter avec votre
            corps, libérer votre créativité et cultiver votre bien-être.
          </p>
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
                    <Link href={page.link}>Voir la page dédiée</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
          <EventList data={artsDuCorpsEvents} title="Nos prochains évènements d'arts du corps" />
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
            <Button size="lg">Voir les cours</Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={ROUTES.CONTACT}>Essayer gratuitement</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
