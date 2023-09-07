import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
export function Pricing() {
  const CheckCircle = BsCheck2Circle;

  return (
    <div className="mx-auto mt-8 max-w-7xl">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="px-4 py-10 lg:col-span-5 lg:px-0">
          <span className="inline-block p-1 px-3 mb-8 text-xs font-semibold border rounded-full">
            Pricing that fits your budget
          </span>
          <h1 className="text-3xl font-bold md:text-5xl">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="mt-8 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            magni, rem sed sint neque doloribus saepe veniam minima quaerat
            minus.
          </p>
          <div className="flex items-center w-full max-w-sm mt-8 space-x-2">
            <input
              className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border rounded-md border-black/30 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row lg:col-span-7">
          <div className="w-full p-5 md:w-3/4">
            <div className="bg-white border rounded-md bg-opacity-90">
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
                  Features included:
                </p>
                <ul className="mb-11">
                  <li className="flex items-center mb-4">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      Pottery - - Rs 2500
                    </p>
                  </li>
                  <li className="flex items-center mb-4">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      Bubble ring - Rs 3500
                    </p>
                  </li>
                  <li className="flex items-center mb-4">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      Art and Craft - Rs 3000
                    </p>
                  </li>
                  <li className="flex items-center mb-4">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      Tattoo Artist - 1500
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      Stone Art - Rs 3000
                    </p>
                  </li>
                  <li className="flex items-center mt-3">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      Game Coordinator - Rs 2500
                    </p>
                  </li>
                </ul>

                <div className="md:inline-block">
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Buy Now
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
