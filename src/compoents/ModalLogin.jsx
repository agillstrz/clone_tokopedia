import React, { useState } from "react";
import { BsQrCodeScan } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import gif from "../assets/gif/gif.gif";
function ModalLogin({ setModal, modal }) {
  const [btn, setBtn] = useState(false);
  const [check, setCheck] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setBtn(true);
    setTimeout(() => {
      setBtn(false);
      setCheck(true);
      setTimeout(() => {
        setModal(false);
        setCheck(false);
      }, 1500);
    }, 2000);
  };
  return (
    <div
      className={`w-full  ${
        modal ? "visible" : "invisible"
      } h-screen overflow-hidden bg-black/60 fixed z-[9999] transition-all duration-150 ease-out`}
    >
      <div
        className={`fixed ${
          modal ? "scale-100" : "scale-0"
        }  w-[27%] h-[90%] top-1/2 left-1/2 p-8 -translate-y-1/2  bg-white transition-all duration-500 ease-in-out  overflow-hidden rounded-lg z-[9999]  -translate-x-1/2 `}
      >
        {!check ? (
          <>
            <span className="w-full flex justify-end transition-all duration-300 ">
              <RxCross1
                onClick={() => setModal(false)}
                size={35}
                className="hover:bg-abu1/30 cursor-pointer "
              />
            </span>
            <div className="flex justify-between  my-5 items-center">
              <h1 className="font-bold text-3xl ">Masuk</h1>
              <h1 className=" text-main text-md pt-3 ">Daftar</h1>
            </div>
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-y-3"
              action=""
            >
              <div>
                <label
                  className="block text-sm text-abu1/90 font-bold"
                  htmlFor=""
                >
                  Nomor HP atau Email
                </label>
                <input
                  type="text"
                  className="bg-abu/10 focus:bg-transparent   h-10 focus:ring-0   focus:border-main w-full rounded-lg"
                />
              </div>
              <div>
                <label
                  className="block text-sm text-abu1/90 font-bold"
                  htmlFor=""
                >
                  Password
                </label>
                <input
                  type="password"
                  className="bg-abu/10 focus:bg-transparent   h-10 focus:ring-0   focus:border-main w-full rounded-lg"
                />
              </div>
              <span className="text-[13px] w-full flex justify-end  font-semibold  text-main2">
                Lupa kata sandi?
              </span>

              <button
                className={`bg-main2 w-full flex justify-center items-center px-2 hover:bg-[#2d8942] h-10  font-bold text-center text-lg  rounded-lg text-white`}
              >
                {btn ? (
                  <div className="w-6 h-6 border-2 animate-spin border-t-main2 rounded-full"></div>
                ) : (
                  "Selanjutnya"
                )}
              </button>
            </form>

            <div className="mt-5">
              <div className="flex justify-center items-center gap-x-2">
                <span className="w-[30%] h-[2px] bg-abu/50"></span>
                <span className="text-[13px]  w-[60%] text-center text-abu/90">
                  atau masuk dengan
                </span>
                <span className="w-[30%] h-[2px] bg-abu/50"></span>
              </div>
              <div className="flex flex-col gap-y-3 items-center">
                <div className=" flex justify-center w-full gap-x-2 border-black/40 items-center rounded-lg border h-10  ">
                  <BsQrCodeScan />
                  <span className="text-abu font-semibold text-lg">
                    Scan Kode QR
                  </span>
                </div>
                <div className=" flex justify-center w-full  items-center border-black/40 rounded-lg border  h-10  ">
                  <span className="font-semibold text-sm">Metode Lain</span>
                </div>
              </div>
            </div>
            <p className="text-sm w-full text-center mt-5">
              Butuh bantuan?{" "}
              <span className="text-main">Hubungi Tokopedia</span>
            </p>
          </>
        ) : (
          <div className="flex justify-center items-center  h-full">
            <img className="h-56" src={gif} alt="" />
          </div>
        )}
      </div>
    </div>

    // <div
    //   className={`fixed ${
    //     modal ? "scale-100 " : "scale-0"
    //   }  w-[27%] h-[90%]  top-1/2 left-1/2 p-8  bg-white  overflow-hidden rounded-lg z-[9999]  -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out`}
    // >
    //   <span
    //     onClick={() => setModal(false)}
    //     className="w-full flex justify-end "
    //   >
    //     <RxCross1
    //       size={35}
    //       className="hover:bg-abu1/30 cursor-pointer transition-all duration-200 ease-linear"
    //     />
    //   </span>
    //   <div className="flex justify-between  my-5 items-center">
    //     <h1 className="font-bold text-3xl ">Masuk</h1>
    //     <h1 className=" text-main text-md pt-3 ">Daftar</h1>
    //   </div>
    //   <form className="flex flex-col gap-y-3" action="">
    //     <div>
    //       <label className="block text-sm text-abu1/90 font-bold" htmlFor="">
    //         Nomor HP atau Email
    //       </label>
    //       <input
    //         type="text"
    //         className="bg-abu/10 focus:bg-transparent   h-10 focus:ring-0   focus:border-main w-full rounded-lg"
    //       />
    //     </div>
    //     <div>
    //       <label className="block text-sm text-abu1/90 font-bold" htmlFor="">
    //         Nomor HP atau Email
    //       </label>
    //       <input
    //         type="text"
    //         className="bg-abu/10 focus:bg-transparent   h-10 focus:ring-0   focus:border-main w-full rounded-lg"
    //       />
    //     </div>
    //     <span className="text-[13px] w-full flex justify-end  font-semibold  text-main2">
    //       Lupa kata sandi?
    //     </span>
    //     <button
    //       className={`bg-main2 w-full px-2 hover:bg-[#2d8942] text-lg py-2 font-bold text-center rounded-lg text-white`}
    //     >
    //       Selanjutnya
    //     </button>
    //   </form>

    //   <div className="mt-5">
    //     <div className="flex justify-center items-center gap-x-2">
    //       <span className="w-[30%] h-[2px] bg-abu/50"></span>
    //       <span className="text-[13px]  w-[60%] text-center text-abu/90">
    //         atau masuk dengan
    //       </span>
    //       <span className="w-[30%] h-[2px] bg-abu/50"></span>
    //     </div>
    //     <div className="flex flex-col gap-y-3 items-center">
    //       <div className=" flex justify-center w-full gap-x-2 items-center rounded-lg border h-10  ">
    //         <BsQrCodeScan />
    //         <span className="text-abu font-semibold text-lg">Scan Kode QR</span>
    //       </div>
    //       <div className=" flex justify-center w-full  items-center rounded-lg border  h-10  ">
    //         <span className="font-semibold text-sm">Metode Lain</span>
    //       </div>
    //     </div>
    //   </div>
    //   <p className="text-sm w-full text-center">
    //     Butuh bantuan? <span className="text-main">Hubungi Tokopedia</span>
    //   </p>
    // </div>
  );
}

export default ModalLogin;
