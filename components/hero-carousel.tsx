"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroImage {
  src: string;
  alt: string;
  label: string;
  logo?: string;
}

export function HeroCarousel({ images }: { images: HeroImage[] }) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx: number) => setCurrent(idx), []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const getIndex = (offset: number) =>
    (current + offset + images.length) % images.length;

  const currentImage = images[current];

  return (
    <div className="absolute inset-0 z-[5] overflow-hidden">
      {/* Mobile: crossfade */}
      <div className="md:hidden absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Desktop: 3-panel with side slides visible, fade transition */}
      <div className="hidden md:block absolute inset-0">
        {[-2, -1, 0, 1, 2].map((offset) => {
          const idx = getIndex(offset);
          const img = images[idx];
          const isCenter = offset === 0;

          let left: string;
          let width: string;
          let opacity: number;
          let zIndex: number;
          let scale: string;
          let filter: string;

          if (offset === 0) {
            left = "15%";
            width = "70%";
            opacity = 1;
            zIndex = 3;
            scale = "scale(1)";
            filter = "none";
          } else if (offset === -1) {
            left = "0%";
            width = "17%";
            opacity = 0.8;
            zIndex = 2;
            scale = "scale(0.96)";
            filter = "brightness(0.35)";
          } else if (offset === 1) {
            left = "83%";
            width = "17%";
            opacity = 0.8;
            zIndex = 2;
            scale = "scale(0.96)";
            filter = "brightness(0.35)";
          } else if (offset === -2) {
            left = "-17%";
            width = "17%";
            opacity = 0;
            zIndex = 1;
            scale = "scale(0.92)";
            filter = "brightness(0.2)";
          } else {
            left = "100%";
            width = "17%";
            opacity = 0;
            zIndex = 1;
            scale = "scale(0.92)";
            filter = "brightness(0.2)";
          }

          return (
            <div
              key={`${offset}-${idx}`}
              className="absolute top-0 h-full overflow-hidden rounded-sm"
              style={{
                left,
                width,
                opacity,
                zIndex,
                transform: scale,
                filter,
                transition:
                  "left 0.8s cubic-bezier(0.4,0,0.2,1), width 0.8s cubic-bezier(0.4,0,0.2,1), opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1), filter 0.8s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-sm text-white/80 hover:bg-black/50 hover:text-white transition-colors"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-sm text-white/80 hover:bg-black/50 hover:text-white transition-colors"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Centered label + logo overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4 pb-40 md:pb-24">
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6 max-w-[90vw] md:max-w-none">
          {currentImage.logo && (
            <img
              src={currentImage.logo}
              alt=""
              className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-2 border-white/40 shadow-xl shrink-0"
            />
          )}
          <div className="flex flex-col items-center md:items-start gap-2 md:gap-3">
            <h2 className="text-sm md:text-xl font-sans font-bold text-white text-center md:text-left uppercase tracking-widest">
              <span className="bg-black/50 text-2xl px-3 py-1 font-light rounded-md md:px-4 md:py-1.5">{currentImage.label}</span>
            </h2>
            <p className="text-xs md:text-sm text-white/80 tracking-wide uppercase text-center md:text-left">
              <span className="px-2.5 py-1 rounded-md md:px-3">à l&apos;Espace Musset — Lieu inter-associatif — Toulouse</span>
            </p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-white" : "w-1.5 bg-white/40"
            }`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
