import React from "react";

import check from "../../../src/images/check.png";
import img3 from "../../../src/images/img3.png";

function Wetanaerobic() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] bg-[#F7F5F2] gap-4 p-6 md:p-16">
      <div className="md:!col-span-1">
        <h3 className="mt-4 text-left text-3xl md:text-center tracking-normal leading-9 font-montserrat lg:text-left mb-4 text-[#316D69] font-bold">
          Wet Anaerobic Digestion Plant Components
        </h3>
        <p className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7">
          Wet anaerobic digestion is an important process for sustainable energy
          production. Biogas, an alternative fuel produced by anaerobic
          digestion, is an important renewable resource for generating
          electricity and reducing greenhouse gas emissions.
        </p>
        <p className="text-[#3C3C3C]  text-lg font-normal font-poppins leading-7">
          The components that are essential for an anaerobic digestion plant
          include an anaerobic digester, an inlet structure to manage influent
          flow, a retention tank to store the influent for the digestion
          process, an effluent storage structure to store treated wastewater
          from the digester outlet, a post-treatment system to treat additional
          organic pollutants, a methane collection system to capture biogas
          released during anaerobic fermentation, and a control center or
          monitoring system.
        </p>
        <p className="text-[#3C3C3C]  text-lg font-normal font-poppins leading-7">
          All of these components work together to make wet anaerobic digestion
          a useful process for producing clean energy.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={img3}
          alt="Image 2"
          className="h-auto mx-auto p-4 hover:shadow-2xl"
        />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:items-center md:text-[#3C3C3C]">
        <ul className="mt-4 text-left list-disc text-[#3c3c3c]  text-lg font-normal font-poppins leading-7">
          <li className="flex items-start ">
            <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
            <p>A vital process for sustainable energy production.</p>
          </li>
          <li className="flex items-start pt-2">
            <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
            <p>
              {" "}
              Produced via anaerobic digestion, a renewable resource for
              electricity and emission reduction.
            </p>
          </li>
          <li className="flex items-start pt-2">
            <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
            <p>
              Components work together to convert waste to energy, reducing
              environmental impact.
            </p>
          </li>
          <li className="flex items-start pt-2">
            <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
            <p>
              Wet anaerobic digestion promotes clean energy generation and waste
              reduction.
            </p>
          </li>
          <li className="flex items-start pt-2">
            <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
            <p>
              Commonly used for agricultural residues, municipal waste, and
              industrial byproducts.
            </p>
          </li>
          <li className="flex items-start pt-2">
            <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
            <p>
              Essential elements of an anaerobic digestion plant include:
              Effluent storage: Holds treated wastewater post-digestion.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Wetanaerobic;
