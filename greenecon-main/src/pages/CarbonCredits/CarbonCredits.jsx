import React from "react";
import CarbonCreditsBanner from "../../components/CarbonCredits/CarbonCreditsBanner";
import GEPCarbonProgram from "../../components/CarbonCredits/GEPCarbonProgram";
import CriteriaforSelecting from "../../components/CarbonCredits/CriteriaforSelecting";
import WhyPartnerWithGep from "../../components/CarbonCredits/WhyPartnerWithGep";
import BenefitsforFarmers from "../../components/CarbonCredits/BenefitsforFarmers";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";

const CarbonCredits = () => {
  return (
    <div>
      <CarbonCreditsBanner />
      <GEPCarbonProgram />
      <CriteriaforSelecting />
      <WhyPartnerWithGep />
      <BenefitsforFarmers />
      <ContactFooterUperButton />
    </div>
  );
};

export default CarbonCredits;
