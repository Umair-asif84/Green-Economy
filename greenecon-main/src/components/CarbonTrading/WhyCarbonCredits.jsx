import React from "react";
import carbon from "../../../src/images/carbon-credit.jpg";

const WhyCarbonCredits = () => {
  return (
    <div className=" px-[30px] md:px-[60px]  lg:px-[80px] xl:px-[100px] py-[20px] md:py-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center ">
        <div className="mt-6 ">
          <h2 className="font-montserrat pb-8 text-[#3c3c3c]  text-3xl leading-9 font-bold tracking-wide ">
            Why Should You Buy Carbon Credits?
          </h2>
          <h6 className="mb-4 uppercase text-lg text-[#316D69] font-bold	font-montserrat">
            Reason #1:
          </h6>
          <p className="font-poppins text-lg text-[#3c3c3c] font-normal leading-7">
            {" "}
            You have the desire to take the most efficient, environmentally
            conscious actions toward fully offsetting your carbon footprint and
            minimizing your environmental impact.
          </p>
          <h6 className="my-4 uppercase text-lg text-[#316D69] font-bold	font-montserrat">
            Reason #2:
          </h6>
          <p className="font-poppins text-lg text-[#3c3c3c] font-normal leading-7">
            {" "}
            Capitalizing on the 20% growth in the carbon credit market from the
            previous year is a strategic move that you don't want to miss at any
            cost.
          </p>
        </div>
        <div className="flex items-center justify-end">
          <img src={carbon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyCarbonCredits;
