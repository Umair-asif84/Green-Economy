import React from "react";
import EffectsofDeforestation from "../../../src/images/BENEFITS-FOR-FARMERS.png";

const BenefitsforFarmers = () => {
  return (
    <div className="relative ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-[20px] md:py-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
            <div className="pb-[20px] flex flex-col justify-center items-center h-full">
              <div className=" container flex  items-center">
                <img
                  className=" mx-auto "
                  src={EffectsofDeforestation}
                  alt="EffectsofDeforestation"
                ></img>
              </div>
            </div>
            <div className="container text-white  flex flex-col justify-center  h-full">
              <h2 className="text-left text-4xl  font-montserrat  font-bold text-[#316D69] pb-6">
                Benefits for
                <span className="text-[#3c3c3c]"> Farmers</span>
              </h2>

              <div className="mt-8 font-poppins text-lg text-black">
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <div className="px-4">
                        <span className="flex items-center justify-center w-8 h-8 mx-auto text-lg font-bold text-[#3c3c3c] rounded-full font-heading border-4 border-[#316D69]">
                          1
                        </span>
                      </div>
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                        Higher quality soil:
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-14 ">
                      <p>
                        Improved soil quality results in more productive crops,
                        enhancing overall food production, and agricultural
                        sustainability.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <div className="px-4">
                        <span className="flex items-center justify-center w-8 h-8 mx-auto text-lg font-bold text-[#3c3c3c] rounded-full font-heading border-4 border-[#316D69]">
                          2
                        </span>
                      </div>
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                        Lower input costs:
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-14 ">
                      <p>
                        Effective farming practices can reduce the expenses
                        linked with pesticides, water, and fertilizers, leading
                        to saving costs.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <div className="px-4">
                        <span className="flex items-center justify-center w-8 h-8 mx-auto text-lg font-bold text-[#3c3c3c] rounded-full font-heading border-4 border-[#316D69]">
                          3
                        </span>
                      </div>
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                        Higher profits in the long term:
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-14 ">
                      <p>
                        Investing in sustainable agriculture can provide greater
                        profits over time due to reduced resource depletion, and
                        increased productivity.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <div className="px-4">
                        <span className="flex items-center justify-center w-8 h-8 mx-auto text-lg font-bold text-[#3c3c3c] rounded-full font-heading border-4 border-[#316D69]">
                          4
                        </span>
                      </div>
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                        Access to strong community and knowledge:
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-14 ">
                      <p>
                        Accessing valuable agricultural knowledge and engaging
                        with a supportive farming community can lead to informed
                        decisions.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsforFarmers;
