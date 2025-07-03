import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Leaf, Brain, Heart, MapPin } from "lucide-react"

export default function HomePage() {
  const activities = [
    {
      title: "Café associatif",
      description: "Un espace convivial pour se rencontrer autour d'un café équitable",
      icon: <Heart className="w-8 h-8" />,
      href: "/cafe-associatif",
      color: "bg-burgundy/10 hover:bg-burgundy/20",
    },
    {
      title: "Écologie",
      description: "Ateliers, jardinage urbain et initiatives pour un mode de vie durable",
      icon: <Leaf className="w-8 h-8" />,
      href: "/ecologie",
      color: "bg-teal/10 hover:bg-teal/20",
    },
    {
      title: "Philosophie",
      description: "Cafés philo, ateliers de réflexion et conférences inspirantes",
      icon: <Brain className="w-8 h-8" />,
      href: "/philosophie",
      color: "bg-earth-light/20 hover:bg-earth-light/30",
    },
    {
      title: "Arts du corps",
      description: "Yoga, danse, théâtre pour explorer l'expression corporelle",
      icon: <Users className="w-8 h-8" />,
      href: "/arts-du-corps",
      color: "bg-burgundy/10 hover:bg-burgundy/20",
    },
    {
      title: "Location de salles",
      description: "Espaces modulables pour vos événements et réunions",
      icon: <MapPin className="w-8 h-8" />,
      href: "/location-salles",
      color: "bg-teal/10 hover:bg-teal/20",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-teal/20 to-burgundy/10 flex items-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-earth-dark mb-6">
            Bienvenue à l'Espace Musset
          </h1>
          <p className="text-xl md:text-2xl text-earth-medium mb-8 max-w-3xl mx-auto">
            Un lieu de vie associatif au cœur de Toulouse, dédié au partage, à la réflexion et à l'épanouissement
            personnel et collectif
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-burgundy hover:bg-burgundy-light text-cream">
              Découvrir nos activités
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-burgundy text-burgundy hover:bg-burgundy hover:text-cream bg-transparent"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-earth-dark mb-4">Agenda</h2>
            <p className="text-earth-medium text-lg max-w-2xl mx-auto">
              Découvrez nos prochains événements et rejoignez notre communauté
            </p>
          </div>

          <div className="bg-gradient-to-r from-sage/10 to-terracotta/10 rounded-2xl p-8 text-center">
            <Calendar className="w-16 h-16 text-teal mx-auto mb-4" />
            <h3 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Événements à venir</h3>
            <p className="text-earth-medium mb-6">
              Consultez notre agenda complet pour ne manquer aucun de nos ateliers, conférences et rencontres
            </p>
            <Button className="bg-burgundy hover:bg-burgundy-light text-cream">Voir l'agenda complet</Button>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-earth-dark mb-4">Nos activités</h2>
            <p className="text-earth-medium text-lg max-w-2xl mx-auto">
              Explorez nos différents espaces de partage et d'apprentissage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className={`${activity.color} border-none transition-all duration-300 hover:scale-105`}>
                <CardContent className="p-6">
                  <div className="text-earth-dark mb-4">{activity.icon}</div>
                  <h3 className="font-serif font-semibold text-xl text-earth-dark mb-3">{activity.title}</h3>
                  <p className="text-earth-medium mb-4">{activity.description}</p>
                  <Link href={activity.href}>
                    <Button variant="ghost" className="text-earth-dark hover:text-teal p-0">
                      Découvrir →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal/10 to-burgundy/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-earth-dark mb-6">Rejoignez notre communauté</h2>
          <p className="text-earth-medium text-lg mb-8 max-w-2xl mx-auto">
            L'Espace Musset est ouvert à tous ceux qui souhaitent partager, apprendre et grandir ensemble
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-burgundy hover:bg-burgundy-light text-cream">
              Participer
            </Button>
            <Button size="lg" className="bg-burgundy hover:bg-burgundy-light text-cream">
              Réserver une salle
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
