'use client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import React from "react";

export default function LocationSallesPage() {
  const salles = [
    {
      name: "Salle de réunion, ateliers, conférences",
      capacity: "42m² - 24-60 personnes selon disposition",
      features: ["Vidéoprojecteur", "WiFi", "toilettes PMR", "Eclairage avec variateurs et tonalités", "Climatisation", "lumière du jour"],
      prices: ["Tarif 1/2 Journée - dès 140 € HT", "Tarif Journée - dès 240 € HT", "Tarif Soirée - dès 140 € HT"]
    },
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
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-serif text-xl font-bold">{salle.name}</CardTitle>
                      <CardDescription className="text-sm font-medium text-primary">
                        {salle.capacity}
                      </CardDescription>
                    </div>
                    <div className="grid text-right text-sm">
                      {salle.prices.map(p =>
                        <p className="font-semibold text-foreground">{p}</p>
                      )}
                    </div>

                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Équipements inclus :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {salle.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
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
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.kactus.com/fr/lieux/espace-musset" target="_blank" rel="noopener noreferrer">
                Réserver sur Kaktus
              </a>
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