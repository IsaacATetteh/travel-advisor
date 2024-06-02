"use client";
import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="relative border-0 border-red-500 h-60 pt-10 flex flex-col items-center mb-10">
      <div className="items-center justify-center border-0 border-blue-500 flex-col flex text-center">
        <p className="uppercase text-orange-500 font-medium">Explore now</p>
        <h1 className="mt-4 text-3xl font-bold">Find Your Dream Destination</h1>
        <p className="text-sm">
          Fill in the field below to find attraction spots for your location
        </p>
      </div>
      <div className="flex flex-col border-0 border-red-500 mt-4 w-full items-center justify-center">
        <form
          action=""
          className="flex items-center space-x-2 w-3/4 md:w-1/3 lg:w-1/4"
        >
          <input
            type="text"
            placeholder="e.g London"
            className="bg-[#FFEDE9] rounded-full h-9 w-1/2  px-4"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#F35D24] text-sm gap-1 text-white rounded-full h-9 w-1/2 flex items-center justify-center "
          >
            <IoIosSearch />
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
