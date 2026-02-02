"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ROUTES } from "@/data/route";
import {
  Accessibility,
  AirVentIcon,
  Armchair,
  Bird,
  Brackets,
  Brush,
  Coffee,
  CookingPot,
  Drama,
  GlassWater,
  Lightbulb,
  MicIcon,
  Minus,
  MoveDiagonal2,
  PencilRuler,
  PianoIcon,
  Projector,
  Scroll,
  Snowflake,
  SpeakerIcon,
  SquareDashed,
  SquareMenu,
  Sun,
  Theater,
  TreeDeciduous,
  Wifi,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MiseADispositionPage() {
  const salles = [
    {
      id: "salle-des-muses",
      name: "Salle des muses",
      capacity: "42m² - 24-50 personnes selon disposition",
      features: [
        { title: "Vidéoprojecteur", Icon: Projector },
        { title: "WiFi", Icon: Wifi },
        { title: "Toilettes PMR", Icon: Accessibility },
        { title: "Éclairage avec variateurs et tonalités", Icon: Lightbulb },
        { title: "Climatisation", Icon: Snowflake },
        { title: "Lumière du jour", Icon: Sun },
        { title: "Micro", Icon: MicIcon },
        { title: "Plancher chêne", Icon: TreeDeciduous },
        { title: "Calme", Icon: Bird },
        { title: "Table et chaises", Icon: Armchair },
        { title: "Paperboard et feutres", Icon: Scroll },
        { title: "Verres et carafes d'eau", Icon: GlassWater },
        { title: "Tapis de Yoga et coussins de méditation", Icon: Minus },
      ],
      activity: [
        { title: "Séminaire", Icon: PencilRuler },
        { title: "Yoga", Icon: AirVentIcon },
        { title: "Conférences", Icon: SpeakerIcon },
        { title: "Piano", Icon: PianoIcon },
        { title: "Art", Icon: Brush },
        { title: "Evènements", Icon: Drama },
      ],
      prices: [" 1/2 Journée - 120 €", " Journée - 200 €", " Horaire - 50 €/h"],
      pricesWeekEnd: [" 1/2 Journée - 140 €", " Journée - 240 €", " Horaire - 60 €/h"],
      contactForPrice: false,
      showDispositions: true,
    },

    {
      id: "cafe-doc",
      name: "Le café d'Oc",
      capacity: "28m² - 25 personnes en mode conférence",
      features: [
        { title: "WiFi", Icon: Wifi },
        { title: "Toilettes PMR", Icon: Accessibility },
        { title: "Lumière du jour", Icon: Sun },
        { title: "Calme", Icon: Bird },
        { title: "Café, Thé", Icon: Coffee },
      ],
      activity: [
        { title: "Conférences", Icon: SpeakerIcon },
        { title: "Ateliers", Icon: PencilRuler },
        { title: "Evènements", Icon: Drama },
        { title: "Art", Icon: Brush },
        { title: "Séminaire", Icon: PencilRuler },
      ],
      prices: [" Journée - 100 €", " 1/2 Journée - 60 €", " Horaire - 30 €/h"],
      pricesWeekEnd: [" Journée - 120 €", " 1/2 Journée - 75 €", " Horaire - 40 €/h"],
      contactForPrice: false,
      showDispositions: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <Breadcrumb className="py-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={ROUTES.ACCUEIL}>Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>Mise à disposition de salles</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero */}
        <div className="text-center py-12 mb-10">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            Mise à disposition de salles
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Des espaces pensés pour
            <br />
            vos événements
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl px-4 mx-auto leading-relaxed">
            Nous mettons à disposition nos espaces chaleureux et modulables pour vos événements,
            formations, réunions ou célébrations.
          </p>
        </div>

        {/* Description générale */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
              <h2 className="font-serif text-3xl font-bold text-foreground">La salle des muses</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  L'Espace Musset met à disposition ses différentes salles pour accueillir vos
                  projets associatifs, professionnels ou personnels. Nos espaces reflètent nos
                  valeurs d'ouverture et de bienveillance.
                </p>
                <p>
                  Que ce soit pour une conférence, un atelier, une formation ou une célébration,
                  nous vous proposons des environnements adaptés et équipés selon vos besoins.
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-sm font-medium text-foreground">
                  Nos tarifs préférentiels pour les associations et les projets à vocation sociale
                  témoignent de notre engagement communautaire.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <CarouselSalleDesMuses />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <CarouselCafeDoc />

            <div className="flex flex-col justify-center space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">Le café d'Oc</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Un espace chaleureux et convivial au coeur de l'Espace Musset, idéal pour vos
                  conférences et ateliers dans une ambiance café.
                </p>
                <p>
                  Avec ses 28m² et une capacité de 25 personnes en mode conférence, le café d'Oc
                  offre un cadre intimiste parfait pour des échanges de qualité, comme nos célèbres
                  Cafés Philo.
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-sm font-medium text-foreground">
                  Nos tarifs préférentiels pour les associations et les projets à vocation sociale
                  témoignent de notre engagement communautaire.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Avantages clés */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 mb-4 md:mb-5">
              <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h3 className="font-serif text-lg md:text-xl font-bold mb-3">Équipements modernes</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Vidéoprojecteur, WiFi, climatisation, éclairage modulable et bien plus
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 mb-4 md:mb-5">
              <MoveDiagonal2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h3 className="font-serif text-lg md:text-xl font-bold mb-3">Espaces modulables</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Configuration adaptable : conférence, U, classe, ou espace libre
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 mb-4 md:mb-5">
              <Accessibility className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h3 className="font-serif text-lg md:text-xl font-bold mb-3">Accessibilité PMR</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Espaces accessibles avec toilettes PMR pour tous vos participants
            </p>
          </div>
        </div>

        {/* Nos salles */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Nos espaces disponibles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos salles équipées et modulables, adaptées à tous vos événements
              professionnels et personnels
            </p>
          </div>

          <div className="max-w-6xl flex flex-col gap-12 mx-auto">
            {salles.map((salle, index) => (
              <Card key={index} className="overflow-hidden border-2 shadow-lg">
                <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10 pb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                    <div className="flex-1">
                      <CardTitle className="font-serif text-3xl font-bold mb-2">
                        {salle.name}
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {salle.capacity}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8 space-y-8">
                  {/* Activités */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground flex items-center gap-2">
                      <Drama className="w-6 h-6 text-primary" />
                      Activités possibles
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {salle.activity.map((a, idx) => (
                        <div
                          key={idx}
                          className="px-5 py-3 flex items-center gap-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-semibold"
                        >
                          <a.Icon strokeWidth={1.5} className="size-5" />
                          {a.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tarifs */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground">Tarifs</h3>
                    {salle.contactForPrice ? (
                      <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-6 text-center">
                        <p className="text-lg font-semibold text-foreground mb-2">Nous contacter</p>
                        <p className="text-muted-foreground text-sm">
                          Pour connaître nos tarifs et disponibilités, n'hésitez pas à nous
                          contacter
                        </p>
                        <Button variant="outline" size="sm" className="mt-4" asChild>
                          <Link href="/contact">Demander un devis</Link>
                        </Button>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Tarif Semaine */}
                        <div className="bg-white border-2 rounded-lg overflow-hidden">
                          <div className="bg-primary text-primary-foreground px-4 py-3 text-center">
                            <h4 className="font-bold text-lg">Tarif Semaine</h4>
                            <p className="text-xs opacity-90">Lundi au Vendredi</p>
                          </div>
                          <div className="p-6 space-y-3">
                            {salle.prices?.map((p, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                              >
                                <span className="font-medium text-muted-foreground">
                                  {p.split(" - ")[0].trim()}
                                </span>
                                <span className="font-bold text-xl text-foreground">
                                  {p.split(" - ")[1].trim()}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tarif Week-End */}
                        <div className="bg-white border-2 rounded-lg overflow-hidden">
                          <div className="bg-secondary text-secondary-foreground px-4 py-3 text-center">
                            <h4 className="font-bold text-lg">Tarif Week-End</h4>
                            <p className="text-xs opacity-90">Samedi et Dimanche</p>
                          </div>
                          <div className="p-6 space-y-3">
                            {salle.pricesWeekEnd?.map((p, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                              >
                                <span className="font-medium text-muted-foreground">
                                  {p.split(" - ")[0].trim()}
                                </span>
                                <span className="font-bold text-xl text-foreground">
                                  {p.split(" - ")[1].trim()}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Équipements */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      Équipements inclus
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {salle.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-3 flex items-center gap-2 rounded-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium"
                        >
                          <feature.Icon
                            strokeWidth={1.5}
                            className="size-5 text-primary flex-shrink-0"
                          />
                          <span className="text-xs leading-tight">{feature.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dispositions */}
                  {salle.showDispositions && (
                    <div className="space-y-4">
                      <h3 className="font-serif text-2xl font-semibold text-foreground">
                        Dispositions possibles
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="px-4 py-3 flex items-center gap-3 rounded-lg border-2 border-gray-200 hover:border-primary/40 hover:bg-primary/5 transition-all">
                          <SquareDashed
                            strokeWidth={1.5}
                            className="size-6 text-primary flex-shrink-0"
                          />
                          <div className="text-sm">
                            <p className="font-semibold">Espace vide</p>
                            <p className="text-xs text-muted-foreground">Configuration libre</p>
                          </div>
                        </div>
                        <div className="px-4 py-3 flex items-center gap-3 rounded-lg border-2 border-gray-200 hover:border-primary/40 hover:bg-primary/5 transition-all">
                          <Theater
                            strokeWidth={1.5}
                            className="size-6 text-primary flex-shrink-0"
                          />
                          <div className="text-sm">
                            <p className="font-semibold">Conférence</p>
                            <p className="text-xs text-muted-foreground">Jusqu'à 50 personnes</p>
                          </div>
                        </div>
                        <div className="px-4 py-3 flex items-center gap-3 rounded-lg border-2 border-gray-200 hover:border-primary/40 hover:bg-primary/5 transition-all">
                          <Brackets
                            strokeWidth={1.5}
                            className="size-6 text-primary flex-shrink-0"
                          />
                          <div className="text-sm">
                            <p className="font-semibold">En U</p>
                            <p className="text-xs text-muted-foreground">10 à 24 personnes</p>
                          </div>
                        </div>
                        <div className="px-4 py-3 flex items-center gap-3 rounded-lg border-2 border-gray-200 hover:border-primary/40 hover:bg-primary/5 transition-all">
                          <SquareMenu
                            strokeWidth={1.5}
                            className="size-6 text-primary flex-shrink-0"
                          />
                          <div className="text-sm">
                            <p className="font-semibold">Salle de classe</p>
                            <p className="text-xs text-muted-foreground">12 à 24 personnes</p>
                          </div>
                        </div>
                        <div className="px-4 py-3 flex items-center gap-3 rounded-lg border-2 border-gray-200 hover:border-primary/40 hover:bg-primary/5 transition-all">
                          <MoveDiagonal2
                            strokeWidth={1.5}
                            className="size-6 text-primary flex-shrink-0"
                          />
                          <div className="text-sm">
                            <p className="font-semibold">En épis</p>
                            <p className="text-xs text-muted-foreground">12 à 21 personnes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Processus de réservation */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 mb-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Comment réserver ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un processus simple et rapide pour réserver votre espace
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Contactez-nous</h3>
              <p className="text-muted-foreground text-sm">
                Par téléphone ou par mail, partagez-nous votre projet et vos besoins
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Visite & Devis</h3>
              <p className="text-muted-foreground text-sm">
                Visitez nos espaces et recevez un devis personnalisé adapté à votre événement
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Réservation</h3>
              <p className="text-muted-foreground text-sm">
                Validation de votre réservation et préparation de la salle selon vos souhaits
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Prêt à réserver votre espace ? Contactez-nous dès maintenant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant={"outline"} size="lg" className="text-base" asChild>
                <a href="tel:+33621799750">
                  <MicIcon className="w-5 h-5 mr-2" />
                  Appeler Anne-Marie
                </a>
              </Button>
              <span className="text-muted-foreground font-medium">ou</span>
              <Button size="lg" className="text-base" asChild>
                <Link href="contact">Nous contacter par mail</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Informations complémentaires */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Tarifs préférentiels</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nous proposons des tarifs avantageux pour les associations et les projets à vocation
                sociale. N'hésitez pas à nous contacter pour en savoir plus sur nos conditions
                spéciales.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Informations pratiques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Parking disponible à proximité. Accès PMR. Cuisine et espace détente accessibles
                selon les formules. Possibilité de restauration sur demande.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CarouselCafeDoc() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const images = [
    {
      src: "/mise-a-disposition/cafe_oc.jpeg",
      title: "Le café d'Oc",
      config: "Bar",
      capacity: "18 couverts",
      icon: Coffee,
    },
    {
      src: "/mise-a-disposition/cafe_classe.jpeg",
      title: "Le café d'Oc",
      config: "Classe",
      capacity: "12 personnes",
      icon: SquareMenu,
    },
    {
      src: "/mise-a-disposition/cafe_conf.jpeg",
      title: "Le café d'Oc",
      config: "Conférence",
      capacity: "25 personnes",
      icon: Theater,
    },
    {
      src: "/mise-a-disposition/cafe_U.jpeg",
      title: "Le café d'Oc",
      config: "En Bloc",
      capacity: "12 personnes",
      icon: Brackets,
    },
    {
      src: "/mise-a-disposition/cafe_U2.jpeg",
      title: "Le café d'Oc",
      config: "En Bloc",
      capacity: "12 personnes",
      icon: Brackets,
    },
  ];

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto w-full relative rounded-sm overflow-hidden shadow-xl mt-6">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <div className="aspect-[4/3] w-full relative group">
                <img
                  src={image.src}
                  alt={`${image.title} - ${image.config}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Légende en overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex-shrink-0">
                      <image.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-lg sm:text-2xl font-bold mb-1 truncate">
                        {image.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                        <span className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full font-medium">
                          {image.config}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="hidden sm:inline">•</span>
                          <span className="font-medium">{image.capacity}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Boutons de navigation - cachés sur mobile, visibles sur desktop */}
        <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hidden sm:flex" />
        <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hidden sm:flex" />
      </Carousel>

      {/* Indicateurs de pagination */}
      <div className="bg-white px-4 py-2 sm:py-3">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === current - 1 ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Aller à l'image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CarouselSalleDesMuses() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const images = [
    {
      src: "/salle-des-muses-3.jpg",
      title: "Salle des muses",
      config: "en U",
      capacity: "24 personnes",
      icon: Brackets,
    },
    {
      src: "/salle-des-muses.jpg",
      title: "Salle des muses",
      config: "Conférence",
      capacity: "50 personnes",
      icon: Theater,
    },
    {
      src: "/salle-des-muses-2.jpg",
      title: "Salle des muses",
      config: "Classe",
      capacity: "24 personnes",
      icon: SquareMenu,
    },
  ];

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto w-full relative rounded-sm overflow-hidden shadow-xl">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <div className="aspect-[4/3] w-full relative group">
                <img
                  src={image.src}
                  alt={`${image.title} - ${image.config}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Légende en overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex-shrink-0">
                      <image.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-lg sm:text-2xl font-bold mb-1 truncate">
                        {image.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                        <span className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full font-medium">
                          {image.config}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="hidden sm:inline">•</span>
                          <span className="font-medium">{image.capacity}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Boutons de navigation - cachés sur mobile, visibles sur desktop */}
        <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hidden sm:flex" />
        <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hidden sm:flex" />
      </Carousel>

      {/* Indicateurs de pagination */}
      <div className="bg-white px-4 py-2 sm:py-3">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === current - 1 ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Aller à l'image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
