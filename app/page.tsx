import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  const activities = [
    {
      title: "Philosophie",
      description: "Ateliers hebdomadaires, cafés philo, ciné-débats et conférences pour explorer les grandes questions de l'existence",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      link: "/philosophie",
      cta: "Découvrir les ateliers"
    },
    {
      title: "Écologie",
      description: "Sensibilisation environnementale, jardinage urbain et ateliers zéro déchet pour un mode de vie durable",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      link: "/ecologie",
      cta: "Participer"
    },
    {
      title: "Arts du corps",
      description: "Yoga, danse et théâtre pour explorer l'expression corporelle et le bien-être personnel",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      link: "/arts-du-corps",
      cta: "Voir les cours"
    },
    {
      title: "Café associatif",
      description: "Espace de rencontre et de convivialité ouvert à tous, lieu de partage et d'échange interculturel",
      image: '/cafe-asso.jpeg',
      link: "/cafe-associatif",
      cta: "Découvrir"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 mt-8">
        <div className="h-120 md:h-[60dvh] flex flex-col bg-[url('https://images.unsplash.com/photo-1462917882517-e150004895fa?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat rounded-2xl">
          <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
            <h1 className="text-xl md:text-3xl lg:text-5xl text-white">
              {"Bienvenue à l'espace Musset"}
            </h1>
          </div>
        </div>
      </div>
      <section className="hero-section py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bienvenue à l'Espace Musset
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Un lieu de rencontre, de partage et d'épanouissement au cœur de Toulouse.
              Philosophie, écologie, arts du corps et convivialité se conjuguent pour créer
              une communauté ouverte et bienveillante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/contact">Nous Contacter</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
                <Link href="/location-salles">Réserver une salle</Link>
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos prochains événements, ateliers et rencontres
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-2 border-sage-200 hover:border-sage-300 transition-colors">
              <div className="relative h-64 bg-gradient-to-r from-sage-100 to-earth-100 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    Événements à venir
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Consultez notre programmation complète
                  </p>
                  <Button asChild>
                    <a href="https://eventbrite.com" target="_blank" rel="noopener noreferrer">
                      Voir l'agenda complet
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
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
                <Link href="/contact">Prendre contact</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/cafe-associatif">Visiter le café</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
