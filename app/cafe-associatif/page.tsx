import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CafeAssociatifPage() {
  const services = [
    {
      title: "Espace de coworking",
      description: "Travaillez dans un environnement stimulant et bienveillant"
    },
    {
      title: "Rencontres interculturelles",
      description: "Échangez avec des personnes de tous horizons"
    },
    {
      title: "Événements communautaires",
      description: "Participez à nos soirées thématiques et débats spontanés"
    },
    {
      title: "Soutien aux associations",
      description: "Un lieu de réunion pour les initiatives locales"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Café Associatif
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Au cœur de l'Espace Musset, notre café associatif est un lieu de rencontre
            ouvert à tous, où la convivialité et l'échange interculturel se conjuguent
            autour d'un café équitable et de moments de partage authentiques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Image principale */}
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="/cafe-asso.jpeg"
              alt="Café associatif"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Un espace de vie communautaire
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Notre café associatif incarne les valeurs de partage et d'inclusion qui
                animent l'Espace Musset. C'est un lieu où chacun peut venir travailler,
                se détendre, rencontrer d'autres personnes ou simplement profiter d'un
                moment de calme.
              </p>
              <p>
                Nous proposons des boissons chaudes issues du commerce équitable,
                des collations saines et locales, dans une atmosphère chaleureuse
                qui favorise les échanges spontanés et les nouvelles amitiés.
              </p>
              <p>
                Le café sert également de point de rendez-vous pour de nombreuses
                activités de l'Espace Musset et accueille régulièrement des événements
                culturels intimistes.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-semibold text-center text-foreground mb-8">
            Ce que nous offrons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="font-serif text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Horaires et infos pratiques */}
        <div className="bg-sage-50/50 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Horaires d'ouverture
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Lundi - Vendredi:</strong> 9h00 - 19h00</p>
                <p><strong>Samedi:</strong> 10h00 - 18h00</p>
                <p><strong>Dimanche:</strong> 14h00 - 18h00</p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Accès libre
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Entrée libre et gratuite</p>
                <p>• WiFi gratuit</p>
                <p>• Prises électriques disponibles</p>
                <p>• Accessible aux personnes à mobilité réduite</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Venez nous rencontrer !
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Que ce soit pour travailler, se détendre ou rencontrer de nouvelles personnes,
            notre café vous accueille dans une atmosphère bienveillante.
          </p>
          <Button size="lg" className="mr-4">
            Nous rendre visite
          </Button>
        </div>
      </div>
    </div>
  );
};