import React from "react";
import WMImg1 from "../../../src/images/wind-solar-img1.jpg";
function Renewable() {
  return (
    <div className=" px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] relative md:py-[20px] xl:py-[0px] pb-[80px] md:pb-[100px] xl:pb-[80px]">
      <div className="py-[20px] md:py-[10px]">
        <h2 className=" text-left text-[#316D69] font-montserrat tracking-normal lg:hidden leading-7 text-[18px] font-medium ">
          What <span className="text-[#BAB220]">is Renewable Energy ?</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
          <div className=" flex flex-col justify-center items-center h-full">
            <div className="py-[20px] md:py-[40px] container flex justify-center items-center">
              <img
                className="md:h-[100%] w-full rounded-lg"
                src={WMImg1}
                alt="deforestation"
              ></img>
            </div>
          </div>

          <div className="container text-left text-white flex flex-col justify-center  h-full">
            <h3 className=" leading-7 font-montserrat tracking-normal text-[#316D69] text-3xl font-bold pb-[20px]  lg:block">
              What <span className="text-[#BAB220]">is Renewable Energy ?</span>
            </h3>
            <p className="text-[14px] md:text-[16px] lg:text-lg font-normal text-[#3c3c3c] leading-7 font-poppins  pb-[5px]">
              Renewable energy is an energy source that can be replenished,
              enabling us to harness natural resources such as solar and wind
              power.
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-lg font-normal text-[#3c3c3c] font-poppins leading-7 ">
              Renewables are a vital part of the global effort towards
              sustainability, as these energy sources do not emit environmental
              pollutants or contribute to the depletion of natural resources.
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-lg font-normal text-[#3c3c3c] leading-7 font-poppins ">
              By tapping into solar and wind resources, societies benefit from a
              steady supply of clean power that can be used in many diverse
              applications including generating electricity, heating homes and
              fueling vehicles. Unlike traditional fossil fuels, renewable
              energy sources don't run out; making it a reliable investment for
              the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Renewable;
