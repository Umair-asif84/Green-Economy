import React from "react";
import backgroundImage from "../../../src/images/Carbon-Trading-Banner.png";
import Banner from "../BannerForAllPages/Banner";

const BlueCarbonBanner = () => {
  return (
    <Banner
      title="Carbon Trading"
      description="The experts at GEP help businesses reduce emissions; they identify suitable projects, ensure compliance with Article 6.2 standards, develop project plans, and seek certification from recognized carbon standards."
      backgroundImage={backgroundImage}
      buttonText="Read more"
    />
  );
};

export default BlueCarbonBanner;
