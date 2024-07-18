import React from "react";
import img1 from "../../../src/images/The-Goal-of-Our-Native-Forest.jpg";

const ZoomSyntropicExplore = () => {
  return (
    <section>
      <div className="container-fluid  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  mx-auto bg-[#f7f5f2]  dark:bg-gray-800">
        <div className="flex flex-wrap items-center align-middle pt-20 ">
          <div className="w-full lg:w-1/2">
            <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
              <h2 className="mb-4 text-2xl font-bold lg:text-4xl tracking-normal leading-7 font-montserrat font-heading text-[#316D69] dark:text-white">
                <p className="text-[#bab220]">
                  <h2>The Goal of Our Native Forest </h2>
                </p>{" "}
                Conservation Project Is to:
              </h2>
            </div>
            <div className=" gap-8 p-8 lg:p-24">
              <img src={img1} className=" rounded-lg" alt="Tree" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="space-y-4">
              <li className="flex items-center ">
                <div className="px-4">
                  <span className="flex items-center justify-center w-12 h-12 mx-auto text-2xl font-bold text-[#bab220] rounded-full font-heading border-2 border-[#BAB220]">
                    1
                  </span>
                </div>

                <p className="leading-7 text-xl text-[#3c3c3c] font-normal font-poppins dark:text-gray-300">
                  Support people from climate vulnerable communities
                </p>
              </li>
              <li className="flex items-center ">
                <div className="px-4">
                  <span className="flex items-center justify-center w-12 h-12 mx-auto text-2xl font-bold text-[#bab220] rounded-full font-heading border-2 border-[#BAB220]">
                    2
                  </span>
                </div>

                <p className="leading-7 text-xl text-[#3c3c3c] font-normal font-poppins dark:text-gray-300">
                  Ensure that major carbon sinks; mangroves, seagrasses, and
                  tidal marshes are protected
                </p>
              </li>
              <li className="flex items-center ">
                <div className="px-4">
                  <span className="flex items-center justify-center w-12 h-12 mx-auto text-2xl font-bold text-[#bab220] rounded-full font-heading border-2 border-[#BAB220]">
                    3
                  </span>
                </div>

                <p className="leading-7 text-xl text-[#3c3c3c] font-normal font-poppins dark:text-gray-300">
                  Fight deforestation globally
                </p>
              </li>
              <li className="flex items-center ">
                <div className="px-4">
                  <span className="flex items-center justify-center w-12 h-12 mx-auto text-2xl font-bold text-[#bab220] rounded-full font-heading border-2 border-[#BAB220]">
                    4
                  </span>
                </div>

                <p className="leading-7 text-xl text-[#3c3c3c] font-normal font-poppins dark:text-gray-300">
                  Secure ecosystems that contain irrecoverable carbon
                </p>
              </li>
              <li className="flex items-center">
                <div className="px-4">
                  <span className="flex items-center justify-center w-12 h-12 mx-auto text-2xl font-bold text-[#bab220] rounded-full font-heading border-2 border-[#BAB220]">
                    5
                  </span>
                </div>

                <p className="leading-7 text-xl text-[#3c3c3c] font-normal font-poppins dark:text-gray-300">
                  Help countries evaluate potential of nature to combat climate
                  change
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoomSyntropicExplore;
