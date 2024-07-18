import React from "react";
import guineabissau from "../../../src/images/Emblem_of_Guinea-Bissau.png";
import ugandalogo from "../../../src/images/Coat_of_arms_of_Uganda.png";
import zanzibarlogo from "../../../src/images/zanzibarlogo.png";

const OurPartner = () => {
  return (
    <div className="bg-[#EFEDD1] pb-20 pt-10 mt-10 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className=" mx-auto font-roboto text-center  ">
        <div>
          <h2 className="text-4xl  font-montserrat font-bold text-[#316D69]">
            Our Partner
          </h2>
          <p className="mt-4 font-poppins text-lg">Our Happy Clients</p>
        </div>

        <div className="lg:grid-cols-2 flex flex-wrap mx-auto justify-evenly mt-10">
          <div className="shadow-2xl bg-white shadow-[#BAB220] h-full hover:shadow-[#316D69] px-14 py-6 mb-6 rounded-lg">
            <img
              className="w-[100%] h-[250px] text-end "
              src={guineabissau}
              alt=""
            />
            <h4 className="font-montserrat font-xl font-bold mt-10 h-10">
              Goverment of Guinea- Bissau
            </h4>
          </div>
          <div className="shadow-2xl bg-white shadow-[#BAB220] h-full hover:shadow-[#316D69]   px-14 py-6 mb-6 rounded-lg">
            <img
              className="w-[100%] h-[250px] text-start "
              src={ugandalogo}
              alt=""
            />
            <h4 className="font-montserrat font-xl h-10 font-bold mt-10 ">
              Goverment of Uganda
            </h4>
          </div>
          <div className="shadow-2xl bg-white shadow-[#BAB220] h-full hover:shadow-[#316D69]   px-14 py-6 rounded-lg">
            <img
              className="w-[100%] h-[250px] text-start "
              src={zanzibarlogo}
              alt=""
            />
            <h4 className="font-montserrat font-xl h-10 font-bold mt-10">
              Goverment of Zanzibar
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
