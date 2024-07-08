"use client";
import React, { useContext, useState } from "react";
import { Marker, OverlayView } from "@react-google-maps/api";
import LocationBox from "./LocationBox";
import { SelectedItemContext } from "../context/SelectedItemContext";

function Markers({ item }) {
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);
  return (
    <div>
      <Marker
        position={item.geometry.location}
        onClick={() => setSelectedItem(item)}
      >
        {selectedItem.reference === item.reference ? (
          <OverlayView
            position={item.geometry.location}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="w-[300px] ml-[-100px] mt-[-230px]">
              <LocationBox item={item} showDirection={true} />
            </div>
          </OverlayView>
        ) : null}
      </Marker>
    </div>
  );
}

export default Markers;
