import React from "react";
import { BiMapPin } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
export function Location() {
  const CheckCircle = BsCheck2Circle;

  return (
    <div className="mx-auto my-8 max-w-7xl bg-[#FFF6E0]">
      <div className="px-4 lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="px-4 py-10 lg:col-span-5 lg:px-0">
          <span className="inline-block p-1 px-3 mb-8 text-xs font-semibold border rounded-full">
            Pricing that fits your budget
          </span>
          <h1 className="text-3xl font-bold md:text-5xl">Zootopia Timing</h1>
          <div className="flex flex-col my-8 gap-y-6 md:flex-row lg:justify-around">
            <div className="px-2 space-y-3 md:w-1/2 ">
              <BiMapPin className="w-5 h-5" />
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="w-full text-xl font-semibold text-gray-900">
                Zootopia- The Funyard
              </p>
              <p className="w-full text-base text-gray-700">
                Near Duke Horse Riding
              </p>
              <p className="text-sm font-medium">
                Opposite Urban Akhara Sector 58
              </p>
              <p className="text-sm font-medium">Gurgaon, Haryana</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row lg:col-span-7">
          <div className="w-full p-5 md:w-3/4">
            <div className="bg-white border rounded-md bg-opacity-90 font-Oswald">
              <div className="border-b ">
                <div className="px-9 py-7">
                  <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                    Standard
                  </h3>
                  <p className="font-medium leading-relaxed text-gray-500">
                    Chargeable activities for a group of 10 or more (To be
                    booked in advance)
                  </p>
                </div>
              </div>
              <div className="pt-8 px-9 pb-9">
                <p className="mb-6 font-medium leading-relaxed text-gray-600">
                  Timings:
                </p>
                <ul className="mb-11">
                  <li className="flex items-center mb-4">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      10 am - 01 pm
                    </p>
                  </li>
                  <li className="flex items-center mb-4">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">2 pm - 5 pm</p>
                  </li>
                  <li className="flex items-center mb-4">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">4 pm -7 pm</p>
                  </li>
                </ul>

                <div className="md:inline-block">
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-semibold text-white capitalize bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
