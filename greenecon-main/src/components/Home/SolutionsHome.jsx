import React from "react";

import SolutionsHomeimg2 from "../../../src/images/SolutionsHomeimg2.png";

export default function SolutionsHome() {
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto mt-20  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
        <div className="flex">
          <img src={SolutionsHomeimg2} alt="" />
        </div>

        <div className="flex flex-col flex-wrap">
          <div className="text-4xl mb-8 leading-9 font-montserrat font-bold">
            <h2 className="   text-black border-neutral-950	underline mb-4 ">
              Solution :<br />{" "}
            </h2>
            <h2 className="text-[#BAB220]">High Standard Carbon Offsets</h2>
          </div>

          <div className="text-lg font-poppins">
            <p className="">
              Afforestation, the practice of planting trees to restore forests,
              has been a key climate change solution for many years. Sustainable
              afforestation projects can reduce the net zero carbon footprint
              and help combat global warming. By sequestering carbon dioxide,
              these efforts also promote biodiversity in their local area and
              revive ecosystems that have been degraded or destroyed.
              Afforestation offers a win-win situation with its capacity to
              reduce high-level carbon emissions while providing sustainable
              solutions for future generations.
            </p>
            <p className="">
              The use of high standard carbon offsets for afforestation
              activities is an important approach to creating positive
              ecological outcomes and ensuring lasting change against climate
              change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
