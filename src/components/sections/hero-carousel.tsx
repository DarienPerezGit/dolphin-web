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
      {/* Heavy lateral optical blur masks (deep defocus effect) */}
      <div className="absolute inset-y-0 left-0 w-36 sm:w-64 md:w-96 lg:w-[480px] backdrop-blur-[8px] [mask-image:linear-gradient(to_right,black_0%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,transparent_100%)] pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-36 sm:w-64 md:w-96 lg:w-[480px] backdrop-blur-[8px] [mask-image:linear-gradient(to_left,black_0%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,black_0%,transparent_100%)] pointer-events-none z-10" />

      {/* Deep alpha gradient mask across carousel track (dissolving wide range from edges) */}
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_32%,black_68%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_32%,black_68%,transparent_100%)]">
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
    </div>
  );
}
