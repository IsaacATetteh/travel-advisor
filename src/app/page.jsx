"use client";
import { useContext, useEffect, useState } from "react";
import { getLocationId } from "./api";
import GlobalApi from "../../Shared/GlobalApi";
import Hero from "../../components/Hero";
import { Grid } from "@mui/material";
import Map from "../../components/Map";
import List from "../../components/List";
import Search from "../../components/Search";
import { UserLocationContext } from "../../context/UserLocationContext";

export default function Home() {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const [category, setCategory] = useState("hotels");
  const [resultList, setResultList] = useState([]);
  useEffect(() => {
    getGooglePlace(category);
  }, [category]);

  const getGooglePlace = (category) => {
    GlobalApi.getGooglePlace(category, userLocation.lat, userLocation.lng).then(
      (response) => {
        console.log(response.data.product.results);
        setResultList(response.data.product.results);
      }
    );
  };

  return (
    <>
      <Hero />
      <Search
        onCategoryChange={(value) => {
          setCategory(value);
          console.log(value);
        }}
      />
      <div className="flex flex-col col-span-2">
        {" "}
        <Map resultList={resultList} />
        <List resultList={resultList} />
      </div>
    </>
  );
}
