import React from "react";

export default function Hero() {
  const heroStyle = {
    backgroundImage: `url('/images/Home-1.jpg')`, // Adjust the path to your image
    backgroundSize: "cover", // You can adjust background properties as needed
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "400px", // Set a minimum height to ensure the content is visible
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white", // Text color on the background
    fontSize: "24px", // Font size for the content
    fontWeight: "bold",
  };

  return (
    <section style={heroStyle} className="h-[1000px] relative">
      <div>Create Your Own Style</div>
    </section>
  );
}
