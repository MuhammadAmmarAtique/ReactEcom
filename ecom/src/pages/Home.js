import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  const text =
    "Welcome to Our Online Store! Explore our wide range of high-quality products designed to meet all your needs. Enjoy exclusive deals and discounts, fast and reliable shipping, and exceptional customer service. Shop with confidence and convenience. Your satisfaction is our priority. Start browsing now!";

  return (
    <>
      <HeroSection heading="Ammar Ecommmerce" text={text} />
      <FeaturedProducts/>
      <Services />
      <Trusted />
    </>
  );
}

export default Home;
