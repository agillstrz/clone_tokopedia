import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Carousel } from "flowbite-react";
import Loading from "./Loading";
import { load, LoadingEffect } from "../utils/LoadingEfek";
function Hero() {
  const img = [
    "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/3/9/311b309e-e436-4065-aa04-b0e688d4902d.jpg.webp?ect=4g",
    "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/3/9/430e327b-2ae3-4645-8281-c964e2b42b2c.jpg.webp?ect=4g",
    "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/3/9/e32a3963-02c1-4bd1-abc2-9a35f05f3c5a.jpg.webp?ect=4g",
  ];

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === img.length - 1 ? 0 : slide + 1));
  };
  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? img.length - 1 : slide - 1));
  };

  const { loading } = LoadingEffect();
  if (loading) {
    return <Loading style={"h-56 mx-20 mt-5 rounded-lg"} />;
  }

  return (
    <>
      <div className="h-56 group  pt-5 sm:h-64 xl:h-80  2xl:h-96 mx-20 relative">
        <Carousel
          leftControl={
            <span className="absolute opacity-0  group-hover:opacity-100 transition-all duration-300 ease-out group-hover:-left-5 left-0 top-1/2 z-[999] -translate-y-1/2">
              <BiChevronLeft
                onClick={prevSlide}
                className="p-1 rounded-full cursor-pointer bg-white text-abu1"
                size={50}
              />
            </span>
          }
          rightControl={
            <span className="absolute opacity-0  group-hover:opacity-100 transition-all duration-300 ease-out group-hover:-right-5 right-0 top-1/2 z-[999] -translate-y-1/2">
              <BiChevronRight
                onClick={nextSlide}
                className="p-1 rounded-full cursor-pointer bg-white text-abu1"
                size={50}
              />
            </span>
          }
          className=""
        >
          {img.map((m, index) => (
            <img key={index} className="rounded-lg" src={m} alt="" />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Hero;
