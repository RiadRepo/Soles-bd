import React from "react";

export default function Hero() {
  // const heroStyle = {
  //   backgroundImage: `url('/images/Hero-Bg.jpeg')`, // Adjust the path to your image
  //   backgroundSize: "cover", // You can adjust background properties as needed
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center center",
  //   // // display: "flex",
  //   // // justifyContent: "center",
  //   // // alignItems: "center",
  //   // color: "white", // Text color on the background
  //   // fontSize: "24px", // Font size for the content
  //   // fontWeight: "bold",
  //   backgroundColor: "rgba(0, 0, 0, 0.5)",
  //   width: "100%",
  //   height: "100vh",
  // };

  return (
    <section className="relative pt-12">
      <img src="/images/Hero-Bg.jpeg" className="h-auto w-screen" />
      {/* <div>Create Your Own Style</div> */}
      {/* </div> */}
    </section>
  );
}
