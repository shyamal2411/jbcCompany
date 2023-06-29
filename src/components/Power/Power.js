import React from "react";
import PowerSub from "../../assets/PowerSub.png";
import PowerSub2 from "../../assets/PowerSub2.png";

const Power = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          id="power"
          className="bg-white container flex flex-col mx-auto text-black py-16"
        >
          <h1 className="text-center text-4xl mb-10 font-bold my-4">
            POWER & ENERGY SECTOR
          </h1>
          <div className="flex flex-col container items-center justify-around md:flex-row">
            <div className="w-full md:w-2/5 flex flex-col items-center mx-20">
              <img
                src={PowerSub}
                alt="About Us"
                className="rounded-2xl h-[300px] text-center mb-10 w-[85%]"
              />
              <img
                src={PowerSub2}
                alt="About Us"
                className="rounded-2xl h-[300px] w-[85%] text-center"
              />
            </div>
            <div className="w-1/2 flex flex-col mr-[2%]">
              <p className="text-left font-medium my-10 md:mr-16">
                J B & Company has rich experience in Power & Energy Sector
                Project execution <br />
                and Maintenance activity.
                <br />
                Today J B & Company has attained a distinctive position in the
                <br />
                telecom, Power & Energy space.
                <br />
                <div>
                  <div className="px-0 mt-4">
                    <h2 className="text-2xl font-bold mb-4">
                      Projects & Maintenance Services:
                    </h2>
                    <ul className="list-disc ml-6">
                      <li className="mb-2">
                        Gas Pipeline Laying & Maintenance for NLD, LMC & Home
                        Connectivity
                      </li>
                      <li className="mb-2">
                        Solar Power Project Execution & Maintenance with Panel
                        Supply
                      </li>
                      <li className="mb-2">
                        HT & LT Power Cable Laying & Termination
                      </li>
                      <li className="mb-2">
                        Substation & Electric Panel Installation
                      </li>
                      <li className="mb-2">
                        Switchyard Installation up to 220 KV
                      </li>
                      <li className="mb-2">
                        Overhead Transmission Line Laying
                      </li>
                      <li className="mb-2">
                        Transmission Substation Foundation
                      </li>
                      <li className="mb-2">
                        External & Internal Electrical Wiring
                      </li>
                    </ul>
                  </div>
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
