import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {

  const navigate = useNavigate();
const [searchParams] = useSearchParams();

const lat = searchParams.get("lat");
const lng = searchParams.get("lng");

  return <div className={styles.mapContainer} onClick={() => navigate("form")}>
    <h2>Map</h2>
    <p className="text-black font-bold">Latitude: {lat}</p>
    <p className="text-black font-bold">Longitude: {lng}</p>
    <div className={styles.map}>
      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=10&size=600x300&key=YOUR_API_KEY`}
        alt="Map"
      />
    </div>
    <button>
     CLICK ME
    </button>
  </div>;
};

export default Map;
