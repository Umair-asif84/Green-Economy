import React from "react";
import EffectsofDeforestation from "../../../src/images/Where-does-GEP-Come-into-Play.png";
import BulletPointtwo from "../../../src/images/Bullet-Point-two.svg";
import BulletPointone from "../../../src/images/BulletPointone.svg";
import BulletPointhree from "../../../src/images/BulletPointthree.svg";
import BulletPointfour from "../../../src/images/BulletPointfour.svg";
import BulletPointfive from "../../../src/images/BulletPointfive.svg";
import BulletPointsix from "../../../src/images/BulletPointsix.svg";

const BlueCarbonGepPlay = () => {
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
              <h2 className="text-left text-4xl  font-montserrat  font-bold text-[#BAB220] pb-6">
                Where does GEP Come into Play?
              </h2>
              <div className="mt-14 font-poppins text-lg text-black">
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle ">
                      <img
                        className="w-6 h-6 mt-1 "
                        src={BulletPointone}
                        alt="location"
                      />
                      A partnership is formed through the Framework Emission
                      Reduction Agreement (FERA) between GEP and the government
                      agency. GEP brings in expertise and resources required to
                      implement the project, including strategies to reduce
                      greenhouse gas emissions and carbon emissions.
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 mt-1"
                        src={BulletPointtwo}
                        alt="location"
                      />
                      Then, GEP experts identify a suitable project (e.g.
                      renewable energy project, reforestation project) that can
                      generate CO2 credits, leading to the reduction of carbon
                      footprint. They also ensure that the project is in
                      alignment with Article 6.2 which requires the emission
                      reductions to be real, permanent, and measurable, making
                      sure that they are credible in the carbon credit market.
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 mt-1"
                        src={BulletPointhree}
                        alt="location"
                      />
                      Time, budget, and expected outcomes of the projects are
                      developed, ensuring cost-effective carbon credit trading.
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 mt-1"
                        src={BulletPointfour}
                        alt="location"
                      />
                      <p>
                        They apply for certification from a recognized carbon
                        standard such as the Gold Standard.
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 mt-1"
                        src={BulletPointfive}
                        alt="location"
                      />
                      <p>
                        Under the Article 6.2 of Paris Agreement, the government
                        can sell off their carbon credits to other organizations
                        or governments. These are called ITMOs or
                        internationally Transferred Mitigation Outcomes. The
                        final step is to auction these off during COP28 in
                        Dubai.{" "}
                      </p>
                    </li>
                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 mt-1"
                        src={BulletPointsix}
                        alt="location"
                      />
                      <p>
                        To ensure a successful auction, our field experts have
                        entered into Bilateral Agreements with different
                        companies who’ve expressed their interest in purchasing
                        our ITMOs, leading to an effective carbon credit market.
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

export default BlueCarbonGepPlay;
