import React, { useState } from "react";
import Logo from "../../../src/images/greenlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const [dropdowns, setDropdowns] = useState({
    dropdownNavbarLink1: false,
    dropdownNavbarLink2: false,
    dropdownNavbarLink3: false,
    dropdownNavbarLink4: false,
  });

  const handleLinkClick = (linkText) => {
    setActiveLink(linkText);
  };

  const toggleDropdown = (dropdownId) => {
    setDropdowns((prevState) => {
      const updatedDropdowns = { ...prevState };

      // Close all other dropdowns
      for (const key in updatedDropdowns) {
        if (key !== dropdownId) {
          updatedDropdowns[key] = false;
        }
      }

      // Toggle the clicked dropdown
      updatedDropdowns[dropdownId] = !updatedDropdowns[dropdownId];

      return updatedDropdowns;
    });
  };
  // Function to close a specific dropdown
  const closeDropdown = (dropdownId) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdownId]: false,
    }));
  };

  return (
    <nav className="bg-white dark:bg-gray-900 sticky w-full z-30 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between px-[10px] sm:px-[30px] md:px-[40px] lg:px-[60px] xl:pl-[75px] xl:pr-[100px]">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            className="h-full w-full p-0"
            alt="Green Economy Logo"
          />
        </Link>

        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="w-full md:block md:w-auto sm:pl-[10px] hidden"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col flex-wrap font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                exact
                to="/"
                className={`block font-montserrat font-bold text-lg py-2 pl-3 pr-4 sm:pr-0 ${
                  activeLink === "Home" ? "text-[#316D69]" : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink1"
                data-dropdown-toggle="dropdownNavbar1"
                className={`flex items-center justify-between w-full py-2 pl-3  pr-4 font-montserrat font-semibold text-base mt-[10px] text-[#3c3c3c] hover:text-[#316D69] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#316D69] md:p-0 md:w-auto dark:text-[#f7f5f2] md:dark:hover:text-[#316D69] dark:focus:text-[#f7f5f2] dark:border-gray-700 ${
                  dropdowns.dropdownNavbarLink1 ? "" : ""
                }`}
                onClick={() => {
                  toggleDropdown("dropdownNavbarLink1");
                  handleLinkClick(true);
                }}
              >
                About Us
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu 1 --> */}
              <div
                id="dropdownNavbar1"
                className={`z-20 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-52 ${
                  dropdowns.dropdownNavbarLink1 ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton1"
                >
                  <li>
                    <Link
                      to="/our-story"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "OurStory"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("OurStory");
                        closeDropdown("dropdownNavbarLink1");
                      }}
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/challenges"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "ChallangesAndSolutions"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("ChallangesAndSolutions");
                        closeDropdown("dropdownNavbarLink1");
                      }}
                    >
                      Challenges & Solutions
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLink2"
                data-dropdown-toggle="dropdownNavbar2"
                className={`flex items-center justify-between w-full py-2 pl-3 pr-4 mt-[10px] font-montserrat font-semibold text-base text-[#3c3c3c] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#316D69] md:p-0 md:w-auto dark:text-white md:dark:hover:text-[#316D69] dark:focus:text-[#f7f5f2] dark:border-gray-700 ${
                  dropdowns.dropdownNavbarLink2 ? "" : ""
                }`}
                onClick={() => {
                  toggleDropdown("dropdownNavbarLink2");
                  handleLinkClick(true);
                }}
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu 2 --> */}
              <div
                id="dropdownNavbar2"
                className={`z-20 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600 ${
                  dropdowns.dropdownNavbarLink2 ? "block" : "hidden"
                }`}
              >
                <ul
                  className="py-2 text-sm text-[#3c3c3c] dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton2"
                >
                  <li className=" pl-3">
                    <Link
                      to="/carbon-trading"
                      className={`block font-montserrat  text-base py-2  pr-4  sm:pr-0 ${
                        activeLink === "CarbonCredits"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("CarbonCredits");
                        closeDropdown("dropdownNavbarLink2");
                      }}
                    >
                      Carbon Trading
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/naturebasedasset"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "NatureBasedAssets"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("NatureBasedAssets");
                        closeDropdown("dropdownNavbarLink2");
                      }}
                    >
                      Nature Based Assets
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/renewable-energy"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "WindandSolar"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("WindandSolar");
                        closeDropdown("dropdownNavbarLink2");
                      }}
                    >
                      Renewable Energy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/waste-management"
                      className={`block font-montserrat  text-base py-2 pl-3 pr-4 sm:pr-0 ${
                        activeLink === "AnaerobicDigestion"
                          ? "text-[#316D69] font-bold"
                          : "text-[#3c3c3c]"
                      } hover:text-[#316D69] rounded `}
                      onClick={() => {
                        handleLinkClick("AnaerobicDigestion");
                        closeDropdown("dropdownNavbarLink2");
                      }}
                    >
                      Waste Management
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="/projects"
                className={`block py-2 font-montserrat font-semibold  text-base pl-3 pr-4 sm:pr-0 ${
                  activeLink === "Projects"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("Projects")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/news-and-media"
                className={`block py-2 font-montserrat font-semibold  text-base pl-3 pr-4 sm:pr-0 ${
                  activeLink === "NewsAndMedia"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("NewsAndMedia")}
              >
                News and Media
              </Link>
            </li>{" "}
            <li>
              <Link
                to="/carbon-credits"
                className={`block py-2 font-montserrat font-semibold  text-base pl-3 sm:pl-0 pr-4 sm:pr-0 ${
                  activeLink === "CarbonCredits"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("CarbonCredits")}
              >
                Carbon Credits
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={`block py-2 font-montserrat font-semibold text-base pl-3 pr-4 sm:pr-0 ${
                  activeLink === "Contact"
                    ? "text-[#316D69] font-bold"
                    : "text-[#3c3c3c]"
                } hover:text-[#316D69] rounded `}
                onClick={() => handleLinkClick("Contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
