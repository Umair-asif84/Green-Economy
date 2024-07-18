import React from "react";
import EffectsofDeforestation from "../../../src/images/challenges-effectsofdeforestation.png";
import BulletPointarrow from "../../../src/images/Bullet-Point-arrow.svg";

function EffectsOfDeferestionCards() {
  return (
    <div className="relative ">
    <div>
      <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-[20px] md:py-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
          <div className="container text-white  flex flex-col justify-center  h-full">
            <h2 className="text-left text-4xl  font-montserrat  font-bold text-[#BAB220] pb-6">
              Effects of Deforestation
            </h2>
            <p className="text-[#3C3C3C] text-base font-normal font-poppins ">
              Here is how deforestation negatively affects us and our
              surroundings:
            </p>
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
                      Climate Change:
                    </h6>
                  </li>
                  <li className="font-poppins text-lg pl-8 ">
                    <p>
                      Through deforestation, stored carbon dioxide from trees
                      is released into the atmosphere, increasing greenhouse
                      gasses and global warming.{" "}
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
                      Soil Erosion:
                    </h6>
                  </li>
                  <li className="font-poppins text-lg pl-8 ">
                    <p>
                      Soil erosion is the accelerated removal of topsoil
                      through various agents like rainfall, affecting
                      agricultural productivity.{" "}
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
                      Ecological Disturbance:
                    </h6>
                  </li>
                  <li className="font-poppins text-lg pl-8 ">
                    <p>
                      It also disrupts the ecosystems and many species of
                      animals become extinct or lose their natural habitat,
                      which results in the reduction of biodiversity.
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
                      Impact on Water Cycle:
                    </h6>
                  </li>
                  <li className="font-poppins text-lg pl-8 ">
                    <p>
                      Deforestation impacts water cycles, leading to frequent
                      floods, droughts and less available water resources for
                      drinking.{" "}
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
                      Loss of Carbon Sinks :
                    </h6>
                  </li>
                  <li className="font-poppins text-lg pl-8 ">
                    <p>
                      Forests are the most important carbon sinks,
                      deforestation removes their capacity to absorb carbon
                      dioxide from the atmosphere, exacerbating climate
                      change.{" "}
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
                      Social Impact:
                    </h6>
                  </li>
                  <li className="font-poppins text-lg pl-8 ">
                    <p>
                      Deforestation has a direct impact on the local
                      inhabitants, and increased conflicts over natural
                      resources.
                    </p>
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
}

export default EffectsOfDeferestionCards;
