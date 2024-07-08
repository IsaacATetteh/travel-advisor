import React, { useState } from "react";
import LocationBox from "./LocationBox";

const List = ({ resultList }) => {
  const [selected, setSelected] = useState("hotels");
  const [rating, setRating] = useState("");

  return (
    <section className="flex justify-center lg:w-full lg:h-full h-screen text-white  border-purple-500">
      <div className="flex w-[95%] md:w-[70%] h-[420px] border-black overflow-x-scroll overflow-y-hidden">
        {resultList.map((item, index) => (
          <LocationBox className="" key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default List;
