import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";
import Image from "/public/logo.png";

const navLinks = [
      { name: "HOME", path: "/" },
      { name: "ABOUT", path: "/about-us" },
      {
            name: "ARBITRATION",
            path: "/arbitration",
            children: [
                  { name: "What is Arbitration", path: "/arbitration/whatIsArbiration" },
                  { name: "Domestic Rules", path: "/arbitration/arbitration-rules" },
            ],
      },
      { name: "MEDIATION", path: "/mediation" },
      { name: "CONCILIATION", path: "/conciliation" },
      { name: "LOCATION", path: "/location" },
      { name: "CONTACT", path: "/contact" },
];

const HeaderTwo = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [openDropdown, setOpenDropdown] = useState(null); // New Dropdown State
      const [navColor, setNavColor] = useState("transparent");

      const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

      const handleDropdownToggle = (name) => {
            setOpenDropdown((prev) => (prev === name ? null : name));
      };

      const location = useLocation();

      useEffect(() => {
            const blackPaths = [
                  "/contact",
                  "/arbitration/arbitration-rules",
            ];
            setNavColor(blackPaths.includes(location.pathname) ? "#1b1c2e" : "transparent");
            setIsMobileMenuOpen(false);
            setOpenDropdown(null); // Close dropdown on navigation
      }, [location.pathname]);

      return (
            <header
                  className={`absolute top-0 left-0 w-full z-50 py-4`}
                  style={{ backgroundColor: navColor }}
            >
                  <div className="max-w-[1782px] mx-auto flex justify-between items-center">
                        <Link to="/" className="w-[198px] h-[118px]">
                              <img src={Image} alt="logo" className="w-full h-full object-cover" />
                        </Link>

                        <button
                              className="md:hidden text-3xl text-white cursor-pointer z-50"
                              onClick={toggleMobileMenu}
                        >
                              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>

                        <nav
                              className={`fixed top-0 left-0 w-full h-full md:relative md:h-auto md:w-auto bg-black bg-opacity-90 md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end transition-transform duration-300 z-40 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                                    }`}
                        >
                              <ul className="flex flex-col md:flex-row gap-[40px] items-center justify-center md:gap-[24px] p-8 md:p-0">
                                    {navLinks.map(({ name, path, children }) => (
                                          <li key={path} className="relative group">
                                                {/* Main Link */}
                                                <div
                                                      className="flex items-center cursor-pointer"
                                                      onClick={() => handleDropdownToggle(name)}
                                                >
                                                      <NavLink
                                                            to={path}
                                                            className={({ isActive }) =>
                                                                  `font-medium text-[14px] md:text-[12px] 2xl:text-[18px] sm:text-[12px] leading-[28px] tracking-[1px] ${isActive
                                                                        ? "text-white underline underline-offset-4 decoration-2"
                                                                        : "text-gray-500"
                                                                  } hover:text-white transition duration-300`
                                                            }
                                                      >
                                                            {name}
                                                      </NavLink>
                                                      {children && (
                                                            <FiChevronDown
                                                                  size={20}
                                                                  className={`ml-2 text-white transition-transform duration-300 ${openDropdown === name ? "rotate-180" : ""
                                                                        }`}
                                                            />
                                                      )}
                                                </div>

                                                {/* Dropdown Menu */}
                                                {children && (
                                                      <ul
                                                            className={`absolute z-10 left-0 top-full w-[11.8rem] bg-[#1b1c2e] text-white p-4 shadow-lg rounded-md overflow-hidden transition-all duration-300 transform ${openDropdown === name
                                                                  ? "opacity-100 translate-y-0"
                                                                  : "max-h-0 opacity-0 -translate-y-2"
                                                                  }`}
                                                      >
                                                            {children.map(({ name: childName, path: childPath }) => (
                                                                  <li
                                                                        key={childPath}
                                                                        className="flex items-center gap-2 py-2"
                                                                  >
                                                                        <FiChevronRight className="text-gray-400" />
                                                                        <NavLink
                                                                              to={childPath}
                                                                              className="text-white hover:text-gray-300 transition duration-300 text-sm"
                                                                              onClick={() => {
                                                                                    setIsMobileMenuOpen(false);
                                                                                    setOpenDropdown(null);
                                                                              }}
                                                                        >
                                                                              {childName}
                                                                        </NavLink>
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                )}
                                          </li>
                                    ))}
                              </ul>
                        </nav>
                  </div>
            </header>
      );
};

export default HeaderTwo;
