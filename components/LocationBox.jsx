import React from "react";

const LocationBox = ({ item }) => {
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const photo_ref = item?.photos ? item?.photos[0]?.photo_reference : "";
  return (
    <div
      className="w-[195px] flex-shrink-0 p-2
     rounded-lg shadow-md mb-1
     bg-white hover:scale-110 transition-all mt-[20px] cursor-pointer text-black"
    >
      <img
        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_ref}&key=${GOOGLE_API_KEY}`}
        width={180}
        height={80}
        className="rounded-lg object-cover h-[90px] "
      />
      <h1 className="text-[15px] font-bold"> {item.name}</h1>
      <h2 className="text-[12px] line-clamp-2 ">{item.formatted_address}</h2>
    </div>
  );
};

export default LocationBox;
