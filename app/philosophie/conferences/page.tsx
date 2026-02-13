import EventList from "@/components/event-list";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { eventList } from "@/data/data.allevents";
import { ROUTES } from "@/data/route";
import Link from "next/link";

const Conferences = () => {
  const confPhiloEvents = eventList.filter(
    (e) => e.category.name === "Philosophie" && e.type.name === "Conférence"
  );

  return (
    <div className=" py-12 mx-auto">
      <Breadcrumb className="container mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={ROUTES.ACCUEIL}>Accueil</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={ROUTES.PHILOSOPHIE.ROOT}>Philosophie</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{"Conférences"}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="container text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Conférences Philosophiques
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {"Une intervention dont l'angle d'approche est la philosophie."}
        </p>
      </div>

      <div className="container grid lg:grid-cols-2 gap-12 mb-12">
        <div className="relative h-80 rounded-lg overflow-hidden">
          <img
            src="/conference-philo.jpg"
            alt="Conférence philosophique"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Penser ensemble dans un esprit d'écoute et de dialogue
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {
                "Nos conférences sont animées par des bénévoles passionnés qui explorent une thématique de leur choix à partir d’un questionnement philosophique. L’objectif : partager une réflexion accessible à tous, sans prétention académique."
              }
            </p>
            <p>
              {
                "Ces présentations peuvent inclure des supports visuels, des lectures, ou des animations, et sont suivies d’un temps d’échange ouvert avec le public pour prolonger la réflexion de manière participative."
              }
            </p>
          </div>
        </div>
      </div>

      <div className="container grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-warmBrown-50/30 rounded-lg p-6 text-center">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Fréquence</h3>
          <p className="text-muted-foreground">
            2-3 conférences
            <br />
            par trimestre
          </p>
        </div>
        <div className="bg-sage-50/50 rounded-lg p-6 text-center">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Format</h3>
          <p className="text-muted-foreground">
            Conférence et animation (1h00)
            <br />
            Questions et échanges (30min)
          </p>
        </div>
      </div>

      <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
        <EventList data={confPhiloEvents} title="Participez à nos conférences" />
      </div>

      <div className="container text-center">
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Proposez un sujet
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Proposez-nous le sujet de notre prochaine conférence !
        </p>
        <Button size="lg" asChild>
          <Link href={ROUTES.CONTACT}>Nous contacter</Link>
        </Button>
      </div>
    </div>
  );
};

export default Conferences;
