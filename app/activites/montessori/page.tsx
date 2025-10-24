import EventList from "@/components/event-list";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { eventList } from "@/data/data.allevents";
import { ROUTES } from "@/data/route";
import { EuroIcon, HourglassIcon, MapIcon, PackageIcon, SettingsIcon } from "lucide-react";

const MercrediMontessoriPage = () => {
  const montessoriEvent = eventList.filter((e) => e.type.name === "Mercredi Montessori");

  return (
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
              <BreadcrumbPage>{"Mercredi Montessori"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Atelier Montessori
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une expérience unique, où tu trouveras des clés pour permettre à ton enfant de
            développer son potentiel. <br />
          </p>
        </div>

        <div className="flex flex-col  sm:flex-row   gap-12 mb-12">
          {/* Image principale */}
          <div className="relative h-[600px] w-full sm:min-w-[600px] rounded-lg overflow-hidden">
            <img src="/cours/montessori.png" alt={"Clown"} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-transparent" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                viens avec ton enfant découvrir et vivre la philosophie de Maria Montessori avec une
                professionnelle amoureuse de cette pédagogie et diplômée AMI (Association Montessori
                Internationale). Une expérience unique, où tu trouveras des clés pour permettre à
                ton enfant de développer son potentiel.
              </p>
              <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground">
                Atelier avec Claire, tous les MERCREDIS de 16h à 18h
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
          <EventList data={montessoriEvent} title="Nos prochains évènements" />
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
            30 € la séance
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <PackageIcon className="inline-block mr-1 mb-1" size={14} />8 Séances pour 210 € (1
            séance offerte)
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <HourglassIcon className="inline-block mr-1 mb-1" size={14} />
            Tous les mercredis de 16h00 à 18h00
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <MapIcon className="inline-block mr-1 mb-1" size={14} />
            Espace Musset, 52 Bis Rue Alfred de Musset, 31200 Toulouse
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <SettingsIcon className="inline-block mr-1 mb-1" size={14} />
            Ouverts à tous. Réservation par téléphone conseillé.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MercrediMontessoriPage;
