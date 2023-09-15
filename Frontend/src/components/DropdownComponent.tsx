import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { FilterOutlined } from "@ant-design/icons";

interface Props {
  itemsDropdown: MenuProps["items"];
  setSortingVal?: Function | undefined;
  selectedDropdownVal: string;
}

const DropdownComponent = (props: Props) => {
  const { itemsDropdown, setSortingVal, selectedDropdownVal } = props;
  const dropdownSelectedHandler = (e: any) => {
    if (setSortingVal) setSortingVal(e.key);
  };
  const items: MenuProps["items"] = itemsDropdown;
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ["Ascending"],
        onClick: dropdownSelectedHandler,
      }}
      arrow={true}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {selectedDropdownVal}
          <FilterOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownComponent;
