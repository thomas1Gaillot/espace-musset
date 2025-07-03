import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Zap, Smile } from "lucide-react"

export default function ArtsCorpsPage() {
  const disciplines = [
    {
      title: "Yoga",
      description: "Pratiques douces et dynamiques pour harmoniser corps et esprit",
      icon: <Heart className="w-8 h-8" />,
      href: "/arts-du-corps/yoga",
      color: "bg-sage/10",
    },
    {
      title: "Danse",
      description: "Expression corporelle libre et créative pour tous les niveaux",
      icon: <Zap className="w-8 h-8" />,
      href: "/arts-du-corps/danse",
      color: "bg-terracotta/10",
    },
    {
      title: "Théâtre",
      description: "Ateliers d'improvisation et de jeu théâtral pour libérer l'expression",
      icon: <Smile className="w-8 h-8" />,
      href: "/arts-du-corps/theatre",
      color: "bg-earth-medium/10",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-terracotta/20 to-sage/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-terracotta mx-auto mb-6" />
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-earth-dark mb-6">Arts du corps</h1>
            <p className="text-xl text-earth-medium mb-8">
              Explorez votre potentiel expressif à travers des pratiques corporelles bienveillantes et créatives
            </p>
            <Button size="lg" className="bg-terracotta hover:bg-terracotta/80 text-cream">
              Découvrir nos ateliers
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif font-bold text-3xl text-earth-dark mb-6">Le corps comme langage</h2>
            <p className="text-earth-medium text-lg mb-8">
              À l'Espace Musset, nous considérons le corps comme un moyen d'expression à part entière. Nos ateliers
              d'arts du corps vous invitent à explorer votre créativité, à développer votre conscience corporelle et à
              vous connecter à vos émotions dans un cadre bienveillant.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Heart className="w-12 h-12 text-terracotta mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-earth-dark mb-2">Bien-être</h3>
                <p className="text-earth-medium">Reconnectez-vous à votre corps et trouvez votre équilibre</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-terracotta mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-earth-dark mb-2">Expression</h3>
                <p className="text-earth-medium">Libérez votre créativité à travers le mouvement</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-terracotta mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl text-earth-dark mb-2">Partage</h3>
                <p className="text-earth-medium">Créez des liens authentiques avec les autres participants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl text-center text-earth-dark mb-12">Nos disciplines</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {disciplines.map((discipline, index) => (
              <Card
                key={index}
                className={`${discipline.color} border-none transition-all duration-300 hover:scale-105`}
              >
                <CardContent className="p-6">
                  <div className="text-terracotta mb-4">{discipline.icon}</div>
                  <h3 className="font-serif font-semibold text-xl text-earth-dark mb-3">{discipline.title}</h3>
                  <p className="text-earth-medium mb-4">{discipline.description}</p>
                  <Link href={discipline.href}>
                    <Button variant="ghost" className="text-earth-dark hover:text-terracotta p-0">
                      En savoir plus →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl text-earth-dark mb-6">Notre approche pédagogique</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-semibold text-xl text-earth-dark mb-2">Bienveillance</h3>
                  <p className="text-earth-medium">
                    Nos ateliers se déroulent dans un climat de confiance et de respect mutuel, où chacun peut
                    s'exprimer librement.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-earth-dark mb-2">Accessibilité</h3>
                  <p className="text-earth-medium">
                    Nos pratiques sont adaptées à tous les niveaux et toutes les conditions physiques.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-earth-dark mb-2">Créativité</h3>
                  <p className="text-earth-medium">
                    Nous encourageons l'exploration personnelle et la découverte de votre propre style.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-terracotta/10 rounded-2xl p-8">
              <div className="bg-[url('/placeholder.svg?height=300&width=400')] bg-cover bg-center h-64 rounded-lg mb-4"></div>
              <p className="text-earth-medium text-center italic">
                "Le corps sait des choses que l'esprit ignore encore"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-terracotta/10 to-sage/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl text-earth-dark mb-6">Commencez votre exploration</h2>
          <p className="text-earth-medium text-lg mb-8 max-w-2xl mx-auto">
            Que vous soyez débutant ou expérimenté, nos ateliers vous accueillent pour un voyage de découverte de votre
            potentiel expressif
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-terracotta hover:bg-terracotta/80 text-cream">
              Réserver un cours d'essai
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-earth-dark text-earth-dark hover:bg-earth-dark hover:text-cream bg-transparent"
            >
              Voir les horaires
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
