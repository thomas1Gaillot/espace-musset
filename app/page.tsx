import EventsSection from "@/components/events-section";
import { HeroCarousel } from "@/components/hero-carousel";
import { SmartCalendar } from "@/components/smart-calendar/smart-calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/data/route";
import { cn } from "@/lib/utils";
import { Instagram, Users, DoorOpen } from "lucide-react";
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

  const heroImages = [
    {
      src: "/gallerie/3.JPG",
      alt: "Café associatif",
      label: "Un café associatif ...",
      logo: "/cafe-doc.png",
    },
    {
      src: "/salle-des-muses-3.jpg",
      alt: "Mise à disposition de salles",
      label: "Des salles à disposition ...",
      logo: "/logoEM.png",
    },
    {
      src: "/gallery/gallery-cafe-11.jpeg",
      alt: "Conférence",
      label: "Des conférences ...",
      logo: "/logo_acropole.png",
    },
    {
      src: "/gallery/gallery-cafe-3.jpeg",
      alt: "Spectacle",
      label: "Des spectacles ...",
      logo: "/logoEM.png",
    },
    {
      src: "/diseuses_profil.webp",
      alt: "Théâtre d'improvisation",
      label: "Du théâtre d'impro ...",
      logo: "/diseuses-amertume.jpeg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Announcement Bar */}
      <div className=" top-[60px] sticky w-full max-w-[100vw] z-50">
        <div className=" max-w-vw h-12 w-screen bg-primary/90 flex items-center justify-center text-white">
          <Button variant={"link"} asChild className="text-white ">
            <Link
              target="_blank"
              href={
                ROUTES.ARTS.SUBPAGES.EXPLORATION_VOCALE
              }
            >
              <div className="break-words gap-1 md:whitespace-nowrap flex-col sm:flex-row flex justify-center items-center">
                <p>{"Atelier Exploration Vocale ce samedi 28 Mars, 10h30"} </p>
              </div>
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-gray-950">
        {/* Carousel background - crossfade every 4s */}
        <HeroCarousel images={heroImages} />

        {/* Lighter overlay — let images breathe */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />

        {/* Buttons — bottom */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-end h-[85vh] pb-16 pointer-events-none">
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up pointer-events-auto"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" className="px-8 py-3" asChild>
              <Link href="/#agenda"> Agenda </Link>
            </Button>
            <Button size="lg" variant="secondary" className="px-8 py-3" asChild>
              <Link href={ROUTES.MISE_A_DISPOSITION}> Réserver une salle </Link>
            </Button>
            <Button size="lg" variant="link" className="text-white px-8 py-3" asChild>
              <Link href={ROUTES.CONTACT}> Contact </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lieu inter-associatif Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Un lieu inter-associatif
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              L'Espace Musset est un <strong>lieu de formation et de transmission</strong>{" "}
              accueillant des formations, ateliers, conférences et rencontres proposés par des
              partenaires, associations et intervenants du territoire.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Il met à disposition des salles accueillantes pour des formations, réunions et
              événements, dans un environnement fonctionnel et accessible, pensé pour le travail
              collectif et la créativité.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Espace inter-associatif animé par des bénévoles, l'Espace Musset encourage les
              coopérations et la vie locale.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Sur place, le café associatif <strong>« Le Café d'Oc »</strong> est un véritable lieu
              de convivialité, où l'on se retrouve avant ou après les activités pour échanger et
              créer du lien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant={"default"} size="lg" asChild>
                <Link href={ROUTES.CONTACT}> Nous contacter </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={ROUTES.ACCUEIL + "#agenda"}> Prochains évènements </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mise à disposition de salles Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Mise à disposition de salles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vous cherchez un lieu pour vos réunions, formations ou événements professionnels ?
              L'Espace Musset met à votre disposition des salles modulables et équipées, adaptées
              aux besoins des entreprises, dans un cadre calme, fonctionnel et propice au travail
              collaboratif.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-primary/5">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <DoorOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Salle des Muses</h3>
              <p className="text-sm text-muted-foreground">
                42m² — jusqu'à 50 personnes, vidéoprojecteur, climatisation
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary/5">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Le Café d'Oc</h3>
              <p className="text-sm text-muted-foreground">
                28m² — 25 personnes, ambiance conviviale, café & thé
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href={ROUTES.MISE_A_DISPOSITION}>Découvrir nos espaces</Link>
            </Button>
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
          <div
            id="evenements"
            className="w-full ml-[24px] mr-[4px] max-w-[calc(100vw-28px)] grid justify-center"
          >
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
              Nos associations partenaires proposent{" "}
              <strong>des formations et ateliers variés</strong> : chant, théâtre, yoga, cafés
              philo, écriture, piano et bien d'autres.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un lieu où les associations se retrouvent pour{" "}
              <strong>faire vivre le quartier</strong>, partager leurs savoirs et construire
              ensemble.
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
                  <CardTitle className="font-serif text-xl"> {activity.title} </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href={activity.link}> {activity.cta} </Link>
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
