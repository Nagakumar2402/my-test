import { IoChevronForward } from "../assets/Icons/index";
import React from "react";
import icon from "../assets/images/logo.png";
const FooterOne = () => {
  return (
    <footer className="w-full py-10 ">
      <div className="flex items-center justify-between max-w-6xl px-4 py-2 mx-auto lg:px-0">
        <div className="inline-flex items-center">
          <img src={icon} alt="" className="w-auto h-20" />
          <span className="ml-4 text-lg font-bold">Zootopia </span>
        </div>
        <div className="items-center hidden md:inline-flex">
          <span className="text-sm font-bold text-black">
            Ready to Get Started ?
          </span>
          <button
            type="button"
            className="px-3 py-2 ml-2 text-sm font-semibold text-white bg-green-900 rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Get Started
          </button>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col items-start max-w-6xl mx-auto space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold text-green-900">
            Subscribe to our Newsletter
          </h1>
          <form
            action=""
            className="inline-flex items-center w-full mt-4 md:w-3/4"
          >
            <input
              className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border rounded-md border-black/20 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="px-3 py-3 ml-4 text-sm font-semibold text-white bg-black rounded-full shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <IoChevronForward className="w-4 h-4" />
            </button>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-xl font-semibold text-green-900">
              information's
            </p>
            <ul className="flex flex-col space-y-4 text-base font-bold text-gray-500">
              <li>About us</li>
              <li>Company History</li>
              <li>Our Team</li>
              <li>Our Vision</li>
              <li>Press Release</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-xl font-semibold text-green-900">
              Categories
            </p>
            <ul className="flex flex-col space-y-4 text-base font-bold text-gray-500">
              <li>Birthday party’s </li>
              <li>Animal interactions</li>
              <li>Feeding & petting</li>
              <li>Educational tours</li>
              <li>Entertainment</li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-green-900">Company</p>
            <ul className="flex flex-col space-y-4 text-base font-bold text-gray-500">
              <li>Our Story</li>
              <li>Our Team</li>
              <li>Our Vision</li>
              <li>Press Release</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
