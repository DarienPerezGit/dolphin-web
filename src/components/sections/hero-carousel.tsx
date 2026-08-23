/* eslint-disable @next/next/no-img-element */
import React from "react";

interface MediaItem {
  src: string;
  alt: string;
  caption: string;
}

const CAROUSEL_ITEMS: MediaItem[] = [
  {
    src: "/images/carrusel/item-1.jpg",
    alt: "Collaborative discovery session mapping technical architecture",
    caption: "PLATE 01 · Cross-functional discovery and planning session",
  },
  {
    src: "/images/carrusel/item-2.jpg",
    alt: "Engineering team aligning on system constraints",
    caption: "PLATE 02 · Engineering alignment and requirement definition",
  },
  {
    src: "/images/carrusel/item-3.jpg",
    alt: "Individual focus reviewing live structured marginalia",
    caption: "PLATE 03 · On-device synthesis and real-time reading",
  },
  {
    src: "/images/carrusel/item-4.jpg",
    alt: "Deep technical consultation resolving logic conflict",
    caption: "PLATE 04 · Conflict identification and logic verification",
  },
];

export function HeroCarousel() {
  // Duplicate array for seamless 50% loop
  const duplicatedItems = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS];

  return (
    <div className="relative w-full overflow-hidden border-y border-[#D8D2C5] bg-[#F7F5F0] py-6 sm:py-8 select-none pointer-events-none">
      {/* Edge fade masks */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#F7F5F0] to-transparent z-10"
        aria-hidden="true" 
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#F7F5F0] to-transparent z-10"
        aria-hidden="true" 
      />

      {/* GPU Accelerated continuous marquee */}
      <div className="marquee-track flex gap-5 sm:gap-8 pl-4">
        {duplicatedItems.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            className="flex-shrink-0 w-[300px] sm:w-[440px] md:w-[580px] flex flex-col space-y-2"
          >
            {/* Large Format Visual Container */}
            <div className="relative h-[220px] sm:h-[320px] md:h-[400px] w-full overflow-hidden rounded-2xl border border-[#D8D2C5] bg-[#FDFCF9]">
              <img
                src={item.src}
                alt={item.alt}
                width={580}
                height={400}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover grayscale-[0.08] sepia-[0.06] contrast-[0.98] brightness-[0.98]"
              />
            </div>

            {/* Editorial Caption */}
            <figcaption className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted flex items-center justify-between px-1">
              <span className="truncate">{item.caption}</span>
              <span className="shrink-0 text-foreground-faded ml-2">
                REF. {String((index % CAROUSEL_ITEMS.length) + 1).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
