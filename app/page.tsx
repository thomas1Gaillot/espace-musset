import EventsSection from "@/components/events-section";
import { SmartCalendar } from "@/components/smart-calendar/smart-calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/data/route";
import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EventList from "../components/event-list";
import { eventList } from "../data/data.allevents";
import { OurImageData } from "./cafe-associatif/page";

const homeImageData: OurImageData[] = [
  {
    src: "/gallery/gallery-cafe-0.jpeg",
    blurredSrc: "/blur/gallery-0.jpeg",
    alt: "Gallery Image 1",
  },
  {
    src: "/gallery/gallery-cafe-1.jpeg",
    blurredSrc: "/blur/gallery-1.jpeg",
    alt: "Gallery Image 2",
  },
  { src: "/gallery/gallery-7.jpeg", blurredSrc: "/blur/gallery-2.jpeg", alt: "Gallery Image 3" },
  {
    src: "/gallery/gallery-cafe-3.jpeg",
    blurredSrc: "/blur/gallery-3.jpeg",
    alt: "Gallery Image 4",
  },
  {
    src: "/gallery/gallery-cafe-4.jpeg",
    blurredSrc: "/blur/gallery-4.jpeg",
    alt: "Gallery Image 5",
  },
  {
    src: "/gallery/gallery-cafe-8.jpeg",
    blurredSrc: "/blur/gallery-5.jpeg",
    alt: "Gallery Image 6",
  },
  {
    src: "/gallery/gallery-cafe-9.jpeg",
    blurredSrc: "/blur/gallery-9.jpeg",
    alt: "Gallery Image 7",
  },
  {
    src: "/gallery/gallery-cafe-10.jpeg",
    blurredSrc: "/blur/gallery-10.jpeg",
    alt: "Gallery Image 8",
  },
  {
    src: "/gallery/gallery-cafe-11.jpeg",
    blurredSrc: "/blur/gallery-11.jpeg",
    alt: "Gallery Image 9",
  },
];

export default function HomePage() {
  const activities = [
    {
      title: "Le café associatif “Café d'Oc”",
      description:
        "Espace de rencontre et de convivialité ouvert à tous, lieu de partage et d'échange interculturel",
      image: "/cafe-asso.jpeg",
      link: ROUTES.CAFE_ASSOCIATIF,
      cta: "Découvrir",
    },
    {
      title: "Arts",
      description:
        "Yoga, Chant et Théâtre d'improvisation pour explorer l'expression corporelle et le bien-être personnel",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      link: ROUTES.ARTS.ROOT,
      cta: "Voir les cours",
    },
    {
      title: "Écologie et Volontariat",
      description: "Maraudes, jardinage urbain, ateliers zéro déchets et bien d'autres ...",
      image: "/event/cleanup-20-sept.jpg",
      link: ROUTES.ECOLOGIE.ROOT,
      cta: "En savoir plus",
    },
    {
      title: "Philosophie",
      description:
        "Cours hebdomadaires, cafés philo, conférences et rencontres pour explorer les grandes questions de l'existence.",
      image: "/event/atelier-philo.jpg",
      link: ROUTES.PHILOSOPHIE.ROOT,
      cta: "Découvrir nos activités",
    },
  ];

  const bgImgClass = "bg-[url('/espace-musset.jpeg')]";
  const bgHeroSectionCalass = "h-full  w-full flex flex-col  bg-cover bg-center bg-no-repeat";
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className=" top-[60px] sticky z-50">
        <div className=" max-w-vw h-12 w-screen bg-primary/90 flex items-center justify-center text-white">
          <Button variant={"link"} asChild className="text-white ">
            <Link
              target="_blank"
              href={ROUTES.CONTACT}
            >
              <div className="break-words gap-1 md:whitespace-nowrap flex-col sm:flex-row flex justify-center items-center">
                <p>{"Soirée Jeux de sociétés Jeudi 27 Novembre !! "}</p>
              </div>
            </Link>
          </Button>
        </div>
      </div>

      <section className={cn("hero-section relative py-20 px-4", bgHeroSectionCalass, bgImgClass)}>
        {/* Overlay foncé */}
        <div className="absolute inset-0 bg-black/20 z-0" aria-hidden="true" />

        <div className="relative z-10 container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Bienvenue à l'Espace Musset
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground mb-2 leading-relaxed">
              Un lieu de rencontre, de partage et d'épanouissement au cœur du quartier des Minimes
              (Toulouse).
            </p>
            <p className="text-xl md:text-2xl text-primary-foreground mb-8 leading-relaxed">
              Lieu inter-associatif, nous organisons avec les associations partenaires l'animation
              de l'espace dans un esprit d'ouverture et de partage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild id={"reservation-button"}>
                <Link href="/#agenda">Agenda</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
                asChild
                id={"reservation-button"}
              >
                <Link href={ROUTES.LOCATION_SALLES}>Réserver une salle</Link>
              </Button>
              <Button
                size="lg"
                variant="link"
                className="text-lg  text-white px-8 py-4"
                asChild
                id={"contact-button"}
              >
                <Link href={ROUTES.CONTACT}>Nous Contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              L'Association
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              L’association Espace Musset est un lieu dédié à la promotion de{" "}
              <strong>l’art, de la culture et de la convivialité</strong>.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Grâce à l’engagement de bénévoles, elle organise des conférences, concerts,
              expositions, ateliers… et plus encore, dans un esprit d’ouverture et de partage. Elle
              anime également, le café associatif <strong>« Le Café d’Oc »</strong> !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant={"default"} size="lg" asChild>
                <Link href={ROUTES.CONTACT}>Nous contacter</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={ROUTES.ACCUEIL + "#agenda"}>Prochains évènements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-16 bg-sage-50/50">
        <div className="space-y-6 flex flex-col items-center">
          <div className="text-center mb-12 container">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Agenda
            </h2>
            <p id="agenda" className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos prochains événements, ateliers et rencontres
            </p>
          </div>

          <div className="max-w-4xl mx-2 ">
            <SmartCalendar events={eventList} />
          </div>
          <div className="w-full ml-[24px] mr-[4px] max-w-[calc(100vw-28px)] grid justify-center">
            <EventList data={eventList} title="Événements à venir" />
          </div>
        </div>
      </section>

      {/* Nos Activités Section */}
      <section id="activités" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Nos Activités
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              L'Espace Musset est <strong>un de ces endroits où tout se maille </strong>: le chant,
              le théâtre, le yoga, les cafés litérraires, cafés histoire et cafés philo...
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pour répondre aux besoins essentiels du <strong>"vivre ensemble"</strong>, construire
              le monde d'aujourd'hui et de demain par la coopération et le partage, en commençant{" "}
              <strong>par notre quartier</strong>.
            </p>
          </div>
          <EventsSection />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{activity.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href={activity.link}>{activity.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="gallerie" className="mb-12">
        <h2 className="font-serif text-3xl font-semibold text-center text-foreground mb-8">
          Gallerie
          <Button className="ml-2" variant="outline" size="icon" asChild>
            <a
              href="https://instagram.com/espacemussettoulouse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </Button>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto p-4 md:p-6">
          {homeImageData.map((image, index) => (
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
      </section>
    </div>
  );
}
