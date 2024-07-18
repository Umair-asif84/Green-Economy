import React from "react";
import SolutionsHomeimg2 from "../../../src/images/ourstory-ourvision.png";

function OurVision() {
  return (
    <div>
      <div className=" grid grid-cols-1  lg:grid-cols-2 gap-14 mx-auto mt-20  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
        <div className="flex align-middle">
          <img src={SolutionsHomeimg2} alt="" className="h-auto" />
        </div>

        <div className="flex flex-col flex-wrap">
          <div className="text-4xl mb-8 font-montserrat font-bold">
            <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
              Our Vision
            </h6>
            <h2 className="   text-black border-neutral-950	underline mb-4 ">
              On the Road to Build a
            </h2>
            <h2 className="text-[#BAB220]">
              Climate Resilient Future and Sustainable Development
            </h2>
          </div>

          <div className="text-lg font-poppins">
            <p className="">
              Our vision is to accelerate the transition to a green economy that
              promotes sustainable development. To achieve this, our company
              helps the government and clients design and implement carbon
              reduction strategies in accordance with the Paris Agreement. Our
              experts believe that changing ways for economic sustainability
              requires efforts from all the stakeholders involved. Hence, they
              collaborate with them to devise projects that align with their
              requirements.
            </p>
            <p className="mt-4">
              Our heritage and expertise in the green economy allow us to
              identify the loopholes in developing net-zero strategies to reach
              sustainable development goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurVision;
