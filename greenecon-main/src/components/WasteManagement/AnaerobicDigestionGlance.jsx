import React from "react";
import img2 from "../../../src/images/Anaerobic-Digestion-at-a-Glance.png";

const AnaerobicDigestionGlance = () => {
  return (
    <section className="  py-12 text-[#3C3C3C] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[50px] ">
      <div className=" mx-auto">
        <div className="lg:flex lg:space-x-8 justify-center items-center">
          <div className="lg:w-1/2">
            <img
              src={img2}
              alt="About Green Economy"
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="lg:w-1/2 mt-8 md:mt-0 mb-5">
            <h2 className="text-2xl md:text-3xl text-[#316D69] leading-7 tracking-normal font-montserrat font-bold mb-4">
              Anaerobic Digestion at a Glance
            </h2>
            <div className="mb-3 text-[#3c3c3c] text-lg leading-7 font-normal font-poppins">
              <p className=" ">
                It is the conversion of organic matter into energy efficient gas
                and digestate in the absence of oxygen. As part of the
                integrated waste management system, anaerobic digestion reduces
                the emission of landfill gas into the atmosphere. The process is
                quite common in many natural environments such as swamps or
                stomachs of ruminants or cows.
              </p>
              <p className=" mt-2">
                In Anaerobic Digestion, a biogas is produced that is a mixture
                of methane and carbon dioxide. In addition, what we also get is
                a nutrient-rich substance; digestate. The process is becoming
                very popular for waste management solutions, especially in Dubai
                from the point of view of renewable energy sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnaerobicDigestionGlance;
