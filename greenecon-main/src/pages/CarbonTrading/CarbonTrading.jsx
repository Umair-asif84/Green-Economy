import React from "react";
import BlueCarbonBanner from "../../components/CarbonTrading/BlueCarbonBanner";
import PioneeringInitiatives from "../../components/CarbonTrading/PioneeringInitiatives";
import BlueCarbonGepPlay from "../../components/CarbonTrading/BlueCarbonGepPlay";
import KeyPoint from "../../components/CarbonTrading/KeyPoint";
import DrivingForcesBehind from "../../components/CarbonTrading/DrivingForcesBehind";
import WhyCarbonCredits from "../../components/CarbonTrading/WhyCarbonCredits";
import ClimateFriendlyInvestment from "../../components/CarbonTrading/ClimateFriendlyInvestment";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";

const CarbonTrading = () => {
  return (
    <div>
      <BlueCarbonBanner />
      <PioneeringInitiatives />
      <BlueCarbonGepPlay />
      <KeyPoint />
      <DrivingForcesBehind />
      <WhyCarbonCredits />
      <ClimateFriendlyInvestment />
      <ContactFooterUperButton />
    </div>
  );
};

export default CarbonTrading;
