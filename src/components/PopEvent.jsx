import React from 'react'
import { useParams } from 'react-router-dom';
import lists from "../utils/all";
const PopEvent=()=> {
    const { id } = useParams();
    const Id=parseInt(id)
    const list = lists.find((list) => list.id == Id);
  return (
    <div className="relative w-screen h-screen pt-10 bg-white ">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
        
         
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
           {list.name}
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            {list.description}
          </p>
         
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover h-[500px] lg:aspect-[4/3] lg:h-[760px] xl:aspect-[16/9]"
            src={list.image}
            alt={list.name}
          />
        </div>
      </div>
    </div>
  )
}

export default PopEvent