"use client";
import React, { use } from "react";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { getLocationId } from "@/app/api";

const Search = ({ onCategoryChange }) => {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState("hotels");
  const [rating, setRating] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await getLocationId(query);
    const names = result.data.map((item) => item.name);
    console.log(names);
  };

  return (
    <section className="relative border- border-red-500 mb-10  h-52 mt-12 flex flex-col items-center">
      <div className="items-center justify-center border-0 border-blue-500 flex-col flex text-center">
        <p className="uppercase text-orange-500 font-medium">Explore now</p>
        <h1 className="mt-4 mb-2 text-3xl font-bold">
          Find Your Dream Destination
        </h1>
        <p className="text-sm mb-8">
          Fill in the field below to find attraction spots for your location
        </p>
      </div>
      <form
        action=""
        className="flex items-center border-0  text-xs md:px-0 border-purple-500 space-x-2 w-full md:w-3/4 lg:w-1/2"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Location"
          className="bg-[#FFEDE9] rounded-full h-9 w-1/2 text-sm px-4"
        />
        <select
          value={rating}
          placeholder="Rating"
          onChange={(e) => {
            setRating(e.target.value);
          }}
          type="text"
          className="bg-[#FFEDE9] rounded-full h-9 w-1/2  px-4"
        >
          <option value="" disabled selected hidden>
            {" "}
            Rating{" "}
          </option>
          <option>All</option>
          <option>Above 3</option>
          <option>Above 4</option>
          <option>Above 4.5</option>
        </select>
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            onCategoryChange(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
          placeholder="e.g London"
          className="bg-[#FFEDE9] rounded-full h-9 w-1/2  px-4"
        >
          <option>Hotels</option>
          <option>Resturants</option>
        </select>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#F35D24]  gap-1 text-white rounded-full h-9 w-1/2 flex items-center justify-center "
        >
          <IoIosSearch />
          <p className="text-xs">Search</p>
        </button>
      </form>
    </section>
  );
};

export default Search;
