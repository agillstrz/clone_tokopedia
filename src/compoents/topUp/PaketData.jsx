import React from "react";

function PaketData() {
  return (
    <div className="flex gap-x-2 px-2 mt-2 text-abu1">
      <div>
        <label className="block font-semibold text-sm " htmlFor="">
          Nomor Telepon
        </label>
        <input
          className="outline-none h-9 focus:ring-0  focus:border-main w-full rounded-lg"
          type="text"
          placeholder="081234567890"
          name=""
          id=""
        />
      </div>
      <div>
        <label className="block font-semibold text-sm " htmlFor="">
          Nominal
        </label>
        <input
          className="outline-none focus:ring-0 h-9   focus:border-main w-full rounded-lg"
          type="text"
          placeholder="081234567890"
          name=""
          id=""
        />
      </div>
      <div className="flex items-end">
        <button className="text-abu1 font-semibold px-5  h-9  rounded-lg bg-abu opacity-60">
          Beli
        </button>
      </div>
    </div>
  );
}

export default PaketData;
