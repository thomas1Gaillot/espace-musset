import EventList from "@/components/event-list";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { eventList } from "@/data/data.allevents";
import { ROUTES } from "@/data/route";
import Link from "next/link";

const AteliersHebdos = () => {
    const recentAtelierHebdosEvent = eventList.filter((e) => e.category.name === 'Philosophie' && e.type.name === 'Atelier')

    return (
        <div className="py-12 mx-auto ">
            <Breadcrumb className="mb-8 container">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={ROUTES.ACCUEIL}>
                            Accueil
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href={ROUTES.PHILOSOPHIE.ROOT}>
                            Philosophie
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{"Ateliers hebdomadaires"}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>


            <div className="text-center mb-12 container">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Ateliers Hebdomadaires de Philosophie
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Chaque semaine, nous nous retrouvons pour explorer ensemble les grandes
                    questions philosophiques dans un esprit de dialogue et de découverte.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12 container">
                <div className="relative h-80 rounded-lg overflow-hidden">
                    <img
                        src="/event/atelier-philo.jpg"
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
                            Chaque semaine, nous nous réunissons pour explorer un thème différent autour des philosophies d'orient et d'occident.
                        </p>
                        <p>
                            Ces rencontres s'articulent en trois partie : un cours, un repas convivial et un moment d'échange et de questions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2  gap-8 mb-12 container">
                <div className="bg-earth-50/50  h-max rounded-lg p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                        Informations pratiques
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><strong>Quand :</strong> 1 fois par semaine, 19h30-22h00</li>
                        <li><strong>Où :</strong> Salle de cours au premier étage, 52 Bis Rue Alfred de Musset, 31200 Toulouse</li>
                        <li><strong>Tarif :</strong> 6€ les séance découverte, et ~250€ pour le cycle entier (18 ateliers)</li>
                        <li><strong>Public :</strong> Tout type de  public</li>
                    </ul>
                </div>
            </div>
            <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
                <EventList data={recentAtelierHebdosEvent} title='Ateliers philo à venir' />
            </div>

            <div className="text-center container">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    Rejoignez nos ateliers
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                    Aucun prérequis nécessaire, juste l'envie de questionner et d'apprendre
                </p>
                <Button size="lg" asChild>
                    <Link href={ROUTES.CONTACT}>S'inscrire</Link>
                </Button>
            </div>
        </div>
    );
};

export default AteliersHebdos;