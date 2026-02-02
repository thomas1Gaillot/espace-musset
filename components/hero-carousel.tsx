"use client";

import { useEffect, useState, useCallback } from "react";

interface HeroImage {
  src: string;
  alt: string;
  label: string;
}

export function HeroCarousel({ images }: { images: HeroImage[] }) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (idx: number) => {
      setCurrent(idx);
    },
    []
  );

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const getIndex = (offset: number) =>
    (current + offset + images.length) % images.length;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
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
            {/* Label top-left */}
            <div className="absolute top-6 left-6">
              <span className="inline-block px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white/80 text-xs font-medium tracking-[0.15em] uppercase">
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: sliding 3-panel carousel */}
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

          if (offset === 0) {
            left = "20%";
            width = "60%";
            opacity = 1;
            zIndex = 3;
            scale = "scale(1)";
          } else if (offset === -1) {
            left = "0%";
            width = "22%";
            opacity = 0.7;
            zIndex = 2;
            scale = "scale(0.95)";
          } else if (offset === 1) {
            left = "78%";
            width = "22%";
            opacity = 0.7;
            zIndex = 2;
            scale = "scale(0.95)";
          } else if (offset === -2) {
            left = "-22%";
            width = "22%";
            opacity = 0;
            zIndex = 1;
            scale = "scale(0.9)";
          } else {
            left = "100%";
            width = "22%";
            opacity = 0;
            zIndex = 1;
            scale = "scale(0.9)";
          }

          return (
            <div
              key={`${offset}-${idx}`}
              className="absolute top-0 h-full overflow-hidden"
              style={{
                left,
                width,
                opacity,
                zIndex,
                transform: scale,
                filter: isCenter ? "none" : "brightness(0.3)",
                transition: "left 0.8s cubic-bezier(0.4, 0, 0.2, 1), width 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              {/* Label top-left, only on center slide */}
              {isCenter && (
                <div className="absolute top-8 left-8">
                  <span className="inline-block px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm text-white/80 text-sm font-medium tracking-[0.15em] uppercase">
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
