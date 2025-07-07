import EventList from "@/components/event-list";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { eventList } from "@/data/data.allevents";
import { ROUTES } from "@/data/route";

const RencontresPhilo = () => {
    const recentRencontresPhilo = eventList.filter((e) => e.category.name === 'Philosophie' && e.type.name === 'Rencontre philo')

    return (
        <div className=" py-12 mx-auto">
            <Breadcrumb className="container mb-8">
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
                        <BreadcrumbPage>{"Rencontre Philo"}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="container text-center mb-12">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Rencontre Philo
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    {"Une rencontre philo est un moment d’échange collectif centré sur des questionnements philosophiques. "}
                </p>
            </div>

            <div className="container grid lg:grid-cols-2 gap-12 mb-12">
                <div className="relative h-80 rounded-lg overflow-hidden">
                    <img
                        src="/rencontre-philo.jpeg"
                        alt="Rencontre philosophie"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center space-y-6">
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                        Echanger activement et collectivement
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            {"Dans un premier temps, l’animateur ou l’animatrice présente le sujet en apportant quelques repères théoriques. S’ensuit un échange en petits groupes autour d’une ou deux questions. "}
                        </p>
                        <p>
                            {"L’objectif est de réfléchir ensemble, d’argumenter, d’écouter différents points de vue et de développer une pensée critique."}
                        </p>
                        <p>
                            La rencontre philo repose sur
                            <strong>{" l’écoute active "}</strong>
                            et  <strong>{" le respect de la parole "} </strong>de chacun.
                            Elle encourage la pensée autonome et l’expression claire des idées.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container grid md:grid-cols-3 gap-6 mb-12">
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
                        Présentation du sujet (15min)<br />
                        + échanges en petit groupe (30min) <br />
                        + partage
                    </p>
                </div>
                <div className="bg-earth-50/50 rounded-lg p-6 text-center">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                        Tarif
                    </h3>
                    <p className="text-muted-foreground">
                        à partir de 6 € <br />Gratuit pour les adhérents<br />
                    </p>
                </div>
            </div>
            <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
                <EventList data={recentRencontresPhilo} title='Rencontre philo à venir' />
            </div>
        </div>
    );
};

export default RencontresPhilo;