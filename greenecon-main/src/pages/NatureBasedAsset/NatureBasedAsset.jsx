import React from "react";
import ForestryBanner from "../../components/NatureBasedAsset/ForestryBanner";
import NatureBasedAssets from "../../components/NatureBasedAsset/NatureBasedAssets";
import NatureBaseSolutionSecond from "../../components/NatureBasedAsset/NatureBaseSolutionSecond";
import GovermentBiodiversity from "../../components/NatureBasedAsset/GovermentBiodiversity";
import UnSecretaryQuote from "../../components/NatureBasedAsset/UnSecretaryQuote";
import HowStatisticsValidate from "../../components/NatureBasedAsset/HowStatisticsValidate";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";

const NatureBasedAsset = () => {
  return (
    <div>
      <ForestryBanner />
      <NatureBasedAssets />
      <NatureBaseSolutionSecond />
      <GovermentBiodiversity />
      <UnSecretaryQuote />
      <HowStatisticsValidate />
      <ContactFooterUperButton />
    </div>
  );
};

export default NatureBasedAsset;
