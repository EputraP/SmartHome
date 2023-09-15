import React from "react";
import { AuthLayout, GenericLayout } from "./pages";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProductPage } from "./pages/routes";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<GenericLayout />}>
    //     {ProductPage}
    //   </Route>
    // </Routes>
    // <AuthLayout />
    <GenericLayout />
  );
}

export default App;
