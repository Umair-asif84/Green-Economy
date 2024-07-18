import React from "react";
import img1 from "../../../src/images/agro.jpg";
import img2 from "../../../src/images/6.jpg";
import img3 from "../../../src/images/plantation.jpg";
import img5 from "../../../src/images/background.jpg";

const AgroForestry = () => {
  return (
    <div className="relative container-fluid py-12  bg-[#f7f5f2] dark:bg-gray-800 py-26  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center">
          <div className="ml-auto lg:col-start-2 ">
            <p className="text-base font-semibold font-poppins leading-7 text-[#bab220] uppercase">
              Forestry
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-7 font-montserrat tracking-normal text-[#3c3c3c] dark:text-white sm:text-3xl sm:leading-9">
              Agroforestry
            </h2>
            <p className="mt-4 text-lg leading-7 font-normal font-poppins text-[#3c3c3c] dark:text-gray-300">
              Agroforestry is a land use management system that combines trees
              with crops and or livestock on the same land.
              <br />
              The purpose is to increase productivity, reduce environmental
              degradation and enhance socio-economic benefits for the land
              users. Examples include agroforestry systems such as alley
              cropping, silvopasture, and windbreaks.{" "}
            </p>
            <a
              href="#"
              className="inline-flex items-center font-montserrat justify-center px-[25px] py-3 mt-6 text-white bg-[#316D69] font-semibold hover:bg-transparent hover:border-2 hover:border-[#316D69] hover:text-[#316D69] transition duration-300 rounded-lg"
            >
              Find out more
            </a>
            <h2 className="mt-14 text-2xl font-bold font-montserrat leading-7 tracking-normal text-[#3c3c3c] dark:text-white sm:text-3xl sm:leading-9">
              Forest Assets
            </h2>
            <p className="mt-4 text-lg leading-7 font-poppins text-[#3c3c3c] font-normal dark:text-gray-300">
              Forest assets refer to the resources, benefits, and values derived
              from forests, including:
            </p>{" "}
            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                    Timber and non-timber forest products (NTFPs)
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                    Ecosystem services such as water regulation, carbon
                    sequestration, and soil conservation
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                    Biodiversity and wildlife habitat
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                    Recreational opportunities and tourism
                  </span>
                </div>
              </li>
              <li className="mt-6 lg:mt-0">
                <div className="flex">
                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-4 text-base font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                    Cultural and spiritual values
                  </span>
                </div>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center font-montserrat justify-center px-[25px] py-3 mt-6 text-white bg-[#316D69] font-semibold hover:bg-transparent hover:border-2 hover:border-[#316D69] hover:text-[#316D69] transition duration-300 rounded-lg"
            >
              Find out more
            </a>
          </div>
          <div className="relative mt-10  relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start">
                <img
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src={img2}
                  alt="2"
                />
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src={img1}
                  alt="1"
                />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img
                  className="w-24 rounded-lg shadow-lg md:w-40"
                  width="170"
                  src={img3}
                  alt="3"
                />
                <img
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src={img5}
                  alt="2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroForestry;
