import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Home/Hero";
import NewArrival from "./components/Home/NewArrival";
import TopCategories from "./components/Home/TopCategories";
import BestSelling from "./components/Home/BestSelling";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="z-40 sticky top-0 left-0 w-full ">
        <Navbar />
      </div>

      <Hero />
      <NewArrival />
      <TopCategories />
      <BestSelling />
      <Footer />
    </main>
  );
}
