"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
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
          <div className="relative h-screen overflow-hidden bg-[#86b979] ">
            <img
              src={one}
              className="absolute object-cover object-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />

            <div className="container relative z-10 flex items-center w-4/5 py-16 mx-auto my-24 border-4 border-white rounded-lg md:my-32">
              <div className="relative z-10 flex flex-col items-center justify-between w-full opacity-30aaaaaaaaaaaa ">
                <p className="flex flex-col items-center text-6xl font-extrabold text-center text-black md:text-8xl">
                  Zootopia - The Funyard
                </p>
                <p className="flex flex-col items-center max-w-lg mt-6 text-lg font-extrabold text-center text-white font-poppins">
                  Educational Tour - Know more about animals' behaviors,
                  habitats, diets, and general care at Zootopia
                </p>
                <a
                  href="#"
                  className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900"
                >
                  get started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full font-Oswald  md:h-[700px] overflow-hidden ">
          <div className="relative h-screen overflow-hidden bg-[#86b979] ">
            <img
              src="https://images.unsplash.com/photo-1561016444-14f747499547?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2231&q=80"
              className="absolute object-cover object-center transform -translate-x-1/2 -translate-y-1/2 aspect-[16/9] md:aspect-auto opacity-30 top-1/2 left-1/2"
            />

            <div className="container relative z-10 flex items-center w-4/5 py-16 mx-auto my-24 border-4 border-white rounded-lg md:my-32">
              <div className="relative z-10 flex flex-col items-center justify-between w-full">
                <p className="flex flex-col items-center text-6xl font-extrabold text-center text-black md:text-8xl">
                  Zootopia - The Funyard
                </p>
                <p className="flex flex-col items-center max-w-lg mt-6 text-lg font-extrabold text-center text-white font-poppins">
                  Educational Tour - Know more about animals' behaviors,
                  habitats, diets, and general care at Zootopia
                </p>
                <a
                  href="#"
                  className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900"
                >
                  get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
