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

const Header = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [navColor, setNavColor] = useState("transparent");

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleDropdown = (name) => {
    setDropdownOpen((prev) => (prev === name ? null : name));
  };

  const location = useLocation();

  useEffect(() => {
    const blackPaths = [
      "/contact",
      "/arbitration/arbitration-rules",
      "/mediation/mediation-rules",
    ];
    setNavColor(blackPaths.includes(location.pathname) ? "#1b1c2e" : "transparent");
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 py-4 ${className}`}
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
              <li
                key={path}
                className="relative group"
              // onMouseEnter={() => setDropdownOpen(name)}
              // onMouseLeave={() => setDropdownOpen(null)}
              >
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleDropdown(name)}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `font-medium nav__texttt text-[14px] md:text-[12px] 2xl:text-[18px] sm:text-[12px] leading-[28px] tracking-[1px] ${isActive
                        ? "text-white underline underline-offset-4 decoration-2"
                        : "text-gray-500"
                      } hover:text-white transition duration-300`
                    }
                  >
                    {name}
                  </NavLink>
                  {children && (
                    <FiChevronDown
                      size={24}
                      className={`ml-2 text-white transition-transform duration-300 ${dropdownOpen === name ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </div>

                {children && dropdownOpen === name && (
                  <ul className="absolute z-50 w-60 max-h-[300px] overflow-y-auto bg-[#1b1c2e] text-white p-4 shadow-lg rounded-md md:left-0 md:top-full space-y-3">
                    {children.map(({ name: childName, path: childPath }) => (
                      <li key={childPath} className="flex items-center gap-2">
                        <FiChevronRight className="text-gray-400" />
                        <NavLink
                          to={childPath}
                          className="text-white hover:text-gray-300 transition duration-300 text-sm"
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

export default Header;
