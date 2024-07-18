import React from "react";
import deforestation from "../../../src/images/What-is-Deforestation.png";

function WhatISDeforestation() {
  return (
    <div className="relative ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-[20px] md:py-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
            <div className="pb-[20px] flex flex-col justify-center items-center h-full">
              <div className=" container flex  items-center">
                <img
                  className="w-4/5 mx-auto"
                  src={deforestation}
                  alt="deforestation"
                ></img>
              </div>
            </div>

            <div className="container text-white  flex flex-col justify-center  h-full">
              <h2 className="text-left text-4xl mb-6 font-montserrat  font-bold text-[#316D69] pb-6">
                What is Deforestation?
              </h2>
              <div className="font-poppins text-lg text-black">
                <p className=" ">
                  Deforestation is the widespread cutting of forests for many
                  reasons. This could be done for converting forested land for
                  uses such as industrial activities, urban development,
                </p>
                <p className="mt-4 ">
                  and agriculture. The trees are usually cut on a large scale,
                  disrupting the rich biodiversity that forests support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatISDeforestation;
