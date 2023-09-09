import React from "react";
import services from "../utils/service";

const Pricing = () => {
  return (
    <div className="w-full max-w-full px-10 py-5 mx-auto space-y-4 font-bold lg:px-20 lg:pt-20 bg-[#FFFFDD]">
      <h1 className="text-4xl font-extrabold leading-[50px] tracking-widest text-[#016A70] font-Oswald">
        Zootopia Ticket Price
      </h1>
      <div className="grid items-center w-full px-2 py-10 mx-auto space-y-4 max-w-7xl md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {services.map((service, i) => (
          <div key={i} className="border rounded-md">
            <img
              src={service.image}
              alt={service.name}
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {service.name}
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                {service.description.length > 65
                  ? service.description.slice(0, 64) + "..."
                  : service.description}
              </p>
              <h3 className="mt-3 text-base text-gray-700">
                Price :
                <span className="font-extrabold text-black">
                  {service.price}
                </span>{" "}
                Rs
              </h3>

              <button className=" mt-4 w-full text-sm px-4 py-3 group inline-flex items-center justify-center text-gray-700 bg-[#B4F698] hover:bg-[#B4F698]/90">
                Add to Cart
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-3 transition-transform duration-500 ease-in undefined group-hover:translate-x-1"
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
        ))}
      </div>
    </div>
  );
};

export default Pricing;
