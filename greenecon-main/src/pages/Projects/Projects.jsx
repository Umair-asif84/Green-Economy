import React from "react";
import ExploreBanner from "../../components/Projects/ExploreBanner";
import SyntropicFarming from "../../components/Projects/SyntropicFarming";
import ZoomSyntropicExplore from "../../components/Projects/ZoomSyntropicExplore";
import LetNatureNurture from "../../components/Projects/LetNatureNurture";
import CoverTheSoil from "../../components/Projects/CoverTheSoil";
import PlantIntelligentConsortiums from "../../components/Projects/PlantIntelligentConsortiums";
import NativeForestConservationAndFacts from "../../components/Projects/NativeForestConservationAndFacts";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";

const Projects = () => {
  return (
    <div>
      <ExploreBanner />
      <SyntropicFarming />
      <LetNatureNurture />
      <CoverTheSoil />
      <PlantIntelligentConsortiums />
      <NativeForestConservationAndFacts />
      <ZoomSyntropicExplore />
      <ContactFooterUperButton />
    </div>
  );
};

export default Projects;
