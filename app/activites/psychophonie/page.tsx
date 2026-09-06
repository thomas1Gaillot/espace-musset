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
import { EuroIcon, HourglassIcon, MailIcon, MapIcon, SettingsIcon, UsersIcon } from "lucide-react";

const PsychophoniePage = () => {
  const psychophonieEvents = eventList.filter((e) => e.type.name === "Psychophonie");

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
              <BreadcrumbPage>{"Psychophonie"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Venez découvrir votre voix et votre corps-instrument !
          </h1>
        </div>

        <div className="flex flex-col  sm:flex-row   gap-12 mb-12">
          {/* Image principale */}
          <div className="relative w-full sm:w-[600px] rounded-lg overflow-hidden">
            <img
              src="/cours/psychophonie.png"
              alt={"Psychophonie"}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-transparent" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Le corps tout entier est impliqué pour chanter. L'atelier de Psychophonie propose
                une approche vivante et globale de la voix à partir d'exercices corporels,
                sensoriels et vocaux simples et ludiques, des vocalises, des textes, des chants
                variés, issus de différents répertoires, pour le plaisir de chanter en groupe, de
                s'accorder soi-même en s'accordant aux autres.
              </p>
              <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground">
                Prévoir une tenue souple et des chaussons ou chaussettes.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
          <EventList data={psychophonieEvents} title="Nos prochains évènements" />
        </div>

        <div className="text-center bg-secondary/10 p-4 rounded-lg flex flex-col items-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact</h2>
          <a
            href="mailto:molina.sonia@laposte.net?subject=Atelier%20Psychophonie"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            <MailIcon className="inline-block mr-2 mb-1" size={16} />
            Contacter Sonia Molina par mail
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            <EuroIcon className="inline-block mr-1 mb-1" size={14} />
            30 € la séance en atelier de 2h
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <HourglassIcon className="inline-block mr-1 mb-1" size={14} />
            Dimanches de 10h à 12h
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <UsersIcon className="inline-block mr-1 mb-1" size={14} />
            15 personnes maximum
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <MapIcon className="inline-block mr-1 mb-1" size={14} />
            Espace Musset, 52 Bis Rue Alfred de Musset, 31200 Toulouse
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <SettingsIcon className="inline-block mr-1 mb-1" size={14} />
            Ouvert à tous. Réservation par mail auprès de Sonia Molina.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PsychophoniePage;
