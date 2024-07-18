import React from "react";
import image from "../../../src/images/explore1.jpg";

const WhatIsForestry = () => {
  return (
    <div className="relative p-4 bg-[#f7f5f2] pt-8 dark:bg-gray-800 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="lg:grid lg:grid-flow-row-dense pt-8 pb-8 lg:grid-cols-2 lg:gap-12 px-12  lg:items-center">
        <div className="lg:col-start-2 md:pl-20">
          <h2 className="text-2xl font-bold leading-7  font-montserrat tracking-normal text-[#316D69] dark:text-white sm:leading-9">
            What is Forestry?
          </h2>
          <ul className="mt-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-[#EFEDD1] bg-[#316D69] rounded-md">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-bold leading-7 tracking-normal text-black  font-montserrat dark:text-white">
                    WINDBREAKS
                  </h5>
                  <p className="mt-2 text-lg font-normal leading-7 font-poppins text-[#3c3c3c] ">
                    are plantings of single or multiple rows of trees, shrubs,
                    or both,
                    <br /> that shelter crops, soil, animals, homes, and people
                    from wind, snow,
                    <br /> dust, or odors.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-[#EFEDD1] bg-[#316D69] rounded-md">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-bold leading-6 font-montserrat text-black dark:text-white">
                    RIPANIAN FOREST
                  </h5>
                  <p className="mt-2 text-lg font-normal leading-6 font-poppins text-[#3c3c3c] dark:text-gray-300">
                    are trees, shrubs, and grasses located next to rivers,
                    streams, and
                    <br /> lakes to help protect aquatic resources.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 text-[#EFEDD1] bg-[#316D69] rounded-md">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="w-6 h-6"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-bold leading-6 font-montserrat text-black dark:text-white">
                    FOREST FARMING
                  </h5>
                  <p className="mt-2 text-lg font-normal leading-6 font-poppins text-[#3c3c3c] dark:text-gray-300">
                    grows and protects high-value specialty crops under the
                    forest
                    <br /> canopy, which is adjusted to the correct shade level
                    the crops
                    <br /> prefer.{" "}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
          <img
            src={image}
            alt="illustration"
            className="h-full rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIsForestry;
