import { JsonLd } from "@/components/json-ld";
import { FaqList } from "@/components/salles/faq-list";
import { ReservationCta } from "@/components/salles/reservation-cta";
import { SalleCard } from "@/components/salles/salle-card";
import { SalleCarousel } from "@/components/salles/salle-carousel";
import { UsagesGrid } from "@/components/salles/usages-grid";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PAGES } from "@/data/pages.seo";
import { ROUTES } from "@/data/route";
import { SALLES, SALLES_FAQ, sallePath } from "@/data/salles.data";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  locationServiceJsonLd,
  meetingRoomJsonLd,
} from "@/lib/salles-jsonld";
import { pageMetadata } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Accessibility, ArrowRight, Lightbulb, MoveDiagonal2 } from "lucide-react";
import Link from "next/link";

const path = ROUTES.MISE_A_DISPOSITION;

export const metadata = pageMetadata(PAGES.MISE_A_DISPOSITION);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    locationServiceJsonLd({
      id: "service",
      name: "Location de salles à l'Espace Musset",
      serviceType: "Location de salle de réunion, de formation et d'événement",
      description:
        "Mise à disposition de salles modulables et équipées à Toulouse (quartier des Minimes) pour réunions, formations, séminaires, ateliers, conférences, yoga et événements associatifs ou professionnels.",
      path,
      salles: SALLES,
    }),
    ...SALLES.map(meetingRoomJsonLd),
    faqJsonLd(SALLES_FAQ),
    breadcrumbJsonLd([
      { name: "Accueil", path: ROUTES.ACCUEIL },
      { name: "Mise à disposition de salles", path },
    ]),
  ],
};

const AVANTAGES = [
  {
    title: "Équipements modernes",
    text: "WiFi, climatisation, éclairage modulable et bien plus (vidéoprojecteur disponible en option)",
    Icon: Lightbulb,
  },
  {
    title: "Espaces modulables",
    text: "Configuration adaptable : conférence, U, classe, ou espace libre",
    Icon: MoveDiagonal2,
  },
  {
    title: "Accessibilité PMR",
    text: "Espaces accessibles avec toilettes PMR pour tous vos participants",
    Icon: Accessibility,
  },
];

export default function MiseADispositionPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={jsonLd} />
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
            L'Espace Musset met à votre disposition des salles modulables et entièrement équipées,
            offrant un cadre soigné et confortable, idéal pour des échanges efficaces et
            constructifs.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl px-4 mx-auto leading-relaxed mt-4">
            Au cœur du quartier des Minimes, l'Espace Musset bénéficie d'un accès facile et d'un
            environnement calme, propice au travail collectif et aux échanges.
          </p>
        </div>

        {/* Description des salles */}
        <div className="mb-24 space-y-16">
          {SALLES.map((salle, index) => (
            <div key={salle.id} className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={cn(
                  "flex flex-col justify-center space-y-6 order-2",
                  index % 2 === 0 && "lg:order-1"
                )}
              >
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  {salle.name} – {salle.surface} m²
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {salle.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <Link
                  href={sallePath(salle)}
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                >
                  Découvrir {salle.nameWithArticle} <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Photos au-dessus du texte sur mobile, en alternance sur grand écran */}
              <div className={cn("order-1", index % 2 === 0 && "lg:order-2")}>
                <SalleCarousel salleId={salle.id} />
              </div>
            </div>
          ))}
        </div>

        {/* Avantages clés */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {AVANTAGES.map(({ title, text, Icon }) => (
            <div
              key={title}
              className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 mb-4 md:mb-5">
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Usages */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Une salle pour chaque usage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Formation, réunion, cours de yoga ou conférence : découvrez la configuration adaptée à
              votre projet
            </p>
          </div>
          <UsagesGrid />
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
            {SALLES.map((salle) => (
              <SalleCard key={salle.id} salle={salle} href={sallePath(salle)} />
            ))}
          </div>
        </div>

        <ReservationCta />

        {/* Informations complémentaires */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Contactez-nous</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Contactez-nous pour en savoir plus et découvrir nos offres adaptées à vos besoins.
              </p>
              <Button asChild>
                <Link href={ROUTES.CONTACT}>Nous contacter</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Informations pratiques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Horaires flexibles, en semaine comme le week-end : on s'adapte à votre projet.
                Parking disponible à proximité. Accès PMR. Cuisine et espace détente accessibles
                selon les formules. Possibilité de restauration sur demande.
              </p>
            </CardContent>
          </Card>
        </div>

        <FaqList items={SALLES_FAQ} />
      </div>
    </div>
  );
}
