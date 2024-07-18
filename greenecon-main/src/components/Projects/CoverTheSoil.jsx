import React from "react";
import Img1 from "../../../src/images/Cover-the-soil-with-organic-matter.jpg";
import Img2 from "../../../src/images/Notice-all-the-soil-is-covered.jpg";

const CoverTheSoil = () => {
  const coverdata = [
    {
      id: 1,
      img: Img1,
      description:
        "Cover the soil with organic matter, especially around trees. ",
    },
    {
      id: 1,
      img: Img2,
      description: "Notice all the soil is covered. ",
    },
  ];
  return (
    <div className="cover-the-soil flex flex-col mt-[50px] text-center items-center px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <h2 className="text-4xl font-montserrat uppercase mb-14 font-bold text-[#3c3c3c] ">
        <span className="text-[#bab220]">2. </span>
        Cover the Soil
      </h2>
      <div className="cardsforsoil grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
        {coverdata.map((item) => (
          <div className="card-inner p-8" key={item.id}>
            <div className="card-text">
              <img
                src={item.img}
                alt=""
                className="w-[100%] h-[100%] rounded-lg"
              />
              <p className="text-lg mt-6 text-[#316D69] font-bold font-poppins leading-7">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverTheSoil;
