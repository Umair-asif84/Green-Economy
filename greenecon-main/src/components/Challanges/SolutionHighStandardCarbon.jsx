import React from "react";
import HighStandardCarbonBackgroundimg from "../../../src/images/HighStandardCarbonBackgroundimg.jpg";

const divStyle1 = {
  backgroundImage: `url(${HighStandardCarbonBackgroundimg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function SolutionHighStandardCarbon() {
  return (
    <div className="relative" style={divStyle1}>
      <div className="mx-auto px-[30px] py-8 md:px-[60px] lg:px-[80px] xl:px-[100px] bg-cover bg-center bg-no-repeat bg-[#3c3c3c] bg-opacity-50">
        <div className="flex flex-col justify-center items-center h-full overflow-hidden xs:py-[20px] lg:py-[50px]">
          <h6 className="uppercase text-lg text-[#F7F5F2] font-bold	font-montserrat">
            Solution
          </h6>
          <div className="">
            <div className=" container ">
              <h2 className="text-[#BAB220] text-center text-4xl mb-6 font-montserrat  font-bold pb-6]">
                High Standard Carbon Offsets
              </h2>
              <div className="font-poppins text-center text-lg text-[#F7F5F2]">
                <p className=" ">
                  Mitigating climate change and addressing deforestation are
                  crucial challenges in the pursuit of a climate-resilient
                  future. Afforestation or intentional restocking of existing
                  forests has the capacity to diminish the net carbon footprint,
                  hence playing a significant role in combating the
                  ever-increasing threat of global warming. This will also
                  promote net carbon sequestration in the biosphere as a way to
                  capture and store carbon dioxide, resulting in the
                  rejuvenation of habitats that have been compromised. All in
                  all, afforestation is a proposition where both the parties
                  benefit from the outcome, safeguarding the future generation
                  interests.
                </p>
                <p className="mt-4">
                  Renewable energy sources are the cornerstone of the global
                  energy transition. Shifting ultimately towards cleaner energy
                  alternatives will reduce the carbon footprint. The Green
                  Economy takes multifaceted approaches that will help safeguard
                  our future by conserving crucial ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionHighStandardCarbon;
