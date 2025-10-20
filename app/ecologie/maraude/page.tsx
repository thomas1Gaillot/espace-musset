import EventList from "@/components/event-list";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { eventList } from "@/data/data.allevents";
import { ROUTES } from "@/data/route";
import Link from "next/link";

const Maraude = () => {
    const nextMaraude =    eventList.filter((e) => e.type.name === "Maraude")

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="container mx-auto">
                <Breadcrumb className="mb-8">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={ROUTES.ACCUEIL}>
                                {"Accueil"}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={ROUTES.ECOLOGIE.ROOT}>
                                {"Écologie & Volontariat"}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{"Maraude pour les sans-abris"}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* Titre & Intro */}
                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                        {"Maraude pour les sans-abris"}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {"Un moment de partage, d’écoute et de solidarité pour venir en aide aux plus démunis, dans un esprit d’ouverture et d’humanité."}
                    </p>
                </div>

                {/* Image + description */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div className="relative h-80 rounded-lg overflow-hidden">
                        <img
                            src="/event/maraude.jpg"
                            alt={"Maraude solidaire"}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">
                            {"Aller à la rencontre de l’autre"}
                        </h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                {"Chaque dernier dimanche du mois, nous partons en groupe à la rencontre des personnes sans-abri pour leur distribuer repas, boissons chaudes et vêtements."}
                            </p>
                            <p>
                                {"Au-delà du geste matériel, la maraude est avant tout un moment d’échange, d’écoute et de lien humain. Elle nous aide à dépasser nos préjugés et à renouer avec une véritable solidarité."}
                            </p>
                            <p>
                                {"L’après-midi, ceux qui le souhaitent peuvent rejoindre l’équipe pour préparer les repas et organiser les dons avant la distribution."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Détails pratiques */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-sage-50/50 rounded-lg p-6">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                            {"Organisation des maraudes"}
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>• {"Dernier dimanche de chaque mois"}</li>
                            <li>• {"Horaires : 16h00 → 19h30"}</li>
                            <li>• {"Préparation des repas dès 14h pour les volontaires"}</li>
                            <li>• {"Départ depuis l’Espace Musset"}</li>
                            <li>• {"Distribution dans le centre-ville"}</li>
                        </ul>
                    </div>

                    <div className="bg-earth-50/50 rounded-lg p-6">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                            {"Ce que nous apportons"}
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>• {"Repas chauds et boissons"}</li>
                            <li>• {"Vêtements et couvertures"}</li>
                            <li>• {"Produits d’hygiène"}</li>
                            <li>• {"Sourires et discussions sincères"}</li>
                            <li>• {"Un peu de chaleur humaine"}</li>
                        </ul>
                    </div>
                </div>
                <div id='agenda' className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
                            <EventList data={nextMaraude} title='Prochaine Maraude' />
                          </div>
                {/* Bloc contact */}
                <div className="bg-primary/5 rounded-lg p-8 mb-12 text-center">
                    <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                        {"Participer à la prochaine maraude"}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        {"Pour rejoindre le groupe, contactez Claire qui coordonne les maraudes et la préparation des repas."}
                    </p>
                    <Button size="lg" variant="outline" asChild>
                        <Link href={ROUTES.CONTACT}>{"Contacter Claire"}</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Maraude;
