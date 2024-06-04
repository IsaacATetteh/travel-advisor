"use client";
import { useEffect, useState } from "react";
import { getLocationId } from "./api";

import Hero from "../../components/Hero";
import { Grid } from "@mui/material";
import Map from "../../components/Map";
import List from "../../components/List";
import Search from "../../components/Search";

export default function Home() {
  const [locations, setLocations] = useState([]);

  return (
    <>
      <Hero />
      <Search />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={5}>
          <List />
        </Grid>
        <Grid item xs={12} md={7}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}
