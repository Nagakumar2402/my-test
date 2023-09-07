"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import feed from "../assets/images/feeding.png";
const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full  mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        interval={3000}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-2 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-green-700 transition-all  duration-200 hover:bg-green-800 border-2 z-10 flex items-center justify-center cursor-pointer hover:opacity-90 md:mx-2"
          >
            <BiArrowBack className="text-sm hover:scale-150 md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-2  w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-green-700 transition-all duration-200 hover:bg-green-800 border-2 z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm rotate-180 md:text-lg hover:scale-150" />
          </div>
        )}
      >
        <div className="w-full relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1576502200916-3808e07386a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80')]  object-cover object-bottom ">
          <img
            src="https://i.pinimg.com/564x/a4/27/11/a42711bbc761c054d7a605443f055707.jpg"
            className="aspect-[16/10] md:aspect-auto object-cover  h-[700px]  opacity-0 "
          />
          <div className="absolute top-0 left-0 w-full h-full z-1 text-stroke-3 ">
            <h1 className="flex items-center justify-center h-full ml-3 text-6xl text-transparent md:text-9xl ">
              Feeding and <br />
              petting animals
            </h1>
          </div>
          <div className="px-[15px] md:mx-3 md:px-[40px] py-[8px] md:py-[10px] rounded-lg font-oswald bg-green-700 absolute md:bottom-2 left-0 text-white/[0.9] text-[15px] md:text-[25px] capitalize font-medium cursor-pointer hover:opacity-90">
            Book now
          </div>
        </div>
        <div className="w-full relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1576502200272-341a4b8d5ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]  object-cover object-bottom ">
          <img
            src="https://unsplash.com/photos/GokBcmdOI6I/download?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="aspect-[16/10] md:aspect-auto object-cover object-center  h-[700px]  opacity-0 "
          />
          <div className="absolute top-0 left-0 w-full h-full z-1 text-stroke-3 ">
            <h1 className="flex items-center justify-center h-full ml-3 text-6xl text-transparent md:text-9xl ">
              Entertainment <br /> for people of all ages,
              <br /> especially children
            </h1>
          </div>
          <div className="px-[15px] md:mx-3 md:px-[40px] py-[8px] md:py-[10px] rounded-lg font-oswald bg-green-700 absolute md:bottom-2 left-0 text-white/[0.9] text-[15px] md:text-[25px] capitalize font-medium cursor-pointer hover:opacity-90">
            Book now
          </div>
        </div>
        <div className="w-full relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1576502202167-791eca35a78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80')]  object-cover object-bottom ">
          <img
            src="https://unsplash.com/photos/GokBcmdOI6I/download?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="aspect-[16/10] md:aspect-auto object-cover  h-[700px]  opacity-0 "
          />
          <div className="absolute top-0 left-0 w-full h-full z-1 text-stroke-3 ">
            <h1 className="flex items-center justify-center h-full ml-3 text-6xl text-transparent md:text-9xl ">
              Educational tours
              <br />
              Animal interaction
            </h1>
          </div>
          <div className="px-[15px] md:mx-3 md:px-[40px] py-[8px] md:py-[10px] rounded-lg font-oswald bg-green-700 absolute md:bottom-2 left-0 text-white/[0.9] text-[15px] md:text-[25px] capitalize font-medium cursor-pointer hover:opacity-90">
            Book now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
