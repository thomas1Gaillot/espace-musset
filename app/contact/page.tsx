import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MapIcon as Metro } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sage/20 to-terracotta/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="w-16 h-16 text-sage mx-auto mb-6" />
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-earth-dark mb-6">Contact</h1>
            <p className="text-xl text-earth-medium mb-8">
              Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif font-bold text-3xl text-earth-dark mb-8">Nos coordonnées</h2>

              <div className="space-y-6">
                <Card className="bg-sage/10 border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-sage mt-1" />
                      <div>
                        <h3 className="font-semibold text-earth-dark mb-2">Adresse</h3>
                        <p className="text-earth-medium">
                          123 Rue de la République
                          <br />
                          31000 Toulouse
                          <br />
                          France
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-terracotta/10 border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Metro className="w-6 h-6 text-terracotta mt-1" />
                      <div>
                        <h3 className="font-semibold text-earth-dark mb-2">Transports</h3>
                        <p className="text-earth-medium">
                          Métro Capitole (Ligne A) - 5 min à pied
                          <br />
                          Bus lignes 2, 10, 12 - Arrêt République
                          <br />
                          Parking Capitole à 200m
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-earth-medium/10 border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-earth-medium mt-1" />
                      <div>
                        <h3 className="font-semibold text-earth-dark mb-2">Téléphone</h3>
                        <p className="text-earth-medium">
                          05 61 23 45 67
                          <br />
                          <span className="text-sm">Lun-Ven : 9h-18h</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-sage/10 border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-sage mt-1" />
                      <div>
                        <h3 className="font-semibold text-earth-dark mb-2">Email</h3>
                        <p className="text-earth-medium">
                          contact@espacemusset.fr
                          <br />
                          <span className="text-sm">Réponse sous 24h</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif font-bold text-3xl text-earth-dark mb-8">Écrivez-nous</h2>

              <Card className="border-sage/20">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-earth-dark font-semibold mb-2">Prénom *</label>
                        <Input type="text" required className="border-sage/30 focus:border-sage" />
                      </div>
                      <div>
                        <label className="block text-earth-dark font-semibold mb-2">Nom *</label>
                        <Input type="text" required className="border-sage/30 focus:border-sage" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-earth-dark font-semibold mb-2">Email *</label>
                      <Input type="email" required className="border-sage/30 focus:border-sage" />
                    </div>

                    <div>
                      <label className="block text-earth-dark font-semibold mb-2">Téléphone</label>
                      <Input type="tel" className="border-sage/30 focus:border-sage" />
                    </div>

                    <div>
                      <label className="block text-earth-dark font-semibold mb-2">Sujet *</label>
                      <select className="w-full p-3 border border-sage/30 rounded-md focus:border-sage focus:outline-none">
                        <option value="">Choisissez un sujet</option>
                        <option value="info">Informations générales</option>
                        <option value="inscription">Inscription à une activité</option>
                        <option value="location">Location de salle</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-earth-dark font-semibold mb-2">Message *</label>
                      <Textarea
                        required
                        rows={5}
                        className="border-sage/30 focus:border-sage"
                        placeholder="Décrivez votre demande..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-sage hover:bg-sage/80 text-cream">
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Clock className="w-12 h-12 text-sage mx-auto mb-6" />
            <h2 className="font-serif font-bold text-3xl text-earth-dark mb-8">Horaires d'ouverture</h2>
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-8">
                <div className="space-y-4 text-earth-dark">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Lundi - Vendredi</span>
                    <span>9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Samedi</span>
                    <span>10h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-sage/20">
                  <p className="text-earth-medium text-sm">
                    Accueil téléphonique : Lundi au Vendredi de 9h à 18h
                    <br />
                    Permanence le samedi matin sur rendez-vous
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-3xl text-center text-earth-dark mb-8">Nous trouver</h2>
          <div className="bg-sage/10 rounded-2xl p-8 text-center">
            <div className="bg-[url('/placeholder.svg?height=300&width=600')] bg-cover bg-center h-64 rounded-lg mb-4"></div>
            <p className="text-earth-medium">
              L'Espace Musset est situé au cœur du centre historique de Toulouse, facilement accessible en transports en
              commun et à pied depuis la place du Capitole.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
