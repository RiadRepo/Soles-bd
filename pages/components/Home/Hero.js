import React, { useState, useEffect } from "react";

export default function Hero() {
  const featuredImages = [
    "/images/Hero-Bg.jpeg",
    "/images/bg-1.jpg",
    "/images/bg-2.jpg",
    "/images/Hero-Bg.jpeg",
    "/images/bg-1.jpg",
    "/images/bg-2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredImages.length);
  };

  const handleOnPrevClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuredImages.length) % featuredImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleOnNextClick();
    }, 4000);

    return () => {
      // Clear the interval when the component unmounts or when currentIndex changes
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <section className="relative pt-12">
      <img src={featuredImages[currentIndex]} className="h-auto w-screen" />
    </section>
  );
}
