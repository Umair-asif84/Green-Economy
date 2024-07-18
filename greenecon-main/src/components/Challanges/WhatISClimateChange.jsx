import React from "react";
import climate from "../../../src/images/climate-change.jpeg";

function WhatIsClimateChange() {
  return (
    <div className="py-[50px] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] bg-[#EFEDD1] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
        <div className=" container text-left flex flex-col justify-center h-full">
          <h2 className=" text-[#316D69] text-4xl mb-6 font-montserrat  font-bold pb-6">
            What is Climate Change?
          </h2>
          <div className="font-poppins text-lg text-[#3c3c3c]">
            <p className="">
              Climate change is the long-term alteration of typical patterns of
              weather patterns of the Earth, and global climate systems. Climate
              change is considered the key global challenge over the decade.
            </p>
            <p className="mt-4 ">
              It is done mostly due to industrial processes, burning of fossil
              fuels, and other destructive human activities. It results in the
              abrupt rise in global temperature, resulting in social,
              economical, and environmental effects.
            </p>
          </div>
        </div>
        <div className="pt-[20px] flex flex-col justify-center items-center h-full">
          <div className=" container flex  items-center">
            <img className=" rounded-lg" src={climate} alt="climate"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIsClimateChange;
