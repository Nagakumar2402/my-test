import React from "react";

const Entry = () => {
  return (
    <section className="py-20 ">
      <div className="container flex flex-col items-center justify-center w-full px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center ">
          <span className="font-bold tracking-widest text-green-700 uppercase">
            Pricing
          </span>
          <h2 className="text-4xl font-bold lg:text-5xl">
            Zootopia Ticket Price
          </h2>
        </div>
        <div className="flex flex-wrap items-stretch -mx-4">
          <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="p-6 space-y-6 text-gray-400 bg-gray-900 rounded shadow sm:p-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Zootopia</h4>
                <span className="text-3xl font-bold md:text-5xl">
                  Entry charges
                </span>
              </div>

              <div className="inline-block w-full px-5 py-3 text-3xl font-semibold text-center text-black bg-green-700 rounded">
                499 Rs
              </div>
            </div>
          </div>
          <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-col p-6 space-y-6 text-gray-900 bg-green-700 rounded shadow sm:p-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">animals</h4>
                <span className="text-3xl font-bold md:text-5xl">
                  Feeding charges
                </span>
              </div>

              <div className="inline-block w-full px-5 py-3 text-3xl font-semibold text-center text-white bg-gray-900 rounded">
                250 Rs
              </div>
            </div>
          </div>

          <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="p-6 space-y-6 text-gray-400 bg-gray-900 rounded shadow sm:p-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">animals</h4>
                <span className="text-3xl font-bold md:text-5xl">
                  Treat feed
                </span>
              </div>
              <p className="text-gray-400 ">
                (Where one can buy the food in large quantity and feed the
                animals)
              </p>

              <div className="inline-block w-full px-5 py-3 text-3xl font-semibold text-center text-black bg-green-700 rounded">
                1250 Rs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entry;
