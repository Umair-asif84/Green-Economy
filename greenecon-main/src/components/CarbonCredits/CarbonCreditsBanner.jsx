import React from "react";
import Banner from "../BannerForAllPages/Banner";
import img1 from "../../../src/images/Carbon-Trading-Banner-1.png";

const CarbonCreditsBanner = () => {
  return (
    <div>
      <Banner
        title="Offset Your Carbon Emissions Today! "
        description="By buying carbon credits, you are not only reducing your emissions but supporting local farmers to reach climate goals.
    "
        buttonText="Read More"
        backgroundImage={img1}
      />
    </div>
  );
};

export default CarbonCreditsBanner;
