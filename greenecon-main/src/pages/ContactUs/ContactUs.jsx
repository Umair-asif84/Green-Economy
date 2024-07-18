import React from "react";
import MainBanner from "../../components/ContactUS/ContactBanner";
import ContactForm from "../../components/ContactUS/ContactForm";
import ContactMap from "../../components/ContactUS/ContactMap";

const ContactUs = () => {
  return (
    <div>
      <div className="  font-roboto relative">
        {/* Text Content */}
        <MainBanner />
        {/* 2nd Section */}
        <section className=" dark:bg-gray-800 mb-10 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
          <ContactForm />
        </section>
        <section className=" text-white  ">
          <ContactMap />
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
