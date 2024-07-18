import React from "react";
import Card1 from "../../../src/images/thefact1.svg";
import Card2 from "../../../src/images/thefact2.svg";
import Card3 from "../../../src/images/thefact3.svg";
import Grass from "../../../src/images/Rabbit-&-Grass.png";

const NativeForestConservationAndFacts = () => {
  const factdata = [
    {
      id: 1,
      img: Card1,
      number: "2030",
      smallheading: "deadline",
      description:
        "According to IPBES, 75% of the Earth’s surface has been altered by human activities, including 85% of the wetlands.",
    },
    {
      id: 2,
      img: Card2,
      number: ">30%",
      smallheading: "of global action",
      description:
        "Protecting natural ecosystems could provide 30% of the solution to combat climate change. ",
    },
    {
      id: 3,
      img: Card3,
      number: "only 3%",
      smallheading: "of global climate funding",
      description:
        "Tropical forests cover approximately 10% of the Earth’s land mass, but are home to at least half living species. ",
    },
  ];
  return (
    <div className="flex flex-col mt-[100px] mb-[50px] text-center items-center px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="flex flex-col items-center text-center">
        <h2 className=" text-4xl font-bold text-center tracking-normal leading-7 lg:text-4xl font-montserrat text-[#316D69] dark:text-white">
          <span className="text-[#bab220]">A. </span>
          Native Forest Conservation
        </h2>
        <span className="border-2 border-[#3c3c3c] w-[50%] mt-4"> </span>
        <p className="text-lg mt-4 text-[#3c3c3c] font-normal font-poppins leading-7 ">
          In the time it takes you to read this sentence, hundreds of trees have
          been cut down.{" "}
        </p>
      </div>
      <div className="flex flex-col mt-6">
        <h2 className=" text-2xl font-bold text-center tracking-normal leading-7 lg:text-4xl font-montserrat text-[#316D69] dark:text-white">
          The Facts{" "}
        </h2>
        <div className="cards flex gap-4 mt-16">
          {factdata.map((item) => (
            <div
              className="card-inner flex flex-row  border-4 border-[#316D69]  p-8"
              key={item.id}
            >
              <div className="cardtext flex flex-col items-center ">
                <img
                  src={item.img}
                  alt="LetNatureNurture"
                  className="w-[30%] h-[30%]"
                />
                <h4 className="text-2xl text-[#3c3c3c] font-montserrat font-semibold leading-9 mt-4">
                  {item.number}
                </h4>
                <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat">
                  {item.smallheading}
                </h6>

                <p className="text-lg mt-4 text-[#3c3c3c] font-normal font-poppins leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img src={Grass} alt="Grass" className="w-full h-full mt-8" />
      </div>
    </div>
  );
};

export default NativeForestConservationAndFacts;
