import React from "react";
import CertificationIcon from "../../../src/images/Certification.svg";
import VerificationIcon from "../../../src/images/VERIFICATION.svg";
import MeasurabilityIcon from "../../../src/images/MEASURABILITY.svg";
import PermanenceIcon from "../../../src/images/PERMANENCE.svg";
import BenefitsIcon from "../../../src/images/CO-BENEFITS.svg";
import SustainabilityIcon from "../../../src/images/SUSTAINABILITY.svg";

const CriteriaforSelecting = () => {
  const CriteriaData = [
    {
      id: 1,
      icon: CertificationIcon,
      title: "Certification ",
      desc: "Projects must be certified by recognized international or national standards, such as VERRA or Gold Standard.",
    },
    {
      id: 2,
      icon: VerificationIcon,
      title: "Verification  ",
      desc: "Emissions removal should be proven to have genuinely taken place through a rigorous verification process.    ",
    },
    {
      id: 3,
      icon: MeasurabilityIcon,
      title: "Measurability  ",
      desc: "Emissions removal should be measurable, allowing for precise quantification of the carbon reduction achieved.",
    },
    {
      id: 4,
      icon: PermanenceIcon,
      title: "Permanence ",
      desc: "Carbon credits represent the permanent removal of emissions, providing a long-term solution to combat climate change.  ",
    },
    {
      id: 5,
      icon: BenefitsIcon,
      title: "Co-Benefits    ",
      desc: "Offset projects should have co-benefits, delivering additional positive impacts beyond emissions reduction.  ",
    },
    {
      id: 6,
      icon: SustainabilityIcon,
      title: "Sustainability ",
      desc: "Carbon credits should be permanent, ensuring the sustained removal of greenhouse gases from the atmosphere. ",
    },
  ];
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mx-auto">
      <h2 className="text-center text-4xl  font-montserrat  font-bold text-[#316D69] pb-6">
        Criteria for Selecting High-Standard Carbon Offset Project{" "}
      </h2>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {CriteriaData.map((data) => (
          <div
            className="inner-card border-2 border-[#316D69] rounded-lg shadow-2xl shadow-[#316D69] pl-6 pr-6 pb-12"
            key={data.id}
          >
            <div className="cards-data text-left mt-10 ">
              <img src={data.icon} alt="" className="w-[20%] h-[20%] " />
              <h6 className="uppercase text-lg mt-6 text-[#316D69] font-bold	font-montserrat">
                {data.title}
              </h6>
              <p className="text-[14px] md:text-[16px] mt-4 lg:text-[18px]  leading-[24px]   font-poppins text-lg ">
                {data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriteriaforSelecting;
