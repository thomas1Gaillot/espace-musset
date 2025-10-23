import EventList from "@/components/event-list";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { eventList } from "@/data/data.allevents";
import { ROUTES } from "@/data/route";
import { EuroIcon, HourglassIcon, MapIcon, SettingsIcon, GlobeIcon, InstagramIcon, PhoneIcon, MailIcon } from "lucide-react";

const QiGong = () => {
    const QiGongEvents = eventList.filter((e) => e.category.name === "Arts" && e.type.name === "Qi Gong");

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
                        <BreadcrumbPage>{"Qi Gong"}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="text-center mb-12">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                    {"Qi Gong"}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    {"Venez découvrir le Qi Gong et les arts Taoïstes périphériques à cette pratique avec Martial Gontrand, enseignant en Qi Gong depuis 3 ans chez Leçon du Gong."}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-12 mb-12">
                {/* Image principale */}
                <div className="relative h-[300px] w-full sm:w-[1200px] rounded-lg overflow-hidden">
                    <img
                        src="/cours/qi-gong.png"
                        alt={"Qi Gong"}
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-transparent" />
                </div>

                <div className="flex flex-col justify-center space-y-6">
                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                        {"Une pratique pour se transformer de l'intérieur"}
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            {"Formé auprès de l’Institut des Arts Énergétiques Chinois de Toulouse, actuellement élève de Serge Augier (héritier de l’école DaXuan) et diplômé de l’école du Mont Emei après avoir suivi les enseignements du Maître Qiao Zhengqan, Martial propose aujourd’hui de transmettre l’ensemble de ses techniques à des personnes motivées pour se transformer de l’intérieur."}
                        </p>
                        <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground">
                            {"10 élèves maximum – places limitées"}
                        </div>
                    </div>
                </div>
            </div>

             <div className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
                    <EventList data={QiGongEvents} title="Nos prochains évènements d'arts du corps" />
                  </div>

            <div className="text-center bg-secondary/10 p-4 rounded-lg flex flex-col items-center">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {"Informations et Contact"}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                    {"Cours de Qi Gong avec Martial Gontrand"}
                </p>
                <a
                    href="tel:+33670285779"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
                >
                    <PhoneIcon size={18} />
                    {"Appeler Martial au 06 70 28 57 79"}
                </a>
                <a
                    href="mailto:leçondugong@gmail.com"
                    className="inline-flex items-center gap-2 mt-3 bg-white text-primary/80 hover:text-primary text-white px-6 py-3 rounded-lg font-medium transition"
                >
                    <MailIcon size={18} />
                    {"Envoyer un email"}
                </a>

                <p className="text-sm text-muted-foreground mt-6">
                    <HourglassIcon className="inline-block mr-1 mb-1" size={14} />
                    {"Les mardis de 18h30 à 19h30"}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    <EuroIcon className="inline-block mr-1 mb-1" size={14} />
                    {"Tarif : 200 € / an pour un cours par semaine (septembre à juin)"}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    <MapIcon className="inline-block mr-1 mb-1" size={14} />
                    {"Espace Musset, 52 Bis Rue Alfred de Musset, 31200 Toulouse"}
                </p>
                <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
                    <a
                        href="https://leçondugong.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary transition"
                    >
                        <GlobeIcon size={16} /> {"Site officiel"}
                    </a>
                    <a
                        href="https://instagram.com/lecon_du_gong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary transition"
                    >
                        <InstagramIcon size={16} /> {"@lecon_du_gong"}
                    </a>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                    <SettingsIcon className="inline-block mr-1 mb-1" size={14} />
                    {"Tout niveau, inscription par appel ou SMS recommandée."}
                </p>
            </div>
        </div>
    </div>);
};

export default QiGong;
