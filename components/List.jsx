"use client";
import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import LocationBox from "./LocationBox";

const List = ({ onCategoryChange }) => {
  const [selected, setSelected] = useState("hotels");
  const [rating, setRating] = useState("");
  const locations = [];

  return (
    <section className="w-full h-60">
      <div className="flex-row border-0 w-4/5 ml-8 border-red-500">
        <h1 className="font-medium md:text-left ml-4 sm:text-center text-xl">
          Filter your search
        </h1>
        <div className="flex flex-row gap-8 w-full border-0 border-black p-4">
          <FormControl className="w-1/2 border-4 border-blue-500">
            <InputLabel id="select-label-1">Type</InputLabel>
            <Select
              labelId="select-label-1"
              value={selected}
              onChange={(e) => {
                setSelected(e.target.value);
                onCategoryChange(e.target.value);
                console.log(e.target.value);
              }}
              className="w-full"
              style={{ maxWidth: "200px" }} // Set a max width
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="w-1/2 border-2 border-blue-600">
            <InputLabel id="select-label-2">Reviews</InputLabel>
            <Select
              labelId="select-label-2"
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              className="w-full"
              style={{ maxWidth: "200px" }} // Set a max width
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3</MenuItem>
              <MenuItem value={4}>Above 4</MenuItem>
              <MenuItem value={5}>Only 5</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {locations?.map((locations, i) => (
            <div key={i} className="w-full">
              <LocationBox locations={locations} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
