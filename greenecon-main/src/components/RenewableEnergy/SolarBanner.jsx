import React from "react";
import banner1 from "../../../src/images/Renewable-Energy-banner.jpg";
import Banner from "../BannerForAllPages/Banner";
function SolarBanner() {
  return (
    <Banner
      title="RenewableEnergy"
      description="GEP supports wind and solar energy incentives within local communities, helping you contribute to a sustainable future. Our initiatives empower local communities, ensuring a sustainable, cost-efficient, and greener future."
      backgroundImage={banner1}
      buttonText="Contact Us"
    />
  );
}

export default SolarBanner;
