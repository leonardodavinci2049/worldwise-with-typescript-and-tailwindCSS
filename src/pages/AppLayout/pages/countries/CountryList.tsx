import { TypeCity } from "../../../../type/typeCities";
import Message from "../../../../common-components/Message";
import Spinner from "../../../../common-components/Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";

type CountryProps = {
  cities: TypeCity[];
  isLoading: boolean;
};

interface Country {
  country: string;
  emoji: string;
}

const CountryList = ({ cities, isLoading }: CountryProps) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce<Country[]>((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
