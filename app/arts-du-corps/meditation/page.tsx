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
import { EuroIcon, HourglassIcon, MapIcon, SettingsIcon } from "lucide-react";

const Meditation = () => {
  const meditationEvents = eventList.filter(
    (e) => e.category.name === "Arts" && e.type.name === "Méditation"
  );
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
              <BreadcrumbLink href={ROUTES.ARTS.ROOT}>Arts du corps</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{"Méditation"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Méditation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cultivez la sérénité et gérez vos émotions lors de nos séances de méditation guidée, par
            Anne-Marie, sophrologue certifiée R.N.C.P.
          </p>
        </div>

        <div className="flex flex-col  sm:flex-row   gap-12 mb-12">
          {/* Image principale */}
          <div className="relative h-[300px] w-full sm:w-[900px] rounded-lg overflow-hidden">
            <img
              src="/cours/meditation.jpg"
              alt={"Méditation"}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-transparent" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Retrouver confiance et équilibre intérieur
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nos séances peuvent vous aider à mieux gérer vos émotions, à cultiver la sérénité, à
                renforcer votre attention et à retrouver confiance et équilivre intérieur.
              </p>
              <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground">
                Le 1er cours d'essai est Gratuit !
              </div>
            </div>
          </div>
        </div>

        <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
          <EventList data={meditationEvents} title="Nos prochains évènements" />
        </div>

        <div className="text-center bg-secondary/10 p-4 rounded-lg flex flex-col items-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Anne-Marie Magri, Sophrologue certifiée R.N.C.P.
          </p>
          <a
            href="tel:+33621799750"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            Appeler Anne-Marie au 06 21 79 97 50
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            <EuroIcon className="inline-block mr-1 mb-1" size={14} />
            1er cours d'essaie gratuit, puis 220€/an ou 90€/trimestre ou carte 10 cours
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <HourglassIcon className="inline-block mr-1 mb-1" size={14} />
            Tous les mardi de 13h00 à 13h45
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
};

export default Meditation;
