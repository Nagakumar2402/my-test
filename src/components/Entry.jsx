import React from "react";
import { IoTicket } from "react-icons/io5";
import { GiCow, GiMonkey } from "react-icons/gi";
const Entry = () => {
  return (
    <div className="max-w-screen-xl px-2 py-20 mx-auto lg:px-8">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <span className="font-bold tracking-widest text-green-700 uppercase">
          Pricing
        </span>
        <h2 className="text-4xl font-bold lg:text-5xl">
          Zootopia Ticket Price
        </h2>
      </div>
      <div className="grid grid-cols-1 text-center gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
        <div className="py-4 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
            <IoTicket className="text-blue-600 h-9 w-9" />
          </div>
          <h3 className="mt-8 text-xl font-semibold text-black capitalize md:text-2xl">
            Zootopia Entry charges
          </h3>
          <p className="mt-4 text-xl font-extrabold text-gray-600 md:text-2xl">
            &#8377; 499 Rs
          </p>
        </div>

        <div className="py-4 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
            <GiMonkey className="text-green-600 h-9 w-9" />
          </div>
          <h3 className="mt-8 text-xl font-semibold text-black capitalize md:text-2xl">
            animals Treat feed
          </h3>
          <p className="mt-4 text-xl font-extrabold text-gray-600 md:text-2xl">
            &#8377; 1250 Rs
          </p>
        </div>
        <div className="py-4 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
            <GiCow className="text-red-600 h-9 w-9" />
          </div>
          <h3 className="mt-8 text-xl font-semibold text-black capitalize md:text-2xl">
            animals Feeding charges
          </h3>
          <p className="mt-4 text-xl font-extrabold text-gray-600 md:text-2xl">
            &#8377; 250 Rs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Entry;
