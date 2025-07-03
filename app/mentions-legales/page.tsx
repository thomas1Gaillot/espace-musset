export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif font-bold text-4xl text-earth-dark mb-8">Mentions légales</h1>

        <div className="prose prose-lg max-w-none text-earth-medium space-y-8">
          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Informations légales</h2>
            <p>
              <strong>Dénomination :</strong> Association Espace Musset
              <br />
              <strong>Forme juridique :</strong> Association loi 1901
              <br />
              <strong>Siège social :</strong> 123 Rue de la République, 31000 Toulouse
              <br />
              <strong>Numéro SIRET :</strong> 123 456 789 00012
              <br />
              <strong>Numéro RNA :</strong> W313001234
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Directeur de publication</h2>
            <p>Le directeur de la publication est le Président de l'association Espace Musset.</p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              Vercel Inc.
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789
              <br />
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la
              propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
              téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement
              remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous
              constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler
              par email à contact@espacemusset.fr.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Liens hypertextes</h2>
            <p>
              Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources
              présentes sur le réseau Internet ne sauraient engager la responsabilité de l'Association Espace Musset.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :<br />
              <strong>Email :</strong> contact@espacemusset.fr
              <br />
              <strong>Téléphone :</strong> 05 61 23 45 67
              <br />
              <strong>Adresse :</strong> 123 Rue de la République, 31000 Toulouse
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
