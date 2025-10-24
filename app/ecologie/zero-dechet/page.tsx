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
import Link from "next/link";

const ZeroDechet = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Fil d’Ariane */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={ROUTES.ACCUEIL}>{"Accueil"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={ROUTES.ECOLOGIE.ROOT}>{"Écologie"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{"Zéro Déchet"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Titre */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {"Démarche Zéro Déchet"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {
              "Nettoyer l’extérieur pour se purifier intérieurement. Une pratique simple, consciente et philosophique du service."
            }
          </p>
        </div>

        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="/event/zero-dechet.jpeg"
              alt={"Recolte Megots au parc"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              {"Une action extérieure, un travail intérieur"}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {
                  "La démarche zéro déchet n’est pas qu’un engagement écologique : c’est une pratique de purification intérieure. En nettoyant notre environnement, nous apprenons à clarifier notre esprit et à retrouver l’essentiel."
                }
              </p>
              <p>
                {
                  "Chaque geste devient alors une méditation active, un service désintéressé, un moyen de transformer la matière et soi-même."
                }
              </p>
            </div>
          </div>
        </div>

        {/* Section philosophie du volontariat */}
        <div className="bg-primary/5 rounded-lg p-8 mb-12 text-center space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            {"Le volontariat, une philosophie en action"}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {
              "En agissant concrètement pour la planète, nous faisons rayonner les valeurs de l’association : simplicité, solidarité et conscience. Par l’exemple, nous inspirons et rendons visibles nos idéaux."
            }
          </p>
        </div>
        {/* Nettoyage philosophie */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-4">
            {"Nettoyage philosophie"}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
            {
              "Chaque semaine, Letizia propose une heure de nettoyage dans le parc. Ensemble, nous travaillons une vertu intérieure tout en prenant soin du monde qui nous entoure."
            }
          </p>
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link href={ROUTES.CONTACT}>{"Contacter Letizia"}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroDechet;
