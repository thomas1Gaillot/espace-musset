import EventList from "@/components/event-list";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { eventList } from "@/data/data.allevents";
import { ROUTES } from "@/data/route";
import Link from "next/link";

const CafesPhilo = () => {
  const cafePhilosEvent = eventList.filter((e) => e.category.name === 'Philosophie' && e.type.name === 'Café philo')

  return (
    <div className="py-12 mx-auto ">
      <Breadcrumb className="mb-8 container">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={ROUTES.ACCUEIL}>
              Accueil
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={ROUTES.PHILOSOPHIE.ROOT}>
              Philosophie
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{"Café philo"}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12 container">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Cafés Philo
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {"Un espace structuré d’échanges collectifs, pour exercer son esprit critique dans un cadre bienveillant et rigoureux."}        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-12 container">
        <div className="relative h-80 rounded-lg overflow-hidden">
          <img
            src="/rencontre-philo.jpeg"
            alt="Café philosophique"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Philosophie et cadre structurant
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              {"Nos cafés philo ne sont pas de simples discussions informelles. Ils s'appuient sur des règles précises de dialogue pour garantir un véritable progrès dans la réflexion collective."}
            </p>
            <p>
              {"À l’image de la méthode socratique, chacun est invité à questionner, argumenter, reformuler et écouter activement. Le cadre – respect du tour de parole, clarté des propos, esprit critique – est essentiel pour permettre un échange profond et constructif."}
            </p>
            <p>
              {"Dans une ambiance conviviale, ces rencontres favorisent l’exploration des idées et la découverte mutuelle, tout en apprenant à penser ensemble de manière rigoureuse et respectueuse."}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-warmBrown-50/30 rounded-lg p-8 mb-12 container">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
              Quand ?
            </h3>
            <p className="text-muted-foreground">
              ~1 fois par mois<br />
              17:00 - 18h30
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
              Où ?
            </h3>
            <p className="text-muted-foreground">
              Salle de conférence<br />
              Dans une ambiance calme 
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
              Participation
            </h3>
            <p className="text-muted-foreground">
              à partir de 6 €<br />
              Consommation au café
            </p>
          </div>
        </div>
      </div>
      <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
        <EventList data={cafePhilosEvent} title='Participez à nos cafés philo' />
      </div>

      <div className="text-center container">

        <p className="text-lg text-muted-foreground mb-6">
          Venez comme vous êtes, avec vos questions et votre curiosité
        </p>
        <Button size="lg" asChild>
          <Link href={ROUTES.CONTACT}>Rendez-nous visite</Link>
        </Button>
      </div>
    </div>
  );
};

export default CafesPhilo;