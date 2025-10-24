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
import { Building, EuroIcon, HourglassIcon, MapIcon, SettingsIcon } from "lucide-react";

const EcritureSpontanee = () => {
  const ecritureEvent = eventList.filter((e) => e.type.name === "Ecriture spontanée");

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
              <BreadcrumbPage>{"Atelier Écriture Spontanée"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Écriture spontanée : Libérez votre plume
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Libérez votre plume : l'atelier d'écriture spontanée qui réveille votre créativité à
            Toulouse
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 mb-12">
          {/* Image principale */}
          <div className="relative h-[600px] w-full sm:min-w-[400px] rounded-lg overflow-hidden">
            <img
              src="/cours/ecriture.jpg"
              alt={"ecriture spontanée"}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-transparent" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Écrire en toute liberté
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                À l’Espace Musset, au cœur du quartier des Minimes, découvrez un atelier d'écriture
                spontanée où liberté, créativité et découverte de soi se rencontrent. Cet espace
                bienveillant vous invite à écrire sans contrainte, à explorer votre imaginaire et à
                libérer votre expression personnelle.
              </p>
              <p>
                Cet atelier stimule également la concentration, la réflexion et l’éveil de
                l'imagination créatrice, tout en favorisant l'autonomie de pensée. Vous apprendrez à
                exprimer vos idées sans filtre, à dépasser le perfectionnisme et à retrouver le
                simple plaisir d'écrire.
              </p>
              <p>
                Chaque séance est une invitation à puiser en vous, à faire émerger des trésors
                cachés de votre univers intérieur. Écrivez des fragments d'histoire, des morceaux de
                vie, partagez vos mots et laissez la magie collective de l'écriture opérer.
              </p>
              <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground">
                Rejoignez-nous chaque troisième jeudi du mois
              </div>
              <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
                <EventList data={ecritureEvent} title="Nos prochains évènements" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-secondary/10 p-4 rounded-lg flex flex-col items-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact</h2>
          <a
            href="tel:+33619870690"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            Appeler Béatrice au 06 19 87 06 90
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            <EuroIcon className="inline-block mr-1 mb-1" size={14} />
            10 € l'atelier
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <Building className="inline-block mr-1 mb-1" size={14} />+ 10 € pour l'année, pour
            adhérer à l'association VDRS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <HourglassIcon className="inline-block mr-1 mb-1" size={14} />
            Tous les 3ème jeudi du mois de 19h30 à 21h30
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
};

export default EcritureSpontanee;
