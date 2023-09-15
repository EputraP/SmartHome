import React from "react";
import { Button } from "antd";

interface Props {
  buttonLabel: string;
  icon?: any | null;
  style?: string | undefined;
  buttonOnClick: Function;
  setButtonVal?: Function | undefined;
  buttonBoolVal: boolean;
  htmlType?: any;
  form?: string;
}

const ButtonComponent = (props: Props) => {
  const {
    buttonBoolVal,
    buttonLabel,
    icon,
    style,
    buttonOnClick,
    setButtonVal,
    htmlType,
    form,
  } = props;

  const buttonOnClikHandler = () => {
    buttonOnClick(!buttonBoolVal);
    if (setButtonVal) setButtonVal(buttonLabel);
  };
  return (
    <Button
      onClick={buttonOnClikHandler}
      className={style ? style : ""}
      icon={icon}
      htmlType={htmlType}
      form={form}
    >
      {buttonLabel}
    </Button>
  );
};

export default ButtonComponent;
