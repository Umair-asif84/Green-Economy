import React from "react";

const ClimateFriendlyInvestment = () => {
  return (
    <div className="flex flex-col flex-wrap bg-[#F7F5F2]  justify-center text-center px-[30px] md:px-[60px] font-roboto lg:px-[80px] xl:px-[100px] py-8">
      <div className="flex flex-col pt-8 pb-4">
        <h2 className="mb-4  text-[#316D69] font-montserrat text-3xl font-bold leading-7 tracking-normal">
          <span className="text-[#BAB220]">Climate Friendly </span> Investment
        </h2>
        <div className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7">
          <p className="mt-4">
            In 2020, global greenhouse gas emissions increased, but in the last
            decade a golden climate mitigation opportunity has been gaining
            international recognition. Protecting the “Blue Carbon” in coastal
            and ocean ecosystems will play a key role in protecting the climate.
            Therefore, The Green Economy Partnership has taken an initiative to
            protect blue carbon.
          </p>

          <p className="mt-4">
            IThis initiative is in compliance with Article 6.2 of the Paris
            Agreement named, Internationally Transferred Mitigation Outcomes
            (ITMOs). GEP helps governments or organizations generate revenues
            from the selling of ITMOs. These ITMOs are then sold through an
            auction held during COP. The revenue generated also helps to fund
            other climate mitigation projects, thus reaching the carbon emission
            reduction target under the Paris Agreement.
          </p>
          <p className="mt-4">
            The coastal ecosystems are vital for mitigating climate change
            through carbon sequestration. By harnessing the power of Blue
            Carbon, GEP experts are also enriching the marine ecosystems. With
            VERRA- Verified Carbon Standard, they ensure that the efforts to
            harness the power of Blue Carbon is transparent and measurable.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClimateFriendlyInvestment;
