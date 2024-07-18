import React from "react";

import img1 from "../../../src/images/c2Icon1.png";
import img2 from "../../../src/images/c2icon2.png";
import img3 from "../../../src/images/c2icon3.png";
function InnerCard(props) {
  return (
    <div className="py-[20px] bg-[#EFEDD1] xs:mb-[10px] rounded-md shadow-lg text-center flex flex-col items-center justify-center shadow-[#BAB220]">
      <div className="xs:px-[15px]">
        <img src={props.image} alt="icon" className="mx-auto mb-4" />{" "}
        {/* Center the image */}
        <h3 className="xs:mt-[8px] xs:text-[14px] md:text-[15px] text-[#BAB220] font-[500]">
          {props.heading}
        </h3>
        <p className="pb-[20px] xs:mt-[8px] text-[14px] md:text-[16px] lg:text-[18px] font-[400] lg:px-[20px]">
          {props.text}
        </p>
        <button>{props.button()}</button>
      </div>
    </div>
  );
}

function butn() {
  return (
    <div className="text-center">
      <button
        className="text-white bg-[#316D69]  border hover hover:border-[#BAB220]
 border-transparent border-3 hover:bg-transparent hover:text-[#BAB220] rounded-lg py-[12px] px-[25px]"
      >
        Find Out More
      </button>
    </div>
  );
}
function OurstoryCards3() {
  const datials = [
    {
      image: img1,
      heading: "Nature Based Assets",
      text: "Nature Based Assets is the leading provider of unique and sustainable natural resources.",
      button: butn,
    },
    {
      image: img2,
      heading: "Wind and Solar",
      text: "We're the company that's changing how you think about renewable energy.",
      button: butn,
    },
    {
      image: img3,
      heading: "Anaerobic Digestion",
      text: "Anaerobic digestion is the perfect way to turn your food waste into renewable energy.",
      button: butn,
    },
  ];

  return (
    <div className="xs:py-[10px]  px-[30px] md:px-[60] lg:px-[80px] xl:px-[100px] ">
      <div
        className=" xl:px-[80px] xs:relative lg:relative gap-x-5 gap-y-[20px] lg:gap-y-0 grid lg:grid-cols-3
       grid-cols-1 sm:grid-cols-2 lg:-mt-50 md:-mt-[60px] xs:-mt-[70px] "
      >
        {datials.map((el) => (
          <InnerCard
            image={el.image}
            heading={el.heading}
            text={el.text}
            button={el.button}
          />
        ))}
      </div>
    </div>
  );
}
export default OurstoryCards3;
