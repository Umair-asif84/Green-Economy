import React from "react";

import img2 from "../../../src/images/c2Icon1.png";
import img3 from "../../../src/images/c2icon2.png";
import img4 from "../../../src/images/c2icon3.png";
import InnerCard from "./InnerCard";

function SolarCards2() {
  const datials = [
    {
      image: img2,
      heading: "Nature Based Assets",
    },
    {
      image: img3,
      heading: "Wind and Solar",
    },
    {
      image: img4,
      heading: "Anaerobic Digestion",
    },
  ];

  return (
    <div className=" px-[30px]  md:px-[60px] lg:px-[80px] xl:px-[100px]  xs:py-[10px] ">
      <div className="xs:relative lg:relative gap-x-[20px] gap-y-[20px] lg:gap-y-0 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:-mt-16 md:-mt-[68px] xs:-mt-[70px] ">
        {datials.map((el) => (
          <InnerCard image={el.image} heading={el.heading} />
        ))}
      </div>
    </div>
  );
}
export default SolarCards2;
