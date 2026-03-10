"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Dishes() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/dishes/1.avif",
      category: "BREAKFAST",
      title: "Hot",
      string2: "Burger",
    },
    {
      image: "/dishes/2.avif",
      category: "LUNCH",
      title: "Chicken",
      string2: "Box",
    },
    {
      image: "/dishes/3.avif",
      category: "DINNER",
      title: "French",
      string2: "Fries",
    },
    {
      image: "/dishes/4.avif",
      category: "STARTERS",
      title: "Combo",
      string2: "Starters",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleSlides = [
    slides[currentSlide],
    slides[(currentSlide + 1) % slides.length],
    slides[(currentSlide + 2) % slides.length],
  ];

  return (
    <div className="mt-250 md:mt-50 bg-white py-16 w-full">
      <div className="mx-auto md:mx-40 flex flex-col md:flex-row gap-2">
        {visibleSlides.map((slide, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-6 w-full md:w-1/3"
          >
            <div className="flex-1">
              <p className="text-sm md:text-xl text-[#CD7752] font-semibold tracking-widest mb-2">
                {slide.category}
              </p>

              <h2 className="text-2xl md:text-4xl text-black leading-tight">
                {slide.title} <br />
                <span className="font-bold">{slide.string2}</span>
              </h2>
            </div>

            <div className="flex-1">
              <Image
                src={slide.image}
                alt={slide.title}
                width={750}
                height={600}
                className="w-full md:w-[500] h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dishes;
