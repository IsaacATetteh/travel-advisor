"use client";
import React, { useContext } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { UserLocationContext } from "../context/UserLocationContext";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  console.log(userLocation);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={userLocation}
      zoom={12}
    >
      <></>
    </GoogleMap>
  );
};

export default Map;
