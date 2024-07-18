import React from "react";
import SolarBanner from "../../components/RenewableEnergy/SolarBanner";
import InitiativesWindandSolar from "../../components/RenewableEnergy/InitiativesWindandSolar";
import RenewableEnergyLi from "../../components/RenewableEnergy/RenewableEnergyLi";
import RethinkingFossilFuels from "../../components/RenewableEnergy/RethinkingFossilFuels";
import StatsPowerrenewable from "../../components/RenewableEnergy/StatsPowerrenewable";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";

const RenewableEnergy = () => {
  return (
    <div>
      <SolarBanner />
      <RenewableEnergyLi />
      <InitiativesWindandSolar />
      <RethinkingFossilFuels />
      <StatsPowerrenewable />
      <ContactFooterUperButton />
    </div>
  );
};

export default RenewableEnergy;
