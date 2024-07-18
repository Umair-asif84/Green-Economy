import React from "react";

const RethinkingFossilFuels = () => {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] pb-10 mt-10">
      <div className=" ">
        <h2 className="text-4xl mb-6 font-montserrat  font-bold text-[#bab220]">
          Rethinking Fossil Fuels With Renewables
        </h2>
        <p className="mt-4 text-lg font-normal font-poppins leading-7 text-[#3c3c3c]">
          To mitigate climate change, it is essential to transition to clean and
          renewable energy, while phasing out fossil fuels.
        </p>
      </div>
      <div>
        <div class="relative overflow-x-auto mt-12">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-gray-700 uppercase border-t-2 border-[#316D69] bg-[#f7f5f2] dark:bg-gray-700 dark:text-gray-400">
              <tr className="font-montserrat font-bold text-xl text-[#316D69]">
                <th scope="col" class="px-6 py-3 ">
                  Fossil Fuels
                </th>
                <th scope="col" class="px-6 py-3"></th>
                <th scope="col" class="px-6 py-3">
                  Renewable Energy
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-poppins text-[#3c3c3c] text-base font-normal">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Oil, coal, gas
                </th>
                <td class="px-6 py-4">Types</td>
                <td class="px-6 py-4">Solar wind, geothermal, hydropower,</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-poppins text-[#3c3c3c] text-base font-normal">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Fossilized remains of plants and animals{" "}
                </th>
                <td class="px-6 py-4">Origins</td>
                <td class="px-6 py-4">Naturally renewable sources</td>
              </tr>
              <tr class="bg-white  border-b dark:bg-gray-800 font-poppins text-[#3c3c3c] text-base font-normal">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Millions of years
                </th>
                <td class="px-6 py-4">Time to form</td>
                <td class="px-6 py-4">Constantly self- replenishing</td>
              </tr>
              <tr class="bg-white  border-b dark:bg-gray-800 font-poppins text-[#3c3c3c] text-base font-normal">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Limited
                </th>
                <td class="px-6 py-4">Available supply</td>
                <td class="px-6 py-4">Abundant</td>
              </tr>
              <tr class="bg-whit  border-b dark:bg-gray-800 font-poppins text-[#3c3c3c] text-base font-normal">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Very high
                </th>
                <td class="px-6 py-4">Carbon content</td>
                <td class="px-6 py-4">None</td>
              </tr>
              <tr class="bg-white  border-b dark:bg-gray-800 font-poppins text-[#3c3c3c] text-base font-normal">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  More global warming, market stocks, loss and damage
                </th>
                <td class="px-6 py-4">Long-term outlook</td>
                <td class="px-6 py-4">
                  More job opportunities, healthier planet
                </td>
              </tr>
              <tr class="bg-white  dark:bg-gray-800 font-poppins text-[#3c3c3c] text-base font-normal border-b-2 border-[#316D69]">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Getting more expensive with time
                </th>
                <td class="px-6 py-4">Cost</td>
                <td class="px-6 py-4">Stable, and inexpensive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RethinkingFossilFuels;
