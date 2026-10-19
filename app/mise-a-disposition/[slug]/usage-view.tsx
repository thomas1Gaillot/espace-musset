import { JsonLd } from "@/components/json-ld";
import { FaqList } from "@/components/salles/faq-list";
import { ReservationCta } from "@/components/salles/reservation-cta";
import { TarifsGrid } from "@/components/salles/salle-card";
import { UsagesGrid } from "@/components/salles/usages-grid";
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
import { type Usage, usagePath } from "@/data/salles-usages.data";
import { type Salle, salleById, sallePath } from "@/data/salles.data";
import { breadcrumbJsonLd, faqJsonLd, locationServiceJsonLd } from "@/lib/salles-jsonld";
import { SITE } from "@/lib/site";
import { ArrowRight, Check, Phone } from "lucide-react";
import Link from "next/link";

export function UsageView({ usage }: { usage: Usage }) {
  const path = usagePath(usage);

  // Configurations recommandées, avec la salle et la capacité correspondantes
  const configurations = usage.configurations.flatMap((c) => {
    const salle = salleById(c.salleId);
    const disposition = salle?.dispositions.find((d) => d.name === c.disposition);
    return salle && disposition ? [{ salle, disposition }] : [];
  });
  const salles = [...new Map(configurations.map(({ salle }) => [salle.id, salle])).values()];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      locationServiceJsonLd({
        id: "service",
        name: usage.title,
        serviceType: `Location de salle – ${usage.label}`,
        description: usage.intro.join(" "),
        path,
        salles,
      }),
      faqJsonLd(usage.faq),
      breadcrumbJsonLd([
        { name: "Accueil", path: ROUTES.ACCUEIL },
        { name: "Mise à disposition de salles", path: ROUTES.MISE_A_DISPOSITION },
        { name: usage.label, path },
      ]),
    ],
  };

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
              <BreadcrumbPage>{usage.label}</BreadcrumbPage>
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
              {usage.h1}
            </h1>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              {usage.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
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
          </div>
          <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
            <img src={usage.image} alt={usage.imageAlt} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Configurations recommandées */}
        <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Configurations recommandées
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {configurations.map(({ salle, disposition }) => (
              <Link
                key={`${salle.id}-${disposition.name}`}
                href={sallePath(salle)}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] flex items-start gap-4 bg-white rounded-xl border-2 border-gray-100 p-5 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <disposition.Icon strokeWidth={1.5} className="size-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg font-bold">{salle.name}</h3>
                  <p className="font-semibold text-sm">{disposition.name}</p>
                  <p className="text-sm text-muted-foreground">{disposition.capacity}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Atouts */}
        <section className="mb-20 max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Ce qui est prévu pour vous
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {usage.atouts.map((atout) => (
              <li
                key={atout}
                className="flex items-center gap-3 rounded-lg border-2 border-primary/20 px-4 py-3 text-sm font-medium"
              >
                <Check className="size-5 text-primary flex-shrink-0" />
                {atout}
              </li>
            ))}
          </ul>
        </section>

        {/* Tarifs */}
        <section className="mb-20 max-w-6xl mx-auto space-y-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center">
            Tarifs
          </h2>
          {salles.map((salle: Salle) => (
            <div key={salle.id} className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                <Link href={sallePath(salle)} className="hover:underline">
                  {salle.name}
                </Link>{" "}
                <span className="text-base font-sans font-normal text-muted-foreground">
                  ({salle.surface} m², jusqu'à {salle.maxCapacity} personnes)
                </span>
              </h3>
              <TarifsGrid salle={salle} />
            </div>
          ))}
          <p className="text-center text-muted-foreground">
            Devis personnalisé sur demande. Horaires flexibles : on s'adapte à votre projet !
          </p>
        </section>

        {/* Activités déjà accueillies */}
        {usage.references && usage.references.length > 0 && (
          <section className="mb-20 max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Déjà accueilli à l'Espace Musset
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {usage.references.map((ref) => (
                <Button key={ref.href} variant="outline" asChild>
                  <Link href={ref.href}>
                    {ref.label} <ArrowRight className="size-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </section>
        )}

        <FaqList items={usage.faq} />

        <ReservationCta />

        {/* Autres usages */}
        <section className="mb-24">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
            Autres usages
          </h2>
          <UsagesGrid exclude={usage.slug} className="lg:grid-cols-3 max-w-5xl mx-auto" />
        </section>
      </div>
    </div>
  );
}
