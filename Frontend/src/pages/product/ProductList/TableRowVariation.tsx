import React from "react";
import { Switch } from "antd";
const TableRowVariation = () => {
  return (
    <div className="w-full bg-zinc-400 rounded-[8px] flex items-center text-base font-semibold p-2">
      <div className="w-[30%] flex justify-start h-full">
        <div className="ml-3">product</div>
      </div>
      <div className="w-[11%] flex items-start justify-center h-full">
        <label className="ml-[-10px]">Brand</label>
      </div>
      <div className="w-[11%] flex items-start justify-center h-full">
        <label className="ml-[-4px]">Series</label>
      </div>
      <div className="w-[11%] flex items-start justify-center h-full ">
        <label className="ml-[3px]">Type</label>
      </div>
      <div className="w-[11%] flex items-start justify-center h-full">
        <label className="ml-[12px]">Type</label>
      </div>
      <div className="w-[16%] flex items-start h-full">
        <label className="ml-[7px]">Price</label>
      </div>
      <div className="w-[10%] flex items-start justify-center h-full">
        <div className="ml-[26px]">
          <Switch
            checkedChildren="Active"
            unCheckedChildren="Inactive"
            defaultChecked={true}
          />
        </div>
      </div>
    </div>
  );
};

export default TableRowVariation;
