"use client";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

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
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Change Slide Manually
  const changeSlide = () =>{
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  } 

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat transition-all duration-700 flex items-center"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >
      <div className="flex justify-center items-center gap-20 mx-auto md:mx-20 p-3 text-black">
        <span className="hidden md:flex justify-center items-center w-16 h-16 bg-[#CD7752] text-white rounded-md cursor-pointer" onClick={changeSlide}>
      
          <ChevronLeftIcon sx={{ fontSize: 32 }} />
          <ChevronLeftIcon sx={{ fontSize: 32 }} />
        </span>

      <div className="mx-auto md:mx-25 flex flex-col justify-center items-start gap-4 md:gap-6">
        <h3 className="italic font-normal text-orange-600 text-2xl md:text-4xl leading-relaxed">
          Top Selling!
        </h3>
        <h1 className="w-[70%] text-4xl md:text-8xl text-gray-700 leading-tight line-break font-extrabold mb-4">
          {slides[currentSlide].title}
        </h1>

        <button className="bg-[#CD7752] font-bold text-sm md:text-xl text-white px-4 py-2 md:px-8 md:py-3 rounded-md">
          Shop Now
        </button>

        </div>
        <span className="hidden absolute right-30 flex md:flex justify-center items-center w-16 h-16 bg-[#CD7752] text-white rounded-md cursor-pointer" onClick={changeSlide}>
          <ChevronRightIcon sx={{ fontSize: 32 }} />
          <ChevronRightIcon sx={{ fontSize: 32 }} />
        </span>

      </div>
    </section>
  );
}
