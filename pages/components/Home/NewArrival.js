import React from "react";
import Carousel from "./Carousel";

export default function NewArrival() {
  return (
    <section className=" relative">
      <h1 className="text-center text-4xl font-semibold">New Arrival</h1>
      <div>
        <Carousel />
      </div>
    </section>
  );
}
