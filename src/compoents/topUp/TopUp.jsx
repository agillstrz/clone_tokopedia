import React, { useEffect, useState } from "react";
import Pulsa from "./Pulsa";
import "./loading.css";
import Skeleton from "./Skeleton";
function TopUp() {
  const [tagihan, setTagihan] = useState({
    pulsa: true,
    paketData: false,
    Flight: false,
    Listrik: false,
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [tagihan]);
  return (
    <div className="w-1/2  ">
      <div className="flex gap-x-2 mb-5  items-end">
        <h2 className="font-bold text-2xl leading-none  text-black/80 ">
          Top up & Tagihan{" "}
        </h2>
        <span className="text-main/90 font-bold text-md">Lihat Semua</span>
      </div>

      <div className="w-full h-40 border-2  rounded-xl overflow-hidden">
        <ul className="flex  border justify-between gap-x-2 py-2">
          <li
            onClick={() => setTagihan({ pulsa: !tagihan.pulsa })}
            className="text-black/90 group  relative font-semibold text-center w-[25%] hover:text-main cursor-pointer"
          >
            Pulsa
            <span
              className={`absolute h-1  transition-all duration-200 ease-out text-main bg-main left-0 -bottom-2 ${
                tagihan.pulsa ? "w-full" : "w-0"
              }`}
            ></span>
          </li>
          <li
            onClick={() => setTagihan({ paketData: !tagihan.paketData })}
            className="text-black/90 text-center relative font-semibold hover:text-main w-[25%] cursor-pointer"
          >
            Paket Data
            <span
              className={`absolute h-1  transition-all duration-200 ease-out text-main bg-main left-0 -bottom-2 ${
                tagihan.paketData ? "w-full" : "w-0"
              }`}
            ></span>
          </li>
          <li
            onClick={() => setTagihan({ Flight: !tagihan.Flight })}
            className="text-black/90 text-center relative font-semibold hover:text-main w-[25%] cursor-pointer"
          >
            Flight
            <span
              className={`absolute h-1  transition-all duration-200 ease-out text-main bg-main left-0 -bottom-2 ${
                tagihan.Flight ? "w-full" : "w-0"
              }`}
            ></span>
          </li>
          <li
            onClick={() => setTagihan({ Listrik: !tagihan.Listrik })}
            className="text-black/90 text-center relative font-semibold hover:text-main w-[25%] cursor-pointer"
          >
            Listrik
            <span
              className={`absolute h-1  transition-all duration-200 ease-out text-main bg-main left-0 -bottom-2 ${
                tagihan.Listrik ? "w-full" : "w-0"
              }`}
            ></span>
          </li>
        </ul>
        {loading ? <Skeleton /> : <Pulsa />}
      </div>
    </div>
  );
}

export default TopUp;
