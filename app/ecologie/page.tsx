import EventList from "@/components/event-list";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { eventList } from "@/data/data.allevents";
import { ROUTES } from "@/data/route";
import Link from "next/link";

export default function EcologiePage() {
  const nextVolontariat = eventList.filter((e) => e.category.name === "Volontariat");

  const subpages = [
    {
      title: "Atelier récolte de mégots",
      description: "Prenons soin du parc des minimes en prenant soin de soi.",
      link: ROUTES.ECOLOGIE.SUBPAGES.ZERO_DECHET,
      icon: "♻️",
    },
    {
      title: "Maraude pour les sans-abris",
      description: "Participez à nos actions solidaires pour aider les personnes dans le besoin.",
      link: ROUTES.ECOLOGIE.SUBPAGES.MARAUDE,
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={ROUTES.ACCUEIL}>{"Accueil"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{"Écologie et volontariat"}</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {"Écologie & Volontariat"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {
              "Des actions concrètes et humaines pour préserver notre planète tout en prenant soin des autres."
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Image principale */}
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt={"Écologie et solidarité"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              {"Agir ensemble pour l’humain et la planète"}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {
                  "À l’Espace Musset, nous croyons que l’écologie et la solidarité vont de pair. Nos actions allient respect de l’environnement et soutien humain."
                }
              </p>
              <p>
                {
                  "Des ateliers zéro déchet aux maraudes solidaires, chaque initiative est une occasion de créer du lien, de partager et de faire une différence concrète."
                }
              </p>
              <p>
                {
                  "En participant, vous devenez acteur d’un changement collectif : celui d’un monde plus durable, plus juste et plus bienveillant."
                }
              </p>
            </div>
          </div>
        </div>

        {/* Sous-pages */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-semibold text-center text-foreground mb-8">
            {"Nos actions de volontariat"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {subpages.map((page, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="text-4xl mb-2">{page.icon}</div>
                  <CardTitle className="font-serif text-xl">{page.title}</CardTitle>
                  <CardDescription>{page.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={page.link}>{"Découvrir l’activité"}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div
          id="agenda"
          className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center"
        >
          <EventList data={nextVolontariat} title="Prochaines actions de volontariat" />
        </div>
        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            {"Envie d’agir avec nous ?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            {
              "Rejoignez nos ateliers, nos maraudes ou nos journées écologiques pour contribuer à un futur plus solidaire."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">{"Participer à une activité"}</Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={ROUTES.CONTACT}>{"Nous contacter"}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
