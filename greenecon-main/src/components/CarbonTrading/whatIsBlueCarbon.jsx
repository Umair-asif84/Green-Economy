import React from "react";

const whatIsBlueCarbon = () => {
  return (
    <div className="flex flex-col flex-wrap bg-[#F7F5F2]  justify-center text-center px-[30px] md:px-[60px] font-roboto lg:px-[80px] xl:px-[100px] py-8">
      <div className="flex flex-col pt-8 pb-4">
        <h2 className="mb-4  text-[#316D69] font-montserrat text-3xl font-bold leading-7 tracking-normal">
          <span className="text-[#BAB220]">What is Blue</span> Carbon
        </h2>
        <p className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7">
          Blue Carbon refers to the carbon captured and stored by coastal and
          marine ecosystems, such as mangroves, seagrasses, and <br />
          tidal marshes. These ecosystems are highly efficient at capturing and
          storing carbon and play a critical role in mitigating the
          <br /> impacts of climate change.
          <br />
          Blue carbon provides a range of other ecosystem services, including
          shoreline protection, wildlife habitat, and support for fisheries,
          <br /> making it a valuable and important component of the world's
          coastal and marine ecosystems.
        </p>
      </div>
    </div>
  );
};

export default whatIsBlueCarbon;
