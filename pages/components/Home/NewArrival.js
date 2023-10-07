import React, { useState, useEffect } from "react";
import ProductCard from "../Card/ProductCard";

export default function NewArrival() {
  const products = [
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const smallScreenItemsPerPage = 2; // Number of items to display on small screens
  const largeScreenItemsPerPage = 5; // Number of items to display on large screens

  useEffect(() => {
    const handleResize = () => {
      // Calculate the start and end indices for the visible products
      const startIndex = currentIndex;
      const endIndex =
        currentIndex +
        (window.innerWidth >= 768 // You can adjust the screen width breakpoint as needed
          ? largeScreenItemsPerPage
          : smallScreenItemsPerPage);

      // Get the products to be displayed
      const visibleProducts = products.slice(startIndex, endIndex);

      // Update the component state with the new products to display
      setVisibleProducts(visibleProducts);
    };

    // Add a resize event listener to handle responsive changes
    window.addEventListener("resize", handleResize);

    // Call the initial handleResize to set the correct number of items on page load
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex, products]);

  const [visibleProducts, setVisibleProducts] = useState([]);

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
    <section className="relative">
      <h1 className="text-center text-4xl font-semibold">New Arrival</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 ">
        {visibleProducts.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </section>
  );
}
