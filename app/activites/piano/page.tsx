import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ROUTES } from "@/data/route";
import { EuroIcon, HourglassIcon, MapIcon, SettingsIcon } from "lucide-react";

const Piano = () => (
  <div className="min-h-screen py-12 px-4">
    <div className="container mx-auto">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={ROUTES.ACCUEIL}>Accueil</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={ROUTES.ACTIVITES.ROOT}>Activités</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{"Piano"}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Cours de piano
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Apprenez le piano avec Anna, pianiste expérimentée !
        </p>
      </div>

      <div className="flex flex-col  sm:flex-row   gap-12 mb-12">
        {/* Image principale */}
        <div className="relative h-[300px] w-full sm:w-[900px] rounded-lg overflow-hidden">
          <img src="/cours/piano.jpg" alt={"Piano"} className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-transparent" />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Découvrez ou redécouvrez le plaisir de jouer du piano
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Que vous soyez débutant ou que vous souhaitiez perfectionner votre technique, nos
              cours de piano sont adaptés à tous les niveaux et âges. Anna vous guidera avec
              patience et passion pour vous aider à progresser à votre rythme.
            </p>
            <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground">
              En plus des cours de piano, Anna peut vous accompagner pour des cours de solfège et
              accompagnement de chanteur.
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-secondary/10 p-4 rounded-lg flex flex-col items-center">
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact</h2>
        <p className="text-lg text-muted-foreground mb-6">Anna IOURASSOVA</p>
        <a
          href="tel:+33619511626"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
        >
          Appeler Anna au 06 19 51 16 26
        </a>
        <p className="text-sm text-muted-foreground mt-4">
          <EuroIcon className="inline-block mr-1 mb-1" size={14} />
          Prix à définir ensemble, selon le type de cours, la fréquence et la durée.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <HourglassIcon className="inline-block mr-1 mb-1" size={14} />
          Horaires à définir ensemble
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <MapIcon className="inline-block mr-1 mb-1" size={14} />
          Espace Musset, 52 Bis Rue Alfred de Musset, 31200 Toulouse
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <SettingsIcon className="inline-block mr-1 mb-1" size={14} />
          Tout niveau, débutants bienvenus. Réservation par téléphone conseillé.
        </p>
      </div>
    </div>
  </div>
);

export default Piano;
