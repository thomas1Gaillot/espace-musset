export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif font-bold text-4xl text-earth-dark mb-8">Politique de confidentialité</h1>

        <div className="prose prose-lg max-w-none text-earth-medium space-y-8">
          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">
              Collecte des données personnelles
            </h2>
            <p>
              L'Association Espace Musset collecte des données personnelles dans le cadre de ses activités associatives,
              notamment lors des inscriptions aux activités, de la location de salles, et de l'envoi de notre
              newsletter.
            </p>
            <p>
              Les données collectées peuvent inclure : nom, prénom, adresse email, numéro de téléphone, adresse postale.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Finalités du traitement</h2>
            <p>Vos données personnelles sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gérer votre inscription aux activités de l'association</li>
              <li>Vous informer de nos événements et actualités</li>
              <li>Traiter vos demandes de location de salles</li>
              <li>Répondre à vos questions via notre formulaire de contact</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Base légale du traitement</h2>
            <p>Le traitement de vos données personnelles est fondé sur :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Votre consentement pour l'envoi de la newsletter</li>
              <li>L'exécution d'un contrat pour les inscriptions aux activités</li>
              <li>L'intérêt légitime de l'association pour la gestion de ses activités</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Conservation des données</h2>
            <p>
              Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles
              ont été collectées :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Données d'inscription : 3 ans après la fin de votre adhésion</li>
              <li>Données de contact : jusqu'à votre demande de désinscription</li>
              <li>Données de facturation : 10 ans conformément aux obligations comptables</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants
              :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
              <li>Droit de retirer votre consentement</li>
            </ul>
            <p>Pour exercer ces droits, contactez-nous à : contact@espacemusset.fr</p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
              personnelles contre la destruction, la perte, l'altération, la divulgation ou l'accès non autorisés.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Cookies</h2>
            <p>
              Notre site utilise des cookies techniques nécessaires au bon fonctionnement du site. Aucun cookie de
              traçage ou publicitaire n'est utilisé sans votre consentement.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits :<br />
              <strong>Email :</strong> contact@espacemusset.fr
              <br />
              <strong>Adresse :</strong> Association Espace Musset, 123 Rue de la République, 31000 Toulouse
            </p>
            <p>
              Vous avez également le droit d'introduire une réclamation auprès de la Commission Nationale de
              l'Informatique et des Libertés (CNIL).
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-earth-dark mb-4">Modifications</h2>
            <p>
              Cette politique de confidentialité peut être modifiée à tout moment. La version en vigueur est celle
              publiée sur notre site web.
            </p>
            <p>
              <strong>Dernière mise à jour :</strong> Janvier 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
