import React from "react";
import img1 from "../../../src/images/identification-icon.png";
import img2 from "../../../src/images/valuation-icon.png";
import img3 from "../../../src/images/certification-icon.png";

function InnerCard(props) {
  return (
    <div className="py-[20px] bg-[#EFEDD1] xs:mb-[10px] rounded-md shadow-lg text-center flex flex-col items-center justify-center shadow-[#BAB220]">
      <div className="xs:px-[15px]">
        <img src={props.image} alt="icon" className="mx-auto mb-4" />{" "}
        {/* Center the image */}
        <h3 className="xs:mt-[8px] text-[18px] text-[#316D69] font-[500]">
          {props.heading}
        </h3>
        <p className="xs:mt-[8px] text-[14px] md:text-[16px] lg:text-[18px] font-[400] lg:px-[20px]">
          {props.text}
        </p>
      </div>
    </div>
  );
}

function OurStoryCards2() {
  const datials = [
    {
      image: img1,
      heading: "Project Identification ",
      text: "Our proficiency lies in assessment (identification) of carbon credit opportunities. The experts utilize a range of carbon mitigation approaches, including renewable energy, forestry, and sustainable agriculture. The solutions that our experts provide aligns with The Green Economy’s objectives, paving the path for sustainable initiatives.",
    },
    {
      image: img2,
      heading: "Project Valuation",
      text: "At Green Economy, our experts have a comprehensive approach toward project valuation, ensuring it aligns with internationally recognized carbon credit standards such as Gold Standard, and Verra. They precisely evaluate the carbon credit potential of every project within these standards, and then integrate carbon credit generation into your projects. ",
    },
    {
      image: img3,
      heading: "Certification Support",
      text: "The Green Economy Partnership supports carbon certification from drafting project design documents to the validation, registration, verifications, and issuances milestones.",
    },
  ];

  return (
    <div className=" xs:py-[10px] -mt-[30px]">
      <div className=" gap-y-[20px] lg:gap-y-0 xs:relative lg:relative  px-[30px] md:px[60] lg:px-[80px] xl:px-[100px]  gap-x-[20px] grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:-mt-16 md:-mt-[68px] xs:-mt-[70px] ">
        {datials.map((el) => (
          <InnerCard image={el.image} heading={el.heading} text={el.text} />
        ))}
      </div>
    </div>
  );
}
export default OurStoryCards2;
