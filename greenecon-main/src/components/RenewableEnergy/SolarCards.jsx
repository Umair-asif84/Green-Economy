import React from "react";

function InnerCard(props) {
  return (
    <div className=" xs:mb-[10px] rounded-md bg-white shadow-lg text-center flex content-center items-center justify-center shadow-[#BAB220] ">
      <div className="xs:px-[15px] xs:py-[22px] md:py-[30px]">
        <h3 className="xs:mt-[8px]  xs:text-[14px] md:text-xl text-[#BAB220] font-bold font-montserrat tracking-normal leading-7 ">
          {props.heading}
        </h3>
        <p className="xs:mt-[8px] text-[#316D69] md:py-[10px] text-[14px] md:text-[16px] lg:text-lg   font-normal font-poppins leading-7 lg:px-[20px]">
          {props.text}
        </p>
      </div>
    </div>
  );
}

function SolarCards1() {
  const datials = [
    {
      text: "Harness the power of the wind to provide renewable energy for your home or business.",
      heading: "Wind Generators",
    },
    {
      text: "Save money and help the environment by using solar energy.",
      heading: "Solar Panels",
    },
    {
      text: "We provide clean energy to help reduce your environmental impact.",
      heading: "Clean Energy",
    },
    {
      text: "We help you to save the environment with Green Power Energy.",
      heading: "Power Energy",
    },
  ];

  return (
    <div className="px-[30px] bg-[#f7f5f2] py-12 md:px-[60px] lg:px-[80px] xl:px-[100px]  xs:py-[10px]">
      <div className="xs:relative lg:relative gap-x-[20px] gap-y-[20px] lg:gap-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
        {datials.map((el, index) => (
          <InnerCard key={index} heading={el.heading} text={el.text} />
        ))}
      </div>
    </div>
  );
}

export default SolarCards1;
