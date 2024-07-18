import React from "react";
import img1 from "../../../src/images/h1.jpg";
import img2 from "../../../src/images/h2.jpg";
import img3 from "../../../src/images/h3.jpg";

const BNativeExplore = () => {
  return (
    <div className=" dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="w-full py-12  ">
        <h2 className="text-3xl font-bold font-montserrat tracking-normal leading-7 text-[#316D69] dark:text-white sm:text-4xl">
          <span className="block">Native Forest Conservation</span>
        </h2>
        <p className="text-lg mt-4 text-[#3c3c3c] font-normal leading-7 font-poppins">
          A native forest conservation plantation would replicate the Upper
          Guinean forest, a global biodiversity hotspot.
          <br />
          <br />
          Endemic species such as chimpanzee, leopard, hippopotamus, Ogilby’s
          duiker, African golden cat will be promoted as their habitat will be
          replicated.
          <br />
          <br />
          In a native forest we are assured that the species are adapted to the
          local climate : the long rainy season (9 months) and dry season (3
          months).{" "}
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-lg shadow">
            <button
              type="button"
              className="py-3 px-[25px] font-montserrat  text-white hover:text-white bg-[#316D69] font-semibold hover:bg-[#BAB220] transition duration-300 rounded-lg"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 lg:p-24">
        <img src={img1} className="w-1/2 rounded-lg" alt="Tree" />
        <div>
          <img src={img2} className="mb-8 rounded-lg" alt="Tree" />
          <img src={img3} className="rounded-lg" alt="Tree" />
        </div>
      </div>
    </div>
  );
};

export default BNativeExplore;
