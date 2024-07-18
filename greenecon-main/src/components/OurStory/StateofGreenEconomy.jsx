import React from "react";
import WMImg2 from "../../../src/images/ourstory-aboutus.png";

function StateAbout() {
  return (
    <div className="bg-[#F7F5F2]  px-[30px] md:px[60] lg:px-[80px] xl:px-[100px] relative md:py-[20px] xl:py-[30px]  pt-[50px]  pb-[100px] md:pb-[100px] ">
      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat mb-8 mt-8 text-center">
        {" "}
        Our story
      </h6>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-x-[50px] ">
        <div
          className="container text-left flex flex-col items-center align-middle justify-center
          h-full"
        >
          <h2 className=" text-[#BAB220]  text-4xl mb-8 font-montserrat font-bold">
            State of the Green Economy with Forestry
          </h2>
          <div className="text-[14px] text-[#3c3c3c] md:text-[16px] lg:text-[18px] pb-[10PX]">
            <p>
              The experts at Green Economy only have one promise: to achieve
              net-zero carbon emissions. GEP is a firm believer of the fact that
              the climate crisis is an urgent call that’s why our journey to
              achieve net zero emissions by 2050 has already started. GEP
              encourages carbon offset practices for a sustainable development
              future. It holds the highest level of accountability through
              Verra’s Verified Carbon Standard, paving the way for sustainable
              development where progress and sustainability coexist.
            </p>
            <p className="mt-4">
              GEP is all about leaving a legacy for its future generations.
              That’s why its experts have taken an oath of net zero carbon
              emissions. As leaders in the race of net zero emissions of UAE,
              and as active participants of COP28 Dubai, our one goal is to
              ensure that our efforts for the net zero emissions are not just
              impactful, but transparent. So, let’s build the legacy of
              sustainability together!
            </p>
          </div>
        </div>

        <div className=" ">
          <div className="relative  container flex flex-col justify-center items-center h-full">
            <img className=" rounded-lg" src={WMImg2} alt="deforestation"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateAbout;
