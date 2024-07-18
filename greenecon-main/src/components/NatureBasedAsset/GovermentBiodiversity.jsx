import React from "react";

const GovermentBiodiversity = () => {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] pb-10 mt-[100px]">
      <h2 className="text-4xl mb-6 font-montserrat  font-bold text-[#316D69]">
        How Governments Are Dealing With Climate Change and Biodiversity?
      </h2>
      <div className=" text-lg font-normal font-poppins leading-7 text-[#3c3c3c]">
        <p className="mt-4 ">
          Climate change and biodiversity are part of an interlinked triple
          planetary crisis; the UN is therefore, tackling with them together
          through:
        </p>
        <ol className="mt-4 list-disc pl-8">
          <li>UN Framework Convention on Climate Change (UNFCCC)</li>
          <li>UN Convention on Biological Diversity </li>
        </ol>
      </div>
    </div>
  );
};

export default GovermentBiodiversity;
