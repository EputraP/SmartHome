import React, { useState } from "react";
import { Divider, Input, Upload } from "antd";
import {
  ButtonComponent,
  AutocompleteComponent,
  Modal,
  DeleteConfirmation,
} from "../../../components";
import { CreateIcon, UpdateIcon } from "../../../assets";

interface Props {
  cancelButtonOnClick: Function;
  typeModal: boolean;
}

const PopUpAddType = (props: Props) => {
  const { cancelButtonOnClick, typeModal } = props;
  const [productPopUpModal, setProductPopUpModal] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string>("test");
  const [addTypeVis, setAddTypeVis] = useState<boolean>(false);
  const [autoCompleteVal, setAutocompleteVal] = useState<any>();
  const [optionsAutoComplete, setOptionsAutoComplete] = useState<any>();
  return (
    <div className="w-[1000px]">
      <div className="w-full h-[10%] flex justify-start items-center text-4xl font-bold font-serif">
        <img className="w-[40px]" src={CreateIcon} />
        <div className="ml-2">Add Type</div>
      </div>
      <Divider />
      <div className="w-full flex items-start flex-col text-lg font-semibold">
        <div className="p-4 flex w-full items-center">
          <label className="w-[20%] h-full flex justify-start">Type Name</label>
          <div className="w-[30%]"></div>
          <div className=" w-[50%]">
            <Input size="large" placeholder="Input Type Name" />
          </div>
        </div>
      </div>
      <div className="flex mt-8 w-[100%] justify-center items-center gap-6">
        <ButtonComponent
          buttonLabel="Confirm"
          buttonOnClick={cancelButtonOnClick}
          buttonBoolVal={typeModal}
          style={"h-[45px] w-[120px] text-lg bg-[#5ec5ff] text-white font-bold"}
        />
        <ButtonComponent
          buttonLabel="Cancel"
          buttonOnClick={cancelButtonOnClick}
          buttonBoolVal={typeModal}
          style={"h-[45px] w-[120px] text-lg text-black font-bold"}
        />
      </div>
    </div>
  );
};

export default PopUpAddType;
