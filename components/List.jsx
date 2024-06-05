import React, { useState } from "react";
import Image from "next/image";

const List = ({ resultList }) => {
  const [selected, setSelected] = useState("hotels");
  const [rating, setRating] = useState("");

  return (
    <section className="flex justify-center items-center border-0 border-green-500 mt-4 h-48 mb-10 w-[100%]">
      <div className="flex h-52 w-full border-0 border-blue-400 overflow-x-scroll">
        {resultList.map((item, index) => (
          <div
            key={index}
            className="w-2/5 lg:w-1/6 md:w-1/5 flex-shrink-0 border0 p-2 border-red-500"
          >
            <Image src="/tokyo.jpeg" width={200} height={50} />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
