import React, { useState } from "react";
import { mproduct } from "../../mockup/mockup";
import CardProduct from "./CardProduct";

function Product() {
  const [click, setClick] = useState(false);
  const data = [
    {
      nama: "For You",
      color: "bg-[#C02186]",
    },
    {
      nama: "Spesial Discount",
      color: "bg-[#552091]",
    },
    {
      nama: "Perawatan Kulit",
      color: "bg-[#F7AD0B]",
    },
    {
      nama: "Perawatan Kulit",
      color: "bg-[#1E9A47] ",
    },
    {
      nama: "Brush Applicator",
      color: "bg-[#C02186]",
    },
  ];
  return (
    <>
      <div className=" h-1 w-full bg-black/40"></div>
      <div className="my-5">
        <div className="flex gap-x-3">
          {data.map((m, index) => (
            <div
              key={index}
              className={`w-52 cursor-pointer rounded-xl h-16 ${m.color} p-2`}
            >
              {/* <div className="w-[30%] bg-white h-1"></div> */}
              <p className="text-md font-bold text-white">{m.nama}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 grid-cols-2 gap-x-2 lg:gap-x-3 gap-y-5 mt-5">
          {mproduct.map((m, index) => (
            <CardProduct key={index} data={m} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
