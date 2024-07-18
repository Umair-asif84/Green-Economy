import React from "react";

import img4 from "../../../src/images/img4.png";

function DryAnaerobicDisgestion() {
  return (
    <section className=" py-10 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row text-[#EFEDD1] items-center">
          <div className="lg:w-1/2">
            <img
              src={img4}
              alt="Dry Anaerobic Plant"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className=" bg-gradient-to-r from-[#5DA344] to-[#D3CA28] lg:w-2/3 rounded-2xl p-4 mt-8 lg:mt-0 lg:p-6 lg:ml-10 ">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl xs:text-2xl leading-7 font-montserrat xs:leading-tight font-bold text-[#F7F5F2] mb-4">
                Dry Anaerobic Digestion Plant Components
              </h2>
              <p className="mb-6 text-center lg:text-left text-[#f7f5f2]  text-lg font-normal font-poppins leading-7">
                Dry anaerobic digestion plants are an effective way to treat
                organic waste and generate biogas in an environmentally-friendly
                and sustainable manner. Dry anaerobic digestion is a type of
                anaerobic digestion process, where organic material is digested
                anaerobically in the absence of water. This particular process
                helps to reduce methane emissions that would otherwise be
                released into the atmosphere when organic waste decomposes
                naturally. The components involved in dry anaerobic digestion
                plants typically include pre-treatment machinery to grind up the
                material, as well as a fermentation tank for the non-putrescible
                solids before being fed into an anaerobic digester. <br></br>{" "}
                After being processed, the generated biogas can then be burned
                or used for electricity generation.{" "}
              </p>
              <div className="flex justify-center lg:justify-end mb-2 lg:text-left">
                <a
                  href="#learn-more"
                  className="bg-[#316D69] px-[25px] font-montserrat py-[12px] hover:bg-[#BAB220] font-semibold rounded-lg transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DryAnaerobicDisgestion;
