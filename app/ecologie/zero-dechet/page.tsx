import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ZeroDechet = () => {
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
                            <BreadcrumbLink href="/ecologie">
                                Ecologie
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{"Zéro déchet"}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Démarche Zéro Déchet
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Adoptez un mode de vie durable en réduisant drastiquement vos déchets
                        grâce à des gestes simples et des alternatives écologiques.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div className="relative h-80 rounded-lg overflow-hidden bg-gradient-to-br from-sage-200 to-earth-200 flex items-center justify-center">
                        <div className="text-center text-6xl">♻️</div>
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">
                            Vers un mode de vie sans déchets
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                La démarche zéro déchet n'est pas une contrainte mais une libération.
                                Elle nous invite à repenser notre consommation et à découvrir des
                                alternatives plus saines pour nous et pour la planète.
                            </p>
                            <p>
                                Nos ateliers vous accompagnent pas à pas dans cette transition,
                                avec des solutions concrètes, économiques et adaptées à votre
                                style de vie urbain.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        {
                            title: "Cuisine zéro déchet",
                            description: "Éviter le gaspillage alimentaire et les emballages"
                        },
                        {
                            title: "Salle de bain minimaliste",
                            description: "Produits naturels et contenants réutilisables"
                        },
                        {
                            title: "Courses responsables",
                            description: "Achats en vrac et circuits courts"
                        },
                        {
                            title: "Réparation et upcycling",
                            description: "Donner une seconde vie aux objets"
                        }
                    ].map((theme, index) => (
                        <div key={index} className="bg-sage-50/50 rounded-lg p-6 text-center">
                            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                                {theme.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{theme.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-warmBrown-50/30 rounded-lg p-8 mb-12">
                    <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-6">
                        Les 5 R du zéro déchet
                    </h2>
                    <div className="grid md:grid-cols-5 gap-4 text-center">
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Refuser</h3>
                            <p className="text-xs text-muted-foreground">Ce dont on n'a pas besoin</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Réduire</h3>
                            <p className="text-xs text-muted-foreground">Sa consommation</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Réutiliser</h3>
                            <p className="text-xs text-muted-foreground">Les objets existants</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Recycler</h3>
                            <p className="text-xs text-muted-foreground">En dernier recours</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Composter</h3>
                            <p className="text-xs text-muted-foreground">Les déchets organiques</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                        Commencez votre transition
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Rejoignez notre défi 30 jours vers le zéro déchet avec un accompagnement personnalisé
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg">
                            Rejoindre le défi
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/contact">En savoir plus</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ZeroDechet;