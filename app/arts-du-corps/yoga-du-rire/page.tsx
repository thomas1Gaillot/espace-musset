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

const YogaRire = () => {
  const yogaDuRireEvents = eventList.filter(
    (e) => e.category.name === "Arts" && e.type.name === "Yoga du rire"
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
              <BreadcrumbPage>{"Yoga du Rire"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Yoga du rire : libérez votre joie à Toulouse
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dans le chaleureux quartier des Minimes, découvrez comment retrouver équilibre, vitalité
            et bonne humeur… grâce au Yoga du Rire. Cette méthode unique agit naturellement sur
            votre santé physique et mentale, et est idéale pour contrer le stress du quotidien.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 mb-12">
          {/* Image principale */}
          <div
            className="relative h-[600px] w-full sm:min-w-[
                00px] rounded-lg overflow-hidden"
          >
            <img
              src="/cours/yoga-rire.jpg"
              alt={"yoga du rire"}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-transparent" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Qu'est ce que le Yoga du rire ?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Inventé en 1995 par le médecin indien Dr Madan Kataria, le Yoga du Rire associe le
                rire intentionnel, des techniques de respiration et des exercices de détente. Ses
                bienfaits sont nombreux :{" "}
                <strong>
                  réduction du stress, renforcement du système immunitaire, meilleure qualité de vie
                  et récupération d'énergie{" "}
                </strong>
                .
              </p>
              <p>
                Chaque mois, nos ateliers de Yoga du Rire aux Minimes vous offrent{" "}
                <strong>un moment convivial pour lâcher prise</strong>, respirer profondément et
                rire sans retenue. Que vous soyez habitant du quartier ou curieux de passage à
                Toulouse, cette parenthèse mensuelle est un vrai cadeau pour votre corps et votre
                esprit.
              </p>
              <p>
                Rejoignez-nous à l’Espace Musset et faites du rire votre nouvelle habitude bien-être
                !
              </p>
              <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
                <EventList data={yogaDuRireEvents} title="Nos prochains évènements" />
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
            Voir l'agenda :)
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

export default YogaRire;
