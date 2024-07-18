import React from "react";
import img3 from "../../../src/images/Plant-intelligent-consortiums.jpg";

const PlantIntelligentConsortiums = () => {
  return (
    <div className="flex flex-col text-center mt-[100px] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <h2 className="text-4xl mb-6 font-montserrat  font-bold text-[#316D69]">
        {" "}
        <span className="text-[#bab220]">3. </span>
        Plant intelligent consortiums
      </h2>
      <p className="text-lg mt-4 text-[#3c3c3c] font-normal font-poppins leading-7">
        Foster intelligent consortiums through veggie intercropping for
        sustainable agriculture.{" "}
      </p>
      <img src={img3} alt="plants" className="w-[100%] h-[300px] mt-8" />
    </div>
  );
};

export default PlantIntelligentConsortiums;
