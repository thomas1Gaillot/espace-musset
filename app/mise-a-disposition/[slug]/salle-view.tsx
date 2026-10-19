import { JsonLd } from "@/components/json-ld";
import { ReservationCta } from "@/components/salles/reservation-cta";
import { SalleCard } from "@/components/salles/salle-card";
import { SalleCarousel } from "@/components/salles/salle-carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/route";
import { usagePath, usagesForSalle } from "@/data/salles-usages.data";
import { SALLES, type Salle, prixHoraire, sallePath } from "@/data/salles.data";
import { breadcrumbJsonLd, locationServiceJsonLd, meetingRoomJsonLd } from "@/lib/salles-jsonld";
import { SITE } from "@/lib/site";
import { ArrowRight, Clock, MapPin, Phone, Users } from "lucide-react";
import Link from "next/link";

export function SalleView({ salle }: { salle: Salle }) {
  const path = sallePath(salle);
  const usages = usagesForSalle(salle.id);
  const autresSalles = SALLES.filter((s) => s.id !== salle.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      meetingRoomJsonLd(salle),
      locationServiceJsonLd({
        id: "location",
        name: `Location de ${salle.nameWithArticle} à Toulouse`,
        serviceType: "Location de salle",
        description: salle.description,
        path,
        salles: [salle],
      }),
      breadcrumbJsonLd([
        { name: "Accueil", path: ROUTES.ACCUEIL },
        { name: "Mise à disposition de salles", path: ROUTES.MISE_A_DISPOSITION },
        { name: salle.name, path },
      ]),
    ],
  };

  const infos = [
    { Icon: Users, text: `${salle.surface} m², jusqu'à ${salle.maxCapacity} personnes` },
    { Icon: MapPin, text: `${SITE.address.street}, ${SITE.address.city} – ${SITE.transport}` },
    { Icon: Clock, text: "Horaires flexibles, en semaine comme le week-end" },
  ];

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
            <BreadcrumbItem>
              <BreadcrumbLink href={ROUTES.MISE_A_DISPOSITION}>
                Mise à disposition de salles
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{salle.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center py-8 mb-16">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary">
              Location de salle · Toulouse Minimes
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {salle.name}, salle de {salle.surface} m² à louer à Toulouse
            </h1>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              {salle.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="space-y-2">
              {infos.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-foreground">
                  <Icon className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <a href={`tel:${SITE.phone}`}>
                  <Phone className="size-5" /> Réserver : {SITE.phoneDisplay}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={ROUTES.CONTACT}>Demander un devis</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              À partir de {prixHoraire(salle)} €/h en semaine. Devis personnalisé sur demande.
            </p>
          </div>
          <SalleCarousel salleId={salle.id} />
        </div>

        {/* Fiche complète */}
        <div className="max-w-6xl mx-auto mb-24">
          <SalleCard salle={salle} />
        </div>

        {/* Usages recommandés */}
        {usages.length > 0 && (
          <div className="mb-24">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              {salle.name} : idéale pour
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {usages.map((usage) => {
                const configs = usage.configurations.filter((c) => c.salleId === salle.id);
                return (
                  <Link
                    key={usage.slug}
                    href={usagePath(usage)}
                    className="group bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                  >
                    <h3 className="font-serif text-xl font-bold mb-2">{usage.label}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {configs
                        .map((c) => {
                          const d = salle.dispositions.find((d) => d.name === c.disposition);
                          return d ? `${d.name} : ${d.capacity.toLowerCase()}` : c.disposition;
                        })
                        .join(" · ")}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      En savoir plus <ArrowRight className="size-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <ReservationCta />

        {/* Autres salles */}
        <div className="text-center mb-24">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Découvrez aussi</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {autresSalles.map((s) => (
              <Button key={s.id} variant="outline" asChild>
                <Link href={sallePath(s)}>
                  {s.name} – {s.surface} m² <ArrowRight className="size-4" />
                </Link>
              </Button>
            ))}
            <Button variant="ghost" asChild>
              <Link href={ROUTES.MISE_A_DISPOSITION}>Toutes nos salles</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
