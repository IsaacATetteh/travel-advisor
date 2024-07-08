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
  const [rating, setRating] = useState("all");
  const [resultList, setResultList] = useState([]);
  useEffect(() => {
    getGooglePlace(category);
  }, [category, rating]);

  const getGooglePlace = (category) => {
    GlobalApi.getGooglePlace(category, userLocation.lat, userLocation.lng).then(
      (response) => {
        console.log(response.data.product.results);
        let results = response.data.product.results;
        console.log(rating);
        if (rating > 0) {
          results = results.filter((item) => item.rating >= rating);
        }
        setResultList(results);
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
        onRatingChange={(value) => {
          setRating(value);
        }}
      />
      <Map resultList={resultList} />
      <List resultList={resultList} />
    </>
  );
}
