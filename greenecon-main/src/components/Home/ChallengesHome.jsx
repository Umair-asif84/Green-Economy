import React from "react";

import ChallengesHomeimg from "../../../src/images/ChallengesHomeimg.png";
export default function ChallengesHome() {
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto font-roboto mt-20 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] ">
        <div className=" ">
          <div className="text-4xl mb-8 font-montserrat font-bold">
            <h2 className="   text-black border-neutral-950	underline mb-4 ">
              Challenges :<br />{" "}
            </h2>
            <h2 className="text-[#316D69]">Deforestation & Climate Change</h2>
          </div>
          <div className="text-lg font-poppins">
            <p className="">
              At Green Economy Partnership, we believe that deforestation and
              climate change are two of the most pressing issues facing our
              planet today. The loss of biodiversity and increased carbon
              emissions caused by deforestation are major hindrances to
              achieving a sustainable future. Meanwhile, climate change brings
              with it devastating consequences such as natural disasters, rising
              sea levels, and a loss of habitats for wildlife.
            </p>
            <p className="">
              That's why we're dedicated to promoting sustainable practices that
              reduce deforestation and limit global warming. From planting more
              trees to embracing renewable energy sources like solar,
              hydroelectricity, and wind power, we're committed to finding
              solutions that can help protect our planet for future generations.
            </p>
          </div>
        </div>
        <div className="">
          <img
            src={ChallengesHomeimg}
            alt=""
            className="lg:h-[600px] h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
