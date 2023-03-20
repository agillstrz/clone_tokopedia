import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";

export default function DeskripsiProduk() {
  return (
    <>
      <h1 className=" text-[20px] font-bold ">
        Ellipsesinc - Kaos Oversize Pria Wanita Polos - Putih
      </h1>
      <div className="flex gap-x-2  ">
        <p>
          Terjual <span className="textabu">70+</span>
        </p>
        <p>
          ⭐4.4 <span className="textabu">(17 rating)</span>
        </p>
        <p>
          Diskusi <span className="textabu">(7)</span>
        </p>
      </div>
      <h2 className="text-3xl font-bold">
        <FormatRupiah value={43900} />
      </h2>
      <div className="mt-10 ">
        <p className="font-medium text-black/90 text-lg mb-4">
          Pilih warna:<span className="text-abu"> Putih</span>
        </p>
        <div className="flex gap-x-3 gap-y-2 flex-wrap">
          {[
            "putih",
            "hitam",
            "abu-abu",
            "merah muda",
            "hijau",
            "biru",
            "orange",
            "bata",
            "tosca",
            "salmon",
          ].map((m, index) => (
            <div
              key={index}
              className="border cursor-pointer px-2 py-1 gap-x-2 text-abu1 hover:text-black flex items-center justify-center  rounded-xl hover:border-main text-[16px]"
            >
              <img
                className="h-8"
                src="https://images.tokopedia.net/img/cache/700/product-1/2019/7/5/3453155/3453155_b49ba184-3041-444a-8708-ea65fd09ca78_1280_1280.webp?ect=4g"
                alt=""
              />
              {m}
            </div>
          ))}
        </div>
      </div>
      <ul className="text-main2 text-md font-bold flex w-full px-3 mt-5 gap-x-5 border-t border-b py-2">
        <li className="relative group cursor-pointer">
          Detail
          <div className="absolute -bottom-[10px] w-0 group-hover:w-full  transition-all duration-150 ease-in-out  bg-main2 h-[3px]"></div>
        </li>
        <li className="relative group cursor-pointer">
          Info Penting
          <div className="absolute -bottom-[10px] w-0 group-hover:w-full transition-all duration-150 ease-in-out  bg-main2 h-[3px]"></div>
        </li>
      </ul>

      <div className="flex px-3 textabu flex-col font-md gapy-1">
        <p>
          Kondisi : <span className="text-black">Baru</span>
        </p>
        <p>
          Berat satuan : <span className="text-black">125g</span>
        </p>
        <p>
          Kategori : <span className="font-medium text-main2">Kaos Pria</span>
        </p>
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex gap-x-2 text-[16px]">
          <img
            className="h-11"
            src="https://images.tokopedia.net/img/cache/215-square/shops-1/2019/4/27/443716/443716_ebe83b49-ec44-49f9-8bbb-665836386a48.jpg"
            alt=""
          />
          <div>
            <div>
              <h1 className="text-[19px] font-semibold">Elipce.inc</h1>
              <p>
                Online <span className="font-bold text-abu1">1jam lalu</span>
              </p>
            </div>
            <div className="flex gap-x-3">
              <p>
                4.7 <span className="text-abu1 text-sm">rata-rata ulasan</span>
              </p>
              <p>
                ± 3jam
                <span className="text-abu1 text-sm"> pesanan diproses</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            className={`bg-white w-full flex justify-center items-center px-5 hover:border-main border border-main2 py-[1px] font-bold  text-center text-[20px]  rounded-lg text-main2`}
          >
            Follow
          </button>
        </div>
      </div>
    </>
  );
}
