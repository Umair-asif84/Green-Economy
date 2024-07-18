import React from "react";

function AnaerobicDigestionForIndustry() {
  return (
    <div className=" bg-[#f7f5f2] flex justify-center lg:items-center flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] p-5 md:p-20">
      {/* Left Column - Headings */}
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
        <h1 className="text-[#BAB220] text-xl mb-4 md:text-2xl lg:text-3xl leading-7 tracking-normal font-montserrat font-bold">
          Anaerobic Digestion For{" "}
          <span className="text-[#316D69]">Industry</span>
        </h1>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal">
          Anaerobic digestion has proven to be an incredibly effective way of
          optimizing resources when it is used in conjunction with other
          advanced technologies and operations. This efficient method can
          provide valuable benefits for both the public and private sectors
          alike.
        </p>
      </div>

      {/* Right Column - Paragraphs */}
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 font-poppins font-normal">
          Anaerobic digestion is an efficient and sustainable way for the
          industry to manage organic wastes. It works by breaking down biomass,
          such as food waste, in an oxygen-free environment. This process
          produces biogas, a renewable and environmentally friendly energy
          source that can be used to generate electricity and heat. In addition,
          anaerobic digestion produces an effluent that can be used as an
          organic fertilizer, a natural and cost-effective alternative to
          chemical fertilizers.
        </p>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 tracking-normal font-montserrat font-normal">
          The advantages of anaerobic digestion include improved environmental
          performance, increased flexibility of user operations, and reduced
          investment costs. As technology continues to improve, anaerobic
          digestion will continue to play an important role in making industries
          more sustainable for the future.
        </p>
      </div>
    </div>
  );
}

export default AnaerobicDigestionForIndustry;
