import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  IoChevronDown,
  BiSearch,
  BiCartAlt,
  FaUserAlt,
} from "../assets/Icons/index";
import icon from "../assets/images/logo.png";
import MobileMenu from "./MobileMenu";
import menuItems from "../utils/menuItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [show, setShow] = useState();

  const NavbarVisibility = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", NavbarVisibility);

    return () => {
      window.removeEventListener("scroll", NavbarVisibility);
    };
  });

  return (
    <div
      className={`fixed top-0 left-0 font-poppins  z-50 w-full shadow-lg hover:bg-white transition-all duration-200  hover:text-black bg-[#0a0a0a33] ${
        show ? "bg-white text-black !important" : "text-white"
      }   capitalize`}
    >
      <div className="flex items-center justify-between max-w-full px-4 py-2 mx-auto sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img
              className="h-20 transition-all duration-200 rounded-full shadow-xl cursor-pointer "
              src={icon}
              alt="Your Company"
            />
          </span>
        </div>
        <div className="items-start hidden grow lg:flex ">
          <ul className="inline-flex ml-12 space-x-8 font-light ">
            {menuItems?.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold"
                >
                  {item.name}
                  <span>
                    <IoChevronDown className="w-4 h-4 ml-2" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center hidden gap-6 space-x-2 lg:flex hover:cursor-pointer ">
          <BiSearch className="w-5 h-5 text-bold " />
          <FaUserAlt className="w-4 h-4 text-bold " />
          <BiCartAlt className="w-5 h-5 text-bold " />
        </div>
        <div className="lg:hidden">
          <AiOutlineMenu
            onClick={toggleMenu}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </div>
    </div>
  );
};

export default Navbar;
