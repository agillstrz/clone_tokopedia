import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useState } from "react";
import Countdown from "react-countdown";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { traktir } from "../../mockup/mockup";
import { LoadingEffect } from "../../utils/LoadingEfek";
import Loading from "../Loading";

function Traktiran() {
  const [slide, setSlide] = useState(false);
  const data = traktir;
  const [curr, setCurr] = useState(0);

  let datas = data.length / 5;
  const nextSlide = () => {
    setSlide(true);
    setCurr((curr) => (curr == Math.floor(datas) ? 0 : curr + 1));
  };
  const prevSlide = () => {
    setCurr((curr) => (curr == Math.floor(datas) ? curr - 1 : 0));
  };
  let a = 60 * 60 * 60 * 60;
  const { loading } = LoadingEffect();
  return (
    <div className="my-5">
      <div className="flex items-center  mb-4 gap-x-2">
        <h2 className="font-bold text-2xl  leading-none  text-black/80">
          Traktiran Pengguna Baru
        </h2>
        <p className="text-abu pt-2 font-semibold">Berakhir dalam</p>
        <div>
          <Countdown
            className="bg-red-600 rounded-sm py-1 px-3 text-white font-bold text-xl"
            date={Date.now() + a}
            intervalDelay={0}
            precision={3}
          />
        </div>
      </div>

      <div className="w-full  h-[20rem] overflow-hidden relative bg-white shadow-lg">
        <span className="absolute   transition-all duration-300 ease-out  right-0 top-1/2 z-[99] -translate-y-1/2">
          <BiChevronRight
            onClick={nextSlide}
            className={`p-1 rounded-full z-[99] cursor-pointer bg-white/60 text-abu1 ${
              Math.floor(datas) == curr ? "hidden" : ""
            }`}
            size={42}
          />
        </span>
        <span className="absolute   transition-all duration-300 ease-out  left-0 top-1/2 z-[99] -translate-y-1/2">
          <BiChevronLeft
            onClick={prevSlide}
            className={`p-1 rounded-full z-[99] cursor-pointer bg-white/60 text-abu1 ${
              curr == 0 ? "hidden" : ""
            }`}
            size={42}
          />
        </span>
        <div className={`flex `}>
          <div
            className={`bg-[#06947A] w-[23%] rounded-lg h-full left-0 transition-all duration-300 ease-out ${
              curr !== 0 ? "-translate-x-[100%]" : " absolute"
            }`}
          ></div>
          <div
            className={`absolute transition-all duration-300 ease-out h-full items-center   gap-x-5 flex overflow-hidden `}
            style={{ transform: `translateX(${-29 * curr}%)` }}
          >
            <img
              className={`h-full w-52  transition-all duration-300 ease-out ${
                curr !== 0 ? "-translate-x-[100%]" : ""
              }`}
              src="https://images.tokopedia.net/img/cache/240/PYbRbC/2023/3/3/1b411c12-1e27-4377-b085-5a4525bc0626.png.webp?ect=4g"
              alt=""
            />

            {loading ? (
              <>
                {[1, 2, 3, 4, 5].map((m, index) => (
                  <Loading
                    key={index}
                    style={"h-[18rem] w-52 border  rounded-xl"}
                  />
                ))}
              </>
            ) : (
              <>
                {data.map((m) => (
                  <Link
                    to="detail"
                    className="bg-white border hover:-translate-y-3 cursor-pointer transition-all duration-200 ease-out  rounded-xl overflow-hidden h-[18rem] w-52  flex flex-col"
                  >
                    <img className="h-[70%] p-2  w-full " src={m.foto} alt="" />
                    <div className="h-[30%] px-2 w-full flex flex-col gap-y-[2px]">
                      <p className="font-semibold  text-md">
                        <FormatRupiah value={m.harga} />{" "}
                      </p>
                      <div className="flex gap-x-2 items-center font-bold text-[11px] ">
                        <span className="bg-abu1/40 rounded-sm font-bold text-red-600 ">
                          37%
                        </span>
                        <span className="line-through text-abu1 ">
                          <FormatRupiah value={20000} />
                        </span>
                      </div>
                      <div className="flex rounded-lg mt-2 overflow-hidden">
                        <div className="w-[70%] bg-red-600 h-1"></div>
                        <div className="w-[30%] bg-abu h-1"></div>
                      </div>
                      <p className="text-abu1 text-[12px] font-bold">
                        Segera abis
                      </p>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Traktiran;
