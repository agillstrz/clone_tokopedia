import { Carousel } from "flowbite-react";
import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LoadingEffect } from "../../utils/LoadingEfek";
import Loading from "../Loading";

function KategoriPilihan() {
  const img = [
    {
      data1: [
        "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp",
        "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg.webp",
        "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_d7c67b76-9ff4-46f9-93a3-ec4be4918439.jpg.webp",
        "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg.webp",
      ],
    },
    {
      data2: [
        "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg.webp",
        "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg.webp",
        "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/11/3127195/3127195_2883bb63-8f91-4c9c-a423-d68b22e51b78.jpg.webp",
        "https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp",
      ],
    },
  ];
  const [slide, setSlide] = useState(0);
  const { loading: load } = LoadingEffect();
  const nextSlide = () => {
    setSlide((slide) => (slide === img.length - 1 ? 0 : slide + 1));
  };
  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? img.length - 1 : slide - 1));
  };
  return (
    <div className="lg:w-1/2 ">
      <h2 className="font-bold text-2xl leading-none mb-4  text-black/80">
        Kategori Pilihan
      </h2>

      <div className=" group  w-full  h-40 relative">
        <Carousel
          slide={false}
          leftControl={
            <span className="absolute opacity-0  group-hover:opacity-100 transition-all duration-300 ease-out  left-0 top-1/2 z-[999] -translate-y-1/2">
              <BiChevronLeft
                onClick={prevSlide}
                className="p-1 rounded-full cursor-pointer bg-white/50 text-abu1"
                size={42}
              />
            </span>
          }
          rightControl={
            <span className="absolute opacity-0  group-hover:opacity-100 transition-all duration-300 ease-out  right-0 top-1/2 z-[999] -translate-y-1/2">
              <BiChevronRight
                onClick={nextSlide}
                className="p-1 rounded-full cursor-pointer bg-white/50 text-abu1"
                size={42}
              />
            </span>
          }
          className=""
        >
          <div className="flex justify-start gap-x-2  w-full">
            {!load &&
              img[0].data1.map((m, index) => (
                <Link
                  to="detail"
                  key={index}
                  className="h-36 cursor-pointer rounded-lg w-44 bg-white overflow-hidden border  flex justify-center items-center"
                >
                  <img src={m} alt="" />
                </Link>
              ))}
            {load &&
              [1, 2, 3].map((m, index) => (
                <Loading key={index} style="w-44 h-36" />
              ))}
          </div>
          <div className="flex justify-start gap-x-2  w-full">
            {img[1].data2.map((m, index) => (
              <Link
                to="detail"
                key={index}
                className="h-36 cursor-pointer rounded-lg w-44 bg-white overflow-hidden border  flex justify-center items-center"
              >
                <img src={m} alt="" />
              </Link>
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default KategoriPilihan;
