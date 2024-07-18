import React from "react";

import img2 from "../../../src/images/img2.jpg";
import banner from "../../../src/images/anaerobic-main-bnr.jpg";
import img3 from "../../../src/images/img3.png";
import img4 from "../../../src/images/img4.png";
import img5 from "../../../src/images/download.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function AnaerobicDigestionCards() {
  return (
    <section className="flex justify-center mt-10 py-10">
      <div className="container w-auto xs:w-[300px] md:!w-[600px]">
        <h2 className="text-3xl text-center text-[#BAB220] font-montserrat tracking-normal leading-7 md:text-3xl font-bold mb-8">
          Featured Projects
        </h2>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000} // Change the interval as needed
          stopOnHover={true}
        >
          <div>
            <img src={img2} alt="Project 1" />
            <p className="legend text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
              Nature Based Assets
            </p>
          </div>
          <div>
            <img src={img3} alt="Project 2" />
            <p className="legend text-[#3c3c3c] text-lg font-normal font-poppins leading-7 ">
              Wind and Solar
            </p>
          </div>
          <div>
            <img src={img4} alt="Project 3" />
            <p className="legend text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
              Anaerobic Digestion
            </p>
          </div>
          <div>
            <img src={banner} alt="Project 3" />
            <p className="legend text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
              Anaerobic Digestion
            </p>
          </div>
          <div>
            <img src={img5} alt="Project 3" />
            <p className="legend text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
              Anaerobic Digestion
            </p>
          </div>
          {/* Add more images and legends as needed */}
        </Carousel>
      </div>
    </section>
  );
}

export default AnaerobicDigestionCards;
