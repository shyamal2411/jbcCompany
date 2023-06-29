import React from "react";
import TelecomSub2 from "../../assets/TelecomSub2.png";
import TelecomSub from "../../assets/TelecomSub.png";

const Power = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          id="power"
          className="bg-white container flex flex-col mx-auto text-black py-16"
        >
          <h1 className="text-center text-4xl mb-10 font-bold my-4">
            TELECOM SECTOR
          </h1>
          <div className="flex flex-col container items-center justify-around md:flex-row">
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
            <div className="w-1/2 flex flex-col mr-[2%]">
              <p className="text-left font-medium md:mr-16">
                J B & Company has attained a distinctive position in the telecom
                sector with perfect focus <br />
                and ensures dependable service bandwidth adhering to a timeline
                and meticulous quality norms.
                <br />
                <div className="px-0 mt-4">
                  <h2 className="text-2xl font-bold mb-4">
                    Telecom Work includes:
                  </h2>
                  <ul className="list-disc ml-6">
                    <li class="mb-2">
                      Laying & Termination of OFC cable for NLD, Intracity, LMC,
                      IBS & Enterprise
                    </li>
                    <li class="mb-2">Telecom tower Civil & Electrical work</li>
                    <li class="mb-2">
                      FTTx (Fiber to Home/Office) End to End work
                    </li>
                    <li class="mb-2">OFC Route Maintenance activity</li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Power;
