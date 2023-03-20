import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";
import { Link } from "react-router-dom";
function CardProduct({ data }) {
  return (
    <Link
      to="/detail"
      className="lg:w-[13rem] lg:h-[22rem] cursor-pointer group bg-white shadow-md hover:shadow-lg overflow-hidden flex flex-col"
    >
      <div className="h-[55%] w-full">
        <img className="h-full w-full" src={data.foto} alt="" />
      </div>
      <div className="h-[45%] w-full  text-[12px] lg:text-sm p-3">
        <p className=" group-hover:text-main">{data.nama}</p>
        <p className="font-semibold  lg:text-md">
          <FormatRupiah value={data.harga} />{" "}
        </p>
        <div className="flex gap-x-2 items-center font-bold text-[11px] ">
          <span className="bg-abu1/40 rounded-sm font-bold text-red-600 ">
            37%
          </span>
          <span className="line-through text-abu1 ">
            <FormatRupiah value={data.diskon} />
          </span>
        </div>
        <div className="flex relative gap-x-2 overflow-hidden py-1 text-sm items-center">
          <span>
            {" "}
            <img
              className="h-4"
              src="https://images.tokopedia.net/ta/icon/badge/OS-Badge-80.png"
              alt=""
            />{" "}
          </span>
          <div className="relative   w-full flex items-center ">
            <span className="text-abu1/90 group-hover:-translate-y-[100%] transition-all duration-200 ease-out">
              {data.alamat}
            </span>

            <span className="text-abu1/90 transition-all duration-200 ease-out group-hover:translate-y-0  absolute translate-y-[100%] left-0 w-full  ">
              {data.toko}
            </span>
          </div>
        </div>
        <div className="flex gap-x-1 items-center">
          <span>⭐</span>
          <span className="text-abu1/90 ">{data.rating}</span>
          <span className="text-abu1/90 ">Terjual 10 rb+</span>
        </div>
      </div>
    </Link>
  );
}

export default CardProduct;
