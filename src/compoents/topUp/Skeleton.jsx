import React from "react";

function Skeleton() {
  return (
    <div className="flex gap-x-2 px-2 mt-2 text-abu1">
      <div>
        <div className="h-3  w-[80%] skeleton bg-abu1 mb-2"></div>
        <div className="skeleton h-9 focus:ring-0    w-52 rounded-lg"></div>
      </div>
      <div>
        <div className="h-3  w-[80%] skeleton bg-abu1 mb-2"></div>
        <div className="skeleton h-9 focus:ring-0    w-52 rounded-lg"></div>
      </div>

      <div className="flex items-end">
        <button className="text-abu1 font-semibold px-5 skeleton  h-9  rounded-lg bg-abu w-20"></button>
      </div>
    </div>
  );
}

export default Skeleton;
