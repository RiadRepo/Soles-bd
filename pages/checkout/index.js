import React from "react";
import Checkout from "../components/Checkout/Checkout";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function index() {
  return (
    <div>
      <Navbar />
      <Checkout />
      <Footer />
    </div>
  );
}
