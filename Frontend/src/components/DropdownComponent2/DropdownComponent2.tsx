import React from "react";
import { Select } from "antd";
import "./DropdownComponent2.css";

type options = {
  value: string;
  label: string;
};

interface Props {
  style?: React.CSSProperties | Object;
  defaultSelected?: string | "";
  className?: string | "";
  options: options[];
}

function DropdownComponent2(props: Props) {
  const { style, defaultSelected, className, options } = props;
  return (
    <Select
      defaultValue={defaultSelected}
      style={style}
      className={className}
      options={options}
    />
  );
}

export default DropdownComponent2;
