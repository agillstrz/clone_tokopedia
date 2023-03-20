import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";
import DeskripsiProduk from "../compoents/Detail/DeskripsiProduk";
import ImageProduct from "../compoents/Detail/ImageProduct";
import PembayaranProduk from "../compoents/Detail/PembayaranProduk";
import UlasanPembeli from "../compoents/Detail/UlasanPembeli";
import GoToTop from "../helpers/GoToTop";

function Detail() {
  return (
    <>
      <div className="content relative min-h-screen mt-10 ">
        <div className="grid grid-cols-12 lg:gap-x-5 place-content-between">
          <div className=" lg:gap-y-2 flex flex-col items-center w-full col-span-4">
            <ImageProduct />
          </div>
          <div className="  w-full flex-col flex gap-y-[6px] col-span-5">
            <DeskripsiProduk />
          </div>
          <div className="col-span-3 sticky top-[178px]">
            <PembayaranProduk />
          </div>
          <div className="col-span-3 h-screen">
            <UlasanPembeli />
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
}

export default Detail;
