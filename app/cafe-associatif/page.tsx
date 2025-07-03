import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Users, Clock, Heart } from "lucide-react"

export default function CafeAssociatifPage() {
  const services = [
    {
      title: "Café équitable",
      description: "Sélection de cafés issus du commerce équitable",
      icon: <Coffee className="w-6 h-6" />,
    },
    {
      title: "Espace de coworking",
      description: "Travaillez dans un environnement convivial et inspirant",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Événements communautaires",
      description: "Soirées jeux, lectures publiques, concerts intimistes",
      icon: <Heart className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-terracotta/20 to-sage/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-earth-dark mb-6">Café associatif</h1>
            <p className="text-xl text-earth-medium mb-8">
              Un espace chaleureux où se rencontrer, échanger et créer des liens autour d'un café équitable
            </p>
            <Button size="lg" className="bg-terracotta hover:bg-terracotta/80 text-cream">
              Nous rendre visite
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl text-earth-dark mb-6">Un lieu de vie et de partage</h2>
              <p className="text-earth-medium mb-6">
                Notre café associatif est bien plus qu'un simple lieu de restauration. C'est un espace de rencontre où
                les habitants du quartier, les membres de l'association et les visiteurs de passage peuvent se retrouver
                dans une atmosphère détendue et bienveillante.
              </p>
              <p className="text-earth-medium mb-6">
                Nous privilégions les produits locaux et équitables, dans une démarche respectueuse de l'environnement
                et des producteurs. Chaque consommation contribue au financement des activités de l'association.
              </p>
            </div>
            <div className="bg-sage/10 rounded-2xl p-8">
              <div className="bg-[url('/placeholder.svg?height=300&width=400')] bg-cover bg-center h-64 rounded-lg mb-4"></div>
              <p className="text-earth-medium text-center italic">"Un espace où chacun peut se sentir chez soi"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl text-center text-earth-dark mb-12">Ce que nous proposons</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-terracotta mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="font-serif font-semibold text-xl text-earth-dark mb-3">{service.title}</h3>
                  <p className="text-earth-medium">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Clock className="w-12 h-12 text-sage mx-auto mb-6" />
            <h2 className="font-serif font-bold text-3xl text-earth-dark mb-8">Horaires d'ouverture</h2>
            <div className="bg-sage/10 rounded-2xl p-8">
              <div className="space-y-4 text-earth-dark">
                <div className="flex justify-between">
                  <span className="font-semibold">Lundi - Vendredi</span>
                  <span>9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Samedi</span>
                  <span>10h00 - 17h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-sage/20">
                <p className="text-earth-medium text-sm">Horaires susceptibles de varier selon les événements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-terracotta/10 to-sage/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl text-earth-dark mb-6">Venez nous rencontrer</h2>
          <p className="text-earth-medium text-lg mb-8 max-w-2xl mx-auto">
            Que ce soit pour un café, pour travailler ou simplement pour discuter, vous êtes les bienvenus à l'Espace
            Musset
          </p>
          <Button size="lg" className="bg-terracotta hover:bg-terracotta/80 text-cream">
            Nous contacter
          </Button>
        </div>
      </section>
    </div>
  )
}
