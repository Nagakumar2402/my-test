import React from "react";
import { services1, services2 } from "../utils/service";
import story from "../assets/images/story.png";
const Pricing = () => {
  return (
    <div className="w-full px-10 py-5 mx-auto space-y-4 font-bold lg:px-20 lg:py-10 ">
      <h1 className="text-4xl font-extrabold leading-[50px] tracking-widest text-[#016A70] font-ComicSans">
        Zootopia Ticket Price
      </h1>

      <div className="grid items-center w-full max-w-full px-2 py-10 mx-auto space-y-4 md:grid-cols-2 md:gap-10 md:space-y-0 lg:grid-cols-3">
        {services1.map((service, i) => (
          <div key={i} className="overflow-hidden ">
            <img
              src={service.image}
              alt={service.name}
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[250px] lg:h-[320px] hover:scale-105 cursor-pointer transition-all duration-200"
            />
            <div className="flex flex-col items-center justify-center p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {service.name}
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                {service.description.slice(0, 32) + "..."}
              </p>
              <h3 className="mt-3 text-base text-gray-700">
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
      <div className=" h-64 lg:h-[500px] overflow-hidden -mx-5 md:-mx-16  rounded-md flex items-center ">
        <img
          src={story}
          alt=""
          className="w-full h-full  aspect-[16/9] md:aspect-auto rounded-lg "
        />
      </div>
      <div className="grid items-center w-full max-w-full px-2 py-10 mx-auto space-y-4 md:py-20 md:grid-cols-2 md:gap-10 md:space-y-0 lg:grid-cols-3">
        {services2.map((service, i) => (
          <div key={i} className="overflow-hidden ">
            <img
              src={service.image}
              alt={service.name}
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[250px] lg:h-[320px] hover:scale-105 cursor-pointer transition-all duration-200"
            />
            <div className="flex flex-col items-center justify-center p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {service.name}
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                {service.description.slice(0, 32) + "..."}
              </p>
              <h3 className="mt-3 text-base text-gray-700">
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
