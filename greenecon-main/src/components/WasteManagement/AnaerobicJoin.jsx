import React, { useState } from "react";
import img5 from "../../../src/images/download.png";

const bg2 = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img5})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
};

function AnaerobicJoin() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={bg2}
      className="h-[100] w-[100] p-40 bg-[#BAB220] text-[#F7F5F2] px-5 md:px-10 lg:px-10"
    >
      <div className="mx-auto text-center">
        <div
          className={`p-2 md:p-4 text-center md:w-[450px] lg:w-[550px] relative bottom-[100px]  float-right rounded-lg ${
            isHovered
              ? "bg-[#D3CA28]"
              : "bg-gradient-to-r from-[#5DA344] to-[#D3CA28]"
          } transition duration-500 ease-in-out`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-lg md:text-xl leading-7 tracking-normal font-montserrat font-semibold lg:text-3xl">
            Let's transform our carbon footprint together by 2050.
          </h2>
          <br />
          <button className="mt-4 md:mt-6 bg-[#316D69] font-montserrat hover:bg-[#F7F5F2] text-[#F7F5F2] hover:text-[#316D69] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition duration-300 shadow-lg">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnaerobicJoin;
