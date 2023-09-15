import React, { useState, useEffect } from "react";
import {
  TabComponent,
  DropdownComponent2,
  SearchComponent,
  PaginationComponent,
  ButtonComponent,
  Modal,
} from "../../../components";
import { ProductListIcon } from "../../../assets";
import "./ProductList.css";
import {
  AppstoreOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import PopUpProduct from "./PopUpProduct";
import TableCust from "./TableCust";
import productListData from "./DummyData";
import { dataDummyDetail } from "./DummyData";
import defaultImg from "../../../assets/default.png";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

function paginate(arr: any, size: any) {
  return arr.reduce((acc: any, val: any, i: number) => {
    let idx = Math.floor(i / size);
    let page: number[] = acc[idx] || (acc[idx] = []);
    page.push(val);

    return acc;
  }, []);
}

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [autocompleteVal, setAutocompleteVal] = useState<string>("");
  const [productModal, setProductModal] = useState<boolean>(false);
  const [buttonVal, setButtonVal] = useState<string>("");
  const [sortingVal, setSortingVal] = useState<string>("Ascending");
  const [searchData, setSearchData] = useState<string>();
  const pageSize = 10;

  let pages = paginate(productListData, pageSize);

  let page = pages[currentPage - 1];

  return (
    <div className="w-full h-full p-4 flex flex-col justify-start">
      {productModal && (
        <Modal
          modal={productModal}
          setModal={setProductModal}
          screenPopUp={
            <PopUpProduct
              productModal={productModal}
              cancelButtonOnClick={setProductModal}
            />
          }
        />
      )}

      <div className=" w-full h-[7%] bg-[#A0A0A0] flex items-center justify-between">
        <div className="flex items-center">
          <button className="text-white bg-black rounded-lg py-[16px] px-[24px] cursor-pointer">
            Add Product
          </button>
        </div>
      </div>
      <div className="flex mt-[50px] ">
        <div className="flex flex-col w-[500px] h-[700px] bg-slate-400 p-[24px] rounded-md mr-[24px]">
          <div className="flex justify-end">
            <button className="text-white bg-black rounded-lg py-[16px] px-[24px] cursor-pointer">
              Add Package
            </button>
          </div>
          <div className="text-left mt-[20px]">
            <Accordion>
              <AccordionSummary
                expandIcon={<DownOutlined />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ height: "20px", backgroundColor: "#95A3B8" }}
              >
                <Typography sx={{ fontWeight: "bold" }}>SD</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="list-disc m-0 py-0 px-6">
                  <li className="text-md">LTS Standard + string</li>
                  <li className="text-md py-[10px]">LTS Standard + string</li>
                  <li className="text-md">LTS Standard + string</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="text-left mt-[20px]">
            <Accordion>
              <AccordionSummary
                expandIcon={<DownOutlined />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ height: "20px", backgroundColor: "#95A3B8" }}
              >
                <Typography sx={{ fontWeight: "bold" }}>SMA</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="list-disc m-0 py-0 px-6">
                  <li className="text-md">LTS Standard + string</li>
                  <li className="text-md py-[10px]">LTS Standard + string</li>
                  <li className="text-md">LTS Standard + string</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="text-left mt-[20px]">
            <Accordion>
              <AccordionSummary
                expandIcon={<DownOutlined />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ height: "20px", backgroundColor: "#95A3B8" }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Kuliah</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="list-disc m-0 py-0 px-6">
                  <li className="text-md">LTS Standard + string</li>
                  <li className="text-md py-[10px]">LTS Standard + string</li>
                  <li className="text-md">LTS Standard + string</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col w-full bg-slate-400 p-[24px] rounded-md max-h-screen mb-[100px] overflow-y-auto">
          <div className="flex justify-end">
            <button className="text-white bg-black rounded-lg py-[16px] px-[24px] cursor-pointer">
              Add Product
            </button>
          </div>
          <div>
            <div className="grid grid-cols-3 justify-items-center overflow-auto ">
              {dataDummyDetail.listData.map((item) => (
                <div className="relative m-10 flex w-[250px] h-[320px] max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ">
                  <div className="relative mx-3 mt-3 flex  overflow-hidden rounded-xl">
                    <img
                      className="w-full h-[200px] object-cover"
                      src={defaultImg}
                      alt="product image"
                    />
                  </div>
                  <div className="px-3 mt-3 text-left">
                    <p className="m-0 font-semibold">{item.name}</p>
                    <p className="my-1 font-light">Brand/Series/type</p>
                    <p className="m-0">Desc</p>
                    <p className="font-bold">Rp 500,000</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[5%] flex items-center justify-between">
        <div className="w-[295px] h-full">
          <TabComponent
            items={[
              {
                key: "All Product",
                icon: AppstoreOutlined,
              },
              {
                key: "Active",
                icon: CheckCircleOutlined,
              },
              {
                key: "Inactive",
                icon: CloseCircleOutlined,
              },
            ]}
          />
        </div>
        <div>
          <ButtonComponent
            icon={<PlusCircleOutlined />}
            buttonLabel={"Add Product"}
            style={
              "h-[45px] w-[170px] text-lg bg-[#73d9e2] text-white font-bold"
            }
            buttonOnClick={setProductModal}
            setButtonVal={setButtonVal}
            buttonBoolVal={productModal}
          />
        </div>
      </div>
      <div className="w-full h-[7%] flex">
        <div className="h-full w-[20%] flex flex-col items-start text-base font-bold">
          <div>Product Name</div>
          <div className="w-full h-[40px]">
            <SearchComponent
              placeholder="Input product"
              setValue={setSearchData}
            />
          </div>
        </div>
        <div className="h-full w-[20%] "></div>
        <div className="h-full w-[60%] flex gap-[2%]">
          <div className="h-full w-[32%]  flex flex-col items-start text-base font-bold ">
            <label>Brand</label>
            <div className="w-full">
              <DropdownComponent2
                defaultSelected=""
                style={{ width: "100%", textAlign: "initial" }}
                options={[
                  { value: "Brand1", label: "Brand1" },
                  { value: "Brand2", label: "Brand2" },
                ]}
              />
            </div>
          </div>
          <div className="h-full w-[32%] flex flex-col items-start text-base font-bold">
            <label>Category</label>
            <div className="w-full">
              <DropdownComponent2
                defaultSelected=""
                style={{ width: "100%", textAlign: "initial" }}
                options={[
                  { value: "Category1", label: "Category1" },
                  { value: "Category2", label: "Category2" },
                ]}
              />
            </div>
          </div>
          <div className="h-full w-[32%]  flex flex-col items-start text-base font-bold">
            <label>Type</label>
            <div className="w-full">
              <DropdownComponent2
                defaultSelected=""
                style={{ width: "100%", textAlign: "initial" }}
                options={[
                  { value: "Type1", label: "Type1" },
                  { value: "Type2", label: "Type2" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[76%] pt-2">
        <TableCust />
      </div>
      <div className="w-full h-[5%]  flex items-center justify-center">
        <PaginationComponent count={1} setPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default ProductList;
