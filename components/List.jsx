import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";

const List = ({ onCategoryChange }) => {
  const [selected, setSelected] = useState("hotels");
  const [rating, setRating] = useState("");

  return (
    <section className="relative border-2 mt-10 border-green-500 h-24 flex justify-center">
      <div className="flex items-center lg:w-1/4 md:w-1/3 w-1/2 border-2  border-red-500 gap-4 h-10"></div>
    </section>
  );
};

export default List;
