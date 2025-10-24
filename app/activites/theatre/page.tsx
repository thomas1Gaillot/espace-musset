import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ROUTES } from "@/data/route";

const Theatre = () => (
  <div className="min-h-screen py-12 px-4">
    <div className="container mx-auto">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={ROUTES.ACCUEIL}>Accueil</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={ROUTES.ACTIVITES.ROOT}>Activités</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{"Théâtre"}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Théâtre</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explorez votre créativité et votre expressivité à travers l'improvisation et le jeu
          théâtral dans un cadre ludique et bienveillant.
        </p>
      </div>

      <div className="flex flex-col  sm:flex-row   gap-12 mb-12">
        {/* Image principale */}
        <div className="relative h-[400px] w-full sm:w-[500px] rounded-lg overflow-hidden">
          <img
            src="/diseuses-amertume.jpeg"
            alt={"Théatre d'impro"}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-transparent" />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Le théâtre comme exploration de soi
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Nos ateliers théâtre privilégient le jeu, la spontanéité et la découverte de ses
              propres capacités expressives. À travers l'improvisation et des exercices ludiques,
              chacun explore sa créativité sans jugement.
            </p>
            <p>
              Le théâtre devient un outil de développement personnel qui permet de gagner en
              confiance, d'améliorer sa communication et de découvrir des facettes insoupçonnées de
              sa personnalité.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-earth-50/50 rounded-lg p-6">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Notre pédagogie</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Section à remplir</li>
            <li>• Section à remplir</li>
            <li>• Section à remplir</li>
            <li>• Section à remplir</li>
          </ul>
        </div>

        <div className="bg-warmBrown-50/30 rounded-lg p-6">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
            Ateliers proposés
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <div>
              <p className="font-medium">Improvisation théâtrale</p>
              <p className="text-sm">Nous contacter pour plus d'infos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sage-50/50 rounded-lg p-8 mb-12">
        <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-6">
          Ce que vous développerez
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Confiance en soi</h3>
            <p className="text-sm text-muted-foreground">Oser s'exprimer devant les autres</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Créativité</h3>
            <p className="text-sm text-muted-foreground">Improviser et innover</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Écoute</h3>
            <p className="text-sm text-muted-foreground">Attention aux autres et au groupe</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Expression</h3>
            <p className="text-sm text-muted-foreground">Gestuelle et présence scénique</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact</h2>
        <p className="text-lg text-muted-foreground mb-6">
          {"Contactez-nous par email à "}
          <span className="underline">lesdiseusesdebonneamertume@gmail.com</span>
        </p>
      </div>
    </div>
  </div>
);

export default Theatre;
