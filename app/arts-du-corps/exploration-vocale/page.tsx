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
import { EuroIcon, MapIcon, PhoneIcon, UsersIcon } from "lucide-react";

const ExplorationVocale = () => {
  const explorationVocaleEvents = eventList.filter(
    (e) => e.category.name === "Arts" && e.type.name === "Exploration Vocale"
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
              <BreadcrumbPage>Exploration vocale</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Exploration vocale et mouvement
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            À l'écoute du sensible — Laisser la voix vibrer dans le cœur et dans le corps
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 mb-12">
          <div className="relative h-[500px] sm:h-[700px] w-full sm:w-[900px] rounded-lg overflow-hidden">
            <img
              src="/event/atelier_vocal.png"
              alt="Exploration vocale et mouvement"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-transparent" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Atelier d'Art Vibrant
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Un atelier voix en mouvement, à l'écoute du cœur et du sensible.
                Explorez votre voix en jouant, en savourant !
              </p>
              <p>
                Plaisir, écoute profonde, partage.
              </p>
              <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground">
                Tarif atelier découverte : 12€ par personne. La June (monnaie libre) est également acceptée.
              </div>
              <p className="text-sm">
                Merci de réserver à l'avance pour l'organisation.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full ml-[24px] mr-[4px] mb-8 max-w-[calc(100vw-28px)] grid justify-center">
          <EventList data={explorationVocaleEvents} title="Nos prochains évènements" />
        </div>

        <div className="text-center bg-secondary/10 p-4 rounded-lg flex flex-col items-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Marina
          </p>
          <a
            href="tel:+33781200173"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            Appeler Marina au 07 81 20 01 73
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            <EuroIcon className="inline-block mr-1 mb-1" size={14} />
            12€ par personne (atelier découverte) — June acceptée
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <UsersIcon className="inline-block mr-1 mb-1" size={14} />
            Adultes
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <MapIcon className="inline-block mr-1 mb-1" size={14} />
            Espace Musset, 52 Bis Rue Alfred de Musset, 31200 Toulouse
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <PhoneIcon className="inline-block mr-1 mb-1" size={14} />
            Réserver en appelant Marina au 07 81 20 01 73
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExplorationVocale;
