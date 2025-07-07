import EventList from "@/components/event-list";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { eventList } from "@/data/data.allevents";
import { ROUTES } from "@/data/route";
import Link from "next/link";

const CinePhilo = () => {
  const cinePhilosEvents = eventList.filter((e) => e.category.name === 'Philosophie' && e.type.name === 'Ciné philo')

  return (
    <div className=" py-12 mx-auto">
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
            <BreadcrumbPage>{"Ciné philo"}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="container text-center mb-12 container">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ciné Philo
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Le cinéma comme porte d'entrée vers la philosophie. Projections suivies
          de débats enrichissants pour explorer les grandes questions existentielles.
        </p>
      </div>

      <div className="container grid lg:grid-cols-2 gap-12 mb-12">
         <div className="relative h-80 rounded-lg overflow-hidden">
          <img
            src="/cine-philo.jpg"
            alt="Café philosophique"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Quand le cinéma interroge l'existence
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Nos soirées ciné-philo proposent une approche originale de la philosophie
              à travers le 7ème art. Après la projection d'un film soigneusement choisi,
              nous engageons un débat collectif sur les questions philosophiques soulevées.
            </p>
            <p>
              Cette formule permet d'aborder des concepts complexes de manière accessible
              et vivante, en s'appuyant sur l'émotion et la narration cinématographique
              pour nourrir la réflexion.
            </p>
          </div>
        </div>
      </div>

      <div className="container grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-sage-50/50 rounded-lg p-6">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
            Programmation
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Fréquence :</strong> Une fois par mois</li>
            <li><strong>Horaire :</strong> Vendredi 19h30-21h30</li>
            <li><strong>Format :</strong> Extraits de film + discussions (2h)</li>
            <li><strong>Tarif :</strong> 6 €</li>
          </ul>
        </div>

        <div className="bg-earth-50/50 rounded-lg p-6">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
            Films récents
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Matrix ou le mythe de la caverne de Platon</li>
            <li>• Kaamelott et le roi Arthur</li>
            
          </ul>
        </div>
      </div>

      <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
        <EventList data={cinePhilosEvents} title='Participez à nos cinés philo' />
      </div>

      <div className="container text-center">
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Prochaine séance
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Vous avez une idée de film ? Proposez là !
        </p>
        <Button size="lg" asChild>
          <Link href={ROUTES.CONTACT}>Nous contacter</Link>
        </Button>
      </div>
    </div>
  );
};

export default CinePhilo;