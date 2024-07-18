import React from "react";
import { AiOutlineCarryOut } from "react-icons/ai";
import homeaboutus from "../../../src/images/AboutusHome.png";

function AboutusHome() {
  return (
    <div>
      <div class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mx-auto shadow-[none] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
        <div class=" justify-center align-middle ">
          <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
            About us
          </h6>
          <h2 className="text-4xl mb-6 font-montserrat  font-bold text-[#3c3c3c]">
            Green Economy Partnership: Going Green by 2050
          </h2>
          <div className="font-poppins text-lg text-[#3c3c3c] font-normal leading-7">
            <p className=" ">
              Welcome to{" "}
              <span className="text-[#D3CA28] font-bold">
                Green Economy Partnership,{" "}
              </span>
              a gateway to sustainable development. Our goal is to find
              practical solutions to the effects of climate change such as
              carbon emissions, sea level rise, and global warming which call
              for the dire need for a net-zero carbon world. The climate crisis
              can’t be ignored, especially when the numbers speak volumes.
            </p>
            <p className="mt-4">
              From 1880 to 2012, the average global temperature increased by a
              staggering 0.85 degrees. Carbon emissions which are the driving
              force behind such a drastic increase also experienced exponential
              growth between 2000 and 2010, exceeding the cumulative emissions
              of the previous decades. These figures keep alarming us for
              immediate action.
            </p>
          </div>
        </div>
        <div class="">
          <img src={homeaboutus} alt="" />
        </div>
        <div class=" font-poppins text-lg ">
          <div className="flex-col align-middle gap-4">
            <AiOutlineCarryOut className="mt-1 text-[50px] border-2 rounded-full border-[#316D69] bg-[#316D69] hover:bg-[#f7f5f2] hover:text-[#316D69] text-[#f7f5f2] p-2" />

            <p className=" mt-4 text-[#3c3c3c]">
              The team at Green Economy, therefore, is dedicated to addressing
              the rising challenges imposed by carbon emissions and greenhouse
              gases. Our goal is to achieve net-zero carbon emissions by 2050
              through sustainable practices, innovative technologies, and
              strategic partnerships.
            </p>
          </div>
          <div className="flex-col align-middle gap-4">
            <AiOutlineCarryOut className="mt-1 text-[50px] border-2 rounded-full border-[#316D69] bg-[#316D69] hover:border-[#316D69] hover:bg-[#f7f5f2] hover:text-[#316D69] text-[#f7f5f2] p-2" />

            <p className=" mt-4 leading-7 text-[#3c3c3c]">
              By investing in carbon offset projects, GEP helps individuals,
              organizations, and companies to play their part in preventing
              climate change by balancing out the carbon emissions and becoming
              members of a more sustainable future.
            </p>
          </div>

          <div className="flex-col align-middle gap-4">
            <AiOutlineCarryOut className="mt-1 text-[50px] border-2 rounded-full border-[#316D69] bg-[#316D69] hover:border-[#316D69] hover:bg-[#f7f5f2] hover:text-[#316D69] text-[#f7f5f2] p-2" />

            <p className=" mt-4 text-[#3c3c3c]">
              As pioneers in the carbon elimination industry, our commitment to
              a sustainable future goes way beyond carbon offset. GEP is here to
              provide practical solutions to make your journey towards a
              sustainable planet worthwhile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutusHome;
