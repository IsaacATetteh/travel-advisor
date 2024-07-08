import React from "react";
import { Marker } from "@react-google-maps/api";

function Markers({ result }) {
  return (
    <div>
      <Marker position={result.geometry.location} />
    </div>
  );
}

export default Markers;
