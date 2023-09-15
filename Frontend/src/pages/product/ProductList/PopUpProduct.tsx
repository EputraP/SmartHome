import React, { useState, useEffect, useMemo } from "react";
import {
  ButtonComponent,
  AutocompleteComponent,
  Modal,
  DeleteConfirmation,
  DropdownComponent2,
} from "../../../components";
import { Divider, Input, Upload } from "antd";
import PopUpAddType from "./PopUpAddType";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { CreateIcon, UpdateIcon } from "../../../assets";
import "./ProductList.css";

const { Dragger } = Upload;
const { TextArea } = Input;

interface Props {
  cancelButtonOnClick: Function;
  productModal: boolean;
}

function PopUpProduct(props: Props) {
  const { cancelButtonOnClick, productModal } = props;
  const [productPopUpModal, setProductPopUpModal] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string>("test");
  const [addTypeVis, setAddTypeVis] = useState<boolean>(false);
  const [autoCompleteVal, setAutocompleteVal] = useState<any>();
  const [optionsAutoComplete, setOptionsAutoComplete] = useState<any>();
  const renderTitle = (title: string) => (
    <div className="flex items-center justify-between ">
      {title}
      <ButtonComponent
        buttonLabel="Delete"
        buttonOnClick={setProductPopUpModal}
        buttonBoolVal={productPopUpModal}
        style={"bg-[#fc9482] text-white font-bold"}
      />
    </div>
  );
  const options = [
    {
      label: renderTitle("test"),
      value: "test",
    },
    {
      label: renderTitle("test1"),
      value: "test1",
    },
    {
      label: renderTitle("test2"),
      value: "test2",
    },
  ];

  useEffect(() => {
    setOptionsAutoComplete(options);
  }, []);

  if (autoCompleteVal == "Add Type") {
    setAutocompleteVal("AddType");
    setProductPopUpModal(!productPopUpModal);
  }
  return (
    <div className="w-[1000px] h-[900px]">
      {productPopUpModal && (
        <Modal
          setModal={setProductPopUpModal}
          modal={productPopUpModal}
          classNameOverlay="overlay-modal-popup"
          classNameContent="modal-content-popup"
          classNameModal="modal-popup"
          screenPopUp={
            autoCompleteVal == "AddType" || autoCompleteVal == "Add Type" ? (
              <PopUpAddType
                cancelButtonOnClick={setProductPopUpModal}
                typeModal={productPopUpModal}
              />
            ) : (
              <DeleteConfirmation
                selectedItem={selectedType}
                modal={productPopUpModal}
                cancelButtonOnClick={setProductPopUpModal}
              />
            )
          }
        />
      )}
      <div className="w-full h-[5%] flex justify-start items-center text-4xl font-bold font-serif">
        <img className="w-[40px]" src={CreateIcon} />
        <div className="ml-2">Add Product</div>
      </div>
      <Divider />
      <div className="w-full h-[85%] py-2 px-1 overflow-y-auto flex flex-wrap gap-3">
        <div className="w-full shadow-md shadow-neutral-600 rounded-xl flex items-start flex-col text-lg font-semibold">
          <div className="p-4 flex w-full items-center">
            <label className="w-[20%] h-full flex justify-start">
              Product Name
            </label>
            <div className="w-[30%]"></div>
            <div className=" w-[50%]">
              <Input size="large" placeholder="Input Product Name" />
            </div>
          </div>
          <div className="p-4 flex w-full items-center">
            <label className="w-[20%] h-full flex justify-start">Brand</label>
            <div className="w-[30%]"></div>
            <div className=" w-[50%]">
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
          <div className="p-4 flex w-full items-center">
            <label className="w-[20%] h-full flex justify-start">Type</label>
            <div className="w-[30%]"></div>
            <div className=" w-[50%]">
              <AutocompleteComponent
                placeholder={"Input Type Name"}
                options={options}
                onSelect={setAutocompleteVal}
                notFoundContentOnSelectVal={setAutocompleteVal}
                notFoundContent="Add Type"
                notFoundContentModal={productPopUpModal}
                style={{
                  width: "258px",
                  display: "flex",
                  justifyContent: "start",
                }}
              />
            </div>
          </div>
          <div className="p-4 flex w-full items-center">
            <label className="w-[20%] h-full flex justify-start">Series</label>
            <div className="w-[30%]"></div>
            <div className=" w-[50%]">
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
          <div className="p-4 flex w-full items-center">
            <label className="w-[20%] h-full flex justify-start">
              Category
            </label>
            <div className="w-[30%]"></div>
            <div className=" w-[50%]">
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
        </div>
        <div className="w-full shadow-md shadow-neutral-600 rounded-xl flex items-start flex-col text-lg font-semibold">
          <div className="p-4 flex w-full items-center">
            <label className="w-[20%] h-full flex justify-start">
              Product Pictures
            </label>
            <div className="w-[30%]"></div>
            <div className=" w-[50%]">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </Dragger>
            </div>
          </div>
          <div className="p-4 flex w-full items-center">
            <label className="w-[20%] h-full flex justify-start">
              Description
            </label>
            <div className="w-[30%]"></div>
            <div className=" w-[50%]">
              <TextArea rows={4} />
            </div>
          </div>
          <div className="p-4 flex w-full items-center">
            <label className="w-[20%] h-full flex justify-start">
              Specification
            </label>
            <div className="w-[30%]"></div>
            <div className=" w-[50%]">
              <TextArea rows={4} />
            </div>
          </div>
        </div>
        <div className="w-full shadow-md shadow-neutral-600 rounded-xl flex items-start flex-col text-lg font-semibold">
          <div className="p-4 flex w-full items-center">
            <label className="w-[20%] h-full flex justify-start">
              Variant Pictures
            </label>
            <div className="w-[30%]"></div>
            <div className=" w-[50%]">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </Dragger>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-3 h-[5%] w-[100%] justify-center items-center gap-6">
        <ButtonComponent
          buttonLabel="Confirm"
          buttonOnClick={cancelButtonOnClick}
          buttonBoolVal={productModal}
          style={"h-[45px] w-[120px] text-lg bg-[#5ec5ff] text-white font-bold"}
        />
        <ButtonComponent
          buttonLabel="Cancel"
          buttonOnClick={cancelButtonOnClick}
          buttonBoolVal={productModal}
          style={"h-[45px] w-[120px] text-lg text-black font-bold"}
        />
      </div>
    </div>
  );
}

export default PopUpProduct;
