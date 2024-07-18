import React from "react";
import Mangroves from "../../../src/images/bluecmangroves.jpg";

const BlueCarbonMangroves = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]  py-16 px-[30px] md:px-[60px] font-roboto lg:px-[80px] xl:px-[100px]">
      <div className="container text-left text-white flex flex-col justify-center  h-full">
        <h2 className=" mb-4  text-[#316D69] font-montserrat text-3xl font-bold leading-7 tracking-normal">
          Mangroves
        </h2>
        <p className="text-[#3C3C3C] text-lg font-normal font-poppins  leading-7">
          Mangroves are salt-tolerant trees and shrubs that grow in the
          intertidal zones of tropical and subtropical coastal areas. They play
          an important role in coastal ecosystems, providing habitat for a
          diverse array of wildlife, protecting shorelines from erosion, and
          serving as important nursery grounds for many commercially important
          fish species.
        </p>
        <p className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7 ">
          Mangroves also store large amounts of carbon in their soils and
          vegetation, making them an important component of the global carbon
          cycle and a significant contributor to the "blue carbon" sink.
        </p>
        <p className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7 ">
          However, mangroves are under threat from human activities such as
          deforestation, coastal development, and aquaculture, and the loss of
          mangrove ecosystems can have negative impacts on both the environment
          and local communities.
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center h-full">
        <div className="py-[20px] md:py-[40px] container flex justify-center items-center">
          <img
            className="md:h-[100%] w-full rounded-lg"
            src={Mangroves}
            alt="deforestation"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default BlueCarbonMangroves;
