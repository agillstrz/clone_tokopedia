import React from "react";
import { IoCartSharp } from "react-icons/io5";
import foto from "../assets/img/cart.png";

function EmpetyCart() {
  return (
    <div
      className={`absolute w-[24rem] top-12 overflow-hidden flex flex-col justify-end  items-center  -right-44  z-[999]  bg-white shadow-md  rounded-lg  transition-all  duration-200 ease-in h-0 group-hover:h-56`}
    >
      <img className="h-1/2" src={foto} alt="" />
      <div className="px-3 pb-4">
        <h2 className="text-center text-[20px] font-semibold text-black/80">
          Keranjang
        </h2>
        <p className="text-sm text-abu1">
          Daripada dianggurin, isi saja dengan barang-barang menarik.
          Lihat-lihat dulu, siapa tahu ada yang kamu suka!
        </p>
      </div>
    </div>
  );
}

export default EmpetyCart;
