import EventList from "@/components/event-list";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { eventList } from "@/data/data.allevents";
import { ROUTES } from "@/data/route";
import { EuroIcon, PhoneIcon, SettingsIcon, GlobeIcon, HeartIcon } from "lucide-react";

const Feldenkrais = () => {
    const feldenkraisEvents = eventList.filter((e) => e.category.name === "Arts" && e.type.name === "Feldenkrais");
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
                        <BreadcrumbLink href={ROUTES.ARTS.ROOT}>
                            {"Arts du corps"}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{"Méthode Feldenkrais"}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="text-center mb-12">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                    {"Méthode Feldenkrais"}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    {"Bougez mieux pour vivre mieux ! Découvrez comment la méthode Feldenkrais peut transformer votre manière de bouger et améliorer votre bien-être global."}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 mb-12">
                {/* Image principale */}
                <div className="relative h-[300px] w-full sm:w-[1200px] rounded-lg overflow-hidden">
                    <img
                        src="/cours/feldenkrais.jpg"
                        alt={"Méthode Feldenkrais"}
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-transparent" />
                </div>

                <div className="flex flex-col justify-center space-y-6">
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                        {"Bougez avec plus d’aisance, moins d’effort"}
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            {"Vous voudriez bouger avec plus d’aisance, moins d’effort au quotidien ? Vous souffrez de douleurs liées à votre position de travail, à des blessures ou à des mouvements répétitifs ?"}
                        </p>
                        <p>
                            {"Vous souhaitez améliorer vos performances sportives, votre façon de marcher, de danser ou de jouer d’un instrument ? La méthode Feldenkrais propose une approche douce et consciente du mouvement pour retrouver confort et efficacité corporelle."}
                        </p>
                        <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground">
                            {"Séance découverte au tarif préférentiel de 5 €"}
                        </div>
                    </div>
                </div>
            </div>
             <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
                                <EventList data={feldenkraisEvents} title="Nos prochains évènements" />
                        </div>
            <div className="text-center bg-secondary/10 p-4 rounded-lg flex flex-col items-center">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {"Informations et Contact"}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                    {"Cours Feldenkrais avec Ghyslaine Vaysset"}
                </p>
                <a
                    
                    href="tel:+33626432402"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
                >
                    <PhoneIcon size={18} />
                    {"Appeler Ghyslaine au 06 26 43 24 02"}
                </a>
                <p className="text-sm text-muted-foreground mt-6">
                    <EuroIcon className="inline-block mr-1 mb-1" size={14} />
                    {"Séance découverte à 5 €"}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    <HeartIcon className="inline-block mr-1 mb-1" size={14} />
                    {"Prenez soin de vous, tout en douceur et en conscience."}
                </p>
                <a
                    href="https://moments-feldenkrais.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-4 hover:text-primary transition text-sm text-muted-foreground"
                >
                    <GlobeIcon size={16} />
                    {"moments-feldenkrais.com"}
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                    <SettingsIcon className="inline-block mr-1 mb-1" size={14} />
                    {"Tout niveau, séances adaptées à chacun."}
                </p>
            </div>
        </div>
    </div>);
};

export default Feldenkrais;
