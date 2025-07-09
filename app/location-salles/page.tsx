'use client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ROUTES } from "@/data/route";
import { Accessibility, AirVentIcon, Lightbulb, MicIcon, PianoIcon, Projector, Snowflake, SpeakerIcon, Sun, Wifi } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LocationSallesPage() {
  const salles = [
    {
      name: "Salle des muses",
      capacity: "42m² - 24-60 personnes selon disposition",
      features: [
        { title: "Vidéoprojecteur", Icon: Projector },
        { title: "WiFi", Icon: Wifi },
        { title: "Toilettes PMR", Icon: Accessibility },
        { title: "Éclairage avec variateurs et tonalités", Icon: Lightbulb },
        { title: "Climatisation", Icon: Snowflake },
        { title: "Lumière du jour", Icon: Sun },
        { title: "Micro", Icon: MicIcon }
      ],
      activity: [
        { title: "Yoga", Icon: AirVentIcon },
        { title: "Conférences", Icon: SpeakerIcon },
        { title: "Piano", Icon: PianoIcon },
      ],
      prices: ["Tarif 1/2 Journée - dès XXX € TTC", "Tarif Journée - dès XXX € TTC", "Tarif Soirée - dès XXX € TTC"]
    },
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
              Location de salles
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Location de Salles
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Louez nos espaces chaleureux et modulables pour vos événements, formations,
            réunions ou célébrations. Des lieux inspirants qui reflètent nos valeurs
            de convivialité et de partage.
          </p>
        </div>

        {/* Description générale */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <CarouselSalleDesMuses />

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Des espaces à votre image
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                L'Espace Musset met à disposition ses différentes salles pour accueillir
                vos projets associatifs, professionnels ou personnels. Nos espaces
                reflètent nos valeurs d'ouverture et de bienveillance.
              </p>
              <p>
                Que ce soit pour une conférence, un atelier, une formation ou une
                célébration, nous vous proposons des environnements adaptés et
                équipés selon vos besoins.
              </p>
              <p>
                Nos tarifs préférentiels pour les associations et les projets à
                vocation sociale témoignent de notre engagement communautaire.
              </p>
            </div>
          </div>
        </div>

        {/* Nos salles */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-semibold text-center text-foreground mb-8">
            Nos espaces disponibles
          </h2>
          <div className="grid md:grid-cols-2 gap-6 ">
            {salles.map((salle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white border-none">
                <CardHeader>
                  <div className="flex flex-col gap-4 sm:flex-row justify-between items-start">
                    <div>
                      <CardTitle className="font-serif text-xl font-bold">{salle.name}</CardTitle>
                      <CardDescription className="text-xs font-medium text-primary/60">
                        {salle.capacity}
                      </CardDescription>
                    </div>
                    <div className="grid text-left sm:text-right text-sm">
                      {salle.prices.map((p, index) =>
                        <p key={p + index} className="font-light text-foreground">{p}</p>
                      )}
                    </div>

                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-foreground">Activités possibles</h4>
                    <div className="text-xs font-semibold leading-tight flex flex-wrap gap-2">
                      {salle.activity.map((a, idx) => (
                        <div key={idx} className="px-4 py-2 flex items-center rounded-md  bg-primary/10">
                          <a.Icon strokeWidth={1.25} className="size-6 mr-2" />
                          {a.title}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground ">Équipements inclus :</h4>
                    <div className="text-xs font-semibold leading-tight flex flex-wrap gap-2">
                      {salle.features.map((feature, idx) => (
                        <div key={idx} className="px-4 py-2 flex items-center rounded-md border border-primary/20">
                          <feature.Icon strokeWidth={1.25} className="size-6 mr-2" />
                          {feature.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Comment réserver ?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Contactez-nous pour une visite ou un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href='contact'>
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


function CarouselSalleDesMuses() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const images = [
    "/salle-des-muses.jpg",
    "/salle-des-muses-2.jpg",
    "/salle-des-muses-3.jpg",
  ]

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

  }, [api])

  return (
    <div className="mx-auto max-w-3xl relative rounded-lg overflow-hidden h-80">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="relative w-full h-80">
              <img
                src={src}
                alt={`Image ${index + 1} - Espaces à louer`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-lg" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
  )
}