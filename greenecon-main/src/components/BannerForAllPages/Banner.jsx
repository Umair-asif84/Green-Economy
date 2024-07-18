import React from "react";

const Banner = ({ title, description, backgroundImage, buttonText }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (

<div className="relative">
      <div style={bannerStyle}>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] flex flex-col justify-center text-start	h-[400px]  bg-[#000000] bg-opacity-60 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-tight font-[900] text-[#BAB220] font-montserrat" >
          {title}
          </h1>
          <p className="font-poppins text-lg text-[#EFEDD1] mt-6">{description}</p>

          <div className="pt-[20px]">
            <button className="py-[12px] px-[25px]   hover:border-[#F7F5F2] bg-[#EFEDD1] hover:bg-[#F7F5F2] hover:text-[#316D69]  border border-white border-3  rounded-lg text-[#316D69] font-montserrat font-medium ">
             { buttonText}
            </button>
           
          </div>
        </div>
      </div>
    </div>

    // <div
    //   className="relative p-4 text-[#f7f5f2] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] h-auto flex flex-col align-middle justify-center  lg:h-[380px] "
    //   style={bannerStyle}
    // >
    //   <h1 className="text-5xl font-bold font-montserrat tracking-normal leading-7 text-[#f7f5f2]">
    //     {title}
    //   </h1>
    //   <p className="mt-6 text-[#f7f5f2] text-xl font-medium font-poppins leading-7">
    //     {description}
    //   </p>
    //   <button className="bg-white text-lg text-[#3c3c3c] mt-8 py-3 font-montserrat px-5 w-[160px] rounded-lg hover:bg-transparent hover:border-2 hover:border-[#f7f5f2] hover:text-[#f7f5f2]">
    //     {buttonText}
    //   </button>
    // </div>
  );
};

export default Banner;
