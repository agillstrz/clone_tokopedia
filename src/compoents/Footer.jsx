import React from "react";
import {
  BsTwitter,
  BsFacebook,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";
import fb from "../assets/svg/fb.svg";
import ig from "../assets/svg/ig.svg";
import twit from "../assets/svg/twit.svg";
import pin from "../assets/svg/pin.svg";
import footer from "../assets/img/footer.png";
function Footer() {
  return (
    <>
      <div className="w-full bg-abu1/40 h-[2px]"></div>
      <div className="grid py-20 grid-cols-5 gap-x-5 mx-20">
        <div className="flex flex-col gapy-1 text-md text-black/70">
          <h1 className="text-black my-2 font-bold text-lg ">Tokopedia</h1>
          <p>Tentang tokopedia</p>
          <p>Hak kekayaan intelektual</p>
          <p>Karir</p>
          <p>Blog</p>
          <p>Bridestory</p>
          <p>Tokopedia Parents</p>
          <p>Mitra Blog</p>
          <p>Tokopedia Affiliate Program</p>
          <p>Tokopedia B2B Digital</p>
          <h1 className="text-black my-2 font-bold text-lg">Beli</h1>
          <p>Tagihan & Top Up</p>
          <p>Tukar Tambah Handphone</p>
          <p>Tokopedia COD</p>
        </div>
        <div className="flex flex-col gapy-1 text-md text-black/70">
          <h1 className="text-black my-2 font-bold text-lg">Jual</h1>
          <p>Pusat Edukasi Seller</p>
          <p>Mitra Toppers</p>
          <p>Daftar Official Store</p>

          <h1 className="text-black my-2 font-bold text-lg">
            Bantuan dan Panduan
          </h1>
          <p>Tokopedia Care</p>
          <p>Syarat dan Ketentuan</p>
          <p>Kebijakan Privasi</p>
          <p>Mitra</p>
          <h1 className="text-black my-2 font-bold text-lg">
            Keamanan & Privasi
          </h1>
          <div className="flex gap-x-2">
            <img className="w-10" src="" alt="" />
            <img className="w-10" src="" alt="" />
            <img className="w-10" src="" alt="" />
          </div>
        </div>
        <div className="flex flex-col gapy-1 text-md text-black/70">
          <h1 className="text-black my-2 font-bold text-lg">Ikuti Kami</h1>
          <div className="flex gap-x-2">
            <img src={fb} alt="" />
            <img src={twit} alt="" />
            <img src={pin} alt="" />
            <img src={ig} alt="" />
          </div>
        </div>
        <div className=" col-span-2">
          <img className="w-full h-[60%]" src={footer} alt="" />
          <div className="flex justify-center gap-x-2 items-center">
            <img
              className="h-12 w-36"
              src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-android.svg"
              alt=""
            />
            <img
              className="h-12 w-36"
              src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-ios.svg"
              alt=""
            />
            <img
              className="h-12 w-36"
              src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-huawei.svg"
              alt=""
            />
          </div>
          <p className="text-abu1/80 my-4 text-sm font-bold text-center w-full">
            © 2009 - 2023, PT. Tokopedia.
          </p>
          <div className="flex justify-center gap-x-2">
            <span className="py-1 px-2 text-sm rounded-lg bg-main2 text-white font-bold">
              Indonesia
            </span>
            <span className="py-1 px-2 text-sm rounded-lg bg-abu1/40 text-abu1 font-bold">
              English
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
