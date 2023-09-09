"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import one from "../assets/images/one.png";
const HeroBanner = () => {
  return (
    <div className="relative  text-white text-[20px] w-full  mx-auto" id="home">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={true}
        showIndicators={false}
        showStatus={false}
        interval={3000}
      >
        <div className="w-full overflow-hidden font-Oswald">
          <div className="relative shadow-xl overflow-hidden border-double border-2 border-[#86b979] ">
            <img
              src={one}
              className="aspect-[16/10] md:aspect-auto object-cover  "
            />

            <div className="container absolute z-10 flex flex-col items-center w-4/5 md:py-16 mx-auto my-10 transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 md:left-[60%] md:my-32">
              <p className="flex flex-col items-center text-4xl font-extrabold text-center text-transparent bg-clip text-stroke-3 md:text-8xl">
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
