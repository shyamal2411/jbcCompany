import React from "react";
import Logo from "../assets/newLogo2.png";
import Twitter from "../assets/14.svg";
import Instagram from "../assets/15.svg";
import Facebook from "../assets/16.svg";

const Footer = () => {
  return (
    <div className="w-full bg-[#0E303D]">
      <div className="text-white mx-10 px-4 pt-16 sm:max-w-full sm:text-white sm:bg-[#0E303D] md:text-white md:bg-[#0E303D] md:px-24 md:max-w-full lg:max-w-full lg:flex lg:flex-col lg:justify-around lg:px-8 lg:bg-[#0E303D]">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 lg:flex lg:justify-around">
          <div>
            <div className="sm:col-span-2 flex flex-col items-center justify-center my-auto">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <img
                  src={Logo}
                  alt=""
                  className="w-44 h-44 bg-white rounded-2xl"
                />
                {/* <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                  J B & Company
                </span> */}
              </a>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-5 text-white">Phone:</p>
              <a
                href="tel:+919825222323"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +91 9825222323
              </a>
            </div>
            <div className="flex">
              <p className="mr-7 text-white">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@jbcompany.in
              </a>
            </div>
            <div className="flex">
              <p className="mr-3 text-white">Address:</p>
              <a
                href="https://goo.gl/maps/2RzPUyWjorxpPxnm6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                A 810, Dev Aurum, Near Anand Nagar Cross Road, Deer Circle,
                <br />
                Prahalad Nagar, Satellite, Ahmedabad 380 015, Gujarat, India
              </a>
            </div>
            <div>
              <span className="text-base font-bold justify-end tracking-wide text-white">
                Social
              </span>
              <div className="flex items-center mt-1 space-x-3">
                <a
                  href="/"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <img
                    src={Twitter}
                    alt="Twitter"
                    className="rounded-xl h-[30px] w-[30px] text-center"
                  />
                </a>
                <a
                  href="/"
                  className="text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="rounded-xl h-[30px] w-[30px] text-center"
                  />
                </a>
                <a
                  href="/"
                  className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="rounded-xl h-[30px] w-[30px] text-center"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-300">
            © Copyright 2023 J B & Comppany. All rights reserved.
          </p>
          <p>
            Designed & Developed By{" "}
            <a
              href="https://thedigitalhouse.co.in/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#ffab2d]"
            >
              The Digital House{" "}
            </a>
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
