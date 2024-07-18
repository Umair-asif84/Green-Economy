import React from "react";
import Seagrasses from "../../../src/images/bluecseagrasses.jpg";

const BlueCarbonSeagrasses = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  px-[30px] md:px-[60px] font-roboto lg:px-[80px] xl:px-[100px]">
      <div className=" flex flex-col justify-center items-center h-full">
        <div className="py-[20px] md:py-[40px] container flex justify-center items-center">
          <img
            className="md:h-[100%] w-full rounded-lg"
            src={Seagrasses}
            alt="deforestation"
          ></img>
        </div>
      </div>
      <div className="container text-left text-white py-8 flex flex-col justify-center px-12  bg-[#f7f5f2] h-full">
        <h2 className=" mb-4  text-[#316D69] text-3xl font-bold font-montserrat leading-7 tracking-normal">
          Seagrasses
        </h2>
        <p className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7 ">
          Seagrasses are a group of flowering plants that grow in coastal
          waters, typically in shallow bays and estuaries. They provide
          important habitats for many marine species, help reduce erosion, and
          play a role in carbon sequestration.
        </p>
        <p className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7 ">
          Some common species of seagrasses include eelgrass, turtle grass, and
          manatee grass. However, seagrass populations are declining worldwide
          due to human activities such as coastal development and pollution.
        </p>
      </div>
    </div>
  );
};

export default BlueCarbonSeagrasses;
