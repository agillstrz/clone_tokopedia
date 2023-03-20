import React from "react";
import { current } from "tailwindcss/colors";
import "./range.css";
export default function UlasanPembeli() {
  const rating = [
    {
      total: 13,
      rate: 5,
    },
    {
      total: 1,
      rate: 4,
    },
    {
      total: 1,
      rate: 3,
    },
    {
      total: 1,
      rate: 2,
    },
    {
      total: 1,
      rate: 1,
    },
  ];
  let subTotal = rating.map((m) => m.total).reduce((prev, acc) => prev + acc);

  return (
    <div className="min-h-screen mt-5">
      <h1 className="font-medium text-xl uppercase">Ulasan Pembeli</h1>
      <div className="flex flex-col gap-y-2 items-center">
        <div className="flex items-center text-[4rem]">
          ⭐ <span className="">4.4</span>
        </div>
        <p className="text-sm font-medium">82% pembeli merasa puas</p>
        <p className="text-[13px] textabu">17 rating • 5 ulasan</p>
        <div className="flex w-full px-8 flex-col gapy-1">
          {rating.map((m, index) => (
            <div key={index} className="flex gap-x-1 text-sm items-center">
              <span className="font-semibold text-main2">⭐{m.rate}</span>

              <div className="w-full rounded-full overflow-hidden bg-zinc-200 h-[6px] relative">
                <div
                  style={{ width: `${(m.total / subTotal) * 100}%` }}
                  className="absolute h-[6px] top-0 left-0  bg-main2"
                ></div>
              </div>
              <span className="textabu">{m.total}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
