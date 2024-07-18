import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid bg-[#BAB220] flex justify-center items-center pt-6 pb-6 px-6 sm:px-12 md:px-20 lg:px-20 xl:px-32">
        <div className="lg:flex md:flex flex-col sm:flex-row justify-between space-y-4 items-center">
          <div className="left-footer grid-col w-full sm:w-auto text-center flex justify-between items-center">
            <span className="text-white font-normal flex text-center font-poppins text-lg leading-5">
              Copyright 2022 , All rights reserved by Green Economy Partnership
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
