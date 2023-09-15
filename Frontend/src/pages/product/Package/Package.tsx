import React, { useState, useEffect } from "react";
import {
  PaginationComponent,
  AutocompleteComponent,
  DropdownComponent,
  ButtonComponent,
  Modal,
  DeleteConfirmation,
} from "../../../components";
import { PackageIcon } from "../../../assets";
import "./Brand.css";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  PlusCircleOutlined,
  RedoOutlined,
  RestOutlined,
} from "@ant-design/icons";
import BrandCard from "./BrandCard";
import brandData from "./DummyData";
import PopUpBrand from "./PopUpBrand";

const dataSorting = (sortingType: string, data: brandDataObject[]) => {
  if (sortingType == "Descending") {
    data.sort(function (a, b) {
      if (a.brand_name < b.brand_name) {
        return 1;
      }
      if (a.brand_name > b.brand_name) {
        return -1;
      }
      return 0;
    });
  } else if (sortingType == "Ascending") {
    data.sort(function (a, b) {
      if (a.brand_name < b.brand_name) {
        return -1;
      }
      if (a.brand_name > b.brand_name) {
        return 1;
      }
      return 0;
    });
  }
  return data;
};

type autocompleteFormat = {
  label: string;
  value: string;
};

const dataAutoComplete = (data: brandDataObject[]) => {
  let autocompleteData: autocompleteFormat[] = [];
  for (let i = 0; i < data.length; i++) {
    autocompleteData.push({
      label: data[i].brand_name,
      value: data[i].brand_name,
    });
  }
  return autocompleteData;
};

function paginate(arr: any, size: any) {
  return arr.reduce((acc: any, val: any, i: number) => {
    let idx = Math.floor(i / size);
    let page: number[] = acc[idx] || (acc[idx] = []);
    page.push(val);

    return acc;
  }, []);
}

type brandDataObject = {
  brand_id: string;
  brand_name: string;
  brand_image: string;
};
const Package = () => {
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

  return (
    <div className="w-full h-full p-4 flex flex-col justify-start ">
      Package
    </div>
  );
};

export default Package;
