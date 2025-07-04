import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Conferences = () => {
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
                            <BreadcrumbPage>{"Conférences"}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Conférences Philosophiques
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Rencontres avec des philosophes, chercheurs et penseurs pour approfondir
                        nos connaissances sur les grandes questions contemporaines.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div className="relative h-80 rounded-lg overflow-hidden bg-gradient-to-br from-earth-200 to-sage-200 flex items-center justify-center">
                        <div className="text-center text-6xl">🎤</div>
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">
                            Rencontrer les penseurs d'aujourd'hui
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Nos conférences invitent des philosophes, des chercheurs et des intellectuels
                                à partager leurs travaux et leurs réflexions avec notre communauté. Ces
                                rencontres privilégiées permettent d'approfondir des sujets complexes.
                            </p>
                            <p>
                                Chaque conférence est suivie d'un temps d'échanges avec le public,
                                favorisant le dialogue direct entre les participants et l'intervenant
                                dans un cadre convivial et respectueux.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-warmBrown-50/30 rounded-lg p-6 text-center">
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                            Fréquence
                        </h3>
                        <p className="text-muted-foreground">
                            2-3 conférences<br />
                            par trimestre
                        </p>
                    </div>
                    <div className="bg-sage-50/50 rounded-lg p-6 text-center">
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                            Format
                        </h3>
                        <p className="text-muted-foreground">
                            Conférence (1h)<br />
                            + débat (30min)
                        </p>
                    </div>
                    <div className="bg-earth-50/50 rounded-lg p-6 text-center">
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                            Tarif
                        </h3>
                        <p className="text-muted-foreground">
                            12€ (8€ adhérents)<br />
                            Gratuit -18 ans
                        </p>
                    </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-8 mb-12">
                    <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-6">
                        Conférences récentes
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                "L'éthique à l'ère du numérique"
                            </h3>
                            <p className="text-sm text-muted-foreground mb-1">
                                Dr. Marie Dubois, Philosophe des sciences
                            </p>
                            <p className="text-xs text-muted-foreground">Mars 2024</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                "Repenser la nature en philosophie"
                            </h3>
                            <p className="text-sm text-muted-foreground mb-1">
                                Prof. Jean-Luc Martin, Université de Toulouse
                            </p>
                            <p className="text-xs text-muted-foreground">Janvier 2024</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                        Prochaine conférence
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Consultez notre agenda pour ne manquer aucune de nos rencontres intellectuelles
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Voir l'agenda</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Conferences;