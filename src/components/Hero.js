import React from "react";
import Carousel from "./Carousel";
import Team from "./Team";
import Contact from "./Contact";
import ClientSlider from "./ClientSlider";
import Mission from "./Mission";
import About from "./About";
import Services from "./Services";

const Hero = () => {
  return (
    <>
      <div className="container-fluid relative">
        <div className="absolute top-0 w-full">{/* <Header /> */}</div>
        <Carousel />
        <div>
          <About />
          <Mission />
          <Services />
        </div>
      </div>
      <ClientSlider />
      <Team />
      <Contact />
    </>
  );
};

export default Hero;
