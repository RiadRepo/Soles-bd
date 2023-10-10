import React, { useState, useEffect } from "react";
import ProductCard from "../Card/ProductCard";
import useWindowSize from "@/hooks/useWindowSize";

export default function BestSelling() {
  const products = [
    {
      imageSrc: "/Carousel/001.jpeg",
      productName: "White Jersey Polo Jersey Polo",
      rating: 5.0,
      price: "৳599",
      addToCartLink: "#",
    },
    {
      imageSrc: "/Carousel/002.jpeg",
      productName: "White Jersey Polo",
      rating: 5.0,
      price: "৳599",
      addToCartLink: "#",
    },
    {
      imageSrc: "/Carousel/003.jpeg",
      productName: "White Jersey Polo",
      rating: 5.0,
      price: "৳599",
      addToCartLink: "#",
    },
    {
      imageSrc: "/Carousel/001.jpeg",
      productName: "White Jersey Polo",
      rating: 5.0,
      price: "৳599",
      addToCartLink: "#",
    },
    {
      imageSrc: "/Carousel/002.jpeg",
      productName: "White Jersey Polo",
      rating: 5.0,
      price: "৳599",
      addToCartLink: "#",
    },
    {
      imageSrc: "/Carousel/002.jpeg",
      productName: "White Jersey Polo",
      rating: 5.0,
      price: "৳599",
      addToCartLink: "#",
    },
    {
      imageSrc: "/Carousel/003.jpeg",
      productName: "White Jersey Polo",
      rating: 5.0,
      price: "৳599",
      addToCartLink: "#",
    },
    {
      imageSrc: "/Carousel/001.jpeg",
      productName: "White Jersey Polo",
      rating: 5.0,
      price: "৳599",
      addToCartLink: "#",
    },
    {
      imageSrc: "/Carousel/002.jpeg",
      productName: "White Jersey Polo",
      rating: 5.0,
      price: "৳599",
      addToCartLink: "#",
    },
  ];

  const smallScreenItemsPerPage = 2;
  const largeScreenItemsPerPage = 5;

  const [currentIndex, setCurrentIndex] = useState(0);
  const size = useWindowSize();

  // Calculate the start and end indices for the visible products
  const startIndex = currentIndex;
  const endIndex =
    currentIndex +
    (size.width >= 960 ? largeScreenItemsPerPage : smallScreenItemsPerPage);

  // Get the products to be displayed
  const visibleProducts = products.slice(startIndex, endIndex);

  const handleNext = () => {
    // Calculate the next index to display
    const nextIndex =
      currentIndex + largeScreenItemsPerPage < products.length
        ? currentIndex + largeScreenItemsPerPage
        : 0;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    // Calculate the previous index to display
    const prevIndex =
      currentIndex - largeScreenItemsPerPage >= 0
        ? currentIndex - largeScreenItemsPerPage
        : products.length - (products.length % largeScreenItemsPerPage);
    setCurrentIndex(prevIndex);
  };

  return (
    <section className="relative pb-12">
      <h1 className="text-center text-4xl font-semibold py-6 xl:py-12 md:py-6 ">
        Best Selling
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 ">
        {visibleProducts.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
        <div className="absolute w-full top-1/2 flex justify-between items-center ">
          <button onClick={handlePrev}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </button>
          <button onClick={handleNext}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
