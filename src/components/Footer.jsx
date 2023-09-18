import { IoChevronForward } from "../assets/Icons/index";
import React from "react";
import icon from "../assets/images/logo.png";
const FooterOne = () => {
  return (
    <footer className="px-4 text-gray-100 bg-gray-800 divide-y">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center rounded-full w-28 h-28">
              <img
                src={icon}
                alt=""
                className="flex-shrink-0 text-gray-900 rounded-full"
              />
            </div>
            <span className="self-center text-2xl font-semibold">
              Zootopia - The Funyard
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h2 className="font-bold tracking-widest uppercase text-gray-50">
              Categories
            </h2>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Birthday party’s
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Animal interactions
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Feeding & petting
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Entertainment
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Educational tours
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="font-bold tracking-widest uppercase text-gray-50">
              Company
            </h2>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  FAQ
                </a>
              </li>

              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-10 text-sm text-center text-gray-400">
        © 2023 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterOne;
