import React from "react";

const TableHeader = () => {
  return (
    <div className="w-full h-[53px] flex items-center bg-black text-xl font-semibold text-white p-4">
      <div className="w-[30%] flex">Product Name</div>
      <div className="w-[11%] ">Brand</div>
      <div className="w-[11%]">Series</div>
      <div className="w-[11%] ">Type</div>
      <div className="w-[11%]">Category</div>
      <div className="w-[16%] flex">Price</div>
      <div className="w-[10%]">Status</div>
    </div>
  );
};

export default TableHeader;
