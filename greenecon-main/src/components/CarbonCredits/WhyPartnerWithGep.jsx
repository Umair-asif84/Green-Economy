import React from "react";
import NatureBasedAssetsimg from "../../../src/images/Why-Partner-With.png";

const WhyPartnerWithGep = () => {
  return (
    <div className=" flex flex-row mt-[50px] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] sm:mt-[50px] lg:mt-[100px] pb-8">
      <div className="grid grid-cols-1 md:gris-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
        <div className="flex flex-col mr-0 md:mr-0 lg:mr-[50px] xl:mr-[50px]">
          <h2 className="text-2xl font-bold tracking-normal leading-7 text-[#3c3c3c] font-montserrat dark:text-white lg:text-4xl">
            <span className="text-[#316D69]">Why Partner With</span> GEP?
          </h2>
          <p className="text-lg font-normal mt-8 font-poppins leading-7 text-[#3c3c3c]">
            Integrating carbon solutions into your business model presents a{" "}
            <span className="font-extrabold">complimentary revenue system</span>{" "}
            that allows you to have a positive impact on the planet while
            highlighting key advantages. Firstly, it adds
            <span className="font-extrabold">
              {" "}
              additional value to your clients,
            </span>{" "}
            helping them gain a competitive edge by fulfilling their
            environmental responsibilities, particularly in sectors where few
            companies offer carbon opportunities to farmers, positioning you as
            a pioneer. Secondly, this strategic move can help{" "}
            <span className="font-extrabold">grow your market share</span> by
            attracting eco-conscious clients who value sustainability. By
            aligning carbon solutions with your existing offerings, you open up
            new revenue streams for sustainable growth.
          </p>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col mt-6">
              <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                What Do We Offer?
              </h6>
              <ol className="text-lg font-poppins list-decimal ml-10 mt-2  ">
                <li className="mt-2">Carbon offset projects</li>
                <li className="mt-2">Expertise and support </li>
                <li className="mt-2">Competitive edge </li>
              </ol>
            </div>
          </div>
        </div>
        <div className=" items-center gap-8 ">
          <img
            src={NatureBasedAssetsimg}
            className="w-full h-full rounded-lg"
            alt="Tree"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyPartnerWithGep;
