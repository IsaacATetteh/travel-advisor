import React, { useState, useContext } from "react";
import LocationBox from "./LocationBox";
import { SelectedItemContext } from "../context/SelectedItemContext";
const List = ({ resultList }) => {
  const [selected, setSelected] = useState("hotels");
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);

  const [rating, setRating] = useState("");

  return (
    <section className="flex justify-center lg:w-full text-white  border-purple-500 border-0">
      <div className="flex w-[95%] md:w-[70%]  border-black h-[220px] overflow-x-scroll overflow-y-hidden">
        {resultList.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedItem(item);
            }}
          >
            <LocationBox className="" key={item.name} item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
