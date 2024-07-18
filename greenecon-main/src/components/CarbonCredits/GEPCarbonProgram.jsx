import React from "react";
import EffectsofDeforestation from "../../../src/images/How-Does-Our-GEP-Carbon-Program-Work.png";
import BulletPointarrow from "../../../src/images/Bullet-Point-arrow.svg";

const GEPCarbonProgram = () => {
  return (
    <div className="relative ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-[20px] md:py-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
            <div className="container text-white  flex flex-col justify-center  h-full">
              <h2 className="text-left text-4xl  font-montserrat  font-bold text-[#BAB220] pb-6">
                How Does Our GEP Carbon{" "}
                <span className="text-[#3c3c3c]">Program Work?</span>
              </h2>

              <div className="mt-14 font-poppins text-lg text-black">
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                        Carbon audit
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p>
                        A magnifying glass over carbon emissions sources. GEP
                        project managers assess your carbon emissions to get an
                        understanding of your current environmental impact.{" "}
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                        Contract & Practice Plan
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p>
                        A handshake symbolizing an agreement. We establish
                        sustainable practices and agreements to reduce
                        emissions.{" "}
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                        Set the baseline and initial soil samples
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p>
                        Soil samples being collected. We measure your starting
                        reference point, and collect soil data for future
                        reference.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                        Selling first year’s pre-certified credits
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p>
                        A credit certificate with a "1st Year" stamp. We help
                        initiate carbon credit sales based on your early
                        efforts.{" "}
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                        Implementation and data collection Sustainable icon
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p>We initiate sustainable practices and gather data. </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                        Credit verification & issuance in Y5 & Y10
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p>
                        A calendar with "Year 5" and "Year 10" marked. After
                        thorough verification, carbon credits are issued.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                        Selling certified credits any icon to highlight
                        “certified”
                      </h6>
                    </li>
                    <li className="font-poppins text-lg pl-8 ">
                      <p>You can then sell certified carbon credits.</p>
                    </li>
                    <br />
                  </div>
                </ul>
              </div>
            </div>
            <div className="pb-[20px] flex flex-col justify-center items-center h-full">
              <div className=" container flex  items-center">
                <img
                  className=" mx-auto "
                  src={EffectsofDeforestation}
                  alt="EffectsofDeforestation"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GEPCarbonProgram;
