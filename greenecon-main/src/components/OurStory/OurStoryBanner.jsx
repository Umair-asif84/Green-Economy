import React from "react";
import Banner from "../BannerForAllPages/Banner";
import banner2 from "../../../src/images/About-Us-Banner.jpg";

const OurStoryBanner = () => {
  return (
    <div>
      <Banner
        title="About Us"
        description="its description"
        backgroundImage={banner2}
        buttonText="Contact Us"
      />
    </div>
  );
};

export default OurStoryBanner;
