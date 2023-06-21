import React from "react";
import About1 from "../assets/site1.jpg";
import About2 from "../assets/site2.jpg";

function About() {
  return (
    <div id="about" className="bg-[#0E303D] container-fluid text-white py-16">
      <h1 className="text-center text-4xl font-bold my-4">COMPANY PROFILE</h1>
      <div className="flex flex-col container items-center justify-around md:flex-row mx-auto px-8">
        <div className="w-full md:w-2/5">
          <img src={About1} alt="About Us" className="rounded-2xl mb-6" />
          <img src={About2} alt="About Us" className="rounded-2xl" />
        </div>
        <div className="w-full md:w-2/4">
          <p className="text-justify font-medium my-4 lg:mr-28">
            J B & Company Established in 2003, J B & Company has emerged as the
            premiere organization to offer a range of services from Network
            Planning & Design through Operations, Project management, and
            Maintenance in the Telecom, Power & Energy sectors. <br />
            Today J B & Company has attained a distinctive position in the
            telecom, Power & Energy space. <br />
            <br />
            With perfect focus and strategic fusion of independent Strategic
            Business Units (SBUS), Cluster assures dependable service bandwidth,
            adhering to planned timelines and meticulous quality norms, as per
            international standards. We also have a rich background in providing
            wired and wireless connectivity solutions to a wide variety of
            corporate and institutional clients, for the last several years.
            <br />
            <br /> J B & Company is a specialist in Civil, Electromechanical,
            Telecom, Road Projects, Oil & Gas Pipelines, Power Lines (High & Low
            Voltage), Substation, and Solar Power work with high performance &
            committed delivery.
            <br />
            <br /> We believe this provides a significant opportunity for our
            Customers & Clients to access an enhanced service portfolio and
            increased geographic coverage to support the needs of high-quality
            construction work with new innovative ideas, which is the aim of J B
            & Company. J B & Company has a Strong Hold on Local Authorities to
            enable smooth and Speedy work execution in Cities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
