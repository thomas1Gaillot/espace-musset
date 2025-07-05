import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/data/route";
import Link from "next/link";

const Yoga = () => {
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
                            <BreadcrumbLink href={ROUTES.ARTS_DU_CORPS.ROOT}>
                                Arts du corps
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{"Yoga"}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Yoga
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Harmonisez corps et esprit à travers des pratiques douces et dynamiques
                        adaptées à tous les niveaux dans un environnement bienveillant.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div className="relative h-80 rounded-lg overflow-hidden bg-gradient-to-br from-sage-200 to-warmBrown-200 flex items-center justify-center">
                        <div className="text-center text-6xl">🧘</div>
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">
                            L'union du corps et de l'esprit
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Nos cours de yoga offrent un espace de paix et de reconnexion avec
                                soi-même. Dans le respect des traditions ancestrales, nous adaptons
                                la pratique aux besoins contemporains et à tous les corps.
                            </p>
                            <p>
                                Que vous soyez débutant ou pratiquant expérimenté, nos séances
                                vous accompagnent dans l'exploration de votre potentiel corporel
                                et de votre sérénité intérieure.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {[
                        {
                            title: "Hatha Yoga",
                            description: "Pratique douce axée sur les postures et la respiration",
                            schedule: "Lundi 18h30-19h45"
                        },
                        {
                            title: "Vinyasa Flow",
                            description: "Enchaînements dynamiques synchronisés avec la respiration",
                            schedule: "Mercredi 19h-20h15"
                        },
                        {
                            title: "Yin Yoga",
                            description: "Postures tenues longtemps pour la relaxation profonde",
                            schedule: "Samedi 10h-11h15"
                        }
                    ].map((style, index) => (
                        <div key={index} className="bg-sage-50/50 rounded-lg p-6">
                            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                                {style.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">{style.description}</p>
                            <p className="text-xs font-medium text-primary">{style.schedule}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-earth-50/50 rounded-lg p-8 mb-12">
                    <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-6">
                        Informations pratiques
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Tarifs</h3>
                            <p className="text-sm text-muted-foreground">
                                20€ / cours<br />
                                70€ / mois illimité
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Matériel</h3>
                            <p className="text-sm text-muted-foreground">
                                Tapis fournis<br />
                                Apportez une serviette
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Niveau</h3>
                            <p className="text-sm text-muted-foreground">
                                Tous niveaux<br />
                                Débutants bienvenus
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">Cours d'essai</h3>
                            <p className="text-sm text-muted-foreground">
                                Premier cours<br />
                                gratuit
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                        Commencez votre pratique
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Venez découvrir les bienfaits du yoga dans notre espace dédié au bien-être
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg">
                            Cours d'essai gratuit
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href={ROUTES.CONTACT}>Nous contacter</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Yoga;