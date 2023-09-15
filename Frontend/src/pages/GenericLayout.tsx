import React, { useState } from "react";
import { Layout, Menu, theme, MenuProps } from "antd";
import { Sidebar } from "../components";
import { ProductPage } from "./routes";
import { Routes, Route } from "react-router-dom";
import { Brand, Category, Dashboard, ProductList, Package } from "./";
const { Content, Sider } = Layout;

const GenericLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout className=" min-h-screen">
      <Sider
        className=" overflow-y-auto"
        collapsible
        onCollapse={(value) => setCollapsed(value)}
      >
        <Sidebar collapseVal={collapsed} />
      </Sider>
      <Content>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/product/brand" element={<Brand />} />
          <Route path="/product/category" element={<Category />} />
          <Route path="/product/product-list" element={<ProductList />} />
          <Route path="/product/package" element={<Package />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default GenericLayout;
