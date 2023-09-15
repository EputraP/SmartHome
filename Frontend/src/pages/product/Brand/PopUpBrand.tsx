import { useState } from "react";
import { ButtonComponent } from "../../../components";
import { Divider, Input, Upload, Form } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { CreateIcon, UpdateIcon } from "../../../assets";
import type { UploadFile } from "antd/es/upload/interface";
import type { UploadProps } from "antd/es/upload";
const { Dragger } = Upload;
const FormItem = Form.Item;

type brandDataObject = {
  brand_id: string;
  brand_name: string;
  brand_image: string;
  brand_code: string;
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
  const defaultImageVal: any = updtVisFlag
    ? {
        url: selectedItem.brand_image,
        uid: "cec49748-45f4-4663-852e-ef74860970bd",
        name: "firstImage",
        type: "image/png",
      }
    : {
        url: "",
        uid: "",
        name: "",
        type: "",
      };

  const [fileList, setFileList] = useState<UploadFile>(defaultImageVal);
  const [previewImage, setPreviewImage] = useState(defaultImageVal.url);
  const OnFinishSubmitHandler = (values: any) => {
    console.log(values);
  };
  const handleChange: UploadProps["onChange"] = (info: any) => {
    const isImg =
      info.file.type === "image/jpeg" ||
      info.file.type === "image/jpg" ||
      info.file.type === "image/png";
    if (!isImg) return;
    if (info.file.size > 3000000) {
      return;
    }
    let reader = new FileReader();
    reader.onload = (e: any) => setPreviewImage(e.target.result);
    reader.readAsDataURL(info.file.originFileObj);
    setFileList(info.file);
  };
  return (
    <div className="w-[1000px]">
      <div className="w-full flex justify-start items-center text-4xl font-bold font-serif">
        <img className="w-[40px]" src={updtVisFlag ? UpdateIcon : CreateIcon} />
        <div className="ml-2">{popupName} Brand</div>
      </div>
      <Divider />
      <Form
        onFinish={OnFinishSubmitHandler}
        name="BrandPopup"
        className="w-full flex items-start flex-col text-lg font-semibold"
      >
        {updtVisFlag && (
          <div className=" px-2 py-7 flex w-full items-center">
            <div className="w-[20%] h-full flex justify-start">Brand ID</div>
            <div className="w-[30%]"></div>
            <div className=" w-[50%]">
              <FormItem noStyle>
                <Input
                  disabled
                  defaultValue={selectedItem.brand_id}
                  size="large"
                  placeholder="Input Brand Name"
                />
              </FormItem>
            </div>
          </div>
        )}
        <div
          className={`p-2 flex w-full items-center ${
            updtVisFlag ? "" : "mt-4"
          }`}
        >
          <div className=" w-[20%] h-full flex justify-start pb-6">
            Brand Name
          </div>
          <div className="w-[30%]"></div>
          <div className=" w-[50%]">
            <FormItem
              name="BrandName"
              initialValue={updtVisFlag ? selectedItem.brand_name : ""}
              rules={[{ required: true, message: "Please input Brand Name" }]}
            >
              <Input
                size="large"
                defaultValue={updtVisFlag ? selectedItem.brand_name : ""}
                placeholder="Input Brand Name"
              />
            </FormItem>
          </div>
        </div>
        <div className="p-2 flex w-full items-center">
          <div className="w-[20%] flex justify-start  pb-6">
            Brand Code (Opt)
          </div>
          <div className="w-[30%]"></div>
          <div className=" w-[50%]">
            <FormItem
              name="BrandCode"
              initialValue={updtVisFlag ? selectedItem.brand_code : ""}
            >
              <Input size="large" placeholder="Input Brand Name" />
            </FormItem>
          </div>
        </div>
        <div className="p-2 flex w-full items-center">
          <div className="w-[20%] flex flex-col justify-start">
            <div className="flex">Brand Image</div>
            <div className="flex text-xs mt-1">
              <span className=" text-red-600">*</span>Size should be less than
              2MB
            </div>
            <div className="flex text-xs">
              <span className=" text-red-600">*</span>Type JPEG, JPG,PNG
            </div>
          </div>
          <div className="w-[30%]"></div>
          <div className={`w-[50%]`}>
            <FormItem
              name="upload"
              initialValue={updtVisFlag ? [fileList] : []}
              valuePropName="fileList"
              getValueFromEvent={(event) => {
                return event?.fileList;
              }}
              rules={[
                { required: true, message: "Please upload a image" },
                {
                  validator(_, fileList) {
                    return new Promise((resolve, reject) => {
                      let isImg;
                      if (fileList.length != 0) {
                        isImg =
                          fileList[0].type === "image/jpeg" ||
                          fileList[0].type === "image/jpg" ||
                          fileList[0].type === "image/png";
                        if (!isImg)
                          reject("Image type should be JPEG, JPG, PNG");
                      }
                      if (fileList.length != 0 && fileList[0].size > 3000000) {
                        reject("Image size exceed");
                      } else {
                        resolve("Success");
                      }
                    });
                  },
                },
              ]}
            >
              <Dragger onChange={handleChange} accept="image" maxCount={1}>
                {fileList.url == "" ? (
                  <div>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                  </div>
                ) : (
                  <div>
                    <img className=" w-44" src={previewImage}></img>
                  </div>
                )}
              </Dragger>
            </FormItem>
          </div>
        </div>
      </Form>
      <div className="flex mt-8 w-[100%] justify-center items-center gap-6">
        <FormItem noStyle>
          <ButtonComponent
            buttonLabel="Confirm"
            buttonOnClick={() => undefined}
            buttonBoolVal={brandModal}
            form="BrandPopup"
            htmlType={"submit"}
            style={
              "h-[45px] w-[120px] text-lg bg-[#5ec5ff] text-white font-bold"
            }
          />
        </FormItem>
        <FormItem noStyle>
          <ButtonComponent
            buttonLabel="Cancel"
            htmlType={"button"}
            buttonOnClick={cancelButtonOnClick}
            buttonBoolVal={brandModal}
            style={"h-[45px] w-[120px] text-lg text-black font-bold"}
          />
        </FormItem>
      </div>
    </div>
  );
}

export default PopUpBrand;
