import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

import styles from "./Map.module.css";
import useCities from "../../../contexts/cities/useCities";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { useUrlPosition } from "../../../hooks/useUrlPosition";
import ButtonDefault from "../../../common-components/ButtonDefault";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation({ lat: 40, lng: 0 });

  const [mapLat, mapLng] = useUrlPosition();

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );
console.log("geolocationPosition: ", geolocationPosition);

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <ButtonDefault type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </ButtonDefault>
       )} 
      <MapContainer
        center={mapLat ? [mapLat, mapLng] : mapPosition}
        zoom={5}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <DetectClick />
        <ChangeCenter position={mapLat ? [mapLat, mapLng] : mapPosition} />
      </MapContainer>
    </div>
  );
};

// Componente para atualizar o centro do mapa
function ChangeCenter({ position }: { position: [number, number] }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}

export default Map;
