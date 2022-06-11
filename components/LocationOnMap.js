import dynamic from "next/dynamic";
import React from "react";

const LocationOnMap = () => {
  const Map = dynamic(() => import("./Map"), { ssr: false });
  return <Map />;
};

export default LocationOnMap;
