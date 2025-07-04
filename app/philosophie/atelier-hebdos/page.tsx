import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AteliersHebdos = () => {
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
                            <BreadcrumbLink href="/philosophie">
                                Philosophie
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{"Ateliers hebdomadaires"}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>


                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Ateliers Hebdomadaires de Philosophie
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Chaque semaine, nous nous retrouvons pour explorer ensemble les grandes
                        questions philosophiques dans un esprit de dialogue et de découverte.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div className="relative h-80 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                            alt="Atelier philosophie"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">
                            Un rendez-vous philosophique régulier
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Nos ateliers hebdomadaires constituent le cœur de notre activité philosophique.
                                Chaque semaine, nous nous réunissons pour explorer un thème différent,
                                guidés par la curiosité et l'envie de comprendre.
                            </p>
                            <p>
                                Ces rencontres s'articulent autour du dialogue socratique : nous questionnons
                                nos certitudes, échangeons nos perspectives et construisons ensemble une
                                réflexion collective enrichissante.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-earth-50/50 rounded-lg p-6">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                            Informations pratiques
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><strong>Quand :</strong> Tous les jeudis, 19h-21h</li>
                            <li><strong>Où :</strong> Salle de conférence</li>
                            <li><strong>Tarif :</strong> 15€ par séance ou 50€/mois</li>
                            <li><strong>Public :</strong> Ouvert à tous, débutants bienvenus</li>
                        </ul>
                    </div>

                    <div className="bg-sage-50/50 rounded-lg p-6">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                            Thèmes récents
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>• Qu'est-ce que la liberté ?</li>
                            <li>• Le sens de la vie</li>
                            <li>• Éthique et intelligence artificielle</li>
                            <li>• L'amitié selon Aristote</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                        Rejoignez nos ateliers
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Aucun prérequis nécessaire, juste l'envie de questionner et d'apprendre
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">S'inscrire</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AteliersHebdos;