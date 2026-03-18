"use client";
import { CardsData, CardsData2 } from "../utils/tabsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Tab.css";
import Image from "next/image";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function Tab({ heading }) {
  return (
    <div className="px-5 md:px-20 tab">
      <h1 className="animate__animated animate__shakeX px-5 font-semibold text-2xl md:text-5xl text-center leading-tight">
        {heading}
      </h1>
      <div className="my-10">
        <ul className="flex md:flex-row text-lg justify-center gap-5 mt-10 overflow-x-auto">
          <div className="flex justify-center items-center gap-3">
            <li className="text-gray-500 font-semibold hover:underline underline-offset-5 hover:text-[#CD7752] tracking-widest">
              STARTERS
            </li>
            <span className="w-0.5 h-6 bg-gray-500"></span>
            <li className="text-gray-500 font-semibold hover:underline underline-offset-5 hover:text-[#CD7752] tracking-widest">
              BREAKFAST
            </li>
          </div>

          <div className="flex justify-center items-center gap-3">
            <span className="w-0.5 h-6 bg-gray-500"></span>
            <li className="text-gray-500 font-semibold hover:underline underline-offset-5 hover:text-[#CD7752] tracking-widest">
              DINNER
            </li>
            <span className="w-0.5 h-6 bg-gray-500"></span>
            <li className="text-gray-500 font-semibold hover:underline underline-offset-5 hover:text-[#CD7752] tracking-widest">
              LUNCH
            </li>
          </div>
        </ul>
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={1}
        slidesPerView={4}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {CardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="cards-resize bg-white cursor-pointer rounded-xl p-5 flex flex-col  gap-3 transition ">
              <Image
                src={card.image}
                alt={card.heading}
                width={480}
                height={200}
                className="object-contain"
              />

              <h3 className="text-md md:text-2xl font-semibold hover:text-[#CD7752] transition duration-300 ">
                {card.heading}
              </h3>
              <p className="text-md md:text-xl font-bold">{card.price}</p>
              <div className="flex items-center">
                <StarBorderIcon sx={{ fontSize: { sm: 20, md: 35 } }} />
                <StarBorderIcon sx={{ fontSize: { sm: 20, md: 35 } }} />
                <StarBorderIcon sx={{ fontSize: { sm: 20, md: 35 } }} />
                <StarBorderIcon sx={{ fontSize: { sm: 20, md: 35 } }} />
                <StarBorderIcon sx={{ fontSize: { sm: 20, md: 35 } }} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Slider 2 */}
      <Swiper
        spaceBetween={1}
        slidesPerView={4}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {CardsData2.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="cards-resize mt-3 md:mt-10 bg-white cursor-pointer rounded-xl p-5 flex flex-col  gap-3 transition">
              <Image
                src={card.image}
                alt={card.heading}
                width={480}
                height={200}
                className="object-contain"
              />

              <h3 className="text-md md:text-2xl font-semibold hover:text-[#CD7752] transition duration-300 ">
                {card.heading}
              </h3>
              <p className="text-md md:text-xl font-bold">{card.price}</p>
              <div className="flex items-center ">
                <StarBorderIcon sx={{ fontSize: { sm: 20, md: 35 } }} />
                <StarBorderIcon sx={{ fontSize: { sm: 20, md: 35 } }} />
                <StarBorderIcon sx={{ fontSize: { sm: 20, md: 35 } }} />
                <StarBorderIcon sx={{ fontSize: { sm: 20, md: 35 } }} />
                <StarBorderIcon sx={{ fontSize: { sm: 20, md: 35 } }} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Tab;
