import Image from "next/image";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import About from "./components/About";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <BestSellers />
      <About/>
      <FeaturedProducts/>
    </div>
  );
}
