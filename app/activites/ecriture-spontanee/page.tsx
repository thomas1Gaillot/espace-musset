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
              src="/cours/ecriture.jpeg"
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
              <p>L'atelier d'écriture spontanée qui réveille votre créativité !</p>
              <p>
                2h pour aller à la rencontre des trésors cachés de votre univers intérieur, explorer
                votre imaginaire, libérer votre expression. Retrouver le simple plaisir d'écrire.
              </p>
              <p>
                Vous pourrez partager vos mots si vous le souhaitez et laisser la magie collective
                opérer.
              </p>
              <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground">
                Rejoignez-nous chaque 3ème jeudi du mois pour vivre un moment d'inspiration et
                d'expression authentique par l'écriture !
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
            <Building className="inline-block mr-1 mb-1" size={14} />+ 5 € pour l'année, pour
            adhérer à l'association "Voie de Renais-Sens"
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
