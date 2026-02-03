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
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-[70%] h-[500px] overflow-hidden mx-auto">
      
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
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
