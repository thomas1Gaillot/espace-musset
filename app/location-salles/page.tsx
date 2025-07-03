import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LocationSallesPage() {
  const salles = [
    {
      name: "Salle de conférence",
      capacity: "50 personnes",
      features: ["Vidéoprojecteur", "Sonorisation", "WiFi", "Accessibilité PMR"],
      price: "120€/jour"
    },
    {
      name: "Atelier créatif",
      capacity: "20 personnes",
      features: ["Tables modulables", "Éclairage naturel", "Matériel artistique", "Point d'eau"],
      price: "80€/jour"
    },
    {
      name: "Salle de mouvement",
      capacity: "30 personnes",
      features: ["Parquet", "Miroirs", "Système audio", "Vestiaires"],
      price: "100€/jour"
    },
    {
      name: "Espace café",
      capacity: "40 personnes",
      features: ["Cuisine équipée", "Mobilier modulable", "Terrasse", "Ambiance chaleureuse"],
      price: "150€/jour"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Location de Salles
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Louez nos espaces chaleureux et modulables pour vos événements, formations,
            réunions ou célébrations. Des lieux inspirants qui reflètent nos valeurs
            de convivialité et de partage.
          </p>
        </div>

        {/* Description générale */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Espaces à louer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Des espaces à votre image
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                L'Espace Musset met à disposition ses différentes salles pour accueillir
                vos projets associatifs, professionnels ou personnels. Nos espaces
                reflètent nos valeurs d'ouverture et de bienveillance.
              </p>
              <p>
                Que ce soit pour une conférence, un atelier, une formation ou une
                célébration, nous vous proposons des environnements adaptés et
                équipés selon vos besoins.
              </p>
              <p>
                Nos tarifs préférentiels pour les associations et les projets à
                vocation sociale témoignent de notre engagement communautaire.
              </p>
            </div>
          </div>
        </div>

        {/* Nos salles */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-semibold text-center text-foreground mb-8">
            Nos espaces disponibles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {salles.map((salle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-serif text-xl">{salle.name}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {salle.capacity}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg text-foreground">{salle.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Équipements inclus :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {salle.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conditions et services */}
        <div className="bg-sage-50/50 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Services inclus
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Accueil et accompagnement</li>
                <li>• Ménage de fin de prestation</li>
                <li>• Accès aux sanitaires</li>
                <li>• WiFi haut débit</li>
                <li>• Chauffage et éclairage</li>
                <li>• Assurance responsabilité civile</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Tarifs préférentiels
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Associations:</strong> -30% sur tous nos tarifs</li>
                <li>• <strong>Projets sociaux:</strong> -20% pour les initiatives citoyennes</li>
                <li>• <strong>Événements récurrents:</strong> Dégressif à partir de 5 locations</li>
                <li>• <strong>Demi-journée:</strong> 60% du tarif journalier</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Processus de réservation */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-6">
            Comment réserver ?
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">1</div>
              <h3 className="font-medium text-foreground">Contact</h3>
              <p className="text-sm text-muted-foreground">Appelez-nous ou envoyez un email</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">2</div>
              <h3 className="font-medium text-foreground">Visite</h3>
              <p className="text-sm text-muted-foreground">Découvrez nos espaces</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">3</div>
              <h3 className="font-medium text-foreground">Devis</h3>
              <p className="text-sm text-muted-foreground">Recevez votre proposition personnalisée</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">4</div>
              <h3 className="font-medium text-foreground">Réservation</h3>
              <p className="text-sm text-muted-foreground">Confirmez votre événement</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Organisez votre événement chez nous
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Contactez-nous pour une visite ou un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Demander un devis
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://kaktus.com" target="_blank" rel="noopener noreferrer">
                Réserver sur Kaktus
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};