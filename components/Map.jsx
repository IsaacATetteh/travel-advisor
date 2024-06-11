"use client";
import { FaMapMarkerAlt } from "react-icons/fa";
import React, { useContext, useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { UserLocationContext } from "../context/UserLocationContext";

const Map = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const [containerStyle, setContainerStyle] = useState({
    width: "60%",
    height: "800px",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setContainerStyle({
          width: "90%",
          height: "450px",
        });
      } else {
        setContainerStyle({
          width: "60%",
          height: "800px",
        });
      }
    };

    // Set the initial style
    handleResize();

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Remove the event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex justify-center">
      <GoogleMap
        classname="pl-8"
        mapContainerStyle={containerStyle}
        center={userLocation}
        zoom={12}
      >
        <Marker position={userLocation} />{" "}
      </GoogleMap>
    </section>
  );
};

export default Map;
