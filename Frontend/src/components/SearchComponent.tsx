import React from "react";
import { Input } from "antd";

const { Search } = Input;

interface Props {
  placeholder?: string | "";
  setValue: Function;
  style?: React.CSSProperties | Object;
  className?: string | "";
}

const SearchComponent = (props: Props) => {
  const { placeholder, setValue, style, className } = props;
  return (
    <Search
      style={style}
      className={className}
      placeholder={placeholder}
      //   enterButton="Search"
      size="large"
      allowClear
      onSearch={(value: string) => setValue(value)}
    />
  );
};

export default SearchComponent;
