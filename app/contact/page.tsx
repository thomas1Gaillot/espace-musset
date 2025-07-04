import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                Accueil
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              Contact
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
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
                    52 Bis Rue Alfred de Musset<br />
                    31200 Toulouse<br />
                    France
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Transport</h3>
                  <p className="text-muted-foreground">
                    Métro ligne A - Minimes - Claude Nougaro<br />
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Depuis la station de métro, à pied</h3>
                  <p className="text-muted-foreground">
                    Au fond de la place, prendre la rue du Général Bourbaki vers la droite, puis la première à gauche, rue Biot. Au bout de cette rue, prendre la rue Alfred de Musset à gauche. Notre local est à 20 mètres à gauche.<br />
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                  <p className="text-muted-foreground">06 30 15 46 48</p>
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
              <div className="bg-sage-50/30 rounded-lg h-80 flex items-center justify-center overflow-hidden">
                <iframe id={"espace-musset-map"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.172408378903!2d1.428601215438378!3d43.62143034769658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb2e94d13dff%3A0xdc7a821da483bd99!2sESPACE%20MUSSET!5e0!3m2!1sfr!2sfr!4v1698888888888!5m2!1sfr!2sfr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Carte Espace Musset" ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};