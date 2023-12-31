import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CS from "../assets/images/c2.1.png";
import CS1 from "../assets/images/ce.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
const HeroBanner = () => {
  return (
    <div className="relative  text-white text-[20px] w-full  mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="hidden rounded-full absolute px-2 left-0 bottom-1/2 w-[30px] md:w-[50px] h-[30px] md:h-[50px] text-black bg-[#fcfbeb8e] z-10 md:flex items-center justify-center cursor-pointer  duration-200 transition-all"
          >
            <MdOutlineArrowForwardIos className="text-sm rotate-180 md:text-xl hover:scale-110" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="hidden absolute rounded-full right-0 bottom-1/2 w-[30px] md:w-[50px] h-[30px] md:h-[50px] text-black bg-[#fcfbeb8e] z-10 md:flex items-center justify-center cursor-pointer  duration-200 transition-all"
          >
            <MdOutlineArrowForwardIos className="text-lg font-bold md:text-xl hover:scale-110" />
          </div>
        )}
      >
        <div className="w-full overflow-hidden font-Oswald ">
          <div className="relative overflow-hidden ">
           
          <img
              src={CS}
              alt=""
              width="2000"
              height="990"
              loading="eager"
              sizes="(min-width: 1601px) 2000px,(min-width: 768px) and (max-width: 1600px) 1200px,(max-width: 767px) 100vw, 900px"
            />
          </div>
        </div>
        <div className="w-full overflow-hidden font-Oswald ">
          <div className="relative overflow-hidden ">
            <img
              src={CS1}
              alt=""
              width="2000"
              height="990"
              loading="eager"
              sizes="(min-width: 1601px) 2000px,(min-width: 768px) and (max-width: 1600px) 1200px,(max-width: 767px) 100vw, 900px"
            />
          </div>
        </div>
      </Carousel>
      <div className="absolute z-1 w-[200px] md:w-[300px] flex items-center justify-center h-28 md:h-48 green-top right-0 -bottom-20 md:-bottom-32 border-2 md:right-36 rounded-2xl">
        <div className="py-8 px-9">
          <p className="font-bold leading-relaxed text-gray-900 border-b-2 border-gray-200 md:mb-2">
            Timings:
          </p>
          <ul className="md:text-lg text-[#484646] md:m-5 font-ComicSans">
            <li className="flex items-center">
              <IoTimerOutline
                className="text-base font-bold md:mr-2 md:text-xl"
                size={16}
              />
              <p className="text-sm font-semibold leading-normal md:text-xl ">
                10 am - 01 pm
              </p>
            </li>
            <li className="flex items-center">
              <IoTimerOutline
                className="text-base font-bold md:mr-2 md:text-xl"
                size={16}
              />
              <p className="text-sm font-semibold leading-normal md:text-xl">
                2 pm - 5 pm
              </p>
            </li>
            <li className="flex items-center">
              <IoTimerOutline
                className="text-base font-bold md:mr-2 md:text-xl"
                size={16}
              />
              <p className="text-sm font-semibold leading-normal md:text-xl">
                4 pm -7 pm
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
