import React, { useEffect, useState } from "react";
import { AiOutlineMenu, IoChevronDown } from "../assets/Icons/index";
import icon from "../assets/images/logo.png";

import MobileMenu from "./MobileMenu";
import menuItems from "../utils/menuItem";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hideMenu = () => {
    setIsMenuOpen(false);
  };
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
      className={`fixed top-0 left-0   z-50 w-full shadow-lg hover:bg-white transition-all duration-200  hover:text-black bg-[#0a0a0a33] ${
        show ? "bg-white text-black !important" : "text-white"
      }   capitalize`}
    >
      <div className="flex items-center justify-between max-w-full py-2 pr-4 mx-auto sm:px-2 lg:px-4">
        <div className="inline-flex items-center space-x-2 pr-96">
          <span>
            <Link to={"my-test/"}>
              <img src={icon} alt="" className="w-auto h-20" />
            </Link>
          </span>
        </div>
        <div className="items-start hidden grow lg:flex ">
          <ul className="inline-flex ml-12 space-x-8 font-light ">
            {menuItems?.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "inline-flex items-center text-base font-semibold text-yellow-600"
                      : "inline-flex items-center text-base font-semibold tracking-widest transition-all duration-200 border-b-2 border-transparent hover:border-black hover:text-yellow-900 "
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <AiOutlineMenu
            onClick={toggleMenu}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
        {isMenuOpen && (
          <MobileMenu toggleMenu={toggleMenu} hideMenu={hideMenu} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
