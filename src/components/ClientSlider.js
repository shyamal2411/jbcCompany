import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jio from "../assets/companies/jio.png";
import adani from "../assets/companies/adani.png";
import aster from "../assets/companies/aster.png";
import gvk from "../assets/companies/gvk.png";
import bsnl from "../assets/companies/bsnl.png";
import gws from "../assets/companies/gws.png";
import idea from "../assets/companies/idea.png";
import ioag from "../assets/companies/ioag.png";
import iti from "../assets/companies/iti.png";
import jmc from "../assets/companies/jmc.png";
import mei from "../assets/companies/mei.png";
import mtnl from "../assets/companies/mtnl.png";
import rites from "../assets/companies/rites.png";

function ClientSlider() {
  const sliderRef = useRef(null);
  const clients = [
    {
      name: "",
      image: jio,
    },
    {
      name: "",
      image: adani,
    },
    {
      name: "",
      image: aster,
    },
    {
      name: "",
      image: bsnl,
    },
    {
      name: "",
      image: gvk,
    },
    {
      name: "",
      image: gws,
    },
    {
      name: "",
      image: idea,
    },
    {
      name: "",
      image: ioag,
    },
    {
      name: "",
      image: iti,
    },
    {
      name: "",
      image: jmc,
    },
    {
      name: "",
      image: mei,
    },
    {
      name: "",
      image: mtnl,
    },
    {
      name: "",
      image: rites,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-4xl text-center font-bold text-black mt-16 mb-10">
        OUT CLIENTS
      </h1>
      <Slider {...settings} ref={sliderRef} className="flex">
        {clients.map((client, index) => (
          <div
            key={index}
            className="h-full w-full flex items-center mb-10 justify-center mx-auto"
          >
            <img
              src={client.image}
              alt={client.name}
              className="h-40 w-40 object-contain mx-auto"
            />
            {/* <p className="text-center">{client.name}</p> */}
          </div>
        ))}
      </Slider>
    </>
  );
}

export default ClientSlider;
