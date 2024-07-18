import React from "react";
import banner2 from "../../../src/images/Challenges-Banner.jpg";
import Banner from "../BannerForAllPages/Banner";

function ChallengesBanner() {
  return (
    <div>
      <Banner
        backgroundImage={banner2}
        title="Challenges and Solutions"
        description="Tag Line for Challenges and Solutions"
        buttonText="Register Your Interest"
      />
    </div>
  );
}

export { ChallengesBanner };
