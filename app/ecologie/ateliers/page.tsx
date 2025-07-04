import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AteliersEcologiques = () => {
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
              <BreadcrumbLink href="/ecologie">
                Ecologie
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{"Ateliers écologiques"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ateliers Écologiques
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Apprenez les gestes concrets du quotidien pour réduire votre impact
            environnemental et adopter un mode de vie plus durable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
              alt="Ateliers écologiques"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Agir concrètement pour l'environnement
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nos ateliers écologiques vous accompagnent dans l'adoption de pratiques
                respectueuses de l'environnement. Avec des approches pratiques et
                accessibles, nous explorons ensemble les solutions durables.
              </p>
              <p>
                Chaque atelier allie théorie et pratique : comprendre les enjeux
                environnementaux et apprendre des techniques concrètes à appliquer
                immédiatement dans votre quotidien.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Cosmétiques naturels",
              description: "Créez vos produits de beauté sans produits chimiques"
            },
            {
              title: "Produits ménagers écologiques",
              description: "Fabriquez vos nettoyants naturels et efficaces"
            },
            {
              title: "Réparation d'objets",
              description: "Donnez une seconde vie à vos appareils et textiles"
            },
            {
              title: "Compostage urbain",
              description: "Transformez vos déchets organiques en ressource"
            },
            {
              title: "Alimentation durable",
              description: "Adoptez une alimentation respectueuse de la planète"
            },
            {
              title: "Économies d'énergie",
              description: "Réduisez votre consommation énergétique au quotidien"
            }
          ].map((atelier, index) => (
            <div key={index} className="bg-sage-50/50 rounded-lg p-6">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {atelier.title}
              </h3>
              <p className="text-sm text-muted-foreground">{atelier.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-earth-50/50 rounded-lg p-8 mb-12">
          <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-6">
            Informations pratiques
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Fréquence</h3>
              <p className="text-muted-foreground">
                2 ateliers par mois<br />
                Samedi 14h-17h
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Tarif</h3>
              <p className="text-muted-foreground">
                25€ par atelier<br />
                (matériaux inclus)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Public</h3>
              <p className="text-muted-foreground">
                Adultes et adolescents<br />
                12 participants max
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Participez à nos ateliers
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Inscription obligatoire - Places limitées pour un apprentissage optimal
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">S'inscrire</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AteliersEcologiques;