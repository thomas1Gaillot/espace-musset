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
import { EuroIcon, HourglassIcon, MailIcon, MapIcon, PhoneIcon, SettingsIcon } from "lucide-react";

const QiGongEnergetique = () => {
  const qiGongEvents = eventList.filter(
    (e) => e.category.name === "Arts" && e.type.name === "Qi Gong Énergétique"
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={ROUTES.ACCUEIL}>{"Accueil"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={ROUTES.ARTS.ROOT}>{"Arts du corps"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{"Qi Gong Énergétique"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {"Qi Gong Énergétique"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"Harmoniser le corps, apaiser l'esprit et cultiver l'énergie vitale, avec Philippe."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 mb-12">
          <div className="relative h-[300px] w-full sm:w-[900px] rounded-lg overflow-hidden">
            <img
              src="/cours/qi-gong-energ.png"
              alt={"Qi Gong Énergétique"}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-transparent" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              {"Plus qu'un art énergétique, un art de vivre"}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {
                  "Le Qi Gong est une pratique douce et ancestrale qui associe mouvements lents, respiration et concentration pour faire circuler l'énergie vitale, apaiser le mental et retrouver l'équilibre du corps. Avec Philippe, découvrez ces ateliers dans un esprit de partage et d'engagement mutuel : la pratique demande respect, régularité et participation."
                }
              </p>
              <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground">
                {"Un jeudi sur deux, de septembre à décembre 2026"}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full ml-[24px] mr-[4px] mb-8 max-w-[calc(100vw-28px)] grid justify-center">
          <EventList data={qiGongEvents} title="Nos prochains évènements de Qi Gong Énergétique" />
        </div>

        <div className="text-center bg-secondary/10 p-4 rounded-lg flex flex-col items-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            {"Informations et Contact"}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">{"Ateliers de Qi Gong avec Philippe"}</p>
          <a
            href="tel:+33621371949"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            <PhoneIcon size={18} />
            {"Appeler Philippe au 06 21 37 19 49"}
          </a>
          <a
            href="mailto:natur.l.zenergie@gmail.com"
            className="inline-flex items-center gap-2 mt-3 bg-white text-primary px-6 py-3 rounded-lg font-medium transition"
          >
            <MailIcon size={18} />
            {"Envoyer un email"}
          </a>

          <p className="text-sm text-muted-foreground mt-6">
            <HourglassIcon className="inline-block mr-1 mb-1" size={14} />
            {"Un jeudi sur deux, de 18h00 à 19h30"}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <EuroIcon className="inline-block mr-1 mb-1" size={14} />
            {"Tarif dégressif selon le nombre de participants — voir avec Philippe"}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <MapIcon className="inline-block mr-1 mb-1" size={14} />
            {"Espace Musset, 52 Bis Rue Alfred de Musset, 31200 Toulouse"}
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            <SettingsIcon className="inline-block mr-1 mb-1" size={14} />
            {"Tout niveau, inscription par téléphone ou email recommandée."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QiGongEnergetique;
