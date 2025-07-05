import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import EventList from "./components/event-list";
import { eventList } from "../data/data.allevents";
import { ROUTES } from "@/data/route";

export default function HomePage() {
  const activities = [{
    title: "Café associatif",
    description: "Espace de rencontre et de convivialité ouvert à tous, lieu de partage et d'échange interculturel",
    image: '/cafe-asso.jpeg',
    link: ROUTES.CAFE_ASSOCIATIF,
    cta: "Découvrir"
  },
  {
    title: "Philosophie",
    description: "Cours hebdomadaires, cafés philo, ciné philo et conférences pour explorer les grandes questions de l'existence.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    link: ROUTES.PHILOSOPHIE.ROOT,
    cta: "Découvrir les ateliers"
  },
  {
    title: "Écologie",
    description: "Sensibilisation environnementale, jardinage urbain et ateliers zéro déchet pour un mode de vie durable",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    link: ROUTES.ECOLOGIE.ROOT,
    cta: "Participer"
  },
  {
    title: "Arts du corps",
    description: "Yoga, danse et théâtre pour explorer l'expression corporelle et le bien-être personnel",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    link: ROUTES.ARTS_DU_CORPS.ROOT,
    cta: "Voir les cours"
  },

  ];
  const bgImgClass = "bg-[url('/welcome2.jpg')]"
  const bgHeroSectionCalass = "h-full  w-full flex flex-col  bg-cover bg-center bg-no-repeat"
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <section className={cn("hero-section relative py-20 px-4", bgHeroSectionCalass, bgImgClass)}>
        {/* Overlay foncé */}
        <div className="absolute inset-0 bg-black/20 z-0" aria-hidden="true" />

        <div className="relative z-10 container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Bienvenue à l'Espace Musset
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground mb-2 leading-relaxed">
              Un lieu de rencontre, de partage et d'épanouissement au cœur de Toulouse.
            </p>
            <p className="text-xl md:text-2xl text-primary-foreground mb-8 leading-relaxed">
              Nos bénévoles organisent des conférences, concerts, expositions, ateliers ... dans un esprit d'ouverture et de partage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild id={"reservation-button"}>
                <Link href="/#agenda">Agenda</Link>
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild id={"contact-button"}>
                <Link href={ROUTES.CONTACT}>Nous Contacter</Link>
              </Button>
              <Button size="lg" variant="link" className="text-lg text-white px-8 py-4" asChild id={"reservation-button"}>
                <Link href={ROUTES.LOCATION_SALLES}>Réserver une salle</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Agenda Section */}
      <section className="py-16 px-4 bg-sage-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Agenda
            </h2>
            <p id='agenda' className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos prochains événements, ateliers et rencontres
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <EventList data={eventList} title='Événements à venir' />
          </div>
        </div>
      </section>

      {/* Nos Activités Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Nos Activités
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explorez nos différents univers thématiques et trouvez votre voie d'épanouissement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{activity.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href={activity.link}>{activity.cta}</Link>
                  </Button>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Rejoignez notre communauté
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              L'Espace Musset vous accueille dans un cadre chaleureux et bienveillant.
              Que vous soyez à la recherche de réflexion philosophique, d'engagement écologique
              ou simplement d'un moment de convivialité, vous trouverez votre place parmi nous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant={'default'} size="lg" asChild>
                <Link href={ROUTES.CONTACT}>Prendre contact</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={ROUTES.CONTACT + '#map'}>Visiter le café</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
