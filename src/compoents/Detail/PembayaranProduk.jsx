import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
export default function PembayaranProduk() {
  const [count, setCount] = useState(1);
  let total = 49300;
  const [note, setNote] = useState(false);
  return (
    <>
      <div className=" border-[1px] rounded-lg border-abu1/60  p-3  flex gap-y-4 flex-col">
        <h1 className="font-medium text-[18px] ">Atur jumlah dan catatan</h1>
        <div className="flex items-center gap-x-2">
          <img
            className="h-10"
            src="https://images.tokopedia.net/img/cache/700/product-1/2019/7/5/3453155/3453155_b49ba184-3041-444a-8708-ea65fd09ca78_1280_1280.webp?ect=4g"
            alt=""
          />
          <span>Merah muda</span>
        </div>

        <div className="flex gap-x-3 items-center">
          <div className="flex gap-x-2 text-lg border w-24 font-semibold items-center px-1 py-[2px] rounded-lg">
            <button
              onClick={() => setCount(count > 1 ? count - 1 : count)}
              className="w-[30%] text-center text-abu "
            >
              -
            </button>
            <button className="w-[40%] text-center textabu">{count}</button>
            <button
              onClick={() => setCount(count < 10 ? count + 1 : count)}
              className="w-[30%] text-center text-main"
            >
              +
            </button>
          </div>
          <p>
            Stok : <span className="font-medium textabu">100rb+</span>
          </p>
        </div>

        {note ? (
          <div>
            <input
              type="text"
              placeholder="Contoh: Warna putih, size M"
              className="w-full rounded-lg mb-2  border-main2 focus:border-main placeholder:font-medium focus:outline-none focus:ring-0"
            />
            <span
              onClick={() => setNote(false)}
              className="font-bold cursor-pointer  text-main2 text-sm"
            >
              Batalkan Catatan
            </span>
          </div>
        ) : (
          <span
            onClick={() => setNote(true)}
            className="font-bold cursor-pointer flex gap-x-1 items-center text-main2 text-sm"
          >
            {" "}
            <HiOutlinePencil /> Tambah catatan
          </span>
        )}

        <div className="flex w-full text-sm items-center justify-between">
          <p className="textabu">Subtotal</p>
          <span className="font-bold text-lg">
            <FormatRupiah value={total * count} />
          </span>
        </div>

        <div className="flex flex-col gap-y-2">
          <button
            className={`bg-main2 w-full flex justify-center items-center px-2 hover:bg-[#2d8942] py-[5px]  font-medium text-center text-[20px]  rounded-lg text-white`}
          >
            + Keranjang
          </button>
          <button
            className={`bg-white w-full flex justify-center items-center px-2 hover:border-main border border-main2 py-[5px]   text-center text-[20px]  rounded-lg text-main2`}
          >
            Beli
          </button>
        </div>

        <div className="flex gap-x-2 text-black  justify-center text-sm items-center font-medium">
          <span className="flex gap-x-1 items-center">
            <BsChatLeftText /> Chat
          </span>
          <span className="flex gap-x-1 items-center">
            <AiOutlineHeart /> Wish
          </span>
          <span className="flex gap-x-1 items-center">
            <AiOutlineShareAlt />
            Share
          </span>
        </div>
      </div>
    </>
  );
}
