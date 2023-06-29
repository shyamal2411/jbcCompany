import React from "react";
import ConstructionSub from "../../assets/ConstructionSub.png";
import ConstructionSub2 from "../../assets/ConstructionSub2.png";

const Construction = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          id="power"
          className="bg-white container flex flex-col mx-auto text-black py-16"
        >
          <h1 className="text-center text-4xl mb-10 font-bold my-4">
            CIVIL INFRA & CONSTRUCTION SECTOR
          </h1>
          <div className="flex flex-col container items-center justify-around md:flex-row">
            <div className="w-full md:w-2/5 flex flex-col items-center mx-20">
              <img
                src={ConstructionSub}
                alt="About Us"
                className="rounded-2xl h-[300px] text-center mb-10 w-[85%]"
              />
              <img
                src={ConstructionSub2}
                alt="About Us"
                className="rounded-2xl h-[300px] w-[85%] text-center"
              />
            </div>
            <div className="w-1/2 flex flex-col mr-[2%]">
              <p className="text-left font-medium my-10 md:mr-16">
                Civil engineering is the oldest discipline of engineering.
                <br /> Since the very beginning of human existence.
                <br /> In today's society, there are huge projects meant for
                civil construction
                <br />
                The infrastructure used in our daily lives all has been created
                because of civil construction and engineering.
                <br />
                The roads, railways, stadiums, harbors, schools, and other
                buildings constructed all are a contribution of civil
                engineering.
                <br />
                <div>
                  <div className="px-0 mt-4">
                    <h2 className="text-2xl font-bold mb-4">
                      Projects & Maintenance Services:
                    </h2>
                    <ul className="list-disc ml-6">
                      <li class="mb-2">
                        Gas Pipe Line Laying & Maintenance for NLD, LMC & Home
                        Connectivity
                      </li>
                      <li class="mb-2">
                        Solar Power Project Execution & Maintenance with Panel
                        Supply
                      </li>
                      <li class="mb-2">
                        HT & LT Power Cable Laying & Termination
                      </li>
                      <li class="mb-2">
                        Substation & Electric Panel Installation
                      </li>
                      <li class="mb-2">Switchyard Installation up to 220 KV</li>
                      <li class="mb-2">Over Head Transmission Line Laying</li>
                      <li class="mb-2">Transmission Substation Foundation</li>
                      <li class="mb-2">
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

export default Construction;
