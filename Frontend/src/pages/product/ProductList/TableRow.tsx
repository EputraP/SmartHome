import React, { useState } from "react";
import { CKLogo } from "../../../assets";
import { Switch } from "antd";
import TableRowVariation from "./TableRowVariation";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

type TableDataShape = {
  id: number;
  productName?: string | undefined;
  image?: string | undefined;
  brand?: string | undefined;
  series?: string | undefined;
  type?: string | undefined;
  category?: string | undefined;
  price?: string | undefined;
  status?: boolean | undefined;
  variant?: TableDataShape[] | [];
};

interface Props {
  value: TableDataShape;
}

const TableRow = (props: Props) => {
  const { value } = props;
  const [showVariantFlag, setShowVariantFlag] = useState<boolean>(false);
  const isVariantAvail: boolean = value.variant?.length != 0;

  return (
    <div
      className={`w-full p-4 ${
        value.id % 2 == 0 ? " bg-neutral-400" : "bg-neutral-600"
      }`}
    >
      <div
        className={
          "w-full h-[90px] flex items-center text-base font-semibold text-white"
        }
      >
        <div className="w-[30%] flex justify-start h-full">
          <img src={CKLogo} className="w-[100px]" />
          <div className="ml-3">{value.productName}</div>
        </div>
        <div className="w-[11%] flex items-start justify-center h-full">
          {value.brand}
        </div>
        <div className="w-[11%] flex items-start justify-center h-full">
          {value.series}
        </div>
        <div className="w-[11%] flex items-start justify-center h-full">
          {value.type}
        </div>
        <div className="w-[11%] flex items-start justify-center h-full">
          {value.category}
        </div>
        <div className="w-[16%] flex items-start h-full">{value.price}</div>
        <div className="w-[10%] flex items-start justify-center h-full">
          <Switch
            checkedChildren="Active"
            unCheckedChildren="Inactive"
            defaultChecked={value.status}
          />
        </div>
      </div>
      {isVariantAvail && (
        <div className="w-full bg-[#D0D0D0] rounded-[8px] py-1 px-2">
          <div className="text-base font-bold flex items-center justify-between">
            <div>Show Product Variant</div>
            <button
              className="button-variant"
              onClick={() => setShowVariantFlag(!showVariantFlag)}
            >
              {showVariantFlag == false ? <DownOutlined /> : <UpOutlined />}
            </button>
          </div>
          {showVariantFlag && (
            <div className="flex flex-col gap-1 h-[133px] overflow-auto">
              <TableRowVariation />
              <TableRowVariation />
              <TableRowVariation />
              <TableRowVariation />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TableRow;
