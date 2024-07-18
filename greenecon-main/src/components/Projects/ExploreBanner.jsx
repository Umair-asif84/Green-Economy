import React from "react";
import banner from "../../../src/images/Work-With-Nature-and-Nature-Will-Work-for-You.png";
import Banner from "../BannerForAllPages/Banner";

const ExploreBanner = () => {
  return (
    <>
      <Banner
        title="Work With Nature and Nature Will Work for You."
        description="This is Explore Projects."
        backgroundImage={banner}
        buttonText="Contact Us"
      />
    </>
  );
};

export default ExploreBanner;
