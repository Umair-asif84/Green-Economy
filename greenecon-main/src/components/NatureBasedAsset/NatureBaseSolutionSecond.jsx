import React from "react";
import NatureBasedAssets2 from "../../../src/images/Nature-Based-Assets-2.png";

const NatureBaseSolutionSecond = () => {
  return (
    <div className=" flex flex-row lg:items-center px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] lg:mt-[100px] mt-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="flex items-center  ">
          <img src={NatureBasedAssets2} className="h-[90%] w-full" alt="Tree" />
        </div>
        <div className="text-lg font-normal mt-4 font-poppins leading-7 text-[#3c3c3c]">
          <p className="">
            According to the World Bank, nature-based solutions can provide 37%
            of the mitigation needed until 2030 to meet the goals outlined by
            the Paris Agreement. GEP has an open approach towards climate
            investments, contributing towards the dire need to reach the target
            of zero emissions by 2050.
          </p>
          <p className="mt-4">
            {" "}
            The sustainable forest management (SFM) operators and investors seek
            to develop new income streams from natural forests such as carbon,
            conservation payments and ecotourism. This ensures the development
            of long-term cash flow. The experts work with stakeholders from
            various backgrounds in combating climate change to achieve a shared
            goal, that is, to reduce carbon emissions.{" "}
          </p>

          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-lg shadow">
              <button
                type="button"
                className="py-3 px-[25px] font-montserrat text-lg text-white border-2 border-[#316D69] hover:text-white bg-[#316D69] font-semibold hover:bg-[#BAB220] transition duration-300 rounded-lg"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureBaseSolutionSecond;
