import React, { useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { MdSmartphone } from "react-icons/md";
import EmpetyCart from "./EmpetyCart";
import Hero from "./Hero";
import ModalLogin from "./ModalLogin";
function Navbar({ setHover }) {
  const [modal, setModal] = useState(false);
  console.log(modal);
  return (
    <>
      {/* {modal && <ModalLogin modal={modal} setModal={setModal} />} */}
      <ModalLogin modal={modal} setModal={setModal} />
      <div className=" shadow-lg w-full ">
        <div className="flex bg-text  px-10 text-sm bg-[#ededed] text-abu1 py-2 justify-between w-full">
          <div className="flex gap-x-2 items-center">
            <MdSmartphone />
            <span>Download Tokopedia App</span>
          </div>

          <ul className="flex gap-x-4">
            <li className="cursor-pointer hover:text-main transition-colors duration-100 ease-in">
              Tentang Tokopedia
            </li>
            <li className="cursor-pointer hover:text-main transition-colors duration-100 ease-in">
              Mitra Tokopedia
            </li>
            <li className="cursor-pointer hover:text-main transition-colors duration-100 ease-in">
              Mulai Berjuala
            </li>
            <li className="cursor-pointer hover:text-main transition-colors duration-100 ease-in">
              Mulai Berjuala
            </li>
            <li className="cursor-pointer hover:text-main transition-colors duration-100 ease-in">
              Promo
            </li>
            <li className="cursor-pointer hover:text-main transition-colors duration-100 ease-in">
              Tokopedia Care
            </li>
          </ul>
        </div>
        <div className="flex justify-between py-7 items-center content ">
          <img
            src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
            alt=""
          />
          <span className="text-abu">Kategori</span>
          <form className="relative group   w-[50rem] h-8 rounded-lg  flex items-center">
            <span className=" left-0 absolute  text-black px-2 text-2xl ">
              <BiSearch className="text-abu" />
            </span>
            <input
              className=" placeholder:text-slate-400 h-full focus:ring-0 border focus:border-main outline-none rounded-lg  pl-10  w-full "
              type="text"
              name=""
              placeholder="Cari di Tokopedia "
              id=""
            />
          </form>
          <div className="flex gap-x-10 relative  ">
            <div className="cursor-pointer   group relative">
              <IoCartSharp className="text-3xl text-abu1 p-[1px] hover:bg-abu1/40" />
              <EmpetyCart />
            </div>
            <div className="flex gap-x-2   z-[20] ">
              <button
                onClick={() => setModal(true)}
                className="font-bold bg-white   border-main border rounded-lg text-main py-1 px-2"
              >
                Masuk
              </button>
              <button className="font-bold bg-main rounded-lg text-white py-1 px-2">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
