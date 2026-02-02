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

  const LabelWithLogo = ({
    img,
    logoSize,
    textClass,
  }: {
    img: HeroImage;
    logoSize: string;
    textClass: string;
  }) => (
    <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3">
      {img.logo && (
        <img
          src={img.logo}
          alt=""
          className={`${logoSize} rounded-full object-cover border-2 border-white/40 shadow-lg`}
        />
      )}
      <span
        className={`inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/30 backdrop-blur-sm text-white/80 font-medium tracking-[0.15em] uppercase ${textClass}`}
      >
        {img.label}
      </span>
    </div>
  );

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
            <LabelWithLogo img={img} logoSize="w-20 h-20" textClass="text-xs" />
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
              {isCenter && (
                <LabelWithLogo
                  img={img}
                  logoSize="w-28 h-28"
                  textClass="text-sm"
                />
              )}
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
