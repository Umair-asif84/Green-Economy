import React from "react";
import banner from "../../../src/images/Contact-us.png";
import Banner from "../BannerForAllPages/Banner";

const MainBanner = () => {
  return (
    <>
      <Banner
        title="Welcome to Our Website"
        description="Discover amazing content here!"
        backgroundImage={banner}
        buttonText="Learn More"
      />
    </>
  );
};

export default MainBanner;
