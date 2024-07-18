import React from "react";
import grassland from "../../../src/images/grassland.jpg";
import bushland from "../../../src/images/bushland.jpg";
import wetland from "../../../src/images/wetland.jpg";
import woodland from "../../../src/images/woodland.jpg";

const DrivingForcesBehind = () => {
  const DrivingForcesBehindCards = [
    {
      id: 1,
      image: grassland,
      title: "Paris Agreement ",
      description:
        "Companies seeking alignment with the objectives of the Paris Agreement.",
    },
    {
      id: 2,
      image: bushland,
      title: "Consumer Demand",
      description:
        "Companies investing in carbon offsets attract environmentally conscious consumers. ",
    },
    {
      id: 3,
      image: wetland,
      title: "Technological Advancements",
      description:
        "Better carbon measurements mean transparency in carbon offset projects.",
    },
    {
      id: 4,
      image: woodland,
      title: "Time Gaps ",
      description:
        "Companies do not have sufficient time to eliminate their carbon emissions.  ",
    },
  ];
  return (
    <div className="   my-14 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <h2 className="mb-14  font-montserrat text-[#316D69] text-3xl leading-7 font-bold tracking-wide text-center ">
        Driving Forces Behind Carbon Offset Market
      </h2>
      <div className="grid gird-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 text-center items-center">
        {DrivingForcesBehindCards.map((items) => (
          <div className="w-[100%] " key={items.id}>
            <div className="flex flex-col ">
              <img
                src={items.image}
                alt=""
                className="h-[200px] w-[200px] rounded-full shadow-2xl hover:rounded-lg hover:shadow-2xl mx-auto"
              />
              <h4 className="font-montserrat text-xl font-bold text-[#bab220] mt-10 h-[40px]">
                {items.title}
              </h4>
              <p className="text-lg font-poppins font-normal text-[#3c3c3c] leading-7 h-[100px] ">
                {items.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrivingForcesBehind;
