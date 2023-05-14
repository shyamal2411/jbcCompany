import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    pauseOnHover: false,
  };

  return (
    <Slider
      {...settings}
      ref={sliderRef}
      className="h-screen w-full flex flex-col justify-center text-center"
    >
      <div className="bg-imageTelecom h-screen w-full flex flex-col align-middle items-center justify-center text-center text-black shadow-md py-16">
        <h1 className="text-4xl mt-36 lg:text-7xl flex items-center justify-center font-bold text-white mb-4">
          TELECOM <br />
          SECTOR
        </h1>
        <h1 className="flex lg:text-[20px] text-gray-300 font-semibold items-stretch justify-center">
          Dependable service bandwidth adhering <br />
          to a timeline and meticulous quality norms
        </h1>
      </div>
      <div className="bg-imagePower h-screen w-full flex flex-col align-middle justify-center text-center text-black shadow-md py-16">
        <h1 className="text-4xl mt-36 lg:text-7xl flex items-center justify-center font-bold text-white mb-4">
          POWER AND <br />
          ENERGY SECTOR
        </h1>
        <h1 className="flex lg:text-[20px] text-gray-300 font-semibold items-stretch justify-center">
          We have rich experience in Power & Energy Sector <br />
          Project execution and Maintenance activity
        </h1>
      </div>
      <div className="bg-imageConstruction h-screen w-full flex flex-col align-middle justify-center text-center text-black shadow-md py-16">
        <h1 className="text-4xl mt-36 lg:text-7xl flex items-center justify-center font-bold text-white mb-4">
          CIVIL INFRA &<br /> CONSTRUCTION SECTOR
        </h1>
        <h1 className="flex lg:text-[20px] text-gray-300 font-semibold items-stretch justify-center">
          We design, construction, and maintenance of various
          <br /> structures that make modern society possible.
        </h1>
      </div>
    </Slider>
  );
}

export default Carousel;
