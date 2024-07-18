import React from "react";
import WMImg2 from "../../../src/images/ourstory-origination.png";

function OurStoryOrigination() {
  return (
    <div className="bg-[#F7F5F2]  px-[30px] md:px[60] lg:px-[80px] xl:px-[100px]  relative md:py-[20px] xl:py-[30px] pb-[100px] md:pb-[100px] xl:pb-[120px]">
      <div className=" py-[20px] md:py-[10px] lg:py-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
          <div
            className="container text-left lg:text-left flex flex-col 
         justify-center  h-full"
          >
            <h2 className="text-left text-4xl  font-montserrat  font-bold text-[#BAB220] pb-6 ">
              Origination{" "}
            </h2>
            <div className="text-lg mx-auto font-poppins text-[#3c3c3c] font-normal">
              <p className="">
                The Green Economy Partnership initiatives are initiatives in
                Africa, the fruits of which are visible today.
              </p>
              <p className="mt-4">
                Those initiatives are making a real impact in Africa as it is
                helping the project originators to grasp carbon finance
                revenues. GEP is setting good examples through our environmental
                certifications, delivering revolutionary results for all the
                stakeholders involved.{" "}
              </p>
            </div>
          </div>

          <div className="hidden lg:block ">
            <div className="  relative  container flex flex-col justify-center items-center h-full">
              <img
                className=" rounded-lg"
                src={WMImg2}
                alt="deforestation"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStoryOrigination;
