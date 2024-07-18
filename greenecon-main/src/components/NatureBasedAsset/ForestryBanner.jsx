import React from "react";
import banner from "../../../src/images/f2.jpg";
import Banner from "../BannerForAllPages/Banner";

const ForestryBanner = () => {
  return (
    <>
      <Banner
        title="State of Green-Economy"
        description="Assets like sustainable forestry, blue carbon, and climate-smart agriculture offer a powerful ally in the fight against climate change. Our experts help you reduce your carbon footprint through sustainable forest management."
        backgroundImage={banner}
        buttonText="Plant a Tree"
      />
    </>
  );
};

export default ForestryBanner;
