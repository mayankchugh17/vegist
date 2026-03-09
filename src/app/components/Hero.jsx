"use client";

import { useState, useEffect } from "react";

export default function Hero() {

  const slides = [
    {
      image: "../hero/bg.webp",
      title: "Super broccoli from $9.00",
    },
    {
      image: "../hero/bg2.webp",
      title: "Otas atta pasta 20% off",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full h-screen bg-cover bg-center transition-all duration-700 flex items-center"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`
      }}
    >
      <div className=" mx-auto md:mx-40 p-3 text-black">
        <h3 className="italic font-normal text-orange-600 text-2xl md:text-4xl leading-relaxed">Top Selling!</h3>
        <h1 className="w-[70%] text-4xl md:text-8xl text-gray-700 leading-tight line-break font-extrabold mb-4">
          {slides[currentSlide].title}
        </h1>

        <button className="bg-[#CD7752] font-bold text-sm md:text-xl text-white px-4 py-2 md:px-8 md:py-3 rounded-md">
          Shop Now
        </button>

      </div>
    </section>
  );
}