import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/route";
import Link from "next/link";

const CafesPhilo = () => {
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
              <BreadcrumbLink href={ROUTES.PHILOSOPHIE.ROOT}>
                Philosophie
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{"Café philo"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cafés Philo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des discussions philosophiques informelles autour d'un café, où la convivialité
            rencontre la réflexion dans une ambiance détendue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
              alt="Café philosophique"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Philosophie et convivialité
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nos cafés philo créent un espace de rencontre unique où la philosophie
                se mêle à la convivialité. Dans l'atmosphère chaleureuse de notre café
                associatif, nous explorons les questions qui nous interrogent.
              </p>
              <p>
                Ces moments privilégient l'échange spontané et la découverte mutuelle.
                Chacun peut partager ses réflexions, ses questionnements et sa vision
                du monde dans un climat de respect et d'écoute.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-warmBrown-50/30 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Quand ?
              </h3>
              <p className="text-muted-foreground">
                2ème samedi du mois<br />
                15h30 - 17h30
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Où ?
              </h3>
              <p className="text-muted-foreground">
                Espace café<br />
                Dans une ambiance détendue
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Participation
              </h3>
              <p className="text-muted-foreground">
                Libre et gratuite<br />
                Consommation au café
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Participez à nos cafés philo
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Venez comme vous êtes, avec vos questions et votre curiosité
          </p>
          <Button size="lg" asChild>
            <Link href={ROUTES.CONTACT}>En savoir plus</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CafesPhilo;