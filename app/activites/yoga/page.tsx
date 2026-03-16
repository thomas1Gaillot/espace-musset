import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ROUTES } from "@/data/route";
import {
  CalendarIcon,
  EuroIcon,
  ExternalLinkIcon,
  MapIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";

const YogaMedha = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={ROUTES.ACCUEIL}>Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={ROUTES.ARTS.ROOT}>Arts du corps</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Yoga</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Yoga avec Medha
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Offrez-vous une parenthèse de douceur chaque jeudi. Respirez, étirez-vous, relâchez les
            tensions et retrouvez un équilibre profond entre corps et esprit.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 mb-12">
          <div className="relative w-full sm:w-[600px] rounded-lg overflow-hidden">
            <img src="/cours/yoga.jpg" alt={"chant"} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-transparent" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Un moment pour soi, chaque semaine
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Medha vous guide dans une pratique de yoga accessible à tous, mêlant postures,
                respiration et relaxation. Ses cours sont pensés pour vous aider à relâcher le
                stress du quotidien et à vous reconnecter à votre corps en profondeur.
              </p>
              <div className="bg-secondary/20 p-4 rounded-lg text-center font-medium text-foreground">
                YOGA SHRI VIVEK France
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-secondary/10 p-4 rounded-lg flex flex-col items-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Informations pratiques
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            <UserIcon className="inline-block mr-1 mb-1" size={14} />
            Avec Medha — tous niveaux, débutants bienvenus
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <CalendarIcon className="inline-block mr-1 mb-1" size={14} />
            Tous les jeudis
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <MapIcon className="inline-block mr-1 mb-1" size={14} />
            Espace Musset, 52 Bis Rue Alfred de Musset, 31200 Toulouse
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <PhoneIcon className="inline-block mr-1 mb-1" size={14} />
            Contact :{" "}
            <a href="tel:+33652629949" className="underline hover:no-underline">
              06 52 62 99 49
            </a>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <ExternalLinkIcon className="inline-block mr-1 mb-1" size={14} />
            <a
              href="https://www.yogashrivivekfrance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              www.yogashrivivekfrance.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default YogaMedha;
