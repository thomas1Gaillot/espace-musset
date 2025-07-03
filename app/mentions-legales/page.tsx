export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">
          Mentions Légales
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Informations légales
            </h2>
            <div className="text-muted-foreground space-y-2">
              <p><strong>Raison sociale :</strong> Association Espace Musset</p>
              <p><strong>Siège social :</strong> 52 Bis Rue Alfred de Musset, 31200 Toulouse</p>
              <p><strong>Téléphone :</strong> 06 30 15 46 48 XX XX XX</p>
              <p><strong>Email :</strong> contact@espacemusset.fr</p>
              <p><strong>Numéro SIRET :</strong> XXX XXX XXX XXXXX</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Hébergement
            </h2>
            <p className="text-muted-foreground">
              Ce site est hébergé par Lovable, dont le siège social est situé en ligne.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-muted-foreground">
              Le contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels)
              est la propriété exclusive de l'Association Espace Musset, à l'exception des
              marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Responsabilité
            </h2>
            <p className="text-muted-foreground">
              Les informations contenues sur ce site sont aussi précises que possible et le
              site remis à jour à différentes périodes de l'année, mais peut toutefois contenir
              des inexactitudes ou des omissions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};