import { useState } from "react";
import Search from "./Components/Search";
import Product from "./Components/Product";
import SideCart from "./Components/SideCart";
import { Route, Router, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";
import Confirm from "./Components/Confirm";

function App() {
  return (
    <>
      
      
      <Routes>

        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/Confirm" element={<Confirm />} />
      </Routes>
    </>
  );
}

export default App;
