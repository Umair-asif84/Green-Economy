import React from "react";
import Nature from "../../../src/images/Pioneering-Initiatives-in-Carbon-Trading.png";

const PioneeringInitiatives = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]  py-16 px-[30px] md:px-[60px] font-roboto lg:px-[80px] xl:px-[100px]">
      <div className="container text-left text-white flex flex-col justify-center  h-full">
        <h2 className=" mb-8  font-montserrat text-[#316D69] text-3xl leading-7 font-bold tracking-wide">
          Pioneering Initiatives in
          <span className="text-[#BAB220]"> Carbon Trading</span>
        </h2>
        <p className="text-[#3C3C3C] font-poppins text-lg font-normal leading-7">
          Green Economy Partnership specializes in the dynamics of carbon
          trading. Carbon trading is a process that transforms carbon dioxide
          gas (CO2) into an economic commodity. How does the mechanism work? The
          state caps the amount of greenhouse gasses, particularly CO2, that
          could be emitted by each industrial sector which is where CO2 sensor
          technology monitors emissions. Each year, industries are given
          individual quotas of CO2 emissions, and our carbon credit trading
          platforms help them throughout the process.
        </p>
        <p className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7  mt-4">
          It is through carbon trading that the government wants the businesses
          to opt for less polluting technologies, and persuades them in doing
          so. GEP experts help you reduce carbon emissions, calculate your
          carbon footprint, resulting in the reduction of global greenhouse gas
          emissions.
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center h-full ">
        <div className="py-[20px] md:py-[40px] container flex justify-center items-center">
          <img
            className="md:h-[100%] w-full rounded-lg"
            src={Nature}
            alt="deforestation"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default PioneeringInitiatives;
