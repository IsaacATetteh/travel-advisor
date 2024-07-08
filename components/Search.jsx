"use client";
import React, { use } from "react";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { getLocationId } from "@/app/api";

const Search = ({ onCategoryChange, onRatingChange }) => {
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
    <section className="relative border-red-500 mb-10  h-52 mt-12 flex flex-col items-center">
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
        className="flex justify-center   text-xs border-purple-500 space-x-2 w-[95%] md:w-3/4 lg:w-1/2"
      >
        <select
          value={rating}
          placeholder="Rating"
          onChange={(e) => {
            setRating(parseFloat(e.target.value));
            onRatingChange(parseFloat(e.target.value));
          }}
          type="text"
          className="bg-[#FFEDE9] rounded-full h-9  md:w-72  px-4"
        >
          <option value="" disabled selected hidden>
            Rating
          </option>
          <option value="">All</option>
          <option value={3}>Above 3</option>
          <option value={4}>Above 4</option>
          <option value={4.5}>Above 4.5</option>
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
          className="bg-[#FFEDE9] rounded-full h-9  md:w-72  px-4"
        >
          <option>Hotels</option>
          <option>Resturants</option>
        </select>
      </form>
    </section>
  );
};

export default Search;
