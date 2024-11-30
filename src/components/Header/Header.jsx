import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "/public/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-4">
      <div className="container mx-auto lg:ml-[5rem] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="w-[198px] h-[118px]">
          <img src={Image} className="w-full h-full object-cover" alt="logo" />
        </Link>

        {/* Hamburger Menu Icon */}
        <div
          className="md:hidden text-3xl text-white cursor-pointer z-50"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Navigation */}
        <nav
          className={`fixed top-0 lg:left-[8rem] w-full h-full md:relative md:h-auto md:w-auto bg-black bg-opacity-90 md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } z-40`}
        >
          <ul className="flex flex-col md:flex-row gap-[40px] items-center space-y-8 md:space-y-0 md:space-x-6 p-8 md:p-0">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "ARBITRATION", path: "/Arbitration" },
              { name: "MEDIATION", path: "/mediation" },
              { name: "CONCILIATION", path: "/conciliation" },
              { name: "LOCATION", path: "/location" },
              { name: "CONTACT", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-[400] text-[18px] md:text-[18px] leading-[28px] md:leading-[36px] tracking-[1px] ${
                      isActive
                        ? "text-[#FFFFFF] underline underline-offset-4 decoration-2"
                        : "text-gray-500 no-underline"
                    } hover:text-[#FFFFFF] transition duration-300`
                  }
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
