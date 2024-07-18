import React from "react";
import BulletPointtwo from "../../../src/images/Bullet-Point-two.svg";
import BulletPointone from "../../../src/images/BulletPointone.svg";
import BulletPointthree from "../../../src/images/BulletPointthree.svg";
import BulletPointfour from "../../../src/images/BulletPointfour.svg";
import BulletPointfive from "../../../src/images/BulletPointfive.svg";
import BulletPointsix from "../../../src/images/BulletPointsix.svg";

function BenefitsofAnaerobic() {
  return (
    <div className="  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[50px] pb-[100px]">
      <h2 className="text-2xl md:text-4xl text-center text-[#316D69] leading-7 tracking-normal font-montserrat font-bold mb-4">
        The Benefits of Turning Waste to Energy
      </h2>
      <div className="flex justify-evenly mt-14">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-evenly gap-8">
          <li className="flex  gap-4">
            <img src={BulletPointone} className="h-6 w-6" alt="" />
            <h6 className=" text-lg text-[#3c3c3c] font-bold	font-montserrat">
              Reduced landfill waste
            </h6>
          </li>
          <li className="flex gap-4">
            <img src={BulletPointtwo} className="h-6 w-6" alt="" />
            <h6 className=" text-lg text-[#3c3c3c] font-bold	font-montserrat">
              Greenhouse gas emission reduction
            </h6>
          </li>

          <li className="flex  gap-4 ">
            <img src={BulletPointthree} className="h-6 w-6" alt="" />
            <h6 className=" text-lg text-[#3c3c3c] font-bold	font-montserrat">
              Clean energy generation
            </h6>
          </li>
          <li className="flex gap-4">
            <img src={BulletPointfour} className="h-6 w-6" alt="" />
            <h6 className=" text-lg text-[#3c3c3c] font-bold	font-montserrat">
              Resource conservation
            </h6>
          </li>

          <li className="flex gap-4">
            <img src={BulletPointfive} className="h-6 w-6" alt="" />
            <h6 className=" text-lg text-[#3c3c3c] font-bold	font-montserrat">
              Waste management integration
            </h6>
          </li>
          <li className="flex gap-4">
            <img src={BulletPointsix} className="h-6 w-6" alt="" />
            <h6 className=" text-lg text-[#3c3c3c] font-bold	font-montserrat">
              Improved air quality
            </h6>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BenefitsofAnaerobic;
