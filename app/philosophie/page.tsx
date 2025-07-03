import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Coffee, Film, Users } from "lucide-react"

export default function PhilosophiePage() {
  const activities = [
    {
      title: "Ateliers hebdos",
      description: "Rencontres hebdomadaires pour explorer les grandes questions philosophiques",
      icon: <Users className="w-8 h-8" />,
      href: "/philosophie/ateliers-hebdos",
      color: "bg-earth-medium/10",
    },
    {
      title: "Cafés philo",
      description: "Discussions informelles autour d'un café sur des thèmes philosophiques",
      icon: <Coffee className="w-8 h-8" />,
      href: "/philosophie/cafes-philo",
      color: "bg-terracotta/10",
    },
    {
      title: "Ciné philo",
      description: "Projections de films suivies de débats philosophiques",
      icon: <Film className="w-8 h-8" />,
      href: "/philosophie/cine-philo",
      color: "bg-sage/10",
    },
    {
      title: "Conférences",
      description: "Interventions d'experts sur des sujets philosophiques contemporains",
      icon: <Brain className="w-8 h-8" />,
      href: "/philosophie/conferences",
      color: "bg-earth-medium/10",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-earth-medium/20 to-sage/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Brain className="w-16 h-16 text-earth-medium mx-auto mb-6" />
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-earth-dark mb-6">Philosophie</h1>
            <p className="text-xl text-earth-medium mb-8">
              Un espace de réflexion et de dialogue pour explorer les grandes questions de l'existence et du vivre
              ensemble
            </p>
            <Button size="lg" className="bg-earth-medium hover:bg-earth-medium/80 text-cream">
              Rejoindre nos discussions
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif font-bold text-3xl text-earth-dark mb-6">
              La philosophie au cœur de nos échanges
            </h2>
            <p className="text-earth-medium text-lg mb-8">
              À l'Espace Musset, nous croyons que la philosophie n'est pas réservée aux académiques. C'est un outil
              accessible à tous pour mieux comprendre le monde, questionner nos certitudes et enrichir notre réflexion
              personnelle et collective.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-sage/10 rounded-2xl p-6">
                <h3 className="font-serif font-semibold text-xl text-earth-dark mb-4">Notre approche</h3>
                <p className="text-earth-medium">
                  Nous privilégions un dialogue ouvert et bienveillant, où chacun peut exprimer ses idées sans jugement.
                  La philosophie devient ainsi un moyen de créer du lien social et de développer notre esprit critique.
                </p>
              </div>
              <div className="bg-terracotta/10 rounded-2xl p-6">
                <h3 className="font-serif font-semibold text-xl text-earth-dark mb-4">Nos thèmes</h3>
                <p className="text-earth-medium">
                  Éthique, politique, esthétique, métaphysique... Nous abordons tous les domaines de la philosophie en
                  les reliant aux enjeux contemporains et à nos expériences personnelles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl text-center text-earth-dark mb-12">
            Nos activités philosophiques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className={`${activity.color} border-none transition-all duration-300 hover:scale-105`}>
                <CardContent className="p-6">
                  <div className="text-earth-dark mb-4">{activity.icon}</div>
                  <h3 className="font-serif font-semibold text-lg text-earth-dark mb-3">{activity.title}</h3>
                  <p className="text-earth-medium text-sm mb-4">{activity.description}</p>
                  <Link href={activity.href}>
                    <Button variant="ghost" className="text-earth-dark hover:text-sage p-0 text-sm">
                      En savoir plus →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-earth-dark mb-6">
              "La philosophie commence dans l'étonnement"
            </blockquote>
            <cite className="text-earth-medium text-lg">— Aristote</cite>
            <p className="text-earth-medium mt-6 max-w-2xl mx-auto">
              Cette citation guide notre démarche : cultiver l'étonnement, poser des questions, et chercher ensemble des
              éléments de réponse dans un esprit de curiosité et d'ouverture.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-earth-medium/10 to-sage/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl text-earth-dark mb-6">Venez philosopher avec nous</h2>
          <p className="text-earth-medium text-lg mb-8 max-w-2xl mx-auto">
            Que vous soyez novice ou passionné de philosophie, nos activités sont ouvertes à tous. Venez enrichir vos
            réflexions et partager vos questionnements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-earth-medium hover:bg-earth-medium/80 text-cream">
              Participer aux ateliers
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-earth-dark text-earth-dark hover:bg-earth-dark hover:text-cream bg-transparent"
            >
              Voir le programme
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
