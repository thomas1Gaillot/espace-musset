"use client"
import EventList from "@/components/event-list";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { eventList } from "@/data/data.allevents";
import { ROUTES } from "@/data/route";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export type OurImageData = {
  src: string;
  blurredSrc?: string;
  alt: string;
};

const imageData: OurImageData[] = [
  {
    src: "/gallery/gallery-cafe-0.jpeg",
    blurredSrc: '/blur/gallery-0.jpeg',
    alt: "Gallery Image 1"
  },
  { src: "/gallery/gallery-cafe-7.jpeg", blurredSrc: '/blur/gallery-7.jpeg', alt: "Gallery Image 2" },
  { src: "/gallery/gallery-cafe-2.jpeg", blurredSrc: '/blur/gallery-2.jpeg', alt: "Gallery Image 3" },
  { src: "/gallery/gallery-cafe-3.jpeg", blurredSrc: '/blur/gallery-3.jpeg', alt: "Gallery Image 4" },
  { src: "/gallery/gallery-cafe-4.jpeg", blurredSrc: '/blur/gallery-4.jpeg', alt: "Gallery Image 5" },
  { src: "/gallery/gallery-cafe-5.jpeg", blurredSrc: '/blur/gallery-5.jpeg', alt: "Gallery Image 6" },

];

export default function CafeAssociatifPage() {
  const recentCafeEvents = eventList.filter((e) => e.category.name === 'Café associatif')
  const router = useRouter()
  const services = [
    {
      title: "Plats réalisés par nos bénévoles",
      description: "Un lieu de partage culinaires réalisés par nos bénévoles."
    },
    {
      title: "Soirées jeux",
      description: "Nous organisons des soirées jeux de société, fléchette, échec"
    },
    {
      title: "Rencontres interculturelles",
      description: "Échangez avec des personnes de tous horizons"
    },
    {
      title: "Événements",
      description: "Participez à nos spectacles et soirées scène ouverte"
    },

  ];

  return (
    <>
      <div className="relative top-0">
        <div className="h-8 w-screen bg-primary/90 flex items-center justify-center text-white">
          <Button variant={'link'} onClick={() => router.push('/cafe-associatif#agenda')} className="text-white ">
            {"Inauguration du Café d'Oc le 13 Septembre 2025"}
          </Button>
        </div>
      </div>
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
                Café associatif
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Le Café d'Oc
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Au cœur de l'Espace Musset, notre café associatif est un lieu de rencontre
              ouvert à tous, où la convivialité et l'échange interculturel se conjuguent
              autour de moments de partage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row   gap-12 mb-12">
            {/* Image principale */}
            <div className="relative h-[500px] w-full sm:w-[500px] rounded-lg overflow-hidden">
              <img
                src="/cafe-doc.png"
                alt={"Café associatif"}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-transparent" />
            </div>

            {/* Description */}
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Des activités et des bons plats*
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  Notre café associatif est animé par les bénévoles, aussi, pour débuter notre activité nous allons commencer par des choses simples :
                </li>
                <li>
                  - <strong>Le soir des activités</strong> (<Link href="#agenda" className="underline">voir le programme</Link>) : nous proposerons des planches typiques du sud-ouest et teintées de notre voisine l’Espagne : charcuterie, fromage ou végétarienne
                </li>
                <li>
                  - <strong>Les lundis et mercredis </strong> : des tartes salées maisons accompagnée de salades
                </li>
                <li>
                  - <strong>Le dernier jeudi du mois </strong> : soirée pizza avec Thomas à l’occasion de la soirée jeux de sociétés.
                </li>
                <li>
                  - <strong>Le dernier dimanche du mois de 15h à 17h</strong> :  c’est l’association «  Ensemble toi et moi » qui propose un concept « JE CUISINE POUR LES AUTRES »
                </li>
              </ul>
              <span className="text-xs">
                {"* pour consommer, vous devrez adhérer à notre association. L'adhésion est de 5€/an et est soumis au bon respect de la "}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="underline hover:no-underline font-medium" >
                      {"charte de convivialité"}
                    </button>
                  </DialogTrigger>
                  <DialogContent
                    className="max-w-2xl max-h-[80vh] overflow-y-auto"
                    style={{ backgroundColor: "#f5f1eb" }}
                  >
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold mb-4" >
                        Charte de convivialité
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-sm leading-relaxed" >
                      <p className="font-medium">Charte de convivialité</p>

                      <p>
                        Toute personne rentrant au café d'Oc se soumet d'office au présent règlement. Le café d'Oc se
                        réserve le droit de ne pas te servir et/ou de te raccompagner avec bienveillance en dehors des
                        murs du café si cela est jugé nécessaire. Le personnel te veut du bien, alors écoute-le, si tu
                        n'es pas d'accord, on peut en discuter... mais pas trop SVP
                      </p>

                      <div>
                        <p className="font-medium mb-2">De ce fait tu respecteras :</p>
                        <ul className="space-y-2 ml-4">
                          <li>- L'interdiction de fumer/vapoter dans le café</li>
                          <li>- L'interdiction d'être en état d'ébriété dans le café</li>
                          <li>
                            - L'interdiction de consommer/exhiber des substances illicites dans et devant le café
                          </li>
                          <li>- L'interdiction de tenir des propos discriminants</li>
                          <li>- Aucune forme de violence, physique, verbale, morale ne sera tolérée</li>
                          <li>
                            - Le fait de ne pas faire trop de bruits si tu passes un appel, regarde une vidéo ou
                            écoute de la musique
                          </li>
                          <li>- Les voisins, en n'étant pas exagérément bruyant dans /ou devant le café</li>
                          <li>- Nous ne faisons pas de crédit</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-medium mb-2">Petit rappel</p>
                        <p>
                          C'est par l'adhésion à l'association ESPACE MUSSET qui gère le café d'Oc, café associatif
                          qui permet la consommation au café et contribue au fonctionnement économique de l'espace. Tu
                          peux nous rejoindre pour du bénévolat
                        </p>
                      </div>

                      <p>
                        L'espace Musset décline toute responsabilité en cas de vol et/ou perte de tes effets
                        personnels.
                      </p>

                      <p className="font-medium">
                        Nous te remercions de ta participation
                        <br />
                        L'équipe de l'Espace Musset
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>.
              </span>
            </div>
          </div>

          <div id='agenda' className="w-full ml-[24px] mr-[4px]  mb-8 max-w-[calc(100vw-28px)] grid justify-center">
            <EventList data={recentCafeEvents} title='Prochains évènements du café' />
          </div>

          {/* Galerie */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-semibold text-center text-foreground mb-8">
              Gallerie
              <Button className="ml-2" variant="outline" size="icon" asChild>
                <a href="https://instagram.com/espacemussettoulouse" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto p-4 md:p-6">
              {imageData.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width="369"
                  height="369"
                  className="object-cover rounded-lg"
                  // blurDataURL={image.blurredSrc || ''}
                  // placeholder="blur"
                  style={{ aspectRatio: "369/369", objectFit: "cover" }}
                />
              ))}
            </div>
          </div>

          {/* Horaires et infos pratiques */}
          <div className="bg-sage-50/50 rounded-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Horaires d'ouverture
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Lundi:</strong> 17h00 - 22h00</p>
                  <p><strong>Mardi:</strong> 17h00 - 22h00</p>
                  <p><strong>Mercredi:</strong> 17h00 - 22h00</p>
                  <p><strong>Jeudi:</strong> (Lors des activités programmées)</p>
                  <p><strong>Vendredi:</strong> (Lors des activités programmées)</p>
                  <p><strong>Samedi:</strong> 14h00 - 18h00</p>
                  <p><strong>Dimanche:</strong> (Lors des activités programmées)</p>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Accès libre
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Entrée libre et gratuite</p>
                  <p>• WiFi gratuit</p>
                  <p>• Prises électriques disponibles</p>
                  <p>• Accessible aux personnes à mobilité réduite</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Venez nous rencontrer !
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Que ce soit pour travailler, se détendre ou rencontrer de nouvelles personnes,
              notre café vous accueille dans une atmosphère bienveillante.
            </p>
            <Button size="lg" className="mr-4" asChild>
              <Link href='contact#map'>
                Nous rendre visite
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};