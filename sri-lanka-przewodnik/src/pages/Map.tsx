import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { places } from "../data/places";
import "../styles/Map.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapPage = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [renderMap, setRenderMap] = useState(false);

  useEffect(() => {
    setRenderMap(true); // renderuj mapę po mount
    return () => setRenderMap(false); // wymuś unmount mapy przy opuszczeniu strony
  }, []);

  return (
    <div className="map-container" ref={mapContainerRef}>
      {renderMap && (
        <MapContainer
          center={[7.8731, 80.7718]}
          zoom={7}
          style={{ height: "90vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {places.map((place, idx) => (
            <Marker key={idx} position={[place.lat, place.lng]}>
              <Popup>
                <strong>{place.name}</strong><br />
                {place.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default MapPage;
