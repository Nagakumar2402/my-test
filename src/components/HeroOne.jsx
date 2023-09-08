"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import one from "../assets/images/one.png";
const HeroBanner = () => {
  return (
    <div classNameName="relative  text-white text-[20px] w-full  mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={true}
        showIndicators={false}
        showStatus={false}
        interval={3000}
      >
        <div className="w-full overflow-hidden font-Oswald ">
          <div className="relative shadow-xl overflow-hidden border-double border-2 border-[#86b979] ">
            <img
              src={one}
              className="aspect-[16/10] md:aspect-auto object-cover  "
            />
            <div className="container absolute z-10 flex flex-col items-center w-4/5 py-16 mx-auto my-24 transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2 md:left-[60%] md:my-32">
              <p className="flex flex-col items-center text-5xl font-extrabold text-center text-transparent shadow-2xl text-stroke-3 md:text-8xl">
                Zootopia - The Funyard
              </p>

              <a
                href="#"
                className="block px-4 py-3 mt-10 text-sm font-bold text-white uppercase bg-gray-800 cursor-pointer hover:bg-gray-900"
              >
                get started
              </a>
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
