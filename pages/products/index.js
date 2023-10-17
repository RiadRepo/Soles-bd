import React from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function index() {
  return (
    <div>
      <Navbar />
      <ProductDetails />
      <Footer />
    </div>
  );
}
