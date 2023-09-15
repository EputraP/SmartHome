import React from "react";
import { ButtonComponent } from "../../../components";
import { Divider, Input, message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import brandData from "./DummyData";

const { Dragger } = Upload;

type brandDataObject = {
  brand_id: string;
  brand_name: string;
  brand_image: string;
};

interface Props {
  selectedItem: brandDataObject;
  cancelButtonOnClick: Function;
  brandModal: boolean;
  popupName: string;
}

const props: UploadProps = {
  name: "file",
  multiple: false,
};

function PopUpBrand(props: Props) {
  const { selectedItem, cancelButtonOnClick, brandModal, popupName } = props;
  const updtVisFlag: boolean = popupName == "Update" ? true : false;
  return (
    <div className="w-[1000px]">
      <div className="w-full flex justify-start items-center text-4xl font-bold font-serif">
        {popupName} Brand
      </div>
      <Divider />
      <div className="w-full flex items-start flex-col text-lg font-semibold">
        {updtVisFlag && (
          <div className="p-4 flex w-full items-center">
            <label className="w-[20%] h-full flex justify-start">
              Brand ID
            </label>
            <div className="w-[30%]"></div>
            <div className=" w-[50%]">
              <Input
                disabled
                defaultValue={selectedItem.brand_id}
                size="large"
                placeholder="Input Brand Name"
              />
            </div>
          </div>
        )}
        <div className="p-4 flex w-full items-center">
          <label className="w-[20%] h-full flex justify-start">
            Brand Name
          </label>
          <div className="w-[30%]"></div>
          <div className=" w-[50%]">
            <Input
              size="large"
              defaultValue={selectedItem.brand_name}
              placeholder="Input Brand Name"
            />
          </div>
        </div>
        <div className="p-4 flex w-full items-center">
          <label className="w-[20%] flex justify-start">Brand Code (Opt)</label>
          <div className="w-[30%]"></div>
          <div className=" w-[50%]">
            <Input size="large" placeholder="Input Brand Name" />
          </div>
        </div>
        <div className="p-4 flex w-full items-center">
          <label className="w-[20%] flex justify-start">Brand Image</label>
          <div className="w-[30%]"></div>
          <div className={`w-[50%] ${updtVisFlag ? "flex" : ""}`}>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
            {updtVisFlag && (
              <img className=" w-44 ml-5" src={selectedItem.brand_image} />
            )}
          </div>
        </div>
      </div>
      <div className="flex mt-8 w-[100%] justify-center items-center gap-6">
        <ButtonComponent
          buttonLabel="Confirm"
          buttonOnClick={cancelButtonOnClick}
          buttonBoolVal={brandModal}
          style={"h-[45px] w-[120px] text-lg bg-[#0F52BA] text-white font-bold"}
        />
        <ButtonComponent
          buttonLabel="Cancel"
          buttonOnClick={cancelButtonOnClick}
          buttonBoolVal={brandModal}
          style={"h-[45px] w-[120px] text-lg text-black font-bold"}
        />
      </div>
    </div>
  );
}

export default PopUpBrand;
