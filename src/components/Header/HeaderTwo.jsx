import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";
import Image from "/public/logo.png";

const navLinks = [
      { name: "HOME", path: "/" },
      { name: "ABOUT", path: "/about-us" },
      {
            name: "ARBITRATION",
            path: "/Arbitration",
            // children: [
            //       { name: "What is Arbitration", path: "/arbitration/arbitration-rules" },
            //       { name: "Domestic Rules", path: "arbitration/arbitration-rules" },
            // ],
      },
      { name: "MEDIATION", path: "/mediation" },
      { name: "CONCILIATION", path: "/conciliation" },
      { name: "LOCATION", path: "/location" },
      { name: "CONTACT", path: "/contact" },
];

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const HeaderTwo = ({ className }) => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [dropdownOpen, setDropdownOpen] = useState(null); // Manage dropdown state

      const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

      const handleDropdown = (name) => {
            setDropdownOpen((prev) => (prev === name ? null : name));
      };

      return (
            <header className={`absolute top-0 left-0 w-full z-50 py-4 ${className}`}>
                  <div className="max-w-[1782px] mx-auto flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="w-[198px] h-[118px]">
                              <img src={Image} alt="logo" className="w-full h-full object-cover" />
                        </Link>

                        {/* Hamburger Menu Icon */}
                        <button
                              className="md:hidden text-3xl text-white cursor-pointer z-50"
                              onClick={toggleMobileMenu}
                              aria-label="Toggle Menu"
                        >
                              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>

                        {/* Navigation */}
                        <nav
                              className={classNames(
                                    "fixed top-0 lg:left-0 w-full h-full md:relative md:h-auto md:w-auto",
                                    "bg-black bg-opacity-90 md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end",
                                    "transition-transform duration-300 z-40",
                                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                              )}
                        >
                              <ul className="flex flex-col md:flex-row gap-[40px] items-center md:gap-[24px] p-8 md:p-0">
                                    {navLinks.map(({ name, path, children }) => (
                                          <li
                                                key={path}
                                                className="relative group"
                                                onMouseEnter={() => setDropdownOpen(name)}
                                                onMouseLeave={() => setDropdownOpen(null)}
                                          >
                                                <div
                                                      className="flex items-center cursor-pointer"
                                                      onClick={() => handleDropdown(name)}
                                                >
                                                      <NavLink
                                                            to={path}
                                                            className={({ isActive }) =>
                                                                  classNames(
                                                                        "font-medium nav__texttt text-[14px] md:text-[12px] 2xl:text-[18px] sm:text-[12px] leading-[28px] tracking-[1px]",
                                                                        isActive
                                                                              ? "text-[#FFFFFF] underline underline-offset-4 decoration-2"
                                                                              : "text-gray-500",
                                                                        "hover:text-[#FFFFFF] transition duration-300"
                                                                  )
                                                            }
                                                      >
                                                            {name}
                                                      </NavLink>
                                                      {children && (
                                                            <FiChevronDown
                                                                  className={`ml-2 text-white transition-transform duration-300 ${dropdownOpen === name ? "rotate-180" : ""
                                                                        }`}
                                                            />
                                                      )}
                                                </div>

                                                {/* Dropdown Menu */}
                                                {children && dropdownOpen === name && (
                                                      <ul className="absolute left-0 mt-2 bg-black bg-opacity-90 p-4 rounded-lg shadow-lg">
                                                            {children.map(({ name: childName, path: childPath }) => (
                                                                  <li
                                                                        key={childPath}
                                                                        className="flex items-center gap-2 py-2"
                                                                  >
                                                                        <FiChevronRight className="text-gray-400" />
                                                                        <NavLink
                                                                              to={childPath}
                                                                              className="text-gray-400 hover:text-white transition duration-300 text-[14px]"
                                                                              onClick={() => setIsMobileMenuOpen(false)}
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