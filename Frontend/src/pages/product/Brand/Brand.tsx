import React, { useState, useEffect } from "react";
import {
  PaginationComponent,
  AutocompleteComponent,
  DropdownComponent,
  ButtonComponent,
  Modal,
  DeleteConfirmation,
} from "../../../components";
import { BrandIcon } from "../../../assets";
import "./Brand.css";
import {
  PlusCircleOutlined,
  RedoOutlined,
  RestOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import BrandCard from "./BrandCard";
import brandData from "./DummyData";
import PopUpBrand from "./PopUpBrand";
import { dataAutoComplete, paginate, dataSorting } from "./BrandFunction";

type brandDataObject = {
  brand_id: string;
  brand_name: string;
  brand_image: string;
  brand_code: string;
};
const Brand = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedBrand, setSelectedBrand] = useState<brandDataObject>(
    brandData[0]
  );
  const [autocompleteVal, setAutocompleteVal] = useState<string>("");
  const [brandModal, setBrandModal] = useState<boolean>(false);
  const [buttonVal, setButtonVal] = useState<string>("");
  const [sortingVal, setSortingVal] = useState<string>("Ascending");
  const pageSize = 10;
  let dataFiltered = dataSorting(sortingVal, brandData);
  if (autocompleteVal)
    dataFiltered = dataFiltered.filter(
      (data) =>
        JSON.stringify(data)
          .toLowerCase()
          .indexOf(autocompleteVal.toLowerCase()) !== -1
    );

  let pages = paginate(dataFiltered, pageSize);

  let page = pages[currentPage - 1];
  if (autocompleteVal) {
    page =
      typeof pages[currentPage - 1] == "undefined"
        ? pages[currentPage - 2]
        : pages[currentPage - 1];
  }

  let dataMaxPage = Math.ceil(dataFiltered.length / 10);
  return (
    <div className="w-full h-full p-4 flex flex-col justify-start ">
      {brandModal && (
        <Modal
          modal={brandModal}
          setModal={setBrandModal}
          screenPopUp={
            buttonVal == "Delete" ? (
              <DeleteConfirmation
                selectedItem={selectedBrand.brand_name}
                modal={brandModal}
                cancelButtonOnClick={setBrandModal}
              />
            ) : (
              <PopUpBrand
                selectedItem={selectedBrand}
                brandModal={brandModal}
                cancelButtonOnClick={setBrandModal}
                popupName={buttonVal}
              />
            )
          }
        />
      )}

      <div className="  w-full h-[7%] bg-[#D3C4BE] flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-[58px] ml-2" src={BrandIcon} />
          <div className="text-5xl font-bold ml-2 font-serif">Brand</div>
        </div>
        <div className=" bg-gray-500 text-zinc-300 p-2 mr-2 flex items-center justify-center rounded-md">
          <label className=" text-lg">Total Brand</label>
          <div className=" bg-white p-1 rounded-md ml-2 text-black">
            {brandData.length}
          </div>
        </div>
      </div>
      <div className=" w-full h-[88%] p-2">
        <div className="w-full h-[5%] flex items-center">
          <div className="h-full flex items-center">
            <AutocompleteComponent
              placeholder={"Input Brand Name"}
              options={dataAutoComplete(brandData)}
              onChange={setAutocompleteVal}
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "start",
              }}
            />
          </div>
          <div className="ml-[25px]">
            <DropdownComponent
              setSortingVal={setSortingVal}
              selectedDropdownVal={"Sort by Name"}
              itemsDropdown={[
                {
                  key: "Ascending",
                  label: "A-Z",
                  icon: <SortAscendingOutlined />,
                },
                {
                  key: "Descending",
                  label: "Z-A",
                  icon: <SortDescendingOutlined />,
                },
              ]}
            />
          </div>
        </div>
        <div className=" w-full h-[88%] bg-[#C9D6DF] flex flex-wrap p-9 content-around gap-[3%]">
          {page &&
            page.map((value: brandDataObject) => (
              <BrandCard
                setSelectedBrand={setSelectedBrand}
                brandVal={value}
                selectedValFlag={
                  selectedBrand.brand_id == value.brand_id ? true : false
                }
              />
            ))}
        </div>
        <div className="w-full h-[7%] flex items-center">
          <ButtonComponent
            icon={<PlusCircleOutlined />}
            buttonLabel={"Create"}
            style={
              "h-[45px] w-[120px] text-lg bg-[#73d9e2] text-white font-bold"
            }
            buttonOnClick={setBrandModal}
            setButtonVal={setButtonVal}
            buttonBoolVal={brandModal}
          />
          <ButtonComponent
            icon={<RedoOutlined />}
            buttonLabel={"Update"}
            style={
              "h-[45px] w-[120px] text-lg ml-[8px] bg-[#a6df98] text-white font-bold"
            }
            buttonOnClick={setBrandModal}
            setButtonVal={setButtonVal}
            buttonBoolVal={brandModal}
          />
          <ButtonComponent
            icon={<RestOutlined />}
            buttonLabel={"Delete"}
            style={
              "h-[45px] w-[120px] text-lg ml-[8px] bg-[#fc9482] text-white font-bold"
            }
            buttonOnClick={setBrandModal}
            setButtonVal={setButtonVal}
            buttonBoolVal={brandModal}
          />
        </div>
      </div>
      <div className=" w-full h-[5%] flex items-center justify-center">
        <PaginationComponent
          count={dataMaxPage == 0 ? 1 : dataMaxPage}
          setPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Brand;
