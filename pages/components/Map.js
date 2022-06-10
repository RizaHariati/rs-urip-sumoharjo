import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  const position = [-5.390984787131325, 105.27655149657487];
  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: 200, width: "100%" }}
    >
      <Circle
        center={position}
        radius={180}
        pathOptions={{ color: "#7ebc33" }}
      />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>We&#39;re here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
