import React, { useRef } from "react";
import { AutoComplete, Input } from "antd";
import { LoupeIcon } from "../assets";

type autocompleteFormat = {
  label: string;
  value: string;
};
interface Props {
  style?: React.CSSProperties | Object;
  placeholder: string;
  options: any;
  onChange?: Function | undefined;
  onSelect?: Function | undefined;
  notFoundContentOnSelectVal?: Function | undefined;
  notFoundContent?: string | "";
  notFoundContentModal?: boolean | false;
}

const AutocompleteComponent = (props: Props) => {
  const {
    notFoundContentOnSelectVal,
    placeholder,
    style,
    options,
    onChange,
    onSelect,
    notFoundContent,
    notFoundContentModal,
  } = props;

  const notFoundContetRef: any = useRef();

  const notFoundContentOnClickHandler = () => {
    if (notFoundContentOnSelectVal)
      notFoundContentOnSelectVal(notFoundContetRef.current.textContent);
  };
  return (
    <div className="flex relative">
      <AutoComplete
        open={notFoundContentModal ? false : undefined}
        notFoundContent={
          <div
            className="cursor-pointer"
            onClick={notFoundContentOnClickHandler}
            ref={notFoundContetRef}
          >
            {notFoundContent}
          </div>
        }
        filterOption={true}
        style={style}
        options={options}
        onSelect={onSelect ? (value) => onSelect(value) : () => undefined}
        onChange={onChange ? (value) => onChange(value) : () => undefined}
      >
        <Input.Search size="large" placeholder={placeholder} />
      </AutoComplete>
    </div>
  );
};

export default AutocompleteComponent;
