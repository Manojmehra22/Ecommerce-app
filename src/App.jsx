import React from "react";
import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Home from "./module/Home";

import { Routes, Route } from "react-router-dom";
import Product from "./module/Product";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
