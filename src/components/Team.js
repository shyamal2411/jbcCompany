import React from "react";
import Darshak from "../assets/darshakU.jpg";
import Atul from "../assets/atulJasani.jpeg";
const Team = () => {
  return (
    <>
      <div
        id="team"
        className="flex bg-[#0E303D] justify-center items-center mt-7 lg:mt-0"
      >
        <section className="pb-10 lg:pt-[50px] lg:pb-2">
          <div className="container mx-50">
            <div className="mx-4 flex flex-wrap">
              {/* <div className="container bg-red-300 px-4"> */}
              <div className="mx-auto mb-[50px] max-w-[510px] text-lg text-center">
                <h2 className="text-white text-3xl mt-10 font-bold sm:text-4xl md:text-[40px]">
                  MEET OUR FOUNDER
                </h2>
              </div>
            </div>
            {/* </div> */}
            <div className="mx-4 flex flex-wrap justify-around">
              <div className="w-full px-4">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={Darshak}
                      alt="image1"
                      className="w-[350px] h-[400px]"
                    />
                    <div className="absolute bottom-5 left-0 w-full text-center">
                      <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                        <h3 className="text-dark text-base font-semibold">
                          Darshak Upadhyay
                        </h3>
                        <p className="text-body-color text-sm">Proprietor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full px-4 md:w-1/2 xl:w-1/2">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={Atul}
                      alt="image2"
                      className="w-[350px] h-[400px]"
                    />
                    <div className="absolute bottom-5 left-0 w-full text-center">
                      <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                        <h3 className="text-dark text-base font-semibold">
                          Atul Jasani
                        </h3>
                        <p className="text-body-color text-sm">
                          Managing Director
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
