import React from "react";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs, TagType } from "antd";

type item = {
  key: string;
  icon: any;
};

interface Props {
  items: item[];
  defaultActiveKey?: string | "";
}

function TabComponent(props: Props) {
  let { items, defaultActiveKey } = props;
  let itemsIconArray: string[] = [];
  let itemsKeyArray: string[] = [];
  items.map((value) => itemsIconArray.push(value.icon));
  items.map((value) => itemsKeyArray.push(value.key));
  console.log(itemsIconArray);
  // itemsArray.push("1");
  return (
    <Tabs
      defaultActiveKey={defaultActiveKey}
      items={itemsIconArray.map((Icon, i) => {
        const key = itemsKeyArray[i];

        return {
          label: (
            <span>
              <Icon />
              {key}
            </span>
          ),
          key: key,
          children: key,
        };
      })}
    />
  );
}

export default TabComponent;
