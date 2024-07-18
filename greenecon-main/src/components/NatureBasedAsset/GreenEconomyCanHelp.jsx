import React from "react";
import TeamMember from "./projects"; // Replace with the correct path
import plantation from "../../../src/images/plantation.jpg";
import thf from "../../../src/images/thf.jpg";
import grassland from "../../../src/images/grassland.jpg";
import bushland from "../../../src/images/bushland.jpg";
import wetland from "../../../src/images/wetland.jpg";
import woodland from "../../../src/images/woodland.jpg";
import cfarm from "../../../src/images/cfarm.jpg";
import sfarm from "../../../src/images/sfarm.jpg";

const GreenEconomyCanHelp = () => {
  const teamMembers = [
    {
      name: "Plantation (Hardwoods)",
      description:
        "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
      imageSrc: plantation, // Replace with the actual image source
    },
    {
      name: "Tropical Forest",
      description:
        "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
      imageSrc: thf, // Replace with the actual image source
    },
    {
      name: "Bushland",
      description:
        "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
      imageSrc: bushland, // Replace with the actual image source
    },
    {
      name: "Grassland",
      description:
        "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
      imageSrc: grassland, // Replace with the actual image source
    },
    {
      name: "Wetland",
      description:
        "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
      imageSrc: wetland, // Replace with the actual image source
    },
    {
      name: "Woodland",
      description:
        "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
      imageSrc: woodland, // Replace with the actual image source
    },
    {
      name: "Subsistence Farmland",
      description:
        "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
      imageSrc: sfarm, // Replace with the actual image source
    },
    {
      name: "Commercial Farm",
      description:
        "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
      imageSrc: cfarm, // Replace with the actual image source
    },
  ];

  return (
    <div className=" flex flex-col grid-cols-1 pt-10 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-3 gap-6 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="flex text-center justify-center">
        <h2 className="text-3xl text-center font-montserrat text-[#316D69] font-bold ">
          Green Economy can help facilitate in various projects
        </h2>
      </div>
      <div className="flex flex-wrap">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            description={member.description}
            imageSrc={member.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default GreenEconomyCanHelp;
