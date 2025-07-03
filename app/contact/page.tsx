import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MapIcon as Metro } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nous serions ravis d'échanger avec vous. N'hésitez pas à nous contacter 
            pour toute question ou pour rejoindre notre communauté.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Nos coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                  <p className="text-muted-foreground">
                    123 Rue de la République<br />
                    31000 Toulouse<br />
                    France
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Transport</h3>
                  <p className="text-muted-foreground">
                    Métro ligne A - Station République<br />
                    Bus 14, 38 - Arrêt République
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                  <p className="text-muted-foreground">05 61 XX XX XX</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">contact@espacemusset.fr</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">Horaires d'ouverture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>10h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>14h00 - 18h00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstname">Prénom</Label>
                      <Input id="firstname" placeholder="Votre prénom" />
                    </div>
                    <div>
                      <Label htmlFor="lastname">Nom</Label>
                      <Input id="lastname" placeholder="Votre nom" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre.email@example.com" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Téléphone (optionnel)</Label>
                    <Input id="phone" type="tel" placeholder="06 XX XX XX XX" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" placeholder="Objet de votre message" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={6}
                      placeholder="Décrivez votre demande, vos questions ou partagez-nous votre intérêt pour nos activités..."
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Plan et accès */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-center">Nous trouver</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-sage-50/30 rounded-lg h-64 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Plan interactif de l'Espace Musset<br />
                  123 Rue de la République, 31000 Toulouse<br />
                  <span className="text-sm">Métro République - Ligne A</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};