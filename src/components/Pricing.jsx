import React from "react";
import { services1, services2 } from "../utils/service";
import story from "../assets/images/story.png";
const Pricing = () => {
  return (
    <div
      className="w-full px-10 py-5 mx-auto space-y-4 font-bold lg:px-20 lg:py-10 "
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <h1 className="text-4xl font-extrabold leading-[50px] tracking-widest text-[#016A70] font-ComicSans">
        Add-On Packages
      </h1>
      <p className="text-base font-semibold leading-10 tracking-wide text-justify text-gray-500 font-ComicSans">
        Chargeable activities for a group of 10 or more (To be booked in
        advance)
      </p>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="grid items-center w-full max-w-full px-2 py-10 mx-auto space-y-4 md:grid-cols-2 md:gap-10 md:space-y-0 lg:grid-cols-3"
      >
        {services1.map((service, i) => (
          <div key={i} className="overflow-hidden ">
            <img
              src={service.image}
              alt={service.name}
              className="aspect-[16/9] w-full md:aspect-auto md:h-[250px] lg:h-[300px] object-contain rounded-md border-2 border-white hover:scale-110 cursor-pointer transition-all duration-300 "
            />
            <div className="flex flex-col items-center justify-center p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {service.name}
              </h1>
              <p className="mt-3 text-sm text-center text-gray-600">
                {service.description}
              </p>
              <h3 className="mt-3 text-xl text-gray-700">
                Price :
                <span className="font-extrabold text-black">
                  {service.price}
                </span>{" "}
                Rs
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="flex items-center -mx-5 md:-mx-16 md:py-1"
      >
        <img
          src={story}
          alt=""
          className="rounded-xl"
          width="2400"
          height="1080"
          loading="eager"
          sizes="(min-width: 1601px) 2000px, (min-width: 768px) and (max-width: 1600px) 1200px, (max-width: 767px) 100vw, 900px"
        />
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="grid items-center w-full max-w-full px-2 py-10 mx-auto space-y-4 md:py-20 md:grid-cols-2 md:gap-10 md:space-y-0 lg:grid-cols-3"
      >
        {services2.map((service, i) => (
          <div key={i} className="overflow-hidden ">
            <img
              src={service.image}
              alt={service.name}
              className="aspect-[16/9] w-full md:aspect-auto md:h-[250px] lg:h-[320px] object-contain  rounded-md  hover:scale-110 cursor-pointer transition-all duration-200"
            />
            <div className="flex flex-col items-center justify-center p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {service.name}
              </h1>
              <p className="mt-3 text-sm text-center text-gray-600">
                {service.description}
              </p>
              <h3 className="mt-3 text-xl text-gray-700">
                Price :
                <span className="font-extrabold text-black">
                  {service.price}
                </span>{" "}
                Rs
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
