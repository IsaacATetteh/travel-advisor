import { FaMapMarkerAlt } from "react-icons/fa";
import React, { useContext, useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { UserLocationContext } from "../context/UserLocationContext";
import { useMediaQuery } from "@mui/material";
import Markers from "./Markers";
import { SelectedItemContext } from "../context/SelectedItemContext";
const Map = ({ resultList }) => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const isMobile = useMediaQuery("(max-width: 600px)");
  const zoomLevel = isMobile ? 10 : 12;
  const [containerStyle, setContainerStyle] = useState({
    width: "100%",
    height: isMobile ? "50vh" : 800,
  });

  useEffect(() => {
    const updateContainerStyle = () => {
      const height = isMobile ? "50vh" : 650;
      const width = isMobile ? "100%" : "70%";
      setContainerStyle({
        width: width,
        height: height,
      });
    };

    updateContainerStyle();
    window.addEventListener("resize", updateContainerStyle);

    return () => {
      window.removeEventListener("resize", updateContainerStyle);
    };
  }, [isMobile]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mx-auto border-0 border-black md:w-full  py-0 mt-5 md:mt-0 w-[95%] sm:py-12  lg:py-0 flex justify-center">
      <GoogleMap
        classname=""
        mapContainerStyle={containerStyle}
        center={
          selectedItem.name ? selectedItem.geometry.location : userLocation
        }
        zoom={zoomLevel}
        margin={[50, 50, 50, 50]}
        resultList={resultList}
      >
        <Marker position={userLocation} />
        {resultList.map((item, index) => (
          <Markers item={item} key={index} />
        ))}
      </GoogleMap>
    </section>
  );
};

export default Map;
