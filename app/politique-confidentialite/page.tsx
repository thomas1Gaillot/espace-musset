import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                Accueil
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              Politique de Confidentialité
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">
          Politique de Confidentialité
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Collecte des informations
            </h2>
            <p className="text-muted-foreground">
              Nous recueillons des informations lorsque vous vous inscrivez à nos activités,
              vous abonnez à notre newsletter ou remplissez un formulaire. Les informations
              recueillies incluent votre nom, votre adresse e-mail et votre numéro de téléphone.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Utilisation des informations
            </h2>
            <p className="text-muted-foreground">
              Toutes les informations que nous recueillons auprès de vous peuvent être utilisées
              pour personnaliser votre expérience, améliorer notre site web, améliorer le service
              client et vous contacter par e-mail périodiquement avec des informations sur nos
              activités et événements.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Protection des informations
            </h2>
            <p className="text-muted-foreground">
              Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité
              de vos informations personnelles. Nous utilisons un cryptage à la pointe de la
              technologie pour protéger les informations sensibles transmises en ligne.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Vos droits
            </h2>
            <p className="text-muted-foreground">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de
              suppression de vos données personnelles. Vous pouvez exercer ces droits en nous
              contactant à l'adresse : contact@espacemusset.fr
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};