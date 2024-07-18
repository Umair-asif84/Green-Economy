import React from "react";
import bg2 from "../../../src/images/AB-bg2.jpg";
const divStyle1 = {
  backgroundImage: `url(${bg2})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
function OurStoryServices() {
  return (
    <div className="relative">
      <h2 className=" py-[30px] text-[20px] lg:text-[22px] font-[900] text-[#316D69] text-center">
        {" "}
        Services
      </h2>
      <div style={divStyle1}>
        <div className="mt-[20px] pb-[100px] py-[30px]  px-[30px] md:px[60] lg:px-[80px] xl:px-[100px] ">
          <div className="container text-left text-white  flex flex-col justify-center items-center h-full">
            <h3 className="text-left leading-[30px] text-[#BAB220] font-[500] text-[18px] pb-[20px]">
              Towards a sustainable and smarter future
            </h3>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] pb-[10px]">
              Our aim of crafting a sustainable and smarter future is achievable
              through numerous services that utilise Nature Based Assets such as
              wind, solar, and anaerobic digestion. For instance, renewable
              energy technologies including those powered by wind turbines,
              solar panels and anaerobic digestion are becoming increasingly
              cost-effective forms of energy generation. Furthermore, hydrogen
              vehicles are proving to be a viable and cleaner alternative form
              of transportation for the public.
            </p>

            <p className="text-[14px] md:text-[16px] lg:text-[18px]  pb-[10px]">
              Nature Based Assets such as these give us the ability to tackle
              climate change and reduce dependence on carbon-based energy
              resources. Therefore it is essential that we capitalise on Nature
              Based Assets along with other innovative services in order to move
              towards a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStoryServices;
