import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/route";
import Link from "next/link";

const JardinageUrbain = () => {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="container mx-auto">
                <Breadcrumb className="mb-8">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={ROUTES.ACCUEIL}>
                                Accueil
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={ROUTES.ECOLOGIE.ROOT}>
                                Ecologie
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{"Jardinage urbain"}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Jardinage Urbain
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Découvrez comment cultiver en ville, créer votre jardin urbain et
                        reconnecter avec la nature même en milieu urbain.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div className="relative h-80 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                            alt="Jardinage urbain"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">
                            Cultiver la nature en ville
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Le jardinage urbain nous permet de reconnecter avec les cycles naturels
                                et de créer des espaces verts même dans les plus petits appartements.
                                Nos ateliers vous accompagnent dans cette démarche enrichissante.
                            </p>
                            <p>
                                Que vous disposiez d'un balcon, d'une terrasse ou simplement d'un rebord
                                de fenêtre, nous vous montrons comment créer votre propre oasis de verdure
                                et cultiver vos propres légumes et aromates.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-sage-50/50 rounded-lg p-6">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                            Nos activités
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>• Création de jardins en bacs</li>
                            <li>• Culture d'aromates en intérieur</li>
                            <li>• Potagers sur balcon</li>
                            <li>• Compostage domestique</li>
                            <li>• Bouturage et multiplication</li>
                            <li>• Jardins verticaux</li>
                        </ul>
                    </div>

                    <div className="bg-earth-50/50 rounded-lg p-6">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                            Matériel fourni
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>• Graines et plants biologiques</li>
                            <li>• Terreau et compost</li>
                            <li>• Bacs et jardinières</li>
                            <li>• Outils de jardinage</li>
                            <li>• Guides pratiques</li>
                            <li>• Conseils personnalisés</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-8 mb-12">
                    <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-6">
                        Planning des ateliers
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Débutants</h3>
                            <p className="text-sm text-muted-foreground mb-1">
                                1er dimanche du mois - 10h-12h
                            </p>
                            <p className="text-xs text-muted-foreground">Bases du jardinage urbain</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Perfectionnement</h3>
                            <p className="text-sm text-muted-foreground mb-1">
                                3ème dimanche du mois - 10h-12h
                            </p>
                            <p className="text-xs text-muted-foreground">Techniques avancées</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                        Créez votre jardin urbain
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Rejoignez nos ateliers et repartez avec vos premières plantations
                    </p>
                    <Button size="lg" asChild>
                        <Link href={ROUTES.CONTACT}>Participer</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default JardinageUrbain;
