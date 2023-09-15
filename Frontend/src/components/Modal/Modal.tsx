import React, { useState } from "react";
import "./Modal.css";

interface Props {
  setModal: Function;
  modal: boolean;
  screenPopUp: any;
  classNameModal?: string;
  classNameOverlay?: string;
  classNameContent?: string;
}

const Modal = (props: Props) => {
  const {
    setModal,
    modal,
    screenPopUp,
    classNameContent,
    classNameModal,
    classNameOverlay,
  } = props;
  return (
    <div className={classNameModal ? classNameModal : "modal"}>
      <div
        className={classNameOverlay ? classNameOverlay : "overlay"}
        onClick={() => setModal(!modal)}
      ></div>
      <div className={classNameContent ? classNameContent : "modal-content"}>
        {screenPopUp}
      </div>
    </div>
  );
};

export default Modal;
