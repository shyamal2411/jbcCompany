import React from "react";
import TelecomSub2 from "../assets/TelecomSub2.png";
import TelecomSub from "../assets/TelecomSub.png";

const Telecom = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          id="telecom"
          className=" container items-center flex mx-auto flex-col text-black py-16"
        >
          <h1 className="text-center text-4xl font-bold my-4">
            TELECOM SECTOR
          </h1>
          <div className="flex w-full flex-col container items-center justify-around md:flex-row mx-auto px-8">
            <div className="w-full md:w-[37%] mx-auto">
              <p className="text-left font-medium mx-10 my-10">
                J B & Company has attained a distinctive position in the telecom
                sector with perfect focus <br />
                and ensures dependable service bandwidth adhering to a timeline
                and meticulous quality norms.
                <div class="p-8 ">
                  <div class="p-0">
                    <h2 class="text-2xl font-bold mb-4 ">
                      Telecom Work includes:
                    </h2>
                    <ul class="list-disc ml-8">
                      <li class="mb-2">
                        Laying & Termination of OFC cable for NLD, Intracity,
                        LMC, IBS & Enterprise
                      </li>
                      <li class="mb-2">
                        Telecom tower Civil & Electrical work
                      </li>
                      <li class="mb-2">
                        FTTx (Fiber to Home/Office) End to End work
                      </li>
                      <li class="mb-2">OFC Route Maintenance activity</li>
                    </ul>
                  </div>
                </div>
              </p>
            </div>
            <div className="w-full md:w-2/5 flex flex-col items-center mx-20">
              <img
                src={TelecomSub}
                alt="About Us"
                className="rounded-2xl h-[300px] text-center mb-10 w-[85%]"
              />
              <img
                src={TelecomSub2}
                alt="About Us"
                className="rounded-2xl h-[300px] w-[85%] text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Telecom;
