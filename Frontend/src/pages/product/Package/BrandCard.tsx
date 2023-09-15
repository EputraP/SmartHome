import React from "react";

type brandData = {
  brand_id: string;
  brand_name: string;
  brand_image: string;
};

interface Props {
  selectedValFlag: boolean;
  brandVal: brandData;
  setSelectedBrand: Function;
}

const BrandCard = (props: Props) => {
  const { selectedValFlag, brandVal, setSelectedBrand } = props;
  // console.log(brandVal);
  return (
    <div
      className={`w-[17.5%] h-[45%] bg-white rounded-xl p-2 flex flex-col justify-evenly ${
        selectedValFlag ? " border-solid border-4 border-black" : ""
      }`}
      onClick={() => setSelectedBrand(brandVal)}
    >
      <img className="w-full h-[50%]" src={brandVal.brand_image} />
      <div className=" text-2xl">{brandVal.brand_name}</div>
    </div>
  );
};

export default BrandCard;
