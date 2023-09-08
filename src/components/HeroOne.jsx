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
