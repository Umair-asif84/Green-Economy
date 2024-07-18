import React from "react";
import GraphForHome from "./GraphForHome";

const FlowChart = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto mt-20  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] items-center">
        <div className="flex">
          <GraphForHome />
        </div>

        <div className="flex flex-col flex-wrap">
          <div className="text-4xl mb-8 leading-9 font-montserrat font-bold">
            <h2 className="   text-[#316D69] border-neutral-950	 mb-4 ">
              Emission Giants
            </h2>
          </div>

          <div className="text-lg font-poppins">
            <p className="">
              According to the United Nations, the seven biggest emitters of
              greenhouse gasses are the United States of America, India, China,
              Indonesia, the European Union, Russian Federation, and Brazil. In
              2020, they accounted for half of the global greenhouse gas
              emissions.
            </p>
            <p className="mt-4">
              The rest of the countries including Argentina, Republic of Korea,
              Mexico, Russia, Saudi Arabia, South Africa, Turkey, the United
              Kingdom, the United States, and the European UnionAustralia,
              Brazil, Canada, China, France, Germany, India, Indonesia, Italy,
              Japan are responsible for 75% of the global greenhouse gas
              emission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowChart;
