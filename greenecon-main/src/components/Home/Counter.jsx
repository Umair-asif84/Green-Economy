import React from "react";

export default function Counter() {
  return (
    <div className=" Conter flex bg-current w-[60%] flex-wrap lg:w-[80%] mx-auto   border-2 border-gray-950 shadow-md rounded-lg  font-roboto sm:flex justify-center mb-24   ">
      <div className="flex justify-center  flex-col items-center p-5 xl:w-[25%] lg:w-[25%] md:w-[50%] w-[100%] text-white">
        <h4 className="font-bold font-poppins xl:text-2xl lg:text-xl md:text-lg sm:text-sm">
          11.4%
        </h4>
        <span className="border-b-4 border-[#BAB220] w-[25%] m-2"></span>
        <h6 className="text-base">Blue Carbon</h6>
      </div>

      <div className="flex justify-center flex-col items-center p-5 xl:w-[25%] lg:w-[25%] md:w-[50%] w-[100%] text-white">
        <h4 className="font-bold font-poppins xl:text-2xl lg:text-xl md:text-lg sm:text-sm">
          770k ha
        </h4>
        <span className="border-b-4 border-[#BAB220] w-[25%] m-2"></span>
        <h6 className="text-base">Forestry</h6>
      </div>
      <div className="flex justify-center flex-col items-center p-5 xl:w-[25%] lg:w-[25%] md:w-[50%] w-[100%] text-white">
        <h4 className="font-bold font-poppins xl:text-2xl lg:text-xl md:text-lg sm:text-sm">
          325 Years
        </h4>
        <span className="border-b-4 border-[#BAB220] w-[25%] m-2"></span>
        <h6 className="text-base">Agriculture</h6>
      </div>
      <div className="flex justify-center flex-col text-center items-center bg-[#316D69]  2xl:rounded-r-lg xl:rounded-r-lg lg:rounded-r-lg md:rounded-br-lg lg:p-5 xl:w-[25%] md:w-[50%] lg:w-[25%] w-[100%] text-white p-[2.25rem]">
        <h1 className="font-bold font-poppins xl:text-2xl lg:text-xl md:text-lg sm:text-sm">
          Our Goal is CO2
        </h1>
        <span className="border-b-4 border-[#BAB220] w-[25%] m-2"></span>
        <h6 className="text-base">Get in touch</h6>
      </div>
    </div>
  );
}
