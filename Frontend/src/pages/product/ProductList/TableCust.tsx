import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

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
  variant?: TableDataShape[] | undefined;
};

const TableCust = () => {
  const test: TableDataShape[] = [
    {
      id: 0,
      productName: "test",
      brand: "test",
      series: "test",
      type: "test",
      category: "test",
      price: "RP.1000",
      status: false,
      variant: [],
    },
    {
      id: 1,
      productName: "test1",
      brand: "test1",
      series: "test1",
      type: "test1",
      category: "test1",
      price: "RP.2000",
      status: true,
      variant: [{ id: 1 }],
    },
    {
      id: 2,
      productName: "test2",
      brand: "test2",
      series: "test2",
      type: "test2",
      category: "test2",
      price: "RP.13000",
      status: true,
      variant: [{ id: 1 }],
    },
    {
      id: 3,
      productName: "test3",
      brand: "test3",
      series: "test3",
      type: "test3",
      category: "test3",
      price: "RP.14000",
      status: true,
      variant: [],
    },
    {
      id: 4,
      productName: "test4",
      brand: "test4",
      series: "test4",
      type: "test4",
      category: "test4",
      price: "RP.15000",
      status: false,
      variant: [{ id: 1 }],
    },
    {
      id: 5,
      productName: "test5",
      brand: "test5",
      series: "test5",
      type: "test5",
      category: "test5",
      price: "RP.16000",
      status: true,
      variant: [{ id: 1 }],
    },
  ];
  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <div className="w-full h-[53px]">
        <TableHeader />
      </div>
      <div className=" h-[740px] w-full overflow-auto">
        {test.map((value) => (
          <TableRow value={value} />
        ))}
      </div>
    </div>
  );
};

export default TableCust;
