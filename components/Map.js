import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  const center = [-5.39097410577103, 105.27651931020318];

  return (
    // <div>Test</div>
    <MapContainer
      center={center}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: 200, width: "100%" }}
    >
      <Circle center={center} radius={200} pathOptions={{ color: "#7ebc33" }} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
