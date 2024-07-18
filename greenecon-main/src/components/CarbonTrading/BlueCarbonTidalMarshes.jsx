import React from "react";
import TidalMarshes from "../../../src/images/bluectidalmarshes.jpg";

const BlueCarbonTidalMarshes = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-6 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="container text-left bg-[#f7f5f2] py-8 px-12 flex flex-col justify-center  h-full">
        <h2 className=" mb-4  text-[#316D69] text-3xl font-montserrat font-bold leading-7 tracking-normal ">
          Tidal Marshes
        </h2>
        <p className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7 ">
          Tidal marshes are coastal wetlands that are influenced by the rise and
          fall of tides. They are located between land and open water and are
          found along sheltered coasts, such as bays and estuaries. Tidal
          marshes are rich in biodiversity and provide important habitats for
          many species of plants and animals, including migratory birds and
          fish.
        </p>
        <p className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7  ">
          They also play a role in mitigating the impacts of storms and sea
          level rise by absorbing and reducing wave energy. However, tidal
          marshes are under threat from human activities such as coastal
          development and sea level rise.
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center h-full">
        <div className="py-[20px] md:py-[40px] container flex justify-center items-center">
          <img
            className="md:h-[100%] w-full rounded-lg"
            src={TidalMarshes}
            alt="deforestation"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default BlueCarbonTidalMarshes;
