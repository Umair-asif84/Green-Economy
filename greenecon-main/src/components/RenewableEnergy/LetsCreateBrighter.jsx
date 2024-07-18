import React from "react";
import banner from "../../../src/images/wind-mill-mid-banner.jpg";

const divStyle1 = {
  backgroundImage: `url(${banner})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function Brighter() {
  return (
    <div className=" relative mt-[50px]">
      <div style={divStyle1}>
        <div className=" px-[30px]  md:px-[60px] lg:px-[80px] xl:px-[100px] py-[100px] text-center bg-[#BAB220] bg-opacity-40">
          <h2 className="pb-[15px] md:pb-[30px] text-center text-[#f7f5f2] leading-7  font-bold text-[20px] lg:text-3xl tracking-normal font-montserrat ">
            Let's create brighter and greener tomorrow
          </h2>
          <div className="py-[10px]"></div>
          <button className="py-[12px] px-[25px] font-montserrat  hover hover:border-white hover:text-white hover:bg-transparent border border-white border-3  rounded-lg text-[#3c3c3c] ">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Brighter;
