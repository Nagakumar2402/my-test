import React from "react";
import services from "../utils/service";

const Pricing = () => {
  return (
    <div className="w-full max-w-[1366px] px-10 py-5 mx-auto space-y-4 font-bold lg:px-20 lg:pt-20 ">
      <h1 className="text-4xl font-extrabold leading-[50px] tracking-widest text-[#016A70] font-ComicSans">
        Zootopia Ticket Price
      </h1>
      <div className="grid items-center w-full px-2 py-10 mx-auto space-y-4 max-w-[1366px] md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {services.map((service, i) => (
          <div key={i} className="p-1 border rounded-md">
            <img
              src={service.image}
              alt={service.name}
              className="aspect-[16/9] w-full shadow-xl rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
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
