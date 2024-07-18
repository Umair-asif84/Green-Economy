import React from "react";

function DigestionManagement() {
  return (
    <div className="flex justify-center px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  relative -top-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base lg:text-lg p-4 ">
        <div className=" bg-[#EFEDD1] space-y-5 p-6 md:p-10 rounded-lg shadow-md hover:shadow-2xl">
          <h3 className=" text-xl text-[#316D69] font-bold tracking-normal leading-7 font-montserrat mb-2">
            Digestate Management
          </h3>
          <p className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7">
            Digestate management is an increasingly important practice for
            anaerobic digestion systems, as it is an effective way to reduce
            environmental impacts of wastewater treatment. The process involves
            the efficient removal of biogas from anaerobic digestion processes
            and reusing it by converting it into useful energy sources such as
            electricity, heat, and liquid fuel.
            <br />
            This sustainable approach can significantly lower greenhouse gas
            emissions created from traditional pollution control methods.
            Additionally, the use of digestate can have an added benefit of
            improving soil health by enriching its nutrients in an economical
            way.
            <br />
            It is encouraging to see how anaerobic digestion and digestate
            management are being employed to reduce waste, conserve energy, and
            improve air quality all while powering new technologies that are
            being developed around the world today.
          </p>
          <p></p>
        </div>
        <div className="bg-[#EFEDD1] space-y-5 p-6 md:p-10 rounded-lg shadow-md hover:shadow-2xl">
          <h3 className=" text-xl text-[#316D69] font-bold font-montserrat tracking-normal leading-7 mb-2">
            Waste Management Solutions
          </h3>
          <p className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7">
            Waste management solutions have come a long way in recent years.
            Many organizations and businesses are now focusing on waste
            management that is both sustainable and effective.
            <br />
            One popular option is anaerobic digestion, an approach which breaks
            down organic matter in an oxygen-free environment to produce biogas.
            This biogas can then be used as an energy source or burned in an
            anaerobic digester to create heat or electricity.
            <br />
            In this way, anaerobic digestion helps reduce the amount of waste
            that gets sent to landfills while also providing an alternative
            source of clean, green energy. Additionally, due to its ability to
            break down organic matter in a safe and efficient manner, anaerobic
            digestion has the potential for even more applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DigestionManagement;
