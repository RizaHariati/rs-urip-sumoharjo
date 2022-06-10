import React from "react";

import dynamic from "next/dynamic";
const LocationOnMap = () => {
  const Map = dynamic(() => import("../components/Map.js"), {
    ssr: false,
  });
  return <Map />;
};

export default LocationOnMap;
