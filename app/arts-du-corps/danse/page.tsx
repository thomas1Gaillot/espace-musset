import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Danse = () => {
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
              <BreadcrumbLink href="/arts-du-corps">
                Arts du corps
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{"Danse"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Danse
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Libérez votre expression corporelle à travers la danse libre, créative
            et accessible à tous, dans un esprit de joie et de partage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="relative h-80 rounded-lg overflow-hidden bg-gradient-to-br from-warmBrown-200 to-sage-200 flex items-center justify-center">
            <div className="text-center text-6xl">💃</div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              L'art du mouvement authentique
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nos ateliers de danse privilégient l'expression personnelle et la
                créativité plutôt que la technique pure. Dans un environnement
                bienveillant, chacun explore son propre langage corporel.
              </p>
              <p>
                Nous puisons dans différentes traditions (danse contemporaine,
                mouvement authentique, danses du monde) pour offrir une palette
                riche d'exploration corporelle et émotionnelle.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-warmBrown-50/30 rounded-lg p-6">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Nos approches
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Mouvement authentique et improvisation</li>
              <li>• Danse contemporaine accessible</li>
              <li>• Danses traditionnelles du monde</li>
              <li>• Expression corporelle libre</li>
              <li>• Danse thérapeutique</li>
              <li>• Création collective</li>
            </ul>
          </div>

          <div className="bg-sage-50/50 rounded-lg p-6">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Planning
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <p className="font-medium">Danse libre</p>
                <p className="text-sm">Mardi 19h-20h30</p>
              </div>
              <div>
                <p className="font-medium">Mouvement authentique</p>
                <p className="text-sm">Jeudi 18h-19h30</p>
              </div>
              <div>
                <p className="font-medium">Danses du monde</p>
                <p className="text-sm">Samedi 16h-17h30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 mb-12">
          <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-6">
            Bienfaits de la danse
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Liberté d'expression</h3>
              <p className="text-xs text-muted-foreground">Sortir des schémas habituels</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Condition physique</h3>
              <p className="text-xs text-muted-foreground">Souplesse et endurance</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Confiance en soi</h3>
              <p className="text-xs text-muted-foreground">Acceptation de son corps</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Lien social</h3>
              <p className="text-xs text-muted-foreground">Partage et complicité</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Dansez avec nous
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Aucune expérience requise, juste l'envie de bouger et d'explorer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Séance découverte
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Plus d'informations</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Danse;