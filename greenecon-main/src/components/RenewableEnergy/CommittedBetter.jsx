import React from "react";
import WMImg2 from "../../../src/images/wind-solar-img2.jpg";
function CommittedBetter() {
  return (
    <div className=" px-[30px]  md:px-[60px] lg:px-[80px] xl:px-[100px] relative bg-[#BAB220] md:py-[20px] xl:py-[30px] mt-[50px]  pb-[80px] md:pb-[100px] xl:pb-[120px]">
      <div className="py-[20px] md:py-[10px]">
        <h3 className="   lg:hidden text-left text-[#f7f5f2] font-montserrat tracking-normal leading-7 text-xl font-[500] ">
          We're committed to a better tomorrow
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
          <div className=" lg:hidden flex flex-col justify-center items-center h-full">
            <div className="py-[20px] md:py-[40px] container flex justify-center items-center">
              <img
                className="rounded-lg"
                src={WMImg2}
                alt="deforestation"
              ></img>
            </div>
          </div>

          <div
            className="container text-left text-[#f7f5f2] flex flex-col 
           justify-center  h-full"
          >
            <h3 className=" leading-7 text-[#f7f5f2] tracking-normal font-montserrat text-3xl font-[500] pb-[20px] lg:block">
              We're committed to a better tomorrow
            </h3>
            <p className="text-[14px] md:text-[16px] lg:text-lg font-normal font-poppins leading-7 text-[#f7f5f2] pb-[5px]">
              At Green Economy Partnership, we are focused on doing our part in
              creating a brighter and greener tomorrow. We are committed to
              utilizing solar and wind energy as a sustainable form of renewable
              energy whenever possible. This not only brings substantial cost
              savings to our business, but also reduces the need for fossil
              fuels that have far reaching environmental consequences.
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-lg font-normal  font-poppins leading-7 text-[#f7f5f2]  ">
              To ensure its successful implementation, we actively promote solar
              and wind energy incentives within local communities to further
              support these growing renewable sources. As an organization, we
              remain dedicated to delivering minimal impact on the environment
              wherever possible as part of our commitment to a better future.
            </p>
          </div>

          <div className="hidden lg:block ">
            <div className="py-[20px]  rekative  container flex flex-col justify-center items-center h-full">
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

export default CommittedBetter;
