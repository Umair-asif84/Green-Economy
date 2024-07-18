import React from "react";
import "./AnimatedCard.css";
import image1 from "../../../src/images/1.jpg";
import image2 from "../../../src/images/2.jpg";
import image3 from "../../../src/images/3.jpg";

const Card = ({ color, title, imageSrc, description }) => {
  return (
    <div className=" ">
      <div className="card" style={{ "--clr": color }}>
        <div className="img-box ">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="content">
          <h2 className="text-2xl font-bold text-[#3c3c3c] font-montserrat font">
            {title}
          </h2>

          <p className="font-poppins text-lg text-[#3c3c3c]"> {description}</p>
          <a href="/about" className="rounded">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

function AnimatedCard() {
  return (
    <div className=" container_c animated_container mx-auto px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] ">
      <Card
        color="#316D69"
        title="Nature- Based Solutions "
        imageSrc={image1}
        description="The  Nature-Based Solutions utilize assets like sustainable forestry, blue carbon, and climate-smart agriculture for a sustainable future."
      />
      <Card
        color="#BAB220"
        title="Renewable Energy"
        imageSrc={image2}
        description="GEP promotes cost-effective wind and solar solutions as vital renewable energy sources in the fight against climate change. "
      />
      <Card
        color="#316D69"
        title="Waste Management "
        imageSrc={image3}
        description="Anaerobic digestion is a sustainable process converting organics to efficient gas and nutrient-rich digestate, supporting waste management."
      />
      <Card
        color="#316D69"
        title="Carbon Credits  "
        imageSrc={image3}
        description="GEP specializes in carbon trading that transforms CO2 into an economic commodity, driving sustainability by reducing global GHG emissions."
      />
    </div>
  );
}
export default AnimatedCard;
