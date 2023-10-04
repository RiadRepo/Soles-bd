import React from "react";
import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of items to show at once
    slidesToScroll: 1,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 2000, // Autoplay speed in milliseconds (adjust as needed)
  };

  // Example data for carousel items
  const items = [
    { id: 1, content: <img src="/images/Hero-Bg.jpeg" alt="Image 1" /> },
    { id: 2, content: <img src="/images/Hero-Bg.jpeg" alt="Image 1" /> },
    { id: 3, content: <img src="/images/Hero-Bg.jpeg" alt="Image 1" /> },
    // Add more items as needed
  ];

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id} className="item">
          {item.content}
        </div>
      ))}
    </Slider>
  );
}
