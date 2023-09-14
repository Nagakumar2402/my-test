import React, { useState, useEffect } from "react";
import lists from "../utils/all";
import Swal from "sweetalert2";
const Events = () => {
  const showSweetAlert = (imageUrl) => {
    Swal.fire({
      imageUrl: imageUrl,
      imageHeight: 660,
      showCloseButton: true,
      imageAlt: "A tall image",
      backdrop: `rgba(0,0,0,0.4)`,
      background: " rgba(0, 0, 0, 0.2) ",
      showConfirmButton: false,
      customClass: {
        closeButton: "custom-swal-close-button",
      },
    });
  };

  return (
    <div className="pt-16 md:pt-5">
      <div
        className="w-full px-10 py-5 mx-auto space-y-4 font-bold max-w-[1366px] lg:px-20 lg:py-10"
        id="top"
      >
        <h1 className="text-4xl font-extrabold leading-[50px] tracking-widest text-green-700 font-ComicSans ">
          We have <br />
          many <span className="text-[#016A70]">Category Event</span>
        </h1>
        <p className="py-5  leading-10 font-ComicSans font-semibold tracking-wide text-gray-500  lg:w-[44%] text-justify text-base ">
          <span className="font-extrabold font-Oswald">
            At Zootopia - The Funyard
          </span>
          , we believe in promoting empathy, respect for animals, and
          responsible animal care, making every visit a valuable learning
          experience. Whether you're looking to celebrate a birthday or simply
          spend quality time with animals, we offer a one-of-a-kind adventure
          that's perfect for all animal enthusiasts.
        </p>
      </div>
      <div className="grid items-center w-full px-10 py-10 mx-auto space-y-4 max-w-[1366px] lg:px-20 lg:py-20 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {lists.map((list) => (
          <div
            key={list.id}
            className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[350px]  cursor-pointer"
            onClick={() => showSweetAlert(list.image)}
          >
            <img
              src={list.image}
              alt={list.name}
              className="z-0 object-cover w-full rounded-md responsive-image  md:h-[350px] max-w-full h-auto"
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white ">{list.name}</h1>
              <button className="flex py-3 mt-4 text-sm font-semibold text-white cursor-pointer text-end">
                More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
