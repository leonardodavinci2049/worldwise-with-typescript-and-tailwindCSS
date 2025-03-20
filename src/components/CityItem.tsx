import { Link } from "react-router-dom";
import { TypeCity } from "../type/typeCities";
import styles from "./CityItem.module.css";

const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

type CityItemProps = {
  city: TypeCity;
};

const CityItem = ({ city }: CityItemProps) => {
  const { cityName, emoji, date, id, position } = city;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  const flagemojiToPNG = (flag: string) => {
    const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt(0))
      .filter((codeUnit): codeUnit is number => codeUnit !== undefined)
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
            <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
