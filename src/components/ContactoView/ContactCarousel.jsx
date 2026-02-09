import { useEffect, useState } from "react";

export default function ContactCarousel() {
  const images = [
    "/carrusel-contacto/1.png",
    "/carrusel-contacto/2.png",
    "/carrusel-contacto/3.png",
    "/carrusel-contacto/4.png",
    "/carrusel-contacto/5.png",
    "/carrusel-contacto/6.jpeg",
    "/carrusel-contacto/7.png",
    "/carrusel-contacto/8.png",
    "/carrusel-contacto/9.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="h-[800px] relative overflow-hidden mx-auto w-[600px]
                        md:w-150">
      
      <div
        className="flex w-full md:w-150 h-[800px] transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="w-full h-full object-fit flex-shrink-0"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[#1F1F19]/20 pointer-events-none" />

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


