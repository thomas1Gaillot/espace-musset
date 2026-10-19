"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { salleById } from "@/data/salles.data";
import { cn } from "@/lib/utils";
import React from "react";

/** Carrousel des photos d'une salle, avec disposition et capacité en légende */
export function SalleCarousel({ salleId, className }: { salleId: string; className?: string }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const salle = salleById(salleId);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (!salle) return null;

  return (
    <div className={cn("mx-auto w-full relative rounded-sm overflow-hidden shadow-xl", className)}>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {salle.photos.map((photo, index) => (
            <CarouselItem key={index} className="relative">
              <div className="aspect-[4/3] w-full relative group">
                <img
                  src={photo.src}
                  alt={`${salle.name} - disposition ${photo.config}, ${photo.capacity}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Légende en overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex-shrink-0">
                      <photo.Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-lg sm:text-2xl font-bold mb-1 truncate">
                        {salle.name}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                        <span className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full font-medium">
                          {photo.config}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="hidden sm:inline">•</span>
                          <span className="font-medium">{photo.capacity}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Boutons de navigation - cachés sur mobile, visibles sur desktop */}
        <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hidden sm:flex" />
        <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hidden sm:flex" />
      </Carousel>

      {/* Indicateurs de pagination */}
      <div className="bg-white px-4 py-2 sm:py-3">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === current - 1 ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Aller à l'image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
