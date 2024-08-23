import React from "react";
import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Home from "./module/Home";

import { Routes, Route } from "react-router-dom";
import Product from "./module/Product";
import Products from "./module/Products";
import CategoryProducts from "./module/CategoryProducts";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Categories/:name" element={<CategoryProducts />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
