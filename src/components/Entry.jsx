import React from 'react'
import { IoTicket } from "react-icons/io5";
import {GiCow , GiMonkey} from "react-icons/gi";
const Entry = ()=> {
  return (
    <div className="mx-auto max-w-7xl px-2 py-20 lg:px-8">
      <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-widest text-green-700 uppercase">
            Pricing
          </span>
          <h2 className="text-4xl font-bold lg:text-5xl">
            Zootopia Ticket Price
          </h2>
        </div>
      <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
        <div className='hover:scale-105 hover:shadow-2xl py-4'>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
         
            <IoTicket className="h-9 w-9 text-blue-600"/>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Zootopia  Entry charges</h3>
          <p className="mt-4 md:text-2xl font-extrabold  text-gray-600">
          &#8377; 499 Rs
          </p>
        </div>
       
        <div  className='hover:scale-105 hover:shadow-2xl py-4'>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
           
            <GiMonkey className="h-9 w-9 text-green-600"/>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">animals Treat feed</h3>
          <p className="mt-4 md:text-2xl font-extrabold  text-gray-600">
          &#8377; 1250 Rs
          </p>
        </div>
        <div  className='hover:scale-105 hover:shadow-2xl py-4'>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
           
            <GiCow className="h-9 w-9 text-red-600"/>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">animals Feeding charges</h3>
          <p className="mt-4 md:text-2xl font-extrabold  text-gray-600">
          &#8377; 250 Rs
          </p>
        </div>
      </div>
    </div>
  )
}

export default Entry