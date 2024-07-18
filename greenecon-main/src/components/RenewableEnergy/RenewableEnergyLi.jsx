import React from "react";
import RenewableEnergy from "../../../src/images/What-is-Renewable-Energy.png";
import BulletPointtwo from "../../../src/images/Bullet-Point-two.svg";
import BulletPointone from "../../../src/images/BulletPointone.svg";
import BulletPointhree from "../../../src/images/BulletPointthree.svg";
import BulletPointfour from "../../../src/images/BulletPointfour.svg";
import BulletPointfive from "../../../src/images/BulletPointfive.svg";
import BulletPointsix from "../../../src/images/BulletPointsix.svg";

const RenewableEnergyLi = () => {
  return (
    <div className="relative ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-[20px] md:py-[20px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px] pt-[50px]">
            <div className="pb-[20px] flex flex-col justify-center items-center h-full">
              <div className=" container flex  items-center">
                <img
                  className=" mx-auto "
                  src={RenewableEnergy}
                  alt="EffectsofDeforestation"
                ></img>
              </div>
            </div>
            <div className="container text-white  flex flex-col justify-center  h-full">
              <h2 className=" text-left text-[#316D69] font-montserrat tracking-normal leading-9 mb-6 text-4xl font-bold">
                What{" "}
                <span className="text-[#BAB220]">is Renewable Energy ?</span>
              </h2>
              <p className="text-[#3C3C3C] text-lg font-normal font-poppins ">
                In GEP’s pursuit of a sustainable energy future, wind
                generators, and solar panels are playing a crucial role. They
                offer a prominent solution to combat climate change. GEP
                embraces solar and wind energy as cost-effective renewable
                energy resources. According to the latest report by the
                International Renewable Energy Agency (IREA), unsubsidized
                renewable energy is now the cheapest source to generate energy.
                These renewable resources are also gaining momentum because:
              </p>
              <div className="mt-8 font-poppins text-lg text-black">
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 mt-1"
                        src={BulletPointone}
                        alt="location"
                      />
                      Wind power will never run out. Due to this governments are
                      investing in such renewable energy sources, as 26% of the
                      electricity is being made by these clean energy sources.
                    </li>

                    <br />
                  </div>
                </ul>
                <ul className=" flex flex-col gap-2">
                  <div className="	">
                    <li className="flex gap-3 align-middle">
                      <img
                        className="w-6 h-6 mt-1 "
                        src={BulletPointtwo}
                        alt="location"
                      />
                      No emission of greenhouse gasses as wind turbines do not
                      require fossil fuels to work, energy is produced with no
                      harmful impact to the environment.{" "}
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
                      Offshore wind turbines are energy efficient, and can
                      generate 18 times more wind energy than the current
                      demand.
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
                        Solar panels allow the individuals and communities to
                        generate their electricity independently, without
                        relying on centralized grids.
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
                        Solar panels are cost-effective and require no or little
                        maintenance.{" "}
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
                        The power generated by solar panels is eco-friendly, as
                        no carbon emissions or pollution is produced.
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

export default RenewableEnergyLi;
