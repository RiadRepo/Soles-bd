import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="h-[800px] mx-auto w-full max-w-screen-xl px-5 ">
        Working
      </div>
      <Footer />
    </main>
  );
}
