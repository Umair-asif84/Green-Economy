import React from "react";
import OurStoryBanner from "../../components/OurStory/OurStoryBanner";
import OurVision from "../../components/OurStory/OurVision";
import OurStoryCards2 from "../../components/OurStory/OurStoryCards2";
import OurStoryOrigination from "../../components/OurStory/OurStoryOrigination";
import StateAbout from "../../components/OurStory/StateofGreenEconomy";
import GepComePlay from "../../components/OurStory/GepComePlay";
import HowDoGepExpert from "../../components/OurStory/HowDoGepExpert";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";

const OurStory = () => {
  return (
    <div>
      <OurStoryBanner />
      <StateAbout />
      <OurVision />
      <HowDoGepExpert />
      <GepComePlay />
      <OurStoryOrigination />
      <OurStoryCards2 />
      <ContactFooterUperButton />
    </div>
  );
};

export default OurStory;
