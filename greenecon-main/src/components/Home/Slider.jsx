import React, { useRef, useState } from "react";
import "./slider.css";
import arrowleft from "../../../src/images/arrow-left.png";
import arrowright from "../../../src/images/arrow-right.png";

const Slider = () => {
  const slideRef = useRef(null);
  const [loadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };
  // https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg

  const data = [
    {
      id: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1491982883790-ead7c97a047e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "The experts at GEP help businesses reduce emissions; they identify suitable projects, ensure compliance with Article 6.2 standards, develop project plans, and seek certification from recognized carbon standards. ",
      name: "Carbon Credits",
      buttontext: "Go Green Now!",
    },
    {
      id: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "At Green Economy Partnership, we aim to achieve net-zero carbon emissions by 2050. Our experts help you prevent climate change through nature-based solutions, renewable energy sources, and carbon trading. ",
      name: "Welcome to Green Economy Partnership",
      buttontext: "Go Green Now!",
    },
    {
      id: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "Assets like sustainable forestry, blue carbon, and climate-smart agriculture offer a powerful ally in the fight against climate change. Our experts help you reduce your carbon footprint through sustainable forest management. ",
      name: "Nature-Based Solutions ",
      buttontext: "Go Green Now!",
    },
    {
      id: 4,
      imgUrl:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "GEP supports wind and solar energy incentives within local communities, helping you contribute to a sustainable future. Our initiatives empower local communities, ensuring a sustainable, cost-efficient, and greener future.",
      name: "Renewable Energy",
      buttontext: "Go Green Now!",
    },
    {
      id: 5,
      imgUrl:
        "https://images.unsplash.com/photo-1508333509220-c13101299e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "Anaerobic digestion is gaining popularity in waste management, particularly in Dubai. GEP offers consultancy to harness its potential, cut carbon footprints, and establish cost-effective power generation systems for a greener future.",
      name: "Waste Management ",
      buttontext: "Go Green Now!",
    },
  ];

  return (
    <div className="container container_slider mx-auto max-w-none px-4 ">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div className="slide flex flex-wrap" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item "
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              <button className="capitalize bg-[#316D69] text-white px-6 py-2 rounded font-montserrat">
                {item.buttontext}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <img src={arrowleft} alt="" /> {/* Left angle symbol */}
        </button>
        <button id="next" onClick={handleClickNext}>
          <img src={arrowright} alt="" />
          {/* Right angle symbol */}
        </button>
      </div>
    </div>
  );
};

export default Slider;
