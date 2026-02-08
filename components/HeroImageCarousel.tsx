"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/familia-senior.png",
  "/images/familia-joven.png",
  "/images/pareja-senior.png",
  "/images/coche-pareja.png"
];

export default function HeroImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}