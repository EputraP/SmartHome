import React from "react";
import ButtonComponent from "./ButtonComponent";

// type brandDataObject = {
//   brand_id: string;
//   brand_name: string;
//   brand_image: string;
// };

interface Props {
  selectedItem: string;
  cancelButtonOnClick: Function;
  modal: boolean;
}

function DeleteConfirmation(props: Props) {
  const { modal, selectedItem, cancelButtonOnClick } = props;
  return (
    <div className="w-[400px] p-3 flex flex-col justify-center items-center">
      <div>Are you sure want to delete {selectedItem}?</div>
      <div className="flex mt-8 w-[100%] justify-center items-center gap-6">
        <ButtonComponent
          buttonLabel="Confirm"
          buttonOnClick={cancelButtonOnClick}
          buttonBoolVal={modal}
          style={"h-[45px] w-[120px] text-lg bg-[#5ec5ff] text-white font-bold"}
        />
        <ButtonComponent
          buttonLabel="Cancel"
          buttonOnClick={cancelButtonOnClick}
          buttonBoolVal={modal}
          style={"h-[45px] w-[120px] text-lg text-black font-bold"}
        />
      </div>
    </div>
  );
}

export default DeleteConfirmation;
