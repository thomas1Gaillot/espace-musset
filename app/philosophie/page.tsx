import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { philosophieContent } from "@/data/philosophie.data";

export default function PhilosophiePage() {
  const { breadcrumb, hero, intro, subpages, approche, cta } = philosophieContent;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Fil d'Ariane */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={breadcrumb.home.link}>
                {breadcrumb.home.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{breadcrumb.current}</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {hero.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src={hero.image.url}
              alt={hero.image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              {intro.title}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              {intro.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Sous-pages */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-semibold text-center text-foreground mb-8">
            {subpages.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subpages.items.map((page, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardHeader className="items-center">
                  <page.Icon className="size-8" />
                  <CardTitle className="font-serif text-lg">{page.title}</CardTitle>
                </CardHeader>
                <CardContent className="h-20">
                  <CardDescription className="text-sm">{page.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" id={`philo-${page.title.toLowerCase().replace(/\s/g, "-")}-button`}>
                    <Link href={page.link}>{page.buttonLabel}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Approche */}
        <div className="bg-earth-50/50 rounded-lg p-8 mb-12">
          <h2 className="font-serif text-2xl font-semibold text-center text-foreground mb-6">
            {approche.title}
          </h2>
          <div className="font-serif italic text-2xl font-light text-center text-foreground mb-6">
            {approche.citation}
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {approche.items.map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            {cta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6">{cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" id={"cta-ateliers-button"}>
              {cta.primaryLabel}
            </Button>
            <Button size="lg" variant="outline" asChild id={"cta-contact-button"}>
              <Link href={cta.secondaryLink}>{cta.secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
