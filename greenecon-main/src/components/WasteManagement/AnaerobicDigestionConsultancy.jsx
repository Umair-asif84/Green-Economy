import React from "react";
import banner from "../../../src/images/GEPs-Anaerobic-Digestion-Consultancy.png";

function DigestionConsultancy() {
  return (
    <section className="  py-12 text-[#3C3C3C] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[0px] ">
      <div className=" mx-auto">
        <div className="lg:flex lg:space-x-8 justify-center items-center">
          <div className="lg:w-1/2 mt-8 md:mt-0 mb-5">
            <h2 className="text-2xl md:text-3xl text-[#316D69] leading-7 tracking-normal font-montserrat font-bold mb-4">
              GEP’s Anaerobic Digestion Consultancy
            </h2>
            <div className="mb-3 text-[#3c3c3c] text-lg leading-7 font-normal font-poppins">
              <p className=" ">
                Green Economy Partnership provides consultancy services for you
                to uncover the potential of anaerobic digestion. It also offers
                an efficient solution to address waste management challenges and
                harness renewable energy resources.
              </p>
              <p className=" mt-2">
                Through anaerobic digestion, you will not only contribute to
                reducing global carbon footprint but also establish such an
                economical system to generate power. Our team of experts will
                help you make well-informed decisions, as they are dedicated to
                enhancing your quality of life.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src={banner}
              alt="About Green Economy"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigestionConsultancy;
