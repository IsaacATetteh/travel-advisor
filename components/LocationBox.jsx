import React, { useContext } from "react";
import { UserLocationContext } from "../context/UserLocationContext";

const LocationBox = ({ item }) => {
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const photo_ref = item?.photos ? item?.photos[0]?.photo_reference : "";
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const getDirection = () => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${item.geometry.location.lat},${item.geometry.location.lng}&travelmode=driving`;
    window.open(url);
  };

  return (
    <div
      className="w-[195px] flex-shrink-0 p-2
     rounded-lg shadow-md mb-10
     bg-white hover:scale-110 transition-all mt-[20px] cursor-pointer text-black border "
    >
      <img
        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_ref}&key=${GOOGLE_API_KEY}`}
        width={180}
        height={80}
        className="rounded-lg object-cover h-[90px] "
      />
      <h1 className="text-[15px] font-bold line-clamp-1"> {item.name}</h1>
      <h2 className="text-[12px] text-gray-400 font-semibold line-clamp-2 ">
        {item.formatted_address}
      </h2>
      <div className="text-blue-500 text-[12px] mt-1 p-1">
        <h2 className="flex items-center justify-between">
          <span
            className="underline hover:text-blue-400 font-semibold"
            onClick={() => getDirection()}
          >
            Get Directions
          </span>
        </h2>
      </div>
    </div>
  );
};

export default LocationBox;
