import { useEffect, useState } from "react";

export default function ImageCarousel() {
  const images = [
    "../src/assets/carrusel/c1.png",
    "../src/assets/carrusel/c2.png",
    "../src/assets/carrusel/c3.webp",
    "../src/assets/carrusel/c4.avif",
    "../src/assets/carrusel/c5.png",
    "../src/assets/carrusel/c6.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="
        relative overflow-hidden mx-auto

        /* Base desktop (1024 aprox) */
        w-[85%] h-[420px]

        /* 1440px+ (XL – monitor 2560x1440) */
        xl:w-[65%] xl:h-[480px]

        /* 1024px */
        lg:w-[80%] lg:h-[400px]

        /* 768px */
        md:w-[90%] md:h-[340px]

        /* 375px */
        w-[90%] h-[230px]
      "
    >
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[#1F1F19]/20 pointer-events-none" />

      <div
        className="
          absolute w-full flex justify-center gap-2 z-10

          bottom-4
          xl:bottom-6
        "
      >
        {images.map((_, i) => (
          <span
            key={i}
            className={`
              rounded-full transition-all duration-300

              ${i === current
                ? "bg-[#B8963E] scale-125"
                : "bg-[#D8D3C4]/40"}

              h-1.5 w-1.5
              xl:h-2 xl:w-2
            `}
          />
        ))}
      </div>
    </section>
  );
}