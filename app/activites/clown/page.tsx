import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ROUTES } from "@/data/route";
import { CoffeeIcon, EuroIcon, HourglassIcon, MapIcon, SettingsIcon } from "lucide-react";

const Clown = () => (
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
            <BreadcrumbPage>{"Clown Socratiques"}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Atelier Clown Socratique
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Et si le clown et le philosophe avaient plus en commun qu'on ne le croit ?<br />
        </p>
      </div>

      <div className="flex flex-col  sm:flex-row   gap-12 mb-12">
        {/* Image principale */}
        <div className="relative h-[600px] w-full sm:w-[600px] rounded-lg overflow-hidden">
          <img src="/cours/clown.jpg" alt={"Clown"} className="w-full h-auto object-cover" />
          <div className="absolute inset-0 bg-transparent" />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            J'offre aux autres de la joie
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Cet atelier à pour but de vous faire découvrir le clown en vous amusant, en osant et
              en apprenant à se connaître.
            </p>
            <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground">
              Cours avec Claire tout les mardi de 19h00 à 21h30
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-secondary/10 p-4 rounded-lg flex flex-col items-center">
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact</h2>
        <a
          href="tel:+33671353183"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
        >
          Appeler Claire au 06 71 35 31 83
        </a>
        <p className="text-sm text-muted-foreground mt-4">
          <EuroIcon className="inline-block mr-1 mb-1" size={14} />
          90€ les 8 séances
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <CoffeeIcon className="inline-block mr-1 mb-1" size={14} />5 € / an pour adhérer au café
          associatif
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <HourglassIcon className="inline-block mr-1 mb-1" size={14} />
          Tous les mardi de 19h00 à 21h30
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <MapIcon className="inline-block mr-1 mb-1" size={14} />
          Espace Musset, 52 Bis Rue Alfred de Musset, 31200 Toulouse
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <SettingsIcon className="inline-block mr-1 mb-1" size={14} />
          Débutants bienvenus. Réservation par téléphone conseillé.
        </p>
      </div>
    </div>
  </div>
);

export default Clown;
