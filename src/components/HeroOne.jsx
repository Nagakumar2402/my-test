"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import one from "../assets/images/one.png";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const HeroBanner = () => {
  return (
    <div className="relative  text-white text-[20px] w-full  mx-auto" id="home">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="hidden absolute px-2 left-0 bottom-1/2 w-[30px] md:w-[50px] h-[30px] md:h-[50px] text-black bg-[#fcfbeb8e] z-10 md:flex items-center justify-center cursor-pointer  duration-200 transition-all"
          >
            <MdOutlineArrowForwardIos className="text-sm rotate-180 md:text-xl hover:scale-110" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="hidden absolute right-0 bottom-1/2 w-[30px] md:w-[50px] h-[30px] md:h-[50px] text-black bg-[#fcfbeb8e] z-10 md:flex items-center justify-center cursor-pointer  duration-200 transition-all"
          >
            <MdOutlineArrowForwardIos className="text-lg font-bold md:text-xl hover:scale-110" />
          </div>
        )}
      >
        <div className="w-full overflow-hidden font-Oswald">
          <div className="relative shadow-xl overflow-hidden border-double border-2 border-[#86b979] ">
            <img
              src={one}
              className="aspect-[16/10] md:aspect-auto object-cover  "
            />

            <div className="container absolute z-10 flex flex-col items-center w-4/5 md:py-16 mx-auto my-10 transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 md:left-[60%] md:my-32">
              <p className="flex flex-col items-center text-4xl font-extrabold text-center text-transparent text-stroke-3 md:text-6xl lg:text-8xl">
                Zootopia - The Funyard
              </p>

              <button className="inline-flex items-center px-4 py-3 mt-5 text-sm text-white bg-gray-900 md:mt-10 group hover:bg-gray-700/90">
                Get Started
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-3 transition-transform duration-500 ease-in fill-white undefined group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden font-Oswald ">
          <div className="relative overflow-hidden border-2 border-green-500 border-double shadow-2xl ">
            <img
              src={one}
              className="aspect-[16/10] md:aspect-auto object-cover  "
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
