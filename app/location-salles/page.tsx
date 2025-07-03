import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Clock, Wifi, Coffee, Car } from "lucide-react"

export default function LocationSallesPage() {
  const rooms = [
    {
      name: "Salle Principale",
      capacity: "50 personnes",
      size: "80 m²",
      description: "Espace modulable idéal pour conférences, ateliers et événements",
      features: ["Vidéoprojecteur", "Système audio", "Éclairage modulable", "Accès PMR"],
      price: "25€/heure",
    },
    {
      name: "Salle Intime",
      capacity: "15 personnes",
      size: "30 m²",
      description: "Parfaite pour réunions, formations et ateliers en petit groupe",
      features: ["Tableau blanc", "Connexion internet", "Climatisation", "Mobilier modulable"],
      price: "15€/heure",
    },
    {
      name: "Espace Détente",
      capacity: "25 personnes",
      size: "45 m²",
      description: "Ambiance cosy pour événements informels et rencontres conviviales",
      features: ["Coin cuisine", "Canapés", "Éclairage tamisé", "Terrasse privée"],
      price: "20€/heure",
    },
  ]

  const amenities = [
    { icon: <Wifi className="w-6 h-6" />, name: "WiFi gratuit" },
    { icon: <Coffee className="w-6 h-6" />, name: "Espace café" },
    { icon: <Car className="w-6 h-6" />, name: "Parking proche" },
    { icon: <MapPin className="w-6 h-6" />, name: "Métro à 5 min" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sage/20 to-earth-medium/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-16 h-16 text-sage mx-auto mb-6" />
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-earth-dark mb-6">Location de salles</h1>
            <p className="text-xl text-earth-medium mb-8">
              Des espaces modulables et équipés au cœur de Toulouse pour vos événements, réunions et formations
            </p>
            <Button size="lg" className="bg-sage hover:bg-sage/80 text-cream">
              Réserver une salle
            </Button>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl text-center text-earth-dark mb-12">Nos espaces disponibles</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[url('/placeholder.svg?height=200&width=300')] bg-cover bg-center h-48 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-xl text-earth-dark mb-2">{room.name}</h3>
                  <div className="flex items-center space-x-4 text-earth-medium mb-4">
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{room.capacity}</span>
                    </span>
                    <span className="text-sm">{room.size}</span>
                  </div>
                  <p className="text-earth-medium mb-4">{room.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-earth-dark mb-2">Équipements inclus :</h4>
                    <ul className="text-sm text-earth-medium space-y-1">
                      {room.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sage text-lg">{room.price}</span>
                    <Button className="bg-sage hover:bg-sage/80 text-cream">Réserver</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl text-center text-earth-dark mb-12">Services inclus</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="text-sage mb-4 flex justify-center">{amenity.icon}</div>
                <h3 className="font-semibold text-earth-dark">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-3xl text-center text-earth-dark mb-12">Tarifs et conditions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-sage/10 border-none">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-sage mb-4" />
                  <h3 className="font-serif font-semibold text-xl text-earth-dark mb-4">Tarification</h3>
                  <div className="space-y-3 text-earth-medium">
                    <div className="flex justify-between">
                      <span>Demi-journée (4h)</span>
                      <span className="font-semibold">-20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Journée complète (8h)</span>
                      <span className="font-semibold">-30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Associations locales</span>
                      <span className="font-semibold">-15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Événements récurrents</span>
                      <span className="font-semibold">Sur devis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-terracotta/10 border-none">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-terracotta mb-4" />
                  <h3 className="font-serif font-semibold text-xl text-earth-dark mb-4">Conditions</h3>
                  <div className="space-y-3 text-earth-medium">
                    <p>• Réservation minimum 48h à l'avance</p>
                    <p>• Caution de 100€ demandée</p>
                    <p>• Nettoyage inclus dans le tarif</p>
                    <p>• Annulation gratuite 24h avant</p>
                    <p>• Accès aux équipements techniques</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-sage/10 to-earth-medium/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl text-earth-dark mb-6">Réservez votre espace</h2>
          <p className="text-earth-medium text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et organiser une visite de nos espaces. Nous vous accompagnons
            dans la réalisation de votre événement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sage hover:bg-sage/80 text-cream">
              Demander un devis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-earth-dark text-earth-dark hover:bg-earth-dark hover:text-cream bg-transparent"
            >
              Visiter nos espaces
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
