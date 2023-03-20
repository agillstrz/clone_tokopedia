import React, { useState } from "react";
import Product from "../compoents/AllProduct/Product";
import Hero from "../compoents/Hero";
import KategoriPilihan from "../compoents/KategoriPilihan/KategoriPilihan";
import Loading from "../compoents/Loading";
import Traktiran from "../compoents/PenggunaBaru/Traktiran";
import TopUp from "../compoents/topUp/TopUp";
import GoToTop from "../helpers/GoToTop";
import { LoadingEffect } from "../utils/LoadingEfek";
function Home() {
  const [hover, setHover] = useState(false);
  const nav = [
    {
      nama: "kategori",
      foto: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png",
    },
    {
      nama: "Handphone & Tablet",
      foto: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/a809e96e-3c18-4e63-ac83-8deb9b4c1b1c.png",
    },
    {
      nama: "Top up & Tagihan",
      foto: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/75f2fb8a-a4ca-4cd6-a166-7279daef1d5b.png",
    },
    {
      nama: "Travel & Entertaiment",
      foto: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/b5af3e8e-bc2e-48b4-8d00-6d49ec8f4d50.png",
    },
    {
      nama: "Perawatan & Hewan",
      foto: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/65d13c55-c5c6-4ece-b957-99912c3f8f3c.png",
    },
    {
      nama: "Keuangan",
      foto: "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/b5a8add5-ed3f-400b-8f98-f484d22af153.png",
    },
  ];
  const { loading } = LoadingEffect();
  return (
    <>
      <div className="relative mb-20">
        <Hero />
        <div className="flex flex-col gap-y-5 content">
          <div className="mt-5 border bg-white rounded-lg shadow-xl p-3">
            <div className="flex lg:flex-row flex-col justify-center gap-x-2 ">
              <KategoriPilihan />
              <TopUp />
            </div>

            {loading ? (
              <ul className="flex gap-x-2 mt-5">
                {[1, 2, 3, 4, 5, 6].map((m, index) => (
                  <Loading style="h-8 w-52 rounded-lg" />
                ))}
              </ul>
            ) : (
              <ul className="flex gap-x-2 mt-5">
                {nav.map((m, index) => (
                  <li
                    key={index}
                    className="px-4 cursor-pointer hover:text-main py-2 flex justify-center items-center gap-x-2 rounded-xl text-[15px] text-black/80 border"
                  >
                    <img className="h-8" src={m.foto} alt="" /> {m.nama}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Traktiran />
          <Product />
        </div>
      </div>
      <GoToTop />
    </>
  );
}

export default Home;
