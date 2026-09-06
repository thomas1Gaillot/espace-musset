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

export default function ActivitesPage() {
  const activitesEvents = eventList.filter(
    (e) =>
      e.type.name === "Chant" ||
      e.type.name === "Clown Socratique" ||
      e.type.name === "Ecriture spontanée" ||
      e.type.name === "Mercredi Montessori" ||
      e.type.name === "Théâtre d'improvisation" ||
      e.type.name === "Psychophonie"
  );
  const subpages = [
    {
      title: "Chant",
      description: "Venez explorer votre voix et vivre le bonheur de chanter ensemble !",
      link: ROUTES.ACTIVITES.SUBPAGES.CHANT,
      icon: "🎤",
    },
    {
      title: "Clown Socratiques",
      description:
        "Cet atelier à pour but de vous faire découvrir le clown en vous amusant, en osant et en apprenant à se connaître.",
      link: ROUTES.ACTIVITES.SUBPAGES.CLOWN,
      icon: "🤡🏛️",
    },
    {
      title: "Ecriture spontanée",
      description: "L'atelier d'écriture spontanée qui réveille votre créativité !",
      link: ROUTES.ACTIVITES.SUBPAGES.ECRITURE_SPONTANEE,
      icon: "✍️💭",
    },
    {
      title: "Mercredi Montessori",
      description: "Avec votre enfant, venez découvrir la méthode Montessori.",
      link: ROUTES.ACTIVITES.SUBPAGES.MONTESSORI,
      icon: "👪",
    },
    {
      title: "Théatre d'improvisation",
      description:
        "Explorez votre créativité et votre expressivité à travers l'improvisation et le jeu théâtral dans un cadre ludique et bienveillant.",
      link: ROUTES.ACTIVITES.SUBPAGES.THEATRE,
      icon: "🎭",
    },
    {
      title: "Psychophonie",
      description: "Venez découvrir votre voix et votre corps-instrument !",
      link: ROUTES.ACTIVITES.SUBPAGES.PSYCHOPHONIE,
      icon: "🎶",
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
            <BreadcrumbItem>Activités et Art</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Activités et Arts
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
          <EventList data={activitesEvents} title="Nos prochains évènements" />
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link href={ROUTES.CONTACT}>Rendez-nous visite :)</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
