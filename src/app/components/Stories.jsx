"use client";

import Image from "next/image";
import CardData from "../utils/storiesData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function StoriesSlider() {
  return (
    <section className="w-full py-20 px-4 md:px-12">
      {/* Heading */}
      <div className="flex flex-col items-center gap-4 mb-10 md:mb-20 text-center">
        <h1 className="tracking-widest text-[#CD7752] text-lg md:text-2xl">
          RECENT NEWS
        </h1>

        <h2 className="text-2xl md:text-5xl font-bold">Love food stories</h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1200}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {CardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden">
              <Image
                src={card.image}
                alt={card.heading}
                width={520}
                height={320}
                className="w-full object-cover"
              />

              <div className="py-6 flex flex-col gap-2 items-start">
                <h3 className="text-lg md:text-2xl font-semibold mb-2">
                  {card.heading}
                </h3>

                <p className="text-gray-600 text-sm md:text-xl leading-relaxed mb-4">
                  {card.description}
                </p>

                <button className="font-semibold text-sm md:text-xl">
                  Read more →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <hr className="w-full text-gray-500 mt-10 md:mt-20" />  
    </section>
  );
}
