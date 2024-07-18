import React from "react";
import carbon from "../../../src/images/carbon-credit.jpg";
import bg3 from "../../../src/images/background23.jpg";

const divStyle = {
  backgroundImage: `url(${bg3})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function HowCarbonOffsetsWork() {
  return (
    <div className="relative">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  py-[20px] md:py-[50px] mt-10">
          <div>
            <h2 className="text-4xl mb-10 font-montserrat  font-bold text-[#316D69] text-center">
              How Carbon Offsets Work
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-[18px]  leading-[24px] text-center 2xl:pb-[15px] pl-[30px] font-poppins text-lg xl:w-1/2 mx-auto ">
              Carbon offsetting means that businesses and individuals extract
              the same amount of carbon from the atmosphere that they produce,
              thus, balancing carbon emissions. All businesses and individuals
              emit carbon into the atmosphere; things like airplanes, running a
              home or a business and car fumes are all contributors. With all
              the excess carbon dioxide being released into the atmosphere, the
              effects of climate change have escalated.{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:gap-x-[50px] lg:grid-cols-3">
            <div className=" text-left  text-[#3C3C3C]  flex flex-col justify-center h-full mt-6">
              <p className="text-[14px] md:text-[16px] lg:text-[18px]  leading-[24px]  2xl:pb-[15px] pl-[30px] font-poppins text-lg pb-4 ">
                Carbon offsetting is where businesses contribute money to
                counteract the carbons they emit. This money is used to reduce
                the carbon in the atmosphere around the world. Nonetheless, some
                of these carbon emissions remain unavoidable, yet they can be
                offset.
              </p>
              <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat pb-4">
                Now, how do these carbon offset projects work?
              </h6>
              <p className="text-[14px] md:text-[16px] lg:text-[18px]  leading-[24px]  2xl:pb-[15px] pl-[30px] font-poppins text-lg ">
                When an organization buys carbon credit, they compensate for
                their own emissions or offset their carbon footprint. By buying
                a carbon offset, they are actually paying to have equivalent
                amount of carbon dioxide removed from the atmosphere either
              </p>
            </div>
            <div className="py-[20px] flex flex-col justify-center items-center h-auto">
              <div className="container pt-4">
                <img
                  className="w-full rounded-lg h-auto"
                  src={carbon}
                  alt="carbon"
                ></img>
              </div>
            </div>
            <div className=" text-left  text-[#3C3C3C]  flex flex-col justify-center h-full">
              <ol class="list-disc pl-[30px]  font-poppins text-lg">
                <li class=" font-poppins text-lg  ">
                  <p className=" leading-[24px] 2xl:pb-[15px]">
                    Through removal of carbon dioxide that is already present in
                    the atmosphere
                  </p>
                </li>
                <li class=" ">
                  <p className="">Or through carbon emissions</p>{" "}
                </li>
              </ol>
              <p className="text-[14px] md:text-[16px] lg:text-[18px]  leading-[24px]  2xl:pb-[15px] pl-[30px] font-poppins text-lg ">
                A third-party organization ensures that carbon offset projects
                align with the standards of the Article 6.2 of the Paris
                Agreement. Carbon credits are then issued. The cost of carbon
                offset varies with the type of the project and the amount of
                carbon dioxide that has to be offset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowCarbonOffsetsWork;
