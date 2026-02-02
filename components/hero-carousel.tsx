"use client";

import { useEffect, useState, useCallback } from "react";

interface HeroImage {
  src: string;
  alt: string;
  label: string;
}

export function HeroCarousel({ images }: { images: HeroImage[] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const getIndex = (offset: number) =>
    (current + offset + images.length) % images.length;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Mobile: full crossfade */}
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
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-20 pb-8 px-6">
              <span className="text-white/80 text-xs font-medium tracking-[0.2em] uppercase">
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: 3 visible panels with peek */}
      <div className="hidden md:flex absolute inset-0 items-stretch justify-center">
        {[-1, 0, 1].map((offset) => {
          const idx = getIndex(offset);
          const img = images[idx];
          const isCenter = offset === 0;
          return (
            <div
              key={`${offset}-${idx}`}
              className="relative h-full transition-all duration-700 ease-in-out overflow-hidden"
              style={{
                width: isCenter ? "50%" : "25%",
                opacity: isCenter ? 1 : 0.5,
                filter: isCenter ? "none" : "brightness(0.4)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform: isCenter ? "scale(1)" : "scale(1.05)",
                }}
              />
              {isCenter && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-20 pb-8 px-8">
                  <span className="text-white/80 text-sm font-medium tracking-[0.2em] uppercase">
                    {img.label}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
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
