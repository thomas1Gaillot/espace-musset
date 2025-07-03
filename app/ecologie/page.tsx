import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Recycle, Sprout, Users } from "lucide-react"

export default function EcologiePage() {
  const initiatives = [
    {
      title: "Jardinage urbain",
      description: "Créez votre potager en ville et apprenez les techniques de jardinage durable",
      icon: <Sprout className="w-8 h-8" />,
      href: "/ecologie/jardinage-urbain",
      color: "bg-sage/10",
    },
    {
      title: "Ateliers zéro déchet",
      description: "Découvrez comment réduire vos déchets au quotidien avec des solutions pratiques",
      icon: <Recycle className="w-8 h-8" />,
      href: "/ecologie/zero-dechet",
      color: "bg-earth-medium/10",
    },
    {
      title: "Permaculture",
      description: "Initiez-vous aux principes de la permaculture pour un mode de vie durable",
      icon: <Leaf className="w-8 h-8" />,
      href: "/ecologie/permaculture",
      color: "bg-sage/10",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sage/20 to-earth-medium/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="w-16 h-16 text-sage mx-auto mb-6" />
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-earth-dark mb-6">Écologie</h1>
            <p className="text-xl text-earth-medium mb-8">
              Ensemble, construisons un avenir plus durable à travers des actions concrètes et des apprentissages
              partagés
            </p>
            <Button size="lg" className="bg-sage hover:bg-sage/80 text-cream">
              Rejoindre nos initiatives
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif font-bold text-3xl text-earth-dark mb-6">Notre mission écologique</h2>
            <p className="text-earth-medium text-lg mb-8">
              L'Espace Musset s'engage pour la transition écologique en proposant des ateliers pratiques, des espaces de
              réflexion et des initiatives concrètes pour adopter un mode de vie plus respectueux de l'environnement.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Users className="w-12 h-12 text-sage mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-earth-dark mb-2">Sensibiliser</h3>
                <p className="text-earth-medium">Éveiller les consciences aux enjeux environnementaux</p>
              </div>
              <div>
                <Sprout className="w-12 h-12 text-sage mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-earth-dark mb-2">Expérimenter</h3>
                <p className="text-earth-medium">Tester des solutions concrètes et durables</p>
              </div>
              <div>
                <Recycle className="w-12 h-12 text-sage mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-earth-dark mb-2">Transformer</h3>
                <p className="text-earth-medium">Changer nos habitudes pour un impact positif</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl text-center text-earth-dark mb-12">Nos initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card
                key={index}
                className={`${initiative.color} border-none transition-all duration-300 hover:scale-105`}
              >
                <CardContent className="p-6">
                  <div className="text-sage mb-4">{initiative.icon}</div>
                  <h3 className="font-serif font-semibold text-xl text-earth-dark mb-3">{initiative.title}</h3>
                  <p className="text-earth-medium mb-4">{initiative.description}</p>
                  <Link href={initiative.href}>
                    <Button variant="ghost" className="text-earth-dark hover:text-sage p-0">
                      En savoir plus →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl text-earth-dark mb-6">Nos valeurs écologiques</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-semibold text-xl text-earth-dark mb-2">Respect de la nature</h3>
                  <p className="text-earth-medium">
                    Nous croyons en l'importance de préserver notre environnement pour les générations futures.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-earth-dark mb-2">Économie circulaire</h3>
                  <p className="text-earth-medium">
                    Réduire, réutiliser, recycler : nous appliquons ces principes dans toutes nos activités.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-earth-dark mb-2">Solidarité environnementale</h3>
                  <p className="text-earth-medium">
                    L'écologie est un défi collectif qui nécessite l'engagement de chacun.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-sage/10 rounded-2xl p-8">
              <div className="bg-[url('/placeholder.svg?height=300&width=400')] bg-cover bg-center h-64 rounded-lg mb-4"></div>
              <p className="text-earth-medium text-center italic">"Agir localement, penser globalement"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sage/10 to-earth-medium/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl text-earth-dark mb-6">Participez au changement</h2>
          <p className="text-earth-medium text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez nos ateliers et initiatives pour apprendre, expérimenter et agir ensemble pour un avenir plus
            durable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sage hover:bg-sage/80 text-cream">
              Découvrir les ateliers
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-earth-dark text-earth-dark hover:bg-earth-dark hover:text-cream bg-transparent"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
