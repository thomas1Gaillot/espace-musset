import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type Salle, formatTarif } from "@/data/salles.data";
import { ArrowRight, Drama } from "lucide-react";
import Link from "next/link";

/** Tarifs semaine / week-end d'une salle */
export function TarifsGrid({ salle }: { salle: Salle }) {
  if (salle.contactForPrice) {
    return (
      <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-6 text-center">
        <p className="text-lg font-semibold text-foreground mb-2">Nous contacter</p>
        <p className="text-muted-foreground text-sm">
          Pour connaître nos tarifs et disponibilités, n'hésitez pas à nous contacter
        </p>
        <Button variant="outline" size="sm" className="mt-4" asChild>
          <Link href="/contact">Demander un devis</Link>
        </Button>
      </div>
    );
  }

  const periodes = [
    {
      key: "semaine",
      title: "Tarif Semaine",
      subtitle: "Lundi au Vendredi",
      color: "bg-primary text-primary-foreground",
    },
    {
      key: "weekend",
      title: "Tarif Week-End",
      subtitle: "Samedi et Dimanche",
      color: "bg-secondary text-secondary-foreground",
    },
  ] as const;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {periodes.map((periode) => (
        <div key={periode.key} className="bg-white border-2 rounded-lg overflow-hidden">
          <div className={`${periode.color} px-4 py-3 text-center`}>
            <h4 className="font-bold text-lg">{periode.title}</h4>
            <p className="text-xs opacity-90">{periode.subtitle}</p>
          </div>
          <div className="p-6 space-y-3">
            {salle.tarifs.map((t, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
              >
                <span className="font-medium text-muted-foreground">{t.label}</span>
                <span className="font-bold text-xl text-foreground">
                  {formatTarif(t, t[periode.key])}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Fiche complète d'une salle : activités, tarifs, équipements, options et dispositions */
export function SalleCard({ salle, href }: { salle: Salle; href?: string }) {
  return (
    <Card className="overflow-hidden border-2 shadow-lg">
      <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10 pb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <div className="flex-1">
            <CardTitle className="font-serif text-3xl font-bold mb-2">{salle.name}</CardTitle>
            <CardDescription className="text-base font-medium text-primary">
              {salle.capacity}
            </CardDescription>
          </div>
          {href && (
            <Button variant="outline" asChild>
              <Link href={href}>
                Voir la fiche de la salle <ArrowRight className="size-4" />
              </Link>
            </Button>
          )}
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
          <TarifsGrid salle={salle} />
        </div>

        {/* Équipements */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-semibold text-foreground">Équipements inclus</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {salle.features.map((feature, idx) => (
              <div
                key={idx}
                className="px-4 py-3 flex items-center gap-2 rounded-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium"
              >
                <feature.Icon strokeWidth={1.5} className="size-5 text-primary flex-shrink-0" />
                <span className="text-xs leading-tight">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Équipements payants à la demande */}
        {salle.paidOptions.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Équipements payants à la demande
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {salle.paidOptions.map((option, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 flex items-center gap-2 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary/40 hover:bg-primary/5 transition-all text-sm font-medium"
                >
                  <option.Icon strokeWidth={1.5} className="size-5 text-primary flex-shrink-0" />
                  <span className="text-xs leading-tight">{option.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dispositions */}
        {salle.dispositions.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Dispositions possibles
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {salle.dispositions.map((d) => (
                <div
                  key={d.name}
                  className="px-4 py-3 flex items-center gap-3 rounded-lg border-2 border-gray-200 hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <d.Icon strokeWidth={1.5} className="size-6 text-primary flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold">{d.name}</p>
                    <p className="text-xs text-muted-foreground">{d.capacity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
