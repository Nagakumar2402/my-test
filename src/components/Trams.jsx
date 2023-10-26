import React from "react";
import pic from "../assets/images/trms.jpg";
import {
  doNotFarmGuidelines,
  rulesAndInstructions,
  doFarmGuidelines,
} from "../utils/do-dont";
const Trams = () => {
  return (
    <div className="p-5 mx-auto text-gray-100 bg-gray-800 md:py-28 sm:p-10 md:p-16">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={pic}
          alt=""
          className="object-contain w-full bg-[#FAF9E4] h-60 sm:h-96"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 bg-gray-900 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md">
          <div className="space-y-2">
            <h1 className="inline-block text-2xl font-semibold sm:text-3xl">
              Guidelines for a Safe and Enjoyable Visit to the Petting Farm
            </h1>
            <p className="text-xs text-gray-400">
              By
              <span className="ml-2 text-base hover:underline">
                Madhulika Singh
              </span>
            </p>
          </div>
          <div>
            {rulesAndInstructions.map((item) => {
              return (
                <div key={item.id} className="text-gray-100">
                  <h4 className="text-lg font-semibold underline capitalize">
                    {item.category}
                  </h4>
                  <p className="mt-2 text-gray-500">{item.description?.[0]}</p>
                  <p className="mt-2 text-gray-500">{item.description?.[1]}</p>
                </div>
              );
            })}
          </div>
          <div className="text-gray-100">
            <h4 className="text-lg font-semibold underline capitalize">
              "do's" to keep in mind when visiting a petting farm:
            </h4>
            <ul className="ml-4 space-y-1 list-disc">
              {doFarmGuidelines.map((item) => {
                return (
                  <li key={item.id} className="mt-2">
                    <h1 className="text-lg font-bold md:text-xl">
                      {item.title}
                    </h1>
                    <p className="mt-2 text-gray-500">{item.description}</p>
                  </li>
                );
              })}
            </ul>
            <h3 className="mt-4 text-base font-semibold">
              Remember that the primary goal of a petting farm is to provide a
              safe and enjoyable experience for both visitors and animals. By
              following these do's, you can contribute to a positive and
              respectful visit for everyone involved.
            </h3>
          </div>
        </div>
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 bg-gray-900 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md">
          <div className="text-gray-100">
            <h4 className="text-lg font-semibold underline capitalize">
              Certainly, here are some "don'ts" to keep in mind when visiting a
              petting farm:
            </h4>
            <ul className="ml-4 space-y-1 list-disc">
              {doNotFarmGuidelines.map((item) => {
                return (
                  <li key={item.id} className="mt-2">
                    <h1 className="text-lg font-bold md:text-xl">
                      {item.title}
                    </h1>
                    <p className="mt-2 text-gray-500">{item.description}</p>
                  </li>
                );
              })}
            </ul>
            <h3 className="mt-4 text-base font-semibold">
              By adhering to these "don'ts," you can ensure a safe and enjoyable
              visit to a petting farm while also respecting the rules and
              well-being of the animals.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trams;
