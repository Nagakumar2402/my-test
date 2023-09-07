import React from "react";
import lists from "../utils/all";
const Service = () => {
  return (
    <div className="bg-green-50 ">
      <div className="w-full max-w-full px-10 py-5 mx-auto space-y-4 font-bold lg:px-20 lg:pt-20">
        <h1 className="text-4xl font-extrabold leading-[50px] tracking-widest text-green-800 font-Oswald ">
          We have <br />
          many <span className="text-green-900">Category Event</span>
        </h1>
        <p className="py-5 text-lg font-thin text-justify text-gray-500">
          <span className="font-bold ">At Zootopia - The Funyard</span>, we
          believe in promoting empathy, respect for animals, and responsible
          animal care, making every visit a valuable learning experience.
          Whether you're looking to celebrate a birthday or simply spend quality
          time with animals, we offer a one-of-a-kind adventure that's perfect
          for all animal enthusiasts.
        </p>
      </div>
      <div className="grid items-center w-full max-w-full px-10 py-10 mx-auto space-y-4 lg:px-20 lg:py-20 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {lists.map((list) => (
          <div
            key={list.id}
            className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
          >
            <img
              src={list.Image}
              alt={list.name}
              className="z-0 object-cover w-full h-full rounded-md"
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute text-left bottom-4 left-4">
              <h1 className="text-lg font-semibold text-white">{list.name}</h1>
              <p className="mt-2 text-sm text-gray-300">{list.description}</p>
              <button className="inline-flex items-center mt-2 text-sm font-semibold text-white cursor-pointer">
                More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
