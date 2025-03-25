import { useEffect } from "react";
import ButtonBack from "../../../../common-components/ButtonBack";
import Spinner from "../../../../common-components/Spinner";
import useCities from "../../../../contexts/cities/useCities";
import styles from "./City.module.css";
import { useParams } from "react-router-dom";

const formatDate = (date?: string): string => {
  if (!date) return ""; // Retorna string vazia se não houver data
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
};

function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      if (id) {
        const cityId = parseInt(id, 10);
        if (!isNaN(cityId)) {
          getCity(cityId);
        }
      }
    },
    [id, getCity]
  );

  const { cityName, emoji, date, notes } = currentCity;
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || "")}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <ButtonBack />
      </div>
    </div>
  );
}

export default City;
