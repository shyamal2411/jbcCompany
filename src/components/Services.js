import React from "react";
import Service1 from "../assets/service1.png";
import Service2 from "../assets/service2.png";
import Service3 from "../assets/service3.png";

const Services = () => {
  return (
    <>
      <div>
        <div>
          <div id="services" className="bg-gray-300 py-16">
            <h1 className="text-4xl flex items-center justify-center font-bold text-black mb-4">
              SERVICES WE OFFER
            </h1>
            <div className="flex flex-wrap justify-center my-14">
              <div className="max-w-sm mx-8 ">
                <a href="/">
                  <img
                    className="rounded-t-lg h-[250px] w-[400px]"
                    src={Service3}
                    alt=""
                  />
                </a>
                <div className="p-5 bg-[#0E303D] rounded-b-3xl mb-8">
                  <a href="/">
                    <h5 className="mb-2 text-2xl font-bold text-white">
                      TELECOM SECTOR
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-white">
                    Telecom sector with perfect focus and ensures dependable
                    service bandwidth adhering to a timeline and meticulous
                    quality norms.
                  </p>
                  <a
                    href="/telecom"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#0E303D] bg-white rounded-lg hover:bg-[#A26811] focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="max-w-sm mx-8 ">
                <a href="/">
                  <img
                    className="rounded-t-lg h-[250px] w-[400px]"
                    src={Service2}
                    alt=""
                  />
                </a>
                <div className="p-5 bg-[#0E303D] rounded-b-3xl mb-8">
                  <a href="/">
                    <h5 className="mb-2 text-2xl font-bold text-white">
                      POWER & ENERGY SECTOR
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-white">
                    J B & Company has rich experience in Power & Energy Sector
                    Project execution and Maintenance activity.
                  </p>
                  <a
                    href="/power"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#0E303D] bg-white rounded-lg hover:bg-[#A26811] focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="max-w-sm mx-8 ">
                <a href="/">
                  <img
                    className="rounded-t-lg h-[250px] w-[400px]"
                    src={Service1}
                    alt=""
                  />
                </a>
                <div className="p-5 bg-[#0E303D] rounded-b-3xl mb-8">
                  <a href="/">
                    <h5 className="mb-2 text-2xl font-bold text-white">
                      CONSTRUCTION SECTOR
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-white">
                    The roads, railways, stadiums, harbors, schools, and other
                    buildings constructed all are a contribution of civil
                    engineering.
                  </p>
                  <a
                    href="/construction"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#0E303D] bg-white rounded-lg hover:bg-[#A26811] focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
