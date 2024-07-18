import React from "react";

const SyntropicFarming = () => {
  return (
    <div className=" flex flex-col text-center  dark:bg-gray-800 overflow-hidden mb-14 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  relative lg:flex lg:items-center">
      <div className=" py-20 text-center px-auto ">
        <div className="flex flex-col items-center text-center">
          <h2 className=" text-3xl font-bold text-center tracking-normal leading-7 lg:text-4xl font-montserrat text-[#316D69] dark:text-white">
            <span className="text-[#bab220]">A. </span>
            Syntropic Farming
          </h2>
          <span className="border-2 border-[#3c3c3c] w-[20%] mt-4"> </span>
        </div>
        <div className="flex flex-col text-center justify-center items-center mt-6">
          <p className="text-lg mt-4 text-[#3c3c3c] font-normal font-poppins leading-7 lg:w-9/12">
            Syntropic farming, introduced by a Swiss farmer and researcher,
            Ernst Götsch, is a form of regenerative agriculture that combines
            forestry and agriculture to yield high output and rejuvenate soil.
          </p>
          <p className="text-lg mt-4 text-[#3c3c3c] font-normal font-poppins leading-7 lg:w-9/12">
            Unlike traditional farming that relies on external inputs, Syntropic
            farming replicates and accelerates ecological succession and
            stratification spacing each plant optimally in both space and time.
            It’s characterized by its regenerative nature, and
            self-sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SyntropicFarming;
