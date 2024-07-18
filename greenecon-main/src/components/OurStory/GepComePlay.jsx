import React from "react";
import EffectsofDeforestation from "../../../src/images/ourstory-gepcomeplay.png";
import BulletPointarrow from "../../../src/images/Bullet-Point-arrow.svg";

function GepComePlay() {
  return (
    <div className="relative ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-[20px] md:py-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
            <div className="container text-white  flex flex-col justify-center  h-full">
              <h2 className="text-left text-4xl  font-montserrat  font-bold text-[#BAB220] pb-6">
                Where does GEP Come into Play?
              </h2>
              <div className="mt-14 flex flex-wrap flex-col font-poppins text-lg text-black">
                <div className="flex flex-col">
                  <ul className=" flex flex-col gap-2">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6"
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        A partnership is formed through the framework Emission
                        Reduction Agreement (FERA) between GEP and the
                        government agency.
                      </p>
                    </li>

                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        GEP brings in expertise and resources required to
                        implement the project, including strategies to reduce
                        greenhouse gas emissions and carbon emissions.
                      </p>
                    </li>

                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        Then, GEP would identify a suitable project (e.g.
                        renewable energy project, reforestation project) that
                        can generate CO2 credits, leading to the reduction of
                        carbon footprint.
                      </p>
                    </li>

                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        Project is in alignment with Article 6.2 which requires
                        the emission reductions to be real, permanent, and
                        measurable, making sure that they are credible in the
                        carbon credit market.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <ul className=" flex flex-col gap-2">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        Time, budget, and expected outcomes of the projects are
                        developed, ensuring cost-effective carbon credit
                        trading.
                      </p>
                    </li>

                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        Next step would be to apply for certification from a
                        recognized carbon standard such as the Gold Standard.
                      </p>
                    </li>

                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        Under the Article 6.2 of Paris Agreement, the government
                        can sell off their carbon credits to other organizations
                        or governments. These are called ITMOs or
                        internationally Transferred Mitigation Outcomes. The
                        final step is to auction these off during COP28 in Dubai{" "}
                      </p>
                    </li>

                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 "
                        src={BulletPointarrow}
                        alt="location"
                      />
                      <p>
                        To ensure a successful auction, our field experts have
                        entered into Bilateral Agreements with different
                        companies who’ve expressed their interest in purchasing
                        our ITMOs, leading to an effective carbon credit market.{" "}
                      </p>
                    </li>
                  </ul>
                </div>
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
}

export default GepComePlay;
