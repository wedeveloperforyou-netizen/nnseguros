"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";

type FeatureCarouselProps = {
  children: ReactNode[];
};

function getItemsPerSlide(width: number) {
  if (width >= 1024) return 3; // desktop
  if (width >= 768) return 2;  // tablet
  return 1;                    // mobile
}

export default function FeatureCarousel({ children }: FeatureCarouselProps) {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      setItemsPerSlide(getItemsPerSlide(window.innerWidth));
      setIndex(0);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const slides = useMemo(() => {
    const result: ReactNode[][] = [];
    for (let i = 0; i < children.length; i += itemsPerSlide) {
      result.push(children.slice(i, i + itemsPerSlide));
    }
    return result;
  }, [children, itemsPerSlide]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="relative max-w-7xl mx-auto px-6 overflow-hidden">

        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {slide}
              </div>
            </div>
          ))}
        </div>

        {/* Flechas */}
        {index > 0 && (
          <button
            onClick={() => setIndex(index - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-12 h-12 flex items-center justify-center"
          >
            ‹
          </button>
        )}

        {index < slides.length - 1 && (
          <button
            onClick={() => setIndex(index + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-12 h-12 flex items-center justify-center"
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
}