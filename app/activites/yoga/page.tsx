import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ROUTES } from "@/data/route";
import { CalendarIcon, EuroIcon, MapIcon, UserIcon } from "lucide-react";

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
          <div className="relative h-[300px] w-full sm:w-[900px] rounded-lg overflow-hidden bg-gradient-to-br from-sage-200 to-warmBrown-200 flex items-center justify-center">
            <div className="text-center text-6xl">🧘‍♀️</div>
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
                Nous contacter pour en savoir plus
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
            <EuroIcon className="inline-block mr-1 mb-1" size={14} />
            Nous contacter
          </p>
        </div>
      </div>
    </div>
  );
};

export default YogaMedha;
