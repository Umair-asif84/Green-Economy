import React from "react";

const ContactFooterUperButton = () => {
  return (
    <div className="  mx-auto  mb-14 bg-[#316D69] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="justify-between  items-center mx-auto grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-12 ">
        <div className=" text-left gap-4">
          <h3 className="font-montserrat text-3xl font-bold text-[#F7F5F2] mb-4">
            Feel Free to Contact Us!
          </h3>
          <p className="text-lg mx-auto font-poppins text-[#f7f5f2] font-normal">
            Have questions? Reach out to us without hesitation.
          </p>
        </div>
        <div className="text-start md:text-end lg:text-end xl:text-end">
          <a href="/contact-us">
            <button className="capitalize bg-[#BAB220] mt-6 sm:mt-0 md:mt-0 lg:mt-0 text-[#F7F5F2] px-6 py-2 rounded font-montserrat text-lg hover:bg-[#EFEDD1] hover:text-[#316D69]	">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactFooterUperButton;
