import { useEffect, useState } from "react";

export default function ImageCarousel() {
  const images = [
    "../src/assets/Car1.jpg",
    "../src/assets/Car2.jpg",
    "../src/assets/Car3.jpg",
    "../src/assets/Car4.jpg",
    "../src/assets/Car5.jpg",
    "../src/assets/Car6.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-[70%] h-[720px] overflow-hidden mx-auto">
      
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`
            absolute inset-0 w-full h-full object-fill
            transition-opacity duration-[1200ms] ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1F1F19]/20" />

      {/* Indicadores */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300
              ${i === current
                ? "bg-[#B8963E] scale-125"
                : "bg-[#D8D3C4]/40"}
            `}
          />
        ))}
      </div>
    </section>
  );
}