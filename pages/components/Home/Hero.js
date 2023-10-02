import React from "react";

export default function Hero() {
  const heroStyle = {
    backgroundImage: `url('/images/Hero-Bg.jpeg')`, // Adjust the path to your image
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3) 100%)",
    pointerEvents: "none",
  };

  return (
    <section style={heroStyle} className="h-[1000px] relative">
      <div style={overlayStyle}>{/* <div>Create Your Own Style</div> */}</div>
    </section>
  );
}
