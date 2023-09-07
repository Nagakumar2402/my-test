import React from "react";
import services from "../utils/service";

export function Pricing() {
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
                {service.description}
              </p>
              <h3 className="mt-3 text-base font-extrabold text-gray-900">
                Price :{service.price} Rs
              </h3>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-[#B4F698] px-2 py-1.5 text-xs border font-semibold text-black shadow-sm hover:bg-[#B4F698]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
