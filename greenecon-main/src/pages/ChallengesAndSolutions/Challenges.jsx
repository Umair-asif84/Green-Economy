import React from "react";
import { ChallengesBanner } from "../../components/Challanges/ChallengesBanner";
import DeforestationClimate from "../../components/Challanges/Deforestation&Climate";
import WhatISDeforestation from "../../components/Challanges/WhatISDeforestation";
import WhatIsClimateChange from "../../components/Challanges/WhatISClimateChange";
import SolutionHighStandardCarbon from "../../components/Challanges/SolutionHighStandardCarbon";
import HowCarbonOffsetsWork from "../../components/Challanges/HowCarbonOffsetsWork";
import EffectsOfDeferestionCards from "../../components/Challanges/EffectsOfDeferestionCards";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";

const Challanges = () => {
  return (
    <div>
      <ChallengesBanner />
      <DeforestationClimate />
      <WhatISDeforestation />
      <EffectsOfDeferestionCards />
      <WhatIsClimateChange />
      <SolutionHighStandardCarbon />
      <HowCarbonOffsetsWork />
      <ContactFooterUperButton />
    </div>
  );
};

export default Challanges;
