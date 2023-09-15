import React, { useState } from "react";
import { CodeSandboxOutlined, DashboardOutlined } from "@ant-design/icons";
import { UserIcon } from "../assets";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Menu, MenuProps } from "antd";
import { Dashboard, Brand, Category, ProductList } from "../pages";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "/dashboard", <DashboardOutlined />),
  getItem("Product", "", <CodeSandboxOutlined />, [
    getItem("Brand", "/product/brand"),
    getItem("Category", "/product/category"),
    getItem("Product List", "/product/product-list"),
    getItem("Package", "/product/package"),
  ]),
];

interface SideBarProps {
  collapseVal: boolean;
}

const Sidebar = (props: SideBarProps) => {
  const { collapseVal } = props;
  const [collapsedUser, setCollapsedUser] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="text-white">
        <Menu
          theme="dark"
          // defaultSelectedKeys={
          //   location.pathname == "/" ? ["/dashboard"] : [location.pathname]
          // }
          mode="inline"
          items={items}
          onClick={({ key }) => {
            navigate(key);
          }}
        ></Menu>
      </div>
      <div
        className={`fixed h-12 bottom-14 z-10 flex items-center
        ${!collapseVal ? "w-[210px]" : "w-[90px]"}
        `}
        onMouseOver={() => setCollapsedUser(true)}
        onMouseOut={() => setCollapsedUser(false)}
      >
        <div className="relative ml-[1.5rem] w-full flex items-center justify-start text-white">
          <img src={UserIcon} />
          {!collapseVal && <label className="ml-2">Admin</label>}
          {collapsedUser && (
            <div
              className={`h-[100px] w-[30px] bg-[transparant] absolute top-[0px] z-[100000] m-0 ${
                collapseVal ? " left-[61px]" : "left-[180px]"
              }`}
            >
              <div className=" bg-[#001529] w-[152px] h-[30px] ml-0 rounded-lg flex flex-col items-start justify-center">
                <div className="flex justify-center ml-4">
                  <label>Logout</label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
