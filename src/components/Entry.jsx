import React from "react";

const Entry = () => {
  return (
    <section className="py-32 md:py-20">
      <div className="container flex flex-col items-center justify-center w-full px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-widest text-green-700 uppercase">
            Pricing
          </span>
          <h2 className="text-4xl font-bold lg:text-5xl">
            Zootopia Ticket Price
          </h2>
        </div>
        <div className="grid  grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="p-6 space-y-6  text-gray-900 bg-[#c8b4ba] rounded shadow sm:p-8 bg-img1">
            <div className="space-y-2">
              <h4 className="text-2xl font-bold">Zootopia</h4>
              <span className="text-2xl  font-bold md:text-3xl">
                Entry charges
              </span>
            </div>
            <div className="inline-block  w-full px-5 py-1 text-xl font-semibold text-center border-2 border-gray-700 rounded md:text-3xl bg-img">
              &#8377; 499 Rs
            </div>
          </div>
          <div className="p-6 space-y-6   text-gray-900 bg-[#c8b4ba] rounded shadow sm:p-8 bg-img1">
            <div className="space-y-2">
              <h4 className="text-2xl  font-bold">animals</h4>
              <span className="text-2xl font-bold md:text-3xl">Treat feed</span>
            </div>
            <div className="inline-block w-full px-5 py-1 text-xl font-semibold text-center border-2 border-gray-700 rounded md:text-3xl bg-img">
              &#8377; 1250 Rs
            </div>
          </div>
          <div className="p-6 space-y-6  text-gray-900 bg-[#c8b4ba] rounded shadow-2xl bg-img1 hover:scale-105 sm:p-8">
            <div className="space-y-2">
              <h4 className="text-2xl font-bold">animals</h4>
              <span className="text-2xl  font-bold md:text-3xl">
                Feeding charges
              </span>
            </div>
            <div className="inline-block w-full px-5 py-1 text-xl font-semibold text-center border-2 border-gray-700 rounded md:text-3xl bg-img">
              &#8377; 250 Rs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entry;
