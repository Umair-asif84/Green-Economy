import React from "react";
import Powerof from '../../../src/images/The-power-of-renewables.png';
import Powerof1 from '../../../src/images/The-power-of-renewables-1.png';

const StatsPowerrenewable = () => {
  return (
    <div className="relative container-fluid py-12  bg-[#f7f5f2] dark:bg-gray-800 py-26  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 gap-8 lg:items-center">
          <div className="ml-auto lg:col-start-2 ">
            <h2 className="mt-2 text-4xl font-bold leading-7 font-montserrat tracking-normal text-[#3c3c3c] dark:text-white sm:text-3xl sm:leading-9">
              The Power of Renewables
            </h2>
            <p className="mt-4 text-lg leading-7 font-normal font-poppins text-[#3c3c3c] dark:text-gray-300">
              The Power of Renewables We have to make the banner the same way
              it's made on this page, it should keep changing this way.
            </p>

            <div>
              <h6 className="mt-6 text-2xl font-bold font-montserrat leading-7 tracking-normal text-[#bab220]">
                Here’s the content.
              </h6>

              <ul className="gap-6   ">
                <li className="mt-4 ">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 border-2 border-[#bab220] mt-1 rounded-full dark:text-green-500 dark:bg-transparent">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="#bab220"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-lg font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                      Solar energy employed the most of any renewable energy
                      source; 316,675 people at the end of 2020.
                    </span>
                  </div>
                </li>
                <li className="mt-2 ">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 border-2 border-[#bab220] mt-1 rounded-full dark:text-green-500 dark:bg-transparent">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="#bab220"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-lg font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                      About 30% of the world's electricity comes from
                      renewables, including solar, wind, hydropower, and among
                      others.
                    </span>
                  </div>
                </li>
                <li className="mt-2 ">
                  <div className="flex">
                    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 border-2 border-[#bab220] mt-1 rounded-full dark:text-green-500 dark:bg-transparent">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="#bab220"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base font-normal font-poppins leading-7 text-[#3c3c3c] dark:text-gray-200">
                      About 79% of the nation's energy comes from fossil fuels,
                      and 12.5% from renewable sources.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative mt-10  relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
                <img
                  className="w-full h-full rounded-lg  "
                  src={Powerof1}
                  alt="2"
                />
              
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPowerrenewable;
