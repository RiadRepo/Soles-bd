import React from "react";
import CategoriesCard from "../Card/CategoriesCard";

export default function TopCategories() {
  const categories = [
    { imageSrc: "/Carousel/003.jpeg", categoryName: "Tshirt" },
    { imageSrc: "/Carousel/003.jpeg", categoryName: "Jersey Tshirt" },
    { imageSrc: "/Carousel/001.jpeg", categoryName: "Tshirt" },
    { imageSrc: "/Carousel/003.jpeg", categoryName: "Jersey Tshirt" },
  ];

  return (
    <div className="max-w-screen-xl m-auto h-2/5">
      <h1 className="text-center text-4xl font-semibold py-6 xl:py-12 md:py-6 ">
        Top Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div key={index}>
            <CategoriesCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
