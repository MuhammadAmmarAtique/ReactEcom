import React from "react";
import HeroSection from "../components/HeroSection";

function About() {

  const text = "We are dedicated to providing you with a seamless shopping experience, offering a curated selection of premium products at unbeatable prices. Our commitment to quality and customer satisfaction ensures that you'll find everything you need and more, right here."


  return (
    <>
      <HeroSection heading="Ammar Store" text={text} />
    </>
  );
}

export default About;
