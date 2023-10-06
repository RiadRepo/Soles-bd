import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";

export default function Carousel() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3, // Number of items to show at once
  //   slidesToScroll: 1,
  //   autoplay: true, // Autoplay enabled
  //   autoplaySpeed: 2000, // Autoplay speed in milliseconds (adjust as needed)
  // };

  // Example data for carousel items
  // const items = [
  //   { id: 1, content: <img src="/images/Hero-Bg.jpeg" alt="Image 1" /> },
  //   { id: 2, content: <img src="/images/Hero-Bg.jpeg" alt="Image 1" /> },
  //   { id: 3, content: <img src="/images/Hero-Bg.jpeg" alt="Image 1" /> },
  //   // Add more items as needed
  // ];

  const featuredImages = [
    "/Carousel/001.jpeg",
    "/Carousel/002.jpeg",
    "/Carousel/003.jpeg",
  ];
  let count = 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  useEffect(() => {
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  return (
    // <Slider {...settings}>
    //   {items.map((item) => (
    //     <div key={item.id} className="item">
    //       {item.content}
    //     </div>
    //   ))}
    // </Slider>
    <div className="max-w-screen-xl m-auto">
      <div className="w-full relative select-none">
        <img src={featuredImages[currentIndex]} alt="" />

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick}>Previous</button>
          <button onClick={handleOnNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
}
