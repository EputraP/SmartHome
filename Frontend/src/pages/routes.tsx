import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Brand, Category, ProductList } from "./";

export const ProductPage = (
  <React.Fragment>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/product/brand" element={<Brand />} />
    <Route path="/product/category" element={<Category />} />
    <Route path="/product/product-list" element={<ProductList />} />
  </React.Fragment>
);
