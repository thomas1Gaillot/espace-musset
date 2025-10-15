import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ROUTES } from "@/data/route";
import { CoffeeIcon, EuroIcon, HourglassIcon, MapIcon, SettingsIcon } from "lucide-react";

const YogaRire = () => (
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
                        <BreadcrumbLink href={ROUTES.ARTS.ROOT}>
                            Arts
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{"Yoga du Rire"}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="text-center mb-12">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Yoga du rire : libérez votre joie
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Venez pratiquer le yoga du rire pour réduire le stress, renforcer votre santé et partager des moments de joie.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 mb-12">
                {/* Image principale */}
                <div className="relative h-[600px] w-full sm:w-[600px] rounded-lg overflow-hidden">
                    <img
                        src="/cours/yoga-rire.jpg"
                        alt={"yoga du rire"}
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-transparent" />
                </div>

                <div className="flex flex-col justify-center space-y-6">
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                        Rire ensemble pour se sentir bien
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                          Tout le monde peut participer, sans expérience préalable.  
                          Au programme : exercices de respiration, rires simulés qui deviennent réels, relaxation et partage convivial.
                        </p>
                        <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground hover:underline">
                            <a href={'/#agenda'}>
                            Voir l'agenda pour les séances
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center bg-secondary/10 p-4 rounded-lg flex flex-col items-center">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Contact
                </h2>
               <a
                    href="tel:+33619870690"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
                >
                    Appeler Béatrice au 06 19 87 06 90
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                    <EuroIcon className="inline-block mr-1 mb-1" size={14} />
                     Nous contacter
                </p>
                 <p className="text-sm text-muted-foreground mt-2">
                    <CoffeeIcon className="inline-block mr-1 mb-1" size={14} />
                     + 5 € /an d'adhésion au café associatif
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    <HourglassIcon className="inline-block mr-1 mb-1" size={14} />
                     Voir l'agenda :)
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    <MapIcon className="inline-block mr-1 mb-1" size={14} />
                    Espace Musset, 52 Bis Rue Alfred de Musset, 31200 Toulouse
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    <SettingsIcon className="inline-block mr-1 mb-1" size={14} />
                    Débutants bienvenus. Réservation par téléphone conseillé.
                </p>
            </div>
        </div>
    </div>
);

export default YogaRire;
